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
* [Add translations for `features/authentication` UI components](https://github.com/livingdocsIO/livingdocs-editor/pull/6721)
* [Improve use_issue composable performance and use the composable to load documents in li-meta-issue-management](https://github.com/livingdocsIO/livingdocs-editor/pull/6728)
* [fix(deps): update dependency jose from 4.14.1 to v4.14.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5624)
* [fix(deps): update dependency sass from 1.62.0 to v1.62.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6743)
* [fix(deps): update dependency aws-sdk from 2.1364.0 to v2.1365.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5621)
* [fix(deps): update dependency fastify from 4.15.0 to v4.16.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5622)
* [fix(deps): update dependency validate-scope from 1.2.0 to v1.3.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6739)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/5620)
* [Upgrade srcissors and improve crop normalization](https://github.com/livingdocsIO/livingdocs-editor/pull/6734)
* [Migrate history to vue](https://github.com/livingdocsIO/livingdocs-editor/pull/6496)
* [Update documents in tables on realtime update events](https://github.com/livingdocsIO/livingdocs-editor/pull/6729)
* [Add created and deleted realtime notifications](https://github.com/livingdocsIO/livingdocs-server/pull/5616)
* [Expose document version property in realtime notifications](https://github.com/livingdocsIO/livingdocs-server/pull/5613)
* [Fix e2e seeding for cypress](https://github.com/livingdocsIO/livingdocs-server/pull/5617)
* [fix(deps): update dependency aws-sdk from 2.1363.0 to v2.1364.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5615)
* [fix(deps): update dependency cloudinary from 1.36.1 to v1.36.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5614)
* [Access Control Policies](https://github.com/livingdocsIO/livingdocs-server/pull/5565)
* [Support documentType wildcard policies to ease the migration](https://github.com/livingdocsIO/livingdocs-editor/pull/6731)
* [Search: correctly handle query caching](https://github.com/livingdocsIO/livingdocs-editor/pull/6725)
* [fix(deps): update dependency aws-sdk from 2.1362.0 to v2.1363.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5611)
* [fix(vue component registry): don't register angular wrapper components when not needed](https://github.com/livingdocsIO/livingdocs-editor/pull/6722)
* [fix(deps): update dependency lru-cache from 9.1.0 to v9.1.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5612)
* [chore(deps): update dependency eslint from 8.38.0 to v8.39.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5610)
* [Multi Channel: fix dashboard / create dialog behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/6720)
* [fix(planning boards): enable only if planningSystem is enabled](https://github.com/livingdocsIO/livingdocs-editor/pull/6718)
* [Planning Boards: new dashboard type with a day/week stepper against bestDate](https://github.com/livingdocsIO/livingdocs-editor/pull/6694)
* [Example: daily & weekly planning boards](https://github.com/livingdocsIO/livingdocs-server/pull/5495)
* [Sync content and media types of static configs during server start](https://github.com/livingdocsIO/livingdocs-server/pull/5606)
* [Fix/Task Action Numberdot](https://github.com/livingdocsIO/livingdocs-editor/pull/6710)
* [fix(deps): update dependency aws-sdk from 2.1361.0 to v2.1362.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5603)
* [Allow Retresco Re-enrich concurrency configuration via server configuration](https://github.com/livingdocsIO/livingdocs-server/pull/5601)
* [fix(deps): update dependency webpack from 5.79.0 to v5.80.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6705)
* [Fix/Breadcrumbs and Distribution Planning Cells](https://github.com/livingdocsIO/livingdocs-editor/pull/6638)
* [fix(deps): update dependency jose from 4.14.0 to v4.14.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5602)
* [Upgrade `vm2` module to patch a security vulnerability](https://github.com/livingdocsIO/livingdocs-server/pull/5598)
* [Use document creation flow when author prefill config is empty V2](https://github.com/livingdocsIO/livingdocs-editor/pull/6709)
* [Use document creation flow when author prefill config is empty](https://github.com/livingdocsIO/livingdocs-editor/pull/6708)
* [fix(metadata): Keep automatic metadata source for fallback title](https://github.com/livingdocsIO/livingdocs-editor/pull/6702)
* [fix(deps): update dependency axios from 1.3.5 to v1.3.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5595)
* [fix(deps): update dependency axios from 1.3.5 to v1.3.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6704)
* [Issue Management UI/UX improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/6691)
* [Fix blob storage download logic when using Azure Blob Storage](https://github.com/livingdocsIO/livingdocs-server/pull/5591)
* [fix(deps): update dependency lru-cache from 9.0.3 to v9.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5589)
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
* [fix(deps): update dependency material-design-icons-svg from 3.2.0 to v3.3.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6697)
* [Fix Display Filter: allow searching options by typing again](https://github.com/livingdocsIO/livingdocs-editor/pull/6687)
* [fix(deps): update dependency @uirouter/angularjs from 1.0.30 to v1.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6689)
* [fix(deps): update dependency ioredis from 5.3.1 to v5.3.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5581)
* [fix(deps): update dependency sass from 1.60.0 to v1.62.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6666)
* [chore(deps): update dependency jose from 4.13.2 to v4.14.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6686)
* [fix(deps): update dependency jose from 4.13.2 to v4.14.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5580)
* [fix(deps): update dependency aws-sdk from 2.1358.0 to v2.1359.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5579)
* [Working title expression replacement](https://github.com/livingdocsIO/livingdocs-server/pull/5528)
* [🍬 Log invalid metadata type in contentType[].publicationIndex config](https://github.com/livingdocsIO/livingdocs-server/pull/5570)
* [fix(deps): update dependency cloudinary from 1.35.0 to v1.36.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5568)
* [fix(deps): update dependency @livingdocs/framework from 24.13.3 to v24.13.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6680)
* [fix(deps): update dependency lru-cache from 9.0.1 to v9.0.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5566)
* [fix(deps): update dependency cypress from 10.11.0 to v12 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6413)
* [🔥 Remove coreApi.metadataLifecycle](https://github.com/livingdocsIO/livingdocs-editor/pull/6678)
* [fix(deps): update dependency semver from 7.3.8 to v7.4.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6670)
* [fix(dashboard permissions): angular dashboard init correctly called](https://github.com/livingdocsIO/livingdocs-editor/pull/6675)
* [fix(deps): update dependency aws-sdk from 2.1356.0 to v2.1357.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5562)
* [fix(deps): update dependency jose from 4.13.1 to v4.13.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5561)
* [Translate `editor`, `tags`, `notifications`, `print`, `article`, `publish`, `metadata/plugins/forms`](https://github.com/livingdocsIO/livingdocs-editor/pull/6673)
* [fix(deps): update dependency xml2js from 0.4.23 to 0.5.0 [security] (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5547)
* [Azure Blob Storage config Schema validation didn't include custom `computeKey()` function](https://github.com/livingdocsIO/livingdocs-server/pull/5555)
* [fix(deps): update dependency aws-sdk from 2.1354.0 to v2.1356.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5552)
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
* [`mediaIndex` normalisation, renamed to `indexing`](https://github.com/livingdocsIO/livingdocs-server/pull/5365)
* [Dynamic metadata for Publication indexing](https://github.com/livingdocsIO/livingdocs-server/pull/5362)
* [Feat/Component Icons V2](https://github.com/livingdocsIO/livingdocs-server/pull/5177)
* [Feat/Component Icons V2](https://github.com/livingdocsIO/livingdocs-editor/pull/6402)
* [Default Editor configuration](https://github.com/livingdocsIO/livingdocs-editor/pull/6446)
* [Fix flashing List Assignment](https://github.com/livingdocsIO/livingdocs-editor/pull/6453)
* [Dashboards: correctly apply stored display filter states on initial search](https://github.com/livingdocsIO/livingdocs-editor/pull/6440)
* [Fix distribution planning date range queries to use newsroom timezone](https://github.com/livingdocsIO/livingdocs-server/pull/5344)
* [Add `li-buy-in` planning system guard](https://github.com/livingdocsIO/livingdocs-editor/pull/6444)
* [Fix typos in localisation](https://github.com/livingdocsIO/livingdocs-editor/pull/6434)
* [Fix/distribution flyouts](https://github.com/livingdocsIO/livingdocs-editor/pull/6439)
* [Remove some internal yargs apis](https://github.com/livingdocsIO/livingdocs-server/pull/5346)
* [Fix `li-meta-integer` display filter error](https://github.com/livingdocsIO/livingdocs-editor/pull/6433)
* [Data Migration Log Improvement](https://github.com/livingdocsIO/livingdocs-server/pull/5298)
* [Refactoring: Document Migration V2](https://github.com/livingdocsIO/livingdocs-server/pull/5334)
* [Fix broken display filters in legacy dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6431)
* [Update `@livingdocs/framework` to include fix for imgIX URL generation](https://github.com/livingdocsIO/livingdocs-editor/pull/6428)
* [Provides a server configuration to remove leading directory for ImgIX service](https://github.com/livingdocsIO/livingdocs-server/pull/5339)
* [Don't show unconfigured content types in distribution planning table dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/6417)
* [Handle import and webhook jobs immediately instead of using the waiting logic that requires less redis connections](https://github.com/livingdocsIO/livingdocs-server/pull/5333)
* [Make foreign key constraints deferrable](https://github.com/livingdocsIO/livingdocs-server/pull/5308)
* [Restrict maximum postgres query parameters](https://github.com/livingdocsIO/livingdocs-server/pull/5327)
* [Fix axios 1 http querystring compatibility](https://github.com/livingdocsIO/livingdocs-server/pull/5325)
* [Fix renovate platformAutomerge](https://github.com/livingdocsIO/livingdocs-editor/pull/6415)
* [Fix renovate platformAutomerge](https://github.com/livingdocsIO/livingdocs-server/pull/5317)
* [Fix query performance with big tables](https://github.com/livingdocsIO/livingdocs-server/pull/5303)
* [Fix: Publish Control Button changes state after publish / draft creation](https://github.com/livingdocsIO/livingdocs-editor/pull/6403)
* [Fix/distribution dashboard layout](https://github.com/livingdocsIO/livingdocs-editor/pull/6407)
* [Fix queue waiting delay when a queue did not return results](https://github.com/livingdocsIO/livingdocs-server/pull/5301)
* [multipleServices apply defaultParams](https://github.com/livingdocsIO/livingdocs-editor/pull/6372)
* [Emit publication.update event for publishControl changes](https://github.com/livingdocsIO/livingdocs-server/pull/5299)

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


## Deprecations

:exclamation: Check the [Back to Standard Roadmap]({{< ref "/customising/back-to-standard" >}}) and inform you about important upcoming deprecations and breaking changes and reasons.



## Other Changes

### Features

### Improvements

### Bugfixes


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
