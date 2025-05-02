---
type: release-notes
title: May 2025 Release
description: Technical Release Notes for release-2025-05
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2025-05
---

To get an overview about new functionality, read the [Release Notes] (TODO: add release notes when finished).
To learn about the necessary actions to update Livingdocs to `release-2025-05`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **TODO**
- Feature Webinar Documentation: **TODO**
- Dev Webinar Recording: **TODO**
- Dev Webinar Slides: **TODO**
- [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

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
| Node                           | 20.19                                                                                    |
| NPM                            | 10                                                                                       |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:20:7                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:20:7                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

{{< feature-info "Dependencies" "Version" >}}

### Update Minimal Node Version v20.19 :fire:

The minimal supported Node.js version is now `v20.19.0`.
This version allows us to require esm modules within commonjs.

{{< feature-info "Server" "Removal" >}}

### Removal of Desk-Net in favor to Kordiam :fire:

Desk-Net rebranded as Kordiam.
To align Livingdocs with this change, we previously introduced corresponding Kordiam properties, features, and plugins.
With this release, we are removing the superseded Desk-Net functionality:

- Feature `li-desknet` and `li-desknet-`integration, including all server APIs
- Server config `desknet`, `integrations.desknet`, and `hugo.print.desknetMetadataFields`
- Project config `settings.desknet`, `settings.integrations.desknet`, and `contentTypes.[*].desknet`
- Function parameter `desknetApi` of Desk-Net/Kordiam functions
- `desknet` property in the return objects of `projectApi.getProject()` and `systemApi.config()`
- Metadata plugins `li-desknet-global`, `li-desknet-integration`, and `li-desknet-schedule`
- li-kordiam-schedule config property `desknetExternalElementIdMetadataPath`
- TODO: @marcbachmann -> API urls changes?

{{< feature-info "Server" "Removal" >}}

### Removal of Menu Tool :fire:

The Menu Tool has been removed.

- Menu items `{liItem: 'menus'}` are no longer supported. Please remove them from the project config.
- Public API GET `/api/:apiVersion/menus/:channelHandle?` has been removed.
- Feature `li-menus` has been removed including all its server APIs.

{{< feature-info "Server" "Removal" >}}

### Removal of config.contentTypes :fire:

The deprecated shorthand property `config.contentTypes` in the li-document-search metadata plugin was now removed.
Use `config.contentType` instead.

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

{{< feature-info "" "" >}}

### Document Inbox for Data Records :gift:

{{< feature-info "" "" >}}

### Media Center Image Editing :gift:

{{< feature-info "" "" >}}

### PEIQ Integration - Article Import :gift:

{{< feature-info "" "" >}}

### Media Center - Delete language metadata set :gift:

{{< feature-info "" "" >}}

### Table Dashboards - Support All Metadata Cells :gift:

{{< feature-info "" "" >}}

### Additional oEmbed Providers :gift:

{{< feature-info "" "" >}}

### Added Clipboard Context

{{< feature-info "" "" >}}

### Clickable Titles in Teaser Sidebar

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [CVE-2025-32442](https://github.com/fastify/fastify/security/advisories/GHSA-mg2h-6x62-wpwc) patched in `fastify` v5.3.2
- [CVE-2025-27789] https://github.com/advisories/GHSA-968p-4wvh-cqc8 patched `@babel/runtime` & `@babel/helpers` v7.26.10

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [CVE-2025-32442](https://github.com/fastify/fastify/security/advisories/GHSA-mg2h-6x62-wpwc) patched in `fastify` v5.3.2
- [CVE-2025-27789] https://github.com/advisories/GHSA-968p-4wvh-cqc8 patched `@babel/runtime` & `@babel/helpers` v7.26.10

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v276.3.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.4): fix: Support downloading images from /serve-image endpoint
- [v276.3.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.3): fix(queue): Execute redis streams cleanup only on worker

- [v276.3.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.2): fix(data-migration-run): Parse argument --filter-by-id to integers
- [v276.3.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v276.3.1): fix(peiq-agency): Improve handling of empty property image_ids

### Livingdocs Editor Patches
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
