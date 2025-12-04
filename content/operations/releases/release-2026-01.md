---
type: release-notes
title: January 2026 Release
description: Technical Release Notes for release-2026-01
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2026-01

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
      version: Chrome >= 144, Edge >= 144, Firefox >= 146, Safari >= 26.0

  minimal:
    - name: Node
      version: 20.19.5
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
      version: Chrome >= 131, Edge >= 131, Firefox >= 133, Safari >= 18.2
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize
- [Fix: Last item in --overflow table](https://github.com/livingdocsIO/livingdocs-editor/pull/10543)
- [Design/Table Dashboard Brush-Up](https://github.com/livingdocsIO/livingdocs-editor/pull/10531)
- [Use start of week for current week active date range in planning board](https://github.com/livingdocsIO/livingdocs-editor/pull/10539)
- [Ignore configuration errors in Retresco hooks](https://github.com/livingdocsIO/livingdocs-server/pull/8675)
- [Prevent unrevoke when the asset has been deleted](https://github.com/livingdocsIO/livingdocs-editor/pull/10512)
- [Prevent unrevoke when the asset has been deleted](https://github.com/livingdocsIO/livingdocs-server/pull/8658)
- [fix(tableDashboard): show language dialog for single contentTypes ](https://github.com/livingdocsIO/livingdocs-editor/pull/10521)
- [Use full gap between li-tree items as the drop zone](https://github.com/livingdocsIO/livingdocs-editor/pull/10513)
- [Extend Revoke capabilities](https://github.com/livingdocsIO/livingdocs-editor/pull/10497)
- [Extend Revoke capabilities](https://github.com/livingdocsIO/livingdocs-server/pull/8632)
- [Inject built-in content type liNewsAgencyReport when writing project config](https://github.com/livingdocsIO/livingdocs-server/pull/8509)
- [chore(deps): update dependency posthog-node from 5.12.0 to v5.13.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8649)
- [Validate content schema when importing document via Public API](https://github.com/livingdocsIO/livingdocs-server/pull/8638)
- [Prevent legacy dashboards from loading twice](https://github.com/livingdocsIO/livingdocs-editor/pull/10451)
- [fix(deps): update dependency open from 10.2.0 to v11 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10506)
- [fix(deps): update dependency inquirer from 12.11.1 to v13 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8637)
- [Migrate remaining Media Library views from Angular.js to Vue](https://github.com/livingdocsIO/livingdocs-editor/pull/10473)
- [Add li-tree UI config property treeInitiallyCollapsed](https://github.com/livingdocsIO/livingdocs-server/pull/8604)
- [Collapse li-tree properties if treeInitiallyCollapsed is set](https://github.com/livingdocsIO/livingdocs-editor/pull/10475)
- [Upgrade vue-eslint-parser](https://github.com/livingdocsIO/livingdocs-editor/pull/10426)
- [Serve image in Public API with valid content type if no format is specified](https://github.com/livingdocsIO/livingdocs-server/pull/8613)

- [Design/Horizontal Form Plugin Top Spacing](https://github.com/livingdocsIO/livingdocs-editor/pull/10432)
- [Limit retries when Retresco re-enrich fails](https://github.com/livingdocsIO/livingdocs-server/pull/8594)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8603)
- [Prevent duplicate component ids when pasting container components from clipboard](https://github.com/livingdocsIO/livingdocs-editor/pull/10468)
- [chore(deps): update dependency puppeteer-core from 24.28.0 to v24.29.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10469)
- [Prevent error when searching on kanban boards](https://github.com/livingdocsIO/livingdocs-editor/pull/10452)
- [fix: image cropper state pollution](https://github.com/livingdocsIO/livingdocs-editor/pull/10442)
- [Set minimal v22 node version to v22.17.1](https://github.com/livingdocsIO/livingdocs-server/pull/8585)
- [Improvement/variables for sizes sass to css](https://github.com/livingdocsIO/livingdocs-editor/pull/10408)
- [Fix/Overlooked Dashboard Filter](https://github.com/livingdocsIO/livingdocs-editor/pull/10449)
- [chore(deps): update aws-sdk from 3.918.0 to v3.920.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8567)
- [Use `accessTokenTtl` for serve-image token expiration](https://github.com/livingdocsIO/livingdocs-server/pull/8569)
- [Design/Media Center Polish](https://github.com/livingdocsIO/livingdocs-editor/pull/10444)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2026-01`, read on.

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

## Deprecations

## Features :gift:

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
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
