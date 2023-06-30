---
type: release-notes
title: September 2023 Release
description: Technical Release Notes for release-2023-09
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-09/
  - /operations/releases/release-2023-09/release-2023-09/
---

{{< release-header
  title="September 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-09"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Give labels better names](https://github.com/livingdocsIO/livingdocs-server/pull/5821)
* [Fix tooltip label translation](https://github.com/livingdocsIO/livingdocs-editor/pull/7068)
* [chore(deps): update dependency chai from 4.3.6 to v4.3.7 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5834)
* [fix(deps): update dependency @livingdocs/framework from 25.1.1 to v25.1.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7070)
* [Add unit tests for li-display-filter-list-v2](https://github.com/livingdocsIO/livingdocs-editor/pull/7064)
* [fix(deps): update dependency webpack from 5.88.0 to v5.88.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7066)
* [fix(deps): update dependency @livingdocs/framework from 25.1.0 to v25.1.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7065)
* [Fix quick publish](https://github.com/livingdocsIO/livingdocs-editor/pull/7055)
* [fix(deps): update dependency @livingdocs/framework from 25.0.6 to v25.0.8 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7059)
* [Upgrade to Vue 2.7.14](https://github.com/livingdocsIO/livingdocs-editor/pull/5666)
* [Update `nzz` downstream branch to `release-2023-09`](https://github.com/livingdocsIO/livingdocs-editor/pull/7054)
* [Support routing cache refresh by using isolatedCacheFactory](https://github.com/livingdocsIO/livingdocs-server/pull/5812)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2023-09`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

TODO

### Minimal

TODO

## Features

TODO (featureset not 100% defined yet)


### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

## APIs :gift:

## Other Changes

### Features

### Improvements

### Bugfixes


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
