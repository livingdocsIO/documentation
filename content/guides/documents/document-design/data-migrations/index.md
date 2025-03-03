---
type: guides
title: Dealing with Design Changes
hideSectionTeaser: true
excludeFromSearch: true
---

{{< warning >}}
A new version of this document, for {{< release "release-2025-03" >}} and later, is available [here]({{< ref "/guides/documents/document-migration/data-migrations" >}}).
{{< /warning >}}

## Overview

When doing design changes it can be necessary to execute database migrations to update existing content. Common cases are if components are replaced with new components or if components are removed.

Design changes should be planned so no downtime is required. E.g. when a component should be renamed it is best to introduce a new component first and make sure that consuming apps can dealt with both the old and new component. And once the new component is sucessfully introduced a migration can upate the old component to the new one with a data migration.

This page describes which kinds of design changes require a `data migration` and which ones can be handled with a `version bump`. The next section shows the structure of a migration script. After that we look into CLI scripts to run migrations and last but not least we'll present some examples of migration scripts.

## Version Bump vs Data Migration

When one activates a new design version (e.g. via project setup in the editor), old documents still have the old design version. A common approach is to update and deliver documents with the newest design version possible. Based on the design change, one has to choose between a `version bump` and a `data migration` for the update.

#### Version Bump

Use a `version bump` when you have non structural changes and want to just lift all documents to a new design version. This operation is fast and cheap for the system.

Examples when a `version bump` is the right choice:

- HTML or CSS changes that don't affect the structure
- changes in the design wrappers
- changes in the assets of a design
- adding a new directive to a component (will be empty)
- adding a new Content Type
- moving a directive from one HTML tag to another in the same component
- removing or adding a `doc-optional` directive (`doc-optional` is never breaking)
- removing or changing a component property on a component (will be silently ignored)
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

Livingdocs provides you a migration hook `migrateAsync` to implement. This hook will be called/applied for every document in your project.

#### Example

```js
// file: /data-migrations/01-content-migration.js

//  systemdata:
//    document_id: 1
//    documentId: 1
//    content_type: 'regular'
//    contentType: 'regular'
module.exports = {
  async migrateAsync({serializedLivingdoc, metadata, systemdata}) {
    if (systemdata.content_type === 'regular') {
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

#### Params

- `systemdata` - A read only object with info about the document. E.g. `document_id` and `content_type`
- `serializedLivingdoc` - A serialised Livingdoc data model (JSON)
- `metadata` - The metadata object

#### Testing a migration

Since migrations might be complex and could result in destructive changes, it is
important to test them thoroughly. The best way to verify a migration works as expected is to write some tests for it.
They should cover the structural differences between the old and the new content.
Here is an example how such a test could look like:

```js
const assert = require('assert')

const image = {
  url: '...',
  mediaId: 'w0tuYoDXwhly',
  width: 1054,
  height: 1180,
  mimeType: 'image/png',
  altText: 'Tiger description'
}

// Here is the content you expect after the migration
const goodContent = [
  {
    component: 'my-image',
    identifier: 'p:1:1.my-image',
    id: 'doc-1hbdelpdn1',
    content: {image, caption: 'A climber climbs'}
  }
]

// Here is the content you have before the migration
const badContent = [
  {
    component: 'my-image',
    identifier: 'p:1:1.my-image',
    id: 'doc-1hbdelpdn1',
    content: {image, title: 'Climbing', caption: 'A climber climbs'}
  }
]

const migration = require('./018_remove_gallery_title.js')

const prune = (val) => JSON.parse(JSON.stringify(val))

const returnValue = prune(
  migration.migrateAsync({
    systemdata: {
      contentType: 'gallery'
    },
    serializedLivingdoc: {
      content: [
        {
          containers: {
            header: {},
            main: badContent
          }
        }
      ]
    }
  })
)

const result = returnValue.serializedLivingdoc.content[0].containers.main

result.forEach((component, index) => {
  assert.deepEqual(component, goodContent[index])
})
```

## Execute a Migration

To execute a migration, run `livingdocs-server data-migration-run` on the terminal. Without options, you'll see the help with all the options:

{{< img src="./data-migration-run-help.png" alt="Data Migration Run - Help" >}}

Once you started a migration, it will run for all your documents (in the same process, no queue). After the migration you get a migration report:

{{< img src="./data-migration-run-complete.png" alt="Data Migration Run - Completed" >}}

#### Report: not_applied_documents

Documents can't be migrated when they are actively edited by users. Therefore a report after the end of a migration shows `not_applied_documents`. These document have to be migrated again until no user is actively editing the documents.

## Performance of Migrations

Version bumps are quite fast (just some minutes for a lot of documents). Data migrations need more time, but it's difficult to predict how long they need in a specific production environment. We would estimate roughly 1h per 1 mio. documents.

There are a some factors which are influencing the migration time:

- power of the server
- request/response time between Livingdocs and the database
- the computing time for the migration operation
