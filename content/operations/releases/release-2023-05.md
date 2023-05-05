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
* [Use remote metadata source when updating metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/6633)
* [Add globally unique ID on Elasticsearch entries](https://github.com/livingdocsIO/livingdocs-server/pull/5465)
* [Use crop in getUpdatedAutomaticCrops() calculation](https://github.com/livingdocsIO/livingdocs-editor/pull/6624)
* [extend airship log](https://github.com/livingdocsIO/livingdocs-server/pull/5391)
* [Fix error where links to other documents would fail to save the document](https://github.com/livingdocsIO/livingdocs-editor/pull/6625)
* [Include `target` property to LinkDirective schema](https://github.com/livingdocsIO/livingdocs-server/pull/5507)
* [Chore/tags numberdots labels and breadcrumbs](https://github.com/livingdocsIO/livingdocs-editor/pull/6628)
* [Fix "Has local changes" for editable teasers](https://github.com/livingdocsIO/livingdocs-editor/pull/6627)
* [Drop callback support in group queries](https://github.com/livingdocsIO/livingdocs-server/pull/5512)
* [`li-meta-distribution-planning` design polish](https://github.com/livingdocsIO/livingdocs-editor/pull/6623)
* [feat(groups): Drop support for serverConfig.policies](https://github.com/livingdocsIO/livingdocs-server/pull/5505)
* [Enforce promises in menu api](https://github.com/livingdocsIO/livingdocs-server/pull/5503)
* [Prevent dashboard drag&drop error](https://github.com/livingdocsIO/livingdocs-editor/pull/6621)
* [Add `allowTitleEdit` component option for dashboard main cell](https://github.com/livingdocsIO/livingdocs-server/pull/5502)
* [Editable document title in dashboard main cell](https://github.com/livingdocsIO/livingdocs-editor/pull/6615)
* [Add `setTitle` patch operation on documents](https://github.com/livingdocsIO/livingdocs-server/pull/5496)
* [Sync document content types in afterProjectConfigChange hook](https://github.com/livingdocsIO/livingdocs-server/pull/5480)
* [Rotate npm read token](https://github.com/livingdocsIO/livingdocs-editor/pull/6616)
* [Add metadata search in publications](https://github.com/livingdocsIO/livingdocs-server/pull/5443)
* [Dashboards: require componentOptions.allowQuickPublish to show publish button in dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/6602)
* [Design/color update](https://github.com/livingdocsIO/livingdocs-editor/pull/6610)
* [Replace simple metalman useage with schema API generator](https://github.com/livingdocsIO/livingdocs-server/pull/5490)
* [New title component in document edit toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6600)
* [Add test case for corrupted image from imago](https://github.com/livingdocsIO/livingdocs-server/pull/5410)
* [Issue Navigation MVP](https://github.com/livingdocsIO/livingdocs-editor/pull/6548)
* [feat(content-types): add `displayTitlePattern` to content type schema](https://github.com/livingdocsIO/livingdocs-server/pull/5488)
* [Fix undefined session console error in li-comment-mention component](https://github.com/livingdocsIO/livingdocs-editor/pull/6599)
* [Return complete document from /documents/:id/parent-issue endpoint](https://github.com/livingdocsIO/livingdocs-server/pull/5439)
* [fix(teasers): allow document drop with any param handle for the reference](https://github.com/livingdocsIO/livingdocs-editor/pull/6595)
* [Allow links that can not be parsed by iframely in li-tree](https://github.com/livingdocsIO/livingdocs-editor/pull/6603)
* [Dashboards: consider componentOptions.allowQuickPublish for publish state cell](https://github.com/livingdocsIO/livingdocs-editor/pull/6601)
* [Archive unused content and media types](https://github.com/livingdocsIO/livingdocs-server/pull/5475)
* [Fix: show quick publish on dashboards only when reasonable](https://github.com/livingdocsIO/livingdocs-editor/pull/6585)
* [fix(dashboard): allow allowQuickPublish option for publish state dashboard cell](https://github.com/livingdocsIO/livingdocs-server/pull/5474)
* [Add `displayTitlePattern` to content type schema](https://github.com/livingdocsIO/livingdocs-server/pull/5471)
* [fix(li-integer): correctly treat 0 value](https://github.com/livingdocsIO/livingdocs-editor/pull/6587)
* [Test bundles](https://github.com/livingdocsIO/livingdocs-editor/pull/6575)
* [Fix support for arrays in draft query sort option](https://github.com/livingdocsIO/livingdocs-server/pull/5468)
* [Buy-In: improve wording](https://github.com/livingdocsIO/livingdocs-editor/pull/6581)
* [Fix/Bundle-Thumbs](https://github.com/livingdocsIO/livingdocs-editor/pull/6580)
* [Improve postgres transaction error handling](https://github.com/livingdocsIO/livingdocs-server/pull/5467)
* [Only query configured content types](https://github.com/livingdocsIO/livingdocs-server/pull/5454)
* [Wait for correct publish event in publication test](https://github.com/livingdocsIO/livingdocs-server/pull/5461)
* [Feat/Toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6041)
* [Show ldNotify message for bundle actions](https://github.com/livingdocsIO/livingdocs-editor/pull/6573)
* [Improve bundle dashboard cells](https://github.com/livingdocsIO/livingdocs-editor/pull/6571)
* [Don't render hidden context-menu actions](https://github.com/livingdocsIO/livingdocs-editor/pull/6563)
* [Make the job queue waitNext more reliable](https://github.com/livingdocsIO/livingdocs-server/pull/5447)
* [Fix redis xtrimdelivered](https://github.com/livingdocsIO/livingdocs-server/pull/5449)
* [Bundle panel in article metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/6562)
* [Support expectedOrActualPublicationDate filters in the search](https://github.com/livingdocsIO/livingdocs-server/pull/5448)
* [Apply menu list filters for table dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6558)
* [Do not close postgres pool clients on query errors](https://github.com/livingdocsIO/livingdocs-server/pull/5438)
* [fix(document selection): ensure filters are applied when using legacy dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6550)
* [Don't hide table dashboard flyouts on mouseleave](https://github.com/livingdocsIO/livingdocs-editor/pull/6515)
* [Ignore test files in metadata plugin loader](https://github.com/livingdocsIO/livingdocs-server/pull/5434)
* [fix: add favicon.ico and apple-touch-icon](https://github.com/livingdocsIO/livingdocs-editor/pull/6551)
* [Hide download button when no crops are available](https://github.com/livingdocsIO/livingdocs-editor/pull/6541)
* [Fix content type changes on documents](https://github.com/livingdocsIO/livingdocs-server/pull/5432)
* [Don't show metadata button for legacy publication](https://github.com/livingdocsIO/livingdocs-editor/pull/6540)
* [Remove support of .documents and .publications properties on search results](https://github.com/livingdocsIO/livingdocs-server/pull/5427)
* [Enable Publish Control for contentType `page` in project `magazine`](https://github.com/livingdocsIO/livingdocs-server/pull/5424)
* [Fix li-datetime filter date parsing](https://github.com/livingdocsIO/livingdocs-editor/pull/6531)
* [Search DSL](https://github.com/livingdocsIO/livingdocs-server/pull/5421)
* [Support caching for byIds dataloader](https://github.com/livingdocsIO/livingdocs-editor/pull/6528)
* [Fix/Scrollbar Issues](https://github.com/livingdocsIO/livingdocs-editor/pull/6522)
* [fix(creation flow): Allow content type boxes to text wrap their labels](https://github.com/livingdocsIO/livingdocs-editor/pull/6523)
* [Fix finite products config](https://github.com/livingdocsIO/livingdocs-server/pull/5417)
* [Issue navigation](https://github.com/livingdocsIO/livingdocs-server/pull/5413)
* [Remove app-level unnecessary scrollbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6519)
* [fix(display filter): ensure custom vue display filters get the config object](https://github.com/livingdocsIO/livingdocs-editor/pull/6512)
* [Replace Generic error (5XX) used for Password verification with `validationError`](https://github.com/livingdocsIO/livingdocs-server/pull/5409)
* [Show distribution toolbar action on bundles](https://github.com/livingdocsIO/livingdocs-editor/pull/6514)
* [Also anonymise in changes calls](https://github.com/livingdocsIO/livingdocs-server/pull/5404)
* [fix(create): correctly check if contentType is on defaultChannel](https://github.com/livingdocsIO/livingdocs-editor/pull/6510)
* [Add existing documents to bundle](https://github.com/livingdocsIO/livingdocs-editor/pull/6503)
* [Fix Desk-Net Schedule automatic placement errors due to schedule properties](https://github.com/livingdocsIO/livingdocs-editor/pull/6470)
* [fix: update framework version](https://github.com/livingdocsIO/livingdocs-server/pull/5400)
* [fix: bump framework version](https://github.com/livingdocsIO/livingdocs-editor/pull/6504)
* [Fix: contentType displayFilter works correctly with contentTypes not from the defaultChannel](https://github.com/livingdocsIO/livingdocs-editor/pull/6502)
* [Remove document from bundle](https://github.com/livingdocsIO/livingdocs-editor/pull/6497)
* [Shows scheduled doc tooltip ](https://github.com/livingdocsIO/livingdocs-editor/pull/6494)
* [Create and add documents to bundle](https://github.com/livingdocsIO/livingdocs-editor/pull/6488)
* [Use yyyy-MM-dd format date query parameter for Distribution Planning Schedule fixed date request](https://github.com/livingdocsIO/livingdocs-editor/pull/6471)
* [fix: remove 2nd line of buy-in empty state](https://github.com/livingdocsIO/livingdocs-editor/pull/6482)
* [chore(deps): update dependency eslint from 8.35.0 to v8.36.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5387)
* [Allow dashboard request to exclude revision content](https://github.com/livingdocsIO/livingdocs-server/pull/5382)
* [Don't load document content in table dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6474)
* [Fix Task List](https://github.com/livingdocsIO/livingdocs-editor/pull/6468)
* [Add `li-bundled-documents` metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/5381)
* [Bundle panel with empty state](https://github.com/livingdocsIO/livingdocs-editor/pull/6467)
* [Upgrade sharp to fix Premature close error](https://github.com/livingdocsIO/livingdocs-server/pull/5376)
* [Transform pitch to bundle](https://github.com/livingdocsIO/livingdocs-editor/pull/6464)
* [Handle pitch and bundle independent of publish control](https://github.com/livingdocsIO/livingdocs-editor/pull/6463)
* [Deprecate Identifier](https://github.com/livingdocsIO/livingdocs-server/pull/5289)



* [Update framework](https://github.com/livingdocsIO/livingdocs-editor/pull/6451)

* [Default Editor configuration](https://github.com/livingdocsIO/livingdocs-editor/pull/6446)
* [Fix flashing List Assignment](https://github.com/livingdocsIO/livingdocs-editor/pull/6453)



Improvements
* [Fix query performance with big tables](https://github.com/livingdocsIO/livingdocs-server/pull/5303)

Bugs
* [Dashboards: correctly apply stored display filter states on initial search](https://github.com/livingdocsIO/livingdocs-editor/pull/6440)
* [ImgIX: properly compute URL when server option stripPathPrefix is set](https://github.com/livingdocsIO/livingdocs-editor/pull/6428)
* [Restrict maximum postgres query parameters (65000 max)](https://github.com/livingdocsIO/livingdocs-server/pull/5327)
* [Includes: apply defaultParams correctly when having multiple services](https://github.com/livingdocsIO/livingdocs-editor/pull/6372)

Design
* [Fix/distribution flyouts](https://github.com/livingdocsIO/livingdocs-editor/pull/6439)
* [Feat/Component Icons V2](https://github.com/livingdocsIO/livingdocs-server/pull/5177)
* [Feat/Component Icons V2](https://github.com/livingdocsIO/livingdocs-editor/pull/6402)

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
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


## Highlights

### Document Access Control

TODO: Description

* [Documentation](TODO)

### Planning System (Bundles)

TODO: Description

* [Documentation](TODO)

### Working Title

Managing the title of an article inside and outside of the newsroom has been a challenge in the past. The public Article Title can change throughout an articles' lifetime. The Working Title feature allows for a clear separation between the internal newsroom title (Working Title) and the public Article Title in the published frontend. With this separation in the Editor, the public representation of the Article Title can be changed without affecting the internal Working Title.

However, in some cases it's desired to keep the Working Title and Article Title in sync. To accomplish that, we introduced the [displayTitlePattern]({{< ref "/reference/project-config/content-types#displaytitlepattern" >}}) Content Type configuration, which allows to compute a readonly version of the Working Title based on other metadata fields.

* [Documentation - displayTitlePattern]({{< ref "/reference/project-config/content-types#displaytitlepattern" >}})
* [PR Editor: Working Title behaviour](https://github.com/livingdocsIO/livingdocs-editor/pull/6600)
* [PR Editor: Working Title UI polish](https://github.com/livingdocsIO/livingdocs-editor/pull/6693)
* [PR Server: displayTitlePattern expression replacements](https://github.com/livingdocsIO/livingdocs-server/pull/5528)

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

Concurrent License Model has been introduced to Livingdocs. Users' requests to the Livingdocs Server are timestamped for reporting purposes. A background job aggregates  this timestamps in 30-minute buckets as concurrent users. Billing Report view will now report a new column with maximum concurrent users per month.

* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6683)
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/5597)

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


## Deprecations

:exclamation: Check the [Back to Standard Roadmap]({{< ref "/customising/back-to-standard" >}}) and inform you about important upcoming deprecations and breaking changes and reasons.

### Porting `useAsTitle` to `displayTitlePattern`
The `useAsTitle` option has been deprecated and **will be removed in `release-2023-07`**.
If you are currently using an `li-text` plugin with `useAsTitle: true`, please migrate to [displayTitlePattern]({{< ref "/reference/project-config/content-types#displaytitlepattern" >}}). You will want to remove the `useAsTitle` from the metadata and introduce `displayTitlePattern: '{{metadata.title}}'` to maintain the functionality, where `title` is handle for an `li-text` plugin. Please bear in mind that Editor toolbar behaviour will change, and it will no longer be possible to change the title of the article from the toolbar. The title will be editable in the `li-text` plugin. Please also make sure that `document.title` is no longer accessed in custom code, e.g. in Includes since this would leak the internal Working Title to the public.

### Rename mediaIndex to indexing

Rename `your-metadata-plugin.mediaIndex` to `your-metadata-plugin.indexing`

TODO:
- What does metadata.indexing already support? (only media library index?)
- Can I migrate metadata.publicationIndex to metadata.indexing? Is the behavior of the application different? What ES indexes are affected?
- Can I already influence the documenation index?
- * [Dynamic metadata for Publication indexing](https://github.com/livingdocsIO/livingdocs-server/pull/5362) -> what does contentTypes.metadata[{type: 'li-text', config: {index: true}}] do?

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

## Patched vulnerabilities

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
