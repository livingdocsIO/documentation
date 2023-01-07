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
* [fix(deps): update dependency aws-sdk from 2.1286.0 to v2.1290.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5142)
* [Creation Flow: use new UI for contentType selection, title entry, language selection](https://github.com/livingdocsIO/livingdocs-editor/pull/6199)
* [Fix: show correct li-document-reference style everwhere](https://github.com/livingdocsIO/livingdocs-editor/pull/6219)
* [Upgrade `socket.io` to fix critical vulnerability [security]](https://github.com/livingdocsIO/livingdocs-editor/pull/6208)
* [Upgrade `resolve-url-loader` to fix `loader-utils` critical vulnerability](https://github.com/livingdocsIO/livingdocs-editor/pull/6212)
* [fix(deps): update dependency axios from 0.27.2 to v1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5128)
* [li-integer: add Table Dashboard component](https://github.com/livingdocsIO/livingdocs-editor/pull/6194)
* [Activate media library entry replacements for all documents](https://github.com/livingdocsIO/livingdocs-editor/pull/6178)
* [Remove unused marketing feature](https://github.com/livingdocsIO/livingdocs-editor/pull/6201)
* [chore(deps): update dependency eslint from 8.30.0 to v8.31.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5125)
* [fix(deps): update dependency pino from 8.7.0 to v8.8.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5122)
* [Fix date filters](https://github.com/livingdocsIO/livingdocs-server/pull/5123)
* [Filters: li-integer](https://github.com/livingdocsIO/livingdocs-server/pull/5067)
* [li-integer filter](https://github.com/livingdocsIO/livingdocs-editor/pull/6136)
* [fix(comyan): remove unsupported config from the ui](https://github.com/livingdocsIO/livingdocs-editor/pull/6184)
* [Use correct key in date filter](https://github.com/livingdocsIO/livingdocs-server/pull/5112)
* [Stop the monaco editor logging with every change](https://github.com/livingdocsIO/livingdocs-editor/pull/6186)
* [Relative Time consolidation](https://github.com/livingdocsIO/livingdocs-editor/pull/6193)
* [document-list: on remote update no notification pop up](https://github.com/livingdocsIO/livingdocs-editor/pull/6137)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/5040)
* [fix(project config): don't mark webhook secret input as required anymore](https://github.com/livingdocsIO/livingdocs-editor/pull/6192)
* [fix(deps): update dependency sharp from 0.31.2 to v0.31.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5105)
* [fix(deps): update dependency fast-json-stringify from 5.4.1 to v5.5.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5108)
* [Upload error handling for unsupported image formats](https://github.com/livingdocsIO/livingdocs-editor/pull/6183)
* [Fix image upload error with images >2MB](https://github.com/livingdocsIO/livingdocs-server/pull/5101)
* [fix(public API): support id range for publicationEvents](https://github.com/livingdocsIO/livingdocs-server/pull/5098)
* [Planning System: transform document visuals](https://github.com/livingdocsIO/livingdocs-editor/pull/6139)
* [Prevent metadata document reference overflow](https://github.com/livingdocsIO/livingdocs-editor/pull/6179)
* [Fixes 400 error from Iframely when initialised with an empty url](https://github.com/livingdocsIO/livingdocs-editor/pull/5926)
* [Extend back button to recognise metadata base filters](https://github.com/livingdocsIO/livingdocs-editor/pull/6153)
* [Drop imagemagick support](https://github.com/livingdocsIO/livingdocs-server/pull/5095)
* [Filter Refactoring: remove deprecated list filters replaced by listV2](https://github.com/livingdocsIO/livingdocs-editor/pull/6166)
* [The delete button for named crops removes only the desired crop](https://github.com/livingdocsIO/livingdocs-editor/pull/6167)
* [fix(deps): update dependency @livingdocs/framework from 24.8.0 to v24.8.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5082)
* [fix(deps): update dependency aws-sdk from 2.1267.0 to v2.1278.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5084)
* [Home Screen: send the user back to the home screen if coming from there](https://github.com/livingdocsIO/livingdocs-editor/pull/6158)
* [chore: enable 'view on hugo' button for release testing](https://github.com/livingdocsIO/livingdocs-server/pull/5087)
* [empty UserId from desknet](https://github.com/livingdocsIO/livingdocs-server/pull/5086)
* [add system user for empty userid](https://github.com/livingdocsIO/livingdocs-editor/pull/6161)
* [Use faster /documents?idOnly query for the search on table dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6152)
* [Prevent manual source with image config sync update and always pass `focalPoint` when initialising image cropper](https://github.com/livingdocsIO/livingdocs-editor/pull/6141)
* [Home screen refinements](https://github.com/livingdocsIO/livingdocs-editor/pull/6149)
* [Add home screen `dashboardTitle` config](https://github.com/livingdocsIO/livingdocs-server/pull/5074)
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
