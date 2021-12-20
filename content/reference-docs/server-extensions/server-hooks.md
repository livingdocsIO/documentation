---
title: Server Hooks
weight: 8
menus:
  reference-docs:
    parent: Server Extensions
---

TODOOOOOOOOOOOO: describe the registerPublicationServerHooks better.
TODOOOOOOOOOOOO: go through every existing hook and update the example + add new hooks

`Server Hooks` allow you to influence the (pre/un)publication process of a document. You can either change the document or for example abort the publish process by throwing an error. There are two alternatives to server hooks

- [Metadata Plugins]({{< ref "/reference-docs/server-extensions/metadata-plugins" >}}) which can modify single metadata fields
- [Events]({{< ref "./server-events" >}}) which are fire and forget

These server hooks have to be registered during initialisation with [liServer.registerInitializedHook]({{< ref "/reference-docs/server-extensions/server-initalization" >}}).

There are two ways of registering hooks:
- for a specific project - as many as you need, executed in the order they got registered
- server-wide - only publication hooks


## Publication Hooks

### Process and Hooks Overview


|Name|Supported in|Editor Feedback|Added in|Deprecated in|
|-|-|-|-|-|
|preparePublishHook|Instant Publish|✅|release-2022-03||
|prepublishHook|Instant Publish|✅||release-2022-03|
|publishHook|Instant Publish|✅||release-2022-03|
|postPublishHook|Instant Publish|✅|release-2022-03||
|unPublishHook|Instant Publish|✅|||

![](https://user-images.githubusercontent.com/172394/146718398-5414fe96-cf3a-44e9-9f1f-5f57e1e8172f.png)


### registerPublicationHooks()

The `preparePublishHook`, `prepublishHook`, `publishHook`, `postPublishHook` and `unpublishHook` hooks are set on the `documents` feature:

* `preparePublishHookAsync`: `({documentVersion}) {return}`
* `prepublishHookAsync`: `({documentVersion}) {return {documentVersion}}`
* `publishHookAsync`: `({documentType, {documentVersion, renditions}}) {return}`
* `postPublishHookAsync`: `({documentVersion}) {return}`
* `unpublishHookAsync`: `({doumentType, {documentVersion}}) {return}`


Example:
```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook(() => {
  liServer.features.api('li-documents').registerPublicationHooks({
    projectHandle: 'your-awesome-project',
    channelHandle: 'default',
    async preparePublishHookAsync ({documentVersion}) { return },
    async postPublishHookAsync ({documentVersion}) {
      liServer.log.info(`postPublishHookAsync called for documentType: ${documentVersion.documentType}!`)
      liServer.log.debug({documentVersion: documentVersion})
      return
    },
    async unpublishHookAsync ({documentVersion}) {
      liServer.log.info(`unpublishHookAsync called for documentType: ${documentVersion.documentType}!`)
      liServer.log.debug({documentVersion})
      return
    }
  })
})
```

Hooks can be registered for all projects.
These hooks run **before** projects specific ones.

Example of a server-wide publishHook registration:
```js
registerPublicationServerHooks({publishHook: myOtherHook})
```

### prepublishHookAsync()

The prepublish hook allows modifications of the [DocumentVersion]({{< ref "/reference-docs/server-extensions/document-version.md" >}}). For this reason any prepublish hook should always return `{documentVersion}`, allowing it to be modified by the next hook or to be published.

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

### publishHookAsync()

Upon every publish event in Livingdocs, e.g. when a user presses the "Publish"
button in the editor, this hook method is called.
But they do run in the same transaction and if an error is returned the publish
action will be reverted.

You get two parameters that your custom implementation can use:
the [DocumentVersion]({{< ref "/reference-docs/server-extensions/document-version.md" >}}) which contains all
information about the document and the `renditions` object which contains all
rendered renditions that you defined for your channels.

E.g. If you want to use the HTML of a rendered article, you can access it as `renditions.webarticle.html`.

```js
// payload = {documentVersion, renditions}
async publishHookAsync ({documentType, payload}) {...}
```

### unpublishHookAsync()

Just as with the publish hook, you can also configure a method that reacts to
unpublish events.

Just as in the publishHook you get a [DocumentVersion]({{< ref "/reference-docs/server-extensions/document-version.md" >}}) object for the document that was
unpublished.

```js
// payload = {documentVersion}
async unpublishHookAsync ({documentType, payload}) {...}
```


## Render Hooks

These hook into the `render-pipeline` feature. The `beforeRenderHook` is called right before a document gets rendered.

* `beforeRenderHook`: `({documentType, rendition}, callback)`
* `beforeRenderHookAsync`: `({documentType, rendition})`

Here is a full example including server initialization:

```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook((done) => {
  liServer.features.api('li-render-pipeline').registerRenderHooks({
    projectHandle: 'your-interesting-project',
    channelHandle: 'some-channel',
    async beforeRenderHookAsync ({contentType, rendition}) {
      if (['interview', 'biography'].includes(contentType)) {
        liServer.log.info("We're about to render something about somebody!")
        // do something with the rendition:
        const livingdoc = rendition.getLivingdoc()
        const galleryTeasers = livingdoc.componentTree.find('gallery-teaser')

        return extendGalleryTeasers(galleryTeasers, rendition)
      }
    }
  }, done)
})
```


## List Hooks

### registerListHooks()

There is one hook for the `document-lists` feature. The hook can be registerd
through `registerListHooks()`.

Here is a full example:
```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook((done) => {
  liServer.features.api('li-document-lists').registerListHooks({
    projectHandle: 'your-interesting-project',
    channelHandle: 'some-channel',
    listUpdateHookAsync ({projectId, listId, remove, add}) {
      console.info(
        `The list with id '${listId}' in the project '${projectId}' has changes.`,
        `removing ${remove.length} things, adding ${add.length} things.`
      )
      return
    }
  }, done)
})
```

### listUpdateHookAsync()

The payload described here has a custom format where it gives the added and
removed `documentId`s. An example how to use that hook would be to have Elasticsearch
reindex the documents which got added/removed from a list.

```js
listUpdateHookAsync: ({
  trx, // a knex transaction object
  eventSource, // which api method triggers the hook 'updateList' or `removeDocumentFromList`
  projectId,
  channelId,
  listId,
  remove: [30, 199],
  add: [{id: 77, order: 12}]
})
```
