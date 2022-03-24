---
title: Server Hooks
weight: 8
menus:
  reference-docs:
    parent: Server Extensions
---

`Server Hooks` allow you to
- **Influence the publication process**
- Influence the document rendering
- Get notified about list updates

**Use Cases of a Server Hook**
- Modify a document
- Abort the publish process and return an error to the server
- Notify other systems

**Alternatives to Server Hooks**
- [Metadata Plugins]({{< ref "/reference-docs/server-extensions/metadata-plugins" >}}) which can modify single metadata fields
- [Events]({{< ref "./server-events" >}}) (fire and forget)

**2 Types of Server Hooks**
- Project specific hooks: register as many as you need, executed in the order they got registered
- Server wide hooks: run on every project, but are only allowed for publication hooks


## Publication Hooks

### Process and Hooks Overview


|Name|Supported in|Editor Feedback|Added in|Removed in|
|-|-|-|-|-|
|preparePublishHookAsync|Instant Publish|✅|release-2022-03||
|prepublishHookAsync|Instant Publish|✅||release-2022-03|
|publishHookAsync|Instant Publish|✅||release-2022-03|
|postPublishHookAsync|Instant Publish||release-2022-03||
|unpublishHookAsync|Instant Publish|✅|release-2017-01|release-2022-05|
|postUnpublishHookAsync|Instant Publish|✅|release-2022-05||

{{< img src="images/publish-workflow.png">}}

### Register a Publication Hook

**Two ways of registering a Publication Hook**
- `registerPublicationHooks`: Register as many hooks as you need, executed in the order they got registered
- `registerPublicationServerHooks`: Hooks are executed on all projects. These hooks run before project specific ones.

**API of Publication Hooks**
* `preparePublishHookAsync`: `({documentVersion}) {return}`
* `postPublishHookAsync`: `({documentVersion}) {return}`
* `postUnpublishHookAsync`: `({documentVersion}) {return}`
* {{< removed-in release-2022-05 >}}: `unpublishHookAsync`: `({documentType, documentVersion}) {return}`


**Example**
```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook(async () => {
  liServer.features.api('li-documents').registerPublicationServerHooks({
    async preparePublishHookAsync ({documentVersion}) { return }
  })

  liServer.features.api('li-documents').registerPublicationHooks({
    projectHandle: 'your-awesome-project',
    channelHandle: 'default',
    // {{< added-in release-2022-03 >}}
    async preparePublishHookAsync ({documentVersion}) { return },
    // {{< added-in release-2022-03 >}}
    async postPublishHookAsync ({documentVersion}) {
      liServer.log.info(`postPublishHookAsync called for documentType: ${documentVersion.documentType}!`)
      liServer.log.debug({documentVersion: documentVersion})
      return
    },
    // {{< removed-in release-2022-05 >}}
    async unpublishHookAsync ({documentVersion}) {
      liServer.log.info(`unpublishHookAsync called for documentType: ${documentVersion.documentType}!`)
      liServer.log.debug({documentVersion})
      return
    }
    // {{< added-in release-2022-05 >}}
    async postUnpublishHookAsync ({documentVersion}) {
      liServer.log.info(`unpublishHookAsync called for documentType: ${documentVersion.documentType}!`)
      liServer.log.debug({documentVersion})
      return
    }
  })
})
```

### preparePublishHookAsync()

The `preparePublishHookAsync` hook allows modifications of the [DocumentVersion]({{< ref "/reference-docs/server-extensions/document-version.md" >}}) before a document will be published.

**Use Cases**
* Modify document (DocumentVersion)
* Error feedback with throwing an error (document will not be published)

**Example**
```js
async preparePublishHookAsync ({documentVersion}) {
  if (documentVersion.metadata.title === 'Let me pass') {
    // modify the document here
    return
  } else {
    // Example Validation Error for a metadata property
    const err = new Error('Metadata Errors')
    err.name = 'MetadataValidationErrors'
    err.status = 400
    err.invalidMetadata = [{
      metadataProperty: 'title'
      message: 'Invalid Title',
    }]
    throw err
  }
}
```

### postPublishHookAsync

The `postPublishHookAsync` hook will be called after a document has been published. Any change to the [DocumentVersion]({{< ref "/reference-docs/server-extensions/document-version.md" >}}) has no effect. A use case for this hook is to inform remote systems about the publication of a document.

**Use Cases**
* Notify other systems

**Example**
```js
async postPublishHookAsync ({documentVersion}) {
 axios.post(`https://my-remote-service.com/publish`,
  {
    projectId: documentVersion.projectId,
    documentId: documentVersion.id,
    publicationId: documentVersion.getLastPublicationId(),
  })
}
```

### unpublishHookAsync
{{< removed-in release-2022-05 block >}}

The `unpublishHookAsync` hook will be called after a document has been unpublished. Any change to the [DocumentVersion]({{< ref "/reference-docs/server-extensions/document-version.md" >}}) has no effect. A use case for this hook is to inform remote systems about the unpublication of a document.

```js
async unpublishHookAsync ({documentVersion}) {...}
```

### postUnpublishHookAsync

The `postUnpublishHookAsync` hook will be called after a document has been unpublished or a published document gets deleted. Any change to the [DocumentVersion]({{< ref "/reference-docs/server-extensions/document-version.md" >}}) has no effect. A use case for this hook is to inform remote systems about the unpublish of a document.

**Use Cases**
* Notify other systems

**Example**
```js
async postUnpublishHookAsync ({documentVersion}) {
 axios.post(`https://my-remote-service.com/unpublish`,
  {
    projectId: documentVersion.projectId,
    documentId: documentVersion.id
  })
}
```


## Render Hooks

The `beforeRenderHookAsync` is called right before a document gets rendered.

API:
* `beforeRenderHookAsync`: `({documentType, rendition})`

Example:
```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook(async () => {
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
  })
})
```


## List Hooks

### registerListHooks()

There is one hook for the `document-lists` feature. The hook can be registered through `registerListHooks()`.

Example:
```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook(async () => {
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
  })
})
```

### listUpdateHookAsync()

The payload described here has a custom format where it gives the added and
removed `documentId`s. An example how to use that hook would be to have Elasticsearch
reindex the documents which got added/removed from a list.

```js
listUpdateHookAsync: ({
  trx,
  eventSource, // which api method triggers the hook 'updateList' or `removeDocumentFromList`
  projectId,
  channelId,
  listId,
  remove: [30, 199],
  add: [{id: 77, order: 12}]
})
```
