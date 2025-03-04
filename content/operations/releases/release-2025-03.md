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
livingdocs-server migrate up
```

TODO: check migration

{{< feature-info "" "" >}}

### Editor URLs `/p/{projectHandle}/articles/{documentId}/*` :fire:

{{< feature-info "" "" >}}

### MigrationApis replaced with `migrationApi.run()` :fire:

{{< feature-info "" "" >}}

### Server configs `projectConfigs.showMigrationUi` and `projectConfigs.autoDesignMigrations` :fire:

{{< feature-info "" "" >}}

### CLI data-migration-run no longer supports options `--design-version-to` and `--filter-by-design-version` :fire:

{{< feature-info "Angular Service" "Editor" >}}

### Angular Service Removal
Angular service 'ldEditApi' has been removed. Please use Angular service 'storage' instead.
Angular service 'serverApi' has been removed. Please use Angular service 'storage' instead.

## Deprecations

{{< feature-info "" "" >}}

### Server APIs `projectApi.getStats` and `designStatsApi.listDesigns` :warning:

{{< feature-info "" "" >}}

### `li-image` and `li-videos` :warning:

## Features

{{< feature-info "" "" >}}

### API versioning :gift:
- Merge beta routes into public api routes

{{< feature-info "" "" >}}

### Design version handling :gift:

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
- [v271.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.7): fix(li-task-v2): Prevent notification composition failure when no modes are defined
- [v271.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.6): fix(design-version-update): Account for migratedDocumentVersionDelta when setting model version after an update
- [v271.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.5): fix(image-variants): azure blob storage now handles 404 correctly
- [v271.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.4): fix(media-library): Prevent serving invalid images
- [v271.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.3): fix(webhooks): Add webhook timeout config property
- [v271.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.2): fix(api-version): Keep supporting beta routes

### Livingdocs Editor Patches
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
