---
type: release-notes
title: July 2024 Release
description: Technical Release Notes for release-2024-07
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-07/
  - /operations/releases/release-2024-07/release-2024-07/
---

{{< release-header
  title="July 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-07"
>}}

## PRs to Categorize
* [Use `reply.elapsedTime` instead of deprecated `reply.getResponseTime()`](https://github.com/livingdocsIO/livingdocs-editor/pull/8687)
* [Add support for multilingual delivery build messages and user choices](https://github.com/livingdocsIO/livingdocs-server/pull/7046)
* [Add support for multilingual delivery build messages and user choices](https://github.com/livingdocsIO/livingdocs-editor/pull/8679)
* [fix(deps): update dependency fastify from 4.28.0 to v4.28.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8686)
* [fix(deps): update aws-sdk from 3.600.0 to v3.606.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7049)
* [fix(deps): update dependency fastify from 4.28.0 to v4.28.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7048)
* [fix: resolving comments from deleted components](https://github.com/livingdocsIO/livingdocs-editor/pull/8678)
* [fix(deps): update dependency https-proxy-agent from 7.0.4 to v7.0.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8681)
* [fix: correctly highlight comments which are reopened](https://github.com/livingdocsIO/livingdocs-editor/pull/8659)
* [fix(deps): update dependency @aws-sdk/client-sts from 3.600.0 to v3.606.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7043)

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-july-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-07`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 22                                                                                       |
| NPM                            | 10                                                                                       |
| Postgres                       | 16                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:22                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:22                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 18                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Deployment

### Before the deployment

No prior preparations are required before rolling for this release.

### After the deployment

No prior preparations are required after rolling out this release.

## Breaking Changes 🔥

{{< feature-info "Release" "server" >}}
### Migrate the Postgres Database :fire:
No upstream migrations were added this release.

{{< feature-info "Exposed functionality" "server" >}}
### Remove support for require('@livingdocs/server/exports') :fire:

`require('@livingdocs/server/exports')` is no longer useful and was removed.

Server PR: [Remove support for require('@livingdocs/server/exports')](https://github.com/livingdocsIO/livingdocs-server/pull/7037)

{{< feature-info "Import API" "server" >}}
### `importApi.getImageBatchLog` :fire:

`importApi.getImageBatchLog` has been removed.
Please use `publicApi.getMediaLibraryImportStatus({projectId, id, type: 'image'})` instead.

Server PR: [Remove importApi.getImageBatchLog')](https://github.com/livingdocsIO/livingdocs-server/pull/7037)

{{< feature-info "Desk-net API" "server" >}}
### Desk-net API function parameters :fire:

- Drop support for separate Desk-Net platform integration API function arguments
- Require userId to be passed to Desk-Net platform integration API functions

Before:
```js
liServer.features.api('li-desknet-integration').createFromDesknet(projectId, element)
liServer.features.api('li-desknet-integration').updateFromDesknet(projectId, documentId, element, opts)
liServer.features.api('li-desknet-integration').unlinkFromDesknet(projectId, documentId)
```

After:
```js
liServer.features.api('li-desknet-integration').createFromDesknet({projectId, userId, element})
liServer.features.api('li-desknet-integration').updateFromDesknet({projectId, documentId, userId, element, linkPublication})
liServer.features.api('li-desknet-integration').unlinkFromDesknet({projectId, documentId, userId})
```

Server PR: [Drop support for separate Desk-Net platform integration API function arguments](https://github.com/livingdocsIO/livingdocs-server/pull/7032)

## Deprecations

{{< feature-info "Integrations" "server" >}}
### Comyan drag&drop without metadata mapping configuration :warning:

Using Comyan drag&drop without providing a metadata mapping configuration is deprecated and support is removed with release-2025-01.
Please specify a `targetMediaType` for the Comyan integration in the project settings and configure a Comyan metadata mapping for that particular media type.

{{< feature-info "Integrations" "server" >}}
### Comyan reporting from upstream :warning:


## Features

{{< feature-info "Livingdocs Assistants" "server" >}}
### Livingdocs Assistants: Proposals :gift:

{{< feature-info "Livingdocs Assistants" "server" >}}
### Livingdocs Assistants: Metadata properties :gift:

{{< feature-info "Saving Feature" "server" >}}
### Offline mode :gift:

{{< feature-info "Delivery Builds" "server" >}}
### Delivery Builds: User Choices :gift:

{{< feature-info "Integrations" "server" >}}
### Comyan: Usage reporting :gift:

{{< feature-info "Integrations" "server" >}}
### Comyan: Metadata mapping :gift:

{{< feature-info "Command API" "server" >}}
### Command API enhancements :gift:


## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2024-37168](https://github.com/advisories/GHSA-7v5v-9h63-cj86) patched in `@grpc/grpc-js` v1.9.15
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2024-4367](https://github.com/advisories/GHSA-wgrm-67xf-hhpq) patched in `pdfjs-dist` v4.3.136
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
