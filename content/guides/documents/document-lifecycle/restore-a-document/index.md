---
title: Restore a deleted document
description: Learn how you can restore deleted documents
weight: 1
---

## What actually happens when you delete a document?

Livingdocs does not remove deleted documents from the database. Instead they are marked as deleted.

These steps happen on delete:

- The document is marked as deleted
- The document is unpublished and any scheduled publishings are undone
- The document is removed from all lists
- The document is removed from all elasticsearch indexes (drafts and publications)

## What happens when you restore a document?

Restoring only makes the document visible again. It does not undo everything that happened when the document was deleted.

These steps happen on restore:

- it is not marked as deleted anymore
- it is added to the drafts elasticsearch index again

## Manual restore via Editor UI

To restore individual records there is a way if you go to the archived document by going to its page via url:
https://editor.your-domain.com/p/:projectHandle/articles/:documentId

Then you should see the document in read-only mode.

If you have not disabled the document restore feature explicitly via the Editor Config `app.useArchivedRestore: false` you’ll see an option to restore the document.

## Manual restore via browser dev console

You can use the `fetch` api via the console in the browser Dev Tools:

```js
await fetch('https://editor.stage.your-domain.io/proxy/api/documents/restore/:documentId', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: 'Bearer bearer-token-of-your-current-session'
  }
})
```

To get your bearer token you can find it in Chromes dev tools when you look at the request headers from any request made to the server. This is valid only for a short amount of time and contains the user id of the currently logged in user. Any requests you make with this will be associated with this user.
