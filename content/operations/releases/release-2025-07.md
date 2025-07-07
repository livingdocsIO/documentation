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

No migrations are required for this release.

### After the deployment

No post-deployment steps are required after rolling out this release.

### Rollback

No rollback steps are required for this release.

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

TBD

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

TBD

{{< feature-info "TBD" "TBD" >}}

### Base Filter hasEmbargo :gift:

TBD

{{< feature-info "TBD" "TBD" >}}

### Support embago in Import API :gift:

TBD

{{< feature-info "TBD" "TBD" >}}

TBD

### New Table Dashboard Cells :gift:

TBD

#### Li-Table-Dashboard-Cell-Time

TBD

#### Li-Table-Dashboard-Cell-Title

TBD

#### Li-Table-Dashboard-Cell-CharacterCount

TBD

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
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
