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
      version: 22
    - name: NPM
      version: 10
    - name: Postgres
      version: 16
    - name: Elasticsearch
      version: 8.x
    - name: OpenSearch
      version: 2.3.0
    - name: Redis
      version: 7
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:22
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:22
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
- [fix(deps): update dependency posthog-node from 4.17.1 to v4.17.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8050)
- [Allow removal of video references from metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/10001)
- [Cache dashboard filters and query while document is open](https://github.com/livingdocsIO/livingdocs-editor/pull/9990)
- [Feat: Show tooltip on hovering team members](https://github.com/livingdocsIO/livingdocs-editor/pull/9988)
- [Fix scroll to focused component](https://github.com/livingdocsIO/livingdocs-editor/pull/9994)
- [feat(embargo): index so that it can be used in basefilters](https://github.com/livingdocsIO/livingdocs-server/pull/8037)
- [fix(deps): update dependency sharp from 0.34.1 to v0.34.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8047)
- [chore(deps): update dependency puppeteer-core from 24.8.2 to v24.9.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9992)
- [News agency copy flow ui elements](https://github.com/livingdocsIO/livingdocs-editor/pull/9935)
- [fix(deps): update dependency sass from 1.88.0 to v1.89.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9982)
- [fix(deps): update aws-sdk (main) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/8044)
- [fix(deps): update dependency pino from 9.6.0 to v9.7.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8043)
- [Fix usages of uniqueItemProperties AJV keyword](https://github.com/livingdocsIO/livingdocs-server/pull/8038)
- [Search result tooltip fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/9958)
- [chore(deps): update dependency @google-cloud/translate from 9.0.1 to v9.1.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8033)
- [fix(deps): update dependency fastify from 5.3.2 to v5.3.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9977)
- [fix(deps): update babel from 7.26.10 to v7.27.1 (main) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/9919)
- [fix(deps): update aws-sdk from 3.800.0 to v3.808.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8004)
- [fix(deps): update dependency sass from 1.87.0 to v1.88.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9974)
- [chore(deps): update dependency diff from 7.0.0 to v8 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9975)
- [fix(deps): update dependency semver from 7.7.1 to v7.7.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8029)
- [fix(deps): update dependency @livingdocs/framework from 32.8.1 to v32.8.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9968)
- [Fix: cache data provider requests](https://github.com/livingdocsIO/livingdocs-editor/pull/9955)
- [fix(deps): update dependency inquirer from 12.6.0 to v12.6.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8025)
- [fix(deps): update dependency nodemailer from 7.0.2 to v7.0.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8023)
- [fix(deps): update dependency posthog-node from 4.16.0 to v4.17.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8005)
- [Improvement/Loader and Progress Icon](https://github.com/livingdocsIO/livingdocs-editor/pull/9939)
- [fix(deps): update dependency execa from 9.5.2 to v9.5.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8017)
- [fix(deps): update dependency exifreader from 4.30.0 to v4.30.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8018)
- [Show image editor button also if it is the only action](https://github.com/livingdocsIO/livingdocs-editor/pull/9956)
- [Preserve loop and delay properties of animated images](https://github.com/livingdocsIO/livingdocs-server/pull/8014)
- [Disable supportsVideoConversion in rendering image service](https://github.com/livingdocsIO/livingdocs-editor/pull/9952)
- [fix(deps): update dependency nanoid from 5.0.9 to v5.1.5 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9794)
- [fix: dont disable metadata button](https://github.com/livingdocsIO/livingdocs-editor/pull/9937)
- [Import Pintura from private NPM repository](https://github.com/livingdocsIO/livingdocs-editor/pull/9944)
- [fix(deps): update dependency cloudinary from 2.6.0 to v2.6.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8010)
- [Remove non-existent linked Pintura package from downstream tests](https://github.com/livingdocsIO/livingdocs-editor/pull/9938)
- [chore(deps): update dependency eslint from 9.25.1 to v9.26.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8007)
- [Prevent component blur when clicking on component area for a ticker entry to allow doc-link to be set](https://github.com/livingdocsIO/livingdocs-editor/pull/9917)
- [fix(deps): update dependency @aws-sdk/client-s3 from 3.799.0 to v3.800.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7993)
- [Download images from /serve-image endpoint](https://github.com/livingdocsIO/livingdocs-editor/pull/9914)
- [Download modified instead of original images](https://github.com/livingdocsIO/livingdocs-server/pull/7980)
- [Show login errors correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/9924)
- [chore(deps): update dependency mocha from 11.1.0 to v11.2.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9921)
- [Always show "Has local changes" in properties panel for embedded documents](https://github.com/livingdocsIO/livingdocs-editor/pull/9913)
- [fix(deps): update dependency @livingdocs/framework from 32.7.6 to v32.8.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7990)
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

### Livingdocs Editor Patches

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
