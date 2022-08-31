---
type: release-notes
title: November 2022 Release
description: Release notes for release-2022-11
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2022-11/
  - /operations/releases/release-2022-11/release-2022-11/
---

{{< release-header
  title="November 2022 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=true
  branchHandle="release-2022-11"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Show warning for deleted project only in the first login](https://github.com/livingdocsIO/livingdocs-editor/pull/5796)
* [Remove li-desknet-platforms metadata plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/5779)
* [Remove li-desknet-platforms metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/4799)
* [Specific asset loading](https://github.com/livingdocsIO/livingdocs-server/pull/4791)
* [Improve placement of text formatting toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/5790)
* [Specific asset loading](https://github.com/livingdocsIO/livingdocs-editor/pull/5808)
* [Archived documents are removed from multi-list inbox](https://github.com/livingdocsIO/livingdocs-editor/pull/5810)
* [Pass the advanced formatting configuration from Editor to Editable config](https://github.com/livingdocsIO/livingdocs-editor/pull/5721)
* [Always emit an update event when extractor updates the metadataForm](https://github.com/livingdocsIO/livingdocs-editor/pull/5786)
* [Fix/Text Only Buttons](https://github.com/livingdocsIO/livingdocs-editor/pull/5799)
* [Fix: Browser crashes when clicking on history button in editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5785)
* [fix(deps): update dependency cloudinary from 1.30.1 to v1.31.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4806)
* [Add back button fallback routes](https://github.com/livingdocsIO/livingdocs-editor/pull/5789)
* [fix(deps): update dependency fastify from 4.5.2 to v4.5.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4803)
* [Document Editing Toolbar: Enable toolbar buttons opening flyouts when they are grouped/hidden for narrow screens](https://github.com/livingdocsIO/livingdocs-editor/pull/5787)
* [Handle cases where no teaserComponents are configured](https://github.com/livingdocsIO/livingdocs-editor/pull/5788)
* [fix(deps): update dependency aws-sdk from 2.1203.0 to v2.1204.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4805)
* [fix: send correct options to setupProjects() function.](https://github.com/livingdocsIO/livingdocs-server/pull/4730)
* [fix: crop button for named crops](https://github.com/livingdocsIO/livingdocs-editor/pull/5778)
* [Change renovate configuration, reduce amount of PRs  and automerge patches](https://github.com/livingdocsIO/livingdocs-server/pull/4734)
* [Dashboards: no default create buttons when documentCreationFlows configured on the dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/5776)
* [Save open/closed state of metadata cards for each contentType separately](https://github.com/livingdocsIO/livingdocs-editor/pull/5761)
* [Log framework violations after initialization](https://github.com/livingdocsIO/livingdocs-editor/pull/5765)
* [fix(deps): update dependency fastify from 3.29.1 to v4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4660)
* [fix(deps): update dependency aws-sdk from 2.1200.0 to v2.1202.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4797)
* [Update postgres docker image to natively supported ARM version](https://github.com/livingdocsIO/livingdocs-server/pull/4794)
* [Fix bug preventing publication of data records](https://github.com/livingdocsIO/livingdocs-editor/pull/5772)
* [fix(deps): update dependency ioredis from 5.2.2 to v5.2.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4792)
* [Adding a Setter and Getter to draft.js](https://github.com/livingdocsIO/livingdocs-editor/pull/5771)
* [User cannot change list inbox during publish and conflict notification is sticky](https://github.com/livingdocsIO/livingdocs-editor/pull/5763)
* [Metadata: Fix some error cases on property update with validation](https://github.com/livingdocsIO/livingdocs-editor/pull/5766)
* [Close document copy popup when clicking on X or outside the popup](https://github.com/livingdocsIO/livingdocs-editor/pull/5755)
* [fix(deps): update dependency aws-sdk from 2.1199.0 to v2.1200.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4787)
* [fix(publish state): Line Wrap](https://github.com/livingdocsIO/livingdocs-editor/pull/5756)
* [Add missing Testrail numbers for Publish Control tests](https://github.com/livingdocsIO/livingdocs-editor/pull/5754)
* [Update livingdocs-integration.json for Release Management](https://github.com/livingdocsIO/livingdocs-server/pull/4789)


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

### Split Revision/Systemmetadata

TODO@Marc, how to communicate that?

* [PR: System metadata preparation](https://github.com/livingdocsIO/livingdocs-server/pull/4735)

### Microsoft Teams Integration

TODO: Is this a highlight? Is the feature ready? Is the feature documented?

* [Microsoft Teams Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4408)


## Breaking Changes :fire:

### Migrate the database :fire:

TODO: add db migrations

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
