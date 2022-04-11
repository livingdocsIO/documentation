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
* :new: feat(dashboards): Load documents from postgres by default [livingdocs-editor #5173 v78.9.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5173)
* :new: Fix/Loading Overlay [livingdocs-editor #5191 v78.8.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5191)
* :new: feat(desknet): Add Desk-Net platform select metadata plugin [livingdocs-editor #5155 v78.8.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5155)
* :new: feat(desknet): Add Desk-Net schedule side panel [livingdocs-editor #5134 v78.7.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5134)
* :new: Devices on Profile Page [livingdocs-server #4400 v178.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4400)
* :new: Devices on Profile Page [livingdocs-editor #5184 v78.6.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5184)
* :new: fix(retresco): Add details to Retresco error logs [livingdocs-server #4403 v178.1.2](https://github.com/livingdocsIO/livingdocs-server/pull/4403)
* :new: feat(vue-i18n): implementing vue-i18n [livingdocs-editor #5179 v78.5.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5179)
* :new: feat(table dashboard): Add 'set/change homepage' component in header [livingdocs-editor #5183 v78.4.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5183)
* :new: Media Library: combine baseFilters on search for multiple mediaTypes [livingdocs-editor #5181 v78.3.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5181)
* :new: Publish Control: Scheduled Unpublish [livingdocs-editor #5177 v78.3.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5177)
* :new: Publish Control: Document Inbox Assignment [livingdocs-editor #5185 v78.2.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5185)
* :new: ♻️  MediaLibrary: Rename files with _ to - [livingdocs-server #4401 v178.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4401)
* :new: Improvement/link update (button/link issue pt.3) [livingdocs-editor #5180 v78.1.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5180)
* :new: Text Formatting: show the toolbar for plainText directive even if only quotes are possible [livingdocs-editor #5182 v78.1.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5182)
* :new: Documents: Expose Editing API for Publish Control UI [livingdocs-server #4279 v178.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4279)
* :new: Publish Control: add basic document history [livingdocs-editor #5069 v78.1.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5069)
* :new: Publish Control: fix unpublish schedule [livingdocs-server #4397 v178.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4397)
* :new: Text Formatting Toolbar: allow specialChars and comments on plainText directives [livingdocs-editor #5175 v78.0.5](https://github.com/livingdocsIO/livingdocs-editor/pull/5175)
* :new: fix(metadata): correctly apply startcase for default placeholder based on handle [livingdocs-editor #5156 v78.0.4](https://github.com/livingdocsIO/livingdocs-editor/pull/5156)
* :new: Pass more info to the Editor for Import Logs [livingdocs-server #4383 v178.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4383)
* :new: Improve Showed Infos for Import Logs [livingdocs-editor #5154 v78.0.3](https://github.com/livingdocsIO/livingdocs-editor/pull/5154)
* :new: Improvement/link update (button/link issue pt.2) [livingdocs-editor #5171 v78.0.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5171)
* :new: fix(button group): pass boolean vue prop with binding [livingdocs-editor #5170 v78.0.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5170)
* :new: Remove Q drop handler [livingdocs-editor #5169 v78.0.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5169)
* :new: Metadata: li-document-reference dashboard config [livingdocs-server #4392 v177.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4392)
* :new: Dashboards: maybe use table-dashboard in document selection dialog [livingdocs-editor #5141 v77.9.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5141)
* :new: fix(metadata): fix deprecation log messages for ui.component configs [livingdocs-editor #5164 v77.8.6](https://github.com/livingdocsIO/livingdocs-editor/pull/5164)
* :new: fix(Safari): insert component doesn't select everything [livingdocs-editor #5149 v77.8.5](https://github.com/livingdocsIO/livingdocs-editor/pull/5149)
* :new: fix: wrap text for long document titles on document lists [livingdocs-editor #5161 v77.8.4](https://github.com/livingdocsIO/livingdocs-editor/pull/5161)
* :new: fix(singleImageCrop): automatic crop fixed [livingdocs-editor #5150 v77.8.3](https://github.com/livingdocsIO/livingdocs-editor/pull/5150)
* :new: Metadata: correctly update Vue metadata form after remoteUpdate [livingdocs-editor #5157 v77.8.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5157)
* :new: chore(deps): bump minimist from 1.2.5 to 1.2.6 [livingdocs-server #4377 v177.1.7](https://github.com/livingdocsIO/livingdocs-server/pull/4377)
* :new: 🐞 Improve Import Error Messages [livingdocs-server #4381 v177.1.6](https://github.com/livingdocsIO/livingdocs-server/pull/4381)
* :new: 🐞 Import: Throw better error when contentType does not exist [livingdocs-server #4378 v177.1.5](https://github.com/livingdocsIO/livingdocs-server/pull/4378)
* :new: 🐞 Import: Throw better error on update and publish with missing required metadata [livingdocs-server #4379 v177.1.4](https://github.com/livingdocsIO/livingdocs-server/pull/4379)
* :new: Improvement/User Colors [livingdocs-editor #5127 v77.8.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5127)
* :new: feat: add 'trimLeadingAndTrailingWhitespaces' config [livingdocs-editor #5136 v77.8.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5136)
* :new: fix: bump framework to version 23.1.6 [livingdocs-server #4372 v177.1.3](https://github.com/livingdocsIO/livingdocs-server/pull/4372)
* :new: 🐞 Import: Throw better error on publish with missing required metadata [livingdocs-server #4376 v177.1.2](https://github.com/livingdocsIO/livingdocs-server/pull/4376)
* :new: Send webhooks and notifications with transactions [livingdocs-server #4374 v177.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4374)
* :new: Table dashboard: Loading/empty state, document count, highlight  [livingdocs-editor #5147 v77.7.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5147)
* :new: fix(metadata): Enable multiple default values [livingdocs-editor #5146 v77.6.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5146)
* :new: postUnpublishHook [livingdocs-server #4371 v177.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4371)
* :new: Remove documentId from contentValidationError [livingdocs-server #4373 v177.0.2](https://github.com/livingdocsIO/livingdocs-server/pull/4373)
* :new: Run events and publication hooks after transaction commit [livingdocs-server #4369 v177.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4369)
* :new: Support parallel execution of `livingdocs-server migrate up` [livingdocs-server #4366 v177.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4366)
* :new: Fix style for li-meta-document-reference default variant [livingdocs-editor #5145 v77.6.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5145)
* :new: 🐞 Better error for parallel import of the same document [livingdocs-server #4367 v176.2.2](https://github.com/livingdocsIO/livingdocs-server/pull/4367)
* :new: Add default table dashboards to replace legacy dashboards [livingdocs-editor #5142 v77.6.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5142)
* :new: render paramsSchema with li-metadata-form-component [livingdocs-editor #5132 v77.5.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5132)
* :new: fix: remove documentId from contentValidationError [livingdocs-editor #5144 v77.4.19](https://github.com/livingdocsIO/livingdocs-editor/pull/5144)
* :new: fix(retresco): Load entities from any metadata handle [livingdocs-server #4365 v176.2.1](https://github.com/livingdocsIO/livingdocs-server/pull/4365)
* :new: Metadata Plugins for support in paramsSchema [livingdocs-server #4352 v176.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4352)
* :new: temporarily allow metadata plugin config `ui.component: 'liMetaTextareaForm'` for `li-text` [livingdocs-server #4353 v176.1.6](https://github.com/livingdocsIO/livingdocs-server/pull/4353)
* :new: Replace console.warn with errorLog.deprecation [livingdocs-editor #5125 v77.4.18](https://github.com/livingdocsIO/livingdocs-editor/pull/5125)
* :new: fix: remove 'href' dependency of linked documents on formating toolbar [livingdocs-editor #5135 v77.4.17](https://github.com/livingdocsIO/livingdocs-editor/pull/5135)
* :new: fix(public-api): Use type and not mediaType for incoming references [livingdocs-server #4363 v176.1.5](https://github.com/livingdocsIO/livingdocs-server/pull/4363)
* :new: return hugoPicture for new and old Media [livingdocs-server #4359 v176.1.4](https://github.com/livingdocsIO/livingdocs-server/pull/4359)
* :new: fix the use of directiveMappings for Hugo upload [livingdocs-editor #5137 v77.4.16](https://github.com/livingdocsIO/livingdocs-editor/pull/5137)
* :new: Fix/mails [livingdocs-server #4358 v176.1.3](https://github.com/livingdocsIO/livingdocs-server/pull/4358)
* :new: fix: handle undefined preview src's when replacing images [livingdocs-editor #5133 v77.4.15](https://github.com/livingdocsIO/livingdocs-editor/pull/5133)
* :new: Replace if/then schema validation with discriminator [livingdocs-server #4357 v176.1.2](https://github.com/livingdocsIO/livingdocs-server/pull/4357)
* :new: Fix component schema to support the component attribute added in release-2022-03 [livingdocs-server #4354 v176.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4354)
* :new: fix: add origins to document directive data for uploaded media (image, video) [livingdocs-editor #5122 v77.4.14](https://github.com/livingdocsIO/livingdocs-editor/pull/5122)
* :new: Metadata: add li-video-reference type [livingdocs-server #4345 v176.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4345)


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

TODO
- Do we announce Publish Control already?
- And if yes, how? (Beta vs full fledged feature)
- Is there already documentation, how should it look like?
- Should we add a guide how to migrate from custom solutions to Publish Control?

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

### Remove callbacks for Server Hooks

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

### Metadata Plugins: Add configSchema and uiSchema Validation

We added 2 properties `configSchema` and `uiSchema` to a metadata plugin where one can define a schema validation. If you want to know more about the motivation and a fallback, you get some insights [here](https://github.com/livingdocsIO/livingdocs-server/pull/4296).

#### li-text

Add strict validation for `li-enum` (check [here](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-text) what config options you have)

- 🔥 `metadata[].ui.config.maxLength` has no effect, remove the property. Use `metadata[].config.maxLength` instead.
- 🔥 `metadata[].ui.config.label` has no effect, remove the property. Use `metadata[].ui.label` instead.
- 🔥 `metadata[].ui.config.canReset` has no effect, remove the property. The UI handles reset more smart without a config.
- 🔥 `metadata[].ui` does not allow additional properties (throws on project config update)
- 🔥 `metadata[].config` does not allow additional properties (throws on project config update)

#### li-enum

- 🔥 add strict validation for `li-enum` (check [here](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-enum) what config options you have)
- 🔥 a static `dataProvider` is required (a `DataSource` is not allowed)


References:
- [Metadata Plugin List Documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list)
- [li-text PR](https://github.com/livingdocsIO/livingdocs-server/pull/4296)
- [li-enum PR](https://github.com/livingdocsIO/livingdocs-server/pull/4316)

## Deprecations

### deprecate metadata plugin li-media-language

Deprecate metadata plugin `li-media-language`, use `li-metadata-translations` instead (same config).

References:
- [Documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list)
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4315)

## APIs :gift:

## Other Changes

### Security

### Features

### Design

### Improvements

* Server
  * Hooks: Lazy publish hook registration [livingdocs-server #4309 v174.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4309)
  * Storage: Support any third party blob-store module in the storage config [livingdocs-server #4334 v176.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4334)
* Editor
  * Improve mouse selection [livingdocs-editor #5095 v77.4.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5095)

### Bugfixes

* Editor
  * Drag and Drop: Only cancel drags in the editor that also originated in the editor [livingdocs-editor #5078 v77.3.6](https://github.com/livingdocsIO/livingdocs-editor/pull/5078)
  * Allow Angular fallback behaviour for metadata component rendering [livingdocs-editor #5092 v77.4.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5092)
  * Show Subscript icon in text formatting toolbar [livingdocs-editor #5102 v77.4.6](https://github.com/livingdocsIO/livingdocs-editor/pull/5102)
  * Replace non breaking spaces with normal spaces when pasting on an editable. [livingdocs-editor #5124 v77.4.13](https://github.com/livingdocsIO/livingdocs-editor/pull/5124)

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
