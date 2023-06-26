---
type: release-notes
title: July 2023 Release
description: Technical Release Notes for release-2023-07
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-07/
  - /operations/releases/release-2023-07/release-2023-07/
---

{{< release-header
  title="July 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-07"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Dashboards: ensure no errors are logged when legacy dashboards are used](https://github.com/livingdocsIO/livingdocs-editor/pull/7047)
* [Vue Component Registry: seal registerComponent isCoreComponent upport after core components are registered](https://github.com/livingdocsIO/livingdocs-editor/pull/7045)
* [Upgrade to node 20, drop node 16](https://github.com/livingdocsIO/livingdocs-server/pull/5809)
* [Upgrade to node 20, drop node 16](https://github.com/livingdocsIO/livingdocs-editor/pull/7044)
* [fix(framework): update framework to 25.0.6](https://github.com/livingdocsIO/livingdocs-editor/pull/7041)
* [Do not change the working title if a display title pattern is configured](https://github.com/livingdocsIO/livingdocs-server/pull/5808)
* [Do not send title to server with displayTitlePattern config](https://github.com/livingdocsIO/livingdocs-editor/pull/7040)
* [Check version when updating media library metadata to prevent overwriting data modified using the Public API](https://github.com/livingdocsIO/livingdocs-editor/pull/7035)
* [Show publish / release status in the table dashboard correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/7028)
* [Fix relative date formatting](https://github.com/livingdocsIO/livingdocs-editor/pull/7026)
* [Optimize Scroll into View of focused components](https://github.com/livingdocsIO/livingdocs-editor/pull/7024)
* [fix(deps): update dependency @livingdocs/framework from 25.0.3 to v25.0.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7037)
* [Add more multi-language support for config labels that I missed](https://github.com/livingdocsIO/livingdocs-editor/pull/7032)
* [Debounce `_fetchDocumentList()` call from displayFilter changes](https://github.com/livingdocsIO/livingdocs-editor/pull/7011)
* [Fix text formatting dropdown](https://github.com/livingdocsIO/livingdocs-editor/pull/7006)
* [Publish vs Release labels](https://github.com/livingdocsIO/livingdocs-editor/pull/7018)
* [fix: use correct uiModel for embedded properties panel](https://github.com/livingdocsIO/livingdocs-editor/pull/7019)
* [fix(deps): update dependency @livingdocs/framework from 25.0.2 to v25.0.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7021)
* [fix(deps): update dependency sanitize-html from 2.10.0 to v2.11.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7013)
* [Migrate document copy to new project config](https://github.com/livingdocsIO/livingdocs-server/pull/5805)
* [fix(example servers): make sure teaser components outermost element i…](https://github.com/livingdocsIO/livingdocs-server/pull/5802)
* [fix(deps): update dependency sass from 1.63.5 to v1.63.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7015)
* [fix(deps): update dependency webpack from 5.87.0 to v5.88.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7014)
* [fix(deps): update dependency sass from 1.63.4 to v1.63.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7012)
* [Fix legacy search baseFilters](https://github.com/livingdocsIO/livingdocs-editor/pull/7010)
* [Add config for 'hide from form' for li-external-id](https://github.com/livingdocsIO/livingdocs-server/pull/5799)
* [fix(deps): update dependency cypress from 12.14.0 to v12.15.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7009)
* [Replace various test domains with example.com](https://github.com/livingdocsIO/livingdocs-server/pull/5800)
* [Support version check when updating media](https://github.com/livingdocsIO/livingdocs-server/pull/5793)
* [Ticker Feature](https://github.com/livingdocsIO/livingdocs-editor/pull/7004)
* [Document Previews](https://github.com/livingdocsIO/livingdocs-editor/pull/6978)
* [Ticker Feature](https://github.com/livingdocsIO/livingdocs-server/pull/5797)
* [Migrate some properties panel sections to Vue](https://github.com/livingdocsIO/livingdocs-editor/pull/6993)
* [Log deprecation with removal date for behaveAsLiImage configuration](https://github.com/livingdocsIO/livingdocs-editor/pull/7003)
* [Fix langLocale aliases in the draft search](https://github.com/livingdocsIO/livingdocs-server/pull/5796)
* [Distribution Planning Screens Polish](https://github.com/livingdocsIO/livingdocs-editor/pull/6904)
* [Support significantPublicationDate on document import](https://github.com/livingdocsIO/livingdocs-server/pull/5794)
* [Fix Metadata Previews: properly remove message event listeners on destroyed](https://github.com/livingdocsIO/livingdocs-editor/pull/7001)
* [Document Preview Functions](https://github.com/livingdocsIO/livingdocs-server/pull/5786)
* [Publish Control: honor contentType.print config for button labels (deprecate prepare publish flow)](https://github.com/livingdocsIO/livingdocs-editor/pull/6999)
* [fix(deps): update fastify (master) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/6971)
* [fix(deps): update dependency webpack from 5.80.0 to v5.87.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6997)
* [Prevent unsaved document data while processing remote updates](https://github.com/livingdocsIO/livingdocs-editor/pull/6934)
* [Fix error when transforming component](https://github.com/livingdocsIO/livingdocs-editor/pull/6992)
* [fix(deps): update dependency @livingdocs/framework from 25.0.1 to v25.0.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6994)
* [Translate any config label which has not been translated yet](https://github.com/livingdocsIO/livingdocs-server/pull/5782)
* [Translate any config label which has not been translated yet](https://github.com/livingdocsIO/livingdocs-editor/pull/6962)
* [improvement(publication state): Stacking](https://github.com/livingdocsIO/livingdocs-editor/pull/6991)
* [Make indexing bulk requests more reliable](https://github.com/livingdocsIO/livingdocs-server/pull/5788)
* [fix(deps): update dependency sass from 1.62.1 to v1.63.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6987)
* [fix(deps): update dependency lru-cache from 9.1.2 to v10 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5787)
* [fix(deps): update dependency style-loader from 3.3.2 to v3.3.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6982)
* [Translate more config labels](https://github.com/livingdocsIO/livingdocs-server/pull/5738)
* [Translate more config labels](https://github.com/livingdocsIO/livingdocs-editor/pull/6937)
* [Improve scroll behavior when moving components with shortcut](https://github.com/livingdocsIO/livingdocs-editor/pull/6961)
* [fix(deps): update dependency @fastify/reply-from from 9.0.1 to v9.0.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6974)
* [fix(deps): update dependency css-loader from 6.7.3 to v6.7.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6977)
* [chore(deps): update dependency jose from 4.14.1 to v4.14.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6967)
* [fix(deps): update dependency c8 from 7.14.0 to v8 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5784)
* [Distribution Planning: show team column in proposal/planned tables](https://github.com/livingdocsIO/livingdocs-editor/pull/6851)
* [Use `$t()` instead of undefined `this.$t()` in `li-unsaved-dialog`](https://github.com/livingdocsIO/livingdocs-editor/pull/6959)
* [Component Move: scroll components into view after move by keyboard](https://github.com/livingdocsIO/livingdocs-editor/pull/6940)
* [fix(deps): update dependency aws-sdk from 2.1395.0 to v2.1396.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5781)
* [fix(deps): update fastify (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6958)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/5780)
* [Canvas UI: Directive Areas w/ progress bar, doc-image, doc-link](https://github.com/livingdocsIO/livingdocs-editor/pull/6913)
* [fix/Publish Control Status](https://github.com/livingdocsIO/livingdocs-editor/pull/6955)
* [Remove `useAsTitle`](https://github.com/livingdocsIO/livingdocs-server/pull/5763)
* [Remove `useAsTitle`](https://github.com/livingdocsIO/livingdocs-editor/pull/6949)
* [Multiselect li-display-filter-list-v2](https://github.com/livingdocsIO/livingdocs-server/pull/5762)
* [fix(deps): update dependency aws-sdk from 2.1394.0 to v2.1395.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5777)
* [fix(deps): update dependency cloudinary from 1.37.0 to v1.37.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5775)
* [Multiselect li-display-filter-list-v2](https://github.com/livingdocsIO/livingdocs-editor/pull/6943)
* [Do not expose internal elasticsearch mapping keys to Search DSL](https://github.com/livingdocsIO/livingdocs-server/pull/5773)
* [fix(deps): update dependency aws-sdk from 2.1393.0 to v2.1394.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5769)
* [fix(deps): update dependency @livingdocs/framework from 24.15.0 to v24.15.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5768)
* [Upgrade `socket.io-parser` and `engine.io` to fix security vulnerabilities](https://github.com/livingdocsIO/livingdocs-editor/pull/6951)
* [Remove seed api](https://github.com/livingdocsIO/livingdocs-server/pull/5767)
* [fix(deps): update dependency cypress from 12.13.0 to v12.14.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6948)
* [Upgrade `vm2` to fix security vulnerabilities](https://github.com/livingdocsIO/livingdocs-server/pull/5764)
* [Public API Search Filters](https://github.com/livingdocsIO/livingdocs-server/pull/5744)
* [Fix display filters that are showing as active without a selected value](https://github.com/livingdocsIO/livingdocs-editor/pull/6945)
* [Persist UTC format for embargo date](https://github.com/livingdocsIO/livingdocs-editor/pull/6944)
* [Improve data migration hasActiveRevisionsWithDesign query](https://github.com/livingdocsIO/livingdocs-server/pull/5755)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/5754)
* [Cleanup postgres tables](https://github.com/livingdocsIO/livingdocs-server/pull/5751)
* [Add Api endpoint for incoming references for drafts](https://github.com/livingdocsIO/livingdocs-server/pull/5743)
* [don't overwrite url_to_published_content in desk-net api](https://github.com/livingdocsIO/livingdocs-server/pull/5748)
* [Translate more config labels](https://github.com/livingdocsIO/livingdocs-editor/pull/6909)
* [Translate more config labels](https://github.com/livingdocsIO/livingdocs-server/pull/5705)
* [fix: extend openIdConnect with state](https://github.com/livingdocsIO/livingdocs-server/pull/5741)
* [fix(properties panel): Spacings](https://github.com/livingdocsIO/livingdocs-editor/pull/6941)
* [fix(issue card): Header](https://github.com/livingdocsIO/livingdocs-editor/pull/6942)
* [Support new baseFilters schema in project config](https://github.com/livingdocsIO/livingdocs-editor/pull/6939)
* [Support new baseFilters schema in project config](https://github.com/livingdocsIO/livingdocs-server/pull/5742)
* [Translatable `li-tree` plugin](https://github.com/livingdocsIO/livingdocs-server/pull/5726)
* [fix(deps): update dependency aws-sdk from 2.1389.0 to v2.1390.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5739)
* [fix(deps): update dependency aws-sdk from 2.1388.0 to v2.1389.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5737)
* [Hide distributions from removed distribution channels](https://github.com/livingdocsIO/livingdocs-editor/pull/6914)
* [Support translatable label in metadata conflict message](https://github.com/livingdocsIO/livingdocs-editor/pull/6935)
* [fix(deps): update dependency @4tw/cypress-drag-drop from 2.2.3 to v2.2.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6936)
* [fix(deps): update dependency lru-cache from 9.1.1 to v9.1.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5736)
* [fix(deps): update dependency aws-sdk from 2.1386.0 to v2.1388.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5735)
* [fix(redirect): state given over URL](https://github.com/livingdocsIO/livingdocs-editor/pull/6931)
* [Update distributions optimistically](https://github.com/livingdocsIO/livingdocs-editor/pull/6924)
* [Dashboard language filter for `li-tree` document selection](https://github.com/livingdocsIO/livingdocs-editor/pull/6912)
* [Add reactivity for `li-tasks-toolbar-action` for tasks updates](https://github.com/livingdocsIO/livingdocs-editor/pull/6923)
* [Fix Editable Teaser override clearing](https://github.com/livingdocsIO/livingdocs-editor/pull/6925)
* [fix(deps): update dependency https-proxy-agent to v7.0.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6917)
* [fix(deps): update dependency c8 from 7.13.0 to v7.14.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5733)
* [fix(deps): update dependency cypress from 12.12.0 to v12.13.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6905)
* [Set distribution planning metadata value to null when removing last distribution](https://github.com/livingdocsIO/livingdocs-editor/pull/6921)
* [fix(deps): update dependency aws-sdk from 2.1384.0 to v2.1386.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5731)
* [Metadata plugin labels in multiple languages](https://github.com/livingdocsIO/livingdocs-editor/pull/6797)
* [Metadata plugin labels in multiple languages](https://github.com/livingdocsIO/livingdocs-server/pull/5680)
* [Pass oembed params to the parseResponse function of the oembed provider](https://github.com/livingdocsIO/livingdocs-server/pull/5721)
* [fix(deps): update dependency nodemailer from 6.9.2 to v6.9.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5734)
* [fix(deps): update dependency pg from 8.10.0 to v8.11.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5713)
* [Support camel case in systemdata for a Data Migration](https://github.com/livingdocsIO/livingdocs-server/pull/5727)
* [Remove proposals feature](https://github.com/livingdocsIO/livingdocs-editor/pull/6910)
* [Make `li-tree` translatable](https://github.com/livingdocsIO/livingdocs-editor/pull/6879)
* [fix(li-publish-control-embargo): respect setTimeout max delay value](https://github.com/livingdocsIO/livingdocs-editor/pull/6906)
* [Don't check for table dashboard updates when using dashboard source](https://github.com/livingdocsIO/livingdocs-editor/pull/6902)
* [Fix: set metadata title (useAsTitle) property during creation](https://github.com/livingdocsIO/livingdocs-editor/pull/6894)
* [Display Filter Bar: wait for async filters to be loaded before checking usability of listV2 filters](https://github.com/livingdocsIO/livingdocs-editor/pull/6896)
* [Search DSL](https://github.com/livingdocsIO/livingdocs-server/pull/5715)
* [desk-net status sync back without config](https://github.com/livingdocsIO/livingdocs-server/pull/5722)
* [Fix Editable Teasers: Correctly apply overrides when inserting from clipboard](https://github.com/livingdocsIO/livingdocs-editor/pull/6891)
* [Improvement/User Avatar Sizes](https://github.com/livingdocsIO/livingdocs-editor/pull/6862)
* [Improvement/Metadata View](https://github.com/livingdocsIO/livingdocs-editor/pull/6884)
* [Publish Control: don't show publish/unpublish buttons in wrong state until panel reopen](https://github.com/livingdocsIO/livingdocs-editor/pull/6885)
* [Fix/Teaser Preview](https://github.com/livingdocsIO/livingdocs-editor/pull/6880)
* [Display Filters: don't render empty container for listV2 filters with no options](https://github.com/livingdocsIO/livingdocs-editor/pull/6873)
* [Fix User Reports: show concurrents only when enabled](https://github.com/livingdocsIO/livingdocs-server/pull/5718)
* [fix(billing): show concurrents only if reported](https://github.com/livingdocsIO/livingdocs-editor/pull/6864)
* [Distribution Planning: fix return to distribution planning after article open](https://github.com/livingdocsIO/livingdocs-editor/pull/6861)
* [Fix kanban board initial search](https://github.com/livingdocsIO/livingdocs-editor/pull/6866)
* [fix(home screen): show tasks again after query optimization](https://github.com/livingdocsIO/livingdocs-editor/pull/6865)
* [`li-tree` design overhaul](https://github.com/livingdocsIO/livingdocs-editor/pull/6842)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/5716)
* [fix(deps): update dependency @fastify/reply-from from 9.0.1 to v9.0.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6859)
* [ViewManager refactoring](https://github.com/livingdocsIO/livingdocs-editor/pull/6841)
* [My Tasks: shorten query by omitting the contentType](https://github.com/livingdocsIO/livingdocs-editor/pull/6850)
* [Buy-In: consider editable config in dashboard cell](https://github.com/livingdocsIO/livingdocs-editor/pull/6853)
* [Home Screen My Tasks: load tasks only if feature enabled](https://github.com/livingdocsIO/livingdocs-editor/pull/6852)
* [fix(deps): update opentelemetry from 0.39.0 to v0.39.1 (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/5711)
* [fix(deps): update dependency semver from 7.5.0 to v7.5.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6849)
* [Allow removal of last distribution from a document on metadata form](https://github.com/livingdocsIO/livingdocs-editor/pull/6804)
* [fix(distribution planning): don't show proposals section when not used](https://github.com/livingdocsIO/livingdocs-editor/pull/6844)
* [Make dev string formatter more reliable with custom input](https://github.com/livingdocsIO/livingdocs-server/pull/5707)
* [fix(deps): update dependency aws-sdk from 2.1375.0 to v2.1377.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5697)
* [Fix retresco enrich date comparison](https://github.com/livingdocsIO/livingdocs-server/pull/5703)
* [fix(distribution planning): don't show time when add to planning for channels without time](https://github.com/livingdocsIO/livingdocs-editor/pull/6843)
* [Fix Legacy Dashboards: initial load takes cached filter value into account now](https://github.com/livingdocsIO/livingdocs-editor/pull/6830)
* [Copy target icon and label config](https://github.com/livingdocsIO/livingdocs-editor/pull/6800)
* [Copy target icon and label config](https://github.com/livingdocsIO/livingdocs-server/pull/5681)
* [fix(translation): layout search placeholder](https://github.com/livingdocsIO/livingdocs-editor/pull/6836)
* [Fix content type filters for secondary channels](https://github.com/livingdocsIO/livingdocs-server/pull/5698)
* [Do not include srcissors dev dependencies in editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6837)
* [fix(deps): update dependency cypress from 12.11.0 to v12.12.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6819)
* [Fix etc in li-document-best-date](https://github.com/livingdocsIO/livingdocs-editor/pull/6824)
* [Fix: disable publish buttons in publish control if document is locked](https://github.com/livingdocsIO/livingdocs-editor/pull/6828)
* [Working Title: do not enforce working title when displayTitlePattern is set](https://github.com/livingdocsIO/livingdocs-editor/pull/6796)
* [Distribution improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/6808)
* [🐞 Show Dashboard when ES and PG is in an inconsistent state](https://github.com/livingdocsIO/livingdocs-editor/pull/6820)
* [Support a server-side logout to invalidate the session](https://github.com/livingdocsIO/livingdocs-editor/pull/6813)
* [Support a server-side logout to invalidate the session](https://github.com/livingdocsIO/livingdocs-server/pull/5691)
* [Disable table dashboard update polling by default](https://github.com/livingdocsIO/livingdocs-editor/pull/6807)
* [Fix error when removing page from issue and improve E2E tests](https://github.com/livingdocsIO/livingdocs-editor/pull/6814)
* [🐞 Fix Broken Navigation after MediaLibrary Asset Upload](https://github.com/livingdocsIO/livingdocs-editor/pull/6812)
* [fix(deps): update dependency unsplash-js from 7.0.15 to v7.0.16 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5688)
* [Remove unused behavior file](https://github.com/livingdocsIO/livingdocs-editor/pull/6803)
* [Fix/Collab Cards](https://github.com/livingdocsIO/livingdocs-editor/pull/6810)
* [fix(deps): update dependency https-proxy-agent from 6.0.0 to v6.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6806)
* [fix(deps): update dependency aws-sdk from 2.1372.0 to v2.1373.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5687)
* [fix(deps): update dependency http-proxy-agent from 6.0.0 to v6.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6805)
* [Check if document is published before accessing properties in Retresco enrichment](https://github.com/livingdocsIO/livingdocs-server/pull/5682)
* [fix(table dashboard): Language Cell](https://github.com/livingdocsIO/livingdocs-editor/pull/6801)
* [Remove `displayTitlePattern` from article content type in Service](https://github.com/livingdocsIO/livingdocs-server/pull/5678)
* [fix(tasks): Deadline](https://github.com/livingdocsIO/livingdocs-editor/pull/6791)
* [Fix/Comments With Mentions](https://github.com/livingdocsIO/livingdocs-editor/pull/6794)
* [Fix missing translations](https://github.com/livingdocsIO/livingdocs-editor/pull/6780)
* [Enhance content type & media type sync logs with project id context](https://github.com/livingdocsIO/livingdocs-server/pull/5674)
* [♻️ Remove asset server from example-server](https://github.com/livingdocsIO/livingdocs-server/pull/5673)
* [fix(deps): update dependency aws-sdk from 2.1370.0 to v2.1372.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5668)
* [fix(deps): update dependency https-proxy-agent from 5.0.1 to v6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6790)
* [Refactor project config cache sync](https://github.com/livingdocsIO/livingdocs-server/pull/5665)
* [fix(document createion flow): still disabled in channels](https://github.com/livingdocsIO/livingdocs-editor/pull/6781)
* [fix(deps): update dependency pusher from 5.1.2 to v5.1.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5667)
* [Fix/Confirm Button](https://github.com/livingdocsIO/livingdocs-editor/pull/6779)
* [Remove realtime updates from use_issue and watch metadata updates instead](https://github.com/livingdocsIO/livingdocs-editor/pull/6750)
* [fix(deps): update dependency aws-sdk from 2.1369.0 to v2.1370.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5663)
* [Improvement/dashboards and tables](https://github.com/livingdocsIO/livingdocs-editor/pull/6754)
* [fix(deps): update dependency cloudinary from 1.36.2 to v1.36.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5660)
* [Improvement/Release Polish Dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6775)
* [Access control improvements - Part 3](https://github.com/livingdocsIO/livingdocs-server/pull/5657)
* [Add workaround to allow republish when data migrations do not apply changes to documents](https://github.com/livingdocsIO/livingdocs-server/pull/5653)
* [Fix occupations again, remove duplicate months](https://github.com/livingdocsIO/livingdocs-server/pull/5652)
* [Fix legacy dashboard compilation failure due to content type label](https://github.com/livingdocsIO/livingdocs-editor/pull/6773)
* [Design/Release Polish and Fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/6771)
* [Update defaultBranch to release-2023-07](https://github.com/livingdocsIO/livingdocs-editor/pull/6770)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2023-07`, read on.

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

## Breaking Changes 🔥

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

## Features

TODO (featureset not 100% defined yet)

- [Blog Post July Release TODO]()
- [Copy Target Icon and Label Config](#copy-target-icon-and-label-config)
- Advanced Search Filters Foundation
- [Display Filters ListV2 with OR combination](#display-filters-listv2-with-or-combination)
- Serach Filters on Public API
- Multilanguage Menu Tool
- Ticker Tool
- [UI and label config multi-language support](#ui-and-label-config-multi-language-support)

### Copy Target Icon and Label Config

The copy target config has been extended to support an icon and a label. [Learn more]({{< ref "/guides/editor/document-copy/index.md#setup-config" >}})

### Display Filters ListV2 with OR combination

The Filters ListV2 have been extended to support multiple selections. The selected values are `OR` combined in the search query. [Learn more]({{< ref "/guides/editor/custom-dashboard-filters/index.md#example-multi-value-filter" >}})

### UI and label config multi-language support

With this release, we introduced multi-language support for the UI and label config. Currently we support English and German as UI languages [Learn more]({{< ref "/content/guides/editor/multi-language-ui/index.md" >}})

## APIs :gift:

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
