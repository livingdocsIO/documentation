# A Possible Routing System

## Overview

The routing feature consists of several parts:

1. the _routing configuration_, to design how document paths should look
2. the _path builder_, to generate the path of a document,
3. the _path resolver_, to retrieve document information from a path,
4. the _routes indexer_, responsible for keeping track of paths and
5. the _routes cache_, in which all published documents and some paths are

   stored.

Rough picture/story of how these components/concepts are tied together:

#### `routing.pathPattern.type` is `'article'`

There is a document titled _I'm on the road again!_, its documentId is `173`. It is has `contentType: interview` in the project `projectId: 5`, in the channel `channelId: 12`.

For this channel, the `interview` Content Type configuration has the following `routing` key:

```javascript
  routing: {
    enabled: true,
    pathPatterns: {
      type: 'article',
      current: '/interview/:YYYY/:MM/:slug--:id'
    }
  }
```

Publishing this document in January 2018, here is what happens in the routing system:

* the _path builder_ will generate the following path:

  `/interview/2018/01/i-m-on-the-road-again--173`

* this path will be stored as part of the Metadata for this Publication
* as for any publication, a publication event is written to the database
* since the `pathPatterns.type` for this Content Type is `article`, the system

  knows that the path contains the `documentId` \(`:id`\), this will be used to

  extract the `documentId` while resolving path -&gt; document.

Now, the routes indexer sees a new publication event. It first puts the routing information for this publication \(found in the Publication Metadata\) in the _routes cache_:

```javascript
// key => value
"doc:173" => {
  "route": {
    "metadata": {
      "projectId": 5,
      "channelId": 12,
      "channelHandle": "web"
    },
    "data": {
      "path": "/interview/2018/01/i-m-on-the-road-again--173",
      "type": "document",
      "resource": {
        "id": 173,
        "statusCode": 200
      }
    }
  }
}
```

This KV entry is used by the resolver. When asked to resolve `/interview/2018/01/i-m-on-the-road-again--173`, the configured `pathPatterns` are turned into RegExp. For `pathPatterns.type: 'article'`, it allows extracting the `:id`, here `173`.

Querying the routes cache for `doc:173` very efficiently retrieves the above data, telling us for instance that the document is still published \(`200`\). Had it been unpublished or deleted, we would have respectively `data.type === 'unpublished'` and `data.statusCode === 410`, or `data.type === 'deleted'` and `data.statusCode === 410`.

#### `routing.pathPattern.type` is `'page'`

Here is what changes from the previous example if the publication belongs to a contentType configured with `routing.pathPattern.type: 'page'`:

* `pathPatterns.current` does not need to contain `:id`, the document ID.
* After writing the routing information for this publication in the routes cache

  as described above, the routes indexer adds another entry to the routes cache

  :

  ```javascript
    // key => value
    "path:5:/page/about" => {
      "metadata": {
        "projectId": 5,
        "channelId": 12,
        "channelHandle": "web"
      },
      "data": {
        "type": "document",
        "resource": {
          "id": 175, // document ID
          "statusCode": 200
        }
      }
    }
  ```

* When asked to resolve `/page/about` for `projectId: 5`, since the document ID

  cannot be extracted from the path using RegExp matching, a cache lookup is

  done for `path:5:/page/about` which gives us the document ID \(`175`\) and its

  status \(`200`, published\).

  * Should this document get republished with another slug than `about`, e.g.

    `about-us`, the path pattern such as `/page/:slug` would give \`/page

    /about-us`instead of`/page/about\`. The routes indexer notices the new

    publication and updates the cache `"path:5:/page/about"` replacing `data`

    like this:

    ```javascript
      "data": {
        "type": "redirect",
        "path": "/page/about-us",
        "resource": {
          "statusCode": 301 // HTTP301 is 'Moved Permanently'
        }
      }
    ```

  * It would also write a new cache entry for `"path:5:/page/about-us"`.

## Configuration

Routing configuration takes place on two levels:

1. Environment: Globally configure a Key-Value \(KV\) store and the routing

   feature \(cache backend, indexer interval, fallback path patterns\) and enable

   the routing.

2. Content Type: Enabled and configure how the paths should look like \(path

   patterns\) for a specific Content Type.

### Environment

In your environment configuration file \(e.g. `local.js`\), two top-level config keys are required:

#### KV

Routing data is stored in a Key-Value \(KV\) store. This store is abstracted by an API named **levelup**. See [Routes Cache](routing-system.md#routes-cache) for supported adapters.

```javascript
  kv: {
    enabled: true,
    levelUpAdapter: 'redisdown', // (default: memdown)
    redis: {
      host: process.env.redis__host || 'localhost',
      port: process.env.redis__port || 6379
    }
  },
```

#### Routing

```javascript
  routing: {
    // needs to be explicitly enabled for each contentType
    enabled: true,
    // (optional, only used together with redisdown)
    redis: {
      // (default: 5000) how often do we check if we're the master, in ms
      master_check_interval: 5000
    },
    // (optional)
    indexing: {
      enabled: true,
      debug_routes: false,
      // number of publication events to process in each batch
      batch_size: 500, // (default: 1000)
      // routes cache update interval, in ms
      watch_interval: 1000 // (default: 1000)
    }
  },
```

### Content Type configuration

`type PathPattern = string;`

```javascript
  metadata: {
    // ... other metadata plugins.
    // a plugin keyed 'routing' is mandatory, `li-routing` is the one we provide
    routing: {plugin: 'li-routing'},
    // A custom plugin, see "Custom Placeholders" section of this document
    mood: {plugin: 'li-test-mood'}
  },
  routing: {
    enabled: boolean,
    pathPatterns: {
      // path to an 'article' needs to have an `:id`, path to a 'page' doesn't
      type: 'article' | 'page',
      // used to build `documentType` paths and to parse article paths
      current: PathPattern,
      // previously used path patterns, used to parse paths if `current` failed
      legacy: PathPattern[]
    }
  }
```

`routing`:

* `.enabled`: unless explicitly set to `true`, routing will not work for this

  Content Type.

* `.pathPatterns`:
  * `.type`: has to be either `article` or `page`. If `type: 'article'`, all

    patterns need to contain at least one occurrence of the `:id` placeholder.

    This makes resolving a path to a document very efficient by extracting the

    document ID directly from the path. If `type: 'page'`, there is no such

    restriction. This allows for nice paths such as `/page/about` but is

    slightly less efficient because resolution is done via a Key-Value store

    lookup.

  * `.current`: a string defining the current path pattern, see examples below.
  * `.legacy`: an array of path patterns that are not used anymore. We keep

    track of them because they can help extract IDs from paths generated with

    patterns no longer in use.

#### Placeholders

A path pattern is a string defining the structure of paths to documents. Dynamic parts are defined with `:placeholders`.

**Examples**

* `/stories/:YYYY/:slug--:id`
* `/:YYYY/:MM/:DD/:id/:slug`
* `/page/:slug`

A path patterns is used when generating the path to a publication during the publication process. It is part of what gets written in the Publication Metadata under the `routing` key. It is also used to resolve some path to the corresponding document.

**Default path pattern placeholders**

Here is the list of default path pattern placeholders available, together with their respective RegExp part used while resolving a path:

* `:id` **document ID**, mandatory for `pathPatterns.type: 'article'`

  `[0-9]+`

* `:slug` **title slug**

  `[a-zA-Z0-9_-]+`

* `:M` **month**: 1 2 ... 11 12

  `1|2|3|4|5|6|7|8|9|10|11|12`

* `:MM` **month**: 01 02 ... 11 12

  `01|02|03|04|05|06|07|08|09|10|11|12`

* `:MMM` **month**: jan feb ... nov dec

  `jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec`

* `:MMMM` **month**: january february ... november december

  `january|february|march|april|may|june|july|august|september|october|november|december`

* `:D` **day**: 1 2 ... 30 31

  `1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31`

* `:DD` **day**: 01 02 ... 30 31

  `01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31`

* `:Y` **year**: 70 71 ... 29 30

  `[0-9]{2}`

* `:YYYY` **year**: 1970 1971 ... 2029 2030

  `[0-9]{4}`

#### Custom Placeholders

You can define your own placeholders if need be. This can be done via Metadata Plugins. For instance you could create a Metadata Plugin named _section_ to have text field in the Editor screen where you'd enter the section in which to file this article, e.g. _international_ or _sport_.

Using this _section_ metadata content as a placeholder named `:section`, you first need this Metadata Plugin to expose a function `.getRoutePart(documentVersion) => string`. When building a path for a publication for which the path pattern contains `:section`, this function will be passed the `documentVersion` to publish and should return the string with which `:section` will be replaced in the path.

Take a look at [this example metadata plugin](https://github.com/livingdocsIO/livingdocs-server/blob/ffa54c83a0b07606ce806616e5655e4f1ab6bc07/plugins/metadata/li-test-mood.js#L23).

This metadata plugin has to set up on the Content Type configuration that has a path pattern with custom placeholders. The placeholder exact name will be the key used to define the plugin.

**Example Content Type config** with a custom placeholder `:configuredpluginname` and its corresponding configured plugin. To replace `:configuredpluginname`, the `getRoutePart` function in `li-some-plugin.js` will be used.

```javascript
  metadata: {
    …

//  ↓ ↓ ↓ ↓ ↓  ↓ ↓ ↓ ↓ ↓
    configuredpluginname: {
      plugin: 'li-some-plugin'
    }
  },
  routing: {
    enabled: true,
    pathPatterns: {
      type: 'article',
      current: '/:YYYY/:MM/:DD/:configuredpluginname/:slug--:id',
      // custom placeholder     ↑ ↑ ↑ ↑ ↑  ↑ ↑ ↑ ↑ ↑ matching above metadata key
      legacy: [
        '/article/:slug--:id'
      ]
    }
  }
```

### Routes Indexer

The _routes indexer_ is a procedure running at a configurable interval. It runs at most once per interval duration \(i.e. if one iteration takes longer than the interval, the next iteration will only start as soon as the previous one is done, they cannot overlap\).

The _routes indexer_ watches the publication events, polling the database for events that happened after the last indexed event, `lastIndexedEvent` being a special key in the _routes cache_ used to store indexing progress.

#### Start Up, Warm Up

When the server starts, if the _routes cache_ is empty, the interval will be set to zero and the server will index all existing publication events as fast as it can.

Since the _routes cache_ has `lastIndexedEvent` key, if the server reboots and the _routes cache_ backend in use is persisted somewhere, the _routes indexer_ will pick up where it left off instead of reindexing everything from the beginning.

### Routes Cache

The _routes cache_ is a key-value store interfaced using a leveldb-compatible API provided by [_levelup_](https://github.com/Level/levelup). It can be backed by any compatible engine. A few options include:

* [_memdown_](https://github.com/level/memdown), an in-memory KV store - we use it in our tests since we

  don't care about persisting the cache

* [_redisdown_](https://github.com/hmalphettes/redisdown), which is a Redis backend - use this for production

The _routes cache_ has two keys per once-published document \(i.e. not per publication but rather per document for which we got at least one publication event\).

1. A key associating a document `id` \(keyed as `doc:<documentId>`\) to some

   metadata about the corresponding document, most importantly its state

   \(published, unpublished\) and the metadata routing data, and

2. A key associating a path \(keyed as `path:<projectId>:<path>`\) to roughly an

   API response.

#### Master check

In a setting with more than one Livingdocs server running against the same _routes cache_, we want to have at most one _routes indexer_ running at any time. Having many of them trying to concurrently index the same publication events could create race conditions.

When using Redis, a Livingdocs server will either be the _master_ and index the routes by running the _routes indexer_ or not be the _master_ and not index the routes by pausing the _routes indexer_.

When a _master_ crashes or gets shut down, another node will get promoted _master_. Same goes when _master_ gets too slow because of the load or any other issue: it will get demoted and another node will get promoted.

`routing:redis:master_check_interval` is the interval at which a process checks whether they are master or not, and should or should not get demoted or promoted.

#### Generating routing info for existing publications

Any document published prior to enabling routing for their Content Type will not possess any metadata routing info, therefore the indexer will not be able to take them into account.

If you already have published documents but their metadata don't have routing infos because the plugin wasn't there when they were published, the easiest fix is to republish these documents. No need to delete them and recreate them, republishing is enough to get the metadata up to date.

## Feature Reference

Available on the routing feature API `server.features.api('li-routing').`

```text
type PublicationStatus = {
  route: {
    metadata: {
      projectId: number;
      channelId: number;
      channelHandle: string;
    };
    data: {
      path: string;
      type: 'document' | 'unpublished' | 'deleted';
      resource: {
        id: number;
        statusCode: 200 | 410;
      };
    };
  };
};

type Placeholder = {
  placeholder: string;
  index: number;
  regex: string;
};
```

### Indexer API

```javascript
/**
 * @function start Starts the indexer. Used by the tests.
 * @param callback: (err: Error | null): void
 */
indexer.start(done)

/**
 * @function stop Stops the indexer. Used by the tests.
 * @param callback: (err: Error | null): void
 */
indexer.stop(done)

/**
 * @function startDistributed Starts distributed routes indexing, will elect a master
 * which will start indexing.
 */
indexer.startDistributed()

/**
 * @function checkRoutes Starts routes checker, useful for debugging purpose only.
 */
indexer.checkRoutes()
```

### Builder API

#### `getBuilder`

```javascript
/**
 * @function getBuilder Gets builders for both documentTypes for this channel.
 * @param obj: { projectId: number, channelId: number }
 * @param callback: (err: Error | null, value: obj | null): void
 */
getBuilder({projectId, channelId}, callback)
```

#### `buildPath`

```javascript
/**
 * @function buildPath Builds the path to a published document.
 * @param obj: documentVersion: DocumentVersion
 * @param callback: (err: Error | null, value: string | null): void
 */
buildPath(documentVersion, callback)
```

#### `buildPathWith`

```javascript
/**
 * @function buildPath Builds the path to a published document.
 * @param obj
 * @param obj.documentVersion: DocumentVersion
 * @param obj.pattern: String
 * @param callback: (err: Error | null, value: string | null): void
 */
buildPath({documentVersion, pattern}, callback)
```

### Resolver API

#### `resolveFromPath`

Resolving strategy is:

1. attempt `documentId` extraction using the parsers built with

   `pathPatterns.current` from contentTypes that have

   `pathPattern.type === 'article'`

2. attempt `documentId` extraction using the parsers built with

   `pathPatterns.legacy` from contentTypes that have

   `pathPattern.type === 'article'`

3. attempt `documentId` extraction using the parsers built with

   `pathPatterns.current` from contentTypes that have

   `pathPattern.type === 'page'`

4. attempt `documentId` extraction using the parsers built with

   `pathPatterns.legacy` from contentTypes that have

   `pathPattern.type === 'page'`

5. do a KV lookup with the path
6. give up and return an error \(404\)

```javascript
/**
 * @function fromPath Resolves a path to a publicationStatus
 * @param obj: { projectId: number, channelId: number, path: string }
 * @param callback: (err: Error | number | null, value: PublicationStatus | null): void
 */
resolveFromPath({projectId, channelId, path}, callback)
```

#### `resolveDocumentId`

```javascript
/**
 * @function fromDocumentId Gets publication status from document ID
 * @param obj: { projectId: number, channelId: number, documentId: number }
 * @param callback: (err: Error | number | null, value: PublicationStatus | null): void
 */
resolveFromDocumentId({projectId, channelId, documentId}, callback)
```

#### `resolveDocumentIds`

```javascript
/**
 * @function fromDocumentIds Gets publication status from document IDs
 * @param obj: { projectId: number, channelId: number, documentIds: number[] }
 * @param callback: (err: Error | number | null, value: PublicationStatus | null): void
 */
resolveFromDocumentIds({projectId, channelId, documentIds}, callback)
```

