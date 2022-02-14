---
type: release-notes
title: March 2022 Release
description: Release notes for release-2022-03
excludeFromSearch: true
aliases:
  - /operations/releases/release-2022-03/release-2022-03/
---

{{< release-header
  title="March 2022 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2022-03"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* :new: fix: prevent editing of deleted documents [livingdocs-server #4178 v164.10.1](https://github.com/livingdocsIO/livingdocs-server/pull/4178)
* :new: feat: filter out concepts based on the imatrics config 'ignoredConceptTypes' [livingdocs-editor #5031 v75.6.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5031)
* :new: fix: from iMatrics concepts get only the fields that are needed [livingdocs-server #4226 v164.10.0](https://github.com/livingdocsIO/livingdocs-server/pull/4226)
* :new: Table dashboard: metadata editing [livingdocs-server #4223 v164.9.0](https://github.com/livingdocsIO/livingdocs-server/pull/4223)
* :new: Table dashboard: metadata editing [livingdocs-editor #5022 v75.5.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5022)
* :new: Fix cpu metrics on prometheus /metrics endpoint [livingdocs-server #4227 v164.8.1](https://github.com/livingdocsIO/livingdocs-server/pull/4227)
* :new: Char Counter: new UI & li-target-length integration [livingdocs-editor #4997 v75.4.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4997)
* :new: feat: add api token scope for desk-net [livingdocs-server #4225 v164.8.0](https://github.com/livingdocsIO/livingdocs-server/pull/4225)
* :new: feat: add api token scope for desk-net in the API Token creation [livingdocs-editor #5025 v75.3.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5025)


**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Newsletter

* Newsletter: **TODO**
* Subscribe here: https://confirmsubscription.com/h/j/61B064416E79453D


## Webinar

### Features

* Recording: **TODO**
* Documentation: **TODO**

### Developers

* Recording: **TODO**
* Slides: **TODO**

## System Requirements

### Suggested
|Name|Version|
|-|-|
|Node|16|
|NPM|7|
|Postgres|14.1|
|Elasticsearch|7|
|Redis|6|
|Livingdocs Server Docker Image|livingdocs/server-base:16|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

### Minimal
|Name|Version|
|-|-|
|Node|14|
|NPM|7|
|Postgres|9.6 (Deprecated Postgres 9, 10, 11)|
|Elasticsearch|6.x|
|Redis|5|
|Livingdocs Server Docker Image|livingdocs/server-base:14.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:14.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

## Video Includes

TODO: add a description + documentation

* References
  * [TODO: Documentation]()
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4796)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4054)
  * [Video reference form upload](https://github.com/livingdocsIO/livingdocs-editor/pull/4823)

## Editing improvements

With this release we improved some behavior during editing a document:
- Support insert on ENTER on last editable of a multi-editable component
- Support container look-ahead for insert
- Support split / merge on ENTER / DEL on last editable of a multi-editable component
- Select text over multiple editables
- Fix arrow movement past empty doc-optional editables
- Allow formats to be set over links if the beginning or end is at a boundary
- Support copy of multiple components
- Support dragging multiple components from clipboard

References:
- [PR 1](https://github.com/livingdocsIO/livingdocs-editor/pull/4919)
- [PR 2](https://github.com/livingdocsIO/livingdocs-editor/pull/4638)
- [PR 3](https://github.com/livingdocsIO/livingdocs-editor/pull/4956)

## Document Inbox Extensions

TODO: add description + documentation

* :new: Document inbox extension [livingdocs-editor #4852 v74.15.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4852)
* -> Add to inbox from media library dashboard:
* -> Document inbox side-panel in the editor:
* -> Updated the dashboard results group header used when there are multiple media sources

## Publish Control

TODO: add description + documentation + decide if the feature is already part of the release

References:
* [Server Publish Control - Part 1 - Refactoring - Move render functions into publicationDelivery](https://github.com/livingdocsIO/livingdocs-server/pull/4193)
* [Server Publish Control - Part 2 - Clean up existing publish workflow](https://github.com/livingdocsIO/livingdocs-server/pull/4193)
* [Server Publish Control - Part 3 - Add new hooks to the instant publishing process](https://github.com/livingdocsIO/livingdocs-server/pull/4146)
* [Server Publish Control - Part 4 - Publish Control API](https://github.com/livingdocsIO/livingdocs-server/pull/4146)

## Table Dashboards

TODO: add description + documentation

References:
* [config PR](https://github.com/livingdocsIO/livingdocs-server/pull/4145)
* [component PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4934)

## Vue Metadata Plugins

TODO: add description + documentation

References:
* [Iteration 1](https://github.com/livingdocsIO/livingdocs-editor/pull/4836)

## oEmbed Include

TODO@ajwild: add description + documentation

References:
* [Documentation](TODO)
* [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4942)
* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4156)


## Breaking Changes :fire:

### Migrate the database :fire:

TODO: update migration section

- Expected duration?
- Possible data losses?
- Is it a simple migration? (fast/easy downgradable)

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
# migration - 111-add-comments-table.js
#   create comments table + add events to the stream_events_types table
livingdocs-server migrate up
```

### Migrate knex transactions to pg :fire:

💣  The knex instance on `liServer.db.connection` is deprecated
:fire: Knex transactions aren't compatible with livingdocs anymore. Please use `db.begin` instead:

```js
const db = liServer.db
liServer.db.begin(async (trx) => {
  db.sql`UPDATE something set foo = 'bar'`.transacting(trx)
  // or
  await trx.sql`UPDATE something set foo = 'bar'`
})
```

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4163)

### Remove columns from documents / document_publication_events table :fire:

💣 Remove `metadata_id`, `channel_id`, `content_type` and `document_type` columns from the `documents` table
💣 Remove `channel_id`, `content_type` and `document_type` columns from the `document_publication_events` table

Those changes shouldn't affect any downstream, but in case there are direct sql queries against the database, you need to switch to queries that use the `content_type_id` column.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4165)


### Remove support for callbacks in multiple server API's :fire:

We removed Callback support in several server API's as we noticed many bugs originating from mixing callbacks and promises. So we continue to phase out callbacks in all APIs. In the next releases we will continue with the removal of callbacks in server API's. All server API's already support Promises, therefore you can prepare the downstream migration from Callbacks to Promises.

An example how to migrate the APIs you will find in [September 2021 Release]({{< ref "operations/releases/release-2021-09/release-2021-09.md" >}})

- 🔥 remove callback support of `channelConfig` (`server.features.api('li-channel-configs').write`) functions. Only promise based calls are supported
- 🔥 remove callback support of `documentApi` (`server.features.api('li-documents').document`) functions. Only promise based calls are supported
- 🔥 remove callback support of `pushNotifications` (`server.features.api('li-push-notifications').publication`) functions. Only promise based calls are supported
- 🔥 remove callback support of `publicationApi` (`server.features.api('li-documents').publication`) functions. Only promise based calls are supported
- 🔥 remove callback support of `pusherApi` (`server.features.api('li-pusher-authentication')`) functions. Only promise based calls are supported

References:
* [server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4194)


### publishHook / unpublishHook parameter change :fire:

:fire: Change the parameters in `publishHook` and `unpublishHook`.
- `params.payload.documentVersion` moved to `params.documentVersion`. This `documentVersion` doesn't run through the render pipeline anymore. Please use `params.render()` to get the old behavior if you need to.
- `params.payload.renditions` got removed. Please use `params.render()` or the rendition api directly if you need to create a rendition. The usage of this function is discouraged as the publish hook gets executed within a transaction and it will degrade the performance and can cause deadlocks.
- Access of `params.payload` now throws an error
- `document.publish` event doesn't receive the renditions anymore
- `document.publish` event now receives the raw `documentVersion`, where `metadataPlugin.onRender` wasn't called.

**Migration example**
```js
async publishHookAsync (params) {
  // params.payload.documentVersion moved to params.documentVersion
  await doSomething(params.documentVersion)

  // params.payload.renditions got removed.
  // The render-pipeline doesn't get called anymore.
  // You can still call it explicitly, but that's discouraged
  // as the publishHook is executed within a transaction
  // and expensive operations will reduce the performance and can cause deadlocks:
  const {documentVersion, renditions} = await params.render()
  await pushRenditionsToExternalService(renditions)
}
```

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4123)

### Document Inbox - remove position parameter :fire:

The `position` parameter can no longer be passed to `server.features.api('li-document-inbox').removeItem({})` or `POST /documents/:documentId/inbox-remove`

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4081)

### Remove support for callbacks in projectApi :fire:

We removed Callback support in several server API's as we noticed many bugs originating from mixing callbacks and promises. So we continue to phase out callbacks in all APIs. In the next releases we will continue with the removal of callbacks in server API's. All server API's already support Promises, therefore you can prepare the downstream migration from Callbacks to Promises.

- 🔥 remove callback support for projectApi (`server.features.api('li-projects')`) functions. Only promise based calls are supported

You can find migration a migration example [here]({{< ref "/content/operations/releases/release-2021-09/release-2021-09.md#example-how-to-migrate" >}}).

References: [projectApi PR](https://github.com/livingdocsIO/livingdocs-server/pull/4160)

### Button group improvement :fire:

If you have any custom UI in your downstream that makes use of any of the following you want to read this:

No longer existing classes:
- `.ld-btn-group`, `.ld-btn-group__item`, `.ld-btn-group__item-v2`, `.ld-btn-group--right`, `.ld-btn-group--full`, `.ld-btn-group--toggle`, `.ld-btn-group--arrow`, `.ld-btn-group--cardchange`, `.ld-btn-group--selection`, `.ld-btn-group--center`, `.ld-btn-group--extension`

You are highly encouraged to refactor your markup / custom stylesheets to not use these things anymore. In order to ease that process, there is a file you can `@import` in your custom SCSS to get support for the mentioned classes and variables:
In the SCSS file you have configured as `CUSTOM_STYLE_PATH_BEFORE` or `CUSTOM_STYLE_PATH_AFTER` add this line at the top:
```sass
@import "~styles/backwards-compatibiliy/release-2022-02.scss";
```
This will define the removed classes within your SCSS file tree. Your custom UI will most probably look just fine. From there on you can refactor your code and remove the `@import "~styles/backwards-compatibiliy/release-2022-02.scss";` after you are done. We will keep this file around for some time, but it will eventually get removed. If you have any questions about this, don't hesitate to contact us.

**Required Actions for Refactoring**
In case you're making use of the above mentioned classes in your downstream:
- Replace any .li-btn-group or .li-button-group element with the new `<li-button-group>` Vue or Angular components
- Buttons should be placed directly within the component
- See the **style guide screenshot below** for examples

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4825)

### Document Search - Don't search for exact document id matches :fire:

:fire: `server.features.api('li-documents').document.find()` will no longer search by id if the search string is numeric.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4155)

### Remove Support for tasks-v1 :fire:

Tasks v1 is deprecated since 2 years. We removed it, because no customers use it to our knowledge.

**Steps to do for downstreams**
- delete editor config `app.taskTypes`
- delete metadata plugin projectConfig with type `li-tasks`
- delete elasticsearch document mapping for li-tasks (see [example](https://github.com/livingdocsIO/livingdocs-server/pull/3625/files))
- configure `tasks-v2`, if you want to continue using tasks, e.g.
  - [Proofreading Task Guide](https://docs.livingdocs.io/guides/editor/proofreading-task/)
  - [Add a custom task](https://docs.livingdocs.io/guides/editor/review-task/)

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4196)



## Deprecations

### Postgres

Postgres 11 is now deprecated. Please update to Postgres 14.1 whenever possible.

### Configuration `auth.accessTokenSecret`

The configuration `auth.accessTokenSecret` gets replaced by `auth.accessTokenSigningKeys`.
Old configurations are still valid, but make sure you'll convert your secret to a JSON web key as soon as you use the new configuration property.

```diff
  auth: {
-    accessTokenSecret: "some-secret-for-hmac256-token-signing"
      // Generate the JSON web key using
      //   $ livingdocs-server key-generate convert-hs256 'some-secret-for-hmac256-token-signing'
+    accessTokenSigningKeys: [{"kty":"oct","k":"c29tZS1zZWNyZXQtZm9yLWhtYWMyNTYtdG9rZW4tc2lnbmluZw","kid":"","alg":"HS256","use":"sig"}]
}
```

Take the existing `auth.accessTokenSecret` value and convert it to a JSON web key.
To ease the conversion, we have the following command that outputs the json
for the `auth.accessTokenSigningKeys` array:

```bash
livingdocs-server key-generate convert-hs256 'some-secret-for-hmac256-token-signing'
```

References:
* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4062)


## APIs :gift:

### Public API

TODO: Add link to documentation

Add `replaceAsset` operation at `PATCH api/v1/mediaLibrary/:id` | [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4109) | [Documentation]()

### Server Config

🎁 Support a `accessTokenCacheSize` config to increase the token cache size on heavy used servers | [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4118)

### Server APIs

#### hooksApi

TODO: Add link to documentation

🎁 Add `preparePublishHookAsync` to the instant publishing process
🎁 Add `postPublishHookAsync` to the instant publishing process

References:
* [Documentation]()
* [Server Pull Request](https://github.com/livingdocsIO/livingdocs-server/pull/4146)

#### documentApi

🎁 Add `documentApi.unregisterPublicationServerHooks` function to support removal of hooks added using `documentApi.registerPublicationServerHooks` | [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4106)

#### Renderpipeline

remove `renderInProcess` option in `renderPipeline.renderDocumentVersion({documentVersion, renderInProcess})`. The parameter didn't have any effect anymore | [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4106)




## Internal Changes

## Other Changes

### Features

* Editor
  * Navigation: Collapsible groups [livingdocs-editor #4935 v74.17.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4935)
  * Indexing: Support queue deletion in the indexing dashboard [livingdocs-editor #4947 v74.20.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4947)
  * MediaLibrary: Allow opening Image/Video in MediaLibrary from Properties Panel [livingdocs-editor #4846 v74.13.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4846)
* Project Config: add valueBefore to patches for diffing [livingdocs-server #4164 v161.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4164)
* Allow to delete documents with a missing contentType config [livingdocs-server #4169 v161.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4169)
* Data Source: Set default value in metadata of a data source [livingdocs-editor #4854 v74.13.8](https://github.com/livingdocsIO/livingdocs-editor/pull/4854)
* Print: Extend print metadata [livingdocs-server #4078 v157.5.6](https://github.com/livingdocsIO/livingdocs-server/pull/4078)
* Includes: Service switch for schema form [livingdocs-editor #4853 v74.13.17](https://github.com/livingdocsIO/livingdocs-editor/pull/4853)
* Queue metrics for Redis [livingdocs-server #4203 v164.3.0](https://github.com/livingdocsIO/livingdocs-server/pull/4203)
* Navigation: Add main navigation group config [livingdocs-server #4152 v161.3.0](https://github.com/livingdocsIO/livingdocs-server/pull/4152)
* Document Search: Show tooltip for document id match [livingdocs-editor #4941 v74.25.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4941)
* Load media sources in parallel [livingdocs-editor #5001 v75.1.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5001)
* Added `li-meta-target-length` plugin/form [livingdocs-editor #5009 v75.2.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5009)
* Text editing: Allow trim config [livingdocs-editor #5021 v75.2.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5021)
* Add `transformWebhookRequest` to transform the webhook request [livingdocs-server #4218 v164.7.0](https://github.com/livingdocsIO/livingdocs-server/pull/4218)

### Design

* Normalize language labels [livingdocs-editor #4897 v74.14.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4897)
* Use System Fonts instead of Roboto [livingdocs-editor #4659 v74.18.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4659)
* Improvement/buttons and small visual improvements [livingdocs-editor #4985 v74.26.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4985)
* doc-link UI: fix button look [livingdocs-editor #4993 v75.0.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4993)
* design update of li-mails-update [livingdocs-server #4211 v164.4.1](https://github.com/livingdocsIO/livingdocs-server/pull/4211)

### Improvements

* Support modules in metadataPlugins config [livingdocs-server #4148 v159.1.5](https://github.com/livingdocsIO/livingdocs-server/pull/4148)
* Migrate knex queries to db.sql / prep for non-transactional query pool [livingdocs-server #4157 v159.4.0](https://github.com/livingdocsIO/livingdocs-server/pull/4157)
* Project Config: Support breaking project config changes [livingdocs-editor #4957 v74.23.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4957)
* DB: Configure a maximum connection lifetime in postgres [livingdocs-server #4220 v164.6.0](https://github.com/livingdocsIO/livingdocs-server/pull/4220)

### Bugfixes

* Editor
  * Translations: Show all related translations [livingdocs-editor #4816 v74.9.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4816)
  * Filter: Remove support to delete filter sets in other projects [livingdocs-editor #4933 v74.16.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4933)
  * Kanban Boards: fix race condition from user and metadata update event triggered searches  [livingdocs-editor #4877 v74.13.9](https://github.com/livingdocsIO/livingdocs-editor/pull/4877)
  * Character Counter: The character counter now works correctly after a component got transformed [livingdocs-editor #4886 v74.13.12](https://github.com/livingdocsIO/livingdocs-editor/pull/4886)
  * Prevent transformation of pinned components [livingdocs-editor #4926 v74.16.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4926)
  * Undo doesn't work if you delete a bullet point list [livingdocs-editor #5012 v75.1.5](https://github.com/livingdocsIO/livingdocs-editor/pull/5012)
  * Prevent editing of deleted documents [livingdocs-editor #4974 v75.0.5](https://github.com/livingdocsIO/livingdocs-editor/pull/4974)
  * History: Show year in edit history when it's not the current year [livingdocs-editor #4964 v74.22.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4964)
  * Named Crops: Take into account server config 'maxDimension' for automatic cropping [livingdocs-editor #4981 v74.27.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4981)
* UI
  * Stops notifications covering each other up [livingdocs-editor #4948 v74.20.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4948)
  * Fix «click outside» handling [livingdocs-editor #4925 v74.18.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4925)
* Print
  * Only load/require the print feature if it's configured [livingdocs-server #4088 v157.5.5](https://github.com/livingdocsIO/livingdocs-server/pull/4088)
* Performance
  * Fix potential event loop blocking by logging circular references [livingdocs-server #4068 v157.5.2](https://github.com/livingdocsIO/livingdocs-server/pull/4068)
  * Fix endless redirect after login with custom startpage [livingdocs-editor #4856 v74.13.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4856)
  * Ensure script execution from angular templates when renderered in Vue [livingdocs-editor #4899 v74.13.19](https://github.com/livingdocsIO/livingdocs-editor/pull/4899)
* Storage
  * Fix date after remote update [livingdocs-editor #4844 v74.12.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4844)
  * Postgres: Fix postgres replica compatiblity [livingdocs-server #4130 v158.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4130)
  * Fix metadata autofill when drag and drop a Hugo image [livingdocs-editor #4954 v74.21.4](https://github.com/livingdocsIO/livingdocs-editor/pull/4954)
  * Handle files on drop from hugo for images [livingdocs-editor #4866 v74.13.5](https://github.com/livingdocsIO/livingdocs-editor/pull/4866)
  * Fix update concept for imatrics [livingdocs-editor #4873 v74.13.7](https://github.com/livingdocsIO/livingdocs-editor/pull/4873)
* Authorization
  * Send email after force resetting a user [livingdocs-server #4170 v161.2.1](https://github.com/livingdocsIO/livingdocs-server/pull/4170)
* Server
  * Video: fix 'unsupported architecture' error on server start [livingdocs-server #4173 v161.2.2](https://github.com/livingdocsIO/livingdocs-server/pull/4173)
  * Webhooks: fire webhook event on 'document.unpublished' event [livingdocs-server #4174 v161.2.4](https://github.com/livingdocsIO/livingdocs-server/pull/4174)
  * Fix WoodWing assets integration [livingdocs-server #4216 v164.4.4](https://github.com/livingdocsIO/livingdocs-server/pull/4216)
  * Search: Use correct elasticsearch client for 'indexingApi.search' and 'indexingApi.get'  [livingdocs-server #4189 v162.0.2](https://github.com/livingdocsIO/livingdocs-server/pull/4189)
  * Desk-Net: Make Desk-Net category optional [livingdocs-server #4176 v161.2.3](https://github.com/livingdocsIO/livingdocs-server/pull/4176)
* Comments
  * Update comments flyout correctly [livingdocs-editor #4962 v74.25.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4962)
  * Card buttons realigned [livingdocs-editor #5014 v75.1.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5014)
* Includes
  * Pass paramsSchemaExtension to includes core api getter [livingdocs-editor #4994 v75.0.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4994)
  * Set reference in video include drop handler [livingdocs-editor #4999 v75.0.8](https://github.com/livingdocsIO/livingdocs-editor/pull/4999)


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
