---
type: release-notes
title: May 2025 Release
description: Technical Release Notes for release-2025-05
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2025-05
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
- [fix(deps): update dependency pg from 8.14.0 to v8.14.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7851)
- [Fix: peiq check externalid on image drop](https://github.com/livingdocsIO/livingdocs-editor/pull/9684)
- [fix: document usage of single quotes for secret-add value](https://github.com/livingdocsIO/livingdocs-server/pull/7848)
- [fix(deps): update dependency @livingdocs/framework from 32.7.1 to v32.7.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7846)
- [fix(deps): update dependency @livingdocs/framework from 32.7.1 to v32.7.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9734)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/9733)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/7845)
- [Add li-kordiam-integration to supported dashboard columns](https://github.com/livingdocsIO/livingdocs-editor/pull/9728)
- [Make document dashboard toolbar action button active state reactive](https://github.com/livingdocsIO/livingdocs-editor/pull/9718)
- [fix(li-button--bar): Long labels](https://github.com/livingdocsIO/livingdocs-editor/pull/9722)
- [Show image for current locale in media library lightbox](https://github.com/livingdocsIO/livingdocs-editor/pull/9719)
- [Remove Menu Tool](https://github.com/livingdocsIO/livingdocs-server/pull/7838)
- [Remove Menu Tool](https://github.com/livingdocsIO/livingdocs-editor/pull/9714)
- [feat: migrate comment header from angular to vue](https://github.com/livingdocsIO/livingdocs-editor/pull/9713)
- [fix(deps): update dependency axios from 1.8.2 to v1.8.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9716)
- [fix(deps): update dependency @babel/core from 7.26.9 to v7.26.10 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9711)
- [Show more than 100 revisions in history](https://github.com/livingdocsIO/livingdocs-server/pull/7830)
- [Ignore the legacy revision.data.layout property that prevents diffing history entries on content type change](https://github.com/livingdocsIO/livingdocs-editor/pull/9670)
- [Save field extractor changes after assistant finished](https://github.com/livingdocsIO/livingdocs-editor/pull/9673)
- [fix(deps): update dependency @livingdocs/framework from 32.7.0 to v32.7.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7829)
- [fix(deps): update dependency @livingdocs/framework from 32.7.0 to v32.7.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9699)
- [Do not try to serialize streams in pino serializer for axios](https://github.com/livingdocsIO/livingdocs-server/pull/7821)
- [Fix: peiq add externalid and systemname to elasticsearch](https://github.com/livingdocsIO/livingdocs-server/pull/7796)
- [No longer allow videos and files in inbox](https://github.com/livingdocsIO/livingdocs-server/pull/7811)
- [Omit devDependencies from npm-shrinkwrap.json](https://github.com/livingdocsIO/livingdocs-server/pull/7813)
- [Account for migratedDocumentVersionDelta when component condition is triggered](https://github.com/livingdocsIO/livingdocs-server/pull/7814)
- [Fix: rename url path to serve-image instead of serve-images](https://github.com/livingdocsIO/livingdocs-editor/pull/9690)
- [Fix: rename url path to serve-image instead of serve-images](https://github.com/livingdocsIO/livingdocs-server/pull/7808)
- [Add tests for version 2025-03 of /latestPublication](https://github.com/livingdocsIO/livingdocs-server/pull/7801)
- [fix(deps): update dependency axios from 1.7.9 to 1.8.2 [security] (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9687)
- [Throw LIBREAKING038 and LIBREAKING039 messages](https://github.com/livingdocsIO/livingdocs-server/pull/7797)
- [Fix creation flow warning](https://github.com/livingdocsIO/livingdocs-editor/pull/9678)
- [Fix distribution dates](https://github.com/livingdocsIO/livingdocs-editor/pull/9679)
- [Open documents from task screen with task panel open](https://github.com/livingdocsIO/livingdocs-editor/pull/9674)
- [Clear authorization middleware cache on api client token or user session change](https://github.com/livingdocsIO/livingdocs-server/pull/7793)
- [Fix: peiq do metadata extraction when replacing an image](https://github.com/livingdocsIO/livingdocs-editor/pull/9666)
- [fix(media library): detail details](https://github.com/livingdocsIO/livingdocs-editor/pull/9635)
- [fix(deps): update dependency @livingdocs/framework from 32.6.2 to v32.7.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7756)
- [Fix positioning for named crops in portrait mode](https://github.com/livingdocsIO/livingdocs-editor/pull/9662)
- [Fix Editor Scrolling](https://github.com/livingdocsIO/livingdocs-editor/pull/9660)
- [fix(deps): update dependency exifreader from 4.26.1 to v4.26.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7789)
- [Use Print instead of Druck for german print version labels](https://github.com/livingdocsIO/livingdocs-editor/pull/9649)
- [Trackjs Sanitization](https://github.com/livingdocsIO/livingdocs-editor/pull/9644)
- [fix(distribution dates): Polish](https://github.com/livingdocsIO/livingdocs-editor/pull/9647)
- [Fix: image-variants pass strip path prefix ](https://github.com/livingdocsIO/livingdocs-editor/pull/9630)
- [Prevent notification composition failure when no modes are defined](https://github.com/livingdocsIO/livingdocs-server/pull/7782)
- [Account for migratedDocumentVersionDelta when setting model version after an update](https://github.com/livingdocsIO/livingdocs-server/pull/7778)
- [Only show "Store in Archive" when `use2025Behavior: true`](https://github.com/livingdocsIO/livingdocs-editor/pull/9622)
- [Fix: azure storage not handling 404 correctly](https://github.com/livingdocsIO/livingdocs-server/pull/7775)
- [Rename media library config option preserveOriginalAssets to use2025Behavior (Part II)](https://github.com/livingdocsIO/livingdocs-editor/pull/9638)
- [Prevent serving invalid images from Public API](https://github.com/livingdocsIO/livingdocs-server/pull/7758)
- [Do not focus component when mentioning user in comment](https://github.com/livingdocsIO/livingdocs-editor/pull/9617)
- [Do not let format popover slip behind preview panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9623)
- [Fix/media library footer width](https://github.com/livingdocsIO/livingdocs-editor/pull/9597)
- [Make webhook timeout configurable](https://github.com/livingdocsIO/livingdocs-server/pull/7764)
- [Keep support for beta routes](https://github.com/livingdocsIO/livingdocs-server/pull/7759)
- [Fix opening document inbox when in visibility mode](https://github.com/livingdocsIO/livingdocs-editor/pull/9610)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2025-05`, read on.

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

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
