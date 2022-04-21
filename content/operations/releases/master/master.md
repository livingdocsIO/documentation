---
type: release-notes
title: May 2022 Release
description: Release notes for release-2022-05
excludeFromSearch: true
aliases:
  - /operations/releases/release-2022-05/release-2022-05/
---

{{< release-header
  title="May 2022 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2022-05"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* :new: Improvement/publish control polish [livingdocs-editor #5218 v79.0.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5218)


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

### Publish Control

TODO@beni: Could you add a description?

TODO
- Do we announce Publish Control already?
- And if yes, how? (Beta vs full fledged feature)
- Is there already documentation, how should it look like?
- Should we add a guide how to migrate from custom solutions to Publish Control?

* [Basic Document History](https://github.com/livingdocsIO/livingdocs-editor/pull/5069)
* [Scheduled Unpublish](https://github.com/livingdocsIO/livingdocs-editor/pull/5177)
* [Document Inbox Assignment](https://github.com/livingdocsIO/livingdocs-editor/pull/5185)
* [Homepage](https://github.com/livingdocsIO/livingdocs-editor/pull/5183)


### Table Dashboards

TODO@beni: is this description correct?

Table dashboards are a new flexible type of dashboards where individual columns can be configured.

The following functionality has been added:
* Table dashboard used as default for articles, pages, and data records
* Document creation from a table dashboard
* New filter configuration
* Inline editing of more metadata properties

The following functionality has been added last release:
* Basic configuration of table dashboards (main menu entry, filters, column layout)
* Display and inline editing for these metadata properties: `li-text`, `li-boolean`, `li-category`, `li-document-reference`
* Default column component that displays document thumbnail and title
* Custom components can be configured to render the content of a table cell



References:
* [Documentation]({{< ref "/reference-docs/project-config/editor-settings#example-table-dashboard" >}})
* [useLegacyDashbaords PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5142)
* [Added features to Table Dashboards PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5147)
* [Table Dashboard in document selection dialog PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5141)
* [Load documents from postgres by default](https://github.com/livingdocsIO/livingdocs-editor/pull/5173)
* [Allow for main cell configuration](https://github.com/livingdocsIO/livingdocs-editor/pull/5194)

### Desknet Integration

TODO:
- do we already announce the desknet integration?
- documentation is missing, when and how do we add that?

References:
* [Documentation@TODO](https://github.com/livingdocsIO/livingdocs-editor/pull/5134)
* [Desk-Net Schedule Side Panel](https://github.com/livingdocsIO/livingdocs-editor/pull/5134)
* [Metadata Plugin li-desknet-platforms](https://github.com/livingdocsIO/livingdocs-editor/pull/5155)

### Internationalization i18n

TODO@beni: Is this already something to announce? And if yes, how?

References:
* [Internationalization i18n Iteration 1](https://github.com/livingdocsIO/livingdocs-editor/pull/5179)


### Document Inbox Extensions

Media Library Entries can now sent to a document inbox and put into a document via drag + drop.

* References
  * [Documentation](https://docs.livingdocs.io/reference-docs/project-config/content-types/#document-inbox)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4852)




## Breaking Changes :fire:

### Migrate the database :fire:

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

### Remove callbacks for Server Hooks :fire:

All callback-based server hooks have been removed (throw an error on registration). Please visit the [server hooks documentation](https://docs.livingdocs.io/reference-docs/server-extensions/server-hooks/) to find examples of how to implement server hooks based on a promise.

**Publish Hooks**
- 🔥 remove `preparePublishHook` / `preparePublishHookCb` (throw err on registration)
- 🔥 remove `postPublishHook` / `postPublishHookCb` (throw err on registration)
- 🔥 remove `unpublishHook` / `unpublishHookCb` (throw err on registration)

**List Hooks**
- 🔥 remove `listUpdateHook` / `listUpdateHookCb` (throw err on registration)
- 🔥 remove support for 'getExternalList' of server hook 'registerListHooks' (throws err on registration) // fyi: has no effect since 1 year

**Render Hooks**
- 🔥 remove `beforeRenderHook` / `beforeRenderCb` (throw err on registration)
- 🔥 remove callback for `registerRenderHooks` (throws err on registration)

### Metadata Plugins: Add configSchema and uiSchema Validation :fire:

We added 2 properties `configSchema` and `uiSchema` to a metadata plugin where one can define a schema validation. If you want to know more about the motivation and a fallback (`metadataPluginsToIgnoreForConfigValidation`), you get some insights [here](https://github.com/livingdocsIO/livingdocs-server/pull/4296).

- :fire: Add strict validation for [`li-enum`](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-enum)
- :fire: Add strict validation for [`li-text`](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-text)
- :fire: Add strict validation for [`li-reference`](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-reference)
- :fire: Add strict validation for [`li-document-reference`](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-document-reference)

References:
- [Metadata Plugin List Documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list)
- [li-text PR](https://github.com/livingdocsIO/livingdocs-server/pull/4296)
- [li-enum PR](https://github.com/livingdocsIO/livingdocs-server/pull/4316)


### Remove Knex Support :fire:

- 💥 Remove `knex` client from `liServer.db.connection`. Please use `liServer.db.sql` if you really need to write db queries.
For customers using our migration cli with a custom migrations path: `livingdocs-server migrate up --path=./custom/migrations`:
- 💥 Drop knex and `Migration` class support in the migration library.
  Please write the migrations using sql or use a function:
  ```
  module.exports = {
    up: `
      SELECT version();
    `
  }
  ```

  ```
  module.exports = {
    async up ({db, trx}) {
      // do regular queries and execute them in the transaction
      await db.sql`SELECT version()`.transacting(trx)

      // or use `trx.sql` to do the same
      await trx.sql`SELECT version()`
    }
  }
  ```

References:
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4366)


### Remove unpublishHook / add postUnpublishHook :fire:

- :fire: Remove the `unpublishHook` in `registerPublicationHooks` and `registerPublicationServerHooks`
- 🎁 Introduce the `postUnpublishHook`

Please migrate your `unpublishHookAsync` hooks to `postUnpublishHookAsync`. The new hook is now executed outside transactions.

```diff
const documentsApi = liServer.features.api('li-documents')

documentsApi.registerPublicationHooks({
  projectHandle: 'my-project',
  channelHandle: 'web',
-  async unpublishHookAsync ({documentVersion}) {
-
-  }
+  async postUnpublishHookAsync ({documentVersion}) {
+
+  }
})
```

References:
- [Documentation](https://docs.livingdocs.io/reference-docs/server-extensions/server-hooks/)
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4371)

### Remove metadata plugin form fallback 'useAngularBasedFormRendering' :fire:

:fire: Opt-in to the Angular based form rendering (editor config `metadata.useAngularBasedFormRendering`) is not possible anymore.

References:
- [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5217)

### Remove Q drop handler :fire:

The drag and drop handling for the Q toolbox (by NZZ) for Q before March 2017 is removed since it's not in use anymore.

References:
- [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5169)


### Link Design Update :fire:

- CSS classes renamed
  - `.ld-link` is now called `.li-link`
  - `.li-link` has the definitions assigned that used to be assigned to `.li-link.li-link--default`
  - `.ld-link--pill` is now called `.li-pill`
  - `.ld-link--bar` is now called `.li-application-menu-item`

- CSS classes deleted (including the renamed ones)
  - `.ld-link-au-naturel`, `.li-link-group`, `.li-link-group__item`, `.ld-link--default`, `.ld-link--remove-hover`, `.ld-link--inherit`, `.ld-link--green`, `.ld-link--red`, `.ld-link--bright`, `.ld-link--gray`, `.ld-link--action`, `.ld-link--bar`, `.ld-link--pill`, `.ld-link--separated-pill`, `.ld-link--breadcrumb-pill`, `.ld-link--slim`, `.ld-link--pre-spacer`, `api-client-item__action`

#### Required Actions
You are highly encouraged to update your markup if you should be using any of the deleted or renamed classes. In order to ease that process, there is a file you can `@import` in your custom SCSS to get support for the mentioned classes and variables:
In the SCSS file you have configured as `CUSTOM_STYLE_PATH_BEFORE` or `CUSTOM_STYLE_PATH_AFTER` add this line at the top:
```sass
@import "~styles/backwards-compatibiliy/release-2022-05.scss";
```
This will define the removed classes within your SCSS file tree. Your custom UI will most probably look just fine. From there on you can refactor your code and remove the `@import "~styles/backwards-compatibiliy/release-2022-05.scss";` after you are done. We will keep this file around for some time, but it will eventually get removed. If you have any questions about this, don't hesitate to contact us.

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5171)


## Deprecations

### Deprecate metadata plugin li-media-language

Deprecate metadata plugin `li-media-language`, use `li-metadata-translations` instead (same config).

References:
- [Documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list)
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4315)

### Metadata Services

Metadata Services are deprecated.
- core plugins: Use a `DataSource` or a `dataProvider` instead.
- plugins: Use a `DataSource`, `dataProvider` or embed the service logic directly into your Vue component.

```js
// Example
{
  handle: 'municipalities',
  type: 'municipalities',
  ui: {
    component: 'liMetaSelectForm',
    service: 'municipalities', // <------------------ DEPRECATED
  },
  config: { /* ... */ }
}
```

References:
- [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5217)

## APIs :gift:

[Revoke Asset via Public API](https://github.com/livingdocsIO/livingdocs-server/pull/4402)

## Other Changes

### Security

### Features

* Metadata:
  * [add li-video-reference plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4345)
  * [add li-color plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4352)
* [Devices on Profile Page](https://github.com/livingdocsIO/livingdocs-editor/pull/5184)
* [Render paramsSchema with li-metadata-form-component](https://github.com/livingdocsIO/livingdocs-editor/pull/5132)
* [Admins can create empty projects via UI](https://github.com/livingdocsIO/livingdocs-editor/pull/5152)

### Design
* [Better contrast for user colors](https://github.com/livingdocsIO/livingdocs-editor/pull/5127)

### Improvements

* Editor
  * [Improve mouse selection](https://github.com/livingdocsIO/livingdocs-editor/pull/5095)
* Server
  * [Hooks: Lazy publish hook registration](https://github.com/livingdocsIO/livingdocs-server/pull/4309)
  * [Storage: Support any third party blob-store module in the storage config](https://github.com/livingdocsIO/livingdocs-server/pull/4334)
  * [Migration: Support parallel execution of `livingdocs-server migrate up`](https://github.com/livingdocsIO/livingdocs-server/pull/4366)
* Import
  * [Improve Showed Infos for Import Logs in Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5154)
  * [Improve Import Error Messages](https://github.com/livingdocsIO/livingdocs-server/pull/4381)
  * [Better error for parallel import of the same document](https://github.com/livingdocsIO/livingdocs-server/pull/4367)
  * [Better error on publish with missing required metadata](https://github.com/livingdocsIO/livingdocs-server/pull/4376)
  * [Better error when contentType does not exist](https://github.com/livingdocsIO/livingdocs-server/pull/4378)
  * [Better error on update and publish with missing required metadata](https://github.com/livingdocsIO/livingdocs-server/pull/4379)
* Metadata:
  * [Support multiple `isDefault` for li-form-multiselect](https://github.com/livingdocsIO/livingdocs-editor/pull/5146)
  * [Correctly apply startcase for default placeholder based on handle](https://github.com/livingdocsIO/livingdocs-editor/pull/5156)

### Bugfixes

* Editor
  * [Drag and Drop: Only cancel drags in the editor that also originated in the editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5078)
  * [Allow Angular fallback behaviour for metadata component rendering](https://github.com/livingdocsIO/livingdocs-editor/pull/5092)
  * [Show Subscript icon in text formatting toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/5102)
  * [Replace non breaking spaces with normal spaces when pasting on an editable](https://github.com/livingdocsIO/livingdocs-editor/pull/5124)
  * [Hugo: Add origins to document directive data for uploaded media (image, video)](https://github.com/livingdocsIO/livingdocs-editor/pull/5122)
  * [Toolbar: Show linked documents in the formatting toolbar even if href is empty](https://github.com/livingdocsIO/livingdocs-editor/pull/5135)
  * [Cropping: 'Reset to automatic' button on image crop feature works when only one crop is configured](https://github.com/livingdocsIO/livingdocs-editor/pull/5150)
  * [Drag + Drop: Insert component doesn't select everything (in Safari)](https://github.com/livingdocsIO/livingdocs-editor/pull/5149)
  * [Add support for video in component directives](https://github.com/livingdocsIO/livingdocs-server/pull/4421)
  * Text Formatting Toolbar
    * [Allow specialChars and comments on plainText directives](https://github.com/livingdocsIO/livingdocs-editor/pull/5175)
    * [Fix positioning of `li-form-select`](https://github.com/livingdocsIO/livingdocs-editor/pull/5213)
* Server
  * [Public API: Use type and not mediaType for incoming references](https://github.com/livingdocsIO/livingdocs-server/pull/4363)
  * Retresco
    * [Load entities from any metadata handle](https://github.com/livingdocsIO/livingdocs-server/pull/4365)
    * [Reduce update frequency by ignoring scores](https://github.com/livingdocsIO/livingdocs-editor/pull/5211)
  * [Migration: fix migration from referenced to embedded design](https://github.com/livingdocsIO/livingdocs-server/pull/4413)
  * [Transaction: Run events and publication hooks after transaction commit](https://github.com/livingdocsIO/livingdocs-server/pull/4369)
* Media:
  * [Handle undefined preview src's when replacing images](https://github.com/livingdocsIO/livingdocs-editor/pull/5133)
  * [Use directiveMappings for Hugo upload](https://github.com/livingdocsIO/livingdocs-editor/pull/5137)
  * [Return hugoPicture in editing API for new and old Media](https://github.com/livingdocsIO/livingdocs-server/pull/4359)
  * [Combine baseFilters on search for multiple mediaTypes](https://github.com/livingdocsIO/livingdocs-editor/pull/5181)
  * [Don't allow switching between language tabs while metadata is being saved](https://github.com/livingdocsIO/livingdocs-editor/pull/5199)

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
