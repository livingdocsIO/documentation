## Hooks

APIs are provided to allow hooking into the document (pre/un)publication process
and into the rendering pipeline. Hooks are executed within the corresponding
transaction thus you can for example abort a publish process by returning the
callback with an error in your hook implementation. If you don't need the
reliability of a transaction, you can also use [events](../server-
extensions/events.md) which are fire and forget.

Although these hooks should preferably be registered before the server gets
initialized (using [Server Initialized Hooks](../../reference-docs/server-
extensions/server-initalization.md#initialized-hooks)), it is also possible to
register them at runtime using the same APIs. (This is particularly handy for
testing purpose, but also useful if you create projects or channels at runtime
and need to set hooks for these.)

There are two ways of registering hooks: on a specific channel or server-wide.
All hooks can be registered on a channel, registering hooks server-wide is only
possible for publication hooks. You can register as many hooks as you need, they
will always be executed in the same order they got registered.

### Publication Hooks

Publish, unpublish, prepublish hooks are set on the `documents` feature:

* `prepublishHook`:
    * `({documentVersion}, callback)`
* `publishHook`:
    * `({documentType, {documentVersion, renditions}}, callback)`
* `unpublishHook`:
    * `({documentType, {documentVersion}}, callback)`

```js
const server = require('livingdocs-server/core')
const config = require('livingdocs-server/conf')
const liServer = server(config)
const port = liServer.config.get('server:port')

liServer.registerInitializedHook((done) => {
  liServer.features.api('li-documents').registerPublicationHooks({
    projectHandle: 'your-awesome-project',
    channelHandle: 'some-channel',
    prepublishHook: ({documentVersion}, callback) => { callback(null, {documentVersion}) },
    publishHook: ({
      documentType,
      payload // payload is {documentVersion, renditions}
    }, callback) => {
      liServer.log.info(`Hook called for documentType: ${documentType}!`)
      liServer.log.debug({
        documentVersion: payload.documentVersion,
        renditions: payload.renditions
      })
      callback()
    },
    unpublishHook: ({
      documentType,
      payload // payload is {documentVersion}
    }, callback) => {callback()}
  }, done)
})

liServer.listen(port, function (err) {
  if (err) throw err
  liServer.log.info('Listening on http://localhost:%s, started within %ss', port, process.uptime())
})
```

Note: prepublish hooks allow modifications of the `documentVersion` they receive
as argument, for this reason any prepublish hook should always pass
`{documentVersion}` to its callback, allowing it to be modified by the next hook
or to be published.


#### Registered on the channel

Hooks can be tied to a specific channel of a specific project.

```js
registerPublicationHooks({projectHandle: 'foo', channelHandle: 'bar', prepublishHook: someHook, publishHook: myHook}, hookRegistrationDone)
registerPublicationHooks({projectHandle: 'foo', channelHandle: 'bar', publishHook: myOtherHook}, hookRegistrationDone)
```

It is up to the hook implementer to filter by `documentType` if need be. This
can be used to apply different modifications to documents that have different
`documentType`s.

#### Registered server-wide

These hooks are executed on all channels. They run **before** channel specific ones.

```js
registerPublicationServerHooks({prepublishHook: someHook, publishHook: myHook}, hookRegistrationDone)
registerPublicationServerHooks({publishHook: myOtherHook}, hookRegistrationDone)
```

### Before Render Hooks

These hook into the `render-pipeline` feature. The `beforeRenderHook` is the
last opportunity you have to modify/transform a document before it gets
rendered.

* `beforeRenderHook`:
    * `({documentType, rendition}, callback)`

Here is a full example including server initialization:

```js
const server = require('livingdocs-server/core')
const config = require('livingdocs-server/conf')
const liServer = server(config)
const port = liServer.config.get('server:port')


liServer.registerInitializedHook((done) => {
  liServer.features.api('li-render-pipeline').registerRenderHooks({
    projectHandle: 'your-interesting-project',
    channelHandle: 'some-channel',
    beforeRenderHook: ({contentType, rendition}, callback) => {
      if (['interview', 'biography'].includes(contentType)) {
        liServer.log.info("We're about to render something about somebody!")
        // do something with the rendition:
        const livingdoc = rendition.getLivingdoc()
        const galleryTeasers = livingdoc.componentTree.find('gallery-teaser')

        return extendGalleryTeasers(galleryTeasers, rendition, callback)
      }

      callback()
    }
  }, done)
})

liServer.listen(port, function (err) {
  if (err) throw err
  liServer.log.info('Listening on http://localhost:%s, started within %ss', port, process.uptime())
})
```

### Document Lists Hooks

Two hooks are available in the `document-lists` feature.

* `listUpdateHook`:

        ({
          trx, // a knex transaction object
          projectId,
          channelId,
          listId,
          remove: [30, 199, …],
          add: [{id: 77, order: 12}, …]
        }, callback)

    The payload described here has a custom format where it gives the added and
    removed `documentId`s. An example how to use that hook would be to have Elasticsearch
    reindex the documents which got added/removed from a list.


Here is a full example including server initialization:

```js
const server = require('livingdocs-server/core')
const config = require('livingdocs-server/conf')
const liServer = server(config)
const port = liServer.config.get('server:port')


liServer.registerInitializedHook((done) => {
  liServer.features.api('li-document-lists').registerListHooks({
    projectHandle: 'your-interesting-project',
    channelHandle: 'some-channel',
    listUpdateHook: ({projectId, listId, remove, add}, callback) => {
      console.info(
        `The list with id '${listId}' in the project '${projectId}' has changes.`,
        `removing ${remove.length} things, adding ${add.length} things.`
      )
      callback()
    }
  }, done)
})

liServer.listen(port, function (err) {
  if (err) throw err
  liServer.log.info('Listening on http://localhost:%s, started within %ss', port, process.uptime())
})
```
