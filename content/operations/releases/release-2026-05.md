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

#### Applies to

Server project source code — any file that imports from a `lib/` path of a `@livingdocs/*` package.

#### Detect

Imports matching `@livingdocs/*/lib/` in either `require()` or `import` form. For example:

```js
require('@livingdocs/server/lib/db')
import {something} from '@livingdocs/server/lib/something'
```

#### Fix

Replace each direct `lib/` import with the equivalent public API. If no public equivalent exists, contact Livingdocs support — there is no general drop-in replacement.

### Stricter Validation of Image Processing Config Properties with `use2025Behavior`

The server config properties `mediaLibrary.images.processing.failOn`, `mediaLibrary.images.processing.convert`, `mediaLibrary.images.processing.lossy`, and `mediaLibrary.images.processing.lossless` are not applied when `use2025Behavior` is enabled. Configuring them alongside `use2025Behavior` will now result in an error. Please remove these properties if `use2025Behavior` is enabled.

#### Applies to

Server config — the `mediaLibrary` section.

#### Detect

`mediaLibrary.use2025Behavior` is `true` AND any of `mediaLibrary.images.processing.failOn`, `.convert`, `.lossy`, or `.lossless` is set.

#### Fix

Remove the four `processing.*` properties. They are not applied when `use2025Behavior` is enabled, so removal does not change runtime behaviour.

### Removal of Deprecated Image Processing Config Properties

The deprecated server config properties `mediaLibrary.images.processing.maxFileSize` and `mediaLibrary.images.uploadRestrictions.maxResolution` are no longer supported.

Please use the following replacements instead:

- `mediaLibrary.images.processing.maxFileSize` → `mediaLibrary.images.uploadRestrictions.maxFileSize`
- `mediaLibrary.images.uploadRestrictions.maxResolution` → `mediaLibrary.images.processing.maxResolution`

#### Applies to

Server config — the `mediaLibrary.images` section.

#### Detect

Either of:

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

#### Applies to

Project config — `mediaCenter.usageLog.purposes[].paramsSchema[]`.

#### Detect

The same `handle` appears in two or more `purposes[].paramsSchema[]` entries with a different `type`.

#### Fix

For each conflicting `handle`, either:

- align the `type` across all purposes (preferred when the field is semantically the same), or
- rename the handle in one of the purposes so the two are no longer treated as the same plugin (preferred when the fields are semantically different).

Which option is correct depends on the meaning of the field, so review each conflict before changing it. If existing usage log data uses the old handle or type, a manual data migration may be needed — contact Livingdocs support for help.

### Removal of `li-target-length` UI Config Properties

The `allowAnyNumber`, `showExactCountCheckbox`, and `unit` properties inside `ui.config` of `li-target-length` and `li-system-target-length` metadata plugins have been removed. Please use `ui.config.modes` instead.

#### Applies to

Project config — metadata plugin definitions using `type: 'li-target-length'` or `type: 'li-system-target-length'` (typically in `contentTypes[].metadata[]` and `documentTypes[].metadata[]`).

#### Detect

Any of `allowAnyNumber`, `showExactCountCheckbox`, or `unit` present inside `ui.config` of these plugins.

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

#### Applies to

Project config — any dashboard definition (e.g. `mediaLibrary.dashboards[]`) and anything referencing it (e.g. `useDashboard`, `mainNavigation`, content type references).

#### Detect

The literal string `ImageCollections` anywhere in the project config.

#### Fix

Rename the dashboard to a non-reserved handle (user's choice) and update every reference to point to the new name.

## Deprecations

### Deprecate support for Redis versions below 7.4

Redis 7.2 reached End of Life (EOL) on February 28, 2026. Versions 6.2 and 6.4 reached EOL last year.
Upgrade to Redis version 7.4 or above. The most recently supported version is 8.0.

#### Applies to

Infrastructure — the Redis instance(s) used by Livingdocs Server.

#### Detect

Redis server version below 7.4. Check the deployed Redis version (e.g. `redis-cli INFO server | grep redis_version`), not the project config.

#### Fix

Upgrade Redis to 7.4 or above. 8.0 is the most recently supported version.

### Auto-Generated Media Library Dashboards

Auto-generated media library dashboards using `{liItem: 'mediaLibrary'}` are deprecated and will be removed in release-2026-11. Remove `{liItem: 'mediaLibrary'}` as well as `mediaTypes[].editor.managementDashboard` and `mediaTypes[].editor.dashboard` from the project config.

Configure [media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) instead. These dashboards can also be referenced in content types to configure the dashboards shown in media library sidepanels and media selection dialogs, using `contentTypes[].editor.images.useDashboard`, `contentTypes[].editor.videos.useDashboard`, or `contentTypes[].editor.files.useDashboard`.

#### Applies to

Project config — editor settings (`mainNavigation` and similar `liItem` slots) and `mediaTypes[].editor`.

#### Detect

Any of:

- `{liItem: 'mediaLibrary'}` anywhere in the editor settings
- `mediaTypes[].editor.managementDashboard` is set
- `mediaTypes[].editor.dashboard` is set

#### Fix

Remove the three settings above. Configure explicit [media library dashboards]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) instead, and reference them from content types via `contentTypes[].editor.images.useDashboard`, `.videos.useDashboard`, and `.files.useDashboard`.

The new model is a different shape rather than a simple property rename, so the choice of which dashboards to expose at each site needs to be made deliberately.

### `contentTypes[].editor.images.mediaTypes`

Project config property `contentTypes[].editor.images.mediaTypes` is deprecated and will be removed in `release-2026-11`. It controlled which media types were shown in image sidepanels and dialogs. Configure a media library dashboard with the appropriate `baseFilters` instead.

#### Applies to

Project config — `contentTypes[].editor.images.mediaTypes`.

#### Detect

`contentTypes[].editor.images.mediaTypes` is set on any content type.

#### Fix

Define (or reuse) a media library dashboard whose `baseFilters` restrict to the same media types, then reference it via `contentTypes[].editor.images.useDashboard`. Remove the `mediaTypes` property afterwards.

Because this replaces one property with a reference to a separate dashboard definition, each affected content type needs a deliberate choice of which dashboard to point at.

### `mediaTypes[].hidden`

Project config property `mediaTypes[].hidden` is deprecated and will be removed in `release-2026-11`. To hide a media type from sidepanels and dialogs, exclude it with `baseFilters` instead.

For poster image media types, we introduce `useDashboard` on `li-poster-image` and `posterImageUseDashboard` on `li-video-reference` metadata plugins. You can use these to configure which dashboards appear when selecting a poster image. By setting `baseFilters` on those dashboards, you can specify which media types appear.

#### Applies to

Project config — `mediaTypes[].hidden`, and (for poster images) `li-poster-image` and `li-video-reference` metadata plugin definitions.

#### Detect

`hidden: true` set on any entry in `mediaTypes[]`.

#### Fix

For each hidden media type, ensure no dashboard exposes it: set `baseFilters` on the relevant media library dashboards to exclude it.

For poster image sites specifically, configure `ui.config.useDashboard` on `li-poster-image` and `ui.config.posterImageUseDashboard` on `li-video-reference` plugins, pointing to dashboards whose `baseFilters` exclude the media types that were previously hidden. Remove the `hidden` property afterwards.

Visibility is now controlled at the dashboard level rather than per media type, so each previously hidden media type needs the relevant dashboards' `baseFilters` reviewed.

## Features :gift:

### Image Collections

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

### Public API Endpoint to get the Usage Log of a Media Library Entry

A new endpoint has been added, `GET /api/:apiVersion/mediaLibrary/:id/usageLog`, which returns all usage log entries for the specified media library entry. Further details can be found in the [Get the Usage Log of a Media Library Entry]({{< ref "/reference/public-api/media-library/#get-the-usage-log-of-a-media-library-entry" >}}) endpoint documentation.

### Public API Operations to Modify Media Library Entry Usage Log Entries

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

### Create usage log entries on publish

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

### Internal Usage Log Purposes

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

### Tabs in Media Library Sidepanels and Dialogs

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

### Allowed Media Types

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

### Media Library Batch Metadata Editing

The Media Center already supports batch actions such as archiving, deleting, and moving assets to an inbox. Metadata editing is now available as an additional batch action, making it easy to correct or enrich metadata across many assets at once.

{{< img src="release-2026-05-media-library-batch-actions.png" alt="Batch action bar showing 3 selected assets with icons for edit metadata, download, send to inbox, store in archive, and delete" >}}

Editors can select multiple assets and edit their metadata in a single combined dialog. The dialog shows thumbnails for each selected asset alongside status indicators for unsaved changes, validation errors, and saving state. Fields that differ across selected assets are clearly marked: leaving a field unchanged keeps each asset's original value, while editing it applies the new value to all selected assets.

This feature is automatically available in all Media Center dashboards. No configuration required.

For more information, see the [Batch Actions]({{< ref "/guides/media-library/batch-actions" >}}) documentation.

### Return Public Document Version from `publicApi.executeDocumentCommands()`

The public API `executeDocumentCommands` method can now return a public document version instead of the document write model. This aligns the return value to all other media library methods of the Public API. Pass `apiVersion: '2026-05'` to your requests to opt-in early.

```js
liServer.features.api('li-public-api').executeDocumentCommands({
  // ...
  apiVersion: '2026-05'
})
```

### Norwegian UI Translations

The Livingdocs Editor is now available in Norwegian Bokmål (`nb-NO`) and Norwegian Nynorsk (`nn-NO`). The translations are automatically applied when the browser language is set to either variant.

For setup instructions, see the [Configure Multi-Language UI]({{< ref "/guides/editor/multi-language-ui/" >}}) guide.

### Reduce Supply Chain Attack Vector

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

No known vulnerabilities. :tada:

### Livingdocs Editor

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

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

