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

## PRs to Categorize
* [Fix back navigation for pages not linked to an issue](https://github.com/livingdocsIO/livingdocs-editor/pull/8944)
* [Fix: small screen toolbar with css grid](https://github.com/livingdocsIO/livingdocs-editor/pull/8923)
* [Breaking Change: Remove support for `publication.updated` event](https://github.com/livingdocsIO/livingdocs-server/pull/7240)
* [Document inbox tests](https://github.com/livingdocsIO/livingdocs-editor/pull/8942)
* [Allow any characters in link directive urls](https://github.com/livingdocsIO/livingdocs-server/pull/7237)


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

## Deployment

### Before the deployment

No prior preparations (besides `livingdocs-server migrate up`) are required before rolling out this release.

### After the deployment

No preparations are required after rolling out this release.

### Rollback

Only rollback if you have a critical issue with the release in question. Usually forward patching is the better option.

If you need to rollback the release, you can do so by running the following command on the Livingdocs Server running the new release:

```sh
livingdocs-server migrate down
```

All document inbox entries added after the release deployment are lost when you do a rollback.

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 201-inbox-mutations.js
#   creates a copy of table document_inbox named document_inbox_v2, adapts scripts to use the new table (related to feature Document Inbox)
livingdocs-server migrate up
```

### Migrate `document_inbox` table to `document_inbox_v2` :fire:

This release we are migrating `document_inbox` to a new postgres table as the data structure is changing.
By migrating to the new table we can ensure a release rollback can be done more easily without breaking the functionality or losing data.

### Redirect URLs `/p/{projectHandle}/articles/{documentId}/*` to `/p/{projectHandle}/document/{documentId}`

All URLs of the form /p/{projectHandle}/articles/{documentId}/* will redirect to their corresponding /p/{projectHandle}/document/{documentId}/* URL. If a corresponding URL no longer exists, the URLs will redirect to the main URL /p/{projectHandle}/document/{documentId} and the associated action will no longer work.

## Deprecations

{{< feature-info "Operations" "server/editor" >}}
### NodeJS 18 :warning:

Support for NodeJS v18 will be removed in `release-2025-01`. Please upgrade your docker images and local environments to node v20 or v22. 

In your docker images change:
`FROM livingdocs/server-base:18 to FROM livingdocs/server-base:22` or `FROM livingdocs/server-base:18 to FROM livingdocs/server-base:20`
`FROM livingdocs/editor-base:18 to FROM livingdocs/editor-base:22` or `FROM livingdocs/editor-base:18 to FROM livingdocs/editor-base:20`
`FROM livingdocs/node:18 to FROM livingdocs/node:22` or `FROM livingdocs/node:18 to FROM livingdocs/node:20`

In your .nvmrc (if present) change the string from 18 to 22 or 20.

## Features

### Document Inbox :gift:



### Copy & Transform flows :gift:



### Document Info Panel :gift:



### Document Editing Header and Toolbar :gift:



### Space optimisation for side panels :gift:



### Dashboards: search caching behaviour :gift:



### Push Message Proposals :gift:



### Content Validation Errors :gift:



### Table dashboards: Direct publish without safeguard :gift:



### Retresco support for main entities :gift:



### iMatrics test environment support :gift:



### `li-system-text` metadata plugin :gift:



### Desknet -> Kordiam editor UI updates :gift:



## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-4067](https://nvd.nist.gov/vuln/detail/CVE-2024-4067) patched in `micromatch` v4.0.8
* [CVE-2024-38372](https://nvd.nist.gov/vuln/detail/CVE-2024-38372) patched in `undici` v6.19.2
* [CVE-2024-39338](https://nvd.nist.gov/vuln/detail/CVE-2024-39338) patched in `axios` v1.7.4
* [CVE-2024-41818](https://nvd.nist.gov/vuln/detail/CVE-2024-41818) patched in `fast-xml-parser` v4.4.1

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-4067](https://nvd.nist.gov/vuln/detail/CVE-2024-4067) patched in `micromatch` v4.0.8
* [CVE-2024-39338](https://nvd.nist.gov/vuln/detail/CVE-2024-39338) patched in `axios` v1.7.4
* [CVE-2024-42459](https://nvd.nist.gov/vuln/detail/CVE-2024-42459) patched in `elliptic` v6.5.7
* [CVE-2024-43788](https://nvd.nist.gov/vuln/detail/CVE-2024-43788) patched in `webpack` v5.94.0

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
* [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) vulnerability in `vue-template-compiler` it allows malicious users to perform XSS via prototype pollution.

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
