---
type: release-notes
title: July 2025 Release
description: Technical Release Notes for release-2025-07
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
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

TBD

### Rollout deployment

#### Migrate the Postgres Database

Once you deploy new release instances, you have to run the migrations below.

TBD

### After the deployment

No post-deployment steps are required after rolling out this release.

### Rollback

If you encounter any issues after the deployment, you can rollback to the previous release. If you have already run the migrations and they have completed, you can rollback to the previous release by running the following command:

```sh
livingdocs-server migrate down
```

### Add Postgres Lock Timeout of 2s for read & write roles :gift:

To improve system resilience and avoid query pile-ups during lock contention, we configure a default lock timeout of `2 seconds` for all application database roles.
This `lockTimeout` value can be configured, if needed.
This ensures that queries waiting on row-level locks will automatically fail after 2 seconds instead of blocking indefinitely.

Note: This setting is applied at the role level for compatibility across all environments and connection poolers.

## Breaking Changes 🔥

{{< feature-info "Multichannel Projects" "Server" >}}

### Removal of Multi-Channel Projects :fire:

Multi-Channel Configurations within one Project have been completely removed. Projects can no longer contain multiple channels. **Please contact Livingdocs support immediately to plan your migration** to migrate content types into one channel.

Functionality-wise some setups might need to migrate tests to not create multiple channels. There will be errors if some test setup uses multiple channels. If you don't see errors, there's nothing to do.

Data-wise at the moment no data gets deleted in postgres. **But documents of the secondary channel won't be available anymore in any queries**. We'll delete all the data in another release.

#### Code changes required

Media APIs:

```
❌ Old (removed)
const imagesApi = server.features.api('li-images')
const videosApi = server.features.api('li-videos')
await imagesApi.processJob(job)
await videosApi.upload(params)

✅ New (required)
const mediaLibraryApi = server.features.api('li-media-library')
await mediaLibraryApi.addImage(params)
await mediaLibraryApi.addVideo(params)
```

Server Configuration:

```
❌ Old (removed)
{
  server: {
    host: 'localhost',
    port: 3000,
    max_json_request_size: '10mb',
    gzip: true,
    trust_proxy: true,
    https: {...}
  },
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

✅ New (required)
{
  httpServer: {
    host: 'localhost',
    port: 3000,
    maxRequestBodySize: '10mb',
    useGzipCompression: true,
    xForwardedForTrustIps: true,
    https: {...},
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

Project Configuration:

```
❌ Old (removed)
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

✅ New (required)
{
  // Project config
  components: [{
    directives: [{
      tagAllowlist: [...],
      tagDenylist: [...]
    }]
  }],
  contentTypes: [{
    editor: {
      images: { allowlist: [...] }
    }
  }]
}
```

API Endpoints (v2025-07):

```
❌ Removed from v2025-07+
GET /api/2025-07/project
GET /api/2025-07/channels
GET /api/2025-07/channelConfig
POST /api/2025-07/channelConfig

✅ Available in v2025-07+
GET /api/2025-07/projectConfig
POST /api/2025-07/projectConfig

ℹ️ Legacy endpoints still available in v1 through 2025-05
GET /api/v1/project (until 2025-05)
GET /api/v1/channels (until 2025-05)
GET /api/v1/channelConfig (until 2025-05)
POST /api/v1/channelConfig (until 2025-05)
```

{{< feature-info "Data Sources" "Server" >}}

### Removal of params.documentId in Data Sources :fire:

The `params.documentId` is no longer included in data source requests originating from the editor.
If your integration depends on this parameter, please reach out to your customer solutions manager to discuss alternative solutions.

{{< feature-info "News Agencies" "server" >}}

### Reserving Content Type Handle `liNewsAgencyReport` :fire:

The content type handle `liNewsAgencyReport` can no longer be configured manually. It is a reserved content type handle and should not be used.

{{< feature-info "Categories" "server" >}}

### Changing Categories API `getDocumentsWithOldPaths` :fire:

`categoriesApi.getDocumentsWithOldPaths` now requires `metadata.categories` properties to be indexed with `index: true`. A static Elasticsearch mapping is no longer necessary. Additionally, it returns a different document structure retrieved from Postgres.

{{< feature-info "Document Command API" "server" >}}

### Restricting Operation Order in Document Command API :fire:

The [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) operations `publish`, `unpublish`, and `addPublishSchedule` can now only be used as the last operation in a request. Hence, they are also mutually exclusive.

{{< feature-info "Config" "Server" >}}

### Removal of `server._` in favor of `httpServer._` :fire:

The Livingdocs Server config properties `server._` has been moved to `httpServer._` in `release-2022-09`. In this release we’ve enforced the new config as breaking change.

{{< feature-info "Config" "Server" >}}

### Removal of `blacklist` and `whitelist` :fire:

The terms `blacklist` and `whitelist` have been deprecated in `release-2025-01` and this is now enforced by a breaking change.

{{< feature-info "Config" "Server" >}}

### Removal of `li-images` and `li-videos` :fire:

The deprecated features `li-images` and `li-videos` got removed. Please use `li-media-library`.

{{< feature-info "Config" "Server" >}}

### Enforce uniqueness of project config props :fire:

Enforce uniqueness of project config properties `contentTypes[].handle`, `finiteProducts[].issueContentType`, `dashboards[].columns[].handle`, `editorSettings.mainNavigationGroups[].handle`, and `contentTypes[].componentGroups[].name`. Due to miss-configuration, our setup had no effect in certain cases.

## Deprecations :warning:

{{< feature-info "Postgres Version" "Database" >}}

### Deprecate `Postgres v13` :warning:

`Postgres v13` has been deprecated, as it’s end of life in November 2025.  
Support for it will be removed in `release-2026-01`.

{{< feature-info "Server API" "Server" >}}

### Deprecate endpoint `GET /api/:apiVersion/channelConfig` :warning:

The endpoint `GET /api/:apiVersion/channelConfig` is deprecated and `/api/2025-05/channelConfig` is the last api version that supports it.  
Please use `/api/2025-07/projectConfig` instead.

{{< feature-info "Removal" "Server" >}}

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

{{< feature-info "LiPriority" "System Metadata Plugin" >}}

### New System Metadata Plugin: Priority :gift:

TBD

{{< feature-info "TBD" "TBD" >}}

### Media Center: Deletion Routines :gift:

TBD

{{< feature-info "TBD" "TBD" >}}

### Page Management: Rubrics :gift:

TBD

{{< feature-info "TBD" "TBD" >}}

### Target Length Extensions :gift:

TBD

{{< feature-info "Document Command API" "server" >}}

### New Document Command API Operations :gift:

The [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) has been extended with new Publish Control operations. The following new commands are now available:

- `setEmbargo`
- `removeEmbargo`
- `addPublishSchedule`
- `cancelPublishSchedule`
- `addUnpublishSchedule`
- `cancelUnpublishSchedule`

{{< feature-info "TBD" "TBD" >}}

### Base Filter hasEmbargo :gift:

TBD

{{< feature-info "TBD" "TBD" >}}

### Support embago in Import API :gift:

TBD

{{< feature-info "Table Dashboard Cells" "Editor/Server" >}}

### New Table Dashboard Cells :gift:

Two new table dashboard cells were introduced in this release:

- `liTableDashboardCellTime`: Displays a formatted time and date based on the document’s `metadata.datetime` field.

- `liTableDashboardCellTitle`: Renders a bold title taken from `metadata.title`.

For more details on their appearance and usage, refer to the [`Table Dashboard Cells` overview page]({{< ref "/guides/editor/table-dashboard-cells.md" >}}).

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [CVE-2025-47279](https://github.com/advisories/GHSA-cxrh-j4jr-qwg3) Patch vulnerability `undici` to v6.21.3
- [CVE-2025-5889](https://github.com/advisories/GHSA-v6h2-p8h4-qcjw) Patch vulnerability `brace-expansion` to v1.1.12

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [CVE-2025-47279](https://github.com/advisories/GHSA-cxrh-j4jr-qwg3) Patch vulnerability `undici` to v6.21.3
- [CVE-2025-5889](https://github.com/advisories/GHSA-v6h2-p8h4-qcjw) Patch vulnerability `brace-expansion` to v1.1.12
- [CVE-2025-6547](https://github.com/advisories/GHSA-v62p-rq8g-8h59) Patch vulnerability `pbkdf2` to v3.1.3
- [CVE-2025-48387](https://github.com/advisories/GHSA-8cj5-5rvv-wf4v) Patch vulnerability `tar-fs` to v3.1.0
- [CVE-2025-27789](https://github.com/advisories/GHSA-968p-4wvh-cqc8) Patch vulnerability `@babel/helpers` and `@babel/runtime` to v7.27.6

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) vulnerability in `vue-template-compiler` it allows malicious users to perform XSS via prototype pollution. Editor build is always done in a trusted environment and the vulnerability is not exploitable.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

- [v280.1.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.4): fix(migrations): Rename index-reference-ids to avoid number conflict
- [v280.1.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.3): fix: Remove support for property query.conditions in searchManager.search()
- [v280.1.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.2): chore: Fix reference id population with new media library references table
- [v280.1.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v280.1.1): fix(news-agency): Prevent registering news agency report content type multiple times

### Livingdocs Editor Patches

- [v119.3.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.3): fix(navigation): Support cmd+click on back button to open window in new tab
- [v119.3.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.3.2): fix(rubrics): show rubric document title as label in li-tree items

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
