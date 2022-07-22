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
* :new: Prototype: Trigger Document Build via Editing API [livingdocs-server #4675 v191.5.0](https://github.com/livingdocsIO/livingdocs-server/pull/4675)
* :new: Prototype: Add Document Build Button [livingdocs-editor #5629 v80.43.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5629)
* :new: Default Table Dashboards [livingdocs-editor #5498 v80.42.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5498)
* :new: Default Table Dashboards [livingdocs-server #4671 v191.4.0](https://github.com/livingdocsIO/livingdocs-server/pull/4671)
* :new: fix: remove category filter from query when last category is removed [livingdocs-editor #5582 v80.41.1](https://github.com/livingdocsIO/livingdocs-editor/pull/5582)
* :new: feat(metadata): Add li-desknet-schedule metadata plugin [livingdocs-editor #5627 v80.41.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5627)
* :new: feat(desknet): Create li-desknet-schedule metadata plugin [livingdocs-server #4673 v191.3.0](https://github.com/livingdocsIO/livingdocs-server/pull/4673)
* :new: Deliveries: Add build to deliveries + webhook [livingdocs-server #4670 v191.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4670)
* :new: Project Config - Webhook: Add webhook event 'document.build' [livingdocs-editor #5628 v80.40.0](https://github.com/livingdocsIO/livingdocs-editor/pull/5628)
* :new: fix(desknet): Support any handle for li-desknet-integration [livingdocs-server #4672 v191.1.2](https://github.com/livingdocsIO/livingdocs-server/pull/4672)
* :new: Fix Media Library: make "use frame as poster image" work again [livingdocs-editor #5620 v80.39.26](https://github.com/livingdocsIO/livingdocs-editor/pull/5620)
* :new: fix(publish control): don't allow publish/publish schedule until draft is saved [livingdocs-editor #5618 v80.39.25](https://github.com/livingdocsIO/livingdocs-editor/pull/5618)
* :new: Fix comyan proxy case [livingdocs-server #4667 v191.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4667)
* :new: Register Document Create Function [livingdocs-server #4606 v191.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4606)
* :new: fix(dashboards): Calculate target dashboard on create dialog close [livingdocs-editor #5612 v80.39.24](https://github.com/livingdocsIO/livingdocs-editor/pull/5612)
* :new: fix(dashboards): Only allow opening print select from create dialog [livingdocs-editor #5611 v80.39.23](https://github.com/livingdocsIO/livingdocs-editor/pull/5611)
* :new: fix(desknet): Don't use scheduleEnabled project config property [livingdocs-server #4647 v191.0.2](https://github.com/livingdocsIO/livingdocs-server/pull/4647)
* :new: fix(desknet): Don't use scheduleEnabled project config property [livingdocs-editor #5589 v80.39.22](https://github.com/livingdocsIO/livingdocs-editor/pull/5589)
* :new: Fix: Ensure UI updates when images/videos are edited in Embedded Documents [livingdocs-editor #5608 v80.39.22](https://github.com/livingdocsIO/livingdocs-editor/pull/5608)
* :new: Dashboards: Show correct contentType selection on create from custom dashboards [livingdocs-editor #5602 v80.39.21](https://github.com/livingdocsIO/livingdocs-editor/pull/5602)
* :new: Test/Flatter Design [livingdocs-editor #5605 v80.39.20](https://github.com/livingdocsIO/livingdocs-editor/pull/5605)
* :new: Fix: Dashboard Create Button available when contentType filters defined, also for custom dashboards [livingdocs-editor #5598 v80.39.19](https://github.com/livingdocsIO/livingdocs-editor/pull/5598)
* :new: fix(deps): update dependency @google-cloud/translate from 6.3.1 to v7 (master) [livingdocs-server #4659 v191.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4659)
* :new: fix(metadata): Avoid metadata reset while collaborative editing [livingdocs-editor #5596 v80.39.18](https://github.com/livingdocsIO/livingdocs-editor/pull/5596)
* :new: 🔥 Drop Redis <v5 support and deprecate v5 [livingdocs-server #4639 v191.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4639)
* :new: fix(deps): update dependency ioredis from 5.1.0 to v5.2.0 (master) [livingdocs-server #4658 v190.1.5](https://github.com/livingdocsIO/livingdocs-server/pull/4658)
* :new: fix(deps): update dependency @google-cloud/storage from 6.2.2 to v6.2.3 (master) [livingdocs-server #4656 v190.1.4](https://github.com/livingdocsIO/livingdocs-server/pull/4656)
* :new: fix(deps): update dependency axios from 0.23.0 to ^0.27.0 (master) [livingdocs-server #4626 v190.1.3](https://github.com/livingdocsIO/livingdocs-server/pull/4626)
* :new: chore(blob-storage): Remove `package.json` from `lib/blob-store` [livingdocs-server #4651 v190.1.2](https://github.com/livingdocsIO/livingdocs-server/pull/4651)
* :new: fix(deps): update dependency html-loader from 3.1.2 to v4 (master) [livingdocs-editor #5591 v80.39.17](https://github.com/livingdocsIO/livingdocs-editor/pull/5591)
* :new: Include Service Forms: UI correctly updates when user changes data in paramsSchema based forms [livingdocs-editor #5517 v80.39.16](https://github.com/livingdocsIO/livingdocs-editor/pull/5517)
* :new: fix(editor): background color is editable and shows color preview [livingdocs-editor #5590 v80.39.15](https://github.com/livingdocsIO/livingdocs-editor/pull/5590)
* :new: fix(image-processing): Custom handling for gif files [livingdocs-server #4644 v190.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4644)
* :new: 🍬 Linting configuration modification `curly` -> ["multi-line", "consistent"] [livingdocs-server #4643 v190.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4643)
* :new: fix(deps): update dependency env-ci from 7.1.0 to v7.2.1 (master) [livingdocs-editor #5584 v80.39.14](https://github.com/livingdocsIO/livingdocs-editor/pull/5584)
* :new: 🔥 Drop Postgres11 support [livingdocs-server #4631 v190.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4631)
* :new: Fix session extension to reject on revocation [livingdocs-server #4623 v189.2.10](https://github.com/livingdocsIO/livingdocs-server/pull/4623)
* :new: fix(desknet): Don't forward error status code to editor [livingdocs-server #4634 v189.2.9](https://github.com/livingdocsIO/livingdocs-server/pull/4634)
* :new: fix(li-tree): fix and simplify the config/storage schema [livingdocs-server #4633 v189.2.8](https://github.com/livingdocsIO/livingdocs-server/pull/4633)


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

### Metadata Plugin li-tree

* [Documentation: TODO](?)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4591)

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
* Editable links: Show current (and not configured link) [livingdocs-editor #5554 v80.39.7](https://github.com/livingdocsIO/livingdocs-editor/pull/5554)

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
