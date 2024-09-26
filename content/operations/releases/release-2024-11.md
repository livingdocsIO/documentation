---
type: release-notes
title: November 2024 Release
description: Technical Release Notes for release-2024-11
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-11/
---

{{< release-header
  title="November 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-11"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Fix image url patching when crop x or y coordinates are not present](https://github.com/livingdocsIO/livingdocs-server/pull/7315)
* [Allow empty `oembed.allowedCoreProviders` array in the server configuration](https://github.com/livingdocsIO/livingdocs-server/pull/7309)
* [fix(deps): update dependency @livingdocs/framework from 30.0.0 to v30.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9036)
* [fix(deps): update dependency @livingdocs/framework from 30.0.0 to v30.0.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7306)
* [App structure simplification](https://github.com/livingdocsIO/livingdocs-editor/pull/8850)
* [fix(deps): update dependency sass from 1.78.0 to v1.79.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9025)
* [fix(deps): update dependency @google-cloud/storage from 7.12.1 to v7.13.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7294)
* [fix(deps): update dependency jose from 5.9.2 to v5.9.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7303)
* [chore(deps): update dependency eslint from 9.10.0 to v9.11.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9033)
* [chore(deps): update dependency eslint from 9.10.0 to v9.11.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7301)
* [fix(manual-status): breaking onto newline](https://github.com/livingdocsIO/livingdocs-editor/pull/9029)
* [chore(deps): update dependency puppeteer-core from 23.3.1 to v23.4.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9027)
* [fix(deps): update dependency date-fns from 4.0.0 to v4.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7291)
* [fix(deps): update dependency pg from 8.12.0 to v8.13.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7287)
* [fix(deps): update dependency babel-loader from 9.1.3 to v9.2.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9019)
* [fix(deps): update dependency ua-parser-js from 1.0.38 to v1.0.39 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7282)
* [fix(deps): update aws-sdk from 3.645.0 to v3.651.1 (master) (minor) - autoclosed](https://github.com/livingdocsIO/livingdocs-server/pull/7267)
* [fix: focalpoint reactivity](https://github.com/livingdocsIO/livingdocs-editor/pull/9007)
* [Support prefilling of directives with multiple metadata values of media library entries](https://github.com/livingdocsIO/livingdocs-server/pull/7277)
* [Support prefilling of directives with multiple metadata values of media library entries](https://github.com/livingdocsIO/livingdocs-editor/pull/9011)
* [Normalize date fields while indexing](https://github.com/livingdocsIO/livingdocs-server/pull/7268)
* [fix(deps): update dependency wait-on from 8.0.0 to v8.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9005)
* [Fix: close info panel on clicking outside but also when button is clicked again](https://github.com/livingdocsIO/livingdocs-editor/pull/9002)
* [fix(deps): update aws-sdk (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7252)
* [Make toolbar actions reactive](https://github.com/livingdocsIO/livingdocs-editor/pull/8997)
* [Upload center fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/8998)
* [fix(deps): update dependency body-parser from 1.20.2 to v1.20.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7265)
* [fix(deps): update dependency @smithy/signature-v4 from 4.1.0 to v4.1.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7263)
* [Expose maxSize attribute that defines the maximum bytes on file uploads](https://github.com/livingdocsIO/livingdocs-server/pull/7261)
* [Only show invalid file size error once during image upload](https://github.com/livingdocsIO/livingdocs-editor/pull/8991)
* [Fix restoring documents from local storage after design version bumps](https://github.com/livingdocsIO/livingdocs-editor/pull/8989)
* [Support loading users with any archived state](https://github.com/livingdocsIO/livingdocs-server/pull/7256)
* [fix(deps): update dependency exifreader from 4.23.3 to v4.23.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7255)
* [fix(admin-dashboard): occupation filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8976)
* [Disable assistants when workspace is read-only](https://github.com/livingdocsIO/livingdocs-editor/pull/8974)
* [fix: info panel goto button](https://github.com/livingdocsIO/livingdocs-editor/pull/8965)
* [Delete unused event related to LIBREAKING035](https://github.com/livingdocsIO/livingdocs-server/pull/7251)
* [fix(deps): update dependency cypress from 13.14.1 to v13.14.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8966)
* [Only set default locale if none is present on document create](https://github.com/livingdocsIO/livingdocs-editor/pull/8962)
* [fix(deps): update dependency nodemailer from 6.9.14 to v6.9.15 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7247)
* [Fix: always show push message button](https://github.com/livingdocsIO/livingdocs-editor/pull/8950)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-11`, read on.

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
