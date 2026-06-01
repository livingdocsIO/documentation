---
type: release-notes
title: May 2026 Release
description: Technical Release Notes for release-2026-05
excludeFromSearch: false
hideSectionTeaser: true

header:
  upcoming: false
  legacy: false
  current: true
  maintained: true
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

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-may-2026).
To learn about the necessary actions to update Livingdocs to `release-2026-05`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- [Feature Webinar Recording](https://us02web.zoom.us/rec/share/vnqeExm1SU0mcT0Deg6THk6QPLyUHsuwTIpHB2hs9FU27YiVZLSS2vPR14LZpsbh.pJcM4iPUnja9n5VU?startTime=1778500779000) | Passcode: `rt^R3TS7`
- [Feature Webinar Slides](https://drive.google.com/file/d/1N6MoKI1P1JyEo0wsPFlf3U8GnJAQgFWx/view?usp=drive_link)
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

### Direct Imports from `lib/`

Direct file imports from Livingdocs packages are not supported. This release might break direct imports from `lib/`. Downstreams are urged to remove all direct imports. Since this has never been supported, we will not communicate such changes in the future.

#### Detect

In server project source code, imports matching `@livingdocs/*/lib/` in either `require()` or `import` form. For example:

```js
require('@livingdocs/server/lib/db')
import {something} from '@livingdocs/server/lib/something'
```

#### Fix

Replace each direct `lib/` import with the equivalent public API. If no public equivalent exists, contact Livingdocs support — there is no general drop-in replacement.

### Stricter Validation of Image Processing Config Properties with `use2025Behavior`

The server config properties `mediaLibrary.images.processing.failOn`, `mediaLibrary.images.processing.convert`, `mediaLibrary.images.processing.lossy`, and `mediaLibrary.images.processing.lossless` are not applied when `use2025Behavior` is enabled. Configuring them alongside `use2025Behavior` will now result in an error. Please remove these properties if `use2025Behavior` is enabled.

#### Detect

In the server config, `mediaLibrary.use2025Behavior` is `true` AND any of `mediaLibrary.images.processing.failOn`, `.convert`, `.lossy`, or `.lossless` is set.

#### Fix

Remove the four `processing.*` properties. They are not applied when `use2025Behavior` is enabled, so removal does not change runtime behaviour.

### Removal of Deprecated Image Processing Config Properties

The deprecated server config properties `mediaLibrary.images.processing.maxFileSize` and `mediaLibrary.images.uploadRestrictions.maxResolution` are no longer supported.

Please use the following replacements instead:

- `mediaLibrary.images.processing.maxFileSize` → `mediaLibrary.images.uploadRestrictions.maxFileSize`
- `mediaLibrary.images.uploadRestrictions.maxResolution` → `mediaLibrary.images.processing.maxResolution`

#### Detect

In the server config, either of:

- `mediaLibrary.images.processing.maxFileSize` is set
- `mediaLibrary.images.uploadRestrictions.maxResolution` is set

#### Fix

Move each property to its new location. The value format is unchanged — only the key path moves:

- `mediaLibrary.images.processing.maxFileSize` → `mediaLibrary.images.uploadRestrictions.maxFileSize`
- `mediaLibrary.images.uploadRestrictions.maxResolution` → `mediaLibrary.images.processing.maxResolution`

### Usage Log Params Schema Plugin Type Consistency

All `paramsSchema` entries across usage log purposes are now checked for type consistency. This ensures metadata plugins with the same handle share the same type. If you get the error message while updating a project config then you will need to modify the paramsSchema properties indicated so that they match across all purposes. You may also need to write a script to perform a manual data migration if you want to keep the data. Please contact us if you need any support with this.

An example of an invalid configuration:

```js
{
  mediaCenter: {
    usageLog: {
      purposes: [
        {handle: 'web', paramsSchema: [{handle: 'page', type: 'li-text'}]},
        {handle: 'print', paramsSchema: [{handle: 'page', type: 'li-integer'}]}
      ]
    }
  }
}
```

To fix this example:

- both page params would need to be either `li-text` or `li-integer`
- or, one handle needs to be modified (e.g. renaming `page` to `webpage`)

#### Detect

In `mediaCenter.usageLog.purposes[].paramsSchema[]`, the same `handle` appears in two or more `purposes[].paramsSchema[]` entries with a different `type`.

#### Fix

For each conflicting `handle`, either:

- align the `type` across all purposes (preferred when the field is semantically the same), or
- rename the handle in one of the purposes so the two are no longer treated as the same plugin (preferred when the fields are semantically different).

Which option is correct depends on the meaning of the field, so review each conflict before changing it. If existing usage log data uses the old handle or type, a manual data migration may be needed — contact Livingdocs support for help.

### Removal of `li-target-length` UI Config Properties

The `allowAnyNumber`, `showExactCountCheckbox`, and `unit` properties inside `ui.config` of `li-target-length` and `li-system-target-length` metadata plugins have been removed. Please use `ui.config.modes` instead.

#### Detect

In metadata plugin definitions using `type: 'li-target-length'` or `type: 'li-system-target-length'` (typically in `contentTypes[].metadata[]` and `documentTypes[].metadata[]`), any of `allowAnyNumber`, `showExactCountCheckbox`, or `unit` is present inside `ui.config`.

#### Fix

Remove the three legacy properties and add `modes` according to this mapping:

| Old config                                                      | New `modes`                        |
| --------------------------------------------------------------- | ---------------------------------- |
| (defaults — steps only)                                         | `['steps']`                        |
| `allowAnyNumber: true`                                          | `['characters']`                   |
| `showExactCountCheckbox: true`, `unit: 'characters'`            | `['steps', 'characters']`          |
| `showExactCountCheckbox: true`, `unit: 'lines'`                 | `['steps', 'lines']`               |
| `showExactCountCheckbox: true`, `unit: ['characters', 'lines']` | `['steps', 'characters', 'lines']` |

### Reserving Dashboard Handle 'ImageCollections'

The dashboard handle `ImageCollections` can not be used, as it is a reserved handle.

#### Detect

The literal string `ImageCollections` anywhere in the project config — in dashboard definitions (e.g. `mediaLibrary.dashboards[]`) and in references such as `useDashboard`, `mainNavigation`, or content type references.

#### Fix

Rename the dashboard to a non-reserved handle (user's choice) and update every reference to point to the new name.

## Deprecations :warning:

### Deprecate support for Redis versions below 7.4

Support for Redis versions below 7.4 is deprecated and will be removed in `release-2026-11`. Redis 7.2 reached End of Life (EOL) on February 28, 2026. Versions 6.2 and 6.4 reached EOL last year.
Upgrade to Redis version 7.4 or above. The most recently supported version is 8.0.

#### Detect

The Redis instance(s) used by Livingdocs Server have a version below 7.4. Check the deployed Redis version (e.g. `redis-cli INFO server | grep redis_version`), not the project config.

#### Fix

Upgrade Redis to 7.4 or above. 8.0 is the most recently supported version.

### Auto-Generated Media Library Dashboards

Auto-generated media library dashboards using `{liItem: 'mediaLibrary'}` are deprecated and will be removed in `release-2026-11`. Remove `{liItem: 'mediaLibrary'}` as well as `mediaTypes[].editor.managementDashboard` and `mediaTypes[].editor.dashboard` from the project config.

Configure [media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) instead. These dashboards can also be referenced in content types to configure the dashboards shown in media library sidepanels and media selection dialogs, using `contentTypes[].editor.images.useDashboard`, `contentTypes[].editor.videos.useDashboard`, or `contentTypes[].editor.files.useDashboard`.

#### Detect

In the project config, any of:

- `{liItem: 'mediaLibrary'}` anywhere in the editor settings (e.g. `mainNavigation` or similar `liItem` slots)
- `mediaTypes[].editor.managementDashboard` is set
- `mediaTypes[].editor.dashboard` is set

#### Fix

Remove the three settings above. Configure explicit [media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) instead, and reference them from content types via `contentTypes[].editor.images.useDashboard`, `.videos.useDashboard`, and `.files.useDashboard`.

The new model is a different shape rather than a simple property rename, so the choice of which dashboards to expose at each site needs to be made deliberately.

### `contentTypes[].editor.images.mediaTypes`

Project config property `contentTypes[].editor.images.mediaTypes` is deprecated and will be removed in `release-2026-11`. It controlled which media types were shown in image sidepanels and dialogs. Configure a media library dashboard with the appropriate `baseFilters` instead.

#### Detect

`contentTypes[].editor.images.mediaTypes` is set on any content type in the project config.

#### Fix

Define (or reuse) a media library dashboard whose `baseFilters` restrict to the same media types, then reference it via `contentTypes[].editor.images.useDashboard`. Remove the `mediaTypes` property afterwards.

Because this replaces one property with a reference to a separate dashboard definition, each affected content type needs a deliberate choice of which dashboard to point at.

### `mediaTypes[].hidden`

Project config property `mediaTypes[].hidden` is deprecated and will be removed in `release-2026-11`. To hide a media type from sidepanels and dialogs, exclude it with `baseFilters` instead.

For poster image media types, we introduce `useDashboard` on `li-poster-image` and `posterImageUseDashboard` on `li-video-reference` metadata plugins. You can use these to configure which dashboards appear when selecting a poster image. By setting `baseFilters` on those dashboards, you can specify which media types appear.

#### Detect

`hidden: true` set on any entry in `mediaTypes[]` in the project config. Also affects `li-poster-image` and `li-video-reference` metadata plugin definitions if they relied on the hidden flag for poster image selection.

#### Fix

For each hidden media type, ensure no dashboard exposes it: set `baseFilters` on the relevant media library dashboards to exclude it.

For poster image sites specifically, configure `ui.config.useDashboard` on `li-poster-image` and `ui.config.posterImageUseDashboard` on `li-video-reference` plugins, pointing to dashboards whose `baseFilters` exclude the media types that were previously hidden. Remove the `hidden` property afterwards.

Visibility is now controlled at the dashboard level rather than per media type, so each previously hidden media type needs the relevant dashboards' `baseFilters` reviewed.

### `publicApi.executeDocumentCommands()` write-model return value

The `publicApi.executeDocumentCommands()` method currently returns the document write model by default. In a future release the default will change to return a public document version, aligning it with all other media library methods of the public API. No fixed removal release has been announced, but the change is expected within roughly two years.

Opt in to the new behaviour now by passing `apiVersion: '2026-05'`.

```js
liServer.features.api('li-public-api').executeDocumentCommands({
  // ...
  apiVersion: '2026-05'
})
```

#### Detect

In server project source code, any call to `liServer.features.api('li-public-api').executeDocumentCommands(...)` that does not pass `apiVersion: '2026-05'`.

#### Fix

Pass `apiVersion: '2026-05'` to opt in to the new return value, then update any downstream code that consumed the write model to consume a public document version instead.

## Features :gift:

Each feature is marked **Automatic** (works on upgrade) or **Configurable** (requires a config change).

### Media Library Batch Metadata Editing

**Automatic** — Editors can now edit metadata on multiple selected assets in a single dialog, with fields that differ across assets clearly marked. See the [Batch Actions guide]({{< ref "/guides/media-library/batch-actions" >}}).

### Norwegian UI Translations

**Automatic** — The Livingdocs Editor is now available in Norwegian Bokmål (`nb-NO`) and Nynorsk (`nn-NO`). Applied automatically based on browser language; see the [Configure Multi-Language UI guide]({{< ref "/guides/editor/multi-language-ui/" >}}) for setup.

### Image Collections

**Configurable** — Curated, named sets of images for ongoing topics, with nested groups, drag-and-drop ordering, direct uploads, and real-time collaboration. See the [Image Collections guide]({{< ref "/guides/media-library/image-collections/" >}}) for setup.

### Tabs in Media Library Sidepanels and Dialogs

**Configurable** — Media library sidepanels and dialogs are now organised into tabs, one per configured dashboard. Replaces the previous behaviour where media was grouped by media type, which is now [deprecated]({{< relref "#auto-generated-media-library-dashboards" >}}) and will be removed in `release-2026-11`. Configure via `useDashboard` on content types — see the [Content Types reference]({{< ref "/reference/project-config/content-types#usedashboard" >}}).

### Allowed Media Types

**Configurable** — New `contentTypes[].allowedMediaTypes` restricts which media types can be placed in a document. See the [Content Types reference]({{< ref "/reference/project-config/content-types#allowedmediatypes" >}}).

### Internal Usage Log Purposes

**Configurable** — New `internal: true` flag on usage log purposes hides editor controls for that purpose, leaving entries read-only in the UI. Intended for use alongside the new server-side `addUsageLogEntriesForMediaInDocument` function. See the [Media Center reference]({{< ref "/reference/project-config/media-center" >}}).

### Create Usage Log Entries on Publish

**Configurable** — New server-side `mediaLibraryApi.addUsageLogEntriesForMediaInDocument()` function, intended for use in a post-publish hook. Adds entries automatically for any referenced media library entries that do not already have one for the current document. See the [Publication Hooks reference]().

### Public API: Read Usage Log

**Configurable** — New `GET /api/:apiVersion/mediaLibrary/:id/usageLog` endpoint returns all usage log entries for a media library entry. See the [public API reference]({{< ref "/reference/public-api/media-library/#get-the-usage-log-of-a-media-library-entry" >}}).

### Public API: Modify Usage Log Entries

**Configurable** — New `addUsageLogEntry`, `updateUsageLogEntry`, and `removeUsageLogEntry` patch operations on `PATCH /api/:apiVersion/mediaLibrary/:id`, intended for external systems (e.g. print) to report usage. See the [public API reference]({{< ref "/reference/public-api/media-library/" >}}).

### Run with `ignore-scripts=true` in npm

**Configurable** — Livingdocs Server now supports running with `ignore-scripts=true` in `.npmrc`, preventing arbitrary scripts from running during package installation. Requires verifying that no dependencies in your tree depend on `postinstall` scripts first. See the [Supply Chain Security guide]() for the verification script and rollout steps.

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [CVE-2026-44902 / GHSA-q7rr-3cgh-j5r3](https://github.com/advisories/GHSA-q7rr-3cgh-j5r3) patched in @opentelemetry/sdk-node v0.217.0

### Livingdocs Editor

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Patches typically fix bugs and apply improvements within the current release. Keeping your deployment up-to-date with the latest patch version means you benefit from those fixes. No explicit action is required per patch — bumping the version is enough.

### Livingdocs Server Patches

- [v301.1.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.10): fix: nest replaceTranslations flag in options property
- [v301.1.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.9): fix(public-api): Expose getAllKeysForMediaLibraryEntry
- [v301.1.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.8): fix: remove #lib alias
- [v301.1.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.7): fix(deps): update dependency ws from 8.20.0 to 8.20.1 [security]
- [v301.1.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.6): fix(migrations): Only generate statistics and references with content
- [v301.1.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.5): test: Adjust transform tests to account for serialized component IDs

- [v301.1.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.4): fix(image-collections): add breaking change to not use any dashboards with handle imageCollections
- [v301.1.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.3): fix(blob-store): suppress late AbortError from Azure download streams

- [v301.1.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.2): fix(deps): update dependency @opentelemetry/sdk-node from 0.215.0 to 0.217.0 [security]

- [v301.1.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.1): fix(release-2026-05): Update framework to v34.0.3 (release-2026-05 tag)

### Livingdocs Editor Patches

- [v123.21.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.13): fix(scrollbars): styling and active pill scrolling in media panel
- [v123.21.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.12): fix(media-library): Hide internal usage log purposes when downloading
- [v123.21.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.11): fix(project-config): show kordiam form and nav
- [v123.21.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.10): fix(drafts): Reload editor when document contentType changes via remote update
- [v123.21.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.9): fix(deps): update dependency sanitize-html from 2.17.3 to 2.17.4 [security]

- [v123.21.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.8): fix(image-collections): add imageCollections as coreItem instead of enrichedItem
- [v123.21.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.7): fix(image-collections): use container's filtered items for move position

- [v123.21.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.6): fix(deps): automatically patch Node.js vulnerabilities
- [v123.21.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.5): fix(includes): expose params getter to maintain public API for tests

- [v123.21.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.4): fix: hide images count earlier to prevent overlap with batch actions
- [v123.21.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.3): fix(media-library): Hide state of media source items
- [v123.21.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.2): fix(publish-control): Use correct publishControlMode for labels
