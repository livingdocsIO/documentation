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
* [Push Messages: Check if document is published ](https://github.com/livingdocsIO/livingdocs-server/pull/5023)
* [fix(metadata): li-publish-date failing validation](https://github.com/livingdocsIO/livingdocs-server/pull/5022)
* [Fix table dashboard loading](https://github.com/livingdocsIO/livingdocs-editor/pull/6071)
* [Remove documents.path property](https://github.com/livingdocsIO/livingdocs-server/pull/5001)
* [Remove deprecated document.path](https://github.com/livingdocsIO/livingdocs-editor/pull/6062)
* [li-tree: only header to be draggable](https://github.com/livingdocsIO/livingdocs-editor/pull/6068)
* [Introduce transform document functions](https://github.com/livingdocsIO/livingdocs-server/pull/5010)
* [feat(oembed): Add Dailymotion provider](https://github.com/livingdocsIO/livingdocs-server/pull/4910)
* [Fix: allow li-document-reference besides li-reference properties for additionalInfo on mediaLibraryCard](https://github.com/livingdocsIO/livingdocs-editor/pull/6069)
* [li team disable switch](https://github.com/livingdocsIO/livingdocs-editor/pull/6064)
* [li-tree: improve link selection when there is only one search result](https://github.com/livingdocsIO/livingdocs-editor/pull/6065)
* [feat(homescreen): add dashboard source registry](https://github.com/livingdocsIO/livingdocs-server/pull/5016)
* [chore(li-team): fix E2E tests](https://github.com/livingdocsIO/livingdocs-editor/pull/6063)
* [li-team: add li-team config schema and validation](https://github.com/livingdocsIO/livingdocs-server/pull/4974)
* [li-team: add li-meta-team plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/6024)
* [Make project_id mandatory in documentApi.find](https://github.com/livingdocsIO/livingdocs-server/pull/5017)
* [Fix error logging](https://github.com/livingdocsIO/livingdocs-server/pull/5013)
* [Publish Control: more clarity when a document can't get published right now](https://github.com/livingdocsIO/livingdocs-editor/pull/6057)
* [Upgrade to elasticsearch client v8](https://github.com/livingdocsIO/livingdocs-server/pull/5009)
* [fix(deps): update dependency @livingdocs/framework from 24.7.0 to v24.7.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5004)
* [fix(deps): update dependency hpagent from 1.1.0 to v1.2.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5006)
* [Support removal of metadata properties by using `null`](https://github.com/livingdocsIO/livingdocs-server/pull/5007)
* [Handle `published: false` in legacy dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6011)
* [chore(deps): update dependency @google-cloud/translate from 7.0.3 to v7.0.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4977)
* [Fix date sort order on users admin screen](https://github.com/livingdocsIO/livingdocs-editor/pull/6054)
* [Replace old `nodemon` by new `node --watch`](https://github.com/livingdocsIO/livingdocs-server/pull/5002)
* [Don't reset publication dates on unpublish](https://github.com/livingdocsIO/livingdocs-server/pull/4957)
* [Feat/Character Counter](https://github.com/livingdocsIO/livingdocs-editor/pull/6052)
* [Update `fastify` to 4.10.2 [security]](https://github.com/livingdocsIO/livingdocs-server/pull/4997)
* [fix: searching article will not behave like an external link](https://github.com/livingdocsIO/livingdocs-editor/pull/6048)
* [Restrict webhook handle length](https://github.com/livingdocsIO/livingdocs-server/pull/4993)
* [Correctly compute minHeight of li-text with an incomplete *length config](https://github.com/livingdocsIO/livingdocs-editor/pull/6044)
* [Metadata mapping for Public API Project Endpoint Fixed](https://github.com/livingdocsIO/livingdocs-server/pull/4958)
* [Update framework 24.7.1](https://github.com/livingdocsIO/livingdocs-editor/pull/6040)
* [Add `acceptedCharacterDifference` property to `li-target-length` metadata plugin schema](https://github.com/livingdocsIO/livingdocs-server/pull/4975)
* [Add `acceptedCharacterDifference` property to `li-target-length` metadata plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/6029)
* [fix(print): Add params to print export](https://github.com/livingdocsIO/livingdocs-server/pull/4986)
* [Migrate await-busboy to busboy](https://github.com/livingdocsIO/livingdocs-server/pull/4985)
* [Fix contentTypes lookup for task boards](https://github.com/livingdocsIO/livingdocs-editor/pull/6032)
* [Fix Pusher authentication](https://github.com/livingdocsIO/livingdocs-editor/pull/6033)
* [Error log improvements](https://github.com/livingdocsIO/livingdocs-server/pull/4926)
* [TLS Support in redis](https://github.com/livingdocsIO/livingdocs-server/pull/4982)
* [Update `@xmldom/xmldom` to a newer release [security]](https://github.com/livingdocsIO/livingdocs-server/pull/4976)
* [Restore editor toolbar action button labels for collapsed groups](https://github.com/livingdocsIO/livingdocs-editor/pull/6030)
* [Improve li-link directive positioning](https://github.com/livingdocsIO/livingdocs-editor/pull/5996)
* [fix(conflictUI): Discard and Apply buttons correctly positioned](https://github.com/livingdocsIO/livingdocs-editor/pull/5995)
* [Fix includes paramsSchema `config.published` handling](https://github.com/livingdocsIO/livingdocs-server/pull/4970)
* [fix(deps): update dependency ioredis from 5.2.3 to v5.2.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4964)
* [Move metadata view inside closable panel within article screen](https://github.com/livingdocsIO/livingdocs-editor/pull/6019)
* [Fix jumping Push Messages form bug](https://github.com/livingdocsIO/livingdocs-editor/pull/6020)
* [Prevent refreshing table dashboard when loading more elements](https://github.com/livingdocsIO/livingdocs-editor/pull/6012)
* [🐞 Prevent Browser Freeze when opening a metadata search dashboard for li-document-reference](https://github.com/livingdocsIO/livingdocs-editor/pull/6005)
* [Metadata: ensure teaser card in li-document-references doesn't overflow](https://github.com/livingdocsIO/livingdocs-editor/pull/6006)
* [li-tree: respect 'link' and 'document' type](https://github.com/livingdocsIO/livingdocs-editor/pull/5991)
* [Do not access unconfigured metadata properties in retresco](https://github.com/livingdocsIO/livingdocs-server/pull/4959)
* [Fix link to documentation for design migrations](https://github.com/livingdocsIO/livingdocs-server/pull/4961)
* [fix(metadata): correct metadata.ui.service deprecation notice](https://github.com/livingdocsIO/livingdocs-editor/pull/5993)
* [fix(deps): update dependency pusher-js from 7.0.6 to v7.4.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/5610)
* [Upgrade to fastify v4](https://github.com/livingdocsIO/livingdocs-editor/pull/6003)
* [issue-management plugin UX improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/5985)
* [Drop support for node 14](https://github.com/livingdocsIO/livingdocs-server/pull/4954)
* [Drop support for node 14](https://github.com/livingdocsIO/livingdocs-editor/pull/5990)
* [fix(deps): update dependency jose from 4.9.3 to v4.10.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4943)
* [fix(deps): update dependency @google-cloud/storage from 6.5.4 to v6.6.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4940)
* [Unpublish Now calls correct endpoint](https://github.com/livingdocsIO/livingdocs-editor/pull/5914)
* [Unpublish Now is implemented editor side and uses the new publish control endpoint](https://github.com/livingdocsIO/livingdocs-server/pull/4892)
* [Remove all code references to `li-media-language`](https://github.com/livingdocsIO/livingdocs-editor/pull/5927)
* [Remove support for `li-media-language`](https://github.com/livingdocsIO/livingdocs-server/pull/4899)
* [Check Desk-Net publication status changed before sync](https://github.com/livingdocsIO/livingdocs-server/pull/4947)
* [Load drafts in includes](https://github.com/livingdocsIO/livingdocs-server/pull/4936)
* [li-tree: prevent nesting when maxDepth is set to 0 and respect complete tree depth when comparing to maxDepth](https://github.com/livingdocsIO/livingdocs-editor/pull/5970)
* [Respect allowTypes and make type 'group' the default type for li-tree](https://github.com/livingdocsIO/livingdocs-editor/pull/5964)
* [Don't try to save null values in Desk-Net metadata plugin storage object](https://github.com/livingdocsIO/livingdocs-server/pull/4937)
* [Re-add type to indexing job success log](https://github.com/livingdocsIO/livingdocs-server/pull/4930)
* [fix(list cards): Rocket](https://github.com/livingdocsIO/livingdocs-editor/pull/5973)
* [Fix Desknet schedule limit](https://github.com/livingdocsIO/livingdocs-server/pull/4933)
* [Remaining translations for `features/properties` directory](https://github.com/livingdocsIO/livingdocs-editor/pull/5954)
* [Do not remove link/reference when updating label name in li-tree](https://github.com/livingdocsIO/livingdocs-editor/pull/5960)
* [Publish screen back button returns to custom data record dashboard after create](https://github.com/livingdocsIO/livingdocs-editor/pull/5959)
* [Handle focal point in metadata forms](https://github.com/livingdocsIO/livingdocs-editor/pull/5953)


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

### Microsoft Teams Integration

TODO: Is this a highlight? Is the feature ready? Is the feature documented?

* [Microsoft Teams Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4408)

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

### Security

### Design

### Features

### Improvements

### Bugfixes


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v??.?.?): text

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
