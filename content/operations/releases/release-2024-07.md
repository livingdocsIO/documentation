---
type: release-notes
title: July 2024 Release
description: Technical Release Notes for release-2024-07
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-07/
  - /operations/releases/release-2024-07/release-2024-07/
---

{{< release-header
  title="July 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-07"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [fix(deps): update dependency semver from 7.6.1 to v7.6.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8444)
* [fix(deps): update dependency semver from 7.6.1 to v7.6.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6884)
* [fix(deps): update aws-sdk from 3.569.0 to v3.572.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6882)
* [Fix dashboard permissions for baseFilters with a `not contentType` declaration](https://github.com/livingdocsIO/livingdocs-editor/pull/8435)
* [Fix/User Merge](https://github.com/livingdocsIO/livingdocs-editor/pull/8425)
* [fix(deps): update dependency fastify from 4.26.2 to v4.27.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8417)
* [fix(deps): update dependency @google-cloud/storage from 7.10.2 to v7.11.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6867)
* [fix(deps): update dependency @livingdocs/framework from 29.4.0 to v29.4.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8418)
* [fix(deps): update dependency @livingdocs/framework from 29.4.0 to v29.4.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6878)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/6876)
* [fix(deps): update dependency semver from 7.6.0 to v7.6.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8416)
* [Fix azure blob storage error propagation](https://github.com/livingdocsIO/livingdocs-server/pull/6869)
* [fix(deps): update dependency sass from 1.76.0 to v1.77.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8412)
* [fix(deps): update dependency @livingdocs/framework from 29.3.7 to v29.4.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8401)
* [Support node v22](https://github.com/livingdocsIO/livingdocs-server/pull/6861)
* [fix: comment UI labels](https://github.com/livingdocsIO/livingdocs-editor/pull/8407)
* [fix(deps): update dependency @opentelemetry/instrumentation-dns from 0.36.0 to v0.36.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6859)
* [Support statistics on the publication index](https://github.com/livingdocsIO/livingdocs-server/pull/6854)
* [Feat: show delivery links on table dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/8340)
* [Fix: Reset editable teaser state on blur](https://github.com/livingdocsIO/livingdocs-editor/pull/8404)
* [fix(deps): update dependency pdfjs-dist from 4.1.392 to v4.2.67 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8397)
* [Do not track html tags in statistics.characterCount](https://github.com/livingdocsIO/livingdocs-server/pull/6851)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-07`, read on.

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
