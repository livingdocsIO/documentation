# Hooks

APIs are provided to allow hooking into the document (pre/un)publication process
and into the rendering pipeline. Hooks are executed within the corresponding
transaction thus you can for example abort a publish process by returning the
callback with an error in your hook implementation. If you don't need the
reliability of a transaction, you can also use [events](../server-extensions/events.md) which are fire and forget.

Although these hooks should preferably be registered before the server gets
initialized (using [Server Initialized Hooks](../server-extensions/server-initalization.md)), it is also possible to
register them at runtime using the same APIs. (This is particularly handy for
testing purpose, but also useful if you create projects or channels at runtime
and need to set hooks for these.)

There are two ways of registering hooks: on a specific project or server-wide.
Registering hooks server-wide is only possible for publication hooks.
You can register as many hooks as you need, they
will be executed in the same order they got registered.


## Publication Hooks

#### registerPublicationHooks()

The publish, unpublish and prepublish hooks are set on the `documents` feature:

* `prepublishHook`:
    * `({documentVersion}, callback)`
* `publishHook`:
    * `({documentType, {documentVersion, renditions}}, callback)`
* `unpublishHook`:
    * `({documentType, {documentVersion}}, callback)`

Example:
```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook((done) => {
  liServer.features.api('li-documents').registerPublicationHooks({
    projectHandle: 'your-awesome-project',
    channelHandle: 'default',
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
```

Hooks can be registered for all projects.
These hooks run **before** projects specific ones.

Example of a server-wide publishHook registration:
```js
registerPublicationServerHooks({publishHook: myOtherHook}, done)
```

#### prepublishHook()

The prepublish hook allows modifications of the `documentVersion`. For this reason any prepublish hook should always pass `{documentVersion}` to its callback, allowing it to be modified by the next hook or to be published.

```js
prepublishHook: ({documentVersion}, callback) => {
  if (isTitleValid(documentVersion)) {
    return callback(null, documentVersion)
  } else {
    // Example Validation Error for a metadata property
    const err = new Error('Invalid Title')
    err.name = 'MetadataValidationError'
    err.propertyName = 'title'
    err.status = 400
    return callback(err)
  }
}
```

#### publishHook()

Upon every publish event in Livingdocs, e.g., when a user presses the "Publish"
button in the editor, this hook method is called.
But they do run in the same transaction and if an error is returned the publish
action will be reverted.

You get two parameters that your custom implementation can use:
the `documentVersion` which contains all
information about the document and the `renditions` object which contains all
rendered renditions that you defined for your channels.

E.g. If you want to use the HTML of a rendered article, you can access it as `renditions.webarticle.html`.

```js
publishHook: ({documentType, {documentVersion, renditions}}, callback) => {...}
```

#### unpublishHook()

Just as with the publish hook, you can also configure a method that reacts to
unpublish events.

Just as in the publishHook you get a `documentVersion` object for the document that was
unpublished.

```js
unpublishHook: ({documentType, {documentVersion}}, callback) => {...}
```


#### Info: The documentVersion object

The documentVersion object is a core object and thus contains private APIs. You
should only use the provided getter methods on the instance in order not to
program against private APIs that are prone to change. The following methods are
provided:

* **getDocumentId()**, returns the unique document id of the document that was
  published (the same as is in the URL of the editor when you have the document
  opened)

* **getProjectId()**, gets the id of the project that this document belongs to

* **getSerializedLivingdoc()**, gets the document description in the Livingdocs
  data format (JSON)

* **getMetadata()**, gets the metadata associated with the document (JSON)

* **getDesignDescriptor()**, gets the name and version of the design that this
  document was created with

* **getDocumentType()**, gets the document type, either 'article' or 'page'

* **render(callback)**, renders the document, i.e., produces output according to
  your renditions configuration. The hook method is called *after* a render, so
  you will probably never want to call `render` in this context. The callback
  receives the `renditions` object.


## Render Hooks

These hook into the `render-pipeline` feature. The `beforeRenderHook` is called right before a document gets rendered.

* `beforeRenderHook`:
    * `({documentType, rendition}, callback)`

Here is a full example including server initialization:

```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

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
```


## List Hooks

Two hooks are available in the `document-lists` feature. They are registerd
through ` registerListHooks()`.


#### registerListHooks()


Here is a full example:
```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

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
```

#### listUpdateHook()

The payload described here has a custom format where it gives the added and
removed `documentId`s. An example how to use that hook would be to have Elasticsearch
reindex the documents which got added/removed from a list.

```js
listUpdateHook: ({
  trx, // a knex transaction object
  projectId,
  channelId,
  listId,
  remove: [30, 199, …],
  add: [{id: 77, order: 12}, …]
}, done)
```
