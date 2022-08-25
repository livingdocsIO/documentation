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

### Metadata Plugin li-text improvements

Add new config options `minLength`, `recommendedMinLength`, `maxLength`, `recommendedMaxLength` and a better visual feedback if the values are exceeded or fallen below.

* [PR: new li-text config options](https://github.com/livingdocsIO/livingdocs-editor/pull/5663)
* [PR: li-text form feedback](https://github.com/livingdocsIO/livingdocs-editor/pull/5665)

### Metadata Plugin li-date

The metadata plugin `li-date` allows to set a date **without** time.

* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4698)
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5658)

### Metadata Plugin li-tree

`li-tree` lets you set up a tree with items of the 3 possible types `group`, `link`, `document`.

* [Documentation]({{< ref "/reference-docs/document/metadata/metadata-plugin-list#li-tree" >}})
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4591)
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5580)

### Metadata Plugin li-issue-management

The `li-issue-management` metadata plugin can be used to manage issues (a data-record with references to pages).

* [Documentation]({{< ref "/reference-docs/document/metadata/metadata-plugin-list#li-issue-management" >}})
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5662)
* [PR: Editor - Sortable Issues](https://github.com/livingdocsIO/livingdocs-editor/pull/5732)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4686)

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
* [PR: Simplify Create Wizard](https://github.com/livingdocsIO/livingdocs-editor/pull/5633)
* [PR: Allow Flow Config on editorSettings.documentCreationFlows](https://github.com/livingdocsIO/livingdocs-server/pull/4708)

### Deliveries: Status and Build Triggers

For infinite products like an e-paper there is usually a "build" stage involved. With the new Deliveries feature we allow a customer to trigger a remote system to kick off a build and report the status of the build back to Livingdocs. This allows an editor to get a better view on the infinite product life cycle. These are the features:

- Trigger a build of a remote build system in the Publish Control view
- Get an overview of the build state in the Publish Control view
- Allow a remote build system to report its status back to Livingdocs

References:

* [Guide]({{< ref "/guides/editor/publish-control/delivery" >}})
* [PR: Server Config + Webhook + Events](https://github.com/livingdocsIO/livingdocs-server/pull/4670)
* [PR: Delivery Status Reporting](https://github.com/livingdocsIO/livingdocs-server/pull/4731)
* [PR: Delivery Status Fetching](https://github.com/livingdocsIO/livingdocs-server/pull/4740)
* [PR: UI](https://github.com/livingdocsIO/livingdocs-editor/pull/5723)

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

TODO@Alex: add a nice description + do you have planned to write a documentation?

References:
* [Documentation?](?)
* [PR: li-desknet-schedule metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4673)
* [PR: Add li-desknet-schedule metadata plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/5627)
* [PR: Schedule filtering](https://github.com/livingdocsIO/livingdocs-server/pull/4678)
* [PR: Link Desk-Net elements using external ids](https://github.com/livingdocsIO/livingdocs-server/pull/4680)
* [PR: Limit schedule to a specific date using metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/5664)
* [PR: Display "Run Automatic Placement" button in Desk-Net Schedule side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/5728)
* [PR: Desk-Net Schedule: Use a Table Dashboard to show Articles](https://github.com/livingdocsIO/livingdocs-editor/pull/5736)
* [PR: Desk-Net Schedule side panel improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/5751)

### Split Revision/Systemmetadata

TODO@Marc: Do we announce that officially? If yes, how?

* [PR: System metadata preparation](https://github.com/livingdocsIO/livingdocs-server/pull/4735)



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

### Metadata Plugin li-text

🔥 metadata type `li-text`: remove property `ui.component`
🔥 metadata type `li-text`: remove property `ui.config.rows`

#### restore to the old behavior

To restore to the old behavior is not 100% possible because the updated version of `li-text` is smarter and needs less config. One important change is that the field extends its size automatically based on the amount of content added.

If you have defined `LiMetaTextareaForm` as UI component or set `rows`, you have now to set `allowNewlines: true`.

For other changes please consult the [documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-text)

#### Backward Compatibility Mode

If you have issues with the update, you can enable the [backward compatibility mode](https://github.com/livingdocsIO/livingdocs-server/pull/4296) where li-text configs are not validated.

❗ Only need that mode until you solved your issues with li-text! This mode is only thought for a short time period to migrate the old metadata.

```js
// server config
// ignore validation for metadata plugin  'li-text' and 'li-string-list', all other plugins are validated
metadataPluginsToIgnoreForConfigValidation: ['li-text', 'li-string-list'],
```

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4780)


### Systemdata

Normalize `documentWriteModel.systemdata` and `documentVersion.systemdata`.
Old properties are defined as getters and emit deprecation warnings (`LIDEP018`), new properties are enumerable on the object.

- `systemdata.project_id` > `systemdata.projectId`
- `systemdata.channel_id` > `systemdata.channelId`
- `systemdata.document_id` > `systemdata.documentId`
- `systemdata.revision_id` > `systemdata.revisionId`
- `systemdata.remote_id` > `systemdata.remoteId`
- `systemdata.content_type` > `systemdata.contentType`
- `systemdata.document_type` > `systemdata.documentType`
- `systemdata.designDescriptor` > `systemdata.design`
- `systemdata.publication_id` > `systemdata.publicationId`
- `systemdata.publication_date` > `systemdata.lastPublicationDate`
- `systemdata.first_publication_date` > `systemdata.firstPublicationDate`

### All HTTP APIs: Remove support for contentType: 'multipart/form-data'"

- :fire: Remove `multer` module by removing support for `contentType: 'multipart/form-data'` configs on route declarations (`LIBREAKING011`). Please come to us if the server doesn't start anymore because of that (as stated in the error message).
- :fire: Remove [jsonp](https://en.wikipedia.org/wiki/JSONP) callback support as there was never a need for it and it wasn't documented at all.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4785)

### Redis 5

Redis 5 has been deprecated. Please Update to Redis 6.

### Document Publication Lifecycle Update

:fire: Move server hook `preparePublish` hooks after metadata plugin `onPreparePublish` hooks (see [Diagram](https://docs.livingdocs.io/learn/document-lifecycle/document-publication/)).

During the migration to the `preparePublish` hooks, the order accidentally changed. Before, the `prePublish` hooks were run after the metadata plugin `onPublish` hooks.
This has the effect that required metadata are always present in the `preparePublish` hooks, unlike before where they still could be missing.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4778)

### Desk-Net scheduleEnabled

Please remove `projectConfig.settings.desknet.scheduleEnabled`, because it has no longer has any effect. The schedule will be enabled when Desk-Net is enabled in the server config, and the content type has the li-desknet-platforms metadata plugin.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4647)

### Deprecate ui.config.rows of li-text

Remove `ui.config.rows` config of metadata plugin `li-text`. If defined, replace it with `config.allowNewlines: true`, if you want to allow newline characters stored.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4707)

## APIs :gift:

### Delivery Status

🎁 Add server API `publicationApi.getDeliveryStatusReport({projectId, documentId})`
🎁 Add server API `publicationApi.triggerBuild` -> fires a new [Server Event]({{< ref "/reference-docs/server-extensions/server-events" >}}) `document.build`
🎁 Add `POST /api/v1/documents/:documentId/addDeliveryStatus` endpoint to Public API
🎁 Add [Server Event]({{< ref "/reference-docs/server-extensions/server-events" >}}) `document.build`
🎁 Add [Webhook Event]({{< ref "/reference-docs/server-extensions/webhooks" >}}) `document.build`

* [Documentation: TODO]()
* [PR: Delivery Status Fetching](https://github.com/livingdocsIO/livingdocs-server/pull/4740)
* [PR: Delivery Status Reporting](https://github.com/livingdocsIO/livingdocs-server/pull/4731)

## Other Changes

### Security

### Design
* [Dashboards: Flatter Design](https://github.com/livingdocsIO/livingdocs-editor/pull/5605)

### Features
* [Define storage.computeKey() function to compute the storage path fo a Media Library asset](https://github.com/livingdocsIO/livingdocs-server/pull/4674)
* [Enable Publish Control for Data Records](https://github.com/livingdocsIO/livingdocs-editor/pull/5656)
* [Public API: /latestDraft allows access with token 'public-api:drafts:read'](https://github.com/livingdocsIO/livingdocs-server/pull/4739)

### Improvements

* [Project Config: Add maxTextLength config for Retresco Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4677)
* [Editor Back Button: Find the best dashboard to navigate to if article was opened directly](https://github.com/livingdocsIO/livingdocs-editor/pull/5680)
* [Document Inbox: allow manual sorting](https://github.com/livingdocsIO/livingdocs-editor/pull/5683)
* [Administration: Regular users can modify their first-/last-name](https://github.com/livingdocsIO/livingdocs-server/pull/4726)
* [Dragon Drop: Allow to replace teaser images in resolved includes](https://github.com/livingdocsIO/livingdocs-editor/pull/5688)
* [Dashboards: compute entity labels with best effort from baseFilters](https://github.com/livingdocsIO/livingdocs-editor/pull/5696)
* [Safe error serializer that handles circular references](https://github.com/livingdocsIO/livingdocs-server/pull/4758)
* [Support `mediaIndex` configuration in `li-category` plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4774)

### Bugfixes
* [Editable links: Show current (and not configured link)](https://github.com/livingdocsIO/livingdocs-editor/pull/5554)
* [Desk-Net: Support any handle for li-desknet-integration](https://github.com/livingdocsIO/livingdocs-server/pull/4672)
* [Document Copy: Filter unknown components during copy](https://github.com/livingdocsIO/livingdocs-server/pull/4737)
* [Fix fake progress bar for image drops on embedded livingdoc](https://github.com/livingdocsIO/livingdocs-editor/pull/5708)
* [Document Editing: Correctly handle multiple dashboard actions](https://github.com/livingdocsIO/livingdocs-editor/pull/5697)
* [Fix login redirect when session expired using OpenID](https://github.com/livingdocsIO/livingdocs-editor/pull/5684)
* [Deliveries: Ensure optional url property is handled correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/5672)
* [Avoid loading content when retrieving lists](https://github.com/livingdocsIO/livingdocs-server/pull/4712)
* [Disable editing toolbar actions on conflict mode](https://github.com/livingdocsIO/livingdocs-editor/pull/5657)
* [Add IDs for components of defaultContent on document creation](https://github.com/livingdocsIO/livingdocs-server/pull/4699)
* [Highlight error for Vue Select inputs](https://github.com/livingdocsIO/livingdocs-editor/pull/5675)
* [Fix issues related with pasting over selected text that contained formatting tags.](https://github.com/livingdocsIO/livingdocs-editor/pull/5699)
* [ImportApi: ensure untouched flag is respected](https://github.com/livingdocsIO/livingdocs-server/pull/4762)
* [Confirm remove page action in li-publish-control-delivery](https://github.com/livingdocsIO/livingdocs-editor/pull/5734)
* [Media Library: Don't show Media Library Navigation/Toolbar Buttons for types with only hidden mediaTypes](https://github.com/livingdocsIO/livingdocs-editor/pull/5742)

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
- [v81.20.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.7): fix(draft): Fix bug preventing publication of data records
- [v81.20.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.6): fix(listInbox): Cannot remove doc during publish
- [v81.20.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.5): fix(metadata): don't error in any case when metadata properties are updated
- [v81.20.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.4): fix(publish state): Line Wrap
- [v81.20.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.3): fix: update framework version to release-2022-09
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v??.?.?): text

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
