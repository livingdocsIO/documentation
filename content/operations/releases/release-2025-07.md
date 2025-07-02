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

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize

- [Set default lock timeout of postgres read & write roles to 2s](https://github.com/livingdocsIO/livingdocs-server/pull/7970)
- [Remove unused angular directives](https://github.com/livingdocsIO/livingdocs-editor/pull/10091)
- [Feat: media center improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/10094)
- [News Agency Flow](https://github.com/livingdocsIO/livingdocs-editor/pull/10080)
- [News Agency Flow](https://github.com/livingdocsIO/livingdocs-server/pull/8133)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10090)
- [Breaking changes for release-2025-07](https://github.com/livingdocsIO/livingdocs-server/pull/8115)
- [News Agency Sidepanel: persist collapse indicator state in local storage](https://github.com/livingdocsIO/livingdocs-editor/pull/10077)
- [feat: add system metadata priority plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/10027)
- [feat: add system metadata priority plugin](https://github.com/livingdocsIO/livingdocs-server/pull/8075)
- [feat: add lines support for li-target-length ](https://github.com/livingdocsIO/livingdocs-editor/pull/10057)
- [feat: add lines support for li-target-length](https://github.com/livingdocsIO/livingdocs-server/pull/8094)
- [News Agency Screen: New dashboard cells + sidepanel](https://github.com/livingdocsIO/livingdocs-editor/pull/10021)
- [News Agency Screen: Change content-type for news-agency-report and require content-type basefiler in news-agency-screen config](https://github.com/livingdocsIO/livingdocs-server/pull/8116)
- [Fix document list query performance](https://github.com/livingdocsIO/livingdocs-server/pull/8125)
- [Fix document command api memory leak](https://github.com/livingdocsIO/livingdocs-server/pull/8109)
- [fix(character limit): Sidepanel property display](https://github.com/livingdocsIO/livingdocs-editor/pull/10067)
- [fix(application menu): Chevron position](https://github.com/livingdocsIO/livingdocs-editor/pull/10066)
- [Fix ajv compile memory leak](https://github.com/livingdocsIO/livingdocs-server/pull/8100)
- [Add publish control operations to Command API](https://github.com/livingdocsIO/livingdocs-server/pull/8091)
- [Display untranslated error details in assistant error notification](https://github.com/livingdocsIO/livingdocs-editor/pull/10053)
- [Fix: li-target-length add support for allowAnyNumber on tabledashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/10034)
- [Embedd Pintura in repository](https://github.com/livingdocsIO/livingdocs-editor/pull/10048)
- [Clear search input when selecting option in Retresco/iMatrics display filters](https://github.com/livingdocsIO/livingdocs-editor/pull/10045)
- [Test against elasticsearch v9](https://github.com/livingdocsIO/livingdocs-server/pull/8081)
- [Fix api client rotating state](https://github.com/livingdocsIO/livingdocs-editor/pull/10035)
- [Fix imatrics and retresco filter reactivity](https://github.com/livingdocsIO/livingdocs-editor/pull/10031)
- [Migrations: Always persist content and sequences on change](https://github.com/livingdocsIO/livingdocs-server/pull/8076)
- [Add news-agency-screen](https://github.com/livingdocsIO/livingdocs-editor/pull/10017)
- [Add News Agency Screen](https://github.com/livingdocsIO/livingdocs-server/pull/8064)
- [Feat: add embargo support for import api](https://github.com/livingdocsIO/livingdocs-server/pull/8046)
- [Remove li-metadata-translations check in migrations](https://github.com/livingdocsIO/livingdocs-server/pull/8063)
- [Add Agency Copy Flow](https://github.com/livingdocsIO/livingdocs-editor/pull/9936)
- [Add Agency Copy Flow](https://github.com/livingdocsIO/livingdocs-server/pull/8009)
- [Change the documentWriteModel.version correctly after persisting migration changes](https://github.com/livingdocsIO/livingdocs-server/pull/8049)
- [LIFEAT009: in-memory dashboard filter caching in liEmbedTeaserIncludeModal](https://github.com/livingdocsIO/livingdocs-server/pull/8051)
- [Support `undefined` params to allow dropping teasers into new components](https://github.com/livingdocsIO/livingdocs-editor/pull/10004)
- [Allow removal of video references from metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/10001)
- [Cache dashboard filters and query while document is open](https://github.com/livingdocsIO/livingdocs-editor/pull/9990)
- [Feat: Show tooltip on hovering team members](https://github.com/livingdocsIO/livingdocs-editor/pull/9988)
- [Fix scroll to focused component](https://github.com/livingdocsIO/livingdocs-editor/pull/9994)
- [feat(embargo): index so that it can be used in basefilters](https://github.com/livingdocsIO/livingdocs-server/pull/8037)
- [News agency copy flow ui elements](https://github.com/livingdocsIO/livingdocs-editor/pull/9935)
- [Fix usages of uniqueItemProperties AJV keyword](https://github.com/livingdocsIO/livingdocs-server/pull/8038)
- [Search result tooltip fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/9958)
- [Fix: cache data provider requests](https://github.com/livingdocsIO/livingdocs-editor/pull/9955)
- [Improvement/Loader and Progress Icon](https://github.com/livingdocsIO/livingdocs-editor/pull/9939)
- [Show image editor button also if it is the only action](https://github.com/livingdocsIO/livingdocs-editor/pull/9956)
- [Preserve loop and delay properties of animated images](https://github.com/livingdocsIO/livingdocs-server/pull/8014)
- [Disable supportsVideoConversion in rendering image service](https://github.com/livingdocsIO/livingdocs-editor/pull/9952)
- [fix: dont disable metadata button](https://github.com/livingdocsIO/livingdocs-editor/pull/9937)
- [Import Pintura from private NPM repository](https://github.com/livingdocsIO/livingdocs-editor/pull/9944)
- [Remove non-existent linked Pintura package from downstream tests](https://github.com/livingdocsIO/livingdocs-editor/pull/9938)
- [Prevent component blur when clicking on component area for a ticker entry to allow doc-link to be set](https://github.com/livingdocsIO/livingdocs-editor/pull/9917)
- [Download images from /serve-image endpoint](https://github.com/livingdocsIO/livingdocs-editor/pull/9914)
- [Download modified instead of original images](https://github.com/livingdocsIO/livingdocs-server/pull/7980)
- [Show login errors correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/9924)
- [Always show "Has local changes" in properties panel for embedded documents](https://github.com/livingdocsIO/livingdocs-editor/pull/9913)
- [Clear up markers after dragend event for side panel drag and drop items](https://github.com/livingdocsIO/livingdocs-editor/pull/9849)
- [Allow the use of custom display filters on task screens](https://github.com/livingdocsIO/livingdocs-editor/pull/9844)
- [Hide "Edit Local Version" in properties panel when empty](https://github.com/livingdocsIO/livingdocs-editor/pull/9848)
- [Fix data migration statistics mutation](https://github.com/livingdocsIO/livingdocs-server/pull/7985)
- [Improve handling of empty property image_ids](https://github.com/livingdocsIO/livingdocs-server/pull/7982)


To get an overview about new functionality, read the [Release Notes](TODO).
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

No pre-deployment steps are required before rolling out this release.

### Rollout deployment

#### Migrate the Postgres Database

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

This release includes migrations that prepare for the removal of multi-channel support and implement data structure changes for the news agency flow feature.

### After the deployment

No post-deployment steps are required after rolling out this release.

### Rollback

If you need to roll back after applying migrations, you can use the following command:

```sh
livingdocs-server migrate down
```

Note that this will only roll back database changes, but code changes may require additional steps. Please contact Livingdocs support for assistance with a complete rollback.

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

The migrations in this release are required for proper functionality and prepare your system for the removal of multi-channel support.

{{< feature-info "Operations" "server" >}}

### Multi-Channel Projects Removed :fire:

Multi-Channel Configurations within one Project have been completely removed. Projects can no longer contain multiple channels. **Please contact Livingdocs support immediately to plan your migration** to migrate content types into one channel.

Functionality-wise some setups might need to migrate tests to not create multiple channels. There will be errors if some test setup uses multiple channels. If you don't see errors, there's nothing to do.

Data-wise at the moment no data gets deleted in postgres. **But documents of the secondary channel won't be available anymore in any queries**. We'll delete all the data in another release.

{{< feature-info "APIs" "server" >}}

### Server Configuration Changes :fire:

The server configuration properties have been restructured. You need to update your configuration to use the new structure:

```js
// ❌ Old (removed)
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

// ✅ New (required)
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

### Media APIs Removed :fire:

The deprecated media APIs have been removed. You need to update your code to use the new media library API:

```js
// ❌ Old (removed)
const imagesApi = server.features.api('li-images')
const videosApi = server.features.api('li-videos')
await imagesApi.processJob(job)
await videosApi.upload(params)

// ✅ New (required)  
const mediaLibraryApi = server.features.api('li-media-library')
await mediaLibraryApi.addImage(params)
await mediaLibraryApi.addVideo(params)
```

### Inclusive Language Changes :fire:

All configurations using blacklist/whitelist terminology have been updated to use inclusive language:

```js
// ❌ Old (removed)
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

// ✅ New (required)
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

### API Endpoints Changes :fire:

Several API endpoints have been removed from v2025-07:

```js
// ❌ Removed from v2025-07+
GET /api/2025-07/project
GET /api/2025-07/channels  
GET /api/2025-07/channelConfig
POST /api/2025-07/channelConfig

// ✅ Available in v2025-07+
GET /api/2025-07/projectConfig
POST /api/2025-07/projectConfig

// ℹ️ Legacy endpoints still available in v1 through 2025-05
GET /api/v1/project (until 2025-05)
GET /api/v1/channels (until 2025-05)
GET /api/v1/channelConfig (until 2025-05)
POST /api/v1/channelConfig (until 2025-05)
```

{{< feature-info "Data Sources" "server" >}}

### Removal of params.documentId in Data Sources :fire:

The `params.documentId` is no longer included in data source requests originating from the editor.
If your integration depends on this parameter, please reach out to your customer solutions manager to discuss alternative solutions.

## Deprecations

### Postgres v13 Deprecated

Postgres v13 is now deprecated. Support for it will be removed in `release-2026-01`. Please upgrade to a newer version.

### Project Builders Deprecated

Project builders are now deprecated. Support for them will be removed in `release-2026-01`.

## Features

{{< feature-info "Editing" "editor" >}}

### System Metadata Priority Plugin :gift:

A new system metadata priority plugin has been added that allows for prioritizing content in your editorial workflow. This provides a standardized way to set and display content priority across your projects.

{{< feature-info "Editing" "both" >}}

### Target Length Lines Support :gift:

The target length feature now supports line-based measurements in addition to character counts. This enhancement offers more flexibility in defining content length requirements, with a toggle to switch between T-Shirt size slider and exact number input.

{{< feature-info "Media" "editor" >}}

### Media Center Improvements :gift:

The media center has been enhanced with several improvements:
- Embedded Pintura image editor for better in-app editing experience
- Modified images are now downloaded instead of originals when using the download function
- Improved handling of video references in metadata

{{< feature-info "Dashboard" "editor" >}}

### Dashboard Enhancements :gift:

Multiple dashboard improvements have been implemented:
- New character count dashboard cell for tracking content length
- Support for custom display filters on task screens
- Improved UI for embedded documents in the properties panel
- Enhanced drag and drop experience in the side panel

{{< feature-info "User Experience" "editor" >}}

### UX Improvements :gift:

Several user experience enhancements have been added:
- Improved error display in assistant error notifications
- Fixed login error display
- Better UI for character limit side panel properties
- Fixed application menu chevron positioning for multi-line text
- Improved tooltips for team members

{{< feature-info "Performance" "server" >}}

### Performance Improvements :gift:

Significant performance enhancements have been implemented:
- Fixed document list query performance
- Fixed document command API memory leak
- Fixed AJV compile memory leak
- Improved in-memory dashboard filter caching
- Added default lock timeout of 2 seconds for Postgres read & write roles
- Optimized data provider request caching in the editor

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- Fixed AJV compile memory leak that could lead to memory issues under heavy load
- Fixed document command API memory leak that could affect system stability
- Set default lock timeout for Postgres connections to prevent query deadlocks

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10090)
- Embedded Pintura image editor to eliminate external security dependencies
- Fixed API client rotating state to prevent token exposure

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
