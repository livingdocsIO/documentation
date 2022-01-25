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
* :new: Publish Control Queue - Part 1 [livingdocs-server #4193 v164.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4193)
* :new: fix(iframe button styles): Now flex and correct styles [livingdocs-editor #4993 v75.0.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4993)
* :new: Do not support callbacks in documentApi/projectApi/channelConfig/pushNotifications/pusherApi [livingdocs-server #4194 v164.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4194)
* :new: Remove Support for tasks-v1 [livingdocs-server #4196 v163.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4196)
* :new: Remove Support for tasks-v1 [livingdocs-editor #4361 v75.0.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4361)
* :new: oEmbed Include [livingdocs-server #4156 v162.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4156)
* :new: oEmbed Include [livingdocs-editor #4942 v74.28.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4942)
* :new: Fix google vision API [livingdocs-server #4198 v162.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4198)
* :new: fix: reopen comment doesn't mark the comment [livingdocs-editor #4987 v74.27.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4987)
* :new: Server configuration: Expose mediaLibrary.images.processing.lossy.maxDimension [livingdocs-server #4187 v162.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4187)
* :new: Automatic named crops: Take into account maxDimension from server config [livingdocs-editor #4981 v74.27.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4981)
* :new: Improvement/buttons and small visual improvements [livingdocs-editor #4985 v74.26.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4985)
* :new: Fix: Project Settings Screens [livingdocs-editor #4984 v74.26.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4984)
* :new: fix: enable show comments after creating a new comment [livingdocs-editor #4976 v74.26.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4976)
* :new: Fix SSO strategy builder parameters [livingdocs-server #4192 v162.0.3](https://github.com/livingdocsIO/livingdocs-server/pull/4192)
* :new: Use correct elasticsearch client for index search [livingdocs-server #4189 v162.0.2](https://github.com/livingdocsIO/livingdocs-server/pull/4189)
* :new: fix(environments): Move editable.js locales to correct location [livingdocs-editor #4939 v74.26.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4939)
* :new: fix(comments toolbar): comments data now from workspace [livingdocs-editor #4962 v74.25.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4962)
* :new: fix(workspaceUnloading): Workspace is unloaded now if softLocked [livingdocs-editor #4977 v74.25.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4977)
* :new: Improve accessTokenSigningKeys misconfiguration errors [livingdocs-server #4184 v162.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4184)
* :new: feat(search): Don't search for exact document id matches [livingdocs-server #4155 v162.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4155)
* :new: feat(search): Show tooltip for document id match [livingdocs-editor #4941 v74.25.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4941)
* :new: Main navigation groups [livingdocs-server #4152 v161.3.0](https://github.com/livingdocsIO/livingdocs-server/pull/4152)
* :new: feat(navigation): Add support for groups [livingdocs-editor #4937 v74.24.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4937)
* :new: Fix node 14 compatibility in `livingdocs-server key-generate convert-hs256` [livingdocs-server #4182 v161.2.5](https://github.com/livingdocsIO/livingdocs-server/pull/4182)
* :new: fix(webpack): Lock mini-css-extract-plugin version to 2.4 [livingdocs-editor #4972 v74.23.4](https://github.com/livingdocsIO/livingdocs-editor/pull/4972)
* :new: fix(webhookEvent): webhook event now fired when documents unpublished [livingdocs-server #4174 v161.2.4](https://github.com/livingdocsIO/livingdocs-server/pull/4174)
* :new: Make Desk-Net category optional [livingdocs-server #4176 v161.2.3](https://github.com/livingdocsIO/livingdocs-server/pull/4176)
* :new: Metadata: Ensure client side validation works in Vue Metadata Forms [livingdocs-editor #4971 v74.23.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4971)
* :new: Remove /public-api endpoint in the Editor and change link to the publicApi documentation [livingdocs-editor #4970 v74.23.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4970)
* :new: fix(buttonType): Button types re-added for new li-buttons [livingdocs-editor #4965 v74.23.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4965)
* :new: 🐞 Video: fix 'unsupported architecture' error on server start [livingdocs-server #4173 v161.2.2](https://github.com/livingdocsIO/livingdocs-server/pull/4173)
* :new: Support breaking project config changes [livingdocs-editor #4957 v74.23.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4957)
* :new: Show year in edit history when it's not the current year [livingdocs-editor #4964 v74.22.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4964)
* :new: Fix(alert styling): Whats new user menu icon positioning fix [livingdocs-editor #4943 v74.21.5](https://github.com/livingdocsIO/livingdocs-editor/pull/4943)


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

References:
- [PR 1](https://github.com/livingdocsIO/livingdocs-editor/pull/4919)
- [PR 2](https://github.com/livingdocsIO/livingdocs-editor/pull/4638)

## Document Inbox Extensions

TODO: add description + documentation

* :new: Document inbox extension [livingdocs-editor #4852 v74.15.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4852)
* -> Add to inbox from media library dashboard:
* -> Document inbox side-panel in the editor:
* -> Updated the dashboard results group header used when there are multiple media sources

## Publish Control

TODO: add description + documentation + decide if the feature is already part of the release

References:
* [Server Publish Control - Part III](https://github.com/livingdocsIO/livingdocs-server/pull/4146)

## Table Dashboards

TODO: add description + documentation

References:
* [config PR](https://github.com/livingdocsIO/livingdocs-server/pull/4145)
* [component PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4934)

## Vue Metadata Plugins

TODO: add description + documentation

References:
* [Iteration 1](https://github.com/livingdocsIO/livingdocs-editor/pull/4836)


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

### Design

* Normalize language labels [livingdocs-editor #4897 v74.14.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4897)
* Use System Fonts instead of Roboto [livingdocs-editor #4659 v74.18.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4659)

### Improvements

* Support modules in metadataPlugins config [livingdocs-server #4148 v159.1.5](https://github.com/livingdocsIO/livingdocs-server/pull/4148)
* Migrate knex queries to db.sql / prep for non-transactional query pool [livingdocs-server #4157 v159.4.0](https://github.com/livingdocsIO/livingdocs-server/pull/4157)

### Bugfixes

* Editor
  * Translations: Show all related translations [livingdocs-editor #4816 v74.9.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4816)
  * Filter: Remove support to delete filter sets in other projects [livingdocs-editor #4933 v74.16.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4933)
  * Kanban Boards: fix race condition from user and metadata update event triggered searches  [livingdocs-editor #4877 v74.13.9](https://github.com/livingdocsIO/livingdocs-editor/pull/4877)
  * Character Counter: The character counter now works correctly after a component got transformed [livingdocs-editor #4886 v74.13.12](https://github.com/livingdocsIO/livingdocs-editor/pull/4886)
  * Prevent transformation of pinned components [livingdocs-editor #4926 v74.16.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4926)
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
