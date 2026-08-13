---
type: release-notes
title: September 2026 Release
description: Technical Release Notes for release-2026-09
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2026-09

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
      version: Chrome >= 138, Edge >= 138, Firefox >= 140, Safari >= 18.6
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize

- [fix(deps): update dependency @livingdocs/framework from 34.2.1 to v34.2.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9844)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11437)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9830)
- [Replace the legacy ld-card CSS class with the li-card component](https://github.com/livingdocsIO/livingdocs-editor/pull/11392)
- [fix(indexing): Always load the elasticsearch configs into the process](https://github.com/livingdocsIO/livingdocs-server/pull/9785)
- [feat(media-library): improve filename visibility and add copy button](https://github.com/livingdocsIO/livingdocs-editor/pull/11367)
- [feat(media-library): substring search on asset filenames via ngram](https://github.com/livingdocsIO/livingdocs-server/pull/9743)
- [Match metadata image urls to the server to avoid merge conflicts](https://github.com/livingdocsIO/livingdocs-editor/pull/11422)
- [Restore OpenID Connect login through a forward proxy](https://github.com/livingdocsIO/livingdocs-server/pull/9784)
- [fix(deps): update dependency chalk from 5.6.2 to v6 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9802)
- [chore(deps): update dependency execa from 10.0.0 to v10.0.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9799)
- [fix(deps): update dependency @livingdocs/framework from 34.2.0 to v34.2.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11419)
- [chore(deps): update dependency posthog-node from 5.46.1 to v5.47.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9798)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11411)
- [fix(indexing): Avoid caching empty media-library locale fields at startup](https://github.com/livingdocsIO/livingdocs-server/pull/9777)
- [Image Card Enhancement & License Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/11344)
- [fix(deps): update dependency pusher-js from 8.5.0 to v8.6.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11400)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9752)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11384)
- [chore(deps): update dependency jose from 6.2.3 to v6.2.4 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11385)
- [fix(deps): update dependency js-yaml from 5.2.1 to 5.2.2 [security] (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11375)
- [fix(i18n): adjust nb-NO editor labels and bundle panel strings](https://github.com/livingdocsIO/livingdocs-editor/pull/11371)
- [Add explicit enablement to license profiles](https://github.com/livingdocsIO/livingdocs-server/pull/9730)
- [Add explicit enablement to license profiles](https://github.com/livingdocsIO/livingdocs-editor/pull/11358)
- [Don't define breaking change date for three deprecations](https://github.com/livingdocsIO/livingdocs-server/pull/9725)
- [Resolve all published candidates in curated-list teasers](https://github.com/livingdocsIO/livingdocs-server/pull/9696)
- [fix(deps): update dependency nanoid from 5.1.16 to v6 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11353)
- [fix(deps): update dependency execa from 9.6.1 to v10 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9721)
- [fix(deps): update dependency nanoid from 5.1.16 to v6 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9715)
- [fix(draft-storage): Never silently drop unsaved content when saving is disabled](https://github.com/livingdocsIO/livingdocs-editor/pull/11241)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9726)
- [Update logo and favicon assets; serve browser-support logo locally](https://github.com/livingdocsIO/livingdocs-editor/pull/11330)
- [Add nb-NO to relative-time supported locales](https://github.com/livingdocsIO/livingdocs-editor/pull/11345)
- [fix(deps): update babel from 7.29.7 to v8 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11239)
- [Fix release date in deprecation message of li-authentication functions](https://github.com/livingdocsIO/livingdocs-server/pull/9701)
- [Run node vulnerability patch weekly across main and the three latest releases](https://github.com/livingdocsIO/livingdocs-server/pull/9670)
- [fix(metadata): report initial form validity on mount](https://github.com/livingdocsIO/livingdocs-editor/pull/11337)
- [fix(deps): update dependency cookie from 1.1.1 to v2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9635)
- [Toggle include overrides of only focused component](https://github.com/livingdocsIO/livingdocs-editor/pull/11135)
- [Keep drag auto-scroll working after window resize](https://github.com/livingdocsIO/livingdocs-editor/pull/11324)
- [Add file extension to image downloads in Chrome and Edge](https://github.com/livingdocsIO/livingdocs-server/pull/9636)
- [fix(search): Position simple-search cheat sheet flyout correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/11323)
- [Re-expose addUsageLogEntriesForMediaInDocument](https://github.com/livingdocsIO/livingdocs-server/pull/9684)
- [Hide license profile tag when license profiles are not configured](https://github.com/livingdocsIO/livingdocs-editor/pull/11320)
- [Hide "media not found" badge on empty image placeholders](https://github.com/livingdocsIO/livingdocs-editor/pull/11318)
- [fix(auth): Always refresh tokens, makes `auth.authTokenRenewalInterval` config obsolete](https://github.com/livingdocsIO/livingdocs-editor/pull/11308)
- [Add standard cost class translation to the license profile form](https://github.com/livingdocsIO/livingdocs-editor/pull/11310)
- [chore(deps): update dependency webpack from 5.108.3 to v5.108.4 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11306)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/9679)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2026-09`, read on.

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

#### Prepare a Directory for Image Upload Processing

Image uploads are now written to a temporary file instead of being held in memory (see [Large Animated Image Uploads](#large-animated-image-uploads)). They land in the system temp directory unless configured otherwise, and in a container that is often a `tmpfs` (RAM-backed) mount, where the files count against the memory limit instead of relieving it.

Mount a directory on real disk for them, sized for the concurrent worst case: `mediaLibrary.images.processing.maxConcurrentProcesses` uploads of `mediaLibrary.images.uploadRestrictions.maxFileSize` each. That is 20 × 15MB ≈ 300MB with the defaults, but 2GB if you have raised `maxFileSize` to `100mb`. The property that points at it comes with the new version, so configure it during the rollout.

### Rollout deployment

#### Migrate the Postgres Database

No migrations are required for this release.

#### Point Image Upload Processing at the Prepared Directory

Roll out `mediaLibrary.images.uploadProcessingDirectory` together with the new version:

```js
mediaLibrary: {
  images: {
    uploadProcessingDirectory: '/var/lib/livingdocs/uploads'
  }
}
```

With `use2025Behavior` enabled, `mediaLibrary.images.resizingDirectory` is worth setting at the same time if it is not already defined: it also defaults to the system temp directory, and holds the files written while generating image variants on demand. It can point at the same directory, as long as the volume is sized for both — filenames are random, so the two never collide.

### After the deployment

No post-deployment steps are required after rolling out this release.

### Rollback

No rollback steps are required for this release.

## Breaking Changes :fire:

## Deprecations :warning:

## Features :gift:

### Search by Filename

Not every image arrives with a title or description. When metadata is missing, the filename is often the only thing that identifies an image. Editors can now search for images by their filename, and read or copy the full name straight from the detail view.

#### Find images by any part of the filename

Media Library text search now matches any part of a filename, not just the beginning. Matching is case-insensitive and needs at least three characters. Searching for `AXZ87D3X` finds `imago-AXZ87D3X-john-doe-cc.jpg`.

{{< info >}}
Substring filename search is opt-in. Recreate the media library Elasticsearch index only if you want the feature; until then, search keeps working as before, and it activates automatically the next time the index is recreated for any other reason.

```
livingdocs-server elasticsearch-index --handle li-media --recreate -y
```

`--recreate` deletes and rebuilds the index in place, so media search returns incomplete results while it runs (roughly 6,000 to 7,000 entries per second). Plan it for a low-traffic window.
{{< /info >}}

#### Read and copy the full filename

In the media detail view, the "Information" section now shows the complete filename instead of truncating it to a single line. A copy button next to it grabs the full name in one click, which makes long agency filenames and stock IDs easy to reuse.

### Large Animated Image Uploads

Animated GIF and WebP images upload up to `mediaLibrary.images.uploadRestrictions.maxFileSize`, the same as every other format. Earlier releases rejected them above 10MB, because counting the frames of an animated image needs the complete file and that file was held in memory.

Livingdocs now writes those uploads to a temporary file and reads them from disk. This works without any configuration, but the directory it writes to is worth setting in the server config:

```js
mediaLibrary: {
  images: {
    uploadProcessingDirectory: '/var/lib/livingdocs/uploads' // default os.tmpdir()
  }
}
```

{{< warning >}}
The default is the system temp directory, which in a container is often a `tmpfs` (RAM-backed) mount. Files written there count against the container's memory limit, so several large uploads at once can exhaust it — the very thing writing them to disk avoids. Point `uploadProcessingDirectory` at real disk.
{{< /warning >}}

For more information, see the [Temporary Directories]({{< ref "/customising/server-configuration/#temporary-directories" >}}) documentation.

### Image Processing Limits

Processing an image is the most resource-hungry thing the server does, and several of its limits were missing, decided by the host instead of the configuration, or narrower in scope than they looked. This release closes those gaps.

```js
mediaLibrary: {
  images: {
    processing: {
      timeout: '5m',            // new, default '5m'
      maxConcurrentResizes: 4,  // new, default 4
      maxConcurrentProcesses: 20 // unchanged, but now covers the whole upload
    }
  }
}
```

- **`timeout`** puts a time limit on transforming an upload or generating a variant. Nothing interrupted that work before, and `maxFrames` together with `maxResolution` permits images that would occupy a processing slot for close to an hour.

- **`maxConcurrentResizes`** limits how many image variants are generated at the same time. Each request for a variant that is not cached yet downloads the original and submits it for processing, and their number was previously unbounded — so a cold cache filled Node.js' thread pool with a backlog that every other file and DNS operation in the process had to wait behind.

- **`maxConcurrentProcesses`** keeps its name, its default and its place in the configuration, but now covers an upload from start to finish. It used to release its slot as soon as the file had been received and inspected, because transforming an image is deferred until the result is read on its way to storage — which left no limit at all on how many images were transformed, or written to storage, at the same time. Uploads beyond the limit now wait for a slot instead of piling up behind the thread pool.

Three further changes need no configuration. Requests that arrive for the same uncached variant now share a single job instead of each generating it, so a cold cache no longer multiplies the work by the number of readers who happen to load the same page. Image processing uses one thread per image rather than one per CPU core the container can see, which on a container limited by a CPU quota rather than a CPU set is every core of the host: measured on a 120-frame animated WebP, one thread is both slightly faster and less than half the memory. And an image upload now has 15 minutes to complete instead of 4 — the budget covers the transfer, the wait for a free processing slot and the processing itself, and a large animated image can need several minutes of that on its own.

For more information, see the [Image Processing]({{< ref "/customising/server-configuration/#image-processing-with-use2025behavior" >}}) documentation.

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

Patches typically fix bugs and apply improvements within the current release. Keeping your deployment up-to-date with the latest patch version means you benefit from those fixes. No explicit action is required per patch — bumping the version is enough.

### Livingdocs Server Patches

### Livingdocs Editor Patches
