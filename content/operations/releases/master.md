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
* [Make buy-in comment optional](https://github.com/livingdocsIO/livingdocs-editor/pull/6349)
* [fix(deps): update dependency pino from 8.8.0 to v8.10.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5251)
* [fix(deps): update dependency open from 8.4.0 to v8.4.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6346)
* [fix(deps): update dependency fastify from 4.12.0 to v4.13.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5250)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/5246)
* [Example Server Buy-In Dashboard](https://github.com/livingdocsIO/livingdocs-server/pull/5233)
* [Sticky Metadata navigation](https://github.com/livingdocsIO/livingdocs-editor/pull/6341)
* [Task enhancements - table dashboard task list](https://github.com/livingdocsIO/livingdocs-server/pull/5230)
* [Improvement/pitch metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/6340)
* [🚀 Lint Strict Mode](https://github.com/livingdocsIO/livingdocs-server/pull/5239)
* [Task enhancements - table dashboard task list](https://github.com/livingdocsIO/livingdocs-editor/pull/6325)
* [Buy-In Dashboard Cell](https://github.com/livingdocsIO/livingdocs-editor/pull/6332)
* [Push-messages with `li-string-list` example](https://github.com/livingdocsIO/livingdocs-server/pull/5234)
* [Fix transaction support for designs](https://github.com/livingdocsIO/livingdocs-server/pull/5235)
* [Task enhancements - task card header](https://github.com/livingdocsIO/livingdocs-editor/pull/6289)
* [Prevent item removed from multi-list editor from being re-added when sorting](https://github.com/livingdocsIO/livingdocs-editor/pull/6333)
* [Plugin definition for `li-buy-in`](https://github.com/livingdocsIO/livingdocs-server/pull/5216)
* [Metadata form for `li-buy-in` plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/6308)
* [fix(supportCrops): false checker](https://github.com/livingdocsIO/livingdocs-editor/pull/6329)
* [fix(supportsCrop): checks for false value](https://github.com/livingdocsIO/livingdocs-editor/pull/6326)
* [fix(deps): update dependency date-fns from 2.28.0 to v2.29.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6272)
* [chore(deps): update dependency mocha from 10.0.0 to v10.2.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6270)
* [fix(deps): update dependency openid-client from 5.3.4 to v5.4.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5229)
* [chore(deps): update dependency @google-cloud/translate from 7.0.5 to v7.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5224)
* [fix(deps): update dependency dataloader from 2.1.0 to v2.2.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5227)
* [fix(deps): update dependency axios from 1.2.6 to v1.3.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5226)
* [fix(deps): update dependency @fastify/reply-from from 8.3.1 to v8.4.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6321)
* [Channel and project endpoints deprecated and channelConfig aliased](https://github.com/livingdocsIO/livingdocs-server/pull/5178)
* [Persist current result list on reload](https://github.com/livingdocsIO/livingdocs-editor/pull/6316)
* [Fix api clients rotation in progress](https://github.com/livingdocsIO/livingdocs-editor/pull/6315)
* [fix(deps): update dependency babel-loader from 8.3.0 to v9 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6296)
* [Ensure old publish schedule dates have a time zone](https://github.com/livingdocsIO/livingdocs-server/pull/5217)
* [Fix dates in scheduled publishing by sending time zones to the server](https://github.com/livingdocsIO/livingdocs-editor/pull/6311)
* [Prevent duplicate declarations in project config](https://github.com/livingdocsIO/livingdocs-server/pull/5215)
* [Anonymized History after some time](https://github.com/livingdocsIO/livingdocs-editor/pull/6284)
* [Publish build UI improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/6306)
* [Stricter password validation](https://github.com/livingdocsIO/livingdocs-server/pull/5211)
* [Distribution Planning Table Cells](https://github.com/livingdocsIO/livingdocs-editor/pull/6303)
* [Distribution Planning Improvements](https://github.com/livingdocsIO/livingdocs-server/pull/5208)
* [Fix iframely directive prefill on doc-link](https://github.com/livingdocsIO/livingdocs-editor/pull/6291)
* [Task enhancements - li-user-select with avatars for li-team and tasks](https://github.com/livingdocsIO/livingdocs-editor/pull/6282)
* [Project stats reporting](https://github.com/livingdocsIO/livingdocs-server/pull/5195)
* [chore(deps): bump ua-parser-js from 0.7.32 to 0.7.33](https://github.com/livingdocsIO/livingdocs-editor/pull/6300)
* [Annotate composition api as read-only](https://github.com/livingdocsIO/livingdocs-server/pull/5204)
* [fix(focalPoint): avoid creating empty object as focal point](https://github.com/livingdocsIO/livingdocs-editor/pull/6297)
* [fix(deps): update dependency pusher-js from 7.4.0 to v7.6.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6293)
* [fix(deps): update dependency axios from 1.2.3 to v1.2.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5197)
* [fix(deps): update dependency ioredis from 5.2.5 to v5.3.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5201)
* [Fix error logged in `triggerDigest()`](https://github.com/livingdocsIO/livingdocs-editor/pull/6286)
* [Implement li-meta-etc metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/5176)
* [Implement li-meta-etc metadata plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/6255)
* [Support custom date formats in legacy elasticsearch mapping](https://github.com/livingdocsIO/livingdocs-server/pull/5190)
* [fix(document creation): fix document create dialog](https://github.com/livingdocsIO/livingdocs-editor/pull/6285)
* [Improve metadata form validation](https://github.com/livingdocsIO/livingdocs-editor/pull/6185)
* [Enable character counter for all document types and when min/max length is set](https://github.com/livingdocsIO/livingdocs-editor/pull/5331)
* [Fix/Document Reference](https://github.com/livingdocsIO/livingdocs-editor/pull/6277)
* [Document Creation: ensure disabled content types don't show up in selection](https://github.com/livingdocsIO/livingdocs-editor/pull/6281)
* [Dashboards/Create: make it work with multichannel setups](https://github.com/livingdocsIO/livingdocs-editor/pull/6275)
* [fix(deps): update dependency @livingdocs/framework from 24.8.1 to v24.8.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6271)
* [fix(deps): update dependency @livingdocs/framework from 24.8.1 to v24.8.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5187)
* [api-consumer-management last used date producer-consumer](https://github.com/livingdocsIO/livingdocs-server/pull/5170)
* [Remove documents of deleted content type from publication index ](https://github.com/livingdocsIO/livingdocs-server/pull/5145)
* [fix(portal-popper-dropdown): fix outside event exceptions](https://github.com/livingdocsIO/livingdocs-editor/pull/6273)
* [chore(deps): update dependency eslint from 8.31.0 to v8.32.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6269)
* [fix(deps): update dependency ua-parser-js from 1.0.32 to v1.0.33 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5186)
* [Generate project config json schema](https://github.com/livingdocsIO/livingdocs-server/pull/5180)
* [Do not send new device emails for archived users](https://github.com/livingdocsIO/livingdocs-server/pull/5179)
* [fix(deps): update dependency fastify from 4.11.0 to v4.12.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5185)
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

Update the deprecated filter to the supported [Display Filters](https://docs.livingdocs.io/customising/advanced/editor-configuration/display-filter/) from the core.
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
- Option 1: Configure your welcome screen in the Project Config via [startPage]({{< ref "/reference/project-config/editor-settings#startpage" >}})
- Option 2: Switch to a [Home Screen]({{< ref "/reference/project-config/editor-settings#home-screen" >}})

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
