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
* :new: fix: drag and drop of hugo images [livingdocs-server #4331 v175.0.5](https://github.com/livingdocsIO/livingdocs-server/pull/4331)
* :new: Fix document publish state in editor dashboard [livingdocs-server #4326 v175.0.4](https://github.com/livingdocsIO/livingdocs-server/pull/4326)
* :new: Fix: add deprecated document.hasDraft getter for BC [livingdocs-editor #5109 v77.4.7](https://github.com/livingdocsIO/livingdocs-editor/pull/5109)
* :new: Replace _.get with native optional chaining operator
 [livingdocs-server #4322 v175.0.3](https://github.com/livingdocsIO/livingdocs-server/pull/4322)
* :new: fix(subsript icon): Show the icon in text formatting toolbar [livingdocs-editor #5102 v77.4.6](https://github.com/livingdocsIO/livingdocs-editor/pull/5102)
* :new: fix(context menu): Close on click outside [livingdocs-editor #5104 v77.4.5](https://github.com/livingdocsIO/livingdocs-editor/pull/5104)
* :new: Make the designs config optional [livingdocs-server #4323 v175.0.2](https://github.com/livingdocsIO/livingdocs-server/pull/4323)
* :new: Deprecate metadata plugin li-media-language [livingdocs-server #4315 v175.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4315)
* :new: Feat: move Google Vision integrations credentials to secret storage [livingdocs-server #4235 v175.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4235)
* :new: Metadata Plugin li-enum: Load select form when componentName = 'liMetaSelectForm' [livingdocs-editor #5101 v77.4.4](https://github.com/livingdocsIO/livingdocs-editor/pull/5101)
* :new: Lazy publish hook registration [livingdocs-server #4309 v174.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4309)
* :new: Metadata Plugins: Add configSchema and uiSchema Validation and Fallback [livingdocs-server #4296 v174.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4296)
* :new: Replace metadata plugin `li-media-language` with `li-metadata-translations` [livingdocs-server #4310 v173.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4310)
* :new: Make sure no real integrations are in e2e tests [livingdocs-server #4308 v172.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4308)
* :new: fix(character counter): Combined icons [livingdocs-editor #5097 v77.4.3](https://github.com/livingdocsIO/livingdocs-editor/pull/5097)
* :new: Remove callbacks for Server Hooks (Breaking Change) || Add app/breaking-changes [livingdocs-server #4306 v172.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4306)
* :new: Make s3 `accessKeyId` and `secretAccessKey` optional on ECS and EKS [livingdocs-server #4303 v171.2.4](https://github.com/livingdocsIO/livingdocs-server/pull/4303)
* :new: update framework to 23.1.4 [livingdocs-server #4305 v171.2.3](https://github.com/livingdocsIO/livingdocs-server/pull/4305)
* :new: update framework to 23.1.4 [livingdocs-editor #5095 v77.4.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5095)
* :new: fix(metadata): Allow fallback for component rendering [livingdocs-editor #5092 v77.4.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5092)
* :new: Publish Control: metadata status [livingdocs-editor #5077 v77.4.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5077)
* :new: Only cancel drags in the editor that also originated in the editor [livingdocs-editor #5078 v77.3.6](https://github.com/livingdocsIO/livingdocs-editor/pull/5078)
* :new: fix(document-inbox): Align the remove button in assignment form [livingdocs-editor #5085 v77.3.5](https://github.com/livingdocsIO/livingdocs-editor/pull/5085)
* :new: Improve importer errors when autopublish fails [livingdocs-server #4293 v171.2.2](https://github.com/livingdocsIO/livingdocs-server/pull/4293)
* :new: fix: error logs for deprecated components  [livingdocs-editor #5082 v77.3.4](https://github.com/livingdocsIO/livingdocs-editor/pull/5082)
* :new: fix(character counter): only show target length if one is defined [livingdocs-editor #5079 v77.3.3](https://github.com/livingdocsIO/livingdocs-editor/pull/5079)
* :new: Migrate event generation tests to promises [livingdocs-server #4288 v171.2.1](https://github.com/livingdocsIO/livingdocs-server/pull/4288)
* :new: fix: make metadata transformed checkbox clickable [livingdocs-editor #5063 v77.3.2](https://github.com/livingdocsIO/livingdocs-editor/pull/5063)

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

### Features

### Design

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
