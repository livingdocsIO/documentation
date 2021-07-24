---
title: "Example: Use Livingdocs Server for a data migration"
linkTitle: Use Livingdocs Server for a data migration
tags: [guides, maintenance]
menus:
  guides:
    parent: Livingdocs Data Migrations
---

If you need more data for a data migration, it's sometimes necessary to require the Livingdocs Server in a migration.

In this example we will first require and then initialise the Livingdocs Server. After this is done, you can continue with your migrations and change the needed data.


```js
// file: app/data-migrations/use-server-for-migration.js

// When you need the livingdocs server, you can require the server here
const liServer = require('../server')
let initialized

//  systemdata:
//    document_id: 1
//    content_type: 'regular'
module.exports = {
  async migrateAsync ({serializedLivingdoc, metadata, systemdata}) {

    // initialisation of the livingdocs server
    if (!initialized) {
      await liServer.initialize()
      initialized = true
    }

    // Load the necessary data via livingdocs server
    const documentApi = liServer.features.api('li-documents').document
    const draft = await documentApi.getLatestDocument(systemdata.document_id)

    // Make your wanted changes in 'serializedLivingdoc' and 'metadata'
    // ...

    // commit the revision migration, e.g.
    //   return {metadata, serializedLivingdoc}
    //   return {serializedLivingdoc}
    //   return {metadata}
    return {metadata}
  }
}
```
