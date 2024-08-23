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
* [Document Copy Flows](https://github.com/livingdocsIO/livingdocs-server/pull/7105)
* [Feat: document editing header - collaborators](https://github.com/livingdocsIO/livingdocs-editor/pull/8891)
* [fix(deps): update dependency @babel/preset-env from 7.25.3 to v7.25.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8905)
* [Set default paramsSchema values](https://github.com/livingdocsIO/livingdocs-editor/pull/8901)
* [Remove console error `this.externalSystemLabel is not a function`](https://github.com/livingdocsIO/livingdocs-editor/pull/8902)
* [Correctly prevent usage of _injector in vue components](https://github.com/livingdocsIO/livingdocs-editor/pull/8885)
* [fix(push-message): add push message icons on table dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/8896)
* [Document Inbox for Short-Term Planning](https://github.com/livingdocsIO/livingdocs-server/pull/7192)
* [Fix comyan drop handler in li-meta-image](https://github.com/livingdocsIO/livingdocs-editor/pull/8884)
* [🐞 Add missing defaultMetadata to ContentType Model to be able on Custom List v2 Filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8892)
* [fix(deps): update dependency wait-on from 7.2.0 to v8 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8890)
* [fix(deps): update dependency async from 3.2.5 to v3.2.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8889)
* [fix(deps): update dependency async from 3.2.5 to v3.2.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7205)
* [chore(deps): update dependency jose from 5.6.3 to v5.7.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8888)
* [fix(deps): update playwright monorepo from 1.46.0 to v1.46.1 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/8882)
* [fix(deps): update dependency sharp from 0.33.4 to v0.33.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7202)
* [Feat: add assistant proposals with media library entries LIFEAT005](https://github.com/livingdocsIO/livingdocs-editor/pull/8869)
* [feat(assistants): add proposals with media library entries LIFEAT005](https://github.com/livingdocsIO/livingdocs-server/pull/7194)
* [chore(deps): update dependency puppeteer-core from 23.0.2 to v23.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8878)
* [fix(deps): update dependency axios from 1.7.3 to 1.7.4 [security] (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8872)
* [fix(deps): update dependency axios from 1.7.3 to 1.7.4 [security] (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7195)
* [fix(publish panel): Horizontal scroll](https://github.com/livingdocsIO/livingdocs-editor/pull/8871)
* [Playwright page object model](https://github.com/livingdocsIO/livingdocs-editor/pull/8870)
* [fix(deps): update aws-sdk from 3.626.0 to v3.629.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7178)
* [chore(deps): update dependency @google-cloud/translate from 8.3.0 to v8.4.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7190)
* [Fix default value for li-language](https://github.com/livingdocsIO/livingdocs-editor/pull/8865)
* [Fix default input tests](https://github.com/livingdocsIO/livingdocs-editor/pull/8864)
* [Do not trigger initial save for default metadata values](https://github.com/livingdocsIO/livingdocs-editor/pull/8863)
* [Feat: add push message proposals](https://github.com/livingdocsIO/livingdocs-editor/pull/8848)
* [Feat: add push message proposals](https://github.com/livingdocsIO/livingdocs-server/pull/7174)
* [fix(deps): update dependency mocha from 10.7.0 to v10.7.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7184)
* [Close main navigation menu when URL changes](https://github.com/livingdocsIO/livingdocs-editor/pull/8851)
* [Expose 'document.metadata.update' policies to editor](https://github.com/livingdocsIO/livingdocs-server/pull/7179)
* [fix(deps): update dependency @aws-sdk/client-s3 from 3.624.0 to v3.626.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7176)
* [chore(deps): update dependency eslint-plugin-jsdoc from 49.0.0 to v50 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7177)
* [Fix media library dashboard with metadata property display filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8844)
* [Upgrade undici in package-lock.json](https://github.com/livingdocsIO/livingdocs-server/pull/7171)
* [fix(deps): update aws-sdk from 3.617.0 to v3.624.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7145)
* [Support data-li-external-system attribute of links in reference extraction](https://github.com/livingdocsIO/livingdocs-server/pull/7166)
* [fix(deps): update dependency cloudinary from 2.3.1 to v2.4.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7155)
* [Fix retresco cypress test because of main entities](https://github.com/livingdocsIO/livingdocs-editor/pull/8842)
* [fix(deps): update playwright monorepo from 1.45.3 to v1.46.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/8841)
* [Add support for Retresco main entities](https://github.com/livingdocsIO/livingdocs-server/pull/7164)
* [Use axios mock adapter post request params support in iMatrics tests](https://github.com/livingdocsIO/livingdocs-server/pull/7165)
* [Design/Durations](https://github.com/livingdocsIO/livingdocs-editor/pull/8838)
* [fix(info panel): Reference list scaling](https://github.com/livingdocsIO/livingdocs-editor/pull/8839)
* [Add support for iMatrics test environments](https://github.com/livingdocsIO/livingdocs-server/pull/7157)
* [chore(deps): update dependency globals from 15.8.0 to v15.9.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7161)
* [chore(deps): update dependency globals from 15.8.0 to v15.9.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8837)
* [fix(deps): update dependency @babel/preset-env from 7.25.2 to v7.25.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8833)
* [feat: document info panel - add statistics options per content type](https://github.com/livingdocsIO/livingdocs-server/pull/7134)
* [feat: document info panel](https://github.com/livingdocsIO/livingdocs-editor/pull/8797)
* [fix(deps): update babel from 7.24.9 to v7.25.2 (master) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/8817)
* [Migrate editor toolbar to Vue](https://github.com/livingdocsIO/livingdocs-editor/pull/8815)
* [chore(deps): update dependency eslint-plugin-jsdoc from 48.8.3 to v48.9.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7152)
* [fix(deps): update dependency pdfjs-dist from 4.4.168 to v4.5.136 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8824)
* [fix: rename document statistics components filter label](https://github.com/livingdocsIO/livingdocs-editor/pull/8810)
* [chore(deps): update dependency pino-socket from 7.3.0 to v7.4.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7144)
* [fix(deps): update aws-sdk (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7118)
* [fix(deps): update dependency @smithy/node-http-handler from 3.1.3 to v3.1.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7140)
* [Only increase width of wide side panels on large screens](https://github.com/livingdocsIO/livingdocs-editor/pull/8803)
* [fix(deps): update dependency @livingdocs/framework from 29.5.6 to v29.5.7 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7135)
* [fix(deps): update dependency @livingdocs/framework from 29.5.6 to v29.5.7 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8804)
* [fix(deps): update dependency mocha from 10.6.1 to v10.7.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7127)
* [Use new editor URLs](https://github.com/livingdocsIO/livingdocs-server/pull/7110)
* [Remove URLs from most editor states](https://github.com/livingdocsIO/livingdocs-editor/pull/8777)
* [Do not call moment.defineLocale multipe times](https://github.com/livingdocsIO/livingdocs-editor/pull/8793)
* [fix(deps): update playwright monorepo from 1.45.2 to v1.45.3 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/8800)
* [fix(deps): update dependency @livingdocs/framework from 29.5.5 to v29.5.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7133)
* [Fix ticker entry component prefilling](https://github.com/livingdocsIO/livingdocs-editor/pull/8784)
* [Set event source for scheduled publish notification to allow Desk-Net global integration hook to run](https://github.com/livingdocsIO/livingdocs-server/pull/7129)
* [fix(deps): update dependency @livingdocs/framework from 29.5.4 to v29.5.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8796)
* [fix(deps): update dependency @livingdocs/framework from 29.5.4 to v29.5.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7128)
* [chore(deps): update dependency eslint-plugin-jsdoc from 48.7.0 to v48.8.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7126)
* [Do not load document content for Desk-Net schedule](https://github.com/livingdocsIO/livingdocs-server/pull/7122)
* [Increase limit for Desk-Net schedule linked document search](https://github.com/livingdocsIO/livingdocs-server/pull/7119)
* [Only persist document to local storage when it is dirty](https://github.com/livingdocsIO/livingdocs-editor/pull/8789)
* [Do not unnecessary save document on exit](https://github.com/livingdocsIO/livingdocs-editor/pull/8788)
* [Make `migrations.versionBumpBatchSize` and `migrations.versionBumpConcurrency` configurable](https://github.com/livingdocsIO/livingdocs-server/pull/7115)
* [fix(date time fields): Clear function](https://github.com/livingdocsIO/livingdocs-editor/pull/8786)
* [Feat: add direct publishing which disables the quick publishing guards](https://github.com/livingdocsIO/livingdocs-editor/pull/8747)
* [feat: add direct publishing which disables the quick publishing guards](https://github.com/livingdocsIO/livingdocs-server/pull/7094)
* [fix(deps): update dependency @livingdocs/framework from 29.5.3 to v29.5.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7114)
* [fix(deps): update dependency @livingdocs/framework from 29.5.3 to v29.5.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8783)
* [fix(deps): update dependency semver from 7.6.2 to v7.6.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7111)
* [fix(deps): update dependency semver from 7.6.2 to v7.6.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8782)
* [fix(deps): update dependency cypress from 13.13.0 to v13.13.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8779)
* [fix(deps): update playwright monorepo from 1.45.1 to v1.45.2 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/8780)
* [Harmonize toolbar behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/8751)
* [fix(sass): Deprecations](https://github.com/livingdocsIO/livingdocs-editor/pull/8772)
* [fix(assistants): Wording](https://github.com/livingdocsIO/livingdocs-editor/pull/8771)
* [Make wide side panels wider](https://github.com/livingdocsIO/livingdocs-editor/pull/8760)
* [fix(deps): update dependency @smithy/node-http-handler from 3.1.2 to v3.1.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7106)
* [fix(deps): update dependency @uirouter/angularjs from 1.1.0 to v1.1.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8770)
* [Fix support for `component` attribute in livingdocs helpers](https://github.com/livingdocsIO/livingdocs-server/pull/7102)
* [Hide history link in publish control panel for data records](https://github.com/livingdocsIO/livingdocs-editor/pull/8754)
* [Update documentTransformFlows structure in transform flow tests](https://github.com/livingdocsIO/livingdocs-editor/pull/8762)
* [chore(deps): update dependency puppeteer-core from 22.12.1 to v22.13.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8758)
* [chore(deps): update dependency eslint-plugin-jsdoc from 48.6.0 to v48.7.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7101)
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
