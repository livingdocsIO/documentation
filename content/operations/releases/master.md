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
* [Use custom function registry ](https://github.com/livingdocsIO/livingdocs-server/pull/5139)
* [fix(deps): update dependency @4tw/cypress-drag-drop from 2.2.1 to v2.2.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6265)
* [fix(deps): update dependency aws-sdk from 2.1295.0 to v2.1299.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5184)
* [Remove Buffer polyfill from the Webpack config](https://github.com/livingdocsIO/livingdocs-editor/pull/6263)
* [Dashboards: redirect to home when navigating to unknown dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/6262)
* [🐞 Fix auto-updating images in editable teasers](https://github.com/livingdocsIO/livingdocs-editor/pull/6257)
* [fix/emoji empty state](https://github.com/livingdocsIO/livingdocs-editor/pull/6260)
* [Fix/filter buttons](https://github.com/livingdocsIO/livingdocs-editor/pull/6259)
* [Table Dashboards: don't log errors in mixed content type scenarios](https://github.com/livingdocsIO/livingdocs-editor/pull/6252)
* [Make livingdoc optional in import api](https://github.com/livingdocsIO/livingdocs-server/pull/5172)
* [fix: Move some dependencies to devDependencies and removed unused](https://github.com/livingdocsIO/livingdocs-editor/pull/6253)
* [Fix li-team unit tests](https://github.com/livingdocsIO/livingdocs-editor/pull/6256)
* [rel='sponsored' can be added to link as HTML attribute](https://github.com/livingdocsIO/livingdocs-editor/pull/6245)
* [Api client design](https://github.com/livingdocsIO/livingdocs-editor/pull/6254)

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

### API Consumer Management

With the new API Consumer Management feature you are now able to manage the lifecycle for tokens, e.g.
- manage token rotation
- manage token suspension
- manage token expiration

* [Editor: API Consumer Management](https://github.com/livingdocsIO/livingdocs-editor/pull/6243)

### Homescreen

* [Server: Dashboard Sources](https://github.com/livingdocsIO/livingdocs-server/pull/5016)
* [Home Screen Example Config](https://github.com/livingdocsIO/livingdocs-server/pull/5020)


### Dynamic Indexing

TODO: Description
TODO: find out to what feature this PR belongs.

* [Documentation]()
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/5000)

### Distribution Planning

TODO: Description

* [Documentation]()
* [PR: Editor Part I](https://github.com/livingdocsIO/livingdocs-editor/pull/6077)

### i18n - Editor available in German

TODO: description

### Synced Table Dashboards

TODO: description

### Planning System

Metadata Fields
- li-etc (planning system)
- li-buy-in (planning system)

Tasks feature enhancements

* [Server: Document Transform Functions](https://github.com/livingdocsIO/livingdocs-server/pull/5010)
* [Create and transform UI](https://github.com/livingdocsIO/livingdocs-editor/pull/6060)
* [Distribution Channel Groups and Navigation Component](https://github.com/livingdocsIO/livingdocs-editor/pull/6230)



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

### Upgrade cheerio to 1.0.0-rc.12 :fire:

This change only affects customers using a customized render pipeline or the hugo feature and if you have `cheerio` in your package.json.

- `cheerio.load` behaves slightly different and automatically appends '<html><body>' tags. Please follow the upgrade instruction from cheerio https://github.com/cheeriojs/cheerio#loading.
- Newlines `\r\n` now get normalized to `\n`.

References:
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/5063)


### Drop Imagemagick support :fire:

The usage of it was discouraged since a long time because of security issues.
Remove the server config property `mediaLibrary.images.processingStrategy`.

References:
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/5095)


### Remove Dashboard Display Filters :fire:

These Dashboard Display Filters are not supported anymore:
- `coreApi.searchFilters.register`
- `coreApi.searchFilters.registerList`
- `coreApi.searchFilters.registerAngularComponent`

Update the deprecated filter to the supported [Display Filters](https://docs.livingdocs.io/reference-docs/editor-extensions/editor-configuration/display-filter/) from the core.
- Named Filters
- Metadata Filters
- ListV2 Filters

If you can't handle your requirements with core filters it's best to contact your Customer Solutions manager to get inputs for solutions (one option is to create your custom Vue component, but that should be prevented whenever possible).

References:
- [PR Server](https://github.com/livingdocsIO/livingdocs-editor/pull/6166)
- [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6136)

### Remove Editor Config appConfig.app.sidePanelItems :fire:

The Editor Config `appConfig.app.sidePanelItems` is removed, move the config to the Project Config `editorSettings.mainNavigation`.

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6153)


## Deprecations

### Deprecate appConfig.ui.welcome

The editor config `appConfig.ui.welcome` is deprecated and will be removed in `release-2023-03`.
- Option 1: Configure your welcome screen in the Project Config via [startPage]({{< ref "/reference-docs/project-config/editor-settings#startpage" >}})
- Option 2: Switch to a [Home Screen]({{< ref "/reference-docs/project-config/editor-settings#home-screen" >}})

Breaking Change: `release-2023-03`

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6153)


### Deprecate Display Filter config for category

The Display Filter of a metadata property of type `li-category` should be reconfigured as `{metadataPropertyName: 'category'}`

Breaking Change: not defined yet

References: [PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6136)


## APIs :gift:

## Other Changes

### Security

### Design

### Features

### Improvements
* [Improve synchronisation of remote metadata changes](https://github.com/livingdocsIO/livingdocs-editor/pull/5861)
* [Metadata: li-integer supports dataProvider](https://github.com/livingdocsIO/livingdocs-editor/pull/6124)

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
