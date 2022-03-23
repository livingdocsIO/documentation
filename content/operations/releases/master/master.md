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
