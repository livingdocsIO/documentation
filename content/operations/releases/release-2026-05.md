---
type: release-notes
title: May 2026 Release
description: Technical Release Notes for release-2026-05
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2026-05

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
      version: Chrome >= 145, Edge >= 145, Firefox >= 148, Safari >= 26.3

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
      version: Chrome >= 136, Edge >= 136, Firefox >= 138, Safari >= 18.4
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize

- [Add Norwegian Translations](https://github.com/livingdocsIO/livingdocs-editor/pull/10892)
- [fix(media cards): Top Info](https://github.com/livingdocsIO/livingdocs-editor/pull/10942)
- [fix(deps): update dependency pusher-js from 8.4.3 to v8.5.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10941)
- [Rename colliding deprecation messages](https://github.com/livingdocsIO/livingdocs-server/pull/9156)
- [Tabs in media library sidepanels](https://github.com/livingdocsIO/livingdocs-editor/pull/10931)
- [Export media library entry usage log to CSV](https://github.com/livingdocsIO/livingdocs-editor/pull/10936)
- [Expose Usage Log Commands in Public API](https://github.com/livingdocsIO/livingdocs-server/pull/9144)
- [Fix validation of confirmed usage log entries](https://github.com/livingdocsIO/livingdocs-server/pull/9145)
- [Fix display filters on multi-source side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/10915)
- [Open lightbox with image locale used for thumbnail](https://github.com/livingdocsIO/livingdocs-editor/pull/10917)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10927)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9143)
- [Handle SVG files above 10MB](https://github.com/livingdocsIO/livingdocs-server/pull/9122)
- [Enable multi-select in side panels](https://github.com/livingdocsIO/livingdocs-editor/pull/10914)
- [chore(deps): update aws-sdk from 3.1015.0 to v3.1017.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/9113)
- [Fix selection mode by removing unused scrollPosition property](https://github.com/livingdocsIO/livingdocs-editor/pull/10910)
- [fix(deps): update dependency @livingdocs/framework from 33.0.2 to v33.0.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9114)
- [fix(deps): update dependency @livingdocs/framework from 33.0.2 to v33.0.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10909)
- [Keep comments component link on transformed documents](https://github.com/livingdocsIO/livingdocs-editor/pull/9743)
- [fix(deps): update dependency @livingdocs/framework from 32.13.4 to v33 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9108)
- [Clear localStorage to prevent cross-test contamination](https://github.com/livingdocsIO/livingdocs-editor/pull/10902)
- [Add playwright tests for media library card configs](https://github.com/livingdocsIO/livingdocs-editor/pull/10376)
- [fix(deps): update dependency @livingdocs/framework from 33.0.0 to v33.0.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10900)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9101)
- [Add vue-template-compiler to dependencies](https://github.com/livingdocsIO/livingdocs-editor/pull/10896)
- [Fix image proposals in assistants](https://github.com/livingdocsIO/livingdocs-editor/pull/10867)
- [chore(deps): update dependency puppeteer-core from 24.39.1 to v24.40.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10891)
- [Restrict image processing settings for use2025Behavior](https://github.com/livingdocsIO/livingdocs-server/pull/9047)
- [Do not expose maxDimension if use2025Behavior is enabled](https://github.com/livingdocsIO/livingdocs-server/pull/9046)
- [fix(deps): update dependency entities from 7.0.1 to v8 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9084)
- [fix(deps): update dependency pusher-js from 8.4.0 to v8.4.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10886)
- [Refactor migrations API](https://github.com/livingdocsIO/livingdocs-server/pull/9056)
- [fix(deps): update dependency @livingdocs/framework from 32.13.1 to v32.13.4 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9080)
- [fix(deps): update dependency @livingdocs/framework from 32.13.3 to v32.13.4 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10885)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9069)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10880)
- [fix(deps): update dependency @livingdocs/framework from 32.13.1 to v32.13.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10876)
- [Update vulnerable server dependencies](https://github.com/livingdocsIO/livingdocs-editor/pull/10874)
- [Request confirmation before archiving a group](https://github.com/livingdocsIO/livingdocs-editor/pull/10870)
- [chore(deps): update dependency exifreader from 4.36.2 to v4.37.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9050)
- [Prevent unexpected scroll jumps](https://github.com/livingdocsIO/livingdocs-editor/pull/10855)
- [chore(deps): update aws-sdk from 3.1005.0 to v3.1007.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/9044)
- [chore(deps): update dependency sass from 1.97.3 to v1.98.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10858)
- [fix(image-collections): remove custom desktop / mobile labels for simplicity reasons](https://github.com/livingdocsIO/livingdocs-server/pull/9030)

- [fix(app navigation): Line wrapping](https://github.com/livingdocsIO/livingdocs-editor/pull/10849)
- [Migrate canvas to vue](https://github.com/livingdocsIO/livingdocs-editor/pull/10769)
- [chore(deps): update dependency babel-loader from 10.0.0 to v10.1.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10848)
- [Feat preserve updated at](https://github.com/livingdocsIO/livingdocs-server/pull/9003)
- [Fix: correct wrong dimensions in DB for rotated images](https://github.com/livingdocsIO/livingdocs-server/pull/8921)
- [Fix check if image collections are enabled](https://github.com/livingdocsIO/livingdocs-editor/pull/10838)
- [Prevent onDrag error](https://github.com/livingdocsIO/livingdocs-editor/pull/10839)
- [Add script for migrating image modifications to variants](https://github.com/livingdocsIO/livingdocs-server/pull/9013)
- [Show image toolbar button as active when the panel is open](https://github.com/livingdocsIO/livingdocs-editor/pull/10834)
- [chore(deps): update dependency pg from 8.19.0 to v8.20.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9020)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/9012)
- [Allow gifs with 1800 frames](https://github.com/livingdocsIO/livingdocs-editor/pull/10824)
- [Allow gifs with 1800 frames](https://github.com/livingdocsIO/livingdocs-server/pull/9002)
- [fix(deps): update dependency copy-webpack-plugin from 13.0.1 to v14 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10816)
- [Sort completed tasks on task screen by completed date](https://github.com/livingdocsIO/livingdocs-editor/pull/10814)
- [Fix task boards load more button not showing](https://github.com/livingdocsIO/livingdocs-editor/pull/10817)
- [chore(deps): update dependency ioredis from 5.9.3 to v5.10.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8998)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10808)
- [Improvements for image collections](https://github.com/livingdocsIO/livingdocs-editor/pull/10780)
- [Limit search query length and display understandable error](https://github.com/livingdocsIO/livingdocs-editor/pull/10794)
- [Fix undefined property error in user needs form](https://github.com/livingdocsIO/livingdocs-editor/pull/10800)
- [fix(deps): update dependency c8 from 10.1.3 to v11 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8989)
- [fix(deps): update dependency @livingdocs/framework from 32.13.0 to v32.13.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10798)
- [Fix Multiselect Selection Navigation in Sidepanel](https://github.com/livingdocsIO/livingdocs-editor/pull/10787)
- [Reset additional language after translation deletion](https://github.com/livingdocsIO/livingdocs-editor/pull/10788)
- [Delete data record translation](https://github.com/livingdocsIO/livingdocs-editor/pull/10783)
- [chore(deps): update aws-sdk from 3.996.0 to v3.997.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8981)
- [Prevent image editor save button from overflowing](https://github.com/livingdocsIO/livingdocs-editor/pull/10781)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2026-05`, read on.

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

### Direct Imports from `lib/` :fire:

Direct file imports from Livingdocs packages are not supported. This release might break direct imports from `lib/`. Downstreams are urged to remove all direct imports. Since this has never been supported, we will not communicate such changes in the future.

### Stricter Validation of Image Processing Config Properties with `use2025Behavior` :fire:

The server config properties `mediaLibrary.images.processing.failOn`, `mediaLibrary.images.processing.convert`, `mediaLibrary.images.processing.lossy`, and `mediaLibrary.images.processing.lossless` are not applied when `use2025Behavior` is enabled. Configuring them alongside `use2025Behavior` will now result in an error. Please remove these properties if `use2025Behavior` is enabled.

### Removal of Deprecated Image Processing Config Properties :fire:

The deprecated server config properties `mediaLibrary.images.processing.maxFileSize` and `mediaLibrary.images.uploadRestrictions.maxResolution` are no longer supported.

Please use the following replacements instead:

- `mediaLibrary.images.processing.maxFileSize` → `mediaLibrary.images.uploadRestrictions.maxFileSize`
- `mediaLibrary.images.uploadRestrictions.maxResolution` → `mediaLibrary.images.processing.maxResolution`

## Deprecations

### Auto-Generated Media Library Dashboards

Auto-generated media library dashboards using `{liItem: 'mediaLibrary'}` are deprecated and will be removed in release-2026-11. Remove `{liItem: 'mediaLibrary'}` as well as `mediaTypes[].editor.managementDashboard` and `mediaTypes[].editor.dashboard` from the project config.

Configure [media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) instead. These dashboards can also be referenced in content types to configure the dashboards shown in media library sidepanels and media selection dialogs, using `contentTypes[].editor.images.useDashboard`, `contentTypes[].editor.videos.useDashboard`, or `contentTypes[].editor.files.useDashboard`.

### `contentTypes[].editor.images.mediaTypes`

Project config property `contentTypes[].editor.images.mediaTypes` is deprecated and will be removed in `release-2026-11`. It controlled which media types were shown in image sidepanels and dialogs. Configure a media library dashboard with the appropriate `baseFilters` instead.

### `mediaTypes[].hidden`

Project config property `mediaTypes[].hidden` is deprecated and will be removed in `release-2026-11`. To hide a media type from sidepanels and dialogs, exclude it with `baseFilters` instead.

For poster image media types, we introduce `useDashboard` on `li-poster-image` and `posterImageUseDashboard` on `li-video-reference` metadata plugins. You can use these to configure which dashboards appear when selecting a poster image. By setting `baseFilters` on those dashboards, you can specify which media types appear.

## Features :gift:

### Tabs in Media Library Sidepanels and Dialogs :gift:

When editors open the image, video, or file sidepanel in a document, or use a media selection dialog, the media library is now organized into tabs. Each tab corresponds to a configured media library dashboard, a media source, or image collections (if enabled on the project).

{{< img src="release-2026-05-media-library-tabs.png" alt="Media library sidepanel with tabs for dashboards, media sources, and image collections" caption="Media library sidepanel showing dashboards, media sources, and image collections as tabs." >}}

This replaces the previous behavior where media was grouped by media type. The old appearance is [deprecated]({{< relref "#auto-generated-media-library-dashboards" >}}) and will be removed in `release-2026-11`.

#### Configuration

`contentTypes[].editor.images.useDashboard`, `contentTypes[].editor.videos.useDashboard`, and `contentTypes[].editor.files.useDashboard` now accept a single dashboard handle or an array of handles. Each dashboard in the array becomes a tab.

```js
editor: {
  images: {useDashboard: ['images', 'infographics']},
  videos: {useDashboard: 'reels'}
}
```

If no `useDashboard` is configured on a content type, a single "Feed" tab with all media grouped by type is shown instead. This is the old behavior and is now deprecated.

For full configuration details, refer to the [Content Types reference]({{< ref "/reference/project-config/content-types#usedashboard" >}}).

##### Image Collections

For the dialog used to add an image to a collection, `imageCollections.useDashboard` also accepts an array of dashboard handles.

```js
imageCollections: {
  useDashboard: ['images', 'infographics']
}
```

##### Poster Images

For the dialog used to select a poster image for a video, we introduce `ui.config.useDashboard` on [`li-poster-image`]({{< ref "/reference/document/metadata/plugins/li-poster-image/" >}}) and `ui.config.posterImageUseDashboard` on [`li-video-reference`]({{< ref "/reference/document/metadata/plugins/li-video-reference/" >}}) metadata plugins. You can use these to configure which dashboards appear when selecting a poster image.

### Allowed Media Types :gift:

The new `contentTypes[].allowedMediaTypes` configuration enforces that only specific media types can be placed in a document.

```js
allowedMediaTypes: {
  mediaImage: ['myImage', 'myInfographic'],
  mediaVideo: ['myVideo'],
  mediaFile: ['myFile']
}
```

If `allowedMediaTypes` is not configured, all media types are allowed (default behavior).

It is possible to configure media library dashboards or image collections in sidepanels and dialogs in such a way that they show media types not listed in `allowedMediaTypes`. If a user tries to insert such an asset into a document, an error is shown. We recommend configuring dashboards with appropriate `baseFilters` so that only allowed media types are shown in the first place.

For full configuration details, refer to the [Content Types reference]({{< ref "/reference/project-config/content-types#allowedmediatypes" >}}).

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
