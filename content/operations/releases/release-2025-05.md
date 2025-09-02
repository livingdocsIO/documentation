---
type: release-notes
title: May 2025 Release
description: Technical Release Notes for release-2025-05
excludeFromSearch: false
hideSectionTeaser: true

header:
  upcoming: false
  legacy: false
  current: false
  maintained: true
  branchHandle: release-2025-05

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

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-may-2025).
To learn about the necessary actions to update Livingdocs to `release-2025-05`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- [Feature Webinar Recording](https://us02web.zoom.us/rec/share/jweKnIo2N14pvthRwkOYmTXc1RuLgRmqm_lMJWomTyOJfnFy0f9lIi4vW_TEnQBF.XMXglhBEIVDCOR4X) | Passcode: e=9ZJk3?
- [Feature Webinar Documentation](https://docs.google.com/presentation/d/1m6wLRRhRZ2zKzG7NgsSQofLmxzEu7dCagA8cZ9zt0xI/edit?usp=sharing)
- [Dev Webinar Recording](https://us02web.zoom.us/rec/share/l1FnOHxz_mS-sXDX63IlP42f5FgyzmoMTzr46Vrxc4GbbS51Vkvp-Ywu90gJTIpg.54yXR2qbpQfbfEw2) | Passcode: &yG!0Jkq
- [Dev Webinar Slides](https://docs.google.com/presentation/d/1gSMLgMgfwRbCF1CtoEwPpUlknKlO8Tg2o-P563TBU_U/edit?usp=sharing)
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

{{< feature-info "Operations" "server/editor" >}}

### Update Minimal Node Version v20.19 :fire:

The minimal supported Node.js version is now `v20.19.0`.
This version allows us to require esm modules within commonjs.

{{< feature-info "Integrations" "server" >}}

### Removal of Desk-Net in favor of Kordiam :fire:

Desk-Net rebranded as Kordiam.
To align Livingdocs with this change, we previously introduced corresponding Kordiam properties, features, and plugins.
With this release, we are removing the superseded Desk-Net functionality:

- Feature `li-desknet` and `li-desknet-integration`, including all server APIs
- Server config `desknet`, `integrations.desknet`, and `hugo.print.desknetMetadataFields`
- Project config `settings.desknet`, `settings.integrations.desknet`, and `contentTypes.[*].desknet`
- Function parameter `desknetApi` of Desk-Net/Kordiam functions
- `desknet` property in the return objects of `projectApi.getProject()` and `systemApi.config()`
- Metadata plugins `li-desknet-global`, `li-desknet-integration`, and `li-desknet-schedule`
- li-kordiam-schedule config property `desknetExternalElementIdMetadataPath`
- The public API endpoints of the `2025-05` do not support `desknet` in the path anymore

  That means the `/desknet-integration` sub-path is removed in `/api/2025-05` and now only supports `/kordiam-integration`:

  ❌ `/api/2025-05/desknet-integration/statuses`  
  ✅ `/api/2025-05/kordiam-integration/statuses`

  The api versions `v1` till `2025-03` are not affected:  
  ✅ `/api/v1/desknet-integration/statuses`  
  ✅ `/api/2025-03/desknet-integration/statuses`

  But we suggest to migrate to the new versions that use `kordiam` in the path:  
  ✅ `/api/2025-03/kordiam-integration/statuses`  
  ✅ `/api/2025-05/kordiam-integration/statuses`

For instructions on how to migrate, please refer to our [Desk-Net to Kordiam migration guide]({{< ref "/guides/integrations/desknet-to-kordiam-migration" >}}).

{{< feature-info "Menu Tool" "server" >}}

### Removal of Menu Tool :fire:

The Menu Tool has been removed.

- Menu items `{liItem: 'menus'}` are no longer supported. Please remove them from the project config.
- Public API GET `/api/:apiVersion/menus/:channelHandle?` has been removed.
- Feature `li-menus` has been removed including all its server APIs.

{{< feature-info "Metadata plugin" "server" >}}

### Removal of config.contentTypes :fire:

The deprecated shorthand property `config.contentTypes` in the li-document-search metadata plugin was now removed.
Use `config.contentType` instead.

{{< feature-info "oEmbed" "server" >}}

### Facebook and Instagram oEmbed Providers Now Require Credentials :fire:

The Facebook and Instagram oEmbed providers are enabled by default when using the upstream oEmbed service. These providers require credentials to function correctly. Previously, missing credentials caused these providers to fail silently.

Livingdocs now throws an error if the credentials for Facebook or Instagram are not provided. Either define the credentials or disable the providers by excluding them from the `oembed.allowedCoreProviders` array.

## Deprecations

There have been no deprecations since the last release.

## Features

{{< feature-info "Exposure Boosting" "server/editor" >}}

### Exposure Boosting :gift:

When using algorithmic teasers, the order of the documents is determined by a sort criteria. Oftentimes, this is the latest publication date.
By activating the exposure boost for a document, it will appear before all non-boosted documents returned by an algorithm.
This is useful, in scenarios where algorithms receive high frequency updates and important topics would get pushed down quickly.
The effect will go away automatically after a certain time.

1. Add the `li-exposure-boost` plugin to your content type metadata

   ```js
   {
     handle: 'article',
     // ...
     metadata: [
       // ...
       {
         handle: 'exposureBoost',
         type: 'li-exposure-boost',
         config: {
           index: true
         }
       }
     ]
   }
   ```

   - **handle**: Make sure to use the same handle for all content types where the plugin is configured
   - **indexing**: The config option `index` needs to be enabled for it to work

2. Generally allow exposure boosting for certain teasers in their service params schema

   ```js
   {
     name: 'someTeaserService',
     paramsSchema: [
       // ...
       {
         handle: 'someTeaser',
         type: 'li-teaser',
         config: {
           // ...
           algorithm: {
             // ...
             allowExposureBoost: true
           }
         }
       }
     ]
   }
   ```

3. Show the exposure boost UI on a Table Dashboard (optional)
   ```js
   {
     handle: 'someDashboard',
     // ...
     columns: [
       // ...
       {
         label: 'Boost',
         minWidth: 100,
         growFactor: 0,
         priority: 1,
         metadataPropertyName: 'exposureBoost',
         editable: true
       }
     ]
   }
   ```

Visit the [`li-exposure-boost` plugin]({{< ref "/reference/document/metadata/plugins/li-exposure-boost" >}}) page for more information.

{{< feature-info "Document Inbox" "Editor" >}}

### Document Inbox for Data Records :gift:

The Document Inbox is now also supported for documents of type Data Record. It offers the same functionality as with other document types, including the ability to store images and documents, and organize them into groups.

One particular use case we had in mind is the use with Pitch documents, modeled as Data Records, to collect ideas for stories. The Document Inbox allows users to gather images or related stories that may prove useful when writing the final piece later on. If the document is transformed, the contents of the inbox are preserved and carried over to the resulting document.

To enable the inbox for a Data Record, configure which types of documents and media can be added to it.

```js
{
  handle: 'pitch',
  documentType: 'data-record',
  ...
  inbox: {
    contentTypes: ['regular'],
    mediaTypes: ['image']
  }
}
```

{{< feature-info "Media Center" "server/editor" >}}

### Media Center Image Editing :gift:

Journalists are sometimes required to redact areas of an image, such as license plates or faces, or to perform color corrections, such as adjusting brightness, contrast, or saturation. To simplify this task and eliminate the need for external tools, we are adding support for basic image editing.

{{< img src="./release-2025-05-image-editor-button.png" alt="Image Editor Button"  >}}

We added a new image editor to Livingdocs. Users can open the editor by clicking the edit button in the media center detail view. It allows users to adjust brightness, contrast, or saturation, as well as blur parts of an image. The original image is always preserved and can be restored at any time. Users can also continue editing an image or selectively undo specific adjustments at a later point.

{{< img src="./release-2025-05-image-editor.png" alt="Image Editor"  >}}

Image editing is currently supported for jpg, png, and webp formats when [`use2025Behavior`]({{< ref "/operations/releases/release-2025-03/#media-center-image-variant-storage--delivery-gift" >}}) is enabled. Accordingly, images must be requested via the public API endpoint [`GET /api/2025-03/mediaLibrary/serve-image/{key}`]({{< ref "/reference/public-api/media-library/#serve-image" >}}) for the modifications to be applied. The edited image will be delivered in place of the original. The original version remains stored and can be restored in the editor.

{{< info >}}
To avoid performance bottlenecks, ensure you place a CDN or image proxy in front of Livingdocs, retrieving images via the new API. This prevents excessive load on the Livingdocs Server.

Whenever an asset gets modified, we emit the [`mediaLibraryEntry.update`]({{< ref "/customising/advanced/server-events" >}}) server event. This event can be used to purge a CDN or other image service.
{{< /info >}}

{{< feature-info "Integrations" "server/editor" >}}

### PEIQ Integration - Agency Report Import :gift:

The Livingdocs integration with PEIQ has been enhanced to enable the import of agency reports. Users can now drag and drop an agency report from PEIQ into a Livingdocs dashboard to initiate the import.

The user experience may vary depending on the report's contents and Livingdocs configuration:

- If the agency report has no attached images and no `paramsSchema` is configured, the document is created and opened immediately. No user input is required.
- If the agency report has no images but a `paramsSchema` is configured, users must complete the `paramsSchema` form before the document is created and opened.
- If the report includes images but no `paramsSchema`, the media upload center opens to collect required metadata before creating and opening the document.
- If both a `paramsSchema` and images are present, users first complete the `paramsSchema` form, then proceed to the media upload center before the document is created and opened.

At any point during this process, users can abort the import, in which case no document is created.

To enable this functionality, begin by configuring the PEIQ configuration's `agencyReport` property in your project configuration (`settings.integrations.peiq.agencyReportImport`):

- `peiqFunctionHandle`: The handle of a PEIQ function registered in your server
- `paramsSchema`: An optional schema prompting the user to provide additional data after dropping an agency report into a dashboard
- `defaultParams`: Default values to prefill the `paramsSchema` form
- `context`: Optional additional data passed to the PEIQ function, useful when reusing a function

```js
agencyReportImport: {
  peiqFunctionHandle: 'create-from-agency-report',
  paramsSchema: [
    {
      handle: 'category',
      type: 'li-category'
    }
  ],
  defaultParams: {},
  context: {
    contentType: 'regular'
  }
}
```

Next, register your PEIQ function. It will be called when an agency report is imported and must return a document object. The function receives the following arguments:

* `agencyReport`: The raw agency report data returned by the PEIQ API
* `mediaLibraryEntries`: If the report includes images, they are imported into the Media Library and passed to the function in this array
* `params`: If a `paramsSchema` is defined, the submitted user values are passed here
* `context`: The configured `context` from `agencyReportImport` is forwarded to the function
* `userId`: The ID of the user performing the import
* `projectConfig`: The project configuration

For the return object the livingdocs server expects the following:
* `title`: optional string
* `contentType`: required string
* `metadata`: optional object
* `metadataSource`: optional object
* `translations`: optional array of metadata translations, e.g. `[{locale: 'en'}]`,
* `content`: optional array of components

```js
liServer.registerPeiqFunction({
  handle: 'create-from-agency-report',
  action({agencyReport, mediaLibraryEntries, params, context, userId, projectConfig}) {
    return {title, contentType, metadata, metadataSource, translations, content}
  }
})
```

{{< feature-info "Media Center" "editor" >}}

### Media Center - Delete language metadata set :gift:

When using the multi-language metadata feature for media types, users can now not only add new translation languages but also remove existing translations if they are no longer needed. To support this, we've added a new button to a translated metadata set that allows users to delete a language from a media library entry.

{{< img src="./release-2025-05-remove-metadata-translations.png" alt="Remove Metadata Translations Button" width="250" >}}

{{< feature-info "Table Dashboards" "editor" >}}

### Table Dashboards - Support All Metadata Cells :gift:

In earlier iterations of the Table Dashboards, metadata plugin support was limited. However, as the feature has become more widely adopted inconsistencies across plugin behaviour became confusing and problematic.

This release addresses that gap by adding support for a broader range of metadata plugins in table dashboards, improving completeness and consistency across the system. Newly supported plugins include:

- li-datetime, li-system-datetime
- li-date, li-system-date
- li-enum, li-system-enum
- li-document-references
- li-target-length

{{< feature-info "oEmbed" "server" >}}

### Additional oEmbed Providers Bluesky, Pinterest and Reddit :gift:

We've added support for three new oEmbed providers:

- Bluesky
- Pinterest
- Reddit 

Using `allowedCoreProviders` is strongly recommended to configure these providers due to a [breaking change introduced regarding Facebook and Instagram providers]({{< relref "#facebook-and-instagram-oembed-providers-now-require-credentials-fire" >}}).

```js
{
  oembed: {
    allowedCoreProviders: [
      {name: 'li-bluesky'},
      {name: 'li-pinterest'},
      {name: 'li-reddit'},
      ...
    ]
  }
}
```

No additional configs are required as the providers do not support any customisations.

{{< feature-info "Clipboard" "editor" >}}

### Added Clipboard Context

This release enhances clipboard usability for nested components. Previously, when copying or cutting nested components, the clipboard displayed only the component name, with no descriptive context making it difficult to distinguish between components, especially those with identical names. The clipboard preview now includes the content of the first descendant as a description, providing better context and improving the overall editing experience.

{{< feature-info "Teaser Sidebar" "editor" >}}

### Clickable Titles in Teaser Sidebar

Teaser titles are now clickable, allowing editors to directly open the linked article in a new window without needing to navigate to it manually. This enables more efficient workflows for all those roles that work with the teaser sidebar.

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [CVE-2025-32442](https://github.com/fastify/fastify/security/advisories/GHSA-mg2h-6x62-wpwc) patched in `fastify` v5.3.2
- [CVE-2025-27789](https://github.com/advisories/GHSA-968p-4wvh-cqc8) patched `@babel/runtime` & `@babel/helpers` v7.26.10
- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7) patched in `@eslint/plugin-kit` v0.3.5
- [CVE-2025-7783](https://github.com/advisories/GHSA-fjxv-7rqg-78g4) patched in `form-data` v2.5.5
- [CVE-2025-7339](https://github.com/advisories/GHSA-76c9-3jph-rj3q) patched in `on-headers` v1.1.0
- [CVE-2025-54798](https://github.com/advisories/GHSA-52f5-9888-hmc6) patched by no longer depending on `tmp`

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [CVE-2025-32442](https://github.com/fastify/fastify/security/advisories/GHSA-mg2h-6x62-wpwc) patched in `fastify` v5.3.2
- [CVE-2025-27789](https://github.com/advisories/GHSA-968p-4wvh-cqc8) patched `@babel/runtime` & `@babel/helpers` v7.26.10
- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7) patched in `@eslint/plugin-kit` v2.5.5
- [CVE-2025-7783](https://github.com/advisories/GHSA-fjxv-7rqg-78g4) patched in `form-data` v2.5.5
- [CVE-2025-9288](https://github.com/advisories/GHSA-95m3-7q98-8xr5) patched in `sha.js` v2.4.12

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5), [CVE-2025-2336](https://github.com/advisories/GHSA-4p4w-6hg8-63wx) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) vulnerability in `vue-template-compiler` it allows malicious users to perform XSS via prototype pollution. Editor build is always done in a trusted environment and the vulnerability is not exploitable.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v276.3.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.26): fix: Patch vulnerable dependencies
- [v276.3.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.25): fix(retresco): Request more rows on entities endpoint
- [v276.3.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.24): fix(peiq): Replace '<?ZE?>' with '\n' instead of ' ' if newlines are enabled on metadata property
- [v276.3.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.23): fix(media-library): Add multiple states in populateMissingStates
- [v276.3.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.22): fix(media-library): Force index use when getting assets by key
- [v276.3.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.21): chore(drone): Disable onboarding tests for release-2025-05
- [v276.3.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.20): fix(deps): update dependency form-data from 4.0.2 to 4.0.4 [security]
- [v276.3.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.19): fix(li-system-enum): Fix return in validateOnUpdate
- [v276.3.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.18): fix(cloudinary): Throw notFound error if resource is not found
- [v276.3.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.17): fix(deps): update dependency @livingdocs/framework from 32.7.8 to v32.7.9
- [v276.3.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.16): fix(security): Patch `undici` vulnerability `CVE-2025-47279` to v6.21.3 and `brace-expansion` vulnerability `CVE-2025-5889` to v1.1.12
- [v276.3.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.15): fix(document-lists): Improve query performance for document lists
- [v276.3.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.14): fix(memory): Merge command api caches into one shared Map cache per project & design
- [v276.3.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.13): fix(memory): Fix memory leak that was caused by constantly compiling metadata plugin schemas
- [v276.3.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.12): test(migrations): Explain version change behavior in more detail
- [v276.3.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.11): fix(migrations): Remove li-metadata-translations presence check
- [v276.3.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.10): fix(media-center): Fix mediaLibrary.images.variantsStorage config check when cloudinary is configured
- [v276.3.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.9): fix(LIFEAT009): in-memory dashboard filter caching in liEmbedTeaserIncludeModal
- [v276.3.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.8): fix(migrations): Change the documentWriteModel.version correctly after persisting migration changes
- [v276.3.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.7): fix(deps): update dependency @livingdocs/framework from 32.7.7 to v32.7.8

- [v276.3.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.6): fix(deps): update dependency @livingdocs/framework from 32.7.6 to v32.7.7
- [v276.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.5): fix: Convert gif images to webp when rendering in the editor
- [v276.3.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.4): fix: Support downloading images from /serve-image endpoint
- [v276.3.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.3): fix(queue): Execute redis streams cleanup only on worker

- [v276.3.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.2): fix(data-migration-run): Parse argument --filter-by-id to integers
- [v276.3.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.1): fix(peiq-agency): Improve handling of empty property image_ids

### Livingdocs Editor Patches
- [v117.6.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.43): fix(comments): Improve comment to component alignment on load
- [v117.6.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.42): fix: Patch vulnerable dependencies
- [v117.6.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.41): fix(drone): Prepend strip_prefix with '/'
- [v117.6.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.40): fix(v-tooltip): Render strings of v-tooltip as text, not html
- [v117.6.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.39): fix(planning-board): enforce sorting by distribution dates and best date
- [v117.6.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.38): fix: Support unsetting system metadata plugins
- [v117.6.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.37): fix(display-filters): Force array in getClosestPortalTarget
- [v117.6.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.36): fix: Persist document to local storage even if autosave is disabled
- [v117.6.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.35): fix(dialogs): Do not close open dialogs when attempting to close an already closed one
- [v117.6.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.34): fix(li-system-text): Fix clearing data provider selection
- [v117.6.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.33): fix: Show embed settings of focused component
- [v117.6.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.32): fix: show li-system-target-length on table dashboards
- [v117.6.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.31): fix(deps): update dependency @livingdocs/framework from 32.7.8 to v32.7.9
- [v117.6.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.30): fix(li-unique-id): Disable newlines in textarea of li-unique-id metadata plugin
- [v117.6.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.29): fix(security): Patch `undici` vulnerability `CVE-2025-47279` to v7.11.0, `brace-expansion` vulnerability `CVE-2025-5889` to v1.1.12, `pbkdf2` vulnerability `CVE-2025-6547` to v3.1.3 and `tar-fs` vulnerability `CVE-2025-48387` to v3.1.0
- [v117.6.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.28): fix(assistants): Display untranslated error details in notification
- [v117.6.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.27): fix(tabledashboard): target-length now supports allowAnyNumber
- [v117.6.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.26): fix: Update github action schedule comment
- [v117.6.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.25): fix(display-filter): Clear search input when selecting option in Retresco/iMatrics display filters
- [v117.6.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.24): fix(api-clients): Fix api client rotating state
- [v117.6.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.23): fix(imatrics): Fix imatrics filter reactivity
- [v117.6.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.22): fix(LIFEAT009): in-memory dashboard filter caching in liEmbedTeaserIncludeModal
- [v117.6.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.21): fix(drop-handler): Support undefined params on include teaser drop
- [v117.6.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.20): chore(metadata): Clear li-video-reference poster image state
- [v117.6.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.19): fix(document search): prioritize activeFilters param over cached filters
- [v117.6.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.18): fix: scroll focused component into view after iframe size has stabilized
- [v117.6.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.17): fix(media-library): Pass valid mediaLibraryEntry on tooltip select
- [v117.6.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.16): fix(deps): update dependency @livingdocs/framework from 32.7.7 to v32.7.8

- [v117.6.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.15): fix(deps): update dependency @livingdocs/framework from 32.7.6 to v32.7.7
- [v117.6.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.14): fix(image-editing): Show image editor button also if it is the only action
- [v117.6.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.13): fix: Disable supportsVideoConversion in rendering image service
- [v117.6.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.12): fix: dont disable metadata button
- [v117.6.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.11): fix(deps): Update Pintura to v8.92.14
- [v117.6.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.10): fix: Compute clipboard image URL with rendering image service
- [v117.6.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.9): fix: Remove non-existent linked Pintura package from downstream tests
- [v117.6.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.8): fix(ticker): Prevent component blur when clicking on component area
- [v117.6.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.7): fix: Download images from /serve-image endpoint
- [v117.6.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.6): fix(login): Show login errors correctly. Do not prune the hash part if it doesn't include a token parameter
- [v117.6.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.5): fix(properties-panel): Always show "Has local changes" for documents

- [v117.6.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.4): fix(drag-drop): Clear up markers after dragend event
- [v117.6.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.3): fix(core): Replace app when registering project settings components
- [v117.6.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v117.6.2): fix(properties-panel): Hide edit local version when empty

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
