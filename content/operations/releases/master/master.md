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
* :new: fix: bump framework to version 23.0.3 [livingdocs-server #4269 v171.1.6](https://github.com/livingdocsIO/livingdocs-server/pull/4269)
* :new: fix(publicApi): add id to nodes in menu [livingdocs-server #4282 v171.1.5](https://github.com/livingdocsIO/livingdocs-server/pull/4282)
* :new: fix: scroll to an editable only when scroll is manually triggered [livingdocs-editor #5044 v77.2.4](https://github.com/livingdocsIO/livingdocs-editor/pull/5044)
* :new: Prevent user from adding duplicates within Retresco and iMatrics [livingdocs-editor #5068 v77.2.3](https://github.com/livingdocsIO/livingdocs-editor/pull/5068)
* :new: fix(document editing toolbar): reliably close flyouts on outside click [livingdocs-editor #5067 v77.2.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5067)
* :new: fix(retresco): Update Cypress tests to match mock API changes [livingdocs-editor #5071 v77.2.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5071)
* :new: Replace request with axios [livingdocs-server #4278 v171.1.4](https://github.com/livingdocsIO/livingdocs-server/pull/4278)
* :new: chore(public-api): Supress and assert deprecation warnings [livingdocs-server #4277 v171.1.3](https://github.com/livingdocsIO/livingdocs-server/pull/4277)
* :new: Deprecate elasticsearch v6 [livingdocs-server #4276 v171.1.2](https://github.com/livingdocsIO/livingdocs-server/pull/4276)
* :new: Deprecate postgres older than v12 [livingdocs-server #4274 v171.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4274)
* :new: feat(public-api): Add document latestDraft beta endpoint [livingdocs-server #4224 v171.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4224)
* :new: Publish Control 2 [livingdocs-editor #5026 v77.2.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5026)
* :new: Remove server config `search.documentsMetadataFields` [livingdocs-server #4273 v171.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4273)
* :new: Table dashboard: support for li-category / li-document-reference [livingdocs-editor #5043 v77.1.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5043)
* :new: Table dashboard: config for li-category / li-document-reference [livingdocs-server #4243 v170.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4243)
* :new: iFrame UI: ensure mouseup events don't reach the framework interactive page [livingdocs-editor #5066 v77.0.15](https://github.com/livingdocsIO/livingdocs-editor/pull/5066)
* :new: fix(center buttons): load more article buttons centered [livingdocs-editor #5062 v77.0.14](https://github.com/livingdocsIO/livingdocs-editor/pull/5062)
* :new: ProjectSecrets: tolerate missing projectConfigs config [livingdocs-server #4272 v170.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4272)
* :new: feat(warnings): Setup lib module for emitting process warnings [livingdocs-server #4186 v170.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4186)
* :new: Fix target length reactivity [livingdocs-editor #5061 v77.0.13](https://github.com/livingdocsIO/livingdocs-editor/pull/5061)
* :new: fix(retresco): Make tag list expandable [livingdocs-editor #5055 v77.0.12](https://github.com/livingdocsIO/livingdocs-editor/pull/5055)
* :new: Remove `mediaLibraryEntry.added` server event [livingdocs-server #4270 v170.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4270)

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
|Postgres|14|
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
|Postgres|11 (Deprecated Postgres 11)|
|Elasticsearch|6.x (Deprecated)|
|Redis|5|
|Livingdocs Server Docker Image|livingdocs/server-base:14.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:14.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

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

## Vue Metadata Plugins

A much requested feature was adding metadata plugins with a custom Vue component. Finally we have it!

References:
* [Guide - Slug example implementation](https://docs.livingdocs.io/guides/documents/metadata/metadata-examples/)
* [Documentation - List of available metadata plugins](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list)
* [Documentation - Register a metadata plugin via Vue component registry](https://docs.livingdocs.io/reference-docs/editor-extensions/vue-component-registry)

## Table Dashboards

TODO@roman: add description + documentation

References:
* [Documentation]()
* [config PR](https://github.com/livingdocsIO/livingdocs-server/pull/4145)
* [component PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4934)
* [metadata editing PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5022)

## Retresco integration

We integrated `Retresco` tagging system to automatically add tags to a document with a nice UI. The supported functionality is:
- automated adding of tags (via Retresco) to a Livingdocs document
- ability to change tags via Editor

* References
  * [Documentation](https://docs.livingdocs.io/reference-docs/project-config/settings/)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5013)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4215)

## Video Includes

Video includes provide a more flexible approach to embedding videos within a document than using the standard media library entry directly. The media library approach does not have an integrated solution for video transcoding, so it would only be possible to render the original video file to HTML. On the other hand, using an include service allows you to hook into an external service or data store which could provide the transcoded assets you require.

* References
  * [Documentation]({{< ref "/guides/media-library/video-includes" >}})
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4796)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4054)
  * [Video reference form upload](https://github.com/livingdocsIO/livingdocs-editor/pull/4823)

## Document Inbox Extensions

TODO@ajwild: add description + documentation

* -> Add to inbox from media library dashboard:
* -> Document inbox side-panel in the editor:
* -> Updated the dashboard results group header used when there are multiple media sources

* References
  * [TODO: Documentation]()
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4852)

## oEmbed Include

TODO@ajwild: add description + documentation

References:
* [Documentation](TODO)
* [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4942)
* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4156)


## Breaking Changes :fire:

### Migrate the database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
# migration - 173-add-user-ids-to-document-lists.js
# migration - 174-add-range-query-functions.js
# migration - 175-drop-documents-content-type-document-type-and-channel.js
# migration - 176-publish-control.js
# migration - 177-document_revisions-document_id-deferrable.js
livingdocs-server migrate up
```

### Remove Support for Postgres 9 + 10 :fire:

:fire: Support for Postgres 9 + 10 has been removed, Please Update to Postgres 14 (11+ is supported).

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

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4163)

### Remove columns from documents / document_publication_events table :fire:

💣 Remove `metadata_id`, `channel_id`, `content_type` and `document_type` columns from the `documents` table
💣 Remove `channel_id`, `content_type` and `document_type` columns from the `document_publication_events` table

Those changes shouldn't affect any downstream, but in case there are direct sql queries against the database, you need to switch to queries that use the `content_type_id` column.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4165)


### Remove support for callbacks in multiple server API's :fire:

We removed Callback support in several server API's as we noticed many bugs originating from mixing callbacks and promises. So we continue to phase out callbacks in all APIs. In the next releases we will continue with the removal of callbacks in server API's. All server API's already support Promises, therefore you can prepare the downstream migration from Callbacks to Promises.

An example how to migrate the APIs you will find in [September 2021 Release]({{< ref "operations/releases/release-2021-09/release-2021-09.md" >}})

- 🔥 remove callback support of `channelConfig` (`server.features.api('li-channel-configs').write`) functions. Only promise based calls are supported
- 🔥 remove callback support of `documentApi` (`server.features.api('li-documents').document`) functions. Only promise based calls are supported
- 🔥 remove callback support of `pushNotifications` (`server.features.api('li-push-notifications').publication`) functions. Only promise based calls are supported
- 🔥 remove callback support of `publicationApi` (`server.features.api('li-documents').publication`) functions. Only promise based calls are supported
- 🔥 remove callback support of `pusherApi` (`server.features.api('li-pusher-authentication')`) functions. Only promise based calls are supported
- 🔥 remove callback support of `hugoApi` (`server.features.api('li-hugo')`) functions. Only promise based calls are supported


References:
* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4194)
* [Server PR2](https://github.com/livingdocsIO/livingdocs-server/pull/3938)


### Remove prepublishHook :fire:

🔥 removed server hook `prepublishHook`
🔥 renamed server config `integrations.retresco.registerPrepublishHook` to `integrations.retresco.registerPreparePublishHook`

If you want to keep the functionality of the `prepublishHook`, you can use the `preparePublishHook`. For alternatives and explanations check the [Server Hooks documentation](https://docs.livingdocs.io/reference-docs/server-extensions/server-hooks/#publication-hooks)

```js
// migrate from
async prepublishHookAsync ({documentVersion}) {
  // modify documentVersion
  return {documentVersion}
}
// to
async preparePublishHookAsync ({documentVersion}) {
  // modify documentVersion
  return
}
```

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4257)


### Remove publishHook :fire:

🔥 removed `publishHook` (throws an error on server startup)

If you want to keep the functionality of the `publishHook`, you can use the `preparePublishHook` (modify the document) or `postPublishHook` (notify other systems). For more explanations check the [Server Hooks documentation](https://docs.livingdocs.io/reference-docs/server-extensions/server-hooks/#publication-hooks)

**Example 1 - migration from publishHook to preparePublishHook**
```js
// migrate from
async publishHookAsync ({documentVersion}) {
  // modify documentVersion
  return {documentVersion}
}
// to
async preparePublishHookAsync ({documentVersion}) {
  // modify documentVersion
  return
}
```

**Example 2 - migration from publishHook to postPublishHook**
```js
// migrate from
async publishHookAsync ({documentVersion}) {
  // notify other system
  return {documentVersion}
}
// to
async postPublishHookAsync ({documentVersion}) {
  // notify other system
  return
}
```

**Example 3 - migrate document rendering**
```js
// if you have used the document rendering in the publication hook, you can still use the functionality
// but you have to go over the publicationApi

async publishHookAsync (params) {
  const {documentVersion, renditions} = await params.render()
  await pushRenditionsToExternalService(renditions)
  return {documentVersion}
}
// to
async postPublishHookAsync (params) {
  const publicationApi = server.features.api('li-documents').publication
  const {documentVersion, renditions} = await publicationApi.render(params.documentVersion)
  await pushRenditionsToExternalService(renditions)
  return
}
```

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4259)

### Rename metadata.onPublish hook to metadata.onPreparePublish hook :fire:

🔥 rename `metadata.onPublish` hook to `metadata.onPreparePublish` hook (API stays same)

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4264)

### unpublishHook parameter change :fire:

:fire: Change the parameters in `unpublishHook`.
- `params.payload.documentVersion` moved to `params.documentVersion`.
- Access of `params.payload` now throws an error

**Migration example**
```js
async unpublishHookAsync ({documentVersion}) {
  // params.payload.documentVersion moved to params.documentVersion
  await doSomething(documentVersion)
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

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4160)

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

### desk-net access removed for read API token :fire:

:fire: removed `desk-net` access for document read API token

If you want to have access to Desk Net with your API token, you need to add the "desk-net integration API access" via API tokens in the editor

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4225)

### Render default UI component per metadata type :fire:

For some metadata plugins, a default UI component is now rendered if `config.hideFromForm` is not set to `true` for a specific metadata property.

add `hideFromForm: true` to the metadata config for any metadata property you want to see **not** rendered and is not in this list:
`li-dependencies`, `li-document-lock`, `li-google-vision`, `li-media-language`, `li-metadata-translations`, `li-moderated-collab`, `li-print`, `li-push-notifications`, `li-routing`, `li-task-v2`.

```js
// contentType config
{
  metadata: [
    {
      handle: 'myText',
      type: 'li-text',
      config: {
        hideFromForm: true
      }
    }
  ]
}
```

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5041)


### Use Vue based form rendering by default :fire:

🔥 editor config `app.metadata.useVueBasedFormRendering` has no effect anymore (remove the config)

Any downstream AngularJS based custom UI component should work as expected. If you have any problems, please do this:
- Tell your contact at Livingdocs about the problem you see. We will make sure to fix the issue.
- Set editor config `app.metadata.useAngularBasedFormRendering: true` in your editor config to temporarily switch back to the Angular based form rendering. This will be possible for `release-2022-03` only and removed in `release-2022-05`.

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5016)

### Filter unconfigured metadata in publicApi :fire:

Unconfigured metadata are now filtered from the `publicApi`. After a project configuration is updated the metadata properties not configured anymore will be filtered immediately. When saving a document from the editor with an unconfigured property the save will now succeed and unconfigured properties are 'ghosted' in the save operation. The importer will still throw errors for unconfigured metadata properties.

🔥 Filter unconfigured properties from `public Api`

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4228)


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

### Elasticsearch

Elasticsearch 6.x is now deprecated. Please update to Elasticsearch 7 whenever possible.

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

### Config ui.component in metadata plugin config

Configuring `ui.component` with the default component name for a type is now deprecated. Please consult the [documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list) to learn about the default components per type. If you have the default component configured, please remove the `ui.component` configuration.

An example:
```js
// contentType config
{
  metadata: [
    {
      handle: 'title',
      type: 'li-text',
      ui: {
        component: 'liMetaTextForm'
      }
    }
  ]
}

// can be configured like this with the same effect:
{
  metadata: [
    {
      handle: 'title',
      type: 'li-text'
    }
  ]
}
```

References:
- [Documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list)
- [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5041)


### Deprecate documentWriteModel.metadataContent

Deprecate `documentWriteModel.metadataContent` use `documentWriteModel.metadata` instead.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4250)

## APIs :gift:

### Public API

Add `replaceAsset` operation at `PATCH api/v1/mediaLibrary/:id`

References:
- [Documentation]({{< ref "/reference-docs/public-api/media-library" >}})
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4109)

### Server Config

🎁 Support a `accessTokenCacheSize` config to increase the token cache size on heavy used servers | [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4118)

### Server APIs

#### hooksApi

🎁 Add `preparePublishHookAsync` to the instant publishing process
🎁 Add `postPublishHookAsync` to the instant publishing process

References:
* [Documentation]({{< ref "/reference-docs/server-extensions/server-hooks" >}})
* [Server Pull Request](https://github.com/livingdocsIO/livingdocs-server/pull/4146)

#### documentApi

🎁 Add `documentApi.unregisterPublicationServerHooks` function to support removal of hooks added using `documentApi.registerPublicationServerHooks` | [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4106)

#### Renderpipeline

remove `renderInProcess` option in `renderPipeline.renderDocumentVersion({documentVersion, renderInProcess})`. The parameter didn't have any effect anymore | [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4106)

## Other Changes

### Security
* Throw error on invalid offsets [livingdocs-server #4261 v165.6.6](https://github.com/livingdocsIO/livingdocs-server/pull/4261)

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
* Metadata Plugin: New plugin char counter `li-target-length` introduced [livingdocs-editor #5009 v75.2.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5009)
* Text editing: Allow trim config [livingdocs-editor #5021 v75.2.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5021)
* Add `transformWebhookRequest` to transform the webhook request [livingdocs-server #4218 v164.7.0](https://github.com/livingdocsIO/livingdocs-server/pull/4218)
* Project seeding: Allow secrets to be seeded [livingdocs-server #4230 v165.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4230)

### Design

* Normalize language labels [livingdocs-editor #4897 v74.14.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4897)
* Use System Fonts instead of Roboto [livingdocs-editor #4659 v74.18.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4659)
* Improvement/buttons and small visual improvements [livingdocs-editor #4985 v74.26.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4985)
* doc-link UI: fix button look [livingdocs-editor #4993 v75.0.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4993)
* design update of li-mails-update [livingdocs-server #4211 v164.4.1](https://github.com/livingdocsIO/livingdocs-server/pull/4211)
* Improvement Vue select [livingdocs-editor #5035 v75.7.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5035)

### Improvements

* Support modules in metadataPlugins config [livingdocs-server #4148 v159.1.5](https://github.com/livingdocsIO/livingdocs-server/pull/4148)
* Migrate knex queries to db.sql / prep for non-transactional query pool [livingdocs-server #4157 v159.4.0](https://github.com/livingdocsIO/livingdocs-server/pull/4157)
* Project Config: Support breaking project config changes [livingdocs-editor #4957 v74.23.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4957)
* DB: Configure a maximum connection lifetime in postgres [livingdocs-server #4220 v164.6.0](https://github.com/livingdocsIO/livingdocs-server/pull/4220)
* Server Hooks: Throw if a publication hook does not exist [livingdocs-server #4255 v165.6.3](https://github.com/livingdocsIO/livingdocs-server/pull/4255)
* Includes: Show error messages when include service is not registered [livingdocs-editor #5056 v77.0.10](https://github.com/livingdocsIO/livingdocs-editor/pull/5056)


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
  * Prevent editing of deleted documents [livingdocs-server #4178 v164.10.1](https://github.com/livingdocsIO/livingdocs-server/pull/4178)
* UI
  * Stops notifications covering each other up [livingdocs-editor #4948 v74.20.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4948)
  * Fix «click outside» handling [livingdocs-editor #4925 v74.18.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4925)
  * Prevent double click on migration accept button [livingdocs-editor #5049 v77.0.5](https://github.com/livingdocsIO/livingdocs-editor/pull/5049)
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
  * Migration: do not run prepareMigration.start for version bumps [livingdocs-server #4258 v165.6.4](https://github.com/livingdocsIO/livingdocs-server/pull/4258)
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
