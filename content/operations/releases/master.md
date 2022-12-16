---
type: release-notes
title: March 2023 Release
description: Release notes for release-2023-03
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/master
  - /operations/releases/release-2023-03/
  - /operations/releases/release-2023-03/release-2023-03/
---

{{< release-header
  title="March 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=true
  branchHandle="release-2023-03"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Filters: deprecate register / registerList / registerAngularComponent custom filters](https://github.com/livingdocsIO/livingdocs-editor/pull/6150)
* [fix(deps): update dependency moment-timezone from 0.5.34 to 0.5.35 [security] (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/5822)
* [Update Livingdocs Framework 24.8.1](https://github.com/livingdocsIO/livingdocs-editor/pull/6145)
* [li-tree: listen for remote updates and add unit tests](https://github.com/livingdocsIO/livingdocs-editor/pull/6105)
* [Use responsive table for distributions](https://github.com/livingdocsIO/livingdocs-editor/pull/6143)
* [Fix revision history to use correct ordering](https://github.com/livingdocsIO/livingdocs-server/pull/5071)
* [fix(li-date-time-range-filter): prevent filter dropdown to be cut off](https://github.com/livingdocsIO/livingdocs-editor/pull/6140)
* [Responsive Table Component](https://github.com/livingdocsIO/livingdocs-editor/pull/6134)
* [Expose Comyan API](https://github.com/livingdocsIO/livingdocs-server/pull/5069)
* [CLI command "Secret reencrypt" now uses correct stringify function ](https://github.com/livingdocsIO/livingdocs-server/pull/5064)
* [Upgrade to cheerio@1.0.0-rc.12](https://github.com/livingdocsIO/livingdocs-server/pull/5063)
* [Synchronise remote metadata changes](https://github.com/livingdocsIO/livingdocs-editor/pull/5861)
* [Fix load more button translation for list search](https://github.com/livingdocsIO/livingdocs-editor/pull/6131)
* [Metadata: li-integer with dataProvider](https://github.com/livingdocsIO/livingdocs-server/pull/5058)
* [Metadata: li-integer with dataProvider](https://github.com/livingdocsIO/livingdocs-editor/pull/6124)
* [fix(deps): update dependency @google-cloud/storage from 6.7.0 to v6.8.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5056)
* [The inline List editor publish button is only clickable when dirty](https://github.com/livingdocsIO/livingdocs-editor/pull/6121)
* [Team: add user to team as owner during create flow](https://github.com/livingdocsIO/livingdocs-editor/pull/6078)
* [Queue background processing](https://github.com/livingdocsIO/livingdocs-server/pull/5054)
* [Fix console errors when no 'to' date is set for date time validity](https://github.com/livingdocsIO/livingdocs-editor/pull/6106)
* [Add `isCancel` functionality for `axios` children](https://github.com/livingdocsIO/livingdocs-editor/pull/6118)
* [Change calculation for li-text input height](https://github.com/livingdocsIO/livingdocs-editor/pull/6111)
* [ Use docvalues instead of source when we query ids only](https://github.com/livingdocsIO/livingdocs-server/pull/5053)
* [copy bug with multiple services](https://github.com/livingdocsIO/livingdocs-editor/pull/6112)
* [Update German translation for "Close" in Document Lists side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/6107)
* [Add expectedOrActualPublicationDate property to systemdata](https://github.com/livingdocsIO/livingdocs-server/pull/5050)

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

### Minimal


## Highlights

### Planning System

* [Server: Document Transform Functions](https://github.com/livingdocsIO/livingdocs-server/pull/5010)
* [Create and transform UI](https://github.com/livingdocsIO/livingdocs-editor/pull/6060)

### Homescreen

* [Server: Dashboard Sources](https://github.com/livingdocsIO/livingdocs-server/pull/5016)
* [Home Screen Example Config](https://github.com/livingdocsIO/livingdocs-server/pull/5020)

### Metadata Plugin li-team

* [li-team: add li-team config schema and validation](https://github.com/livingdocsIO/livingdocs-server/pull/4974)
* [li-team: add li-meta-team plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/6024)

### Microsoft Teams Integration

TODO: Is this a highlight? Is the feature ready? Is the feature documented?

* [Microsoft Teams Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4408)

## Breaking Changes :fire:

### Migrate the Postgres Database :fire:

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
