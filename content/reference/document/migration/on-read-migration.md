---
title: On-Read Migration
description: On-Read Migrations are applied whenever a document is read from the database. This means they take effect immediately, allowing all hooks, functions and clients consuming the data to work with the updated document structure.
menus:
  reference:
    weight: 1
    parent: Migration
---

{{< added-in "release-2025-03" block >}}

On-Read Migrations are applied whenever a document is read from the database. This means they take effect immediately, allowing all hooks, functions and clients consuming the data to work with the updated document structure. As such, they are ideal for applying structural changes to your existing documents.

Importantly, whenever you introduce a breaking change to your document's design or metadata, you must ensure that existing documents are still compatible with the changes. Usually, this is achieved by providing an On-read Migration alongside these changes. This ensures that the documents delivered to the Livingdocs Editor or other clients are compatible with the document's design and metadata properties.

## Configuration

On-Read Migrations require configuration in two parts:

- Defining migrations in the Project Config, referencing a registered migrate function.
- Registering the migrate function in the Function Registry.

### Project Config

On-Read Migrations are defined in the Project Config for each content type:

```js
{
  handle: 'article',
  ...
  migrations: [
    {
      sequence: 1,
      migrateFunctionHandle: 'removeComponent',
      context: {componentName: 'subtitle'}
    },
    {
      sequence: 2,
      migrateFunctionHandle: 'renameMetadataProperty',
      context: {from: 'description', to: 'lead'}
    }
  ]
}
```

- `sequence`: Specifies the execution order of migrations. Values must be unique and increasing.
- `migrateFunctionHandle`: References a registered migrate function (see below).
- `context`: Optional data passed to the migrate function, enabling reuse of migrate functions.

{{< warning >}}
Migrations should not be removed once added. In a future release, a mechanism will allow running migrations in the background to support safe removal. Until then, only append new migrations.
{{< /warning >}}

### Function Registry

Migrate functions are registered in the migrate function registry using `liServer.registerMigrateFunctions`. Alternatively, individual migration functions can be registered using `liServer.registerMigrateFunction`.

{{< info >}}
Only synchronous migrate functions are supported.
{{< /info >}}

```js
const transmogrify = require('./transmogrify')

liServer.registerInitializedHook(function () {
  liServer.registerMigrateFunctions([
    {
      handle: 'removeComponent',
      migrateContent({content, context}) {
        if (!context?.componentName) return

        const {content} = transmogrify({content})
          .remove({componentName: context.componentName})

        return {content}
      }
    },
    {
      handle: 'renameMetadataProperty',
      migrateMetadata({metadata, metadataSource, translations = {}, context}) {
        if (!context?.from || !context?.to) return

        metadata[context.to] = metadata[context.from]
        metadataSource[context.to] = metadataSource[context.from]

        for (const translation of Object.values(translations)) {
          if (!translation.metadata) continue
          translation.metadata[context.to] = translation.metadata[context.from]
        }

        return {metadata, metadataSource, translations}
      }
    }
  ])
})
```

- `handle`: Matches the `migrateFunctionHandle` in the project config
- `migrateContent`: Modifies a document's content using:
  - `content`: The document content
  - `context`: Context as defined in the project config (see above)
- `migrateMetadata`: Modifies metadata, metadataSource, and translations (if applicable) using:
  - `metadata`: Document metadata
  - `metadataSource`: Document metadata source
  - `translations`: Document translations as an object with locales as keys
  - `context`: Context as defined in the project config (see above)

## Usage

Once an On-Read Migration is deployed, it takes effect immediately. Documents of the respective content type are migrated before being passed to functions, returned by the Public API, or rendered in the Livingdocs Editor. As a result, downstream systems only need to handle migrated documents. Specifically:

- The Public API returns migrated documents, so deliveries and other API clients must be compatible with this document structure.
- Hooks and downstream functions, such as Copy or Transform Functions, receive migrated documents.
- Downstream functions, such as Create or Transform Functions, must return documents in the latest structure, as if all migrations have already been applied.
- Documents provided to Import APIs must follow the latest structure, as if all migrations have already been applied.
- Data Migrations receive documents transformed by On-Read Migrations.

The only exception is when a migration error occurs, typically due to a faulty migrate function. In such cases, the document is returned as stored in the database, without applying pending migrations. This ensures that deliveries receive an older but potentially renderable version rather than no document at all.

If such an error occurs, Livingdocs logs it. Ensure proper monitoring is in place to detect and resolve these issues immediately; otherwise, documents may end up in a corrupted state.

## Testing

Due to the critical nature of On-Read Migrations, they should be thoroughly tested before deployment. You can approach this as follows:

```js
const {colt} = require('@livingdocs/server/test/support/factories')

before(async function () {
  this.documentApi = test.liServer.features.api('li-documents').document

  // Set up a test environment
  const {project, user} = await colt()
    .createUser('user')
    .createProject('project', 'user')
    .createConfigChannel('channel', {
      channel: {name: 'test-channel', label: 'Test Channel'},
      project: 'project',
      channelConfig: {...}
    })
  this.project = project
  this.user = user
})

it('should correctly apply migrations', async function () {
  // Create a new document with no On-Read Migrations applied
  const {documentId} = await this.documentApi.createV2({
    document: {migrationSequence: null, ...},
    user: this.user
  })

  // Fetch the document, which applies all pending On-Read Migrations
  const document = await this.documentsRepo.findOne({
    projectId: this.project.id,
    documentId
  })

  // Verify that migrations have been applied correctly
  expect(document.content).to.deep.equal([...])
  expect(document.metadata.toJSON()).to.deep.equal({...})
})
```