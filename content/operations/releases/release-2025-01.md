---
type: release-notes
title: January 2025 Release
description: Technical Release Notes for release-2025-01
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2025-01/
---

{{< release-header
  title="January 2025 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2025-01"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Keep search in memory in document dashboard side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9295)
* [fix(deps): update dependency @elastic/elasticsearch from 8.16.1 to v8.16.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7503)
* [fix(floating panel): Position](https://github.com/livingdocsIO/livingdocs-editor/pull/9296)
* [fix(deps): update dependency cookie from 1.0.1 to v1.0.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7500)
* [Upgrade to fastify v5](https://github.com/livingdocsIO/livingdocs-editor/pull/9279)
* [Home screen tasks search filters](https://github.com/livingdocsIO/livingdocs-editor/pull/9274)
* [fix(deps): update dependency @livingdocs/framework from 31.1.1 to v31.1.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9284)
* [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7494)
* [fix(deps): update dependency @livingdocs/framework from 31.1.1 to v31.1.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7491)
* [Remove `release-2024-05` from renovate.json](https://github.com/livingdocsIO/livingdocs-editor/pull/9281)
* [Remove `release-2024-05` from renovate.json](https://github.com/livingdocsIO/livingdocs-server/pull/7488)
* [Drop suport for Node.js v18](https://github.com/livingdocsIO/livingdocs-server/pull/7486)
* [Drop suport for Node.js v18](https://github.com/livingdocsIO/livingdocs-editor/pull/9276)
* [Disable automatic translations in Google Chrome](https://github.com/livingdocsIO/livingdocs-editor/pull/9270)
* [Migrate dependency ua-parser-js to my-ua-parser](https://github.com/livingdocsIO/livingdocs-server/pull/7485)
* [chore(deps): update dependency eslint from 9.14.0 to v9.15.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7479)
* [fix(deps): update dependency @livingdocs/framework from 31.1.0 to v31.1.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9268)
* [Component conditions UI fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/9258)
* [Require contentType in print flow function result](https://github.com/livingdocsIO/livingdocs-server/pull/7468)
* [Account for fixed dynamic header height when positioning conditions flyout](https://github.com/livingdocsIO/livingdocs-editor/pull/9259)
* [Only remove dashboard item if deletion succeeded](https://github.com/livingdocsIO/livingdocs-editor/pull/9235)
* [chore(deps): update dependency eslint from 9.13.0 to v9.14.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9249)
* [fix(deps): update dependency human-format from 1.2.0 to v1.2.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9246)
* [fix(deps): update dependency @elastic/elasticsearch from 8.15.1 to v8.15.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7466)
* [Fix metadata teaser preview include rendering](https://github.com/livingdocsIO/livingdocs-editor/pull/9226)
* [Hide incoming links from ticker entries in document info panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9218)
* [fix(deps): update dependency sass from 1.79.6 to v1.80.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9118)
* [Add li-tasks-v2 metadata filter for assignees](https://github.com/livingdocsIO/livingdocs-editor/pull/9187)
* [Overfetch history revisions by one to check if more are available to load](https://github.com/livingdocsIO/livingdocs-editor/pull/9236)
* [Add task assignee display filter to example server planning system project](https://github.com/livingdocsIO/livingdocs-server/pull/7455)
* [Planning Boards: fix date format](https://github.com/livingdocsIO/livingdocs-editor/pull/9237)
* [Unlink Kordiam publication if the story gets deleted](https://github.com/livingdocsIO/livingdocs-server/pull/7457)
* [Fix undo/redo while ticker is open](https://github.com/livingdocsIO/livingdocs-editor/pull/9233)
* [Fix error when server config designs is not set](https://github.com/livingdocsIO/livingdocs-server/pull/7458)
* [Avoid language label to overlap title](https://github.com/livingdocsIO/livingdocs-editor/pull/9213)
* [Add link and urgent colour to task label](https://github.com/livingdocsIO/livingdocs-editor/pull/9193)
* [Fix positioning of side panels next to ticker panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9225)
* [Do not include empty strings in li-estimated-time-of-completion payload to prevent server schema errors](https://github.com/livingdocsIO/livingdocs-editor/pull/9219)
* [Hide display filters on media board with external sources](https://github.com/livingdocsIO/livingdocs-editor/pull/9220)
* [Only show print copies in document info panel when configured](https://github.com/livingdocsIO/livingdocs-editor/pull/9215)
* [Do not open floating panel when focusing/bluring components](https://github.com/livingdocsIO/livingdocs-editor/pull/9205)
* [Fix teaser transform rules](https://github.com/livingdocsIO/livingdocs-editor/pull/9200)
* [Fix clipboard reactivity](https://github.com/livingdocsIO/livingdocs-editor/pull/9209)
* [Expand comments when clicking into commented text](https://github.com/livingdocsIO/livingdocs-editor/pull/9204)
* [Fix task cell minus sign and spacing](https://github.com/livingdocsIO/livingdocs-editor/pull/9203)
* [Fix Desk-Net backwards compatibility](https://github.com/livingdocsIO/livingdocs-editor/pull/9201)
* [Clipboard state fixes and refactoring](https://github.com/livingdocsIO/livingdocs-editor/pull/9190)
* [Bugfix where includes are not resolved](https://github.com/livingdocsIO/livingdocs-editor/pull/9196)
* [fix(field Extractor): return moved out of loop](https://github.com/livingdocsIO/livingdocs-editor/pull/9195)
* [Close clipboard when toggling insert panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9188)
* [Restore support for forceLinkUsingDesknetApiRequest setting](https://github.com/livingdocsIO/livingdocs-server/pull/7445)
* [Task Screens: Collapsed Board State](https://github.com/livingdocsIO/livingdocs-editor/pull/9186)
* [Allow sending to inbox with document update permission](https://github.com/livingdocsIO/livingdocs-server/pull/7447)
* [Fix realtime updates for multilist editor inbox](https://github.com/livingdocsIO/livingdocs-editor/pull/9183)
* [Fix: add missing multiselect translations](https://github.com/livingdocsIO/livingdocs-editor/pull/9178)
* [fix(user-avatar): Icon size](https://github.com/livingdocsIO/livingdocs-editor/pull/9133)
* [Remove support for dashboards of type 'dashboard'](https://github.com/livingdocsIO/livingdocs-server/pull/7433)
* [Remove support for dashboards of type 'dashboard'](https://github.com/livingdocsIO/livingdocs-editor/pull/9162)
* [Add type to release-2024-09 breaking change](https://github.com/livingdocsIO/livingdocs-server/pull/7436)
* [Fix: increase menu-item max length](https://github.com/livingdocsIO/livingdocs-editor/pull/9161)
* [Remove support for Angular dashboard cards](https://github.com/livingdocsIO/livingdocs-editor/pull/9160)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2025-01`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

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
| Node                           | 18                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
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

## Deprecations

## Features

TODO (featureset not 100% defined yet)

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* TBD

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* TBD

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
