---
type: release-notes
title: January 2026 Release
description: Technical Release Notes for release-2026-01
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2026-01

systemRequirements:
  suggested:
    - name: Node
      version: 24
    - name: NPM
      version: 11
    - name: Postgres
      version: 18
    - name: Elasticsearch
      version: 9.x
    - name: OpenSearch
      version: 2.3.0
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
      version: 7.x
    - name: OpenSearch
      version: 1
    - name: Redis
      version: 6.2
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:22
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:22
    - name: Browser Support
      version: Chrome >= 131, Edge >= 131, Firefox >= 133, Safari >= 18.2
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize

- [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-editor/pull/10561)
- [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/8725)
- [Return objects with results instead of arrays for all Public API methods and endpoints](https://github.com/livingdocsIO/livingdocs-server/pull/8712)
- [Patch vulnerabilities [fix-vulerability-patching-action]](https://github.com/livingdocsIO/livingdocs-server/pull/8719)
- [Support defaultMediaTypes in project config](https://github.com/livingdocsIO/livingdocs-editor/pull/10267)
- [Support defaultMediaTypes in project config](https://github.com/livingdocsIO/livingdocs-server/pull/8360)
- [Improve PEIQ agency import logging](https://github.com/livingdocsIO/livingdocs-editor/pull/10375)
- [Improve PEIQ agency import logging](https://github.com/livingdocsIO/livingdocs-server/pull/8468)
- [Feat/media library dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/10502)
- [Media Library Dashboards](https://github.com/livingdocsIO/livingdocs-server/pull/8631)
- [chore(deps): update dependency puppeteer-core from 24.31.0 to v24.33.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10556)
- [fix(deps): update dependency @livingdocs/framework from 32.11.0 to v32.11.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8714)
- [Drop suport for Node.js v23](https://github.com/livingdocsIO/livingdocs-editor/pull/10550)
- [Drop suport for Node.js v23](https://github.com/livingdocsIO/livingdocs-server/pull/8710)
- [Remove Project Builders API](https://github.com/livingdocsIO/livingdocs-server/pull/8672)
- [Deprecate (Declarative) Document Copy API (for all projects)](https://github.com/livingdocsIO/livingdocs-server/pull/8702)
- [Extract correct dimensions of rotated images](https://github.com/livingdocsIO/livingdocs-server/pull/8701)
- [Show additional info toggle in side panels for all media types](https://github.com/livingdocsIO/livingdocs-editor/pull/10547)
- [Show additional info toggle for all media types](https://github.com/livingdocsIO/livingdocs-editor/pull/10546)
- [Drop support for Postgres v13](https://github.com/livingdocsIO/livingdocs-server/pull/8671)
- [Drop suport for Node.js v20](https://github.com/livingdocsIO/livingdocs-editor/pull/10519)
- [Drop suport for Node.js v20](https://github.com/livingdocsIO/livingdocs-server/pull/8661)
- [Restore support for CJS data migrations](https://github.com/livingdocsIO/livingdocs-server/pull/8698)
- [Use correct status icons for exported documents](https://github.com/livingdocsIO/livingdocs-editor/pull/10545)
- [Publish Control Export Mode](https://github.com/livingdocsIO/livingdocs-server/pull/8676)
- [Publish Control Export Mode](https://github.com/livingdocsIO/livingdocs-editor/pull/10532)
- [chore(deps): update dependency @google-cloud/storage from 7.17.3 to v7.18.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8682)
- [Fix: Last item in --overflow table](https://github.com/livingdocsIO/livingdocs-editor/pull/10543)
- [Design/Table Dashboard Brush-Up](https://github.com/livingdocsIO/livingdocs-editor/pull/10531)
- [Use start of week for current week active date range in planning board](https://github.com/livingdocsIO/livingdocs-editor/pull/10539)
- [Ignore configuration errors in Retresco hooks](https://github.com/livingdocsIO/livingdocs-server/pull/8675)
- [Prevent unrevoke when the asset has been deleted](https://github.com/livingdocsIO/livingdocs-editor/pull/10512)
- [Prevent unrevoke when the asset has been deleted](https://github.com/livingdocsIO/livingdocs-server/pull/8658)
- [fix(tableDashboard): show language dialog for single contentTypes ](https://github.com/livingdocsIO/livingdocs-editor/pull/10521)
- [Use full gap between li-tree items as the drop zone](https://github.com/livingdocsIO/livingdocs-editor/pull/10513)
- [Extend Revoke capabilities](https://github.com/livingdocsIO/livingdocs-editor/pull/10497)
- [Extend Revoke capabilities](https://github.com/livingdocsIO/livingdocs-server/pull/8632)
- [Inject built-in content type liNewsAgencyReport when writing project config](https://github.com/livingdocsIO/livingdocs-server/pull/8509)
- [chore(deps): update dependency posthog-node from 5.12.0 to v5.13.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8649)
- [Validate content schema when importing document via Public API](https://github.com/livingdocsIO/livingdocs-server/pull/8638)
- [Prevent legacy dashboards from loading twice](https://github.com/livingdocsIO/livingdocs-editor/pull/10451)
- [fix(deps): update dependency open from 10.2.0 to v11 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10506)
- [fix(deps): update dependency inquirer from 12.11.1 to v13 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8637)
- [Migrate remaining Media Library views from Angular.js to Vue](https://github.com/livingdocsIO/livingdocs-editor/pull/10473)
- [Add li-tree UI config property treeInitiallyCollapsed](https://github.com/livingdocsIO/livingdocs-server/pull/8604)
- [Collapse li-tree properties if treeInitiallyCollapsed is set](https://github.com/livingdocsIO/livingdocs-editor/pull/10475)
- [Upgrade vue-eslint-parser](https://github.com/livingdocsIO/livingdocs-editor/pull/10426)
- [Serve image in Public API with valid content type if no format is specified](https://github.com/livingdocsIO/livingdocs-server/pull/8613)

- [Design/Horizontal Form Plugin Top Spacing](https://github.com/livingdocsIO/livingdocs-editor/pull/10432)
- [Limit retries when Retresco re-enrich fails](https://github.com/livingdocsIO/livingdocs-server/pull/8594)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8603)
- [Prevent duplicate component ids when pasting container components from clipboard](https://github.com/livingdocsIO/livingdocs-editor/pull/10468)
- [chore(deps): update dependency puppeteer-core from 24.28.0 to v24.29.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10469)
- [Prevent error when searching on kanban boards](https://github.com/livingdocsIO/livingdocs-editor/pull/10452)
- [fix: image cropper state pollution](https://github.com/livingdocsIO/livingdocs-editor/pull/10442)
- [Set minimal v22 node version to v22.17.1](https://github.com/livingdocsIO/livingdocs-server/pull/8585)
- [Improvement/variables for sizes sass to css](https://github.com/livingdocsIO/livingdocs-editor/pull/10408)
- [Fix/Overlooked Dashboard Filter](https://github.com/livingdocsIO/livingdocs-editor/pull/10449)
- [chore(deps): update aws-sdk from 3.918.0 to v3.920.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8567)
- [Use `accessTokenTtl` for serve-image token expiration](https://github.com/livingdocsIO/livingdocs-server/pull/8569)
- [Design/Media Center Polish](https://github.com/livingdocsIO/livingdocs-editor/pull/10444)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2026-01`, read on.

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

### Drop support for Node v20 :fire:

Node versions below 22.17.1 are no longer supported. Node 20 will stop being maintained on 30 April 2026. Please upgrade to at least the latest versions of `livingdocs/server-base:22` and `livingdocs/editor-base:22`, or preferably to `livingdocs/server-base:24` and `livingdocs/editor-base:24`.

### Drop support for Postgres v13 :fire:

Postgres versions below 13 are no longer supported. Postgres 13 stopped being maintained on 13 November 2025. Please upgrade to at least Postgres 14, or preferably to Postgres 18.

### Validation of Delivery References :fire:

Deliveries referenced by project config property `contentTypes[].deliveries[].deliveryName` are now validated. If a delivery reference is invalid, an error will be thrown. Make sure the referenced deliveries exist.

### Publish Control Restrictions When Print Mode Is Enabled :fire:

The project config properties `contentTypes[].publishControl.publishSchedule`,
`contentTypes[].publishControl.unpublishSchedule`,
`contentTypes[].publishControl.significantPublicationDate`, and
`contentTypes[].publishControl.resetVisiblePublicationDateOverrideOnSignificantUpdate`
are no longer supported when `contentTypes[].print` is enabled.

These settings were already partially unsupported in the Livingdocs Editor. We're now enforcing the same behavior in the Livingdocs Server as well.

### Remove Project Builders API :fire:

The Project Builders API `liServer.features.api('li-project-builders')` has been removed, along with the `projectBuilders` server config property.
Alongside this, two Registration API functions have been removed: `createUserWithProjectBuilders` and `createSSOUserWithProjectBuilders`.

### Internal Reference Functions Return Objects

The following internal API methods return an object `{results: [], total: 0, cursor: ''}` instead of an array:

- `documentApi.findIncomingReferences()`
- `publicationApi.findIncomingReferences()`
- `mediaLibraryApi.findIncomingReferences()`

Modify any custom code using the functions listed above to use the `results` property of the returned object.

## Deprecations :hourglass:

### Publish Type :hourglass:

Project config properties `deliveries[].publishType` and `contentTypes[].publishType` have been deprecated and will be removed in release-2026-07. Please migrate to the newly introduced [Publish Control Export Mode](#publish-control-export-mode-gift) instead.

### Search Metadata Mapping :hourglass:

The `search.metadataMapping` server config property is deprecated and will be removed in release-2026-07. Please use dynamic metadata mapping instead.

The relevant li-\* core plugins have indexing enabled, but you might need to add an `indexing` config to custom metadata plugins:

```js
{
  name: 'my-slug',

  indexing: {
    enabled: true,
    behavior: [
      {type: 'text'},
      {
        type: 'keyword',
        getValue(val) {
          if (val.length > 100) return val.substr(0, 100)
          return val
        }
      }
    ]
  },

  storageSchema: {
    type: 'string'
  }
}
```

In the content type config or media type config you will also need to set `config.index: true`:

```js
{
  handle: 'slug',
  type: 'my-slug',
  config: {
    index: true
  }
}
```

More details can be found in the documentation:

1. [Enable indexing on metadata plugin]({{< ref "/customising/server-configuration/#enable-indexing-on-metadata-plugin" >}})
2. [Publication Index > Metadata Plugins]({{< ref "/guides/search/publication-index/#metadata-plugins" >}})
3. [Create your own Metadata Plugin]({{< ref "/guides/documents/metadata/metadata-examples/#example-2-create-your-own-metadata-plugin" >}})

### Deprecate various search schema properties :hourglass:

The following server config properties are deprecated and will be removed in release-2026-07:

- `search.queryBuilderConfig`
- `search.implementationVersion`
- `search.reindexBatchSize`
- `search.reindexDelay`
- `search.reindexConcurrency`
- `search.fields`
- `search.gaussScale`
- `search.gaussDecay`
- `search.gaussOffset`
- `search.gaussWeight`
- `search.prefixQueryType`
- `search.prefixQueryFields`
- `search.fulltextQueryType`
- `search.fulltextQueryOperator`

### Declarative Document Copy API :hourglass:

The Declarative Document Copy API (which uses the `settings.copy` object in the project config) has been deprecated and will be removed in release-2026-07.
Please use Document Copy Flows and Document Transform Flows instead:

- https://docs.livingdocs.io/guides/editor/document-copy-flows
- https://docs.livingdocs.io/guides/editor/document-transform-flows

### Referenced Designs :hourglass:

Referenced designs are now deprecated and will be removed in release-2026-07. Please use [embedded designs]({{< ref "/guides/documents/document-design/embedded-design/" >}}) instead.

### Google Vision Integration :hourglass:

The Google Vision integration is deprecated and will be removed in release-2026-07. This includes the li-google-vision metadata plugin. We do not expect that any customer is using this, but if you are then please contact us and we will provide support for the migration.

### Print Mode and huGO Print Preview

The huGO Print Preview, and the acompanying "Print Mode" in the Livingdocs editor, are deprecated and will be removed in release-2026-07.

The following config properties should be removed before release-2026-07 as they will no longer have any effect after that point:

- `projectConfig.settings.editMode`
- `contentTypeConfig.print.enabled`
- `contentTypeConfig.print.enableStepZooming`
- `editorConfig.app.editable.print`

Support for `contentTypeConfig.print.componentMap` will remain because it is still used when exporting documents to huGO.

Once `editMode: 'print'` is removed there will be a few UI elements that will no longer be available. The main one is the huGO Print Preview, which should be replace with a [custom preview function]({{< ref "/guides/integrations/print" >}}). The create dialog for print articles will also be removed which can be replaced with a [document creation flow]({{< ref "/guides/editor/document-creation-flow/" >}}) if required. There is also a print section at the top of the metadata form which can be replaced using [metadata plugins]({{< ref "/guides/documents/metadata/metadata-examples/" >}}) and metadata groups.

## Features :gift:

### Publish Control Export Mode :gift:

Publish control export mode is a new way to export documents from Livingdocs to external systems. It is meant for publishers who use Livingdocs not only for websites but also for print products, digital editions, or newsletters.

In the past, editors had to publish a document first and then trigger an export separately. For some content types this was inconvenient.

With export mode, editors can now export a document with a single button click. This makes it easier to produce print articles and newsletters from the Livingdocs editor.

{{< img src="release-2026-01-export-mode.png" alt="Screenshot showing the export button" width="400" >}}

Under the hood, export mode combines existing concepts such as publishing and delivery builds. For instructions and more details, refer to the [Publish Control Export Mode guide]({{< ref "/guides/editor/publish-control/export-mode" >}}).

### Default Media Types :gift:

Instead of always defaulting to the media types with the handles 'image', 'video' and 'file' it is now possible to configure different media types to use on a project and content type level. These media types will be used when uploading media using the upload functionality in the document side panel and metadata form, or when dragging and dropping images into a document.

Project config:

```js
{
  v: 2,
  // ...
  settings: {
    handle: 'my-project',
    // ...
    defaultMediaTypes: {
      mediaImage: 'image',
      mediaVideo: 'video',
      mediaFile: 'file'
    }
  }
}
```

Content type config:

```js
{
  handle: 'data-visualisation',
  documentType: 'article',
  // ...
  defaultMediaTypes: {
    mediaImage: 'infographic',
    // mediaVideo: 'video',
    // mediaFile: 'file'
  }
}
```

The 'image', 'video' and 'file' media types are still the defaults, so you do not need to configure anything to keep the existing behaviour.

### Media Library Dashboards :gift:

We’ve noticed that many customers model their Livingdocs navigation around internal organizational structures to reflect their workflows.
However, the Media Library screens for images, videos, and files were constrained to a single configuration and could appear only once in the navigation.
To enable the Media Center to evolve into a fully integrated DAM system, we are introducing Media Library Dashboards.

Customers can now create an unlimited number of Media Libraries.
These are configured in the same way as other custom dashboards.
Base Filters, Display Filters, and a reference to an existing Card Configuration are now defined centrally, rather than on the media type.

#### How to configure a Media Library Dashboard to be available in the main navigation?

First, create a new Media Library Dashboard.
You can find detailed instructions in the [Media Library Dashboard Configuration guide]({{< ref "/guides/media-library/media-library-setup/index#media-library-dashboard-configuration" >}}).
Next, add the dashboard to the dashboards array in the editorSettings.

Once this is done, the dashboard can be referenced in the mainNavigation to make it visible.
Note that, previously, adding an entry with `liItem: 'mediaLibrary'` to the mainNavigation would display the preconfigured (legacy) Media Library.
If at least one Media Library Dashboard is configured, this navigation entry will be ignored.

When opening a Media Library Dashboard from the main navigation, and multiple mediaTypes are available, a dialog will prompt the user to select the desired media type.

#### How to configure a specific Media Library Dashboard for the document editor?

To define which Media Library Dashboard is available in the document editor—either in the side panel or in a modal dialog, you can reference its handle in the content type configuration for images, videos, or files using `useDashboard`.
Learn how to configure this setting [here]({{< ref "/reference/project-config/content-types#usedashboard" >}}).

If nothing is referenced, it will fallback to the old setup, where baseFilters, displayFilters and card-configuration are based on mediaTypes.
This fallback behavior is planned for deprecation.

### Public API Return Values :gift:

Starting with `/api/2026-01/*` the Public API endpoints which previously returned an array now return an object containing a `results` property with this array. There can also be a `total` number of results and a `cursor` for pagination depending on whether or not the endpoint supports it. To improve the accuracy of the pagination the `cursor` can be passed back to the endpoints or functions using the `after` parameter, for example: `/api/2026-01/publications/search?filters=${filters}&limit=10&after=${cursor}`.

The following endpoints return `{results: [], total: 0, cursor: ''}`:

- `GET /api/2026-01/publications/search`
- `GET /api/2026-01/documents/:documentId/incomingDocumentReferences`
- `GET /api/2026-01/documents/:documentId/incomingMediaReferences`
- `GET /api/2026-01/mediaLibrary/:mediaId/incomingDocumentReferences`
- `GET /api/2026-01/mediaLibrary/:mediaId/incomingMediaReferences`
- `GET /api/2026-01/drafts/:documentId/incomingDocumentReferences`

The following endpoints return `{results: []}`:

- `GET /api/2026-01/documents/latestPublications`
- `GET /api/2026-01/publicationEvents{/:channelHandle}`
- `GET /api/2026-01/document-lists`
- `GET /api/2026-01/categories`
- `GET /api/2026-01/mediaLibrary`
- `POST /api/2026-01/import/mediaLibrary`

To achieve the same effect when working directly with the Public API feature in downstream code you can pass `apiVersion: '2026-01'` (or greater once supported) within the main parameter object, for example: `publicApi.searchPublications({projectId, filters, apiVersion: '2026-01'})`.

The following methods return `{results: [], total: 0, cursor: ''}`:

- `publicApi.searchPublications()`
- `publicApi.getIncomingPublicationReferencesForDocument()`
- `publicApi.getIncomingMediaReferencesForDocument()`
- `publicApi.getIncomingPublicationReferencesForMedia()`
- `publicApi.getIncomingMediaReferencesForMedia()`
- `publicApi.getIncomingDocumentReferencesForDraft()`

The following methods return `{results: []}`:

- `publicApi.getLatestDraftsBeta()`
- `publicApi.getLatestPublications()`
- `publicApi.getPublicationEvents()`
- `publicApi.findDocumentLists()`
- `publicApi.getCategories()`
- `publicApi.getMediaLibraryEntries()`
- `publicApi.createMediaLibraryEntries()`

To continue to return the array directly you can still use the `/api/2025-11/*` (or earlier) endpoints, or omit the `apiVersion` when calling the methods.

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
- [v294.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v294.0.5): fix(print): Limit LIDEP075 deprecation to specific properties
- [v294.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v294.0.4): fix(retresco): show projectId in error message if integration is disabled

- [v294.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v294.0.3): fix: keep animation when downloading image
- [v294.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v294.0.2): fix(deps): update dependency @livingdocs/framework from 32.11.2 to v32.11.3
- [v294.0.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v294.0.1): fix(release-2026-01): Update framework to v32.11.2 (release-2026-01 tag)

### Livingdocs Editor Patches
- [v123.3.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.3.8): fix: do not attempt to render comments in history view
- [v123.3.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.3.7): chore(config): Prevent duplicate keys error from keyboardShortcuts
- [v123.3.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.3.6): fix: restore row highlight
- [v123.3.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.3.5): fix: loosen delivery build prop validation

- [v123.3.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.3.4): fix: remove outdated comment
- [v123.3.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.3.3): fix(deps): update dependency @livingdocs/framework from 32.11.2 to v32.11.3
- [v123.3.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.3.2): refactor(media-dashboards): use asset type labels for default pageTitle on the media-library
- [v123.3.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v123.3.1): fix(release-2026-01): Update framework to v32.11.2 (release-2026-01 tag)

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
