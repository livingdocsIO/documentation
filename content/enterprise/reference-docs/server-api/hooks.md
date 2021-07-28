---
title: Hooks
menus:
  reference-docs:
    parent: Server API
---

APIs are provided to allow hooking into the document (pre/un)publication process
and into the rendering pipeline. Hooks are executed within the corresponding
transaction thus you can for example abort a publish process by returning the
callback with an error in your hook implementation. If you don't need the
reliability of a transaction, you can also use [events]({{< ref "./events.md" >}}) which are fire and forget.

Although these hooks should preferably be registered before the server gets
initialized (using [Server Initialized Hooks]({{< ref "/enterprise/reference-docs/server-configuration/server-initalization.md" >}})), it is also possible to
register them at runtime using the same APIs. (This is particularly handy for
testing purpose, but also useful if you create projects or channels at runtime
and need to set hooks for these.)

There are two ways of registering hooks: on a specific project or server-wide.
Registering hooks server-wide is only possible for publication hooks.
You can register as many hooks as you need, they
will be executed in the same order they got registered.


## Publication Hooks

#### registerPublicationHooks()

The `prepublish`, `publish` and `unpublish` hooks are set on the `documents` feature:

* `prepublishHookAsync`: `({documentVersion}) { return {documentVersion} }`
* `publishHookAsync`: `({documentType, {documentVersion, renditions}}) { return }`
* `unpublishHookAsync`: `({doumentType, {documentVersion}}) { return }`


Example:
```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook((done) => {
  liServer.features.api('li-documents').registerPublicationHooks({
    projectHandle: 'your-awesome-project',
    channelHandle: 'default',
    async prepublishHookAsync ({documentVersion}) { return {documentVersion} },
    async publishHookAsync ({documentType, payload}) { // payload = {documentVersion, renditions}
      liServer.log.info(`publishHookAsync called for documentType: ${documentType}!`)
      liServer.log.debug({
        documentVersion: payload.documentVersion,
        renditions: payload.renditions
      })
      return
    },
    async unpublishHookAsync ({documentType, payload}) { // payload = {documentVersion}
      liServer.log.info(`unpublishHookAsync called for documentType: ${documentType}!`)
      liServer.log.debug({documentVersion: payload.documentVersion})
      return
    }
  }, done)
})
```

Hooks can be registered for all projects.
These hooks run **before** projects specific ones.

Example of a server-wide publishHook registration:
```js
registerPublicationServerHooks({publishHook: myOtherHook}, done)
```

#### prepublishHookAsync()

The prepublish hook allows modifications of the [DocumentVersion]({{< ref "/enterprise/reference-docs/server-api/document-version.md" >}}). For this reason any prepublish hook should always return `{documentVersion}`, allowing it to be modified by the next hook or to be published.

```js
async prepublishHookAsync ({documentVersion}) {
  if (documentVersion.metadata.title === 'Let me pass') {
    return {documentVersion}
  } else {
    // Example Validation Error for a metadata property
    const err = new Error('Invalid Title')
    err.name = 'MetadataValidationError'
    err.metadataProperty = 'title'
    err.status = 400
    throw err
  }
}
```

#### publishHookAsync()

Upon every publish event in Livingdocs, e.g. when a user presses the "Publish"
button in the editor, this hook method is called.
But they do run in the same transaction and if an error is returned the publish
action will be reverted.

You get two parameters that your custom implementation can use:
the [DocumentVersion]({{< ref "/enterprise/reference-docs/server-api/document-version.md" >}}) which contains all
information about the document and the `renditions` object which contains all
rendered renditions that you defined for your channels.

E.g. If you want to use the HTML of a rendered article, you can access it as `renditions.webarticle.html`.

```js
// payload = {documentVersion, renditions}
async publishHookAsync ({documentType, payload}) {...}
```

#### unpublishHookAsync()

Just as with the publish hook, you can also configure a method that reacts to
unpublish events.

Just as in the publishHook you get a [DocumentVersion]({{< ref "/enterprise/reference-docs/server-api/document-version.md" >}}) object for the document that was
unpublished.

```js
// payload = {documentVersion}
async unpublishHookAsync ({documentType, payload}) {...}
```


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

#### registerListHooks()

There is one hook for the `document-lists` feature. The hook can be registerd
through ` registerListHooks()`.

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
  eventSource, // which api method triggers the hook 'updateList' or `removeDocumentFromList`
  projectId,
  channelId,
  listId,
  remove: [30, 199],
  add: [{id: 77, order: 12}]
}, done)
```
