---
type: release-notes
title: September 2022 Release
description: Release notes for release-2022-09
excludeFromSearch: true
hideSectionTeaser: true
aliases:
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

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* :new: Metadata Plugin li-tree [livingdocs-server #4591 v189.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4591)
* :new: fix(MetadataForm closes): With faulty component link [livingdocs-editor #5563 v80.39.8](https://github.com/livingdocsIO/livingdocs-editor/pull/5563)
* :new: Fix comyan error log [livingdocs-server #4607 v189.1.7](https://github.com/livingdocsIO/livingdocs-server/pull/4607)
* :new: Fix link edit options [livingdocs-editor #5554 v80.39.7](https://github.com/livingdocsIO/livingdocs-editor/pull/5554)
* :new: fix(deps): update dependency @4tw/cypress-drag-drop from 2.1.0 to v2.2.1 (master) [livingdocs-editor #5561 v80.39.6](https://github.com/livingdocsIO/livingdocs-editor/pull/5561)
* :new: fix(metadata): correct metadata service deprecation notice [livingdocs-editor #5552 v80.39.5](https://github.com/livingdocsIO/livingdocs-editor/pull/5552)
* :new: fix(deps): update dependency wait-on from 6.0.0 to v6.0.1 (master) [livingdocs-editor #5559 v80.39.4](https://github.com/livingdocsIO/livingdocs-editor/pull/5559)
* :new: fix: 'what is new' link sends to releases docs [livingdocs-server #4603 v189.1.6](https://github.com/livingdocsIO/livingdocs-server/pull/4603)


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

### Microsoft Teams Integration

TODO: Is this a highlight? Is the feature ready? Is the feature documented?

* [Microsoft Teams Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4408)

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
