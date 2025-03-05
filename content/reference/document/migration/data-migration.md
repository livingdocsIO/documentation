---
title: Data Migration
description: Data Migrations iterate over all documents and apply transformations in one go. Because they do not slow down response times, they are suitable for complex migrations, including those involving asynchronous operations.
menus:
  reference:
    weight: 2
    parent: Migration
---

{{< info >}}
An old version of this document, for {{< release "release-2025-01" >}} and earlier, is available [here]({{< ref "/guides/documents/document-design/data-migrations" >}}).
{{< /info >}}

Data Migrations iterate over all documents and apply transformations in one go. They can be used to alter your existing documents, for example to initialize a new metadata property. Because they do not slow down response times, they are suitable for complex migrations, including those involving asynchronous operations.

Whenever possible, however, especially for structural changes, we recommend using [On-Read Migrations]({{< relref "on-read-migration" >}}) for efficiency and ease of use. But the migration strategies are not mutually exclusive, you can easily combine both. On-Read Migrations are always executed before a Data Migration, so Data Migrations receive data transformed by On-Read Migrations.

## Usage

To execute a Data Migration, run `livingdocs-server data-migration-run` on the terminal. The following options are available:

- `--project` (required): Specifies the project handle.
- `--migration-file-path` (required): Path to a migration file that exposes a `migrateAsync` function.
- `--filter-by-content-type`: Migrates only documents of the specified content type.
- `--filter-by-id`: Migrates only documents with matching document IDs.
- `--filter-by-id-from`, `--filter-by-id-to`: Migrates only documents with matching document IDs. ({{< added-in "release-2025-03" >}})
- `--filter-by-time-from`, `--filter-by-time-to`: Migrates only documents created within the specified time range.

The `migrateAsync function` in the specified migration file is applied to each matching document. It receives the following arguments:

- `serializedLivingdoc`
- `metadata`
- `metadataSource` ({{< added-in "release-2025-03" >}})
- `translations` as an object with locales as keys ({{< added-in "release-2025-03" >}})
- `systemdata` (read-only), containing `documentId` and `contentType`.

For example:

```js
module.exports = {
  async migrateAsync({serializedLivingdoc, metadata, metadataSource, translations, systemdata}) {
    if (systemdata.content_type === 'regular') {
      return // skip
    }
    return {serializedLivingdoc, metadata, metadataSource, translations}
  }
}
```

Once a migration starts, it runs for all matching documents within the same process (no queueing). After completion, a migration report is generated.

Documents that are actively being edited by users cannot be migrated. If any documents fail migration due to active editing, they are listed under `failedDocumentIds` in the report. These documents must be migrated again once they are no longer being edited.

```
16:04:03 INFO  cli > Migration finished
  report: {
    "migrationId": "eee3edc3-ddf5-4efa-9b1b-2cc2900f5687",
    "completed": 2,
    "skipped": 0,
    "failed": 1,
    "failedDocumentIds": [123]
  }
```

## Testing

Since migrations can be complex and may introduce destructive changes, it is crucial to test them thoroughly. The best way to ensure a migration works as expected is to write tests for it.

Tests should cover the structural differences between the old and new content. Here is an example of how such a test could look:

```js
const migration = require('./018_remove_gallery_title.js')

it('should correctly apply migrations', async function () {
  // Execute data migration
  const actual = migration.migrateAsync({
    serializedLivingdoc: {...},
    metadata: {...},
    metadataSource: {...},
    translations: {...},
    systemdata: {...}
  })

  // Verify that migration has been applied correctly
  expect(actual.serializedLivingdoc).to.deep.equal({...})
  expect(document.metadata).to.deep.equal({...})
  expect(document.metadataSource).to.deep.equal({...})
  expect(document.translations).to.deep.equal({...})
})
```