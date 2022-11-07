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
  title="January 2022 Release"
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
