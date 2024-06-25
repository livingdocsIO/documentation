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
* [Fix/Manual Document Status in Table Dashboard Main Cell](https://github.com/livingdocsIO/livingdocs-editor/pull/8658)
* [Document Transform Flows](https://github.com/livingdocsIO/livingdocs-server/pull/6945)
* [Show user avatars in merge views](https://github.com/livingdocsIO/livingdocs-editor/pull/8655)
* [Add back (updated) translation for media library button](https://github.com/livingdocsIO/livingdocs-editor/pull/8656)
* [fix(deps): update dependency fast-json-stringify from 5.16.1 to v6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7026)
* [fix(table dashboard): Integer Cell](https://github.com/livingdocsIO/livingdocs-editor/pull/8653)
* [Refactor workspace access](https://github.com/livingdocsIO/livingdocs-editor/pull/8634)
* [Assistant bugfixes and improved error messages](https://github.com/livingdocsIO/livingdocs-editor/pull/8647)
* [Comyan: Config based mapping of metadata on drag](https://github.com/livingdocsIO/livingdocs-editor/pull/8610)
* [Comyan: Add config for dynamic metadata mapping](https://github.com/livingdocsIO/livingdocs-server/pull/6977)
* [Restore old delivery build UI behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/8651)
* [Make delivery build abort button configurable](https://github.com/livingdocsIO/livingdocs-server/pull/7024)
* [Offline mode improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/8646)
* [Offline mode improvements](https://github.com/livingdocsIO/livingdocs-server/pull/7022)
* [Command API enhancements](https://github.com/livingdocsIO/livingdocs-server/pull/7023)
* [Upload UI conditions](https://github.com/livingdocsIO/livingdocs-editor/pull/8642)
* [Fix: document create functions require a title property](https://github.com/livingdocsIO/livingdocs-server/pull/7015)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/7021)
* [Provide userId to Desk-Net Global functions](https://github.com/livingdocsIO/livingdocs-server/pull/7019)
* [fix(deps): update dependency fastify from 4.27.0 to v4.28.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8631)
* [fix(deps): update dependency nodemailer from 6.9.13 to v6.9.14 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7014)
* [fix(deps): update dependency webpack from 5.92.0 to v5.92.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8641)
* [Fix: simple search does not return results with exact matching title](https://github.com/livingdocsIO/livingdocs-server/pull/7001)
* [Fix: sz article opening bug](https://github.com/livingdocsIO/livingdocs-editor/pull/8638)
* [fix(deps): update dependency c8 from 10.0.0 to v10.1.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7011)
* [Improve offline mode wording](https://github.com/livingdocsIO/livingdocs-editor/pull/8639)
* [Media Library: UI label consistency](https://github.com/livingdocsIO/livingdocs-editor/pull/8449)
* [Offline mode](https://github.com/livingdocsIO/livingdocs-editor/pull/8599)
* [Offline mode](https://github.com/livingdocsIO/livingdocs-server/pull/6970)
* [fix(deps): update dependency jose from 5.4.0 to v5.4.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7009)
* [Always log webhook requests](https://github.com/livingdocsIO/livingdocs-server/pull/7005)
* [Do not send new device email for revoked sessions](https://github.com/livingdocsIO/livingdocs-server/pull/6989)
* [fix(deps): update dependency @elastic/elasticsearch8 from 8.13.1 to v8.14.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7000)
* [Feat: SZ article opening behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/8598)
* [fix(deps): update dependency sass from 1.77.5 to v1.77.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8633)
* [Temporarily make content schema less strict in the Desk-Net global integration create function](https://github.com/livingdocsIO/livingdocs-server/pull/6994)
* [fix(deps): update dependency @livingdocs/framework from 29.4.5 to v29.4.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6991)
* [Do not emit comment update events for `eventSource: remote`](https://github.com/livingdocsIO/livingdocs-editor/pull/8627)
* [fix(deps): update dependency webpack from 5.91.0 to v5.92.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8605)
* [Fix image extraction on extracted teaser images](https://github.com/livingdocsIO/livingdocs-editor/pull/8626)
* [Draft Storage: Correctly diff local documents against base and remote documents](https://github.com/livingdocsIO/livingdocs-editor/pull/8606)
* [Fix `li-link-edit` document search filters](https://github.com/livingdocsIO/livingdocs-editor/pull/8608)
* [fix(deps): update dependency exifreader from 4.23.2 to v4.23.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6983)
* [fix(deps): update dependency @livingdocs/framework from 29.4.4 to v29.4.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8611)
* [fix(deps): update dependency @livingdocs/framework from 29.4.4 to v29.4.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6982)
* [Metadata assistants](https://github.com/livingdocsIO/livingdocs-editor/pull/8551)
* [Metadata assistants](https://github.com/livingdocsIO/livingdocs-server/pull/6948)
* [fix(deps): update dependency sass from 1.77.4 to v1.77.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8607)
* [fix(deps): update dependency @livingdocs/framework from 29.4.3 to v29.4.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6971)
* [fix(deps): update dependency @livingdocs/framework from 29.4.3 to v29.4.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8604)
* [Fix ticker reordering issues](https://github.com/livingdocsIO/livingdocs-editor/pull/8588)
* [Fix publication scheduling for postgres dates](https://github.com/livingdocsIO/livingdocs-server/pull/6966)
* [fix(deps): update aws-sdk from 3.590.0 to v3.592.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6956)
* [Ticker Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/8575)
* [Trigger pusher event when updating delivery builds](https://github.com/livingdocsIO/livingdocs-editor/pull/8585)
* [Trigger pusher event when updating delivery builds](https://github.com/livingdocsIO/livingdocs-server/pull/6965)
* [Fix parse-date requires](https://github.com/livingdocsIO/livingdocs-server/pull/6961)
* [Delivery Builds: User Choices](https://github.com/livingdocsIO/livingdocs-editor/pull/8517)
* [Delivery Builds: User Choices](https://github.com/livingdocsIO/livingdocs-server/pull/6923)
* [Draft Storage: Fix conflict with self](https://github.com/livingdocsIO/livingdocs-editor/pull/8579)
* [fix(deps): update dependency @google-cloud/storage from 7.11.1 to v7.11.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6959)
* [Hide draft save logs unless relevant](https://github.com/livingdocsIO/livingdocs-editor/pull/8572)
* [fix(deps): update babel from 7.24.6 to v7.24.7 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/8571)
* [Fix print plugin this context](https://github.com/livingdocsIO/livingdocs-editor/pull/8564)
* [Feat: expose comyan publish hook && add config to register hooks](https://github.com/livingdocsIO/livingdocs-server/pull/6939)
* [Do not throw in vue created hooks](https://github.com/livingdocsIO/livingdocs-editor/pull/8557)
* [fix(deps): update dependency pg from 8.11.5 to v8.11.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6952)
* [Draft Storage: Fix document diffing and conflict handling [master]](https://github.com/livingdocsIO/livingdocs-editor/pull/8545)
* [fix(deps): update dependency sass from 1.77.3 to v1.77.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8541)
* [Draft Storage Refactoring - Part 3](https://github.com/livingdocsIO/livingdocs-editor/pull/8534)
* [fix(deps): update dependency exifreader from 4.23.1 to v4.23.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6944)
* [fix(deps): update dependency sass from 1.77.2 to v1.77.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8537)
* [Fix an error that occurred when rendering an include with preloaded documents and doNotRender](https://github.com/livingdocsIO/livingdocs-server/pull/6938)
* [fix(deps): update dependency ua-parser-js from 1.0.37 to v1.0.38 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6937)
* [Do not show archived API clients](https://github.com/livingdocsIO/livingdocs-server/pull/6933)
* [Pass `feature.log` to `config.extractProjects()` within oidc-api](https://github.com/livingdocsIO/livingdocs-server/pull/6930)
* [Draft Storage Refactoring - Part 2](https://github.com/livingdocsIO/livingdocs-editor/pull/8530)
* [Fix dropping WoodWing images into image components](https://github.com/livingdocsIO/livingdocs-editor/pull/8529)
* [fix(deps): update babel from 7.24.5 to v7.24.6 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/8528)
* [fix(deps): update aws-sdk from 3.577.0 to v3.583.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6921)
* [Fix bundle error on metadata screen](https://github.com/livingdocsIO/livingdocs-editor/pull/8524)
* [chore(deps): update dependency pino-pretty from 11.0.0 to v11.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6926)
* [Prevent Editor Crashes: We suspect that error serialization can produce a memory leak](https://github.com/livingdocsIO/livingdocs-editor/pull/8518)
* [fix(project setup): URLs in tables](https://github.com/livingdocsIO/livingdocs-editor/pull/8513)
* [fix(deps): update dependency @livingdocs/framework from 29.4.2 to v29.4.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8511)
* [fix(deps): update dependency css-loader from 7.1.1 to v7.1.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8510)
* [Improve autosave issue detection logs](https://github.com/livingdocsIO/livingdocs-editor/pull/8505)
* [fix(deps): update dependency axios from 1.7.1 to v1.7.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8502)
* [chore(deps): update dependency @google-cloud/vision from 4.2.1 to v4.3.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6920)
* [fix(deps): update dependency @google-cloud/storage from 7.11.0 to v7.11.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6917)
* [fix(deps): update dependency axios from 1.7.1 to v1.7.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6918)
* [fix(publish panel): Delivery button](https://github.com/livingdocsIO/livingdocs-editor/pull/8501)
* [fix(deps): update dependency axios from 1.6.8 to v1.7.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6915)
* [Fix comment updates and reloads when switching views](https://github.com/livingdocsIO/livingdocs-editor/pull/8491)
* [Log error when document saving is stuck](https://github.com/livingdocsIO/livingdocs-editor/pull/8479)
* [fix(deps): update dependency fluent-ffmpeg from 2.1.2 to v2.1.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6914)
* [Fix/Print Layout Modal](https://github.com/livingdocsIO/livingdocs-editor/pull/8476)
* [fix(deps): update dependency sharp from 0.33.3 to v0.33.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6911)
* [fix(deps): update dependency sass from 1.77.1 to v1.77.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8477)
* [Fix: handle overflow for the publication dropdown](https://github.com/livingdocsIO/livingdocs-editor/pull/8469)
* [Add getCount to documentPreloader for dynamic teaser count requirements](https://github.com/livingdocsIO/livingdocs-server/pull/6899)
* [fix(deps): update aws-sdk from 3.575.0 to v3.576.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6900)
* [fix: don't fail adding components with include service without paramsSchema](https://github.com/livingdocsIO/livingdocs-editor/pull/8464)
* [Improvement/Document Notification](https://github.com/livingdocsIO/livingdocs-editor/pull/8303)
* [Increment config version when updating group members](https://github.com/livingdocsIO/livingdocs-editor/pull/8460)
* [fix(deps): update dependency pino from 9.0.0 to v9.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6895)
* [Display error notification when Desk-Net story creation fails](https://github.com/livingdocsIO/livingdocs-editor/pull/8456)
* [Fix k-menu: close on session expiration](https://github.com/livingdocsIO/livingdocs-editor/pull/8450)
* [Load document state from database on kanban dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/8451)
* [fix(deps): update aws-sdk from 3.572.0 to v3.574.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6889)
* [chore(deps): update dependency jose from 5.2.4 to v5.3.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8448)
* [Fix call to assertFunction generator [master]](https://github.com/livingdocsIO/livingdocs-server/pull/6888)
* [fix(deps): update dependency @livingdocs/framework from 29.4.1 to v29.4.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6885)
* [fix(deps): update dependency @livingdocs/framework from 29.4.1 to v29.4.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8445)
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
