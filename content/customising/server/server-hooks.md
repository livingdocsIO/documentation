---
title: Server Hooks
weight: 9
menus:
  customising:
    parent: Server Extensions
    weight: 2
keywords:
  - preparePublishHook
  - prepublishHook
  - publishHook
  - postPublishHook
  - unpublishHook
  - postUnpublishHook
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

- [Metadata Plugins]({{< ref "/customising/server/metadata-plugins" >}}) which can modify single metadata fields
- [Events]({{< ref "/customising/advanced/server-events" >}}) (fire and forget)

**2 Types of Server Hooks**

- Project specific hooks: register as many as you need, executed in the order they got registered
- Server wide hooks: run on every project, but are only allowed for publication hooks

## Publication Hooks

With publication hooks you can influence the [`Document Publication Lifecycle`]({{< ref "/customising/advanced/server-events#available-events" >}}). E.g. manipulate the content before a publish happens.

### Overview

| Name                      | Supported in    | Editor Feedback |
| ------------------------- | --------------- | :-------------: |
| `preparePublishHookAsync` | Instant Publish |  {{< check >}}  |
| `postPublishHookAsync`    | Instant Publish |                 |
| `preUnpublishHookAsync`   | Instant Publish |  {{< check >}}  |
| `postUnpublishHookAsync`  | Instant Publish |  {{< check >}}  |

### Register a Publication Hook

**Two ways of registering a Publication Hook**

- `liServer.registerPublicationHooks()`: Register publication hooks per project.
- `liServer.registerGlobalPublicationHooks()`: Register publication hooks that are executed on all projects (these hooks run before project specific ones).

**API of Publication Hooks**

- `preparePublishHookAsync`: `({documentVersion}) {return}`
- `postPublishHookAsync`: `({documentVersion}) {return}`
- `preUnpublishHookAsync`: `({documentVersion}) {return}`
- `postUnpublishHookAsync`: `({documentVersion}) {return}`

**Example**

```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook(async () => {
  // Global publish hooks
  liServer.registerGlobalPublicationHooks({
    async preparePublishHookAsync({documentVersion}) {
      return
    }
  })

  // Project-specific publish hooks
  liServer.registerPublicationHooks({
    projectHandle: 'daily-planet',
    async preparePublishHookAsync({documentVersion}) {
      return
    },
    async postPublishHookAsync({documentVersion}) {
      liServer.log.info(
        `postPublishHookAsync called for documentType: ${documentVersion.documentType}!`
      )
      liServer.log.debug({documentVersion: documentVersion})
      return
    },
    async preUnpublishHookAsync({documentVersion}) {
      liServer.log.info(
        `preUnpublishHookAsync called for documentType: ${documentVersion.documentType}!`
      )
      liServer.log.debug({documentVersion})
      return
    },
    async postUnpublishHookAsync({documentVersion}) {
      liServer.log.info(
        `postUnpublishHookAsync called for documentType: ${documentVersion.documentType}!`
      )
      liServer.log.debug({documentVersion})
      return
    }
  })
})
```

### preparePublishHookAsync

The `preparePublishHookAsync` hook allows modifications of the [DocumentVersion]({{< ref "/customising/server/document-version.md" >}}) before a document will be published.

**Use Cases**

- Modify document (DocumentVersion)
- Error feedback with throwing an error (document will not be published)

**Example**

```js
const {validationError} = require('@livingdocs/server').errors

async preparePublishHookAsync ({documentVersion}) {
  if (documentVersion.metadata.title === 'Let me pass') {
    // modify the document here
    return
  } else {
    // Example Validation Error for a metadata property
    throw validationError({
      message: 'Invalid Title',
      metadataProperty: 'title'
    })
  }
}
```

If a single content type has multiple hooks throwing validation errors, you'll need to throw all the errors at once. To do so, you can collect each error into an array as they occur. Then, once all hooks have completed, use a global function to handle all the accumulated errors simultaneously.

In case you need to change metadata properties, please always clone the origal value before mutating it. If you mutate an object directly, it can't be tracked and saved.

Therefore always assign metadata properties on a root-level:

```js
const value = _.cloneDeep(documentVersion.metadata.category)
documentVersion.metadata.category = Object.assign(value, {id: '123', name: 'new name'})`
```

### postPublishHookAsync

The `postPublishHookAsync` hook will be called after a document has been published. Any change to the [DocumentVersion]({{< ref "/customising/server/document-version.md" >}}) has no effect. A use case for this hook is to inform remote systems about the publication of a document.

**Use Cases**

- Notify other systems

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

### preUnpublishHookAsync

The `preUnpublishHookAsync` hook allows modifications of the [DocumentVersion]({{< ref "/customising/server/document-version.md" >}}) before a document will be unpublished.

**Use Cases**

- Modify document (DocumentVersion)
- Error feedback with throwing an error (document will not be unpublished)

**Example**

```js
const {validationError} = require('@livingdocs/server').errors

async preUnpublishHookAsync ({documentVersion}) {
  if (documentVersion.metadata.title === 'Let me pass') {
    // modify the document here
    return
  } else {
    // Example Validation Error for a metadata property
    throw validationError({
      message: 'Document cannot be unpublished because ...',
      metadataProperty: 'title'
    })
  }
}
```

### postUnpublishHookAsync

The `postUnpublishHookAsync` hook will be called after a document has been unpublished or a published document gets deleted. Any change to the [DocumentVersion]({{< ref "/customising/server/document-version.md" >}}) has no effect. A use case for this hook is to inform remote systems about the unpublish of a document.

**Use Cases**

- Notify other systems

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

## List Hooks

### Register a List Hook

There is one hook for the `document-lists` feature. The hook can be registered through `liServer.registerListHooks()`.

Example:

```js
const appConfig = require('./conf')
const liServer = require('@livingdocs/server')(appConfig)

liServer.registerInitializedHook(async () => {
  liServer.registerListHooks({
    projectHandle: 'daily-planet',
    listUpdateHookAsync({projectId, listId, remove, add}) {
      console.info(
        `The list with id '${listId}' in the project '${projectId}' has changes.`,
        `removing ${remove.length} things, adding ${add.length} things.`
      )
      return
    }
  })
})
```

### listUpdateHookAsync

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
