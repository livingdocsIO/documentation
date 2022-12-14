---
type: release-notes
title: January 2023 Release
description: Release notes for release-2023-01
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-01/
  - /operations/releases/release-2023-01/release-2023-01/
---

{{< release-header
  title="January 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=true
  branchHandle="release-2023-01"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Fix dynamic indexing](https://github.com/livingdocsIO/livingdocs-server/pull/5049)
* [Fix broken document creation button](https://github.com/livingdocsIO/livingdocs-editor/pull/6099)
* [fix(translation): pointer events blocked during loading](https://github.com/livingdocsIO/livingdocs-editor/pull/6066)
* [fix: update livingdocs-integration.js](https://github.com/livingdocsIO/livingdocs-editor/pull/6095)
* [fix: update livingdocs-integration.js](https://github.com/livingdocsIO/livingdocs-server/pull/5051)
* [Round crop coordinates when using focal point tool](https://github.com/livingdocsIO/livingdocs-editor/pull/6091)
* [Bugfix for teams dashboards on homescreen](https://github.com/livingdocsIO/livingdocs-editor/pull/6088)
* [Add link to document in distribution planning table](https://github.com/livingdocsIO/livingdocs-editor/pull/6087)
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/5048)
* [Search for distributions by best date](https://github.com/livingdocsIO/livingdocs-server/pull/5047)
* [Sort by relevance](https://github.com/livingdocsIO/livingdocs-server/pull/5045)
* [Dashboard pageSize](https://github.com/livingdocsIO/livingdocs-editor/pull/6086)
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/5044)
* [Enable indexing of all contentType metadata properties](https://github.com/livingdocsIO/livingdocs-server/pull/5043)
* [Remove `error_details` in 5XX responses](https://github.com/livingdocsIO/livingdocs-server/pull/4988)
* [Publish Control: add customBuilt NZZ publish control behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/6015)
* [Add dynamic indexing to draftIndex and li-team](https://github.com/livingdocsIO/livingdocs-server/pull/5000)
* [Only show push button in Table Dashboards on published documents](https://github.com/livingdocsIO/livingdocs-editor/pull/6075)
* [Distribution Planning (Part 1)](https://github.com/livingdocsIO/livingdocs-editor/pull/6077)
* [Distribution Planning (Part 1)](https://github.com/livingdocsIO/livingdocs-server/pull/5029)
* [feat(li-tree): always save changes](https://github.com/livingdocsIO/livingdocs-editor/pull/6074)
* [fix(deps): update dependency ws from 8.8.1 to v8.11.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5038)

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
|Redis|5 (Deprecated)|
|Livingdocs Server Docker Image|livingdocs/server-base:16.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

### i18n - Editor available in German

TODO: description

### Synced Table Dashboards

TODO: description

## Breaking Changes :fire:

### Migrate the Postgres Database :fire:

TODO: add db migrations

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

### Drop support for node 14

🔥 Drop support for node 14, use node v18 instead.

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

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5009)


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

This script was backported to release-2022-11, so it has been added again for release-2023-01 in case anyone missed it. If you already ran the script with the previous release upgrade you do not need to run it again.

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

## APIs :gift:

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
- [v208.3.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.4): test: Simplify the tests
- [v208.3.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.3): fix(cli reencrypt): now uses correct stringify
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
- [v87.5.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.14): fix(medialibrary): Fix error where uploading images by restricted user would fail
- [v87.5.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.13): fix(autosave): Add scheduled save when autosave.stopped
- [v87.5.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.12): fix(search): Fix load more button translation for list search
- [v87.5.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.11): fix(inlineListEditor): Only publishable when dirty
- [v87.5.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.10): fix(dateTimevalidity): Does not error without 'to' date
- [v87.5.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.9): fix(metadata): Change calculation for li-text input height
- [v87.5.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.8): fix(li-document-creation-flow-button): null-safe access to `documentCreationFlow`
- [v87.5.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.7): fix: change to selected service on copy
- [v87.5.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.6): fix(document-lists): Update German translation for "Close"
- [v87.5.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.5): fix(loader): added and styled for translation card
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v??.?.?): text

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
