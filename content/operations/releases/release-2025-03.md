---
type: release-notes
title: March 2025 Release
description: Technical Release Notes for release-2025-03
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2025-03/
---

{{< release-header
  title="March 2025 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2025-03"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Fix display filter popups moving around](https://github.com/livingdocsIO/livingdocs-editor/pull/9440)
* [fix(deps): update dependency @livingdocs/framework from 32.2.1 to v32.2.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7617)
* [fix(deps): update dependency @livingdocs/framework from 32.2.1 to v32.2.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9445)
* [Fix teasers in visibility mode](https://github.com/livingdocsIO/livingdocs-editor/pull/9442)
* [Extract dashboard content types also from nested .or and .and filter arrays](https://github.com/livingdocsIO/livingdocs-editor/pull/9441)
* [fix(deps): update dependency sass from 1.83.0 to v1.83.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9438)
* [fix(deps): update dependency fastify from 5.2.0 to v5.2.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7613)
* [Hide text count when print preview is open](https://github.com/livingdocsIO/livingdocs-editor/pull/9432)
* [Scroll entire publish panel (including error section)](https://github.com/livingdocsIO/livingdocs-editor/pull/9428)
* [Do not throw an error when the max filesize is reached](https://github.com/livingdocsIO/livingdocs-server/pull/7606)
* [fix(deps): update dependency fast-glob from 3.3.2 to v3.3.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7611)
* [fix(deps): update dependency pino from 9.5.0 to v9.6.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7601)
* [Allow CI workflow to skip if npm audit returns vulnerabilities](https://github.com/livingdocsIO/livingdocs-server/pull/7604)
* [Fix print preview size](https://github.com/livingdocsIO/livingdocs-editor/pull/9429)
* [Set split pane min-width to configured start width if smaller than default (375px)](https://github.com/livingdocsIO/livingdocs-editor/pull/9425)
* [fix(deps): update dependency @smithy/node-http-handler from 3.3.2 to v3.3.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7600)
* [Register PEIQ drop handler before image drop handler](https://github.com/livingdocsIO/livingdocs-editor/pull/9415)
* [Vulnerability patches December 2024 [master]](https://github.com/livingdocsIO/livingdocs-editor/pull/9416)
* [fix(deps): update dependency @aws-sdk/client-s3 from 3.716.0 to v3.717.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7596)
* [Check copySource exists when loading print flows](https://github.com/livingdocsIO/livingdocs-editor/pull/9409)
* [Ensure document loaded before opening panels](https://github.com/livingdocsIO/livingdocs-editor/pull/9410)
* [fix(deps): update dependency ioredis from 5.4.1 to v5.4.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7595)
* [Make the new `li-system-date` and `li-system-datetime` validations more strict](https://github.com/livingdocsIO/livingdocs-server/pull/7593)
* [Migrate template string renderings to the same function we use on the server](https://github.com/livingdocsIO/livingdocs-editor/pull/9122)
* [Respect count in example server teaser-list service](https://github.com/livingdocsIO/livingdocs-server/pull/7583)
* [fix(confirm button): Angular version](https://github.com/livingdocsIO/livingdocs-editor/pull/9406)
* [chore(deps): update dependency puppeteer-core from 23.11.0 to v23.11.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9407)
* [fix(deps): update dependency @livingdocs/framework from 32.2.0 to v32.2.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7588)
* [chore(deps): update dependency globals from 15.13.0 to v15.14.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7585)
* [Reduce include resolve requests in Teaser Manager](https://github.com/livingdocsIO/livingdocs-editor/pull/9389)
* [fix(deps): update dependency @livingdocs/framework from 32.1.1 to v32.2.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7580)
* [Remove nzz publish control behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/9388)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2025-03`, read on.

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
