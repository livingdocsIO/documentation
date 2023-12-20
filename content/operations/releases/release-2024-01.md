---
type: release-notes
title: January 2024 Release
description: Technical Release Notes for release-2024-01
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-01/
  - /operations/releases/release-2024-01/release-2024-01/
---

{{< release-header
  title="January 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-01"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-editor/pull/7777)
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/6387)
* [fix(deps): update babel from 7.23.5 to v7.23.6 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7773)
* [Media Library: Move edit action from context-menu into card](https://github.com/livingdocsIO/livingdocs-editor/pull/7770)
* [fix(deps): update dependency @opentelemetry/instrumentation-express from 0.33.3 to ^0.34.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6383)
* [Remove support for custom Channel config property](https://github.com/livingdocsIO/livingdocs-editor/pull/7766)
* [fix(deps): update dependency ws from 8.14.2 to v8.15.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6386)
* [Fix/Media Library](https://github.com/livingdocsIO/livingdocs-editor/pull/7764)
* [Fix delivery build realtime updates](https://github.com/livingdocsIO/livingdocs-editor/pull/7765)
* [fix(deps): update dependency @livingdocs/framework from 27.2.4 to v27.2.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7767)
* [fix(deps): update dependency @livingdocs/framework from 27.2.4 to v27.2.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6382)
* [Remove `enabled` config property from `serverConfig.documents.realtimeUpdates`](https://github.com/livingdocsIO/livingdocs-server/pull/6380)
* [Add UI support for 'document.create', 'document.delete', and 'document.build.draft' webhooks](https://github.com/livingdocsIO/livingdocs-editor/pull/7760)
* [Add support for document create and delete webhooks](https://github.com/livingdocsIO/livingdocs-server/pull/6376)
* [fix(deps): update aws-sdk from 3.465.0 to v3.468.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6381)
* [fix(deps): update dependency trackjs from 3.10.3 to v3.10.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7763)
* [fix(deps): update dependency @smithy/node-http-handler from 2.1.10 to v2.2.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6377)
* [Add ability to unlock/steal a ticker entry lock from another user](https://github.com/livingdocsIO/livingdocs-editor/pull/7719)
* [Canvas UI part 1](https://github.com/livingdocsIO/livingdocs-editor/pull/7757)
* [Fix: close publish control panel when user clicks in content](https://github.com/livingdocsIO/livingdocs-editor/pull/7759)
* [Media Library Lightbox](https://github.com/livingdocsIO/livingdocs-editor/pull/7739)
* [Expose `getLatestDraftsBeta` function in public api object](https://github.com/livingdocsIO/livingdocs-server/pull/6303)
* [Event Actors](https://github.com/livingdocsIO/livingdocs-server/pull/6374)
* [remove Filter Sets](https://github.com/livingdocsIO/livingdocs-editor/pull/7737)
* [UI i18n](https://github.com/livingdocsIO/livingdocs-editor/pull/7579)
* [fix(deps): update dependency sharp from 0.32.6 to ^0.33.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6363)
* [fix(embedded documents): show the embedded doc properties per default again](https://github.com/livingdocsIO/livingdocs-editor/pull/7753)
* [fix(deps): update dependency @google-cloud/storage from 7.6.0 to v7.7.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6367)
* [Secure Opensearch/Kibana](https://github.com/livingdocsIO/livingdocs-server/pull/6324)
* [Support visiblePublicationDateOverride on importApi](https://github.com/livingdocsIO/livingdocs-server/pull/6365)
* [fix(deps): update dependency @livingdocs/framework from 27.2.3 to v27.2.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7750)
* [Patch renovate config to include `release-2023-11`](https://github.com/livingdocsIO/livingdocs-server/pull/6369)
* [fix(deps): update aws-sdk from 3.461.0 to v3.462.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6362)
* [fix(deps): update dependency jose from 5.1.2 to v5.1.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6366)
* [Improvement/media library scaling](https://github.com/livingdocsIO/livingdocs-editor/pull/7746)
* [fix(deps): update babel from 7.23.3 to v7.23.5 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7745)
* [fix(deps): update aws-sdk from 3.458.0 to v3.461.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6361)
* [Fix Tasks: ensure tasks panel and toolbar button updates when another user changes the task state](https://github.com/livingdocsIO/livingdocs-editor/pull/7738)
* [li-video-reference: show Media Library Entry label instead of generic "Video"](https://github.com/livingdocsIO/livingdocs-editor/pull/7732)
* [Fix sort support in media library query](https://github.com/livingdocsIO/livingdocs-server/pull/6357)
* [fix(deps): update dependency jose from 5.1.1 to v5.1.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6355)
* [fix(deps): update aws-sdk from 3.456.0 to v3.458.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6354)
* [fix(deps): update dependency metalman-schema from 4.0.1 to v4.0.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6353)
* [Feat/consolidated shadows](https://github.com/livingdocsIO/livingdocs-editor/pull/7730)
* [fix(deps): update dependency jose from 5.0.2 to v5.1.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6350)
* [fix(deps): update dependency jose from 5.0.1 to v5.0.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6349)
* [fix(deps): update dependency jose from 4.15.4 to v5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6238)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6348)
* [Add high contrast theme toggle to user profile](https://github.com/livingdocsIO/livingdocs-editor/pull/7720)
* [Allow deletion of global properties in user config](https://github.com/livingdocsIO/livingdocs-server/pull/6334)
* [Improvement/Jan Release Polish](https://github.com/livingdocsIO/livingdocs-editor/pull/7726)
* [fix(deps): update dependency lru-cache from 10.0.3 to v10.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6347)
* [fix(deps): update dependency @livingdocs/framework from 27.2.2 to v27.2.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6346)
* [fix(deps): update dependency @livingdocs/framework from 27.2.2 to v27.2.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7724)
* [Fix matcher to detect SVG images that include ` ` or `\n`](https://github.com/livingdocsIO/livingdocs-server/pull/6340)
* [Support translations in media sources](https://github.com/livingdocsIO/livingdocs-editor/pull/7671)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/6194)
* [fix(deps): update dependency exifreader from 4.16.0 to v4.17.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6328)
* [Fix project create api client url](https://github.com/livingdocsIO/livingdocs-editor/pull/7721)
* [Show single media metadata in dashboard side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/7712)
* [Allow handles that are 2 characters long](https://github.com/livingdocsIO/livingdocs-server/pull/6323)
* [fix(deps): update dependency @smithy/node-http-handler from 2.1.9 to v2.1.10 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6335)
* [fix(deps): update dependency jwt-decode from 3.1.2 to v4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7640)
* [fix(http): agent updated to only support https](https://github.com/livingdocsIO/livingdocs-server/pull/6329)
* [Close text formatting tooltip on click outside](https://github.com/livingdocsIO/livingdocs-editor/pull/7663)
* [fix(deps): update dependency lru-cache from 10.0.2 to v10.0.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6327)
* [Allow to reopen and edit links with invalid href](https://github.com/livingdocsIO/livingdocs-editor/pull/7710)
* [Add loading and error states to the server admin indexing page](https://github.com/livingdocsIO/livingdocs-editor/pull/7713)
* [Update translation script](https://github.com/livingdocsIO/livingdocs-editor/pull/7714)
* [🔥 Feat/vanilla color variables](https://github.com/livingdocsIO/livingdocs-editor/pull/7711)
* [fix(deps): update aws-sdk from 3.450.0 to v3.451.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6321)
* [fix(deps): update dependency wait-on from 7.1.0 to v7.2.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7706)
* [fix(deps): update dependency pino from 8.16.1 to v8.16.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6322)
* [Take subdomains into account when validating URL TLD](https://github.com/livingdocsIO/livingdocs-editor/pull/7703)
* [fix(deps): update dependency axios from 1.6.1 to v1.6.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7705)
* [fix(deps): update dependency axios from 1.6.1 to v1.6.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6320)
* [Remove support for custom angular display filters (reintroduced for NZZ only)](https://github.com/livingdocsIO/livingdocs-editor/pull/7701)
* [Allow multiple filters of same name with different config on one dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/7700)
* [fix(deps): update dependency @smithy/node-http-handler from 2.1.8 to v2.1.9 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6314)
* [Fix error when opening media side panel in editor which has a display filter configured using `metadataPropertyName`](https://github.com/livingdocsIO/livingdocs-editor/pull/7696)
* [fix(deps): update dependency pusher from 5.1.3 to v5.2.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6313)
* [fix(deps): update dependency trackjs from 3.10.1 to v3.10.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7695)
* [Allow upload center scrolling on mobile](https://github.com/livingdocsIO/livingdocs-editor/pull/7686)
* [Allow publish modal side panel scrolling on mobile](https://github.com/livingdocsIO/livingdocs-editor/pull/7685)
* [Reload Teaser Includes Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/7651)
* [Fix function rename that prevents teaser reloading](https://github.com/livingdocsIO/livingdocs-editor/pull/7677)
* [Support rendering includes in multiple ticker entries](https://github.com/livingdocsIO/livingdocs-editor/pull/7684)
* [fix(deps): update dependency cookie from 0.5.0 to ^0.6.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6295)
* [Normalize the 'Date Created' exif field to a full iso timestamp](https://github.com/livingdocsIO/livingdocs-server/pull/6300)
* [Date Time Range Filter: allow label config](https://github.com/livingdocsIO/livingdocs-editor/pull/7680)
* [chore(deps): update dependency eslint-plugin-jsdoc from 46.8.2 to v46.9.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6308)
* [fix(deps): update dependency @livingdocs/framework from 27.2.1 to v27.2.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7682)
* [fix(deps): update dependency axios from 1.6.0 to v1.6.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6306)
* [fix(deps): update dependency wait-on from 7.0.1 to v7.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7658)
* [chore(deps): update dependency @babel/eslint-parser from 7.22.15 to v7.23.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7679)
* [Allow SVG pass-through to avoid error in Sharp image processing](https://github.com/livingdocsIO/livingdocs-server/pull/6290)
* [Set avatar after loading user data](https://github.com/livingdocsIO/livingdocs-editor/pull/7617)
* [Fix/small UI bugs 5086](https://github.com/livingdocsIO/livingdocs-editor/pull/7675)
* [fix(deps): update dependency axios from 1.6.0 to v1.6.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7673)
* [fix(deps): update dependency fast-glob from 3.3.1 to v3.3.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7672)
* [fix(deps): update dependency fast-glob from 3.3.1 to v3.3.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6293)
* [Detect SVG uploads and store with .svg extension, or allow conversion using 'svg' type](https://github.com/livingdocsIO/livingdocs-server/pull/6273)
* [Fix redirectHttpToHttps to use false as default](https://github.com/livingdocsIO/livingdocs-editor/pull/7646)
* [Preload li-tree document references](https://github.com/livingdocsIO/livingdocs-server/pull/6202)
* [Support dashboardConfig.search.strategy config](https://github.com/livingdocsIO/livingdocs-server/pull/6268)
* [Support dashboardConfig.search.strategy config](https://github.com/livingdocsIO/livingdocs-editor/pull/7655)
* [Support dashboardConfig.search.strategy config](https://github.com/livingdocsIO/livingdocs-server/pull/6268)
* [Fix non-clickable link options](https://github.com/livingdocsIO/livingdocs-editor/pull/7647)
* [Fix plugin context configs](https://github.com/livingdocsIO/livingdocs-server/pull/6259)
* [Pass options to document loader](https://github.com/livingdocsIO/livingdocs-editor/pull/7606)
* [fix(deps): update dependency cypress from 13.3.3 to v13.4.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7644)
* [fix(deps): update dependency @google-cloud/storage from 7.4.0 to v7.5.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6256)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-01`, read on.

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
| Node                           | 20                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 15                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:20                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:20                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 18                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | (Deprecated Postgres v12)  12                                                            |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

{{< feature-info "Project config" "server" >}}
### Custom downstream plugins paramSchema validation changes :fire:

Plugins used in other contexts than the ones stated in the [docs](https://docs.livingdocs.io/reference/document/metadata/plugins/), will now report an error during server startup.

All downstream plugins are supported by default in document metadata and media library metadata. But if a downstream plugin is used in include services, creation flows or push messages, that will now cause an error during startup.

If a downstream plugin is being used in an include service params schema the following configuration needs to be added to the plugin declaration:

```
supportedPluginContexts: [
  'documentMetadata',
  'mediaLibraryEntryMetadata',
  'includeParams'
]
```

You should remove the `serverConfig.useStrictSchemas` property if you set it in the previous release.

Please contact your Livingdocs customer manager if you have any problems with the limitations imposed by the supported plugin contexts.

* [Server PR: Validate plugin configuration in various contexts](https://github.com/livingdocsIO/livingdocs-server/pull/6205)

TODO: check migration

## Deprecations

## APIs :gift:

## Features

TODO (featureset not 100% defined yet)

[Breaking change `Custom downstream plugins param schema validation changes`](#custom-downstream-plugins-param-schema-validation-changes-fire) is related to this feature so please read it carefully.

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

### Livingdocs Editor


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v245.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.5): fix(media-library): Normalize upload error code
- [v245.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.4): fix(media-library): Use extracted mime type for file uploads
- [v245.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.3): fix(schema): Add message to createSchemaApi validation errors
- [v245.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.2): fix(release-2024-01): Update framework to 27.2.5 (release-2024-01 tag)

### Livingdocs Editor Patches
- [v106.0.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.8): fix(api): Improve asset proxy error handling
- [v106.0.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.7): fix: add back the stopping of click event propagation
- [v106.0.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.6): fix: support component drag&drop in safari 17.2
- [v106.0.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.5): fix(themes): Move theme logic from bootstrap to session initialization
- [v106.0.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.4): fix(li-link-edit): extend typeahead search baseFilters from useDashboard
- [v106.0.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.3): fix(release-2024-01): Update framework to 27.2.5 (release-2024-01 tag)


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
