---
type: release-notes
title: March 2026 Release
description: Technical Release Notes for release-2026-03
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2026-03

systemRequirements:
  suggested:
    - name: Node
      version: 24
    - name: NPM
      version: 11
    - name: Postgres
      version: 17
    - name: Elasticsearch
      version: 9
    - name: OpenSearch
      version: 3
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
      version: 22.17.1
    - name: NPM
      version: 10
    - name: Postgres
      version: 14
    - name: Elasticsearch
      version: 8
    - name: OpenSearch
      version: 2
    - name: Redis
      version: 6.2
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:22
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:22
    - name: Browser Support
      version: Chrome >= 133, Edge >= 133, Firefox >= 135, Safari >= 18.3
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize
- [Add image collections](https://github.com/livingdocsIO/livingdocs-editor/pull/10700)
- [Add image collections](https://github.com/livingdocsIO/livingdocs-server/pull/8820)
- [fix(deps): update dependency @livingdocs/framework from 32.12.5 to v32.12.6 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8968)
- [fix(deps): update dependency @livingdocs/framework from 32.12.5 to v32.12.6 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10773)
- [fix(deps): update dependency @isaacs/ttlcache from 1.4.1 to v2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10435)
- [Use newer ajv version in groups api](https://github.com/livingdocsIO/livingdocs-server/pull/8960)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/8964)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10770)
- [Media Usage Log](https://github.com/livingdocsIO/livingdocs-editor/pull/10744)
- [Media Usage Log](https://github.com/livingdocsIO/livingdocs-server/pull/8923)
- [Support extracting title from imported HuGO+ picture](https://github.com/livingdocsIO/livingdocs-server/pull/8902)
- [Fix: thumbnail size slider was not working in firefox](https://github.com/livingdocsIO/livingdocs-editor/pull/10768)
- [Test oldest and newest of opensearch and valkey](https://github.com/livingdocsIO/livingdocs-server/pull/8949)
- [Image Rotation](https://github.com/livingdocsIO/livingdocs-server/pull/8907)
- [Image Rotation](https://github.com/livingdocsIO/livingdocs-editor/pull/10740)
- [Configure TTL cache of media library dataloader](https://github.com/livingdocsIO/livingdocs-editor/pull/10739)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8947)
- [Upgrade to ajv@8.18.0](https://github.com/livingdocsIO/livingdocs-server/pull/8939)
- [fix(deps): update opentelemetry from 0.211.0 to ^0.212.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8929)
- [Handle migrations of old documents without the statistics property](https://github.com/livingdocsIO/livingdocs-server/pull/8930)
- [Move vendors to npm modules](https://github.com/livingdocsIO/livingdocs-editor/pull/10737)
- [chore(deps): update dependency pino from 10.2.1 to v10.3.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8843)
- [feat(media-center): add variable thumbnail sizes](https://github.com/livingdocsIO/livingdocs-editor/pull/10685)
- [fix: bump file-type version for a bug fix](https://github.com/livingdocsIO/livingdocs-server/pull/8881)
- [fix(deps): update dependency @livingdocs/framework from 32.12.4 to v32.12.5 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10725)
- [fix(deps): update dependency @livingdocs/framework from 32.12.4 to v32.12.5 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8878)
- [fix(include): iframe resize bursts debounced](https://github.com/livingdocsIO/livingdocs-editor/pull/10668)
- [chore(deps): update dependency pg from 8.17.2 to v8.18.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8868)
- [chore(deps): update dependency @fastify/reply-from from 12.5.0 to v12.6.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10717)
- [Read mimetype from asset object when downloading](https://github.com/livingdocsIO/livingdocs-server/pull/8861)
- [chore(deps): update dependency eslint-plugin-jsdoc from 62.4.1 to v62.5.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8866)
- [Show image and metadata of selected locale in lightbox](https://github.com/livingdocsIO/livingdocs-editor/pull/10705)
- [fix(deps): update dependency @livingdocs/framework from 32.12.3 to v32.12.4 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10710)
- [fix(deps): update dependency @livingdocs/framework from 32.12.2 to v32.12.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10707)
- [chore(deps): update playwright monorepo from 1.57.0 to v1.58.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/10698)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/8849)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/8831)
- [Reuse existing media library entries when a media source item has already been imported](https://github.com/livingdocsIO/livingdocs-editor/pull/10669)
- [Reuse existing media library entries when a media source item has already been imported](https://github.com/livingdocsIO/livingdocs-server/pull/8811)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/8817)
- [chore(deps): update dependency posthog-node from 5.20.0 to v5.21.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8800)
- [fix(deps): update dependency @livingdocs/framework from 32.12.1 to v32.12.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8805)
- [Differentiate custom text formatting with the same attribute name](https://github.com/livingdocsIO/livingdocs-editor/pull/10634)
- [Scroll document when dragging component close to an edge](https://github.com/livingdocsIO/livingdocs-editor/pull/10642)
- [Only support revoke note with use2025Behavior](https://github.com/livingdocsIO/livingdocs-server/pull/8794)
- [Disable print flow create button when workspace is dirty](https://github.com/livingdocsIO/livingdocs-editor/pull/10648)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8786)
- [Set an unpublish schedule for a scheduled document](https://github.com/livingdocsIO/livingdocs-editor/pull/10638)
- [Clear include overrides when replacing a teaser via drag&drop](https://github.com/livingdocsIO/livingdocs-editor/pull/10633)
- [fix(deps): update pintura [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10632)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/8768)
- [Render li-image metadata properties with named crops in media upload](https://github.com/livingdocsIO/livingdocs-editor/pull/10627)
- [Allow removing settings.editMode](https://github.com/livingdocsIO/livingdocs-server/pull/8778)
- [Show label tooltips on text formatting toolbar buttons](https://github.com/livingdocsIO/livingdocs-editor/pull/10618)
- [Replace document ownership links with summary when merging users](https://github.com/livingdocsIO/livingdocs-editor/pull/10588)
- [Show custom cards in media library sidepanel](https://github.com/livingdocsIO/livingdocs-editor/pull/10605)
- [Fix rendering of kanban boards](https://github.com/livingdocsIO/livingdocs-editor/pull/10589)
- [Do not attempt to render comments in history view](https://github.com/livingdocsIO/livingdocs-editor/pull/10594)
- [Fix Server Settings console errors](https://github.com/livingdocsIO/livingdocs-editor/pull/10587)
- [Limit LIDEP075 deprecation to specific print properties](https://github.com/livingdocsIO/livingdocs-server/pull/8759)
- [Show table dashboard row highlight](https://github.com/livingdocsIO/livingdocs-editor/pull/10592)
- [Fix delivery build prop validation error](https://github.com/livingdocsIO/livingdocs-editor/pull/10593)
- [Show projectId in Retresco error message if integration is disabled](https://github.com/livingdocsIO/livingdocs-server/pull/8760)
- [Download animated images](https://github.com/livingdocsIO/livingdocs-server/pull/8745)
- [Download localized asset on media library detail page](https://github.com/livingdocsIO/livingdocs-editor/pull/10566)
- [fix(deps): update dependency @opentelemetry/instrumentation-ioredis from 0.56.0 to ^0.57.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8741)
- [fix(deps): update dependency @livingdocs/framework from 32.11.1 to v32.12.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10564)
- [Media library Dashboards: Small Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/10562)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2026-03`, read on.

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

## Breaking Changes :fire:

### Drop Support for Elasticsearch 7 and OpenSearch 1 :fire:

Elasticsearch 7 and OpenSearch 1 are no longer maintained and therefore no longer supported by Livingdocs.

Please upgrade to at least the new minimum versions:

- Elasticsearch 8
- OpenSearch 2

Or preferably to our recommended versions:

- Elasticsearch 9
- OpenSearch 3

### Validation of Media Source Plugin Return Properties `systemName` and `externalId` :fire:

The media source plugin function `searchMediaImage` now requires `systemName` and `externalId` to be strings when returned. Previously, these properties were not validated and had no effect.

## Deprecations

## Features :gift:

### Reuse Already Imported Media Source Items :gift:

When a media source item has already been imported, Livingdocs now reuses the existing media library entry instead of importing it again. This allows keeping media libraries free of duplicates when using media from external systems.

To enable the deduplication, [media source]({{< ref "/guides/media-library/media-sources/" >}}) search results can include `systemName` and `externalId`. If a media library entry with the same `systemName`/`externalId` pair already exists, it is reused.

```diff
module.exports = {
  handle: 'examplePlugin',
  async searchMediaImage() {
    return {
      total: 123,
      results: [
        {
          metadata: {},
          asset: {},
+         systemName: 'exampleSource',
+         externalId: 'exampleExternalId'
        }
      ]
    }
  },
  async fetchMediaImage() {}
}
```

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
