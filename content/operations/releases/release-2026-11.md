---
type: release-notes
title: November 2026 Release
description: Technical Release Notes for release-2026-11
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2026-11

systemRequirements:
  suggested:
    - name: Node
      version: 26
    - name: NPM
      version: 11
    - name: Postgres
      version: 18
    - name: Elasticsearch
      version: 9
    - name: OpenSearch
      version: 3
    - name: Redis
      version: 8
    - name: Valkey
      version: 9
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:26
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:26
    - name: Browser Support
      version: Chrome >= 156, Edge >= 156, Firefox >= 159, Safari >= 27.0

  minimal:
    - name: Node
      version: 22.22.0
    - name: NPM
      version: 10
    - name: Postgres
      version: 14
    - name: Elasticsearch
      version: 8
    - name: OpenSearch
      version: 2
    - name: Redis
      version: 7.4
    - name: Valkey
      version: 7
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:22
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:22
    - name: Browser Support
      version: Chrome >= 142, Edge >= 142, Firefox >= 144, Safari >= 26.0
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize
- [test(hugo): Cover huGO image drag and drop [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11609)
- [Preserve `updateAt` when modifying media library entry usage logs](https://github.com/livingdocsIO/livingdocs-server/pull/9953)
- [Spellcheck: Live check](https://github.com/livingdocsIO/livingdocs-editor/pull/11445)
- [chore(deps): update dependency @google-cloud/storage from 8.1.0 to v8.2.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10058)
- [fix(deps): update dependency @livingdocs/framework from 34.3.1 to v34.3.4 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11603)
- [Spellcheck: Live check](https://github.com/livingdocsIO/livingdocs-server/pull/9840)
- [fix(imatrics-nlp): Match the API mock's concept search against the search term [main]](https://github.com/livingdocsIO/livingdocs-server/pull/10051)
- [test(table-dashboards): Cover the table dashboard manual test cases [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11596)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11579)
- [fix(framework): Attach the violations to the thrown parse error [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11577)
- [chore(deps): update dependency eslint-plugin-jsdoc from 64.3.6 to v64.3.8 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10012)

- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9979)
- [fix(deps): update dependency nodemailer from 9.1.1 to v10 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9992)
- [Fix open-state styling on display settings dropdown button](https://github.com/livingdocsIO/livingdocs-editor/pull/11556)
- [fix(rotated-images): import intoBuffer default export](https://github.com/livingdocsIO/livingdocs-server/pull/9981)
- [Fix tooltip line break for unpublished ticker entries](https://github.com/livingdocsIO/livingdocs-editor/pull/11551)
- [Prevent dart-sass BOM from breaking scoped styles](https://github.com/livingdocsIO/livingdocs-editor/pull/11546)
- [chore(deps): update dependency nodemailer from 9.0.6 to v9.1.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9975)
- [fix(deps): update dependency @livingdocs/framework from 34.3.0 to v34.3.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11545)
- [fix(indexing): strip sub-field analyzers missing from the live index settings](https://github.com/livingdocsIO/livingdocs-server/pull/9947)
- [fix(deps): update dependency @livingdocs/framework from 34.2.2 to v34.3.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11508)
- [chore(deps): update aws-sdk from 3.1120.0 to v3.1121.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9950)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2026-11`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **TODO**
- Feature Webinar Documentation: **TODO**
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

## Breaking Changes :fire:

### Minimum Node.js 22 Version Raised to 22.22.0

The supported Node.js 22 range moved from `>=22.17.1` to `>=22.22.0`. Node.js 24 and 26 are unaffected.

`undici` 8 requires Node.js `>=22.19.0` and `posthog-node` 5 requires `>=22.22.0`, so the previous floor advertised a minimum those dependencies never supported. Running on 22.17.1-22.21.x was already outside what those packages declare; it is now outside `engines.node` as well.

Node.js 22 as a whole is deprecated and will be dropped in `release-2027-01`, so moving to Node.js 24 or 26 is worth more than chasing a 22.x patch.

#### Detect

Either of:

- The Node.js version running the server is 22.17.1-22.21.x. Check with `node --version`. An affected server emits `You're using an unsupported version` on boot.
- A Node.js 22 patch below 22.22.0 pinned in the project - check `.nvmrc`, `FROM` lines in Dockerfiles, and CI job images. Search for `22\.(1[789]|2[01])\.`.

#### Fix

Upgrade the Node.js runtime to 22.22.0 or newer, and update every pinned version alongside it: `.nvmrc`, the `FROM` tags in Dockerfiles, and CI job images. Upgrading to Node.js 24 or 26 instead also resolves it, and avoids a second upgrade when Node.js 22 support is dropped.

`npm install` on an affected version reports `EBADENGINE` for `undici` and `posthog-node`.

## Deprecations :warning:

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

No known vulnerabilities. :tada:

## Patches

Patches typically fix bugs and apply improvements within the current release. Keeping your deployment up-to-date with the latest patch version means you benefit from those fixes. No explicit action is required per patch — bumping the version is enough.

### Livingdocs Server Patches

### Livingdocs Editor Patches
