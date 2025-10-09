---
type: release-notes
title: July 2025 Release
description: Technical Release Notes for release-2025-07
excludeFromSearch: false
hideSectionTeaser: true

header:
  upcoming: false
  legacy: false
  current: false
  maintained: true
  branchHandle: release-2025-07

systemRequirements:
  suggested:
    - name: Node
      version: 24
    - name: NPM
      version: 11
    - name: Postgres
      version: 17
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

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-july-2025).
To learn about the necessary actions to update Livingdocs to `release-2025-07`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- [Feature Webinar Recording](https://us02web.zoom.us/rec/share/IDW9bYoIB_P5wnurNW95s3MQCw_0ANgZP1ShHsONBKuu_eJfU-3f1ogBZJV594kU.erbeCe2kXPdnUemv) | Passcode: i@5%LLLH
- [Feature Webinar Documentation](https://docs.google.com/presentation/d/1vbAJMyjVcd-PWMlwOxSi3p5TOi_f63D8nnL7_dzWdOY/edit?usp=sharing)
- [Dev Webinar Recording](https://us02web.zoom.us/rec/share/kS0fnL2pqJE589iZXBm3CQ4KKCACQ_1uyk_h8_4oncY7ACltXBfDVr_e9r53Z-VN.YTJc5RXWd-TuMWb1) | Passcode: tXP3$PC6
- [Dev Webinar Slides](https://docs.google.com/presentation/d/1i-DFfa1xK0pjFqJxDvhwlhFZaCfFPWT3A_QQLl0XDDc/edit?usp=sharing)
- [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

{{< system-versions list="suggested" >}}

### Minimal

{{< system-versions list="minimal" >}}

## Deployment

### Before the deployment

With this release, we're removing multi channel support in a project.
Please make sure you don't have logs with the deprecation code `LIDEP048` on your livingdocs server instances.

If multiple channels are in use, those deprecations are logged since `release-2025-01` during process start or when there's activity shortly after the process start.

If you're seeing such deprecations, please do not upgrade and contact us immediately. Content of secondary channels won't be served anymore and will vanish after the upgrade.

### Rollout deployment

#### Migrate the Postgres Database

When you upgrade to this new release, please make sure to migrate your database first.
At livingdocs we're running those two commands directly in an initContainer on kubernetes.

```sh
# This sets up the database and write roles with the new lockTimeout
# This command is not destructive. If the database already exists, it will not recreate it.
livingdocs-server database create -y

# 211-archive-secondary-channel-content-types.js
#   Archives content types of secondary channels. This also makes all content unavailable of those channels, but doesn't delete it yet from the database.
# 212-index-reference-ids.js
#   Adds reference indexes needed for media center deletion routines.
#   The migration will just create the schema without migrating data.
#   A manual migration of existing content is needed after the deployment.
livingdocs-server migrate up
```

### After the deployment

To support deletion routines of media center entries, please run the following command after a successful deployment.

This command will take a while to execute, but as we operate based on ranges, the blocking time should be minimal.

As estimate for the execution duration, you can calculate the minutes using those numbers:

- 15 seconds for 1 million documents to update states in Postgres
- 45 seconds for 1 million media center entries to update states in Postgres
- 45 seconds to reindex 1 million media library entries in Elasticsearch

```sh
livingdocs-server release-2025-07-populate-reference-ids -y
```

### Rollback

If you encounter any issues after the deployment, you can rollback to the previous release. If you have already run the migrations and they have completed, you can rollback to the previous release by running the commands below. The processes will continue to run even if those down migrations are not executed, but to ensure consistency, please run those after doing a rollback.

```sh
livingdocs-server migrate down 212-index-reference-ids.js
livingdocs-server migrate down 211-archive-secondary-channel-content-types.js
```

### Add Postgres Lock Timeout of 2s for read & write roles :gift:

To improve system resilience and avoid query pile-ups during lock contention, we configure a default lock timeout of `2 seconds` for all application database roles.
This `lockTimeout` value can be configured, if needed.
This ensures that queries waiting on row-level locks will automatically fail after 2 seconds instead of blocking indefinitely.

Note: This setting is applied at the role level for compatibility across all environments and connection poolers.

## Breaking Changes 🔥

{{< feature-info "Multichannel Projects" "server" >}}

### Removal of Multi-Channel Projects :fire:

Multi-Channel Configurations within one Project have been completely removed. Projects can no longer contain multiple channels. **Please contact Livingdocs support immediately to plan your migration** to migrate content types into one channel.

Functionality-wise some setups might need to migrate tests to not create multiple channels. There will be errors if some test setup uses multiple channels. If you don't see errors, there's nothing to do.

Data-wise at the moment no data gets deleted in Postgres. **But documents of the secondary channel won't be available anymore in any queries**. We'll delete all the data in another release.

{{< feature-info "Data Sources" "server" >}}

### Removal of params.documentId in Data Sources :fire:

The `params.documentId` is no longer included in data source requests originating from the editor.
If your integration depends on this parameter, please reach out to your customer solutions manager to discuss alternative solutions.

{{< feature-info "Config" "server" >}}

### Removal of `server.*` in favor of `httpServer.*` :fire:

The Livingdocs Server config properties `server.*` has been moved to `httpServer.*` in `release-2022-09`. In this release we’ve enforced the new config as breaking change.

```js
// ❌ Old
{
  server: {
    host: 'localhost',
    port: 9090,
    max_json_request_size: '3mb',
    gzip: true,
    trust_proxy: true,
    https: {...}
  }
}

// ✅ New
{
  httpServer: {
    host: '::', // http bind host
    port: 9090,
    maxRequestBodySize: '3mb',
    useGzipCompression: true, // defaults to false
    xForwardedForTrustIps: true,
    https: {...}
  }
}
```

{{< feature-info "Config" "server" >}}

### Removal of `blacklist` and `whitelist` :fire:

The terms `blacklist` and `whitelist` have been deprecated in `release-2025-01` and this is now enforced by a breaking change.

In server config:

```js
// ❌ Old
{
  cors: {
    enabled: true,
    whitelist: ['https://example.com']
  },
  auth: {
    connections: {
      local: {
        config: {
          passwordBlacklist: ['livingdocs']
        }
      }
    }
  }
}

// ✅ New
{
  httpServer: {
    cors: {
      allowlist: ['https://example.com']
    }
  },
  auth: {
    connections: {
      local: {
        config: {
          deniedPasswords: ['livingdocs']
        }
      }
    }
  }
}
```

In Project Configuration:

```js
// ❌ Old
{
  // Project config
  components: [{
    directives: [{
      tagWhitelist: [...],
      tagBlacklist: [...]
    }]
  }],
  contentTypes: [{
    editor: {
      images: { whitelist: [...] }
    }
  }]
}

// ✅ New
{
  // Project config
  components: [{
    directives: [{
      // Please see the {{< a href="/reference/document/document-design/directives/editable/#plaintext-tagallowlist-and-tagdenylist" title="editable directive options" >}}
      tagAllowlist: [...],
      tagDenylist: [...]
    }]
  }],
  contentTypes: [{
    editor: {
      // The 'whitelist' got changed to 'allowlist'.
      // Preferrably even migrate that to {{< a href="/reference/project-config/content-types" title="imageSourcePolicy" >}}
      images: { allowlist: [...] }
    }
  }]
}
```

{{< feature-info "News Agencies" "server" >}}

### Reserving Content Type Handle `liNewsAgencyReport` :fire:

The content type handle `liNewsAgencyReport` can no longer be configured manually. It is a reserved content type handle and should not be used.

{{< feature-info "Categories" "server" >}}

### Changing Categories API `getDocumentsWithOldPaths` :fire:

`categoriesApi.getDocumentsWithOldPaths` now requires `metadata.categories` properties to be indexed with `index: true`. A static Elasticsearch mapping is no longer necessary. Additionally, it returns a different document structure retrieved from Postgres.

{{< feature-info "Document Command API" "server" >}}

### Restricting Operation Order in Document Command API :fire:

The [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) operations `publish`, `unpublish`, and `addPublishSchedule` can now only be used as the last operation in a request. Hence, they are also mutually exclusive.

{{< feature-info "Config" "server" >}}

### Removal of `li-images` and `li-videos` :fire:

The deprecated features `li-images` and `li-videos` got removed. Please use `li-media-library`.

```js
// ❌ Old
const imagesApi = server.features.api('li-images')
const videosApi = server.features.api('li-videos')
await imagesApi.processJob({projectId, url, metadata})
await videosApi.upload({projectId, url, metadata})

// ✅ New
const mediaLibraryApi = server.features.api('li-media-library')
await mediaLibraryApi.addImage({projectId, assetSource: {url}, metadata})
await mediaLibraryApi.addVideo({projectId, assetSource: {url}, metadata})
```

{{< feature-info "Config" "server" >}}

### Enforce uniqueness of project config props :fire:

Enforce uniqueness of project config properties `contentTypes[].handle`, `finiteProducts[].issueContentType`, `dashboards[].columns[].handle`, `editorSettings.mainNavigationGroups[].handle`, and `contentTypes[].componentGroups[].name`. Due to miss-configuration, our setup had no effect in certain cases.

## Deprecations :warning:

{{< feature-info "Database" "server" >}}

### Deprecate `Postgres v13` :warning:

`Postgres v13` has been deprecated, as it’s end of life in November 2025.  
Support for it will be removed in `release-2026-01`.

{{< feature-info "Public API" "server" >}}

### Deprecation of `/project`, `/channelConfig` and `/channels/{channelHandle}` endpoints :warning:

The following endpoints are no longer available in newer api versions anymore:

❌ `GET` `/api/2025-07/project`  
❌ `GET` `/api/2025-07/channels/{channelHandle}`  
❌ `GET` `/api/2025-07/channelConfig`  
❌ `POST` `/api/2025-07/channelConfig`

Please use the following endpoints instead, which are available since v1:

✅ `GET` `/api/2025-07/projectConfig`  
✅ `POST` `/api/2025-07/projectConfig`

All the 4 legacy endpoints are still available in v1 to 2025-05:

✅ `GET` `/api/v1/project` to `/api/2025-05/project`  
✅ `GET` `/api/v1/channels` to `/api/2025-05/channels`  
✅ `GET` `/api/v1/channelConfig` to `/api/2025-05/channelConfig`  
✅ `POST` `/api/v1/channelConfig` to `/api/2025-05/channelConfig`

{{< feature-info "Project Builders" "server" >}}

### Deprecate `project builders` :warning:

Support for those will be removed in `release-2026-01`.

## Features

{{< feature-info "News Agencies" "server/editor" >}}

### News Agencies :gift:

Livingdocs now offers built-in support for News Agencies, enabling editorial teams to review and process news agency reports directly within Livingdocs. With a single click, reports can be copied into regular Livingdocs articles, ready for editing and publication.

The News Agency integration supports two kinds of import flows: manual flows and auto-publish flows.

#### Manual Flow

Manual flows let users decide which news agency reports should be turned into articles. As a result, they are more visible to users, whereas auto-publish flows are designed to operate in the background.

{{< img src="./release-2025-07-news-agencies.png" alt="News Agency Screen"  >}}

1. **Import**: News agency reports are imported via the Import API. They must be imported into a pre-configured content type with the handle `liNewsAgencyReport`. This content type is pre-configured with a fixed set of metadata properties and content components. It is created automatically once the integration is set up.
2. **Triage**: Imported reports are displayed on a dedicated news agency screen. While this is the recommended way to work with news agency reports, it's also possible to configure other dashboards to display this content type.
3. **Article Creation**: On the news agency screen, users can copy a report into a regular article by clicking the plus button. This action triggers the configured news agency function to transform the report into a regular article. It creates an independent copy that no longer receives updates from the original report, though it remains linked to the original news agency report. This relationship is displayed in the document info panel of the article and on the news agency screen next to the report from which it was created.
4. **Editing**: The resulting article behaves like any other article in Livingdocs: it can be edited, published, and managed without restrictions.

#### Auto-publish Flow

Unlike the manual flow, the auto-publish flow requires no user-interaction. It enables publishing articles received from news agencies automatically.

1. **Import**: Auto-publish reports are imported via the Import API to content type `liNewsAgencyReport` as well. However, the metadata property `autoPublish` must be set to `true`.
2. **Triage**: This automatically bypasses the manual review process. Auto-publish reports do not appear on any news agency screens.
3. **Article Creation**: A new article is automatically generated using the configured news agency function. The article is then immediately published without any user interaction. Auto-published articles are unpublished two weeks after their publication.
4. **Editing**: When accessed by users, auto-published articles are read-only. They continue to receive updates made to the original news agency report, which are also automatically published. Users may choose to convert the auto-published article into an editable article. Once converted, it will stop receiving updates from the original report.

{{< img src="./release-2025-07-news-agencies-flow.png" alt="News Agency Flow"  >}}

**Note**:
While this release introduces the foundational components for integrating news agency workflows into Livingdocs, the feature is not yet ready for full rollout.
Further development is in progress, and we’ll keep you updated along the way - notifying you as soon as it’s ready for you to explore.

{{< feature-info "Metadata Plugins" "server/editor" >}}

### New System Metadata Plugin: Priority :gift:

A new system metadata plugin `li-system-priority` is available to track and display the priority of news agency reports, such as for marking breaking news. It enables filtering and sorting based on priority within table dashboards.

To use the plugin, define it in the metadata configuration of your news agency content type and optionally reference it in your desired Table Dashboard columns:

```js
{
  handle: 'agency-report-article',
  // ...
  metadata: [
    // ...
    {
      handle: 'priority',
      type: 'li-system-priority',
      config: {
        index: true
      },
      ui: {
        label: {en: 'Prio', de: 'Prio'}
      }
    }
  ]
}
```

(Optional) Reference it on a Table Dashboard:

```js
{
  handle: 'agency-dashboard',
  // ...
  columns: [
    // ...
    {
      label: 'Prio',
      minWidth: 100,
      growFactor: 0,
      priority: 1,
      metadataPropertyName: 'priority',
      editable: true
    }
  ]
}
```

{{< feature-info "Media Center" "server" >}}

### Media Center: Deletion Routines :gift:

Deletion Routines are background tasks which run every 30 minutes and delete unwanted media library entries. They can be particularly useful when you have regular imports from image agencies. Filter criteria can be configured per media type to remove specific media library entries.

The [deployment steps](#deployment) above must be followed before enabling deletion routines.

It is also necessary to enable `use2025Behavior` in the server config. Be aware that this also requires additional configuration steps such as modifying your CDN setup. Holding workshops or informing users within the newsroom might be beneficial before rolling this out because of the changes it introduces. Please see the [2025 Behavior]({{< ref "/guides/media-library/2025-behavior" >}}) guide for further details.

```js
mediaLibrary: {
  use2025Behavior: true
}
```

You might also need to manually migrate media library entry data depending on how you have previously handled media licensing and how you have used the old archive and revoke functionality. In addition to this, if you have custom components or metadata which link to media library entries but do not create references then you should not use deletion routines for these media types until the data has been migrated.

To configure a deletion routine you need to add the `deletionRoutine` config to each media type config that you would like the deletion routine to run for:

```js
{
  type: 'mediaImage',
  handle: 'image',
  // ...
  deletionRoutine: {
    enabled: true,
    filters: [
      {
        // Allow any of the rule sets to trigger a deletion
        or: [
          // Delete unused my-agency and another-agency entries after 30 days
          {
            and: [
              {key: 'createdAt', range: {lte: 'now-30d'}},
              {key: 'metadata.agency', term: ['my-agency', 'another-agency']}
            ]
          },
          // Delete unused yet-another-agency entries after 2 months
          {
            and: [
              {key: 'createdAt', range: {lte: 'now-2M'}},
              {key: 'metadata.agency', term: 'yet-another-agency'}
            ]
          },
          // Delete any unused entries which have not been modified for 1 year
          {key: 'updatedAt', range: {lte: 'now-1y'}}
        ]
      }
    ]
  }
}
```

The filters property uses our usual [Search Filters Query DSL]({{< ref "/reference/public-api/publications/search-filters" >}}) in the same way as a base filter. Any unused media library entry which matches will be deleted.

We automatically handle the "unused" part which excludes media library entries that:

- are referenced by documents
- are referenced by other media library entries
- are currently in a document inbox
- have previously been published in a document
- have been stored in archive

{{< feature-info "Page Management" "server/editor" >}}

### Page Management: Rubrics :gift:

As we have observed, many newsrooms are structuring their pages after departments or a similar categorisation scheme.
If pages and articles share a thematic assignment, algorithmic teasers make it straight forward to fill such pages with recent content.

With the introduction of «Rubrics», we're aiming to provide a flexible but also standardized approach for this use case.
A key feature is the hierarchical nature of rubrics. This allows to model a rubric tree after the logical hierarchy of your pages and navigation levels.

Editors assign the deepest possible rubric to their articles. Algorithmic teasers have a filter where a rubric is selected that best matches the page or the teaser group topic.
The teaser will then be populated with articles of the selected rubric and also with articles that have any sub-rubric assigned.

For further information, please contact your account manager.

{{< feature-info "Metadata Plugins" "server/editor" >}}

### Target Length Extensions :gift:

The `li-target-length` system metadata plugin now supports two new configuration options:

- `unit`: Define whether the target size is measured in `characters` or `lines`. In case of `lines` the [lineCountFraction]({{< ref "/reference/project-config/editor-settings/#text-count" >}}) needs to be defined because internally everything is still stored in characters.
- `showExactCountCheckbox`: Adds a checkbox in the UI that allows editors to toggle between a simplified T-shirt size scale (S/M/L/XL) and a precise numeric input.

{{< feature-info "Document Command API" "server" >}}

### New Document Command API Operations :gift:

The [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) has been extended with new Publish Control operations. The following new commands are now available:

- `setEmbargo`
- `removeEmbargo`
- `addPublishSchedule`
- `cancelPublishSchedule`
- `addUnpublishSchedule`
- `cancelUnpublishSchedule`

{{< feature-info "Publish Control" "server" >}}

### Base Filter hasEmbargo :gift:

You can now use `baseFilters` to filter for documents with an embargo, enabling embargo-specific dashboards. Below is an example that displays all documents where an embargo is currently active:

```js
baseFilters: [
  {key: 'contentType', term: ['regular', 'simple', 'pitch', 'bundle']},
  {key: 'publishControl.embargo.enforced', term: true},
  {
    or: [
      {key: 'publishControl.embargo.until', exists: false},
      {
        key: 'publishControl.embargo.until',
        range: {gt: 'now'}
      }
    ]
  }
],
```

{{< feature-info "Import API" "server" >}}

### Support embargo in Import API :gift:

Embargoes can now be set directly when importing documents via the Import API. Include the `publishControl.embargo` object in your request payload to prevent documents from being published or made visible.

{{< feature-info "Dashboards" "server/editor" >}}

### New Table Dashboard Cells :gift:

Two new table dashboard cells were introduced in this release:

- `liTableDashboardCellTime`: Displays a formatted time and date based on the document’s `metadata.datetime` field.

- `liTableDashboardCellTitle`: Renders a bold title taken from `metadata.title`.

For more details on their appearance and usage, refer to the [`Table Dashboard Cells` overview page]({{< ref "/guides/editor/table-dashboard-cells.md" >}}).

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [CVE-2025-47279](https://github.com/advisories/GHSA-cxrh-j4jr-qwg3) patched in `undici` v6.21.3
- [CVE-2025-5889](https://github.com/advisories/GHSA-v6h2-p8h4-qcjw) patched in `brace-expansion` v1.1.12
- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7) patched in `@eslint/plugin-kit` v0.3.5
- [CVE-2025-7783](https://github.com/advisories/GHSA-fjxv-7rqg-78g4) patched in `form-data` v2.5.5
- [CVE-2025-7339](https://github.com/advisories/GHSA-76c9-3jph-rj3q) patched in `on-headers` v1.1.0
- [CVE-2025-54798](https://github.com/advisories/GHSA-52f5-9888-hmc6) patched by no longer depending on `tmp`

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [CVE-2025-47279](https://github.com/advisories/GHSA-cxrh-j4jr-qwg3) patched in `undici` v6.21.3
- [CVE-2025-5889](https://github.com/advisories/GHSA-v6h2-p8h4-qcjw) patched in `brace-expansion` v1.1.12
- [CVE-2025-6547](https://github.com/advisories/GHSA-v62p-rq8g-8h59) patched in `pbkdf2` v3.1.3
- [CVE-2025-48387](https://github.com/advisories/GHSA-8cj5-5rvv-wf4v) patched in `tar-fs` v3.1.0
- [CVE-2025-27789](https://github.com/advisories/GHSA-968p-4wvh-cqc8) patched in `@babel/helpers` and `@babel/runtime` v7.27.6
- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7) patched in `@eslint/plugin-kit` v2.5.5
- [CVE-2025-7783](https://github.com/advisories/GHSA-fjxv-7rqg-78g4) patched in `form-data` v2.5.5
- [CVE-2025-9288](https://github.com/advisories/GHSA-95m3-7q98-8xr5) patched in `sha.js` v2.4.12
- [CVE-2025-2336](https://github.com/advisories/GHSA-4p4w-6hg8-63wx) patched by replacing `angular-sanitize` with `sanitize-html`
- [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) patched in `vue-template-compiler`

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v280.1.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.28): fix(hugo-api): set XML header in huGO API
- [v280.1.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.27): fix: prevent crashing server if a scheduled publication cannot be found
- [v280.1.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.26): fix(security): Upgrade pino to replace vulnerable fast-redact dependency

- [v280.1.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.25): fix(deps): Axios is vulnerable to DoS attack through lack of data size check - https://github.com/advisories/GHSA-4hjh-wcwx-xvwj
- [v280.1.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.24): fix(media-library): Expose asset changes in server events
- [v280.1.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.23): fix: Support setting migration sequence to 0 with documentApi.create
- [v280.1.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.22): fix(rubrics): allow `li-rubric-assignment` in creation flows
- [v280.1.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.21): fix(google-vision): Enrich images on upload
- [v280.1.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.20): fix: Patch vulnerable dependencies
- [v280.1.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.19): fix(retresco): Request more rows on entities endpoint
- [v280.1.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.18): fix(peiq): Replace '<?ZE?>' with '\n' instead of ' ' if newlines are enabled on metadata property
- [v280.1.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.17): fix(media-library): Add multiple states in populateMissingStates
- [v280.1.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.16): fix: Reinstantiate and deprecate unpublishing documents with publicationApi.\_scheduledPublish
- [v280.1.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.15): fix(media-library): Force index use when getting assets by key
- [v280.1.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.14): test(project-config): Test read and update behavior for project config property removals
- [v280.1.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.13): chore(tasks): Reduce concurrency in populate-reference-ids script
- [v280.1.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.12): fix(li-system-enum): Fix return in validateOnUpdate
- [v280.1.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.11): refactor: rename displayFilterOptionsCategory values
- [v280.1.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.10): fix(cloudinary): Throw notFound error if resource is not found
- [v280.1.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.9): fix(tasks): Move populate-reference-ids script to one-time tasks
- [v280.1.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.8): fix(media-library): Check postgres references when deleting media
- [v280.1.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.7): chore(redis): Simplify object matcher in consumer `wait` function
- [v280.1.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.6): fix(media-library): Only enable deletion routines with use2025Behavior

- [v280.1.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.5): fix(deps): update dependency @livingdocs/framework from 32.8.8 to v32.8.9

- [v280.1.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.4): fix(migrations): Rename index-reference-ids to avoid number conflict
- [v280.1.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.3): fix: Remove support for property query.conditions in searchManager.search()
- [v280.1.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.2): chore: Fix reference id population with new media library references table
- [v280.1.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.1): fix(news-agency): Prevent registering news agency report content type multiple times

### Livingdocs Editor Patches
- [v119.3.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.36): fix(ticker): apply default content when inserting container component
- [v119.3.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.35): fix: show revision updated_at instead of document updatedAt
- [v119.3.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.34): fix(task-screen): show task panel when opening document
- [v119.3.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.33): fix(media-library): keyboard navigation
- [v119.3.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.32): fix(delivery): disable delivery builds during save
- [v119.3.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.31): fix(assistants): stop updating componentIsSaved state after it becomes true
- [v119.3.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.30): fix(security): Upgrade pino to replace vulnerable fast-redact dependency
- [v119.3.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.29): fix: Make images and videos in ticker properties panel reactive
- [v119.3.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.28): fix: Avoid destructuring props to preserve reactivity
- [v119.3.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.27): fix(li-tree): allow nesting of li-tree items again
- [v119.3.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.26): fix(deps): update dependency axios from 1.10.0 to 1.12.0 [security]

- [v119.3.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.25): fix(deps): Migrate to vue-template-compiler-patched that has security issues fixed
- [v119.3.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.24): fix(upload-center): Prevent select all error when configs are undefined
- [v119.3.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.23): fix: Remove angular-sanitize
- [v119.3.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.22): fix(comments): Improve comment to component alignment on load
- [v119.3.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.21): fix: Patch vulnerable dependencies
- [v119.3.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.20): fix(drone): Prepend strip_prefix with '/'
- [v119.3.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.19): chore: Make pdf responsive by omitting width and height style attributes
- [v119.3.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.18): fix(li-tree): render rubrics tree collapsed initially
- [v119.3.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.17): fix(v-tooltip): Render strings of v-tooltip as text, not html
- [v119.3.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.16): test(planning-board): add playwright tests
- [v119.3.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.15): fix: Support unsetting system metadata plugins
- [v119.3.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.14): fix(display-filters): Force array in getClosestPortalTarget
- [v119.3.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.13): fix(metadata): Make li-boolean checkboxId unique
- [v119.3.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.12): fix: Persist document to local storage even if autosave is disabled
- [v119.3.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.11): fix(dialogs): Do not close open dialogs when attempting to close an already closed one
- [v119.3.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.10): fix(li-system-text): Fix clearing data provider selection
- [v119.3.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.9): fix: Show embed settings of focused component
- [v119.3.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.8): fix(media-library): Hide lightbox trigger for videos
- [v119.3.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.7): fix(dataload): Add maxBatchSize to Dataloader instances to reduce url lengths when loading a lot of entries

- [v119.3.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.6): fix: show li-system-target-length on table dashboards

- [v119.3.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.5): fix(deps): update dependency @livingdocs/framework from 32.8.8 to v32.8.9

- [v119.3.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.4): fix(li-unique-id): Disable newlines in textarea of li-unique-id metadata plugin

- [v119.3.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.3): fix(navigation): Support cmd+click on back button to open window in new tab
- [v119.3.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.2): fix(rubrics): show rubric document title as label in li-tree items

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
