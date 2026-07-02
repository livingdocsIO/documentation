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

Direct file imports from Livingdocs packages are not supported. This release may break direct imports from `lib/`. Downstreams should remove all such imports. Since this was never supported, we will not communicate these changes in the future.

#### Detect

In server project source code, a `require()` or `import` referencing `@livingdocs/server/lib/`.

#### Fix

Replace each direct `lib/` import with the equivalent public API. If no public equivalent exists, contact Livingdocs support — there is no general drop-in replacement.

### Stricter Validation of Image Processing Config Properties with `use2025Behavior`

**Codes:** `LIBREAKING064-failOn`, `LIBREAKING064-convert`, `LIBREAKING064-lossy`, `LIBREAKING064-lossless`

The server config properties `failOn`, `convert`, `lossy`, and `lossless` under `mediaLibrary.images.processing` are not applied when `use2025Behavior` is enabled. Configuring any of them alongside `use2025Behavior` now raises an error at startup. Remove these properties when `use2025Behavior` is enabled.

#### Detect

In the server config, `mediaLibrary.use2025Behavior` is `true` AND any of `failOn`, `convert`, `lossy`, or `lossless` is set under `mediaLibrary.images.processing`. Search for `(failOn|convert|lossy|lossless)\s*:` and confirm each hit sits under `processing`.

#### Fix

Remove the four `processing.*` properties. They are not applied when `use2025Behavior` is enabled, so removing them does not change runtime behaviour.

### Removal of Deprecated Image Processing Config Properties

**Codes:** `LIBREAKING065`, `LIBREAKING066`

The deprecated server config properties `mediaLibrary.images.processing.maxFileSize` and `mediaLibrary.images.uploadRestrictions.maxResolution` are no longer supported. Each moves to a new location; the value format is unchanged:

| Before (removed)                                       | After (use instead)                                  |
| ------------------------------------------------------ | ---------------------------------------------------- |
| `mediaLibrary.images.processing.maxFileSize`           | `mediaLibrary.images.uploadRestrictions.maxFileSize` |
| `mediaLibrary.images.uploadRestrictions.maxResolution` | `mediaLibrary.images.processing.maxResolution`       |

#### Detect

In the server config, either `maxFileSize` is set under `mediaLibrary.images.processing`, or `maxResolution` is set under `mediaLibrary.images.uploadRestrictions`. Search for `maxFileSize\s*:` and `maxResolution\s*:` and check which parent each sits under.

#### Fix

Move each property to its new location per the table above. Only the key path changes; the value is unchanged.

### Usage Log Params Schema Plugin Type Consistency

All `paramsSchema` entries across usage log purposes are now checked for type consistency: metadata plugins that share a `handle` must share the same `type`. Updating a project config that violates this raises an error. Keeping existing data may require a manual data migration — contact Livingdocs support if needed.

An invalid configuration (the same `handle` `page` with two different types):

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

#### Detect

In `mediaCenter.usageLog.purposes[].paramsSchema[]`, the same `handle` value appears in two or more purposes with a different `type`. Search the config for `handle:` / `type:` pairs under `paramsSchema` and compare the `type` for each repeated handle.

#### Fix

For each conflicting `handle`, either:

- align the `type` across all purposes (preferred when the field is semantically the same), or
- rename the handle in one purpose so the two are no longer treated as the same plugin (preferred when the fields are semantically different).

Which option is correct depends on the meaning of the field, so review each conflict before changing it. If existing usage log data uses the old handle or type, a manual data migration may be needed — contact Livingdocs support for help.

### Removal of `li-target-length` UI Config Properties

**Codes:** `LIBREAKING067-allowAnyNumber`, `LIBREAKING067-showExactCountCheckbox`, `LIBREAKING067-unit`

The `allowAnyNumber`, `showExactCountCheckbox`, and `unit` properties inside `ui.config` of the `li-target-length` and `li-system-target-length` metadata plugins have been removed. Use `ui.config.modes` instead, mapping the old combination to the equivalent `modes` array:

| Before (`ui.config`)                                            | After (`ui.config.modes`)          |
| --------------------------------------------------------------- | ---------------------------------- |
| (defaults — steps only)                                         | `['steps']`                        |
| `allowAnyNumber: true`                                          | `['characters']`                   |
| `showExactCountCheckbox: true`, `unit: 'characters'`            | `['steps', 'characters']`          |
| `showExactCountCheckbox: true`, `unit: 'lines'`                 | `['steps', 'lines']`               |
| `showExactCountCheckbox: true`, `unit: ['characters', 'lines']` | `['steps', 'characters', 'lines']` |

#### Detect

In metadata plugin definitions of `type: 'li-target-length'` or `type: 'li-system-target-length'` (typically under `contentTypes[].metadata[]` and `documentTypes[].metadata[]`), any of `allowAnyNumber`, `showExactCountCheckbox`, or `unit` set inside `ui.config`. Search for `(allowAnyNumber|showExactCountCheckbox|unit)\s*:` and confirm it sits in the `ui.config` of one of those plugins.

#### Fix

Remove the three properties and add `modes` according to the mapping above.

### Reserving the Dashboard Handle `imageCollections`

**Code:** `LIBREAKING068`

The dashboard handle `imageCollections` is now reserved and cannot be configured manually. A dashboard configured with this handle in `editorSettings.dashboards` raises an error.

#### Detect

The dashboard handle `imageCollections` in `editorSettings.dashboards`, and any references to it (e.g. `useDashboard`). Search the project config for `imageCollections`.

#### Fix

Rename the dashboard to a non-reserved handle of your choice and update every reference to point to the new name.

## Deprecations :warning:

### Deprecate support for Redis versions below 7.4

**Code:** `LIDEP079`

Support for Redis versions below 7.4 is deprecated and will be removed in `release-2026-09`. Redis 7.2 reached End of Life (EOL) on February 28, 2026; versions 6.2 and 6.4 reached EOL in 2025. Upgrade to Redis 7.4 or above — the most recently supported version is 8.0.

#### Detect

The Redis instance(s) used by Livingdocs Server run a version below 7.4. Check the deployed Redis version (e.g. `redis-cli INFO server | grep redis_version`), not the project config.

#### Fix

Upgrade Redis to 7.4 or above. 8.0 is the most recently supported version.

### Auto-Generated Media Library Dashboards

**Codes:** `LIDEP080`, `LIDEP083`

Auto-generated media library dashboards are deprecated and will be removed in `release-2026-11`. This covers `{liItem: 'mediaLibrary'}` in the editor settings, and `mediaTypes[].editor.managementDashboard` and `mediaTypes[].editor.dashboard` in the project config.

Configure explicit [media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) instead. They can also be referenced from content types to control the dashboards shown in media library sidepanels and selection dialogs, via `contentTypes[].editor.images.useDashboard`, `contentTypes[].editor.videos.useDashboard`, and `contentTypes[].editor.files.useDashboard`.

#### Detect

In the project config, any of:

- `{liItem: 'mediaLibrary'}` in the editor settings (e.g. a `mainNavigation` or similar `liItem` slot) — search for `liItem: 'mediaLibrary'`
- `managementDashboard` or `dashboard` set under a `mediaTypes[].editor` block — search for `(managementDashboard|dashboard)\s*:` and confirm the parent is `mediaTypes[].editor`

#### Fix

Remove the three settings above and configure explicit [media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}), referencing them from content types via `contentTypes[].editor.images.useDashboard`, `.videos.useDashboard`, and `.files.useDashboard`.

The new model is a different shape rather than a simple property rename, so the choice of which dashboards to expose at each site needs to be made deliberately.

### `contentTypes[].editor.images.mediaTypes`

**Code:** `LIDEP081`

Project config property `contentTypes[].editor.images.mediaTypes` is deprecated and will be removed in `release-2026-11`. It controlled which media types were shown in image sidepanels and dialogs. Configure a media library dashboard with the appropriate `baseFilters` instead.

#### Detect

`mediaTypes` set under `contentTypes[].editor.images` in the project config. Search for `mediaTypes\s*:` and confirm it sits under an `editor.images` block (not a top-level `mediaTypes` definition).

#### Fix

Define (or reuse) a media library dashboard whose `baseFilters` restrict to the same media types, then reference it via `contentTypes[].editor.images.useDashboard`. Remove the `mediaTypes` property afterwards.

Because this replaces one property with a reference to a separate dashboard definition, each affected content type needs a deliberate choice of which dashboard to point at.

### `mediaTypes[].hidden`

**Code:** `LIDEP082`

Project config property `mediaTypes[].hidden` is deprecated and will be removed in `release-2026-11`. To hide a media type from sidepanels and dialogs, exclude it with `baseFilters` instead.

For poster images, new `useDashboard` (on the `li-poster-image` plugin) and `posterImageUseDashboard` (on the `li-video-reference` plugin) settings control which dashboards appear when selecting a poster image; set `baseFilters` on those dashboards to control which media types appear.

#### Detect

`hidden: true` on any entry in the top-level `mediaTypes[]` array of the project config. Search for `hidden\s*:\s*true` and confirm it sits under a `mediaTypes[]` entry.

#### Fix

For each hidden media type, set `baseFilters` on the relevant media library dashboards to exclude it. For poster image sites, configure `ui.config.useDashboard` on `li-poster-image` and `ui.config.posterImageUseDashboard` on `li-video-reference`, pointing at dashboards whose `baseFilters` exclude the previously hidden types. Remove the `hidden` property afterwards.

Visibility is now controlled at the dashboard level rather than per media type, so each previously hidden media type needs the relevant dashboards' `baseFilters` reviewed.

### `publicApi.executeDocumentCommands()` write-model return value

The `publicApi.executeDocumentCommands()` method currently returns the document write model by default. In a future release the default will change to return a public document version, aligning it with the other media library methods of the public API. No fixed removal release has been announced; opt in to the new behaviour now by passing `apiVersion: '2026-05'`.

```js
liServer.features.api('li-public-api').executeDocumentCommands({
  // ...
  apiVersion: '2026-05'
})
```

#### Detect

In server project source code, a call to `liServer.features.api('li-public-api').executeDocumentCommands(...)` that does not pass `apiVersion: '2026-05'` (or later). Search for `executeDocumentCommands(`.

#### Fix

Pass `apiVersion: '2026-05'` to opt in to the new return value, then update downstream code that consumed the write model to consume a public document version instead.

## Features :gift:

### Image Collections :gift:

Image Collections allow editors to curate persistent, named sets of images for large or ongoing topics.
They complement Media Library Dashboards (for research) and the Document Inbox (for short-term article work).
Collections are shared across the project and can be browsed directly from the editor when picking images for a document.

They are curated, folder-like groupings with support for nested sub-groups, drag-and-drop ordering, direct uploads and real-time collaboration.

{{< img src="release-2026-05-image-collections.png" alt="Image Collections showing grouped images with drag-and-drop zones" width="300" >}}

#### Adding & Organizing Images

You can add one or multiple images from any media library dashboard.
Images can also be uploaded directly from your file system or an external source by dragging them into a collection or using the upload button.
Images can be grouped into subgroups, with up to six levels of nesting.
You can create an unlimited number of groups, add them to other collections or ungroup them.

#### Multi-select and Batch Actions

Similar to the Media Library, each image in a collection has a context menu with actions: add to another collection, send to inbox, store or remove it from the archive (`use2025Behavior` required), or remove it from the collection.
It is also possible to open the detail view of each image to edit its metadata.
You can select multiple images and apply any of these actions in a single batch operation.

#### Configuration

Add `imageCollections` to the project config and reference it in the editor settings main navigation:

```js
// project config
imageCollections: {
  pageTitle: {en: 'Image Collections'},
  mediaTypes: ['images', 'infographics'],
  useDashboard: 'myMediaLibraryDashboard'
}
```

```js
// editor settings, mainNavigation
{
  liItem: 'imageCollections'
}
```

After configuration, activate document permissions for the built-in `Collections` content type in the project settings.
Users also need `read` permissions on **all** configured `mediaTypes` to access Image Collections.

{{< info >}}
For full (technical) documentation of this feature, see the [Image Collections Guide]({{< ref "/guides/media-library/image-collections/" >}}).
{{< /info >}}

### Public API Endpoint to get the Usage Log of a Media Library Entry :gift:

A new endpoint has been added, `GET /api/:apiVersion/mediaLibrary/:id/usageLog`, which returns all usage log entries for the specified media library entry. Further details can be found in the [Get the Usage Log of a Media Library Entry]({{< ref "/reference/public-api/media-library/#get-the-usage-log-of-a-media-library-entry" >}}) endpoint documentation.

### Public API Operations to Modify Media Library Entry Usage Log Entries :gift:

The Media Library Entry patch endpoint in the public API has been extended to allow external systems (e.g. print system) to report the usage of a media library entry and provide the details.

Add a new entry:

`PATCH /api/2026-05/mediaLibrary/{id}`

```json
{
  "preserveUpdatedAt": true,
  "patches": [
    {
      "operation": "addUsageLogEntry",
      "value": {
        "state": "pending", // Optional 'pending' or 'confirmed' (default: 'pending')
        "purpose": "print", // Required handle of usage log purpose
        "publicationDate": "2026-05-01T11:00:00.000Z", // Required when state is 'confirmed'
        "url": "http://localhost", // Optional link to external editor or delivery
        "params": {} // Any value for params defined in the `paramsSchema` of the selected purpose
      }
    }
  ]
}
```

Update an entry:

`PATCH /api/2026-05/mediaLibrary/{id}`

```json
{
  "preserveUpdatedAt": true,
  "patches": [
    {
      "operation": "updateUsageLogEntry",
      "usageLogEntryId": "g1x419UgQSS5",
      "value": {
        "state": "confirmed", // Required for updates
        "purpose": "print",
        "publicationDate": "2026-05-01T11:00:00.000Z",
        "url": "http://localhost",
        "params": {
          "medium": "Paper"
        }
      },
      "oldValue": {} // Optional expected state condition
    }
  ]
}
```

Remove an entry:

`PATCH /api/2026-05/mediaLibrary/{id}`

```json
{
  "preserveUpdatedAt": true,
  "patches": [
    {
      "operation": "removeUsageLogEntry",
      "usageLogEntryId": "g1x419UgQSS5"
    }
  ]
}
```

### Create usage log entries on publish :gift:

The function `mediaLibraryApi.addUsageLogEntriesForMediaInDocument()` has been introduced to make it easier to create usage log entries. This function is intended to be used in a post publish hook and will add usage log entries for any referenced media library entries which do not already have a usage log entry for the current document. The entry will automatically be marked as 'confirmed' so any mandatory params must be provided.

```js
liServer.registerInitializedHook(() => {
  const mediaLibraryApi = liServer.features.api('li-media-library')
  liServer.registerPublicationHooks({
    async postPublishHookAsync({documentVersion}) {
      await mediaLibraryApi.addUsageLogEntriesForMediaInDocument({
        documentVersion,
        purpose: 'web',
        url: `https://example.com/my-slug-${documentVersion.id}`, // Optional
        params: {medium: 'Internet'} // Required params mandatory
      })
    }
  })
})
```

### Internal Usage Log Purposes :gift:

Usage log purposes can now be flagged as internal. When set to `true` it prevents a user from creating, updating or deleting entries for the purpose within the editor. A read-only entry will still be visible within the UI. This is intended to be used alongside the `addUsageLogEntriesForMediaInDocument` function to create permanent entries.

Note: setting `internal: true` on an existing purpose will hide the editor controls for that purpose, so any users who previously edited usage log entries of that purpose will lose that ability.

```js
{
  mediaCenter: {
    usageLog: {
      purposes: [
        {
          handle: 'web',
          label: 'Web',
          internal: true // <-- New property
        }
      ]
    }
  }
}
```

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

### Media Library Batch Metadata Editing :gift:

The Media Center already supports batch actions such as archiving, deleting, and moving assets to an inbox. Metadata editing is now available as an additional batch action, making it easy to correct or enrich metadata across many assets at once.

{{< img src="release-2026-05-media-library-batch-actions.png" alt="Batch action bar showing 3 selected assets with icons for edit metadata, download, send to inbox, store in archive, and delete" >}}

Editors can select multiple assets and edit their metadata in a single combined dialog. The dialog shows thumbnails for each selected asset alongside status indicators for unsaved changes, validation errors, and saving state. Fields that differ across selected assets are clearly marked: leaving a field unchanged keeps each asset's original value, while editing it applies the new value to all selected assets.

This feature is automatically available in all Media Center dashboards. No configuration required.

For more information, see the [Batch Actions]({{< ref "/guides/media-library/batch-actions" >}}) documentation.

### Norwegian UI Translations :gift:

The Livingdocs Editor is now available in Norwegian Bokmål (`nb-NO`) and Norwegian Nynorsk (`nn-NO`). The translations are automatically applied when the browser language is set to either variant.

For setup instructions, see the [Configure Multi-Language UI]({{< ref "/guides/editor/multi-language-ui/" >}}) guide.

### Reduce Supply Chain Attack Vector :gift:

Livingdocs Server now supports running with `ignore-scripts=true` in npm. This prevents arbitrary scripts from running during package installation, reducing the attack surface for supply chain attacks.

1. To verify that no dependency in your tree depends on postinstall scripts, you can use the following script:

   ```sh
   npm query ":attr(scripts, [postinstall]), :attr(scripts, [preinstall]), :attr(scripts, [install])" \
     | jq -r '.[].name' \
     | grep -vxE 'protobufjs|exifreader|leveldown|sharp|@parcel/watcher' \
     | sort -u
   ```

2. If there are modules listed, please verify their `postinstall` declaration in the package.json does not use logic your instance depends on.
3. Once you don't depend on any `postinstall` scripts anymore,  
   please set `ignore-scripts=true` in your `.npmrc` files in every livingdocs project.

   ```ini
   package-lock=true
   ignore-scripts=true
   //registry.npmjs.org/:_authToken=${NPM_TOKEN}
   ```

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

- [v301.1.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.22): fix: Trigger release after deps update
- [v301.1.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.21): fix(deps): update livingdocs-patch
- [v301.1.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.20): fix: remove server-lib workspace
- [v301.1.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.19): fix(blob-store): prevent S3 socket exhaustion on partial image reads
- [v301.1.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.18): fix(deps): update dependency nodemailer from 8.0.7 to 9.0.1 [security]
- [v301.1.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.17): fix(channel-config): allow nb-NO and nn-NO in translatable strings
- [v301.1.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.16): chore(example-server): Add image read permissions to Readers group
- [v301.1.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.15): fix(repl): update module imports
- [v301.1.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.14): fix: use createRequire for memdown instead of async dynamic import
- [v301.1.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.13): fix(deps): update livingdocs-patch from 34.0.4 to v34.0.5
- [v301.1.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.12): fix(deps): update dependency exifreader from 4.38.1 to 4.39.0 [security]
- [v301.1.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v301.1.11): fix(deps): update dependency @livingdocs/framework from 34.0.3 to v34.0.4
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
- [v123.21.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.26): fix: show component groups with translated labels

- [v123.21.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.25): fix(media-library): Prevent li-metadata-translations save on open
- [v123.21.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.24): fix(deps): update livingdocs-patch from 34.0.5 to v34.0.6
- [v123.21.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.23): fix(deps): update dependency js-yaml from 4.1.1 to 4.2.0 [security]
- [v123.21.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.22): fix(media-library): Show file type error in upload center dialog
- [v123.21.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.21): chore(embeds): Access embed data consistently
- [v123.21.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.20): fix(image-collections): enable batch metadata editing for image collections
- [v123.21.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.19): fix(deps): update livingdocs-patch from 34.0.4 to v34.0.5
- [v123.21.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.18): fix(upload): Enable save button when EXIF extraction fills required metadata
- [v123.21.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.17): fix: detect inbox drags and don't count them as upload drags
- [v123.21.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.16): fix(deps): update dependency axios from 1.15.2 to 1.16.0 [security]
- [v123.21.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.15): fix(lists): Translate link text
- [v123.21.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.21.14): fix(deps): update dependency @livingdocs/framework from 34.0.3 to v34.0.4
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

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
