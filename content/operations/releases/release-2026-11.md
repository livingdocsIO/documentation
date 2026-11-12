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
      version: Chrome >= 156, Edge >= 156, Firefox >= 159, Safari >= 27.2

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

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/blog/release-november-2026).
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

#### Keep the Image Temporary Directory off tmpfs

`mediaLibrary.images.resizingDirectory` now also holds image uploads: every upload without `use2025Behavior`, and large GIF and WebP uploads with it. It defaults to the system temp directory, which in many containers is a `tmpfs` (RAM-backed) mount, where these files count against the memory limit.

Point `resizingDirectory` at a disk-backed volume. See [Temporary Directory]({{< ref "/customising/server-configuration#temporary-directory" >}}) for sizing.

### Rollout deployment

#### Migrate the Postgres Database

No migrations are required for this release.

### After the deployment

No post-deployment steps are required after rolling out this release.

### Rollback

No rollback steps are required for this release.

## Breaking Changes :fire:

### Minimum Node.js 22 Version Raised to 22.22.0

The supported Node.js 22 range moved from `>=22.17.1` to `>=22.22.0`. The Livingdocs Editor also requires Node.js 24 to be at least `24.11.0`. Node.js 26 is unaffected.

`undici` 8 requires Node.js `>=22.19.0` and `posthog-node` 5 requires `>=22.22.0`, so the previous floor advertised a minimum those dependencies never supported. Running on 22.17.1-22.21.x was already outside what those packages declare; it is now outside `engines.node` as well.

Node.js 22 as a whole is deprecated and will be dropped in `release-2027-03` (see [Postponed Drop of Node.js 22](#postponed-drop-of-nodejs-22)), so moving to Node.js 24 or 26 is worth more than chasing a 22.x patch.

#### Detect

Either of:

- The Node.js version running the server is 22.17.1-22.21.x. Check with `node --version`. An affected server emits `You're using an unsupported version` on boot.
- A Node.js 22 patch below 22.22.0 pinned in the project - check `.nvmrc`, `FROM` lines in Dockerfiles, and CI job images. Search for `22\.(1[789]|2[01])\.`.
- The editor runs on Node.js 24.0-24.10. `npm install` reports `EBADENGINE`.

#### Fix

Upgrade the Node.js runtime to 22.22.0 or newer, or for the editor on Node.js 24 to 24.11.0 or newer, and update every pinned version alongside it: `.nvmrc`, the `FROM` tags in Dockerfiles, and CI job images. Upgrading to Node.js 24 or 26 instead also resolves it, and avoids a second upgrade when Node.js 22 support is dropped.

`npm install` on an affected version reports `EBADENGINE` for `undici` and `posthog-node`.

### Drop of Support for Elasticsearch 7 and OpenSearch 1

**Codes:** `LIBREAKING086`, `LIBREAKING087`

Elasticsearch versions older than v8 and OpenSearch versions older than v2 are no longer supported. The drop was announced in {{< release "release-2026-03" >}}, and the server now enforces it: it refuses to start against an older cluster. The minimal supported versions are Elasticsearch 8 and OpenSearch 2.

#### Detect

Either of:

- Request the root endpoint of the configured Elasticsearch or OpenSearch cluster (`curl <cluster-url>`) and read `version.number`. Elasticsearch below 8 or OpenSearch below 2 is affected.
- The server fails at startup with `LIBREAKING086` (Elasticsearch) or `LIBREAKING087` (OpenSearch). The check only runs when the cluster is reachable at startup.

#### Fix

Upgrade the cluster to Elasticsearch 9 or OpenSearch 3. Elasticsearch 8 meets the new minimum, but is deprecated in this release (see [Deprecation of Elasticsearch 8](#deprecation-of-elasticsearch-8)), so upgrading straight to 9 avoids a second round.

## Deprecations :warning:

### Deprecation of the elasticIndex.maxCpu and elasticIndex.maxCpuFunction Server Configs

**Codes:** `LIDEP092-maxCpu`, `LIDEP092-maxCpuFunction`

The server configs `elasticIndex.maxCpu` and `elasticIndex.maxCpuFunction` are deprecated and will be removed in `release-2027-05`. Indexing no longer needs to pause based on the Elasticsearch CPU usage, because bulk requests that an overloaded Elasticsearch rejects with status 429 are already retried. With this release, the default of `maxCpu` changes from `80` to `0`, which turns the CPU check off. Projects that don't set `maxCpu` no longer pause indexing when the Elasticsearch CPU usage is high.

#### Detect

In the server config, `maxCpu` or `maxCpuFunction` under `elasticIndex`. Search for `maxCpu|max_cpu` and confirm each hit sits under `elasticIndex`. A `maxCpu` under `import.jobs` is a separate, already unused config. You can remove it as well.

#### Fix

Remove `maxCpu` and `maxCpuFunction` from the `elasticIndex` server config. There is no replacement. This includes `maxCpu: 0`. Removing it doesn't change the behavior, because `0` is the new default.

### Deprecation of Elasticsearch 8

**Code:** `LIDEP094`

Support for Elasticsearch 8 is deprecated and will be dropped in `release-2027-05`. Elasticsearch 8 reaches its End of Maintenance on 2027-01-15. The minimal supported version stays at 8 for now.

#### Detect

Request the root endpoint of the configured Elasticsearch cluster (`curl <cluster-url>`) and read `version.number`. A major version of 8 is affected. OpenSearch clusters are not affected.

#### Fix

Upgrade to Elasticsearch 9, the suggested version for this release.

### Deprecation of Public API Version 2025-03

**Code:** `LIDEP089-2025-03`

The Public API version `2025-03` is deprecated and will be removed in `release-2027-05`, following the [versioning policy]({{< ref "/reference/public-api/versioning" >}}): a version is deprecated 20 months after its release and removed six months later. Requests to it answer with a deprecation warning header.

This release also adds the Public API version `2026-11`. From this release on, the available, deprecated and removed versions follow the schedule automatically with every release.

#### Detect

In project source code and in integrations calling Livingdocs, a request path starting with `/api/2025-03/`. Server-side, the deprecation is logged with the code above on every such request.

#### Fix

Migrate the integration to a newer API version, ideally `2026-11`. Consult the [Public API changelog]({{< ref "/reference/public-api/changelog" >}}) for what each version in between changes.

### Deprecation of publicApi.minimumApiVersion

**Code:** `LIDEP093`

The server config `publicApi.minimumApiVersion` is deprecated and will be removed in `release-2027-03`, together with the Public API versions `v1` and `beta`. The config makes the server reject older API versions, even though they are still supported. This breaks cross-project content sharing: the requesting server can't know the remote server's minimum, and its requests are rejected with `410`.

Cross-project content sharing now requests the Public API version of a year before the release (`2025-11` in this release) instead of `v1`. Remote servers must therefore run a release at most a year older than the requesting server.

#### Detect

In the server config, `minimumApiVersion` under `publicApi`.

#### Fix

Remove `minimumApiVersion` from the `publicApi` server config. There is no replacement.

### Postponed Drop of Node.js 22

**Code:** `LIDEP084`

The drop of Node.js 22 moves from `release-2027-01` to `release-2027-03`. Node.js 22 reaches its end of life on 2027-04-30, which falls into `release-2027-03`. This gives projects one more release to upgrade. Node.js 22 was deprecated in {{< release "release-2026-07" >}}.

#### Detect

Run `node --version` against the process running the server. A major version of 22 is affected, and an affected server emits `LIDEP084` on every boot.

#### Fix

Upgrade to Node.js 24 or 26, and update the pinned versions alongside it: `.nvmrc`, the `FROM` tags in Dockerfiles, and CI job images.

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

### New Navigation

The main navigation has been redesigned. It is wider, easier to scan, and gets editors to the screens they need faster:

- **Search.** A filter field narrows the navigation down to matching entries. Collapse or expand all groups with one click.
- **Favourites.** Mark single entries or whole groups as favourites. They are collected in a "Favourites" section at the top and saved to the user account, so they follow editors across browsers and devices.
- **Keyboard navigation.** Move through the entries with the arrow keys, open a group or screen with Enter, and close the navigation with Escape.

The new navigation is available automatically. No configuration is required.

### Unmodified Images Served as Stored

An image without modifications is now delivered exactly as it was uploaded, instead of a re-encoded copy. It keeps its full quality and dimensions, including every page of a multi-page TIFF, and the server no longer has to decode it.

- **Downloads in the editor.** Downloading an image without modifications, crop or width returns the stored file. Previously, every download was re-encoded and capped at 8000 pixels wide. This applies automatically.
- **Public API.** From API version `2026-11`, [`GET /mediaLibrary/serve-image/:key`]({{< ref "/reference/public-api/media-library/#serve-image" >}}) returns an image without modifications as stored. Earlier API versions are unchanged. To opt in, change the API version in your image service's base URL, for example the Imgix source. Images with modifications such as redactions or colour corrections are processed as before.

{{< info >}}
A stored image keeps its EXIF orientation as a tag instead of having it applied to the pixels. Imgix and modern browsers apply the tag. A consumer that ignores it, or that sizes the image from the entry's width and height, shows rotated camera and phone photos sideways. Check your consumers before switching to `2026-11`.
{{< /info >}}

This applies to projects with `mediaLibrary.use2025Behavior` enabled, which store images as uploaded. Without it, images are transformed when they are uploaded, and the transformed file is served as before.

For more information, see the [Public API changelog]({{< ref "/reference/public-api/changelog" >}}).

### More Robust Image Processing

Large animated GIFs and WebPs could exhaust a server's memory, and bursts of uploads or uncached variants slowed down other requests. Image processing now bounds the memory and threads it uses. This is available automatically.

- **Large animations.** GIF and WebP uploads are no longer limited to 10MB, and are read from disk rather than memory.
- **Total resolution limit.** The new `processing.maxTotalResolution` rejects animations above 200 megapixels across all frames by default, which keeps one image to roughly 1GB of memory.
- **Concurrency.** At most `UV_THREADPOOL_SIZE - 1` images are processed at once, 3 by default. On containers with more than 2 CPUs, set `UV_THREADPOOL_SIZE` to one more than the CPU limit.
- **Timeout.** Processing a single image is limited to 3 minutes.
- **AVIF** is encoded faster, for a slightly larger file. Without `use2025Behavior`, AVIF uploads are stored that way.
- **Error messages.** The editor explains why an upload was rejected.

{{< warning >}}
Some images that were processed before are now rejected:

- Animations above `maxTotalResolution`. With the default, this includes dense animations of roughly 4.5MB to 10MB. Raise the limit to accept them. Animations already in the media library are not affected.
- Images that take longer than 3 minutes to process.
{{< /warning >}}

For more information, see the [Image Processing Memory]({{< ref "/customising/server-configuration#image-processing-memory" >}}) and [Temporary Directory]({{< ref "/customising/server-configuration#temporary-directory" >}}) documentation.

### Fast Image Processing

Images can now be processed with `@livingdocs/image` instead of sharp. sharp holds a whole image in memory, which limits how many large images a server can process at once. `@livingdocs/image` processes images in strips: in our benchmarks it was 3× faster and needed 8× less memory (medians over 76 edits). The gains grow with image size, so they matter most for projects with a high `processing.maxResolution`: rotating an extreme 228 MP photo took 0.15 s and 6 MB instead of 2 s and 1.6 GB. Processing limits itself to half of the container's memory. sharp stays the default.

This feature is experimental and only available by agreement with Livingdocs. Once it is available to your project, enable it with:

```diff
mediaLibrary: {
+  useFastProcessing: true
}
```

On Linux x64, it needs a CPU with AVX2 support (x86-64-v3). Your npm token also needs access to the private package `@livingdocs/image`.

For more information, see the [Fast Image Processing]({{< ref "/customising/server-configuration#fast-image-processing" >}}) documentation.

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
