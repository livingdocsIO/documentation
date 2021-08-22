---
title: Access Hooks
description: Implement special rules for document access. E.g. reject updates based on a documents category.
weight: 4
---

The access hook feature allows to register a function on the server that intercepts the document modifications before the document gets saved to the database. It should only be used for access control, **not** to mutate the document.

A hook can return a permission error (with a 403 `status` property) which is consumed by the editor.

### Alpha Stage

The implementation of the access hooks is in an alpha stage and could change in the future. We might introduce policies that will replace the hooks at a later step. So please make sure you don't implement complex logic using the hooks.

### Example

Here you see a simple example which rejects a document update when the title is set to 'examplePermissionError'.

```js
// server
liServer.registerInitializedHook(async () => {
  const accessControlApi = server.features.api('li-access-control')
  accessControlApi.registerHook(async ({action, nextDocument}) => {
    switch (action) {
      case 'document.update':
        if (nextDocument.metadata.title === 'examplePermissionError') {
          return accessControlApi.metadataPermissionError({
            message: 'Title cannot be "examplePermissionError"',
            metadataProperty: 'title'
          })
        }
        break
    }
  })
})
```


### Advanced Example

In this example we only allow the server admin (which has userId = 1) to update a document which has the category 'financialReport'. It's only a showcase to get a feeling what you could do.

```js
const accessControlApi = server.features.api('li-access-control')

// Hook parameters
// ---------------
// action          - document.create / document.update / document.get / document.delete / document.publish / document.unpublish
// projectId
// userId
// newDocument     - only available on action = 'document.create'
// documentVersion - stored document
// nextDocument    - document update which will be stored when the access check is valid
//
// RETURN
//   true or undefined or null - the document modification is allowed
//   throw an error            - the document modification will be rejected, the error will be showed in the editor
accessControlApi.registerHook(function ({action, projectId, userId, newDocument, documentVersion, nextDocument}) {
  switch (action) {
    case 'document.create': return true
    case 'document.update': return canUpdate(documentVersion, userId)
    case 'document.get': return true
    case 'document.delete': return canUpdate(documentVersion, userId)
    case 'document.publish': return canUpdate(documentVersion, userId)
    case 'document.unpublish': return canUpdate(documentVersion, userId)
  }
})

function canUpdate (documentVersion, userId) {
  const hasFinancialReport = documentVersion.metadata.category === 'financialReport')
  if (hasFinancialReport && userId !== 1) {
   throw accessControlApi.permissionError(
    'No user except the admin is allowed to edit documents in the category financialReport'
   )
  }
}
```
