---
type: release-notes
title: September 2022 Release
description: Release notes for release-2022-09
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2022-09/
  - /operations/releases/release-2022-09/release-2022-09/
---

{{< release-header
  title="September 2022 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2022-09"
>}}



**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/7ivkbnEw5FdzhlCxiryVzWlGYeOYb-PCvcT0HZrWy3EgdJfEM4oTQmdkmjE0_VMP.HwPfmfRXWrho_xVJ) | Passcode: .0!7P1Ln
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/1gkmTncbcfPGa5bTvwzzHc9gJrFXv89r3vz9rKVZxDdM)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/nNkGhQFuwb7d4Bn0GDLjaIS8_Q5Ib3k0fJVupEjO7jICeBqslF-B9AIjJxSoR9-8.PugJKMmM3FqbUEt9?startTime=1663059782000) | Passcode: 1Ck$qQ8j
* [Dev Webinar Slides](https://docs.google.com/presentation/d/18PrR9_blY0PbobQYvEMVZrz718v0ZLXlHUFxPnWaQMU/edit?usp=sharing)
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

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

* [Documentation]({{< ref "/reference/document/metadata/plugins/li-tree" >}})
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4591)
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5580)

### Metadata Plugin li-issue-management

The `li-issue-management` metadata plugin can be used to manage issues (a data-record with references to pages).

* [Documentation]({{< ref "/reference/document/metadata/plugins/li-issue-management" >}})
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

Table Dashboards are a flexible type of dashboards where individual columns can be configured. From the September release on this is the new standard Dashboard and old versions should be migrated to these new type of Dashboard.

References:
* [Documentation]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}})

### Desk-Net: Schedule Extensions + Production Features

The Desk-Net integration has been extended with some new features:
* Fixing the Desk-Net Schedule side panel to a specific date
* Filtering the documents displayed in the Desk-Net Schedule side panel by story status, platform status, and whether they have been imported to Livingdocs
* Linking Livingdocs documents to Desk-Net using a metadata value when li-desknet-integration is not used
* Registering a server function to handle the placement of teasers into a document using the Desk-Net Schedule data

References:
* Documentation:
  * [Desk-Net Integration Guide]({{< ref "/guides/integrations/desknet" >}})
* li-desknet-schedule Metadata Plugin:
  * [Server PR: li-desknet-schedule metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4673)
  * [Editor PR: li-desknet-schedule metadata plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/5627)
  * [Server PR: Schedule filtering](https://github.com/livingdocsIO/livingdocs-server/pull/4678)
  * [Server PR: Link Desk-Net elements using external ids](https://github.com/livingdocsIO/livingdocs-server/pull/4680)
  * [Server PR: Limit schedule to a specific date](https://github.com/livingdocsIO/livingdocs-server/pull/4706)
  * [Editor PR: Limit schedule to a specific date](https://github.com/livingdocsIO/livingdocs-editor/pull/5664)
* Automatic Placement:
  * [Server PR: Update document using Desk-Net Schedule](https://github.com/livingdocsIO/livingdocs-server/pull/4766)
  * [Editor PR: Display "Run Automatic Placement" button in Desk-Net Schedule side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/5728)
* UI Improvements:
  * [Editor PR: Desk-Net Schedule: Use a Table Dashboard to show Articles](https://github.com/livingdocsIO/livingdocs-editor/pull/5736)
  * [Editor PR: Desk-Net Schedule side panel improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/5751)


## Breaking Changes :fire:

### Migrate the database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
# migration 179-fix-media-library-index.js
#   alter media library index
# migration 180-inbox-insert-item.js
#   add 3 psql function to handle inbox
# migration 181-add-document-publication-delivery-statuses.js
#   add table document_publication_delivery_status_reports
livingdocs-server migrate up
```

### Remove Support for Postgres 11 :fire:

:fire: Support for Postgres 11 has been removed. Please Update to Postgres 14 (12+ is supported).

### Remove Support for Redis <5 :fire:

:fire: Support for Redis <5 has been removed. Please Update to Redis 7 (5+ is supported).

### Metadata Plugin li-text

- :fire: metadata type `li-text`: remove property `ui.component`
- :fire: metadata type `li-text`: remove property `ui.config.rows`

#### restore to the old behavior

To restore to the old behavior is not 100% possible because the updated version of `li-text` is smarter and needs less config. One important change is that the field extends its size automatically based on the amount of content added.

If you have defined `LiMetaTextareaForm` as UI component or set `rows`, you have now to set `allowNewlines: true`.

For other changes please consult the [documentation](https://docs.livingdocs.io/reference/document/metadata/plugins/li-text)

#### Backward Compatibility Mode

If you have issues with the update, you can enable the [backward compatibility mode](https://github.com/livingdocsIO/livingdocs-server/pull/4296) where li-text configs are not validated.

❗ Only need that mode until you solved your issues with li-text! This mode is only thought for a short time period to migrate the old metadata.

```js
// server config
// ignore validation for metadata plugin  'li-text' and 'li-string-list', all other plugins are validated
metadataPluginsToIgnoreForConfigValidation: ['li-text', 'li-string-list'],
```

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4780)

### All HTTP APIs: Remove support for contentType: 'multipart/form-data'"

- :fire: Remove `multer` module by removing support for `contentType: 'multipart/form-data'` configs on route declarations (`LIBREAKING011`). Please come to us if the server doesn't start anymore because of that (as stated in the error message).
- :fire: Remove [jsonp](https://en.wikipedia.org/wiki/JSONP) callback support as there was never a need for it and it wasn't documented at all.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4785)

### Document Publication Lifecycle Update

:fire: Move server hook `preparePublish` hooks after metadata plugin `onPreparePublish` hooks (see [Diagram](https://docs.livingdocs.io/customising/server/document-lifecycle/document-publication/)).

During the migration to the `preparePublish` hooks, the order accidentally changed. Before, the `prePublish` hooks were run after the metadata plugin `onPublish` hooks.
This has the effect that required metadata are always present in the `preparePublish` hooks, unlike before where they still could be missing.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4778)


## Deprecations

### Dashboards Configs ❗❗❗

The following configurations are deprecated and will be removed in the future. If you need them longer than `release-2022-11`, please think about a plan with timing to not depend on the Legacy Dashboards anymore and let your Customer Solutions Manager know about it. We will find a solution.

Deprecated Editor Configs:
- `app.filters.inlineArticleList`
- `app.filters.articleList`
- `app.filters.pageList`
- `app.filters.dataRecordList`
- `app.filters.menuList`
- `search.articleSearch.listItemComponent`

* [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5498)


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

### Redis 5

Redis 5 has been deprecated. Please Update to Redis 7.

### Metadata Plugin li-desknet-platforms

The `li-desknet-platforms` metadata plugin has been replaced by `li-desknet-schedule`. The `li-desknet-platforms` plugin stored an array of objects containing `platformId` and `categoryId` values. The new `li-desknet-schedule` storage schema is an object with a `platforms` property which stores this array, along with a new `date` property. The new plugin also has some additional config options.

### Desk-Net scheduleEnabled

Please remove `projectConfig.settings.desknet.scheduleEnabled`, because it has no longer has any effect. The schedule will be enabled when Desk-Net is enabled in the server config, and the content type has the li-desknet-schedule metadata plugin.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4647)

### Deprecate ui.config.rows of li-text

Remove `ui.config.rows` config of metadata plugin `li-text`. If defined, replace it with `config.allowNewlines: true`, if you want to allow newline characters stored.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4707)

## APIs :gift:

### Publication Delivery

- :gift: Add server API `publicationApi.getDeliveryStatusReport({projectId, documentId})`
- :gift: Add server API `publicationApi.triggerBuild` -> fires a new [Server Event]({{< ref "/customising/advanced/server-events" >}}) `document.build`
- :gift: Add `POST /api/v1/documents/:documentId/addDeliveryStatus` endpoint to Public API
- :gift: Add [Server Event]({{< ref "/customising/advanced/server-events" >}}) `document.build`
- :gift: Add [Webhook Event]({{< ref "/reference/webhooks" >}}) `document.build`

* [Guide](https://docs.livingdocs.io/guides/editor/publish-control/delivery/)
* [PR: Delivery Status Fetching](https://github.com/livingdocsIO/livingdocs-server/pull/4740)
* [PR: Delivery Status Reporting](https://github.com/livingdocsIO/livingdocs-server/pull/4731)

## Other Changes

### Security

* [Cheerio is now an optional dependency, downstream has to include it](https://github.com/livingdocsIO/livingdocs-server/pull/4838)
* [Google Vision and Google Translate are now an optional dependency, downstream has to include it](https://github.com/livingdocsIO/livingdocs-server/pull/4833)

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
- [v194.0.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.31): fix(document-lists): Support list updates with a lot of document ids
- [v194.0.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.30): fix(performance): Give postgres better query hints by adding a project_id to content type joins
- [v194.0.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.29): fix(scheduled-publishing): Coerce schedule dates to a proper iso date with time zone
- [v194.0.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.28): fix(local-authentication): Make the current_password validation more strict
- [v194.0.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.27): fix: extend test for filtering unknown components when nested default content is defined in the contentType
- [v194.0.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.26): fix(xmldom): Update `@xmldom/xmldom` to a newer release that includes fix for security vulnerability
- [v194.0.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.25): fix(desknet): Prevent empty userId from Desk-Net
- [v194.0.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.24): fix(metadata): li-publish-date failing validation
- [v194.0.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.23): fix(logs): Error logs were missing the stack sometimes due to missing `...serializers` in `serializers`
- [v194.0.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.22): fix(print): Add params to print export
- [v194.0.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.21): fix(redis): Set sentinel username and password if credentials are set
- [v194.0.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.20): fix(includes): Fix paramsSchema `config.published` handling
- [v194.0.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.19): fix(unPublishNow): Workflow improved/implemented
- [v194.0.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.18): fix(desknet): Check value changed before publication status sync
- [v194.0.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.17): fix(includes): load drafts in preview
- [v194.0.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.16): fix(desknet): get all desknet entries in search
- [v194.0.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.15): fix(media-library): Allow to add translation assets into a MediaLibraryEntry
- [v194.0.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.14): fix: incorporate feedback
- [v194.0.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.13): test(import): mediaLibraryEntry import - fix tests after open up schema again
- [v194.0.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.12): fix(publicApi): Allow to import MediaLibraryEntries of type video
- [v194.0.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.11): fix(hugo-api): Make royaltyRecipients path configurable
- [v194.0.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.10): fix: add index for user_id in user_occupations
- [v194.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.9): fix(desknet): Get default content from content type, not settings
- [v194.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.8): fix(cheerio): `cheerio` can be passed from downstream implementation to `CheerioHtml` in `params` argument, wrapper around cheerio require
- [v194.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.7): fix: allow null values for 'validFrom' and 'validTo'.
- [v194.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.6): fix(google-vision): Rework google vision feature register function and set to disable by default
- [v194.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.5): chore(httpServer): Log deprecation warnings about server configs that moved to httpServer
- [v194.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.4): fix(issue-management): enable composition api
- [v194.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v194.0.3): fix: add assets property to contentType config
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
- [v81.20.91](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.91): fix(scheduled-publishing): handle iso date only once
- [v81.20.90](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.90): fix(occupations): Migrate to utc time queries on the billing screen
- [v81.20.89](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.89): fix(scheduled-publishing): Send iso dates with timestamp to the server
- [v81.20.88](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.88): fix(metadata): Re-render metadata form every time panel is opened
- [v81.20.87](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.87): fix(security): Applies all security patches that do not have the patch in a breaking version
- [v81.20.86](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.86): fix(security): Upgrade `socket.io` to fix critical vulnerability
- [v81.20.85](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.85): fix(security): Upgrade `resolve-url-loader` to fix `loader-utils` critical vulnerability
- [v81.20.84](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.84): fix(metadata): Wrap document references in default list
- [v81.20.83](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.83): chore(li-link-edit): tests added
- [v81.20.82](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.82): fix(namedCrops): Delete button works correctly
- [v81.20.81](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.81): fix: add system user for empty userid
- [v81.20.80](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.80): fix(metadata): Prevent manual source with image config sync update
- [v81.20.79](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.79): fix(inlineListEditor): Only publishable when dirty
- [v81.20.78](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.78): fix: change to selected service on copy
- [v81.20.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.77): fix(translationCard): loading state correct
- [v81.20.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.76): fix(count): For reference list
- [v81.20.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.75): fix: escape error messages on login screen
- [v81.20.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.74): fix(table dashboard): don't show the empty state while loading a search result but the old result until the new one is ready
- [v81.20.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.73): fix(dashboards): Handle `published: false` in legacy dashboards
- [v81.20.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.72): refactor: optimize code for internal vs external link handling
- [v81.20.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.71): fix: correctly compute minHeight with an incomplete config
- [v81.20.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.70): fix: update framework 24.3.4
- [v81.20.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.69): fix(conflictUI): Discard and Apply buttons correctly positioned
- [v81.20.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.68): fix: prevent refreshing table dashboard when loading more elements
- [v81.20.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.67): fix: prevent endless calling of finalDashboardConfig by moving it from a computed property to the creation lifecycle
- [v81.20.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.66): fix(li-tree): reset search results properly
- [v81.20.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.65): fix(metadata): ensure teaser card in li-document-references doesn't overflow
- [v81.20.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.64): fix(issue-management): improve UX
- [v81.20.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.63): fix(resetFilterButton): Correctly styled
- [v81.20.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.62): fix(unpublishNow): Calls correct server endpoint
- [v81.20.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.61): chore(li-tree): implement code review feedback
- [v81.20.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.60): chore(li-tree): implement code review feedback
- [v81.20.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.59): fix(li-tree): do not remove link/reference when updatinglabel name
- [v81.20.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.58): fix(publish): Back returns to custom dashboard after create
- [v81.20.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.57): fix: full body iframe height and better growth detection
- [v81.20.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.56): fix(media-library): Restore upload center placeholders
- [v81.20.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.55): fix(findIdfromUrl): Updated regex finder
- [v81.20.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.54): fix: include target in component Link
- [v81.20.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.53): fix: make sure selected items fit inside the dropdown
- [v81.20.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.52): code(multi-language): incorporate review feedback
- [v81.20.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.51): fix(documentList): Icon is reactive
- [v81.20.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.50): fix(findIdfromUrl): Updated regex finder
- [v81.20.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.49): fix: ignore htmlmin from webpack on two html files
- [v81.20.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.48): fix(metadata): Only handle `true` for legacy searchOnlyPublished
- [v81.20.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.47): fix(metadata): Fix legacy configs with document reference dialogs
- [v81.20.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.46): fix(dashboards): Always use create wizard for multi-channel projects
- [v81.20.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.45): fix(realtime): Handle wrapped error objects from Pusher
- [v81.20.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.44): fix(mismatched): Password realigned
- [v81.20.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.43): fix(teaser): set default params
- [v81.20.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.41): fix(toolbar): Handle anchor links as internal
- [v81.20.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.40): fix(creation-flow): Prefill values after creating document
- [v81.20.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.39): fix(editor): fix prepare-publication endless loop
- [v81.20.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.38): fix(German Comments): Mix up corrected
- [v81.20.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.37): fix: remove unnecessary newline
- [v81.20.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.36): fix(metadata): fix vue type of reference label to not log error
- [v81.20.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.35): fix(media-library): Move validity icon to avoid duration overlap
- [v81.20.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.34): chore(cypress): improve the video test reliability
- [v81.20.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.33): fix(properties): Hide teaser format select when no transforms
- [v81.20.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.32): fix(li-component-link): update link if component changed
- [v81.20.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.31): chore(prepare-publish): implement code review feedback
- [v81.20.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.30): fix(ComponentLink): Now moves with componentSelection
- [v81.20.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.29): fix: clearing of 'validFrom' and 'validTo'
- [v81.20.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.28): fix(copyButton): Article State persists on cancel
- [v81.20.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.27): fix(desknet-create): resolve includes
- [v81.20.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.26): fix(insert panel): Divider visibility
- [v81.20.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.25): fix(Session): Styling updated when expired
- [v81.20.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.24): fix(table dashboards): provide a documentLoader to dashboard cards
- [v81.20.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.23): fix(documentSoftLock): Counter alginment
- [v81.20.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.22): fix: close document copy popup when clicking on X or outside the popup
- [v81.20.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.21): chore: improve comment
- [v81.20.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.20): fix: update framework to latest release-2022-09 patch 24.3.3
- [v81.20.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.19): chore(text-formatting): Remove AngularJS component link directive
- [v81.20.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.18): fix(archived documents): Are removed from multilist inbox
- [v81.20.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.17): fix(li-metadata-form): save open/closed state of metadata cards for each contentType seperatly
- [v81.20.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.16): fix(metadata-mapper): always emit event when updating metadata
- [v81.20.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.15): fix(text only buttons): Spacing
- [v81.20.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.14): fix(history): Prevent app from crashing when toggling history
- [v81.20.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.13): fix: log framework violations after initialization
- [v81.20.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.12): fix(dashboards): Add back button fallback
- [v81.20.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.11): fix(document editing toolbar): enable flyouts opened from hidden actions on narrow screens
- [v81.20.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.10): fix: handle cases where no teaserComponents are configured
- [v81.20.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.9): fix: use require instead of import for VUE composition apis
- [v81.20.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v81.20.8): fix(dashboards): when a dashboard holds a configured document creation flow button(s), no default create button is shown
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
