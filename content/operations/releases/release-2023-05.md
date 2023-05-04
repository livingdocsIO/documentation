---
type: release-notes
title: May 2023 Release
description: Release notes for release-2023-05
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-05/
  - /operations/releases/release-2023-05/release-2023-05/
---

{{< release-header
  title="May 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-05"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [improvement(overflow cells): Visual](https://github.com/livingdocsIO/livingdocs-editor/pull/6755)
* [Publish Control: date improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/6747)
* [add x-compressed-zip extension to mime](https://github.com/livingdocsIO/livingdocs-server/pull/5604)
* [Disable inline editing of table dashboard rows when a user is not allowed to edit documents](https://github.com/livingdocsIO/livingdocs-editor/pull/6766)
* [Re-introduce start of month use to compute billing for user occupation](https://github.com/livingdocsIO/livingdocs-server/pull/5647)
* [Dashboard access control](https://github.com/livingdocsIO/livingdocs-editor/pull/6762)
* [Add `Concurrent Users` column to billing table](https://github.com/livingdocsIO/livingdocs-editor/pull/6683)
* [Concurrent users reporting](https://github.com/livingdocsIO/livingdocs-server/pull/5597)
* [Extend documents server config with `realtimeUpdates` property](https://github.com/livingdocsIO/livingdocs-server/pull/5626)
* [Disable global Pusher events](https://github.com/livingdocsIO/livingdocs-server/pull/5627)
* [Terms & Privacy Statement for Signup from iframe](https://github.com/livingdocsIO/livingdocs-editor/pull/6759)
* [Simplify behaviors](https://github.com/livingdocsIO/livingdocs-editor/pull/6711)
* [Metadata Previews](https://github.com/livingdocsIO/livingdocs-editor/pull/6738)
* [Metadata Previews](https://github.com/livingdocsIO/livingdocs-server/pull/5618)
* [Access control improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/6749)
* [Access control improvements](https://github.com/livingdocsIO/livingdocs-server/pull/5632)
* [Only show my tasks if planning system enabled](https://github.com/livingdocsIO/livingdocs-editor/pull/6751)
* [fix(filter bar item): min height added](https://github.com/livingdocsIO/livingdocs-editor/pull/6752)
* [🐞 Fix a memory leak in the report after a data migration](https://github.com/livingdocsIO/livingdocs-server/pull/5636)
* [Display own requested and accepted tasks on home screen](https://github.com/livingdocsIO/livingdocs-editor/pull/6741)
* [Home Screen: My tasks config](https://github.com/livingdocsIO/livingdocs-server/pull/5588)
* [Add translations for `features/authentication` UI components](https://github.com/livingdocsIO/livingdocs-editor/pull/6721)
* [Improve use_issue composable performance and use the composable to load documents in li-meta-issue-management](https://github.com/livingdocsIO/livingdocs-editor/pull/6728)
* [Upgrade srcissors and improve crop normalization](https://github.com/livingdocsIO/livingdocs-editor/pull/6734)
* [Migrate history to vue](https://github.com/livingdocsIO/livingdocs-editor/pull/6496)
* [Update documents in tables on realtime update events](https://github.com/livingdocsIO/livingdocs-editor/pull/6729)
* [Add created and deleted realtime notifications](https://github.com/livingdocsIO/livingdocs-server/pull/5616)
* [Expose document version property in realtime notifications](https://github.com/livingdocsIO/livingdocs-server/pull/5613)
* [Fix e2e seeding for cypress](https://github.com/livingdocsIO/livingdocs-server/pull/5617)
* [Access Control Policies](https://github.com/livingdocsIO/livingdocs-server/pull/5565)
* [Support documentType wildcard policies to ease the migration](https://github.com/livingdocsIO/livingdocs-editor/pull/6731)
* [Search: correctly handle query caching](https://github.com/livingdocsIO/livingdocs-editor/pull/6725)
* [fix(vue component registry): don't register angular wrapper components when not needed](https://github.com/livingdocsIO/livingdocs-editor/pull/6722)
* [chore(deps): update dependency eslint from 8.38.0 to v8.39.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5610)
* [Multi Channel: fix dashboard / create dialog behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/6720)
* [fix(planning boards): enable only if planningSystem is enabled](https://github.com/livingdocsIO/livingdocs-editor/pull/6718)
* [Planning Boards: new dashboard type with a day/week stepper against bestDate](https://github.com/livingdocsIO/livingdocs-editor/pull/6694)
* [Example: daily & weekly planning boards](https://github.com/livingdocsIO/livingdocs-server/pull/5495)
* [Sync content and media types of static configs during server start](https://github.com/livingdocsIO/livingdocs-server/pull/5606)
* [Fix/Task Action Numberdot](https://github.com/livingdocsIO/livingdocs-editor/pull/6710)
* [Allow Retresco Re-enrich concurrency configuration via server configuration](https://github.com/livingdocsIO/livingdocs-server/pull/5601)
* [Fix/Breadcrumbs and Distribution Planning Cells](https://github.com/livingdocsIO/livingdocs-editor/pull/6638)
* [Upgrade `vm2` module to patch a security vulnerability](https://github.com/livingdocsIO/livingdocs-server/pull/5598)
* [Use document creation flow when author prefill config is empty V2](https://github.com/livingdocsIO/livingdocs-editor/pull/6709)
* [Use document creation flow when author prefill config is empty](https://github.com/livingdocsIO/livingdocs-editor/pull/6708)
* [fix(metadata): Keep automatic metadata source for fallback title](https://github.com/livingdocsIO/livingdocs-editor/pull/6702)
* [Issue Management UI/UX improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/6691)
* [Fix blob storage download logic when using Azure Blob Storage](https://github.com/livingdocsIO/livingdocs-server/pull/5591)
* [Improvement/Document Access Control Polish](https://github.com/livingdocsIO/livingdocs-editor/pull/6699)
* [Home Screen: My tasks columns with empty state](https://github.com/livingdocsIO/livingdocs-editor/pull/6700)
* [Display Filter li-team](https://github.com/livingdocsIO/livingdocs-editor/pull/6577)
* [Improvement/Moved Sections in Publish Control](https://github.com/livingdocsIO/livingdocs-editor/pull/6701)
* [Realtime update for issue/page/article status in issue navigation](https://github.com/livingdocsIO/livingdocs-editor/pull/6649)
* [Emit `document.publish` and `document.unpublish` also for the topic `private-documents-projectId=<id>`](https://github.com/livingdocsIO/livingdocs-server/pull/5564)
* [Draft delivery builds](https://github.com/livingdocsIO/livingdocs-server/pull/5550)
* [Remove legacy `li-authentication-sso` authentication](https://github.com/livingdocsIO/livingdocs-editor/pull/6684)
* [Add `secret-show` task, this task will printout all the secretRefs defined in a project](https://github.com/livingdocsIO/livingdocs-server/pull/5582)
* [Log deprecation for `behaveAsLiImage` configuration](https://github.com/livingdocsIO/livingdocs-editor/pull/6695)
* [Rewrite tasks to vue](https://github.com/livingdocsIO/livingdocs-editor/pull/6414)
* [Add support for delivery draftBuilds](https://github.com/livingdocsIO/livingdocs-editor/pull/6672)
* [Fix Display Filter: allow searching options by typing again](https://github.com/livingdocsIO/livingdocs-editor/pull/6687)
* [Working title expression replacement](https://github.com/livingdocsIO/livingdocs-server/pull/5528)
* [🍬 Log invalid metadata type in contentType[].publicationIndex config](https://github.com/livingdocsIO/livingdocs-server/pull/5570)
* [🔥 Remove coreApi.metadataLifecycle](https://github.com/livingdocsIO/livingdocs-editor/pull/6678)
* [fix(dashboard permissions): angular dashboard init correctly called](https://github.com/livingdocsIO/livingdocs-editor/pull/6675)
* [Translate `editor`, `tags`, `notifications`, `print`, `article`, `publish`, `metadata/plugins/forms`](https://github.com/livingdocsIO/livingdocs-editor/pull/6673)
* [Azure Blob Storage config Schema validation didn't include custom `computeKey()` function](https://github.com/livingdocsIO/livingdocs-server/pull/5555)
* [Issue navigation UI polish](https://github.com/livingdocsIO/livingdocs-editor/pull/6613)
* [Remove support for `search.host` server configuration](https://github.com/livingdocsIO/livingdocs-server/pull/5540)
* [Prevent syncing empty metadata title](https://github.com/livingdocsIO/livingdocs-editor/pull/6665)
* [Account for missing width/height in image cropper](https://github.com/livingdocsIO/livingdocs-editor/pull/6667)
* [Introducing user stats per request done against server](https://github.com/livingdocsIO/livingdocs-server/pull/5533)
* [Working Title: Handle copy&paste and don't sanitize anymore](https://github.com/livingdocsIO/livingdocs-editor/pull/6664)
* [Working-Title improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/6622)
* [Replace document scopes with document policies](https://github.com/livingdocsIO/livingdocs-editor/pull/6634)
* [Deprecate `useAsTitle` sync](https://github.com/livingdocsIO/livingdocs-editor/pull/6652)
* [Fix documents filters query for editor](https://github.com/livingdocsIO/livingdocs-server/pull/5536)
* [Publish Control: allow manual publication date override before first publish & visual clarity](https://github.com/livingdocsIO/livingdocs-editor/pull/6643)
* [Fix menu drag and drop behaviour](https://github.com/livingdocsIO/livingdocs-editor/pull/6646)
* [Fix axios metadata and filters serialization](https://github.com/livingdocsIO/livingdocs-editor/pull/6647)
* [Cache access control user details by project](https://github.com/livingdocsIO/livingdocs-server/pull/5534)
* [Ensure mentioneeIds is on all comment schemas](https://github.com/livingdocsIO/livingdocs-server/pull/5531)
* [Document Access Control Foundation](https://github.com/livingdocsIO/livingdocs-server/pull/5440)
* [`rel` property was being overwritten by the `partialLinkAttributes`](https://github.com/livingdocsIO/livingdocs-editor/pull/6641)
* [Remove not used editing API endpoint /hugo/print/royalty-recipients](https://github.com/livingdocsIO/livingdocs-server/pull/5525)


Improvements
* [Redis: Make the Job Queue waitNext more reliable](https://github.com/livingdocsIO/livingdocs-server/pull/5447)
* [Postgres: Improve transaction error handling](https://github.com/livingdocsIO/livingdocs-server/pull/5467)
* [Postgres: Do not close pool clients on query errors](https://github.com/livingdocsIO/livingdocs-server/pull/5438)
* [Postgres: Fix query performance with big tables](https://github.com/livingdocsIO/livingdocs-server/pull/5303)
* [Postgres: Restrict maximum query parameters (65000 max)](https://github.com/livingdocsIO/livingdocs-server/pull/5327)
* [Archive unused Content- and Media-Types](https://github.com/livingdocsIO/livingdocs-server/pull/5475)

Bugs
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

Design
* [Design/Color Update](https://github.com/livingdocsIO/livingdocs-editor/pull/6610)
* [Bundle-Thumbs](https://github.com/livingdocsIO/livingdocs-editor/pull/6580)
* [Toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6041)
* [Scrollbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6522)
* [Distribution Flyouts](https://github.com/livingdocsIO/livingdocs-editor/pull/6439)
* [Icons V2](https://github.com/livingdocsIO/livingdocs-server/pull/5177)
* [Icons V2](https://github.com/livingdocsIO/livingdocs-editor/pull/6402)

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

TODO

### Minimal

TODO


## Highlights

### Document Access Control

TODO: Description

* [Documentation](TODO)

### Planning System (Bundles)

TODO: Description

* [Documentation](TODO)

### Working Title

TODO: Description

* [Documentation](TODO)

### Publication/Draft Index

TODO: Description

* [Documentation](TODO)

### Home Screen - Part 2

TODO: Description

* [Documentation](TODO)

### Issue Management - Navigation

TODO: Description

* [Documentation](TODO)

### Metadata Preview

TODO: Description

* [Documentation](TODO)

### Concurrent License Model: Billing Report

TODO: Description

* [Documentation](TODO)


### Synced Table Dashboards

TODO: Description

* [Documentation](TODO)

### i18n - Editor available in German

TODO: Description

* [Documentation](TODO)








## Breaking Changes :fire:

:exclamation: Check the [Back to Standard Roadmap]({{< ref "/customising/back-to-standard" >}}) and inform you about important upcoming deprecations and breaking changes and reasons.

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

TODO: check migration

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


## Deprecations

:exclamation: Check the [Back to Standard Roadmap]({{< ref "/customising/back-to-standard" >}}) and inform you about important upcoming deprecations and breaking changes and reasons.

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

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5365)

## Patched Vulnerabilities

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

## Other Changes

### Features

### Improvements

### Bugfixes


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v226.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v226.3.5): fix(retresco): Add workaround to allow republish when data migrations or imports have created a draft, but no changes were applied to the document

### Livingdocs Editor Patches
- [v94.10.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.5): fix(use_issue): remove realtime update but update issue metadata when issue metadata changes in issue-management
- [v94.10.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.4): fix(dashboards): Fix compilation failure due to content type label
- [v94.10.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v94.10.3): fix(bundle management): Content Type Selection


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
