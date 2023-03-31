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
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/5511)
* [fix(deps): update dependency aws-sdk from 2.1345.0 to v2.1347.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5510)
* [`li-meta-distribution-planning` design polish](https://github.com/livingdocsIO/livingdocs-editor/pull/6623)
* [fix(deps): update dependency @google-cloud/storage from 6.9.4 to v6.9.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5509)
* [feat(groups): Drop support for serverConfig.policies](https://github.com/livingdocsIO/livingdocs-server/pull/5505)
* [Enforce promises in menu api](https://github.com/livingdocsIO/livingdocs-server/pull/5503)
* [Prevent dashboard drag&drop error](https://github.com/livingdocsIO/livingdocs-editor/pull/6621)
* [Add `allowTitleEdit` component option for dashboard main cell](https://github.com/livingdocsIO/livingdocs-server/pull/5502)
* [Editable document title in dashboard main cell](https://github.com/livingdocsIO/livingdocs-editor/pull/6615)
* [Add `setTitle` patch operation on documents](https://github.com/livingdocsIO/livingdocs-server/pull/5496)
* [Sync document content types in afterProjectConfigChange hook](https://github.com/livingdocsIO/livingdocs-server/pull/5480)
* [Rotate npm read token](https://github.com/livingdocsIO/livingdocs-editor/pull/6616)
* [Add metadata search in publications](https://github.com/livingdocsIO/livingdocs-server/pull/5443)
* [fix(deps): update dependency exifreader from 4.11.1 to v4.12.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5494)
* [Dashboards: require componentOptions.allowQuickPublish to show publish button in dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/6602)
* [Design/color update](https://github.com/livingdocsIO/livingdocs-editor/pull/6610)
* [Replace simple metalman useage with schema API generator](https://github.com/livingdocsIO/livingdocs-server/pull/5490)
* [New title component in document edit toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6600)
* [Add test case for corrupted image from imago](https://github.com/livingdocsIO/livingdocs-server/pull/5410)
* [Issue Navigation MVP](https://github.com/livingdocsIO/livingdocs-editor/pull/6548)
* [fix(deps): update dependency aws-sdk from 2.1343.0 to v2.1344.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5489)
* [feat(content-types): add `displayTitlePattern` to content type schema](https://github.com/livingdocsIO/livingdocs-server/pull/5488)
* [Fix undefined session console error in li-comment-mention component](https://github.com/livingdocsIO/livingdocs-editor/pull/6599)
* [Return complete document from /documents/:id/parent-issue endpoint](https://github.com/livingdocsIO/livingdocs-server/pull/5439)
* [fix(teasers): allow document drop with any param handle for the reference](https://github.com/livingdocsIO/livingdocs-editor/pull/6595)
* [Allow links that can not be parsed by iframely in li-tree](https://github.com/livingdocsIO/livingdocs-editor/pull/6603)
* [Dashboards: consider componentOptions.allowQuickPublish for publish state cell](https://github.com/livingdocsIO/livingdocs-editor/pull/6601)
* [Archive unused content and media types](https://github.com/livingdocsIO/livingdocs-server/pull/5475)
* [fix(deps): update dependency @livingdocs/framework from 24.13.2 to v24.13.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5482)
* [fix(deps): update dependency wait-on from 6.0.1 to v7 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6545)
* [Fix: show quick publish on dashboards only when reasonable](https://github.com/livingdocsIO/livingdocs-editor/pull/6585)
* [fix(dashboard): allow allowQuickPublish option for publish state dashboard cell](https://github.com/livingdocsIO/livingdocs-server/pull/5474)
* [fix(deps): update dependency moment-timezone from 0.5.41 to v0.5.42 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6591)
* [fix(deps): update dependency sass from 1.59.3 to v1.60.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6583)
* [fix(deps): update dependency sharp from 0.31.3 to ^0.32.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5479)
* [fix(deps): update dependency aws-sdk from 2.1342.0 to v2.1343.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5478)
* [Add `displayTitlePattern` to content type schema](https://github.com/livingdocsIO/livingdocs-server/pull/5471)
* [fix(li-integer): correctly treat 0 value](https://github.com/livingdocsIO/livingdocs-editor/pull/6587)
* [Test bundles](https://github.com/livingdocsIO/livingdocs-editor/pull/6575)
* [fix(deps): update dependency aws-sdk from 2.1341.0 to v2.1342.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5469)
* [Fix support for arrays in draft query sort option](https://github.com/livingdocsIO/livingdocs-server/pull/5468)
* [Buy-In: improve wording](https://github.com/livingdocsIO/livingdocs-editor/pull/6581)
* [Fix/Bundle-Thumbs](https://github.com/livingdocsIO/livingdocs-editor/pull/6580)
* [fix(deps): update dependency aws-sdk from 2.1339.0 to v2.1341.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5458)
* [Improve postgres transaction error handling](https://github.com/livingdocsIO/livingdocs-server/pull/5467)
* [Only query configured content types](https://github.com/livingdocsIO/livingdocs-server/pull/5454)
* [fix(deps): update dependency webpack from 5.76.2 to v5.76.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6576)
* [Wait for correct publish event in publication test](https://github.com/livingdocsIO/livingdocs-server/pull/5461)
* [Feat/Toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6041)
* [Show ldNotify message for bundle actions](https://github.com/livingdocsIO/livingdocs-editor/pull/6573)
* [Improve bundle dashboard cells](https://github.com/livingdocsIO/livingdocs-editor/pull/6571)
* [fix(deps): update dependency fastify from 4.14.1 to v4.15.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6561)
* [Don't render hidden context-menu actions](https://github.com/livingdocsIO/livingdocs-editor/pull/6563)
* [Make the job queue waitNext more reliable](https://github.com/livingdocsIO/livingdocs-server/pull/5447)
* [Fix redis xtrimdelivered](https://github.com/livingdocsIO/livingdocs-server/pull/5449)
* [Bundle panel in article metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/6562)
* [Support expectedOrActualPublicationDate filters in the search](https://github.com/livingdocsIO/livingdocs-server/pull/5448)
* [Apply menu list filters for table dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6558)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/5444)
* [fix(deps): update dependency aws-sdk from 2.1338.0 to v2.1339.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5445)
* [fix(deps): update dependency fs-extra from 11.1.0 to v11.1.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6560)
* [Do not close postgres pool clients on query errors](https://github.com/livingdocsIO/livingdocs-server/pull/5438)
* [fix(document selection): ensure filters are applied when using legacy dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6550)
* [Don't hide table dashboard flyouts on mouseleave](https://github.com/livingdocsIO/livingdocs-editor/pull/6515)
* [Ignore test files in metadata plugin loader](https://github.com/livingdocsIO/livingdocs-server/pull/5434)
* [fix: add favicon.ico and apple-touch-icon](https://github.com/livingdocsIO/livingdocs-editor/pull/6551)
* [Hide download button when no crops are available](https://github.com/livingdocsIO/livingdocs-editor/pull/6541)
* [Fix content type changes on documents](https://github.com/livingdocsIO/livingdocs-server/pull/5432)
* [fix(deps): update dependency webpack from 5.76.1 to v5.76.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6543)
* [fix(deps): update dependency mini-css-extract-plugin from 2.7.3 to v2.7.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6526)
* [fix(deps): update dependency sass from 1.59.2 to v1.59.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6527)
* [fix(deps): update dependency style-loader from 3.3.1 to v3.3.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6538)
* [fix(deps): update dependency exifreader from 4.11.0 to v4.11.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5428)
* [fix(deps): update dependency aws-sdk from 2.1337.0 to v2.1338.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5430)
* [Don't show metadata button for legacy publication](https://github.com/livingdocsIO/livingdocs-editor/pull/6540)
* [Remove support of .documents and .publications properties on search results](https://github.com/livingdocsIO/livingdocs-server/pull/5427)
* [fix(deps): update babel (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6516)
* [Enable Publish Control for contentType `page` in project `magazine`](https://github.com/livingdocsIO/livingdocs-server/pull/5424)
* [Fix li-datetime filter date parsing](https://github.com/livingdocsIO/livingdocs-editor/pull/6531)
* [Search DSL](https://github.com/livingdocsIO/livingdocs-server/pull/5421)
* [Support caching for byIds dataloader](https://github.com/livingdocsIO/livingdocs-editor/pull/6528)
* [Fix/Scrollbar Issues](https://github.com/livingdocsIO/livingdocs-editor/pull/6522)
* [fix(creation flow): Allow content type boxes to text wrap their labels](https://github.com/livingdocsIO/livingdocs-editor/pull/6523)
* [Fix finite products config](https://github.com/livingdocsIO/livingdocs-server/pull/5417)
* [Issue navigation](https://github.com/livingdocsIO/livingdocs-server/pull/5413)
* [fix(deps): update dependency @fastify/reply-from from 9.0.0 to v9.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6517)
* [Remove app-level unnecessary scrollbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6519)
* [fix(deps): update dependency @livingdocs/framework from 24.13.1 to v24.13.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5414)
* [fix(display filter): ensure custom vue display filters get the config object](https://github.com/livingdocsIO/livingdocs-editor/pull/6512)
* [fix(deps): update dependency @fastify/reply-from from 8.4.3 to v9 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6481)
* [Replace Generic error (5XX) used for Password verification with `validationError`](https://github.com/livingdocsIO/livingdocs-server/pull/5409)
* [Show distribution toolbar action on bundles](https://github.com/livingdocsIO/livingdocs-editor/pull/6514)
* [Also anonymise in changes calls](https://github.com/livingdocsIO/livingdocs-server/pull/5404)
* [fix(deps): update dependency aws-sdk from 2.1334.0 to v2.1335.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5405)
* [fix(create): correctly check if contentType is on defaultChannel](https://github.com/livingdocsIO/livingdocs-editor/pull/6510)
* [Add existing documents to bundle](https://github.com/livingdocsIO/livingdocs-editor/pull/6503)
* [Fix Desk-Net Schedule automatic placement errors due to schedule properties](https://github.com/livingdocsIO/livingdocs-editor/pull/6470)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/5399)
* [fix: update framework version](https://github.com/livingdocsIO/livingdocs-server/pull/5400)
* [fix: bump framework version](https://github.com/livingdocsIO/livingdocs-editor/pull/6504)
* [fix(deps): update dependency @livingdocs/framework from 24.13.0 to v24.13.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5395)
* [fix(deps): update dependency @opentelemetry/api from 1.4.0 to v1.4.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5396)
* [Fix: contentType displayFilter works correctly with contentTypes not from the defaultChannel](https://github.com/livingdocsIO/livingdocs-editor/pull/6502)
* [Remove document from bundle](https://github.com/livingdocsIO/livingdocs-editor/pull/6497)
* [Shows scheduled doc tooltip ](https://github.com/livingdocsIO/livingdocs-editor/pull/6494)
* [Create and add documents to bundle](https://github.com/livingdocsIO/livingdocs-editor/pull/6488)
* [Use yyyy-MM-dd format date query parameter for Distribution Planning Schedule fixed date request](https://github.com/livingdocsIO/livingdocs-editor/pull/6471)
* [fix: remove 2nd line of buy-in empty state](https://github.com/livingdocsIO/livingdocs-editor/pull/6482)
* [fix(deps): update dependency webpack from 5.75.0 to v5.76.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6480)
* [chore(deps): update dependency eslint from 8.35.0 to v8.36.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5387)
* [Allow dashboard request to exclude revision content](https://github.com/livingdocsIO/livingdocs-server/pull/5382)
* [Don't load document content in table dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6474)
* [fix(deps): update dependency aws-sdk from 2.1331.0 to v2.1332.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5383)
* [Fix Task List](https://github.com/livingdocsIO/livingdocs-editor/pull/6468)
* [Add `li-bundled-documents` metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/5381)
* [Bundle panel with empty state](https://github.com/livingdocsIO/livingdocs-editor/pull/6467)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/5375)
* [Upgrade sharp to fix Premature close error](https://github.com/livingdocsIO/livingdocs-server/pull/5376)
* [Transform pitch to bundle](https://github.com/livingdocsIO/livingdocs-editor/pull/6464)
* [Handle pitch and bundle independent of publish control](https://github.com/livingdocsIO/livingdocs-editor/pull/6463)
* [Deprecate Identifier](https://github.com/livingdocsIO/livingdocs-server/pull/5289)
* [Update framework](https://github.com/livingdocsIO/livingdocs-editor/pull/6451)
* [fix(deps): update dependency jose from 4.12.2 to v4.13.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5372)
* [fix(deps): update dependency cloudinary from 1.34.0 to v1.35.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5357)
* [fix(deps): update dependency @google-cloud/storage from 6.9.3 to v6.9.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5353)
* [fix(deps): update dependency lru-cache from 7.17.0 to v7.17.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5355)
* [`mediaIndex` normalisation, renamed to `indexing`](https://github.com/livingdocsIO/livingdocs-server/pull/5365)
* [Dynamic metadata for Publication indexing](https://github.com/livingdocsIO/livingdocs-server/pull/5362)
* [Feat/Component Icons V2](https://github.com/livingdocsIO/livingdocs-server/pull/5177)
* [Feat/Component Icons V2](https://github.com/livingdocsIO/livingdocs-editor/pull/6402)
* [Default Editor configuration](https://github.com/livingdocsIO/livingdocs-editor/pull/6446)
* [Fix flashing List Assignment](https://github.com/livingdocsIO/livingdocs-editor/pull/6453)
* [fix(deps): update dependency fastify from 4.13.0 to v4.14.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5358)
* [fix(deps): update dependency fastify from 4.13.0 to v4.14.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6450)
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
* [fix(deps): update dependency axios from 0.27.2 to v1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6295)
* [Make foreign key constraints deferrable](https://github.com/livingdocsIO/livingdocs-server/pull/5308)
* [Restrict maximum postgres query parameters](https://github.com/livingdocsIO/livingdocs-server/pull/5327)
* [Fix axios 1 http querystring compatibility](https://github.com/livingdocsIO/livingdocs-server/pull/5325)
* [Fix renovate platformAutomerge](https://github.com/livingdocsIO/livingdocs-editor/pull/6415)
* [fix(deps): update dependency open from 8.4.1 to v8.4.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6409)
* [fix(deps): update dependency pino from 8.10.0 to v8.11.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5324)
* [Fix renovate platformAutomerge](https://github.com/livingdocsIO/livingdocs-server/pull/5317)
* [fix(deps): update dependency lru-cache from 7.16.1 to v7.16.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5312)
* [fix(deps): update dependency @azure/storage-blob from 12.12.0 to v12.13.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5316)
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

### Synced Table Dashboards

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

### Advanced Search Filters Foundation

TODO: Description

* [Documentation](TODO)

### Home Screen - Part 2

TODO: Description

* [Documentation](TODO)

### Display Filters ListV2 with OR combination

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

### i18n - Editor available in German

TODO: Description

* [Documentation](TODO)

### Microsoft Teams Integration

TODO: Description

* [Documentation](TODO)
* [Microsoft Teams Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4408)


## Breaking Changes :fire:

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
# migration 184-increase-webhook-handle-length.js
#   limit webhook handle to 50 characters
# migration 185-li-get-leaf-of-revision-history.js
#   add psql function li_get_leaf_of_revision_history
livingdocs-server migrate up
```

### Drop support for node v14

🔥 Drop support for node 14, use node v18 instead.

### Drop support for Redis < v6.2

🔥 The minimal required Redis version is v6.2.

### Upgrade to elasticsearch client v8

🔥 The response structure changed in the new client. If you have custom code that accesses elasticsearch, you'll need to update it accordingly:

```diff
- const {body} = await elasticsearchClient.search({
+ const body = await elasticsearchClient.search({
    index: 'li-documents',
    q: `document.id:${this.doc.id}`
  })
```

Please see the examples of elasticsearch how to use it: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/get_examples.html


🔥 The elasticsearch client configuration changed slightly. Please consult the elasticsearch client configuration documentation: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/basic-config.html

```diff
  search: {
    elasticsearchClient: {
      node: 'https://127.0.0.1:9200/',
      auth: {username: 'admin', password: 'admin'},
-     ssl: {rejectUnauthorized: false}
+     tls: {rejectUnauthorized: false}
    }
  },
```

### Stricter search queries

- 🔥 Filters on unavailable properties throw an error.
- 🔥 Elasticsearch `exists` queries on objects not supported anymore. Please use a specific sub-property instead.

   e.g. To filter for documents that have no category assigned, you need to use `category.reference.id` instead of `category` in the editor search filter:
  ```diff
  {
    id: 'without-category',
    label: 'Without category',
    type: 'metadata',
  -  key: 'category',
  +  key: 'category.reference.id',
    value: {exists: false}
  }
  ```

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5000)

### Don't expose error_details in 5xx response

🔥 5XX responses will no longer contain `body.error_details` object, still the whole error response will be logged.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4988)

### Remove metadata plugin li-media-language

🔥 Remove metadata plugin `li-media-language`, use `li-metadata-translations` instead.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4899)


### Remove deprecated document.path

Since a long time we deprecated the DB property `documents.path`, because there is no real feature behind that property.

:fire: `contentTypes[].editor.deliveryLinks` do not support`:path` placeholder
:fire: editor model `draft.path` is not accessible anymore

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5001)


### Support removal of metadata properties by assigning null

🔥 Before this change, assigning null values resulted in a metadata schema error.
Now it's accepted and it removes the metadata property. Therefore it's not possible anymore to save the value null as metadata property value.

```js
// before
metadata.myField = null // throws
// now
metadata.myField = null // delete metadata.myField
```

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5007)

### Mandatory project_id in documentApi.find

🔥 Make `project_id` mandatory in `documentApi.find`

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5017)

### Fix firstPublicationDate to documents table (Post Deployment) :fire:

This script was backported to release-2022-11, so it has been added again for release-2023-05 in case anyone missed it. If you already ran the script with the previous release upgrade you do not need to run it again.

If you have unpublished a document while running release-2022-07 or release-2022-09 then you may have inaccurate values for the `document.systemdata.firstPublicationDate`. Below is a comparison of the change in the four most recent versions:

First publish:
release-2022-07 and release-2022-09: Set `firstPublicationDate`
release-2022-05 and release-2022-11: Set `firstPublicationDate`

Republish while published:
release-2022-07 and release-2022-09: Keep `firstPublicationDate`
release-2022-05 and release-2022-11: Keep `firstPublicationDate`

Unpublish:
release-2022-07 and release-2022-09: Remove `firstPublicationDate`
release-2022-05 and release-2022-11: Keep `firstPublicationDate`

Republish after unpublish:
release-2022-07 and release-2022-09: Set `firstPublicationDate`
release-2022-05 and release-2022-11: Keep `firstPublicationDate`

Essentially the old behaviour and the new "fixed" behaviour is to set `firstPublicationDate` once and never modify it. This property will still exist even when the document is unpublished. For release-2022-07 and release-2022-09 the difference in behaviour was that the `firstPublicationDate` would be cleared on unpublish and set again at the next publish.

If you would like to correct the `firstPublicationDate` property for all of your articles you can run:
```bash
node ./node_modules/@livingdocs/server/db/manual-migrations/009-fix-first-publication-date.js
```

This script performs the following actions:

1. Check that `first_publication_id` has been set (same as the script 007-populate-first-publication-data.js)
2. Move `firstPublicationDate` from `data` to `data.publishControl`
3. Remove `data.firstPublicationDate`
4. If `firstPublicationDate` is not set then use the value from the first publication
5. If `firstPublicationDate` is set then use the value from the first publication when the first publication is older

It is highly recommended that you run this script because it is performing a data migration as well as fixing the values.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4957)

## Deprecations

### Deprecate Dashboard Display Filters

These Dashboard Display Filters get deprecated:
- `coreApi.searchFilters.register`
- `coreApi.searchFilters.registerList`
- `coreApi.searchFilters.registerAngularComponent`

Update the deprecated filter to the supported [Display Filters](https://docs.livingdocs.io/customising/advanced/editor-configuration/display-filter/) from the core.
- Named Filters
- Metadata Filters
- ListV2 Filters

If you can't handle your requirements with core filters it's best to contact your Customer Solutions manager to get inputs for solutions (one option is to create your custom Vue component, but that should be prevented whenever possible)

Breaking Change: `release-2023-03`

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6150)


## Other Changes

### Features
* [Load drafts in includes](https://github.com/livingdocsIO/livingdocs-server/pull/4936)
* [Add server config 'httpServer.showStackTraces'](https://github.com/livingdocsIO/livingdocs-server/pull/4926)
* [Support Dailymotion for oEmbed include](https://github.com/livingdocsIO/livingdocs-server/pull/4910)

### Improvements
* [TLS Support in Redis](https://github.com/livingdocsIO/livingdocs-server/pull/4982)
* [Add `acceptedCharacterDifference` property to `li-target-length` metadata plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/6029)

### Bugfixes
* [Publish screen back button returns to custom data record dashboard after create](https://github.com/livingdocsIO/livingdocs-editor/pull/5959)
* [Handle focal point in metadata forms](https://github.com/livingdocsIO/livingdocs-editor/pull/5953)
* [Fix date sort order on users admin screen](https://github.com/livingdocsIO/livingdocs-editor/pull/6054)


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
