---
type: release-notes
title: July 2025 Release
description: Technical Release Notes for release-2025-07
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2025-07

systemRequirements:
  suggested:
    - name: Node
      version: 24
    - name: NPM
      version: 11
    - name: Postgres
      version: 17
    - name: Elasticsearch
      version: 9.x
    - name: OpenSearch
      version: 2.3.0
    - name: Redis
      version: 8
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:24
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:24
    - name: Browser Support
      version: Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78

  minimal:
    - name: Node
      version: 20.19
    - name: NPM
      version: 10
    - name: Postgres
      version: 13
    - name: Elasticsearch
      version: 7.x
    - name: OpenSearch
      version: 1
    - name: Redis
      version: 6.2
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:20:10
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:20:10
    - name: Browser Support
      version: Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize

- [Set default lock timeout of postgres read & write roles to 2s](https://github.com/livingdocsIO/livingdocs-server/pull/7970)
- [Remove unused angular directives](https://github.com/livingdocsIO/livingdocs-editor/pull/10091)
- [Feat: media center improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/10094)
- [News Agency Flow](https://github.com/livingdocsIO/livingdocs-editor/pull/10080)
- [News Agency Flow](https://github.com/livingdocsIO/livingdocs-server/pull/8133)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10090)
- [Breaking changes for release-2025-07](https://github.com/livingdocsIO/livingdocs-server/pull/8115)
- [News Agency Sidepanel: persist collapse indicator state in local storage](https://github.com/livingdocsIO/livingdocs-editor/pull/10077)
- [feat: add system metadata priority plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/10027)
- [feat: add system metadata priority plugin](https://github.com/livingdocsIO/livingdocs-server/pull/8075)
- [feat: add lines support for li-target-length ](https://github.com/livingdocsIO/livingdocs-editor/pull/10057)
- [feat: add lines support for li-target-length](https://github.com/livingdocsIO/livingdocs-server/pull/8094)
- [News Agency Screen: New dashboard cells + sidepanel](https://github.com/livingdocsIO/livingdocs-editor/pull/10021)
- [News Agency Screen: Change content-type for news-agency-report and require content-type basefiler in news-agency-screen config](https://github.com/livingdocsIO/livingdocs-server/pull/8116)
- [Fix document list query performance](https://github.com/livingdocsIO/livingdocs-server/pull/8125)
- [Fix document command api memory leak](https://github.com/livingdocsIO/livingdocs-server/pull/8109)
- [fix(character limit): Sidepanel property display](https://github.com/livingdocsIO/livingdocs-editor/pull/10067)
- [fix(application menu): Chevron position](https://github.com/livingdocsIO/livingdocs-editor/pull/10066)
- [Fix ajv compile memory leak](https://github.com/livingdocsIO/livingdocs-server/pull/8100)
- [Add publish control operations to Command API](https://github.com/livingdocsIO/livingdocs-server/pull/8091)
- [Display untranslated error details in assistant error notification](https://github.com/livingdocsIO/livingdocs-editor/pull/10053)
- [Fix: li-target-length add support for allowAnyNumber on tabledashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/10034)
- [Embedd Pintura in repository](https://github.com/livingdocsIO/livingdocs-editor/pull/10048)
- [Clear search input when selecting option in Retresco/iMatrics display filters](https://github.com/livingdocsIO/livingdocs-editor/pull/10045)
- [Test against elasticsearch v9](https://github.com/livingdocsIO/livingdocs-server/pull/8081)
- [Fix api client rotating state](https://github.com/livingdocsIO/livingdocs-editor/pull/10035)
- [Fix imatrics and retresco filter reactivity](https://github.com/livingdocsIO/livingdocs-editor/pull/10031)
- [Migrations: Always persist content and sequences on change](https://github.com/livingdocsIO/livingdocs-server/pull/8076)
- [Add news-agency-screen](https://github.com/livingdocsIO/livingdocs-editor/pull/10017)
- [Add News Agency Screen](https://github.com/livingdocsIO/livingdocs-server/pull/8064)
- [Feat: add embargo support for import api](https://github.com/livingdocsIO/livingdocs-server/pull/8046)
- [Remove li-metadata-translations check in migrations](https://github.com/livingdocsIO/livingdocs-server/pull/8063)
- [Add Agency Copy Flow](https://github.com/livingdocsIO/livingdocs-editor/pull/9936)
- [Add Agency Copy Flow](https://github.com/livingdocsIO/livingdocs-server/pull/8009)
- [Change the documentWriteModel.version correctly after persisting migration changes](https://github.com/livingdocsIO/livingdocs-server/pull/8049)
- [LIFEAT009: in-memory dashboard filter caching in liEmbedTeaserIncludeModal](https://github.com/livingdocsIO/livingdocs-server/pull/8051)
- [Support `undefined` params to allow dropping teasers into new components](https://github.com/livingdocsIO/livingdocs-editor/pull/10004)
- [Allow removal of video references from metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/10001)
- [Cache dashboard filters and query while document is open](https://github.com/livingdocsIO/livingdocs-editor/pull/9990)
- [Feat: Show tooltip on hovering team members](https://github.com/livingdocsIO/livingdocs-editor/pull/9988)
- [Fix scroll to focused component](https://github.com/livingdocsIO/livingdocs-editor/pull/9994)
- [feat(embargo): index so that it can be used in basefilters](https://github.com/livingdocsIO/livingdocs-server/pull/8037)
- [News agency copy flow ui elements](https://github.com/livingdocsIO/livingdocs-editor/pull/9935)
- [Fix usages of uniqueItemProperties AJV keyword](https://github.com/livingdocsIO/livingdocs-server/pull/8038)
- [Search result tooltip fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/9958)
- [Fix: cache data provider requests](https://github.com/livingdocsIO/livingdocs-editor/pull/9955)
- [Improvement/Loader and Progress Icon](https://github.com/livingdocsIO/livingdocs-editor/pull/9939)
- [Show image editor button also if it is the only action](https://github.com/livingdocsIO/livingdocs-editor/pull/9956)
- [Preserve loop and delay properties of animated images](https://github.com/livingdocsIO/livingdocs-server/pull/8014)
- [Disable supportsVideoConversion in rendering image service](https://github.com/livingdocsIO/livingdocs-editor/pull/9952)
- [fix: dont disable metadata button](https://github.com/livingdocsIO/livingdocs-editor/pull/9937)
- [Import Pintura from private NPM repository](https://github.com/livingdocsIO/livingdocs-editor/pull/9944)
- [Remove non-existent linked Pintura package from downstream tests](https://github.com/livingdocsIO/livingdocs-editor/pull/9938)
- [Prevent component blur when clicking on component area for a ticker entry to allow doc-link to be set](https://github.com/livingdocsIO/livingdocs-editor/pull/9917)
- [Download images from /serve-image endpoint](https://github.com/livingdocsIO/livingdocs-editor/pull/9914)
- [Download modified instead of original images](https://github.com/livingdocsIO/livingdocs-server/pull/7980)
- [Show login errors correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/9924)
- [Always show "Has local changes" in properties panel for embedded documents](https://github.com/livingdocsIO/livingdocs-editor/pull/9913)
- [Clear up markers after dragend event for side panel drag and drop items](https://github.com/livingdocsIO/livingdocs-editor/pull/9849)
- [Allow the use of custom display filters on task screens](https://github.com/livingdocsIO/livingdocs-editor/pull/9844)
- [Hide "Edit Local Version" in properties panel when empty](https://github.com/livingdocsIO/livingdocs-editor/pull/9848)
- [Fix data migration statistics mutation](https://github.com/livingdocsIO/livingdocs-server/pull/7985)
- [Improve handling of empty property image_ids](https://github.com/livingdocsIO/livingdocs-server/pull/7982)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2025-07`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **TODO**
- Feature Webinar Documentation: **TODO**
- Dev Webinar Recording: **TODO**
- Dev Webinar Slides: **TODO**
- [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

{{< system-versions list="suggested" >}}

### Minimal

{{< system-versions list="minimal" >}}

## Deployment

### Before the deployment

No pre-deployment steps are required before rolling out this release.

### Rollout deployment

#### Migrate the Postgres Database

No migrations are required for this release.

### After the deployment

No post-deployment steps are required after rolling out this release.

### Rollback

No rollback steps are required for this release.

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

TODO: check migration

{{< feature-info "Data Sources" "server" >}}

### Removal of params.documentId in Data Sources :fire:

The `params.documentId` is no longer included in data source requests originating from the editor.
If your integration depends on this parameter, please reach out to your customer solutions manager to discuss alternative solutions.

## Deprecations

## Features



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
- [v280.1.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.3): fix: Remove support for property query.conditions in searchManager.search()
- [v280.1.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.2): chore: Fix reference id population with new media library references table
- [v280.1.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.1): fix(news-agency): Prevent registering news agency report content type multiple times

### Livingdocs Editor Patches
- [v119.3.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.3): fix(navigation): Support cmd+click on back button to open window in new tab
- [v119.3.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.2): fix(rubrics): show rubric document title as label in li-tree items

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
