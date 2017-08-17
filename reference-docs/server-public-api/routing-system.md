# Routing System

## Use case

A delivery **app** is asked to deliver a **document** located at a **path**. To resolve a path to a document, a delivery app can use the Routing system endpoint from the Livingdocs core.

1. Delivery **app** receives `GET /article/adventure/i-m-on-the-road-again-09fed8` on the channel `web`
1. Delivery **app** calls public API of the Livingdocs **server**: `GET https://livingdocs-server/api/routing/web?path=/article/adventure/i-m-on-the-road-again-09fed8`
1. Livingdocs **server** response looks like:

    ```json
    [{
      "type": "document",
      "resource": {
        "id": 173,
        "statusCode": 200
      }
    }]
    ```

1. (Down the road, the delivery **app** will ask the Livingdocs **server** for an HTML rendering of the latest publication of this document and serve it to the client)

## Architecture

The routing system is composed of three parts:

1. The *routing metadata plugin*,
1. The *routes indexer*, and
1. The *routes cache*.

Rough picture/story of how these components/concepts are tied together:

There is a document titled *I'm on the road again!*, its documentId is `173`, it also has a custom publicId `09fed8`. It is an *article* in the project projectId `5`, filed in the category *adventure*.

The plugin's responsibility is to generate a path (`/article/adventure/i-m-on-the-road-again-09fed8`) and slugs (`i-m-on-the-road-again`) for a publication. The user hits 'publish', the routing plugin generates and writes the path and slug to the publication metadata. At the end of the 'publish' call, a publication event is written to the database.

The routes indexer sees this new publication event. It first puts the routing information for this publication (found in the publication metadata which the *routing metadata plugin* wrote) in the *routes cache*: `"doc:173" => {path: …, slug: …, …}`. The routes indexer, through another intervaled function, puts `"path:5:/article/adventure/i-m-on-the-road-again-09fed8" => {id: 173, resource: {status: 200, …}, …}` in the *routes cache*.

The Delivery **app** gets a GET request for `/article/adventure/i-m-on-the-road-again-09fed8`. It asks the Livingdocs **server**; its API does a lookup in the routes cache; this key being in the routes cache it directly returns the corresponding value, which are telling the Delivery **app** about which document this routes corresponds to, which is here the document `173`.


### Routing Metadata Plugin

Taking a look at our [routing metadata plugin example](https://github.com/upfrontIO/livingdocs-server/blob/master/plugins/metadata/li-default-routing.js) should help you understand how to write your own.

This plugin is responsible for **generating and writing** routing data into a publication metadata. It should also export a function with the following signature `documentIdExtractor = (path) => documentId`.

It is based on the routing info found in each publication metadata that the *routes cache* will get populated with routes to documents. Therefore the *routing metadata plugin* hooks into documents `onPublish` and returns an object `{path, slug}` which gets written under the key `routing` in the publication metadata.

The `documentIdExtractor` function will be used in case an exact route match cannot be found. For instance if the cache has `/article/adventure/i-m-on-the-road-again-09fed8` but the incoming request is for `/article/adventure/im-on-the-road-again-09fed8` (notice the typo in the path!), the path will not be found in the *routes cache* and the routing system endpoint will resort to calling `documentIdExtractor('/article/adventure/i-m-on-the-road-again-09fed8')`, which could for example detect the presence of the public ID `09fed8` and return the corresponding `documentId` `173`. This way the routing system will still be able to respond to the Delivery **app**, which could in turn redirect its user to the correct path for this resource, `/article/adventure/i-m-on-the-road-again-09fed8`.

### Routes Indexer

The *routes indexer* is a procedure running at a configurable interval. It runs at most once per interval duration (i.e. if one iteration takes longer than the interval, the next iteration will only start as soon as the previous one is done, they cannot overlap).

The *routes indexer* watches the publication events, polling the database for events that happened after the last indexed event, `lastIndexedEvent` being a special key-value in the *routes cache*.

#### Start up, warm up

When the server starts, if the *routes cache* is empty, the interval will be set to zero and the server will index all existing publication events as fast as it can.

Since the *routes cache* has `lastIndexedEvent` key, if the server reboots and the *routes cache* backend in use is persisted somewhere, the *routes indexer* will pick up where it left off instead of reindexing everything from the beginning.

### Routes Cache

The *routes cache* is a key-value store interfaced using a leveldb API provided by *levelup*. It can be backed by any compatible engine. A few options include:

* [*memdown*](https://github.com/level/memdown), an in-memory KV store - we use it in our tests since we don't care about persisting the cache
* [*redisdown*](https://github.com/hmalphettes/redisdown), which is a Redis backend - not recommended because untested yet, might create issues if you have several indexers running concurrently

The *routes cache* has two keys per once-published document (i.e. not per publication but rather per document for which we got at least one publication event).

1. A key associating a document `id` (keyed as `doc:<documentId>`) to some metadata about the corresponding document, most importantly its state (published, unpublished) and the metadata routing data, and
1. A key associating a path (keyed as `path:<projectId>:<path>`) to roughly an API response.

### Configuration

Routing configuration takes place on two levels:

1. Environment - globally configure and enable the routing, and
1. Per document type per channel - enable routing for each document type for each channel you'd like to route to.

#### Environment

In your environment configuration file (here, `local.coffee`), a top-level config key named `routing` is required, with the following possible keys:

```coffee
  routing:
    enabled: false
    db: 'redisdown' # (default: memdown)
    # db_options: # (optional) cf. https://github.com/Level/levelup#options
    redis: # (optional)
      master_check_interval: 5000 # (default: 5000) how often do we check if we're the master
    indexing: # (optional)
      # number of publication events to process in each batch
      batch_size: 50000 # (default: 50000)
      # routes cache update interval
      watch_interval: 1000 # (default: 1000)
```

If not explicitly set to `enabled: true`, routing will be disabled.

#### Master check

In a setting with more than one Livingdocs **server** running against the same *routes cache*, we want to have at most one *routes indexer* running at any time. Having many of them trying to concurrently index the same publication events could create issues.

When using Redis, a Livingdocs **server** will either be the *master* and index the routes by running the *routes indexer* or not be the *master* and not index the routes by pausing the *routes indexer*.

When a *master* crashes or gets shut down, another node will get promoted *master*. Same goes when *master* gets too slow because of the load or any other issue: it will get demoted and another node will get promoted.

`routing:redis:master_check_interval` is the interval at which a process checks whether they are master or not, and should or should not get demoted or promoted.

#### Document types per channel

Metadata plugins are configured per document type per channel. If you would like to route to `articles` and `pages` in the channel `web`, you will have to set the following keys in the following files:

* `conf/channels/web/articles.coffee`:

    ```coffee
    metadata:
      routing:
        plugin: 'li-default-routing'
    ```

* `conf/channels/web/pages.coffee`:

    ```coffee
    metadata:
      routing:
        plugin: 'li-default-routing'
    ```

#### Routes/path customization

Customizing the path generated for each publication is done via the [*routing metadata plugin*](#routing-metadata-plugin).

#### Generating routing info for existing publications

Any document published prior to configuring the *routing metadata plugin* for their document type in their channel will not possess any metadata routing info, therefore the indexer will not be able to take them into account.

If you already have published documents but their metadata don't have routing infos because the plugin wasn't there when they were published, the easiest fix is to republish these documents. No need to delete them and recreate them, republishing is enough to get the metadata up to date.
