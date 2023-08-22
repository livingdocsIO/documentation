---
type: release-notes
title: September 2023 Release
description: Technical Release Notes for release-2023-09
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-09/
  - /operations/releases/release-2023-09/release-2023-09/
---

{{< release-header
  title="September 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-09"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [allow async afterConversion](https://github.com/livingdocsIO/livingdocs-server/pull/6057)
* [Disable request retries in development proxy](https://github.com/livingdocsIO/livingdocs-editor/pull/7332)
* [Add public-api:cross-project scope to api client list](https://github.com/livingdocsIO/livingdocs-editor/pull/7330)
* [Fix status flicker](https://github.com/livingdocsIO/livingdocs-editor/pull/7331)
* [fix(deps): update dependency aws-sdk from 2.1440.0 to v2.1441.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6061)
* [Remove `li-media-language` metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/6054)
* [Prevent metadata `onUpdate` hook from causing an infinite loop in the editor when saving](https://github.com/livingdocsIO/livingdocs-editor/pull/7188)
* [Add `crossProjectContentSearch` display filter](https://github.com/livingdocsIO/livingdocs-editor/pull/7319)
* [Fix hidden dorpdown in ld-modal](https://github.com/livingdocsIO/livingdocs-editor/pull/7325)
* [Show asset info for translated media library assets](https://github.com/livingdocsIO/livingdocs-editor/pull/7322)
* [fix(button group): Spacing](https://github.com/livingdocsIO/livingdocs-editor/pull/7316)
* [Anchor Linking](https://github.com/livingdocsIO/livingdocs-server/pull/6048)
* [fix(tasks): listen to cancel event](https://github.com/livingdocsIO/livingdocs-editor/pull/7311)
* [Remove legacy custom preview](https://github.com/livingdocsIO/livingdocs-editor/pull/7318)
* [Allow dragging inbox items to another document](https://github.com/livingdocsIO/livingdocs-editor/pull/7286)
* [Display selection in minimal style li-document-reference](https://github.com/livingdocsIO/livingdocs-editor/pull/7317)
* [Reference plugin feature parity](https://github.com/livingdocsIO/livingdocs-editor/pull/7274)
* [Reference plugin feature parity](https://github.com/livingdocsIO/livingdocs-server/pull/6030)
* [Support cross-project linking in Li-Tree and Inline Links](https://github.com/livingdocsIO/livingdocs-editor/pull/7313)
* [Improve i18n support](https://github.com/livingdocsIO/livingdocs-editor/pull/7309)
* [Add multi-lang label for distribution table team cell](https://github.com/livingdocsIO/livingdocs-editor/pull/7298)
* [Breaking: Remove Legacy Dashboards & app.filters.* support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)
* [Reset integer filter when empty input](https://github.com/livingdocsIO/livingdocs-editor/pull/7314)
* [fix(deps): update dependency aws-sdk from 2.1439.0 to v2.1440.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6056)
* [Support placeholder in integer filter](https://github.com/livingdocsIO/livingdocs-editor/pull/7312)
* [Anchor linking](https://github.com/livingdocsIO/livingdocs-editor/pull/7299)
* [Cross Project Content Sharing - Part 1](https://github.com/livingdocsIO/livingdocs-server/pull/6035)
* [Show expired token state on api client list](https://github.com/livingdocsIO/livingdocs-editor/pull/7308)
* [fix(deps): update dependency sass from 1.66.0 to v1.66.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7310)
* [Includes with Duplicate Filtering](https://github.com/livingdocsIO/livingdocs-editor/pull/7229)
* [Includes with Duplicate Filtering](https://github.com/livingdocsIO/livingdocs-server/pull/5944)
* [fix(deps): update dependency sass from 1.65.1 to v1.66.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7306)
* [Ticker collaboration](https://github.com/livingdocsIO/livingdocs-editor/pull/7303)
* [Ticker properties panel](https://github.com/livingdocsIO/livingdocs-editor/pull/7295)
* [Show and update value for li-meta-integer-filter when there is no dataProvider](https://github.com/livingdocsIO/livingdocs-editor/pull/7302)
* [Remove `propertyConfig.config.behaveAsLiImage` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7307)
* [Fix openid connect email sync](https://github.com/livingdocsIO/livingdocs-server/pull/6050)
* [fix(deps): update dependency aws-sdk from 2.1438.0 to v2.1439.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6052)
* [Publish Control: Improve Visual Clarity](https://github.com/livingdocsIO/livingdocs-editor/pull/7292)
* [Media Upload: show filename in upload list](https://github.com/livingdocsIO/livingdocs-editor/pull/7125)
* [`li-scope-list` without prop mutations](https://github.com/livingdocsIO/livingdocs-editor/pull/7124)
* [li-document-reference fixes and improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/7300)
* [fix(deps): update dependency aws-sdk from 2.1435.0 to v2.1438.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6037)
* [Add French and Italian to translatable strings](https://github.com/livingdocsIO/livingdocs-editor/pull/7278)
* [Add li-meta-string-list-filter and li-meta-enum-filter](https://github.com/livingdocsIO/livingdocs-editor/pull/7294)
* [Add more example filters (li-meta-string-list-filter)](https://github.com/livingdocsIO/livingdocs-server/pull/6044)
* [Fix user identities on admin screen](https://github.com/livingdocsIO/livingdocs-editor/pull/7291)
* [Add "Go to" action to table dashboard context menu when in sidebar](https://github.com/livingdocsIO/livingdocs-editor/pull/7287)
* [fix(deps): update dependency pg from 8.11.2 to v8.11.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6046)
* [Fix user identities on admin screen](https://github.com/livingdocsIO/livingdocs-server/pull/6042)
* [fix(deps): update dependency sharp from 0.32.4 to v0.32.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6041)
* [fix(deps): update dependency cypress from 12.17.3 to v12.17.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7290)
* [fix(deps): update dependency @livingdocs/framework from 25.1.7 to v25.1.8 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7289)
* [Improvement/release polish](https://github.com/livingdocsIO/livingdocs-editor/pull/7282)
* [Add indexing for li-imatrics-nlp-tags, li-retresco and li-desknet-integration](https://github.com/livingdocsIO/livingdocs-server/pull/6039)
* [Cross Project Content Sharing - Part 1](https://github.com/livingdocsIO/livingdocs-editor/pull/7279)
* [Support translatable tags label in man navigation](https://github.com/livingdocsIO/livingdocs-editor/pull/7284)
* [Metadata: li-image drag & drop](https://github.com/livingdocsIO/livingdocs-editor/pull/7248)
* [Add li-meta-text-filter example config](https://github.com/livingdocsIO/livingdocs-server/pull/6034)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/6038)
* [fix(li-resource-select): show results when multiple documents were found](https://github.com/livingdocsIO/livingdocs-editor/pull/7277)
* [Improve French and Italian translations](https://github.com/livingdocsIO/livingdocs-editor/pull/7276)
* [fix(deps): update dependency aws-sdk from 2.1434.0 to v2.1435.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6032)
* [Use ticker metadata Plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/7273)
* [Ticker config](https://github.com/livingdocsIO/livingdocs-server/pull/6029)
* [Add translation block for translatable strings so the translation script will pick up these translations](https://github.com/livingdocsIO/livingdocs-editor/pull/7267)
* [Add French and Italian translations](https://github.com/livingdocsIO/livingdocs-editor/pull/7269)
* [fix(deps): update dependency pdfjs-dist from 3.8.162 to v3.9.179 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7244)
* [fix(deps): update dependency aws-sdk from 2.1433.0 to v2.1434.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6027)
* [Media library sidepanel](https://github.com/livingdocsIO/livingdocs-editor/pull/7257)
* [fix(deps): update dependency lru-cache from 10.0.0 to v10.0.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6028)
* [fix(deps): update dependency aws-sdk from 2.1432.0 to v2.1433.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6024)
* [Remove support for `legacyFilters` property in `searchManager.searchPublications()`](https://github.com/livingdocsIO/livingdocs-server/pull/6002)
* [Fix deleted user error during login](https://github.com/livingdocsIO/livingdocs-server/pull/6022)
* [Fix images within the MediaLibrary change the size when Sharp is updated](https://github.com/livingdocsIO/livingdocs-server/pull/6016)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/6019)
* [fix(deps): update dependency aws-sdk from 2.1430.0 to v2.1431.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6013)
* [Don't update media state for components without media](https://github.com/livingdocsIO/livingdocs-editor/pull/7265)
* [feat(i18n): apply same format to all i18n translation blocks](https://github.com/livingdocsIO/livingdocs-editor/pull/7264)
* [Add li-document-references-filter](https://github.com/livingdocsIO/livingdocs-editor/pull/7231)
* [Add li-document-references-filter example config](https://github.com/livingdocsIO/livingdocs-server/pull/5959)
* [Remove `li-preview` feature sources](https://github.com/livingdocsIO/livingdocs-server/pull/6008)
* [Enforce Project handle verification](https://github.com/livingdocsIO/livingdocs-server/pull/5935)
* [chore(deps): update dependency @google-cloud/translate from 7.2.2 to v8 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6014)
* [fix(deps): update babel from 7.22.9 to v7.22.10 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7263)
* [Properties Panel State Management](https://github.com/livingdocsIO/livingdocs-editor/pull/7227)
* [fix(display filter): fix sort filter](https://github.com/livingdocsIO/livingdocs-editor/pull/7258)
* [fix(display filter): fix sort filter](https://github.com/livingdocsIO/livingdocs-editor/pull/7258)
* [Refactor li-link-edit and li-tree-link](https://github.com/livingdocsIO/livingdocs-editor/pull/7240)
* [Dashboard Source no longer queries by user ID](https://github.com/livingdocsIO/livingdocs-server/pull/6007)
* [fix(deps): update dependency pino-http from 8.3.3 to v8.4.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6006)
* [fix(deps): update dependency dedent from 1.3.0 to v1.5.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7247)
* [fix(deps): update dependency @elastic/elasticsearch8 from 8.8.1 to v8.9.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5965)
* [fix(deps): update dependency @livingdocs/framework from 25.1.6 to v25.1.7 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7256)
* [fix(deps): update dependency @livingdocs/framework from 25.1.6 to v25.1.7 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5998)
* [Expose lastPublicationDate, significantPublicationDate and visiblePublicationDate on document index](https://github.com/livingdocsIO/livingdocs-server/pull/5991)
* [fix(deps): update dependency aws-sdk from 2.1426.0 to v2.1428.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5988)
* [Switch Webpack devtool setting to have less warnings](https://github.com/livingdocsIO/livingdocs-editor/pull/7252)
* [The blob-store createReadStream returns a promise, await it](https://github.com/livingdocsIO/livingdocs-server/pull/5989)
* [Metadata: rewrite li-image UI to Vue](https://github.com/livingdocsIO/livingdocs-editor/pull/7232)
* [Metadata: remove compatibility mode for li-text (ui.components and ui.config.rows)](https://github.com/livingdocsIO/livingdocs-editor/pull/7249)
* [fix(deps): update dependency sass from 1.64.1 to v1.64.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7251)
* [fix(deps): update dependency pg from 8.11.1 to v8.11.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5986)
* [fix(deps): update dependency dedent from 1.3.0 to v1.5.1 (master) - autoclosed](https://github.com/livingdocsIO/livingdocs-server/pull/5983)
* [fix(deps): update dependency aws-sdk from 2.1425.0 to v2.1426.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5984)
* [Improvement/user avatar and badge](https://github.com/livingdocsIO/livingdocs-editor/pull/7245)
* [Directive Areas: manage media-state per directive, move char-limit to directive-area](https://github.com/livingdocsIO/livingdocs-editor/pull/7223)
* [Editor Canvas UI: Show doc-link and doc-image UI at the correct position](https://github.com/livingdocsIO/livingdocs-editor/pull/7242)
* [fix(deps): update dependency aws-sdk from 2.1422.0 to v2.1425.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5966)
* [fix(deps): update dependency dedent from 1.2.0 to v1.3.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5973)
* [fix(document import): copies metadata on drag](https://github.com/livingdocsIO/livingdocs-server/pull/5977)
* [Prevent unnecessary saves after conflict resolution](https://github.com/livingdocsIO/livingdocs-editor/pull/7207)
* [extend openid extractproject with userId](https://github.com/livingdocsIO/livingdocs-server/pull/5976)
* [Fix/three cosmetical fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7234)
* [add userId to extractProjects in openId Strategy](https://github.com/livingdocsIO/livingdocs-server/pull/5975)
* [fix(deps): update dependency dedent from 1.2.0 to v1.3.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7236)
* [fix(deps): update dependency pino from 8.14.1 to v8.14.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5972)
* [Also index systemMetadata properties present in the static mapping](https://github.com/livingdocsIO/livingdocs-server/pull/5967)
* [fix publish control button state](https://github.com/livingdocsIO/livingdocs-editor/pull/7230)
* [fix(deps): update dependency xml2js from 0.6.1 to v0.6.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5964)
* [Set document creation date based on firstPublicationDate during import](https://github.com/livingdocsIO/livingdocs-server/pull/5958)
* [Check Vue metadata component is in registry](https://github.com/livingdocsIO/livingdocs-editor/pull/7228)
* [Add li-document-reference-filter](https://github.com/livingdocsIO/livingdocs-editor/pull/7185)
* [fix(deps): update dependency aws-sdk from 2.1420.0 to v2.1422.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5947)
* [fix(deps): update dependency cloudinary from 1.38.0 to v1.39.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5948)
* [Add missing parameter `entriesPerPage` in `getSitemapIndex` call](https://github.com/livingdocsIO/livingdocs-server/pull/5950)
* [Ticker Panel Edit One Entry](https://github.com/livingdocsIO/livingdocs-editor/pull/7221)
* [Add UI language switch](https://github.com/livingdocsIO/livingdocs-editor/pull/7181)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/5946)
* [fix(deps): update dependency @livingdocs/framework from 25.1.5 to v25.1.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7222)
* [Inline Add: make it work correctly in ticker entry](https://github.com/livingdocsIO/livingdocs-editor/pull/7213)
* [Inline Add: focus component after insert again](https://github.com/livingdocsIO/livingdocs-editor/pull/7216)
* [Update modules to patch security vulnerabilities](https://github.com/livingdocsIO/livingdocs-editor/pull/7214)
* [Update `protobufjs`, `semver` and `word-wrap` to patch security vulnerabilities](https://github.com/livingdocsIO/livingdocs-server/pull/5940)
* [Prevent unnecessary component blurs when collaborating](https://github.com/livingdocsIO/livingdocs-editor/pull/7212)
* [fix(deps): update dependency sharp from 0.32.3 to v0.32.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5936)
* [fix(conflict view): Character Counter Overlap](https://github.com/livingdocsIO/livingdocs-editor/pull/7211)
* [Example Server: allow visiblePublicationDateOverride for ticker entries](https://github.com/livingdocsIO/livingdocs-server/pull/5934)
* [Fix/various small design fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7206)
* [fix(deps): update dependency fast-glob from 3.3.0 to v3.3.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7210)
* [fix(deps): update dependency fast-glob from 3.3.0 to v3.3.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5939)
* [fix(deps): update dependency sass from 1.64.0 to v1.64.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7209)
* [fix(deps): update dependency cloudinary from 1.37.3 to v1.38.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5932)
* [Add separate Ticker lane](https://github.com/livingdocsIO/livingdocs-editor/pull/7191)
* [fix(deps): update dependency cypress from 12.17.1 to v12.17.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7204)
* [Disable comments for data records](https://github.com/livingdocsIO/livingdocs-editor/pull/7200)
* [fix(deps): update dependency sass from 1.63.6 to v1.64.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7199)
* [fix(deps): update dependency nodemailer from 6.9.3 to v6.9.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5930)
* [doc-image: ensure UI (upload button) appears after selecting the image directive](https://github.com/livingdocsIO/livingdocs-editor/pull/7196)
* [fix(deps): update dependency dedent from 0.7.0 to v1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7137)
* [fix(publish control panel): padding added](https://github.com/livingdocsIO/livingdocs-editor/pull/7189)
* [fix(deps): update dependency pusher-js from 8.2.0 to v8.3.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7193)
* [fix(deps): update dependency dedent from 1.0.2 to v1.2.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5928)
* [fix(deps): update dependency dedent from 0.7.0 to v1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5879)
* [fix(deps): update dependency @google-cloud/storage from 6.11.0 to v6.12.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5898)
* [Fix Directive Areas: make the UI work correctly with multiple directives with UI in the same component](https://github.com/livingdocsIO/livingdocs-editor/pull/7190)
* [Metadata: remove ui.component config support for Livingdocs Metadata Plugins (`li-` prefixed)](https://github.com/livingdocsIO/livingdocs-server/pull/5811)
* [Fix image processing process crashes](https://github.com/livingdocsIO/livingdocs-server/pull/5917)
* [Remove Angular Metadata Support](https://github.com/livingdocsIO/livingdocs-editor/pull/7043)
* [fix(deps): update dependency webpack from 5.88.1 to v5.88.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7187)
* [Add failOn property to the image config for processing corrupt image files](https://github.com/livingdocsIO/livingdocs-server/pull/5909)
* [Fix live indexing throttling](https://github.com/livingdocsIO/livingdocs-server/pull/5908)
* [chore(deps): update dependency eslint from 8.44.0 to v8.45.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5905)
* [chore(deps): update dependency eslint from 8.44.0 to v8.45.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7180)
* [fix(deps): update dependency @livingdocs/framework from 25.1.4 to v25.1.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5903)
* [Show warning when drafts are in list](https://github.com/livingdocsIO/livingdocs-editor/pull/7172)
* [Ticker Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/7094)
* [Don't report drafts in inbox for empty lists](https://github.com/livingdocsIO/livingdocs-server/pull/5895)
* [Tag active release as latest](https://github.com/livingdocsIO/livingdocs-editor/pull/7174)
* [Improvement/image crop polish](https://github.com/livingdocsIO/livingdocs-editor/pull/7173)
* [Tag active release as latest](https://github.com/livingdocsIO/livingdocs-server/pull/5897)
* [Reset pagination when resetting dashboard filters](https://github.com/livingdocsIO/livingdocs-editor/pull/7164)
* [Don't provide format workaround for date sorting with Elasticsearch < 7.13.0](https://github.com/livingdocsIO/livingdocs-server/pull/5886)
* [fix(deps): update babel from 7.22.8 to v7.22.9 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7169)
* [Disable create button when insufficient permission](https://github.com/livingdocsIO/livingdocs-editor/pull/7162)
* [Take allowedChildren config into account for images from Media Sources.](https://github.com/livingdocsIO/livingdocs-editor/pull/7139)
* [Only replace include references when changing language](https://github.com/livingdocsIO/livingdocs-editor/pull/7148)
* [Support non-object values in select form (for li-integer)](https://github.com/livingdocsIO/livingdocs-editor/pull/7116)
* [Only allow editing of author mappings for current project](https://github.com/livingdocsIO/livingdocs-editor/pull/7151)
* [Limit editor back button target to specific allow list](https://github.com/livingdocsIO/livingdocs-editor/pull/7149)
* [Always show media library entry upload info](https://github.com/livingdocsIO/livingdocs-editor/pull/7150)
* [Normalise language label in metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/7147)
* [fix(deps): update dependency sharp from 0.32.1 to v0.32.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5888)
* [fix(deps): update dependency monaco-editor-webpack-plugin from 7.0.1 to v7.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7136)
* [Publish Control: Show publication date (and override) only when document has been published](https://github.com/livingdocsIO/livingdocs-editor/pull/7132)
* [Back Button: ignore kanban boards from potential navigation targets for more clarity](https://github.com/livingdocsIO/livingdocs-editor/pull/7140)
* [Upgrade @livingdocs/conf](https://github.com/livingdocsIO/livingdocs-server/pull/5883)
* [fix(deps): update dependency exifreader from 4.12.1 to v4.13.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5868)
* [liEmbedTeaserIncludeModal: log deprecation for inlineArticleList based filter config (informally deprecated 6 years ago)](https://github.com/livingdocsIO/livingdocs-editor/pull/7133)
* [fix(deps): update dependency https-proxy-agent from 7.0.0 to v7.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7135)
* [Document Inbox: generate displayFilters for target selection](https://github.com/livingdocsIO/livingdocs-editor/pull/7121)
* [german UI labels: crops -> zuschnitte](https://github.com/livingdocsIO/livingdocs-editor/pull/7085)
* [Provide format when sorting by date](https://github.com/livingdocsIO/livingdocs-server/pull/5870)
* [fix(deps): update dependency @livingdocs/framework from 25.1.3 to v25.1.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5872)
* [fix(deps): update dependency babel-loader from 9.1.2 to v9.1.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7127)
* [fix(deps): update dependency semver from 7.5.3 to v7.5.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5871)
* [Fix translations and multi upload form for several plugins](https://github.com/livingdocsIO/livingdocs-editor/pull/7117)
* [fix(deps): update dependency cypress from 12.16.0 to v12.17.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7120)
* [Deprecate Filter Sets](https://github.com/livingdocsIO/livingdocs-editor/pull/7109)
* [Make scope selection for tokens work again](https://github.com/livingdocsIO/livingdocs-editor/pull/7113)
* [fix(deps): update babel from 7.22.6 to v7.22.8 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7119)
* [fix(deps): update dependency openid-client from 5.4.2 to v5.4.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5867)
* [Fix labels for cut and copy buttons in multiselect panel](https://github.com/livingdocsIO/livingdocs-editor/pull/7110)
* [Fix cleanup metadata script](https://github.com/livingdocsIO/livingdocs-server/pull/5863)
* [Metadata Feedback: show different items in correct order](https://github.com/livingdocsIO/livingdocs-editor/pull/7108)
* [Set `first_publication_id` of scheduled documents when they get published](https://github.com/livingdocsIO/livingdocs-server/pull/5858)
* [Trim the title to 255 character max when importing documents](https://github.com/livingdocsIO/livingdocs-server/pull/5820)
* [Various li-user-avatar improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/7105)
* [Document Lists: show correct label on card after publish control schedule is removed](https://github.com/livingdocsIO/livingdocs-editor/pull/7101)
* [Notify user on Pusher connection error](https://github.com/livingdocsIO/livingdocs-editor/pull/7096)
* [Metadata Previews: show previews after errors and length feedback](https://github.com/livingdocsIO/livingdocs-editor/pull/7091)
* [Clone dashboard config before modifying](https://github.com/livingdocsIO/livingdocs-editor/pull/7086)
* [feat(ticker): allow metadata editing for ticker entries](https://github.com/livingdocsIO/livingdocs-editor/pull/7017)
* [fix(deps): update dependency aws-sdk from 2.1409.0 to v2.1410.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5852)
* [fix(deps): update dependency fastify from 4.18.0 to v4.19.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7072)
* [fix(deps): update dependency fastify from 4.19.1 to v4.19.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5851)
* [Document Lists: allow publish control scheduled documents](https://github.com/livingdocsIO/livingdocs-server/pull/5847)
* [Document Lists: allow publish control scheduled documents](https://github.com/livingdocsIO/livingdocs-editor/pull/7067)
* [Improvement/Document Preview](https://github.com/livingdocsIO/livingdocs-editor/pull/7082)
* [Dashboards: correctly error when custom tableDashboardCell takes editable prop](https://github.com/livingdocsIO/livingdocs-editor/pull/7079)
* [fix(deps): update dependency fast-glob from 3.2.12 to v3.3.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5841)
* [fix(deps): update dependency @isaacs/ttlcache from 1.4.0 to v1.4.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5844)
* [fix(deps): update dependency aws-sdk from 2.1408.0 to v2.1409.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5840)
* [Give labels better names](https://github.com/livingdocsIO/livingdocs-server/pull/5821)
* [Fix tooltip label translation](https://github.com/livingdocsIO/livingdocs-editor/pull/7068)
* [chore(deps): update dependency chai from 4.3.6 to v4.3.7 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5834)
* [fix(deps): update dependency @livingdocs/framework from 25.1.1 to v25.1.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7070)
* [Add unit tests for li-display-filter-list-v2](https://github.com/livingdocsIO/livingdocs-editor/pull/7064)
* [fix(deps): update dependency webpack from 5.88.0 to v5.88.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7066)
* [fix(deps): update dependency @livingdocs/framework from 25.1.0 to v25.1.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7065)
* [Fix quick publish](https://github.com/livingdocsIO/livingdocs-editor/pull/7055)
* [fix(deps): update dependency @livingdocs/framework from 25.0.6 to v25.0.8 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7059)
* [Upgrade to Vue 2.7.14](https://github.com/livingdocsIO/livingdocs-editor/pull/5666)
* [Update `nzz` downstream branch to `release-2023-09`](https://github.com/livingdocsIO/livingdocs-editor/pull/7054)
* [Support routing cache refresh by using isolatedCacheFactory](https://github.com/livingdocsIO/livingdocs-server/pull/5812)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2023-09`, read on.

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

## Features

TODO (featureset not 100% defined yet)


### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

### Metadata Plugins li-reference and li-reference-list

Please replace `li-reference` with `li-document-reference`, and `li-reference-list` with `li-document-references`. No data migration is required, but you will need to remove the `referenceType` property from the metadata plugin config if it is defined. If you encounter any other schema errors please see the documentation for the [`li-document-reference`]({{< ref "/reference/document/metadata/plugins/li-document-reference" >}}) and [`li-document-references`]({{< ref "/reference/document/metadata/plugins/li-document-references" >}}) plugins for further details.

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
