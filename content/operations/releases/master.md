---
type: release-notes
title: September 2022 Release
description: Release notes for release-2022-09
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2022-09/
  - /operations/releases/release-2022-09/release-2022-09/
---

{{< release-header
  title="September 2022 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=true
  branchHandle="release-2022-09"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [update framework to 24.1.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5679)
* [Issue management add document](https://github.com/livingdocsIO/livingdocs-editor/pull/5668)
* [Issue Management: allow documentCreationFlows config](https://github.com/livingdocsIO/livingdocs-server/pull/4708)
* [update framework to 24.1.2](https://github.com/livingdocsIO/livingdocs-server/pull/4723)
* [Fix external systems](https://github.com/livingdocsIO/livingdocs-editor/pull/5670)
* [fix(desknet): Return full document for schedule](https://github.com/livingdocsIO/livingdocs-server/pull/4713)
* [feat(desknet): Limit schedule to a specific date using metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/5664)
* [feat(metadata): Store date in li-desknet-schedule plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4706)
* [fix(deliveries): Ensure optional url property is handled correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/5672)
* [fix(camelcase): Content type filter](https://github.com/livingdocsIO/livingdocs-editor/pull/5676)
* [fix: avoid loading content when retrieving lists](https://github.com/livingdocsIO/livingdocs-server/pull/4712)
* [fix(metadata): Highlight error for Vue Select inputs](https://github.com/livingdocsIO/livingdocs-editor/pull/5675)
* [update framework to 24.1.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5677)
* [update framework to 24.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4714)
* [Deliveries Build: show only deliveries defined on the contentType](https://github.com/livingdocsIO/livingdocs-editor/pull/5669)
* [Simplify Create Wizard](https://github.com/livingdocsIO/livingdocs-editor/pull/5633)
* [fix(multiple references): parsing/validation now correct](https://github.com/livingdocsIO/livingdocs-server/pull/4703)
* [feat(desknet): Link Desk-Net elements using external ids](https://github.com/livingdocsIO/livingdocs-server/pull/4680)
* [feat: add ids for components of defaultContent](https://github.com/livingdocsIO/livingdocs-server/pull/4699)
* [feat(desknet): Implement schedule filtering](https://github.com/livingdocsIO/livingdocs-server/pull/4678)
* [fix: add ui option for retresco maxTextLength config](https://github.com/livingdocsIO/livingdocs-editor/pull/5659)
* [fix(retresco): a maxLength config can be set to prevent API errors](https://github.com/livingdocsIO/livingdocs-server/pull/4677)
* [Issue Management](https://github.com/livingdocsIO/livingdocs-editor/pull/5643)
* [Metadata li date](https://github.com/livingdocsIO/livingdocs-server/pull/4698)
* [Metadata: new type li-date](https://github.com/livingdocsIO/livingdocs-editor/pull/5658)
* [fix: disable toolbar actions on conflict mode](https://github.com/livingdocsIO/livingdocs-editor/pull/5657)
* [Enable Publish Control for Data Records](https://github.com/livingdocsIO/livingdocs-editor/pull/5656)
* [feat(li-issue-management): add li-issue-management plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4686)
* [chore(deps): update dependency pino-socket from 5.0.0 to v5.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4696)
* [fix(deps): update dependency fastest-levenshtein from 1.0.12 to v1.0.14 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4688)
* [Filters: allow documentType and contentType config for contentType filter](https://github.com/livingdocsIO/livingdocs-editor/pull/5652)
* [fix(deps): update dependency aws-sdk from 2.1162.0 to v2.1182.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4625)
* [remove not needed non breaking space in print preview](https://github.com/livingdocsIO/livingdocs-editor/pull/5645)
* [fix li-tree metadata plugin dashboard config](https://github.com/livingdocsIO/livingdocs-editor/pull/5642)
* [fix(li-tree): fix document config shorthand filter](https://github.com/livingdocsIO/livingdocs-server/pull/4685)
* [fix(deps): update dependency ws from 8.8.0 to v8.8.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4665)
* [fix(deps): update dependency ioredis from 5.2.0 to v5.2.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4666)
* [Test new release notes patching mechanism - iteration 2](https://github.com/livingdocsIO/livingdocs-server/pull/4682)
* [Test patching release notes](https://github.com/livingdocsIO/livingdocs-server/pull/4681)


**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* Release Newsletter Subscription: **TODO**

## System Requirements

### Suggested
|Name|Version|
|-|-|
|Node|16|
|NPM|8|
|Postgres|14|
|Elasticsearch|7|
|Redis|7|
|Livingdocs Server Docker Image|livingdocs/server-base:16|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

### Minimal
|Name|Version|
|-|-|
|Node|14|
|NPM|7|
|Postgres|12|
|Elasticsearch|6.x (Deprecated)|
|Redis|5 (Deprecated)|
|Livingdocs Server Docker Image|livingdocs/server-base:14.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:14.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

### Metadata Plugin li-tree

TODO: add description

* [Documentation: TODO](?)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4591)
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5580)

### Microsoft Teams Integration

TODO: Is this a highlight? Is the feature ready? Is the feature documented?

* [Microsoft Teams Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4408)

### Document Creation Flow

With a Document Creation Flow you can configure how a document gets created:

* Define a create button (only supported for Table Dashboards)
* Define fields on the document creation modal
* Register a create function to parse the data which creates the document

References:
* [Guide]({{< ref "/guides/editor/document-creation-flow" >}})
* [PR: Register Create Function](https://github.com/livingdocsIO/livingdocs-server/pull/4606)
* [PR: Document Creation Flow Config](https://github.com/livingdocsIO/livingdocs-server/pull/4635)
* [PR: Editor Project Config - Webhook: Add webhook event 'document.build'](https://github.com/livingdocsIO/livingdocs-editor/pull/5628)
* [PR: Add Create Button to Dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/5637)

### Deliveries: Status and Build Triggers

For infinite products like an e-paper there is usually a "build" stage involved. With the new Deliveries feature we allow a customer to trigger a remote system to kick off a build and report the status of the build back to Livingdocs. This allows an editor to get a better view on the infinite product life cycle. These are the features:

- Trigger a build of a remote build system in the Publish Control view
- Get an overview of the build state in the Publish Control view
- Allow a remote build system to report its status back to Livingdocs

References:
* [Guide TODO]({{< ref "/guides/editor/document-creation-flow" >}})
* [PR: Server Config + Webhook + Events](https://github.com/livingdocsIO/livingdocs-server/pull/4670)

### Table Dashboards (full working version)

TODO@beni: how we want to exactly announce/describe the Table Dashboards?

Table Dashboards are a flexible type of dashboards where individual columns can be configured. From the September release on this is the new standard Dashboard and old versions should be migrated to these new type of Dashboard

The following functionality has been added in this release:
* Design improvements
* Hugo Drop
* Main Cell Configuration possibilities
* Cross Project Document Drag&Drop
* Show number of documents / empty state
* Highlight document in Table Dashboard when coming back from document
* Set/change homepage

The following functionality has been added in past releases
* release-2021-07
  * Search tooltip for document id matches
  * Document drag & drop
* release-2021-05
  * Document creation from a table dashboard
  * Show publish state and allow quick publish under certain conditions
  * Display and inline editing for `li-string-list` metadata properties
  * First step towards using table dashboard as default for articles, pages, and data records
    * There are reasonable defaults for filters and dashboard columns depending on document type
    * Can be enabled, by setting `documents.useLegacyDashboards` to `false` in the editor config
    * Not enabled by default yet because some features are still missing and will be added in the next release (see below)
* release-2021-03
  * Basic configuration of table dashboards (main menu entry, filters, column layout)
  * Display and inline editing for these metadata properties: `li-text`, `li-boolean`, `li-category`, `li-document-reference`
  * Default column component that displays document thumbnail and title
  * Custom components can be configured to render the content of a table cell

References:
* [Documentation]({{< ref "/reference-docs/project-config/editor-settings#example-table-dashboard" >}})
* [PR: Default Table Dashboards on Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5498)
* [PR: Default Table Dashboards on Server](https://github.com/livingdocsIO/livingdocs-server/pull/4671)

### Desk-Net: Schedule Extensions + Production Features

TODO@Alex: add a nice description

References:
* [Documentation?](?)
* [PR: li-desknet-schedule metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4673)
* [PR: Add li-desknet-schedule metadata plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/5627)



## Breaking Changes :fire:

### Migrate the database :fire:

TODO: add db migrations

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

### Remove Support for Postgres 11 :fire:

🔥 Support for Postgres 11 has been removed. Please Update to Postgres 16 (12+ is supported).

### Remove Support for Redis <5 :fire:

🔥 Support for Redis <5 has been removed. Please Update to Redis 6 (5+ is supported).

## Deprecations

### Dashboards Configs ❗❗❗

The following configurations are deprecated and will be removed in the future. If you need them longer than `release-2022-11`, please think about a plan with timing to not depend on the Legacy Dashboards anymore and let your Customer Solutions Manager know about it. We will find a solution.

Deprecated Editor Configs:
* `app.filters.inlineArticleList`
* `app.filters.articleList`
* `app.filters.pageList`
* `app.filters.dataRecordList`
* `app.filters.menuList`
* `search.articleSearch.listItemComponent`

* [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5498)

### Redis 5

Redis 5 has been deprecated. Please Update to Redis 6.

### Desk-Net scheduleEnabled

Please remove `projectConfig.settings.desknet.scheduleEnabled`, because it has no longer has any effect. The schedule will be enabled when Desk-Net is enabled in the server config, and the content type has the li-desknet-platforms metadata plugin.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4647)

## APIs :gift:

## Other Changes

### Security

### Design
* [Dashboards: Flatter Design](https://github.com/livingdocsIO/livingdocs-editor/pull/5605)

### Features

### Improvements

### Bugfixes
* [Editable links: Show current (and not configured link)](https://github.com/livingdocsIO/livingdocs-editor/pull/5554)
* [Desk-Net: Support any handle for li-desknet-integration](https://github.com/livingdocsIO/livingdocs-server/pull/4672)

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
