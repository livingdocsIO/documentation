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

- [Drop Node.js 22 in release-2027-03 instead of release-2027-01](https://github.com/livingdocsIO/livingdocs-server/pull/10431)
- [Drop support for Elasticsearch 7 and OpenSearch 1](https://github.com/livingdocsIO/livingdocs-server/pull/10434)
- [Remove referenced designs (LIDEP072)](https://github.com/livingdocsIO/livingdocs-server/pull/9645)
- [Remove referenced designs (LIDEP072)](https://github.com/livingdocsIO/livingdocs-editor/pull/11303)
- [Fast image processing](https://github.com/livingdocsIO/livingdocs-server/pull/10435)
- [Request the Public API version of a year before the release in cross-project content sharing](https://github.com/livingdocsIO/livingdocs-server/pull/10371)
- [Remove legacy media library config (LIBREAKING082-084)](https://github.com/livingdocsIO/livingdocs-server/pull/10393)
- [Remove the media library sidepanel fallback and auto-generated dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/11865)
- [Image processing: Limit concurrent Sharp pipelines](https://github.com/livingdocsIO/livingdocs-server/pull/10249)
- [Media library: Explain why an image upload was rejected](https://github.com/livingdocsIO/livingdocs-editor/pull/11454)
- [Derive the Public API versions from the release](https://github.com/livingdocsIO/livingdocs-server/pull/10375)
- [Deprecate the publicApi.minimumApiVersion server config](https://github.com/livingdocsIO/livingdocs-server/pull/10376)
- [Keep a failing or hanging external system from hiding other cross-project documents](https://github.com/livingdocsIO/livingdocs-server/pull/10426)
- [Fix cross-project content sharing for documents outside the latest 100 publications](https://github.com/livingdocsIO/livingdocs-server/pull/10425)
- [Image processing: Write the legacy transform output to disk](https://github.com/livingdocsIO/livingdocs-server/pull/9916)
- [chore(deps): update dependency posthog-node from 5.60.1 to v5.61.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10424)
- [chore(deps): update dependency sass from 1.107.0 to v1.107.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11883)
- [fix(deps): update dependency entities from 8.1.0 to v9 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10407)
- [Planning calendar](https://github.com/livingdocsIO/livingdocs-server/pull/10240)
- [Planning calendar](https://github.com/livingdocsIO/livingdocs-editor/pull/11771)
- [Image processing: Treat only gif and webp frames as an animation](https://github.com/livingdocsIO/livingdocs-server/pull/10250)
- [Public API: Serve an unmodified image as stored from 2026-11](https://github.com/livingdocsIO/livingdocs-server/pull/10299)
- [Media library: Download an unmodified image as stored](https://github.com/livingdocsIO/livingdocs-server/pull/10251)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11876)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/10405)
- [fix(deps): update dependency @livingdocs/framework from 34.3.14 to v34.3.15 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10420)
- [fix(deps): update dependency @livingdocs/framework from 34.3.12 to v34.3.14 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10411)
- [fix(deps): update dependency @livingdocs/framework from 34.3.12 to v34.3.14 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11879)
- [Allow only supported image types in upload dialog and drop](https://github.com/livingdocsIO/livingdocs-editor/pull/11753)
- [Image processing: Transform legacy uploads from disk](https://github.com/livingdocsIO/livingdocs-server/pull/9852)
- [Image processing: Encode AVIF at a low effort](https://github.com/livingdocsIO/livingdocs-server/pull/10246)
- [Format breaking change messages consistently and include their details](https://github.com/livingdocsIO/livingdocs-server/pull/10304)
- [fix(deps): update dependency @livingdocs/framework from 34.3.11 to v34.3.12 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11864)
- [fix(deps): update dependency @livingdocs/framework from 34.3.11 to v34.3.12 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10392)
- [Remove Declarative Copy API (LIDEP071)](https://github.com/livingdocsIO/livingdocs-server/pull/9405)
- [Remove legacy Declarative Copy UI (LIDEP071)](https://github.com/livingdocsIO/livingdocs-editor/pull/11133)
- [fix(indexing): Load the mapping before createIndex() writes the mapping hash](https://github.com/livingdocsIO/livingdocs-server/pull/10300)
- [Reduce edit conflicts that come back or get stuck](https://github.com/livingdocsIO/livingdocs-editor/pull/11844)
- [chore(deps): update dependency fast-json-stringify from 7.1.5 to v7.2.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10374)
- [chore(deps): update dependency @fastify/reply-from from 12.7.1 to v12.8.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11850)
- [Support API versioning for sitemap routes](https://github.com/livingdocsIO/livingdocs-server/pull/10367)
- [Clear content validation errors after container or property changes](https://github.com/livingdocsIO/livingdocs-editor/pull/11723)
- [Remove `{liItem: 'mediaLibrary'}` (LIBREAKING081)](https://github.com/livingdocsIO/livingdocs-server/pull/10355)
- [Remove `{liItem: 'mediaLibrary'}` (LIBREAKING081)](https://github.com/livingdocsIO/livingdocs-editor/pull/11843)
- [fix(text-formatting): limit width of the formatting popover](https://github.com/livingdocsIO/livingdocs-editor/pull/11780)
- [chore(deps): update aws-sdk from 3.1155.0 to v3.1156.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10354)
- [feat(translations): translate documents through the server translate endpoint](https://github.com/livingdocsIO/livingdocs-editor/pull/11773)
- [feat(documents): translate documents with registered translate functions](https://github.com/livingdocsIO/livingdocs-server/pull/10252)
- [fix(deps): update dependency chartist from 1.5.0 to v2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11801)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11828)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/10338)
- [Keep display filter popups below their trigger when the results reload](https://github.com/livingdocsIO/livingdocs-editor/pull/11813)
- [Enforce the package denylist with ESLint instead of a dead posttest script](https://github.com/livingdocsIO/livingdocs-editor/pull/11821)
- [fix(deps): update dependency @livingdocs/framework from 34.3.8 to v34.3.9 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10308)
- [fix(deps): update dependency @livingdocs/framework from 34.3.8 to v34.3.9 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11806)
- [chore(deps): update dependency undici from 8.11.2 to v8.12.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10296)
- [chore(deps): update dependency webpack from 5.111.1 to v5.112.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11796)
- [chore(deps): update dependency posthog-node from 5.56.1 to v5.56.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10293)
- [Fix media library selection breaking when a result page repeats an id](https://github.com/livingdocsIO/livingdocs-editor/pull/11787)
- [fix(metadata): respect maxDepth when dragging a collapsed li-tree branch](https://github.com/livingdocsIO/livingdocs-editor/pull/11779)
- [Expire one-time auth codes after their configured TTL](https://github.com/livingdocsIO/livingdocs-server/pull/10280)
- [Retry failed Pusher batches before dropping them](https://github.com/livingdocsIO/livingdocs-server/pull/10201)
- [Recover from a save conflict when the document fetch fails](https://github.com/livingdocsIO/livingdocs-editor/pull/11750)
- [Add tests for the metrics the monitoring reads](https://github.com/livingdocsIO/livingdocs-server/pull/10248)
- [Recover realtime updates after connection issues](https://github.com/livingdocsIO/livingdocs-editor/pull/11652)
- [Image processing: Limit the total resolution of an animated image](https://github.com/livingdocsIO/livingdocs-server/pull/9871)
- [Image processing: Read large gif/webp uploads from disk](https://github.com/livingdocsIO/livingdocs-server/pull/9848)
- [Media library: Limit how many image variants are generated at once](https://github.com/livingdocsIO/livingdocs-server/pull/9855)
- [Media library: Add a processing timeout for images](https://github.com/livingdocsIO/livingdocs-server/pull/9854)
- [Fix/Table Dashboard Header Labels](https://github.com/livingdocsIO/livingdocs-editor/pull/11765)
- [Support image components in Agency Report content](https://github.com/livingdocsIO/livingdocs-server/pull/10182)
- [Support image components in Agency Report content](https://github.com/livingdocsIO/livingdocs-editor/pull/11716)
- [fix(media-library): place video detail actions below the player](https://github.com/livingdocsIO/livingdocs-editor/pull/11768)
- [Media library: Bound how many uploads are processed at once](https://github.com/livingdocsIO/livingdocs-server/pull/9865)
- [Image processing: Redact every frame of an animated image](https://github.com/livingdocsIO/livingdocs-server/pull/9929)
- [Media library: Generate an image variant once for concurrent requests](https://github.com/livingdocsIO/livingdocs-server/pull/9856)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/10226)
- [Image processing: Limit libvips to one thread per image](https://github.com/livingdocsIO/livingdocs-server/pull/9853)
- [Image processing: Remove the partial download when serving a variant fails](https://github.com/livingdocsIO/livingdocs-server/pull/9850)
- [Stop workspace timers after unloading and in unit tests](https://github.com/livingdocsIO/livingdocs-editor/pull/11751)
- [Job queue: Notify waiting listeners registered before a consumer is created](https://github.com/livingdocsIO/livingdocs-server/pull/10205)
- [Smart Quotes with Apostrophes](https://github.com/livingdocsIO/livingdocs-editor/pull/11653)
- [feat(media-library): enable LIFEAT010 for dfv](https://github.com/livingdocsIO/livingdocs-server/pull/10208)
- [Image processing: Convert SVG dimension units to pixels](https://github.com/livingdocsIO/livingdocs-server/pull/9849)
- [Set translatable poster image on the selected locale](https://github.com/livingdocsIO/livingdocs-editor/pull/11721)
- [Hide date errors on already planned publish and unpublish schedules](https://github.com/livingdocsIO/livingdocs-editor/pull/11720)
- [Fix crash of read-only minimal document reference](https://github.com/livingdocsIO/livingdocs-editor/pull/11731)
- [Notify open editors via Pusher when publishControl changes](https://github.com/livingdocsIO/livingdocs-server/pull/10184)
- [Apply a new selection in minimal document reference fields](https://github.com/livingdocsIO/livingdocs-editor/pull/11719)
- [fix(publish): show each unlinked publish error once in the error banner](https://github.com/livingdocsIO/livingdocs-editor/pull/11700)
- [Fix li-video-reference uploads in media library entries](https://github.com/livingdocsIO/livingdocs-editor/pull/11718)
- [Keep the completed-date sort when the task screen refreshes](https://github.com/livingdocsIO/livingdocs-editor/pull/11717)
- [Fix history pagination when the first revision on a page is published](https://github.com/livingdocsIO/livingdocs-server/pull/10183)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/10190)
- [fix(auth): Renew the access token after a 401 instead of expiring the session](https://github.com/livingdocsIO/livingdocs-editor/pull/11709)
- [feat(media-library): Add mediaLibrary.disableImageEditing server config](https://github.com/livingdocsIO/livingdocs-server/pull/10124)
- [feat(image-editor): Hide image editing with mediaLibrary.disableImageEditing](https://github.com/livingdocsIO/livingdocs-editor/pull/11681)
- [feat(account): Add a number formatting preference](https://github.com/livingdocsIO/livingdocs-editor/pull/11597)
- [Fix image crop crash for named crops without ratios](https://github.com/livingdocsIO/livingdocs-editor/pull/11701)
- [Show delete button for components in ticker entries](https://github.com/livingdocsIO/livingdocs-editor/pull/11702)
- [chore(deps): update dependency sanitize-html from 2.17.7 to v2.18.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11696)
- [Polish/spellcheck and li tag](https://github.com/livingdocsIO/livingdocs-editor/pull/11691)
- [feat(spellcheck): proofread the whole document in the command center](https://github.com/livingdocsIO/livingdocs-editor/pull/11640)
- [Skip category republish without a user instead of failing](https://github.com/livingdocsIO/livingdocs-server/pull/10170)
- [fix(public-api): accept oldValue in setEditableDirective command](https://github.com/livingdocsIO/livingdocs-server/pull/10156)
- [fix(comyan): keep metadata validation errors on image upload](https://github.com/livingdocsIO/livingdocs-server/pull/10093)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/10176)
- [fix(publish-control): Skip empty and invalid metadata dates in visiblePublicationDatePreference](https://github.com/livingdocsIO/livingdocs-server/pull/10137)
- [chore(deps): update dependency chai from 6.2.2 to v6.3.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10149)
- [Update proxy-addr to 2.0.8 to patch CVE-2026-90711](https://github.com/livingdocsIO/livingdocs-server/pull/10136)
- [Mount the demo's decompounder folder in the Downstream Demo job](https://github.com/livingdocsIO/livingdocs-server/pull/10142)
- [fix(ci): queue releases and publish with npm trusted publishing](https://github.com/livingdocsIO/livingdocs-editor/pull/11659)
- [fix(ci): pin npm-tag-latest to the release that loads](https://github.com/livingdocsIO/livingdocs-server/pull/10098)
- [fix(proxy): survive a browser that drops a websocket before the upstream upgrade](https://github.com/livingdocsIO/livingdocs-editor/pull/11647)
- [Update sharp to 0.35.5 to patch libheif vulnerabilities](https://github.com/livingdocsIO/livingdocs-server/pull/10085)
- [Handle migration jobs where only some revisions get an update](https://github.com/livingdocsIO/livingdocs-server/pull/10021)
- [Rebuild the navigation panel in Vue with favourites and filtering](https://github.com/livingdocsIO/livingdocs-editor/pull/11370)
- [chore(deps): update dependency eslint from 10.10.0 to v10.11.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10068)
- [test(publish-control): Cover publish, unpublish and scheduled unpublish [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11608)
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

### Removal of `{liItem: 'mediaLibrary'}` in the Main Navigation

**Code:** `LIBREAKING081`

The main navigation item `{liItem: 'mediaLibrary'}`, deprecated in {{< release "release-2026-05" >}} (`LIDEP083`), has been removed. The editor used to expand it into one entry per asset type (Images, Videos, Files). The server now rejects a project config that still contains it. [Media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) replace it.

The editor already hid these entries when the project had a dashboard with `type: 'mediaLibraryDashboard'` or `mediaLibrary.showUi: false`. Otherwise, projects without `editorSettings.mainNavigation` got them from the editor's default navigation, and lose them without an error.

#### Detect

Any of:

- `{liItem: 'mediaLibrary'}` in `mainNavigation`. Search for `['"]mediaLibrary['"]`. Hits on the `editorSettings.mediaLibrary` key, on server config reads, and on a group or custom navigation item with `handle: 'mediaLibrary'` are unaffected.
- A `mainNavigationGroups` entry whose `items` lists the handle of that `liItem`, which is `'mediaLibrary'` unless the item sets its own `handle`. If `'mediaLibrary'` is the handle of a custom navigation item instead, the group is unaffected.
- No `mainNavigation` in the editor settings a project uses, which are often shared or merged from a common config, and no dashboard with `type: 'mediaLibraryDashboard'`. Search for `\bmainNavigation\b` and `mediaLibraryDashboard`.

#### Fix

Remove `{liItem: 'mediaLibrary'}` from `mainNavigation`. For each asset type the project has media types for, configure a media library dashboard and a navigation item that references it. Leave out the other entries, they would open an empty media library. The previous entries showed the editor's translated name of the asset type, so use a translatable `label` for the languages your editors use, and leave out `pageTitle`, which then defaults to that name. The icons below match the previous entries:

```js
editorSettings: {
  mainNavigation: [
    {handle: 'images', label: {en: 'Images', de: 'Bilder'}, dashboard: 'images', icon: 'image-multiple'},
    {handle: 'videos', label: 'Videos', dashboard: 'videos', icon: 'play-box-multiple'},
    {handle: 'files', label: 'Files', dashboard: 'files', icon: 'file-multiple'}
  ],
  dashboards: [
    {handle: 'images', type: 'mediaLibraryDashboard', assetType: 'mediaImage'},
    {handle: 'videos', type: 'mediaLibraryDashboard', assetType: 'mediaVideo'},
    {handle: 'files', type: 'mediaLibraryDashboard', assetType: 'mediaFile'}
  ]
}
```

If a `mainNavigationGroups` entry lists the handle of the removed item in its `items`, replace it with the handles of the new navigation items.

Projects without `mainNavigation` need one now to show media entries. Because it replaces the whole default navigation, list every entry the project should keep, see [Main Navigation]({{< ref "/reference/project-config/editor-settings#main-navigation" >}}).

### Removal of the Fallback in Media Library Sidepanels and Dialogs

Media library sidepanels and selection dialogs only show the [media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) the project config references. The "Feed" fallback, which listed all media of an asset type grouped by media type, has been removed, together with the auto-generated full-page media libraries at `/media-library/dashboard/:type`. That URL now redirects to the first media library dashboard of the same asset type in the main navigation, otherwise to the home screen or the first dashboard. The back button of the media library detail view leads to the same place when there is no previous page.

Every entry point without a referenced dashboard is hidden **without an error**, also when the project has media sources or image collections. Every project has at least the `image` media type, so this affects most projects.

#### Detect

If `editorSettings.mediaLibrary.showUi` is `false`, only "Add image" is affected: in the document inbox of content types with `inbox.mediaTypes`, and in image collections.

Each entry point reads its dashboards from one property:

| Entry point | Property |
| --- | --- |
| Images, Videos and Files buttons in the toolbar, media library actions of images and videos in the document and the properties panel, "Add image" in the document inbox | `contentTypes[].editor.images\|videos\|files.useDashboard` |
| `li-image`, video of `li-video-reference` | `ui.config.useDashboard` (new), in a document or data record otherwise `editor.images\|videos.useDashboard` |
| Poster image of `li-video-reference` | `ui.config.posterImageUseDashboard`, in a document or data record otherwise `editor.images.useDashboard` |
| `li-poster-image` (media types only) | `ui.config.useDashboard` |
| "Add image" in image collections | `imageCollections.useDashboard` |

Helpers, metadata templates and environment configs often build the project config, so check the resolved config of every project and environment. The project config approval file often covers only the base config, and not every project has one. Print the resolved config instead, for example in `server/` with `ENVIRONMENT=<environment> node -p 'JSON.stringify(require("./projects/<project>/<environment>"))' > config.json`. Some environments need more of their environment variables. Affected is any of:

- A content type that is not a data record, without `useDashboard` for an asset type the project has media types for. A missing key or a missing `editor` counts too. List the asset types with `jq -r '[.mediaTypes[].type] | unique[]' config.json`, then the content types per asset type, here for `mediaImage`: `jq -r '.contentTypes[] | select(.documentType != "data-record" and .handle != "liNewsAgencyReport" and .editor.images.useDashboard == null) | .handle' config.json`. Use `videos` for `mediaVideo` and `files` for `mediaFile`.
- A metadata picker from the table without `useDashboard`: in a data record without `editor.images|videos.useDashboard`, in a media type, or in the `paramsSchema` of an include used in a content type without `editor.images|videos.useDashboard`. A media type has nothing to fall back to, and the server doesn't validate include params. Search the content types, media types, the metadata templates they import, and the files with `paramsSchema` for `li-image|li-poster-image|li-video-reference`.
- A data record with `image` in `inbox.mediaTypes` and no `editor.images.useDashboard`. Search for `mediaTypes` under `inbox`.
- `imageCollections` without `useDashboard`.
- A `useDashboard` or `posterImageUseDashboard` from the table that references a dashboard which is not a `mediaLibraryDashboard` of the matching `assetType`. The server now rejects such a reference when it validates the project config. Before, the dashboard only had to exist.
- A content type with `allowedMediaTypes` whose dashboards have no matching `mediaType` base filter. Search for the bare `mediaType`, base filters can also use the older `{type: 'mediaType', value: 'image'}` form.
- A picker with `uploadMediaType` or `posterImageUploadMediaType` whose dashboards don't list that media type. Search for `[uU]ploadMediaType`.
- Custom editor code that opens `li-media-library-selection-dialog` or `li-media-library-panel` without a `useDashboard` prop. Search for `media-library-(selection-dialog|panel)|MediaLibrary(SelectionDialog|Panel)` and follow wrapper modules to their callers.

#### Fix

Configure a media library dashboard for each asset type the project has media types for, and reference it from every affected entry point. Leave out the other asset types, their toolbar button would open an empty library. Whether a toolbar button stays is a choice, for example leaving out `editor.files` hides the Files button when the file media types only serve a metadata plugin. Keep existing references as they are and only add what is missing. In a data record, `editor.images|videos.useDashboard` covers all its pickers.

Give the entry points that used the fallback their own sidepanel dashboards with `{key: 'state', term: 'active'}`, because the fallback listed all active media of the asset type. Don't reuse existing dashboards for them: their base filters can hide media the fallback showed, and adding the state filter would also change them where they are used already, for example in the main navigation.

Apart from `ui.config.useDashboard` of `li-image` and `li-video-reference`, this config works since {{< release "release-2026-05" >}}, so you can set it up before the upgrade. Without `pageTitle`, a sidepanel tab shows the translated name of the asset type:

```js
editorSettings: {
  dashboards: [
    {
      handle: 'imagesSidepanel',
      type: 'mediaLibraryDashboard',
      assetType: 'mediaImage',
      baseFilters: [{key: 'state', term: 'active'}]
    },
    {
      handle: 'videosSidepanel',
      type: 'mediaLibraryDashboard',
      assetType: 'mediaVideo',
      baseFilters: [{key: 'state', term: 'active'}]
    },
    {
      handle: 'filesSidepanel',
      type: 'mediaLibraryDashboard',
      assetType: 'mediaFile',
      baseFilters: [{key: 'state', term: 'active'}]
    }
  ]
},
contentTypes: [
  {
    handle: 'article',
    editor: {
      images: {useDashboard: 'imagesSidepanel'},
      videos: {useDashboard: 'videosSidepanel'},
      files: {useDashboard: 'filesSidepanel'}
    }
  }
]
```

Results are no longer grouped by media type. To keep media types apart, reference one dashboard per media type with a `mediaType` base filter as a list, each is shown as a tab.

For the other cases from Detect:

- **References to other dashboards**: point them to a `mediaLibraryDashboard` of the matching `assetType`.
- **[`allowedMediaTypes`]({{< ref "/reference/project-config/content-types#allowed-media-types" >}})**: dashboards don't filter by it, and picking a disallowed media item fails. Add a matching `mediaType` base filter, for example `{key: 'mediaType', term: ['image', 'infographic']}`, per asset type it lists. Content types with different `allowedMediaTypes` need separate dashboards.
- **Upload media types**: reference a dashboard that lists the media type, otherwise media uploaded there can't be picked again. `li-poster-image` requires `uploadMediaType` as soon as it has a `ui.config`. Uploads used to go to the project's default image media type, so use that one to keep the behavior, for example `ui: {config: {uploadMediaType: 'image', useDashboard: 'imagesSidepanel'}}`.
- **Metadata templates**: set `useDashboard` on the media type's own property, not on a shared template. A property's own `useDashboard` wins over `editor.images.useDashboard` in every document that uses the template.
- **Custom editor code**: pass `useDashboard`, for example from the `ui.config.useDashboard` of the custom metadata plugin, and add it to the plugin's `uiSchema` if it has one. The dialog and panel no longer read the content type's dashboards and open empty without it. The `includeHiddenMediaTypes` prop has been removed.

### Removal of `mediaTypes[].editor`

**Code:** `LIBREAKING082`

The media type properties `editor.dashboard` and `editor.managementDashboard`, deprecated in {{< release "release-2026-05" >}} (`LIDEP080`), have been removed. They configured the auto-generated media libraries. The server rejects any `editor` on a media type, also an empty `editor: {}`.

#### Detect

In the media type configs, the key `editor`. Search the media type files for `^\s*editor\b|managementDashboard`.

#### Fix

Remove `editor` from every media type, and set up the dashboards from [Removal of the Fallback in Media Library Sidepanels and Dialogs](#removal-of-the-fallback-in-media-library-sidepanels-and-dialogs) first. Move the settings into media library dashboards:

| Before | After |
| --- | --- |
| `editor.dashboard.baseFilters`, `editor.dashboard.displayFilters` | `baseFilters`, `displayFilters` of the sidepanel dashboard, and of the navigation dashboard where `editor.managementDashboard` doesn't set them |
| `editor.managementDashboard.*` | the navigation dashboards from [Removal of `{liItem: 'mediaLibrary'}` in the Main Navigation](#removal-of-liitem-medialibrary-in-the-main-navigation) |
| `editor.*.card` | `useCardConfiguration` of the dashboard, see [Dashboard Cards]({{< ref "/reference/project-config/editor-settings#dashboard-cards" >}}) |

For example:

```js
// Before, in mediaTypes
{
  handle: 'image',
  type: 'mediaImage',
  editor: {
    dashboard: {
      baseFilters: [{key: 'mediaType', term: 'image'}],
      displayFilters: [{filterName: 'liDateTimeRange'}]
    }
  }
}

// After, in editorSettings.dashboards
{
  handle: 'imagesSidepanel',
  type: 'mediaLibraryDashboard',
  pageTitle: 'Images',
  assetType: 'mediaImage',
  baseFilters: [
    {key: 'state', term: 'active'},
    {key: 'mediaType', term: 'image'}
  ],
  displayFilters: [{filterName: 'liDateTimeRange'}]
}
```

Base filters in the old `{type: 'sortBy', value: '-createdAt'}` form can be moved as they are, they set the sort order of the dashboard. The `sort` property of a dashboard has no effect in sidepanels and dialogs.

### Removal of `mediaTypes[].hidden`

**Code:** `LIBREAKING083`

The media type property `hidden`, deprecated in {{< release "release-2026-05" >}} (`LIDEP082`), has been removed. It excluded a media type from the fallback in sidepanels and dialogs. Media library dashboards without a `mediaType` base filter list every media type of their asset type, including the formerly hidden ones.

#### Detect

In the media type configs, the key `hidden`. Search the media type files for `^\s*hidden\b`.

#### Fix

Set up the dashboards from [Removal of the Fallback in Media Library Sidepanels and Dialogs](#removal-of-the-fallback-in-media-library-sidepanels-and-dialogs) first. Remove `hidden`. Add a `mediaType` base filter to every media library dashboard of the same asset type that should not list the media type, for example `{key: 'mediaType', term: ['image', 'infographic']}`. A filter like `{not: {key: 'mediaType', term: 'posterImage'}}` also hides the media, but the upload button of a full-page dashboard still offers that media type. Replace such a filter with a positive `mediaType` filter.

If the hidden media type stores poster images (the `uploadMediaType` of `li-poster-image` or the `posterImageUploadMediaType` of `li-video-reference`), configure a dashboard for it and reference it from the poster image pickers. Search for `[uU]ploadMediaType`, and skip this step if no hit names the hidden media type:

```js
// In editorSettings.dashboards
{
  handle: 'posterImages',
  type: 'mediaLibraryDashboard',
  pageTitle: 'Poster Images',
  assetType: 'mediaImage',
  baseFilters: [
    {key: 'state', term: 'active'},
    {key: 'mediaType', term: 'posterImage'}
  ]
}

// li-poster-image
ui: {config: {uploadMediaType: 'posterImage', useDashboard: 'posterImages'}}

// li-video-reference
ui: {config: {posterImageUploadMediaType: 'posterImage', posterImageUseDashboard: 'posterImages'}}
```

### Removal of `contentTypes[].editor.images.mediaTypes`

**Code:** `LIBREAKING084`

The content type property `editor.images.mediaTypes`, deprecated in {{< release "release-2026-05" >}} (`LIDEP081`), has been removed. It restricted image uploads, drops and the media library selection to the listed media types.

#### Detect

In the content type configs, `mediaTypes` inside `editor.images`. Search the content type files for `mediaTypes` and check whether the hit sits under `images` (`inbox.mediaTypes` and `imageCollections.mediaTypes` are unaffected).

#### Fix

Remove `editor.images.mediaTypes`. Restrict drops with [`allowedMediaTypes`]({{< ref "/reference/project-config/content-types#allowed-media-types" >}}), and the media library selection with a `mediaType` base filter on the dashboard referenced by `editor.images.useDashboard`:

```js
// Before
{
  handle: 'article',
  editor: {
    images: {mediaTypes: ['image', 'infographic']}
  }
}

// After
{
  handle: 'article',
  allowedMediaTypes: {mediaImage: ['image', 'infographic']},
  editor: {
    images: {useDashboard: 'articleImages'}
  }
}

// In editorSettings.dashboards
{
  handle: 'articleImages',
  type: 'mediaLibraryDashboard',
  pageTitle: 'Images',
  assetType: 'mediaImage',
  baseFilters: [
    {key: 'state', term: 'active'},
    {key: 'mediaType', term: ['image', 'infographic']}
  ]
}
```

## Deprecations :warning:

### Deprecation of the elasticIndex.maxCpu and elasticIndex.maxCpuFunction Server Configs

**Codes:** `LIDEP092-maxCpu`, `LIDEP092-maxCpuFunction`

The server configs `elasticIndex.maxCpu` and `elasticIndex.maxCpuFunction` are deprecated and will be removed in `release-2027-05`. Indexing no longer needs to pause based on the Elasticsearch CPU usage, because bulk requests that an overloaded Elasticsearch rejects with status 429 are already retried. With this release, the default of `maxCpu` changes from `80` to `0`, which turns the CPU check off. Projects that don't set `maxCpu` no longer pause indexing when the Elasticsearch CPU usage is high.

#### Detect

In the server config, `maxCpu` or `maxCpuFunction` under `elasticIndex`. Search for `maxCpu|max_cpu` and confirm each hit sits under `elasticIndex`. A `maxCpu` under `import.jobs` is a separate, already unused config. You can remove it as well.

#### Fix

Remove `maxCpu` and `maxCpuFunction` from the `elasticIndex` server config. There is no replacement. This includes `maxCpu: 0`. Removing it doesn't change the behavior, because `0` is the new default.

## Features :gift:

### Smart Quotes Replace Apostrophes

Editors cannot type the typographic apostrophe (’) on Windows with a German keyboard. The layout only types the straight apostrophe ('). Livingdocs already replaced it on paste, and now Smart Quotes also replace it while typing, for example `O'Brien` → `O’Brien`.

To enable it, set `apostrophe` in `textFormatting` next to `quotes` and `singleQuotes`. Without it, typed apostrophes stay unchanged.

```js
textFormatting: {
  smartQuotes: {enabled: true},
  quotes: ['„', '“'],
  singleQuotes: ['‚', '‘'],
  apostrophe: '’'
}
```

Smart Quotes now also support `locales`. You can set `quotes`, `singleQuotes` and `apostrophe` for each language. If a document is in that language, Smart Quotes use these values instead of the ones at the top level. Pasting already worked this way.

For more information, see the [Smart Quotes]({{< ref "/reference/project-config/editor-settings#smart-quotes" >}}) documentation.

### Images in News Agency Reports

News agencies often deliver images along with their reports. News agency reports can now include them, and editors see them in a collapsible "Images" section when they open a report on a news agency screen or in a notification.

Hover over a thumbnail to jump to its media library entry. On news agency screens, you can also open the images in a lightbox and click through all images of the report.

{{< img src="release-2026-11-agency-report-images.png" alt="Images section of a news agency report with six image thumbnails" width="450" caption="Images are now supported in news agency reports." >}}

The Images section is available automatically. Images are imported as `image` components with an optional caption and source, and reference existing media library entries.

{{< info >}}
Your news agency function decides what happens to images when a report is copied into an article. Make sure it handles `image` components before you import reports with images.
{{< /info >}}

For more information, see the [News Agencies]({{< ref "/guides/integrations/news-agencies#images" >}}) documentation.

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

- [v317.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v317.0.2): fix(release-2026-11): set up the release branch

### Livingdocs Editor Patches

- [v131.0.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v131.0.2): fix(deps): update dependency @livingdocs/framework from 34.3.16 to v34.3.17
- [v131.0.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v131.0.1): fix(release-2026-11): set up the release branch
