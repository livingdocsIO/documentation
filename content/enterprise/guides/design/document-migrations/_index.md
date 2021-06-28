---
title: Livingdocs Data Migrations
tags: [guides, design, maintenance]
renderSummaries: false
menus:
  guides:
    parent: Design
---

## Overview

The Livingdocs design is in some sense like a database. Instead of database columns you define directives on a component, e.g. an editable title (`doc-editable='title'`). The component's "database" now has a "column" title.
Just as with a database you need to write data migrations if you make structural changes. This is necessary to adapt all existing documents to the new structure.

The next chapter will describe which kinds of design changes require a `data migration` and which ones can be handled with a `version bump`. The section after shows the structure of a migration script. After that we look into CLI scripts to run migrations and last but not least we'll present some examples of migration scripts.

## Version Bump vs Data Migration

When one activates a new design version (e.g. via project setup in the editor), old documents still have the old design version. A common approach is to update and deliver documents with the newest design version possible. Based on the design change, one has to choose between a `version bump` and a `data migration` for the update.

#### Version Bump

Use a `version bump` when you have non structural changes and want to just lift all documents to a new design version. This operation is fast and cheap for the system.

Examples when a `version bump` is the right choice:
- HTML or CSS changes that don't affect the structure
- changes in the design's wrapper or any of the layout's wrappers
- changes in the assets of a design
- adding a new directive to a component (will be empty)
- adding a new layout
- moving a directive from one HTML tag to another in the same component
- removing or adding a `doc-optional` directive (`doc-optional` is never breaking)
- removing or changing a component property on a component (will be silently ignored)
- changes in the component set of a layout
- changes in the component set of a group
- changing the default component
- changes in the image ratios
- changes in the default content
- changes in the pre-filled components (will not be re-calculated for old documents)
- changes in the metadata field extractor configuration


#### Data Migration

Use a `data migration` when you have structural changes in the design (e.g. rename/remove design component). A `data migration` can update content, metadata and the design version of a document. This operation is extensive and heavy for the system.

Examples when a `data migration` is the right choice:
- removing a directive from a component
- renaming a directive in a component
- changing the type of a directive (e.g. from `doc-editable` to `doc-image`)

It is important to note that a `data migration` **only affects the Livingdocs data model** and not the rendered publication (e.g. HTML).

## Migration File

The previous section explained data migrations as a consequence of a design change. But data migrations are a general-purpose tool that can be used to alter your existing documents. A different and common example is the need to add a new metadata field to all of your documents and initialise the value in some way.

Livingdocs provides you a migration hook (async/await `migrateAsync` or callback based `migrate`) to implement. This hook will be called/applied for every document in your project.


#### Example

{{< added-in release-2020-12 >}}

```js
// file: app/data-migrations/async-migration.js

//  systemdata:
//    document_id: 1
//    content_type: 'regular'
module.exports = {
  async migrateAsync ({serializedLivingdoc, metadata, systemdata}) {
    // do your stuff here

    if (serializedLivingdoc.layout === 'regular') {
      // skip the revision from being migrated
      return
    }

    // commit the revision migration, e.g.
    //   return {metadata, serializedLivingdoc}
    //   return {serializedLivingdoc}
    //   return {metadata}
    return {metadata}
  }
}
```

Added in: `release-2017-12`
```js

// file: app/data-migrations/callback-migration.js
exports.migrate = ({serializedLivingdoc, metadata, systemdata}, callback) => {
  if (serializedLivingdoc.layout === 'regular') {
    // skip the revision from being migrated, e.g.
    return callback()
  }
  // commit the revision migration, e.g.
  callback(null, {serializedLivingdoc, metadata})
}
```

#### Data
* editable - `serializedLivingdoc` - A serialised Livingdoc data model (JSON)
* editable - `metadata`
* read only - systemdata (`document_id`/`content_type` only)


## Execute a Migration

To execute a migration, run `livingdocs-server data-migration-run` on the terminal. Without options, you'll see the help with all the options:

{{< img src="./data-migration-run-help.png" alt="Data Migration Run - Help" >}}

Once you started a migration, it will run for all your documents (in the same process, no queue). After the migration you get a migration report:

{{< img src="./data-migration-run-complete.png" alt="Data Migration Run - Completed" >}}

#### Report: not_applied_documents

Documents can't be migrated when they are actively edited by users. Therefore a report after the end of a migration shows `not_applied_documents`. These document have to be migrated again until no user is actively editing the documents.


## Example: Use Livingdocs Server for a data migration

- [Migration script with the usage of the Livingdocs Server]({{< ref "./examples/use-livingdocs-server.md" >}})


## Performance of Migrations

Version bumps are quite fast (just some minutes for a lot of documents). Data migrations need more time, but it's difficult to predict how long they need in a specific production environment. We would estimate roughly 1h per 1 mio. documents.

There are a some factors which are influencing the migration time:
- power of the server
- request/response time between Livingdocs and the database
- the computing time for the migration operation
