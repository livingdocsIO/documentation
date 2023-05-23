---
type: release-notes
title: May 2023 Release
description: Technical Release Notes for release-2023-05
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-05/
  - /operations/releases/release-2023-05/release-2023-05/
---

{{< release-header
  title="May 2023 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2023-05"
>}}

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/livingdocs-release-may-2023).
To learn about the necessary actions to update Livingdocs to `release-2023-05`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/WsqHBAHeEQ5cmML-lDSWmAeu6QwPvLCHipmeRBePlmOUg2jm21XRutBao2VABIM6.1CQInj-BTkNxyavG) | Passcode: U$be7e2I
* [Feature Webinar Slides](https://docs.google.com/presentation/d/1DoAMnTDoUgl6GK_-hbZ_4YspO-djODbhnLV5T0rDO9c/)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/yqrguq9zPzO8D9RZ5MNZKTt3aNH924rLENVP9q8pv70GbLQXOsu1cqD8I4x2Fb4.PQx3ByT9Q2hmMxQC) | Passcode: e^pc8zU.
* [Dev Webinar Slides](https://docs.google.com/presentation/d/1OgkPwW3G1cuYZhhGDfwH67LSEnlQN7STq3XF6M9W8Zg/)
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested
|Name|Version|
|-|-|
|Node|18|
|NPM|8|
|Postgres|14|
|Elasticsearch<br/>OpenSearch|8.x<br/>2|
|Redis|7|
|Livingdocs Server Docker Image|livingdocs/server-base:18|
|Livingdocs Editor Docker Image|livingdocs/editor-base:18|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

### Minimal
|Name|Version|
|-|-|
|Node|16|
|NPM|8|
|Postgres|12|
|Elasticsearch<br/>OpenSearch|7.x<br/>1|
|Redis|6.2|
|Livingdocs Server Docker Image|livingdocs/server-base:16.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

## Features

- German UI
- Document Access Control
- Issue Management: Navigation and Preview
- [Metadata Preview]({{< ref "/reference/project-config/content-types#metadata-previews" >}})
- [Working Title]({{< ref "/reference/project-config/content-types#displaytitlepattern" >}})
- Document Editing Toolbar

### German UI

To enable the German UI in the Editor, you have to set `locale` in the Editor config.
```js
app: {
  locale: 'de'
}
```

In future, you will be able to configure your own labels for metadata properties in several languages, allowing individual users to switch between languages at their discretion for complete multi-language UI experience.

## Breaking Changes :fire:

### Back to Standard

:exclamation: Check the [Back to Standard Roadmap]({{< ref "/customising/back-to-standard" >}}) and inform you about important upcoming deprecations and breaking changes and reasons.

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

### Add default settings for Editor Config :fire:

:fire: Obsolete configs which can be removed from downstream editor environment configs

```js
api.version
app.useGravatar
admin.showServiceInfo
pusher
```

:recycle: You can remove theses settings from your Downstream Editor Config if the value is identical (because it's defined as default values)

```js
debug: false
http.timeout: 10000
versionCheckTimeout: null
editor.imageCrop.showSurroundingImage: 'always'
editor.imageCrop.surroundingImageOpacity: 0.25
editor.imageCrop.zoomStep: 1.1
editor.printView.enableStepZooming: true
editor.printView.zoomStep: 1.2
auth.authTokenRenewalInterval: 0
app.locale: 'en'
app.dateTimeLocale: 'en-li'
app.documentLists.pageSize: 100
app.documentList.pageSize: 100
app.history.pageSize: 100
admin.showBilling: true
port: 9000
host: '::'
loglevel: 'warn'
basePath: '/'
compress: false
assetsMaxAge: '1y'
h2c: false
redirectHttpToHttps: true
contentSecurityPolicy: `frame-ancestors 'self';`
```

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6446)

### Remove Editor Config appConfig.app.ui.welcome :fire:

🔥 Remove legacy Editor Config `appConfig.app.ui.welcome`

As a replacement, please use the new Home Screen instead. See [Home Screen]({{< ref "/reference/project-config/editor-settings#home-screen">}}) or [Start Page]({{< ref "/reference/project-config/editor-settings#startpage">}}).

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6712)

### Remove Gravatar support for profile images :fire:

🔥 Gravatar is no longer supported for profile images

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6446)

### documentApi | searchManager.searchPublications -> remove props in search result :fire:

- 💥 The property '.documents' in the result of 'documentApi.find()' got removed. Please use '.results'.
  ```diff
  const res = documentApi.find({project_id: 1}, {limit: 1})
  - const firstdoc = res.documents[0]
  + const firstdoc = res.results[0]
  ```
- 💥 The property '.publications' in the result of 'searchManager.searchPublications()' got removed. Please use '.results'.
  ```diff
  const res = searchManager.searchPublications({projectId: 1}, {limit: 1})
  - const firstdoc = res.publications[0]
  + const firstdoc = res.results[0]
  ```

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5427)

### registerProviders() for li-oembed feature is now synchronous :fire:

:fire: If you used a promise `.catch()` handler when registering oEmbed providers (`liServer.features.api('li-oembed').registerProviders()`), please change this to a try/catch instead.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5490)


### Set allowQuickPublish: true to show publish button on Dashboard :fire:

```js
{
  label: 'Published',
  minWidth: 200,
  growFactor: 0,
  priority: 2,
  componentName: 'liTableDashboardCellPublishState',
  componentOptions: {
    allowQuickPublish: true // <---- you have to add that to enable quick publish
  }
},
```

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6602)

### Remove support for liServer.log.log | liServer.log.success :fire:

:fire: Remove unused custom `liServer.log.log` and `liServer.log.success` levels. Use `liServer.log.info` instead.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5480)

### Remove functions from projectConfigApi :fire:

:fire: Remove unused custom `liServer.log.log` and `liServer.log.success` levels. Use `liServer.log.info` instead.
:fire: Remove `projectSettings.draftAssets`. There is no replacement.
:fire: Remove `projectConfigApi.getDraft({projectId, channelId, draftName})`. There is no replacement.
:fire: Remove `projectConfigApi.createDraft({projectId, channelId, draftName})`. There is no replacement.
:fire: Remove `projectConfigApi.updateDraft({projectId, channelId, draftName, channelConfig, ignore})`. There is no replacement.
:fire: Remove `projectConfigApi.deleteDraft({projectId, channelId, draftName})`. There is no replacement.
:fire: Remove `projectConfigApi.publishDraft({projectId, channelId, draftName, userId})`. There is no replacement.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5480)

### Drop callback support for menuApi :fire:

:fire: Remove callback support for `menuApi` (`liServer.features.api('li-menus')`). Please use promises instead.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5503)

### Drop callback support for groupsApi :fire:

:fire: Remove callback support for `groupsApi` (`liServer.features.api('li-groups')`). Please use promises instead.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5512)

### serverConfig.policies is not supported anymore :fire:

:fire: `serverConfig.policies` is no longer supported.

Please use `projects[].groups[].policies` in your seeding config, or define the policies through the UI by visiting
Project Administration -> Groups -> [Group] -> Edit Permissions.

See [Project Seeding API]({{< ref "/customising/server/project-seeding-api" >}}) documentation for further details.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5505)

### Elasticsearch client.get needs projectId :fire:

:fire: `elasticsearchClient.get()` needs to pass `the projectId`

Example:
```js
liServer.features.api('li-indexing').get({
  handle: 'your-handle',
  id: `${projectId}:${documentId}` // <----- pass projectId here
})
```

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5465)

### Access Control feature adds permission checks + input validation :fire:

:fire: `liServer.features.api('li-access-control').verifyAction()` additionally handles restricted user and content type permission checks, in addition to the existing registered access control hooks. If you have issues, please contact us.
:fire: `liServer.features.api('li-access-control')` API methods now have strict input validation. If you have issues, please contact us.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5440)

### Moved Server Config search.host :fire:

:fire: Removed Server Config `search.host` (used by the Elasticsearch Client). Please use `search.elasticsearchClient.node` instead.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5540)

### Removed Editor metadataLifecycle :fire:

:fire: Removed Editors `coreApi.metadataLifecycle` function, please use [contentType.defaultMetadata](https://docs.livingdocs.io/reference/project-config/content-types/#default-metadata) instead

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6678)

### Removed li-authentication-sso Authentication :fire:

:fire: Remove legacy `li-authentication-sso` authentication

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6684)

### Removed groupsApi.getScopesOfUser :fire:

:fire: Remove `liServer.features.api('li-groups').getScopesOfUser()`

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5565)

### Groups API :fire:

:fire: Moved `groupsApi.setAccessPolicy` to `groupsApi.setPermissions`
:fire: Use `groupsApi.setPermissions` with the parameters `data: {policies: [], scope: ''}`
:fire: `groupsApi.updateGroup` does not support scope parameter anymore.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5632)

### Metadata Plugin li-issue-management

- :fire: metadata type `li-issue-management`: requires `finiteProducts` in the root of the project config from now on. See [Documentation]({{< ref "/reference/document/metadata/metadata-plugin-list#li-issue-management" >}})

**Project Config**

```diff
   v: 2,
+  finiteProducts: [{
+    issueContentType: 'issue',
+    issueMemberContentTypes: ['page']
+  }],
   ...
```

- :fire: metadata type `li-issue-management`: requires `config: {index: true},` metadata config from now on. See [Documentation]({{< ref "/reference/document/metadata/metadata-plugin-list#li-issue-management" >}})

```diff
   handle: 'local',
   type: 'li-issue-management',
+  config: {index: true},
   ui: {
```

Adding `index: true` config requires elasticsearch to be re-indexed:

```bash
livingdocs-server elasticsearch-index --handle=li-documents -y
```

## Deprecations

### Back to Standard

:exclamation: Check the [Back to Standard Roadmap]({{< ref "/customising/back-to-standard" >}}) and inform you about important upcoming deprecations and breaking changes and reasons.

### Porting `useAsTitle` to `displayTitlePattern`
The `useAsTitle` option has been deprecated and **will be removed in `release-2023-07`**.
If you are currently using an `li-text` plugin with `useAsTitle: true`, please migrate to [displayTitlePattern]({{< ref "/reference/project-config/content-types#displaytitlepattern" >}}). You will want to remove the `useAsTitle` from the metadata and introduce `displayTitlePattern: '{{metadata.title}}'` to maintain the functionality, where `title` is handle for an `li-text` plugin. Please bear in mind that Editor toolbar behaviour will change, and it will no longer be possible to change the title of the article from the toolbar. The title will be editable in the `li-text` plugin. Please also make sure that `document.title` is no longer accessed in custom code, e.g. in Includes since this would leak the internal Working Title to the public.

### Rename mediaIndex to indexing

Rename `your-metadata-plugin.mediaIndex` to `your-metadata-plugin.indexing`


```js
// migrate your metadata plugins from
mediaIndex: {
  enabled: true,
  index_behavior: []
}

// to
indexing: {
  enabled: true,
  behavior: []
}
```

Breaking Change: `release-2023-07`

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5365)


### behaveAsLiImage

Deprecate `behaveAsLiImage` for custom metadata plugins. Replace your custom image metadata plugins with `li-image`

Breaking Change: `release-2023-07`

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6695)

## APIs :gift:

### livingdocs-server secret-show

Introduce `livingdocs-server secret-show` CLI task to display the currently defined `secretRefs` of a project


## Other Changes

### Design
* [Design/Color Update](https://github.com/livingdocsIO/livingdocs-editor/pull/6610)
* [Bundle-Thumbs](https://github.com/livingdocsIO/livingdocs-editor/pull/6580)
* [Toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6041)
* [Scrollbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6522)
* [Distribution Flyouts](https://github.com/livingdocsIO/livingdocs-editor/pull/6439)
* [Icons V2](https://github.com/livingdocsIO/livingdocs-server/pull/5177)
* [Icons V2](https://github.com/livingdocsIO/livingdocs-editor/pull/6402)

### Features
* [Draft Delivery Builds](https://github.com/livingdocsIO/livingdocs-server/pull/5550)
* [Display Filter: li-team](https://github.com/livingdocsIO/livingdocs-editor/pull/6577)

### Improvements
* [Redis: Make the Job Queue waitNext more reliable](https://github.com/livingdocsIO/livingdocs-server/pull/5447)
* [Postgres: Improve transaction error handling](https://github.com/livingdocsIO/livingdocs-server/pull/5467)
* [Postgres: Do not close pool clients on query errors](https://github.com/livingdocsIO/livingdocs-server/pull/5438)
* [Postgres: Fix query performance with big tables](https://github.com/livingdocsIO/livingdocs-server/pull/5303)
* [Postgres: Restrict maximum query parameters (65000 max)](https://github.com/livingdocsIO/livingdocs-server/pull/5327)
* [Archive unused Content- and Media-Types](https://github.com/livingdocsIO/livingdocs-server/pull/5475)
* [Publish Control: allow manual publication date override before first publish](https://github.com/livingdocsIO/livingdocs-editor/pull/6643)
* [Statistics: Record last time a user did a request to the server](https://github.com/livingdocsIO/livingdocs-server/pull/5533)

### Bugfixes
* [Files: Add x-compressed-zip extension support](https://github.com/livingdocsIO/livingdocs-server/pull/5604)
* [Images: Image crops can't have negative coordinates](https://github.com/livingdocsIO/livingdocs-editor/pull/6734)
* [Document Search: Fix query cache behavior for li-document-reference and li-document-references search](https://github.com/livingdocsIO/livingdocs-editor/pull/6725)
* [Search: Only query configured Content Types](https://github.com/livingdocsIO/livingdocs-server/pull/5454)
* [Search: Fix support for arrays in draft query sort option](https://github.com/livingdocsIO/livingdocs-server/pull/5468)
* [Dashboards: Don't hide table dashboard flyouts on mouseleave](https://github.com/livingdocsIO/livingdocs-editor/pull/6515)
* [Dashboards: correctly apply stored display filter states on initial search](https://github.com/livingdocsIO/livingdocs-editor/pull/6440)
* [Dashboards: show quick publish on dashboards only when reasonable](https://github.com/livingdocsIO/livingdocs-editor/pull/6585)
* [Document Teasers: Allow document drop with any param handle for the reference](https://github.com/livingdocsIO/livingdocs-editor/pull/6595)
* [ImgIX: properly compute URL when server option stripPathPrefix is set](https://github.com/livingdocsIO/livingdocs-editor/pull/6428)
* [Includes: apply defaultParams correctly when having multiple services](https://github.com/livingdocsIO/livingdocs-editor/pull/6372)
* [Metadata Plugin: li-integer - correctly treat 0 value](https://github.com/livingdocsIO/livingdocs-editor/pull/6587)
* [Editable Teasers: Fix "Has local changes" behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/6627)
* [Data Migration: Fix memory leak in the report after a data migration](https://github.com/livingdocsIO/livingdocs-server/pull/5636)


## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-29017](https://github.com/advisories/GHSA-7jxr-cg7f-gpgv) patched in `vm2` v3.9.16
* [CVE-2023-0842](https://nvd.nist.gov/vuln/detail/CVE-2023-0842) patched in `xml2js` v0.5.0
* [CVE-2023-30547](https://github.com/advisories/GHSA-ch3r-j5x3-6q2m) patched in `vm2` v3.9.17

We are aware of the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Server.

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2023-0842](https://nvd.nist.gov/vuln/detail/CVE-2023-0842) patched in `xml2js` v0.5.0
* [CVE-2022-37603](https://github.com/advisories/GHSA-3rfm-jhwj-7488) patched in `webpack` v5.76.0

We are aware of the following vulnerabilities in the Livingdocs Editor:
* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Editor because `rangy` module is scoped in the `livingdocs-framework` and not exposed to the users.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v226.3.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v226.3.14): fix: desk-net status sync back without config
- [v226.3.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v226.3.13): fix(reports): report concurrent users only when concurrent billing is enabled
- [v226.3.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v226.3.12): fix(logging): Make dev string formatter more reliable with custom input

### Livingdocs Editor Patches
- [v94.10.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.36): fix(table-dashboard): Don't check for dashboard source updates
- [v94.10.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.35): fix(document creation): set metadata title property with useAsTitle during creation
- [v94.10.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.34): fix(editable teasers): apply overrides when inserting a component from clipboard
- [v94.10.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.33): fix(publish control): don't show publish/unpublish buttons in wrong state until panel reopen
- [v94.10.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.32): fix(teaser preview): Layout
- [v94.10.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.31): fix(display filters): don't render container for listV2 filters with no options
- [v94.10.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.30): fix(billing): show concurrents only if reported
- [v94.10.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.29): fix(distribution planning): return to correct state after opening an article from distribution planning screen
- [v94.10.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.28): fix(distribution planning): don't show proposals section when not used
- [v94.10.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.27): fix(home screen): show tasks again after query optimization
- [v94.10.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.26): fix(buy-in): consider editable config in dashboard cell
- [v94.10.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.25): fix(home screen): load tasks only if feature enabled
- [v94.10.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.24): fix(distribution-planning): Clear metadata value using null


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
