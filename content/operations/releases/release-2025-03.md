---
type: release-notes
title: March 2025 Release
description: Technical Release Notes for release-2025-03
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2025-03
---

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-march-2025).
To learn about the necessary actions to update Livingdocs to `release-2025-03`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **TODO**
- Feature Webinar Documentation: **TODO**
- Dev Webinar Recording: **TODO**
- Dev Webinar Slides: **TODO**
- [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 22                                                                                       |
| NPM                            | 10                                                                                       |
| Postgres                       | 16                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:22                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:22                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 20.18                                                                                    |
| NPM                            | 10                                                                                       |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:20:7                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:20:7                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 206-move-revision-metadata.js
#   writes all data from table `document_metadata` to `document_revisions`
# migration 207-migration-sequence.js
#   creates two new columns `content_migration_sequence` and `metadata_migration_sequence`
#   on the `document_revisions` table
# migration 208-document-migrations.js
#   replaces the tables `document_migrations`, `document_migration_jobs`, 
#   `document_migration_events`, and `document_migration_log` with new tables `document_migrations`
#   and `document_migration_jobs`. All data stored in these tables will be removed
livingdocs-server migrate up
```

TODO: check migration

{{< feature-info "Design" "Server" >}}

### Improved design version handling :fire:

All documents are now automatically bumped to the latest design version, including those passed to functions and hooks, returned by the Public API, or rendered in the Livingdocs Editor. Ensure your downstream functions, hooks, and API clients are compatible with documents delivered with the newest design version.

If a design update contains a breaking change, you must migrate all existing documents using On-Read Migrations. For more details, check out the [announcement below]({{< relref "#improved-design-version-handling-gift" >}}).

To ensure a smooth transition, downstreams should verify that their stored documents are in an expected state before upgrading to this release. Specifically, ensure that only one design is in use per project and that all documents share the same design version. If these conditions are not met, applying future migrations may cause inconsistencies or errors.

To facilitate this verification, we provide a utility that performs these checks. It is available in the CLI as of release-2025-01:

```
Usage: livingdocs-server release-2025-03-check-document-design-versions

Checks whether all documents in a project have the same design version.

Options:
  -h, --help  Show help                                                [boolean]
```

If everything is in order, the following output will be displayed:

```
npx livingdocs-server release-2025-03-check-document-design-versions
10:16:04 INFO  cli > All documents have the same design version. You are ready to upgrade to release-2025-03.
```

If multiple design versions are detected, the following output will be shown instead:

```
npx livingdocs-server release-2025-03-check-document-design-versions
10:15:45 ERROR cli > Not all documents have the same design version. Please migrate them to the latest design version before upgrading to release-2025-03.
10:15:45 ERROR cli > projectHandle=user-nkmubrc04klh, projectId=76
10:15:45 ERROR cli >   designName=basic, designVersion=1.0.1
10:15:45 ERROR cli >   designName=basic, designVersion=1.0.0
10:15:45 ERROR cli > projectHandle=user-bbab7sud5ap8, projectId=77
10:15:45 ERROR cli >   designName=basic, designVersion=1.0.0
10:15:45 ERROR cli >   designName=basic, designVersion=1.0.1
10:15:45 ERROR cli > projectHandle=user-vn89gm58rxhu, projectId=78
10:15:45 ERROR cli >   designName=basic, designVersion=1.0.1
10:15:45 ERROR cli >   designName=basic, designVersion=1.0.0
```

In that case, documents should be migrated using CLI `data-migration-run` before upgrading to release-2025-03.

{{< feature-info "Server Config" "Server" >}}

### Server configs `projectConfigs.showMigrationUi` and `projectConfigs.autoDesignMigrations` :fire:

Server config properties `projectConfigs.showMigrationUi` and `projectConfigs.autoDesignMigrations` are no longer supported due to the improved design version handling. As part of this change, the design migration page has been removed from the Editor. Please remove these properties from your server config.

{{< feature-info "Data Migrations" "CLI" >}}

### CLI `data-migration-run` no longer supports options `--design-version-to` and `--filter-by-design-version` :fire:

The CLI `data-migration-run` no longer supports options `--design-version-to` and `--filter-by-design-version` due to the improved design version handling.

{{< feature-info "Migration API" "Server" >}}

### Migration APIs replaced with `migrationApi.run()` :fire:

The following Server APIs have been removed:

- `migrationApi.listMigrations`
- `migrationApi.resumeAllMigrations`
- `migrationApi.getMigration`
- `migrationApi.createMigration`
- `migrationApi.updateMigration`
- `migrationApi.prepareMigration`
- `migrationApi.acceptMigration`
- `migrationApi.cancelMigration`
- `migrationApi.getMigrationReport`
- `migrationApi.getMigrationLogs`
- `migrationApi.runMigration`

Please use server API `migrationsApi.run` instead.

{{< feature-info "Document URLs" "Editor" >}}

### Removal of deprecated document URLs `/p/{projectHandle}/document/{documentId}` :fire:

All deprecated editor routes are removed and will redirect to the new base editor URL: `/p/{projectHandle}/document/{documentId}`. They include:

- `/p/{projectHandle}/articles/{documentId}/edit/add`
- `/p/{projectHandle}/articles/{documentId}/edit/canvas/component/{componentId}`
- `/p/{projectHandle}/articles/{documentId}/edit/component/{componentId}`
- `/p/{projectHandle}/articles/{documentId}/history`
- `/p/{projectHandle}/articles/{documentId}/history/compare/:revisionFromId/with/:revisionToId`
- `/p/{projectHandle}/articles/{documentId}/history/{revisionId}`
- `/p/{projectHandle}/articles/{documentId}/edit/notifications/unsubscribe`
- `/p/{projectHandle}/articles/{documentId}/publish`
- `/p/{projectHandle}/articles/{documentId}/edit/canvas/tasks`

{{< feature-info "Angular Service" "Editor" >}}

### Removal of Angular services `ldEditApi` and `serverApi`

Angular services `ldEditApi` and `serverApi` have been removed. Please use Angular service `storage` instead.

## Deprecations

{{< feature-info "Server API" "Server" >}}

### Server APIs `projectApi.getStats` and `designStatsApi.listDesigns` :warning:

Server APIs `projectApi.getStats` and `designStatsApi.listDesigns` are deprecated and will be removed in release-2025-09.

{{< feature-info "" "" >}}

### `li-image` and `li-videos` :warning:

## Features

{{< feature-info "" "" >}}

### API versioning :gift:
- Merge beta routes into public api routes

{{< feature-info "Design" "Server" >}}

### Improved design version handling :gift:

All documents are now automatically bumped to the latest design version, including those passed to functions and hooks, returned by the Public API, or rendered in the Livingdocs Editor. To ensure compatibility with the newest design version, you need to define the necessary [On-Read Migrations]({{< ref "/reference/document/migration/on-read-migration" >}}).

On-Read Migrations are applied whenever a document is read from the database. This means they take effect immediately, allowing all hooks, functions and clients consuming the data to work with the updated document structure.

1. Define your migrations in the Project Config for each content type, referencing a migrate function.

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

    {{< warning >}}Migrations should not be removed once added. In a future release, a mechanism will allow running migrations in the background to support safe removal. Until then, only append new migrations.{{< /warning >}}

2. Register the migrate function in the function registry. Migrate functions are registered using `liServer.registerMigrateFunctions`. Alternatively, individual migration functions can be registered using `liServer.registerMigrateFunction`.

    {{< info >}}Only synchronous migrate functions are supported.{{< /info >}}

    ```js
    liServer.registerMigrateFunctions([
      {
        handle: 'removeComponent',
        migrateContent({content, context}) {
          return {content}
        }
      },
      {
        handle: 'renameMetadataProperty',
        migrateMetadata({metadata, metadataSource, translations, context}) {
          return {metadata, metadataSource, translations}
        }
      }
    ])
    ```

    - `handle`: Matches the `migrateFunctionHandle` in the project configuration.
    - `migrateContent`: Modifies a document's content.
    - `migrateMetadata`: Modifies metadata, metadataSource, and translations (if applicable).

{{< feature-info "Data Migrations" "CLI" >}}

### Data migration improvements :gift:

[Data Migrations]({{< ref "/reference/document/migration/data-migration" >}}), usually executed using the `data-migration-run` CLI, have received several improvements:

- Data Migrations migrate the latest draft, the latest publication, and any scheduled publication. Previously, only the latest draft and latest publication were migrated.
- Data Migrations are executed in a single step, with the result written back to the database immediately, eliminating the separate prepare and accept phases. This significantly reduces version conflicts caused by users actively editing documents during migrations. If a data migration still fails due to version conflicts, it is automatically retried up to three times.
- Data Migrations update existing rows instead of duplicating migrated publications and revisions in the database.
- The `migrateAsync` functions now receive two additional parameters: `metadataSource` and `translations`. These parameters can also be modified and returned.
- After data migrations are executed, statistics and references are re-extracted.
- The CLI command `data-migration-run` now includes two new options: `--filter-by-id-from` and `--filter-by-id-to`, allowing migrations to be applied to a specific range of documents.

{{< feature-info "" "" >}}

### Media Center: Image variant Storage / Delivery :gift:

{{< feature-info "" "editor" >}}

### Media Center: Archive/Revoke/Delete :gift:

{{< feature-info "" "editor" >}}

### Smart quotes :gift:

{{< feature-info "" "editor" >}}

### Page Management: Teaser Container with List & Algorithm :gift:

{{< feature-info "" "editor" >}}

### Page Management: Teaser Side Table :gift:

{{< feature-info "" "editor" >}}

### Document Inbox: Image Support :gift:

{{< feature-info "Content management" "editor" >}}

### Editorial Workflow: Distribution Dates :gift:

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- TBD

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- TBD

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v271.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.9): chore: Enable auto pipelining for queue redis connections
- [v271.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.8): fix(li-task-v2): Only show task mode in notifications if mode is configured
- [v271.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.7): fix(li-task-v2): Prevent notification composition failure when no modes are defined
- [v271.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.6): fix(design-version-update): Account for migratedDocumentVersionDelta when setting model version after an update
- [v271.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.5): fix(image-variants): azure blob storage now handles 404 correctly
- [v271.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.4): fix(media-library): Prevent serving invalid images
- [v271.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.3): fix(webhooks): Add webhook timeout config property
- [v271.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.2): fix(api-version): Keep supporting beta routes

### Livingdocs Editor Patches
- [v115.22.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.19): fix(task-screen): Open documents with task panel open
- [v115.22.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.18): fix(peiq): do metadata extraction when replacing an image
- [v115.22.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.17): fix(media library): detail details
- [v115.22.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.16): fix: scroll fixes in editor view
- [v115.22.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.15): fix: fix var names in translations
- [v115.22.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.14): fix: Fix documentation links
- [v115.22.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.13): fix(trackjs): sanitize Bearer, Basic, and Authorization strings in payload
- [v115.22.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.12): fix: use Print instead of Druck for german print version labels
- [v115.22.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.11): fix(distribution dates): Polish
- [v115.22.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.10): fix(image-variants): strip path prefix was not passed to the variants image service
- [v115.22.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.9): fix(side table): Item title
- [v115.22.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.8): fix(media-library): Only show "Store in Archive" when use2025Behavior
- [v115.22.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.7): fix(media-library): Rename preserveOriginalAssets to use2025Behavior (Part II)
- [v115.22.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.6): chore(comments): Remove tributejs dependency
- [v115.22.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.5): fix(format-popover): Do not let format popover slip behind preview panel
- [v115.22.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.4): fix(media library): Side panel z-visibility
- [v115.22.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.3): fix: Open document inbox when in visibility mode

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
- Bugfix: :beetle:
- Chore: :wrench:
