---
type: release-notes
title: July 2022 Release
description: Release notes for release-2022-07
excludeFromSearch: true
aliases:
  - /operations/releases/release-2022-07/release-2022-07/
---

{{< release-header
  title="July 2022 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2022-07"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* :new: Use an explicit postgres schema during database migrations [livingdocs-server #4457 v182.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4457)
* :new: 🐞 Add support for common metadata property `hideFromForm` in Schemas [livingdocs-server #4469 v181.2.4](https://github.com/livingdocsIO/livingdocs-server/pull/4469)
* :new: Error Pointer: Replace array number with handle|name|label|plugin|type [livingdocs-server #4462 v181.2.3](https://github.com/livingdocsIO/livingdocs-server/pull/4462)
* :new: Fix publish control producer [livingdocs-server #4466 v181.2.2](https://github.com/livingdocsIO/livingdocs-server/pull/4466)
* :new: Desk-Net tests and error handling improvements [livingdocs-editor #5302 v80.11.11](https://github.com/livingdocsIO/livingdocs-editor/pull/5302)
* :new: fix(softLock): Now correctly spaced [livingdocs-editor #5301 v80.11.10](https://github.com/livingdocsIO/livingdocs-editor/pull/5301)
* :new: 🐞 Make metadata plugins compatible with project settings again [livingdocs-server #4464 v181.2.1](https://github.com/livingdocsIO/livingdocs-server/pull/4464)
* :new: Unpublish Document via Public API [livingdocs-server #4459 v181.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4459)
* :new: fix(metadata): Use documentType in labels instead of articles [livingdocs-editor #5279 v80.11.9](https://github.com/livingdocsIO/livingdocs-editor/pull/5279)
* :new: feat: allow formatting of log levels as strings [livingdocs-server #4458 v181.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4458)
* :new: Editing Toolbar Improvements [livingdocs-editor #5296 v80.11.8](https://github.com/livingdocsIO/livingdocs-editor/pull/5296)
* :new: Document State: fix metadata based publish schedule [livingdocs-editor #5297 v80.11.7](https://github.com/livingdocsIO/livingdocs-editor/pull/5297)
* :new: fix(softLock): Button inline [livingdocs-editor #5269 v80.11.6](https://github.com/livingdocsIO/livingdocs-editor/pull/5269)
* :new: Fix Webpack Build [livingdocs-editor #5289 v80.11.5](https://github.com/livingdocsIO/livingdocs-editor/pull/5289)
* :new: Fix translated asset replacement [livingdocs-editor #5275 v80.11.4](https://github.com/livingdocsIO/livingdocs-editor/pull/5275)
* :new: Move @intlify/vue-i18n-loader from devDependencies to dependencies [livingdocs-editor #5284 v80.11.3](https://github.com/livingdocsIO/livingdocs-editor/pull/5284)
* :new: Publish Control: i18n / narrow screen improvements [livingdocs-editor #5282 v80.11.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5282)
* :new: Depr improvements [livingdocs-server #4455 v181.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4455)
* :new: 🧪  Add projectConfig Validation to colt.createConfigChannel [livingdocs-server #4451 v180.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4451)
* :new: Metadata: li-integer -> add strict schema validation [livingdocs-server #4446 v180.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4446)
* :new: Update livingdocs-integration.json for Release [livingdocs-server #4453 v179.4.1](https://github.com/livingdocsIO/livingdocs-server/pull/4453)
* :new: Update livingdocs-integration.json for Release [livingdocs-editor #5278 v80.11.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5278)
* :new: feat(Teams): Microsoft Teams integration  [livingdocs-server #4408 v179.3.0](https://github.com/livingdocsIO/livingdocs-server/pull/4408)


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

## Breaking Changes :fire:

### Migrate the database :fire:

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
