---
type: release-notes
title: September 2024 Release
description: Technical Release Notes for release-2024-09
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-09/
  - /operations/releases/release-2024-09/release-2024-09/
---

{{< release-header
  title="September 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-09"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [fix(deps): update dependency @livingdocs/framework from 29.5.1 to v29.5.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8752)
* [Fix indexing cli --wait output](https://github.com/livingdocsIO/livingdocs-server/pull/7098)
* [Migrate ESLint config to the flat config format](https://github.com/livingdocsIO/livingdocs-editor/pull/8735)
* [fix(deps): update dependency @google-cloud/storage from 7.11.2 to v7.11.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7095)
* [fix(deps): update dependency sass from 1.77.6 to v1.77.7 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8750)
* [fix(deps): update dependency @livingdocs/fastify-webpack from 4.0.1 to v4.0.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8748)
* [Migrate ESLint config to the flat config format](https://github.com/livingdocsIO/livingdocs-server/pull/6829)
* [fix: quick publish button not aligning correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/8744)
* [Update hugo URL to new path](https://github.com/livingdocsIO/livingdocs-editor/pull/8740)
* [fix(deps): update dependency @smithy/node-http-handler from 3.1.1 to v3.1.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7090)
* [fix(metadata): Desk-net](https://github.com/livingdocsIO/livingdocs-editor/pull/8736)
* [fix(deps): update dependency lru-cache from 10.3.0 to v10.3.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7087)
* [Add error states to references](https://github.com/livingdocsIO/livingdocs-editor/pull/8661)
* [ Remove example-server desknet metadata mapping](https://github.com/livingdocsIO/livingdocs-server/pull/7082)
* [Only show lists create button if user has create permission](https://github.com/livingdocsIO/livingdocs-editor/pull/8727)
* [Fix potential reactivity issue in draft storage](https://github.com/livingdocsIO/livingdocs-editor/pull/8726)
* [fix(deps): update aws-sdk from 3.608.0 to v3.609.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7068)
* [fix(deps): update dependency jose from 5.6.2 to v5.6.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7079)
* [Only call channel.getContentType when planningSet.bundleContentType is really defined](https://github.com/livingdocsIO/livingdocs-editor/pull/8717)
* [Fix li-tree reference extraction](https://github.com/livingdocsIO/livingdocs-server/pull/7072)
* [Add deprecation notice for comyan usage reporting](https://github.com/livingdocsIO/livingdocs-server/pull/7063)
* [Prevent window reload during tests](https://github.com/livingdocsIO/livingdocs-editor/pull/8706)
* [Provide `projectConfig` to Desk-Net functions](https://github.com/livingdocsIO/livingdocs-server/pull/7058)
* [Use target content type settings during document transforms](https://github.com/livingdocsIO/livingdocs-server/pull/7052)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-09`, read on.

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
- TBD

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:

- TBD

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
