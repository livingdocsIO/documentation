---
type: release-notes
title: September 2025 Release
description: Technical Release Notes for release-2025-09
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2025-09


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
- [fix(deps): update dependency sharp from 0.34.2 to v0.34.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8181)
- [fix(deps): update dependency @livingdocs/framework from 32.9.2 to v32.9.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10120)
- [chore(deps): update dependency @google-cloud/vision from 5.2.0 to v5.3.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8183)
- [Disable newlines in li-unique-id](https://github.com/livingdocsIO/livingdocs-editor/pull/10114)
- [fix(deps): update dependency @livingdocs/framework from 32.8.8 to v32.9.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10105)
- [chore(deps): update dependency chai from 5.2.0 to v5.2.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8177)
- [Rename index-reference-ids migration to avoid number conflict](https://github.com/livingdocsIO/livingdocs-server/pull/8171)
- [fix(deps): update dependency @livingdocs/framework from 32.8.8 to v32.9.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8151)
- [Fix kordiam global es query](https://github.com/livingdocsIO/livingdocs-server/pull/8164)
- [Support cmd+click on back button to open in new window](https://github.com/livingdocsIO/livingdocs-editor/pull/10110)
- [Li-Tree improvements for Rubrics](https://github.com/livingdocsIO/livingdocs-editor/pull/10106)
- [Fix deletion routine reference extraction](https://github.com/livingdocsIO/livingdocs-server/pull/8155)
- [Prevent configuring news agency report content type multiple times](https://github.com/livingdocsIO/livingdocs-server/pull/8159)
- [fix(deps): update dependency @elastic/elasticsearch from 9.0.2 to v9.0.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8154)
- [fix(deps): update aws-sdk from 3.837.0 to v3.840.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8139)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2025-09`, read on.

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
