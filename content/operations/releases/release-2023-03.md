---
type: release-notes
title: March 2023 Release
description: Release notes for release-2023-03
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-03/
  - /operations/releases/release-2023-03/release-2023-03/
---

{{< release-header
  title="March 2023 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2023-03"
>}}

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested
|Name|Version|
|-|-|
|Node|18|
|NPM|8|
|Postgres|14|
|Elasticsearch<br/>OpenSearch|8.x<br/>2|
|Redis|7|
|Livingdocs Server Docker Image|livingdocs/server-base:18|
|Livingdocs Editor Docker Image|livingdocs/editor-base:18|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

### Minimal
|Name|Version|
|-|-|
|Node|16|
|NPM|8|
|Postgres|12|
|Elasticsearch<br/>OpenSearch|7.x<br/>1|
|Redis|6.2|
|Livingdocs Server Docker Image|livingdocs/server-base:16.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

### Planning System

* [Documentation](TODO)
* [Server: Document Transform Functions](https://github.com/livingdocsIO/livingdocs-server/pull/5010)
* [Create and transform UI](https://github.com/livingdocsIO/livingdocs-editor/pull/6060)
* [Distribution Channel Groups and Navigation Component](https://github.com/livingdocsIO/livingdocs-editor/pull/6230)
* [Metadata Plugin: li-estimated-time-of-completion](https://github.com/livingdocsIO/livingdocs-server/pull/5176)
* [Metadata Plugin: li-buy-in](https://github.com/livingdocsIO/livingdocs-editor/pull/6308)
* [Metadata Plugin: li-distribution-schedule](https://github.com/livingdocsIO/livingdocs-server/pull/5283)
* [Metadata Plugin: li-integer - dataProvider support](https://github.com/livingdocsIO/livingdocs-editor/pull/6124)
* [Distribution Planning: Table Cells](https://github.com/livingdocsIO/livingdocs-editor/pull/6303)
* [Table Dashboard Cell: Buy-In](https://github.com/livingdocsIO/livingdocs-editor/pull/6332)
* [Table Dashboard Cell: Distribution](https://github.com/livingdocsIO/livingdocs-editor/pull/6357)
* [PR: Editor Part I](https://github.com/livingdocsIO/livingdocs-editor/pull/6077)

#### Estimated Time of Completion Plugin

The estimated time of completion meta data plugin `li-estimated-time-of-completion` enables a user to set an estimated time of completion for the current document. The plugin is available in the metadata form.

**Notice**: The li-estimated-time-of-completion plugin is only available if the planning system is enabled.

* [Documentation]({{< ref "/reference/document/metadata/metadata-plugin-list#li-estimated-time-of-completion" >}})
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6255)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/5176)

#### Task List Plugin

The task list meta data plugin `li-task-list` is a read only component which is used in the table dashboard. It gives an overview of current tasks connected with the given document.

* [Documentation]({{< ref "/reference/document/metadata/metadata-plugin-list#li-task-list" >}})
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6325)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/5230)

#### Team Plugin

The team meta data plugin `li-team` enables a user to associate other users with the current document by adding or removing them from the teams plugin. Additionally one user can be marked as the owner. The owner can not be removed from the team.
The plugin is available in the metadata form and the table dashboard.

**Notice**: The li-team plugin is only available if the planning system is enabled.

* [Documentation]({{< ref "/reference/document/metadata/metadata-plugin-list#li-team" >}})
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6024)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4974)

### API Consumer Management

With the new API Consumer Management feature you are now able to manage the lifecycle for tokens, e.g.
- manage token rotation
- manage token suspension
- manage token expiration

* [Documentation](TODO)
* [Design](https://github.com/livingdocsIO/livingdocs-editor/pull/6254)
* [Editor: API Consumer Management](https://github.com/livingdocsIO/livingdocs-editor/pull/6243)
* [Server: API Consumer Management](https://github.com/livingdocsIO/livingdocs-server/pull/5170)

## Notable Features

### Retresco Queued Retagging

TODO

### Metadata Property Display Filters

A new type of [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter" >}})) is introduced: `metadataPropertyName`.

With these filters, you will be able to easily configure a filter for any metadata property on your documents. Currently, only 2 types of metadata properties are supported: `li-integer` and `li-category`. Support for other types will be added in future releases.

### link rel="sponsored"

TODO: Description

* [rel='sponsored' can be added to a HTML link in Text Formatting Toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6245)

### Anonymize User History

TODO: Description

* [Documentation](TODO)

## Small Improvements

### Comments

TODO

### Publish Control Import API Support

You can now set `publishControl.firstPublicationDate` and `publishControl.lastPublicationDate` when importing documents using the Import API.
* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5253)

## Breaking Changes :fire:

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

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


### Do not support running the core tests in a downstream editor :fire:

:fire: Remove testing core editor tests from a downstream with `npm explore @livingdocs/editor -- npm test`
:fire: If you copied the testing setup of Livingdocs, you have to add `"angular-mocks": "^1.8.3"` in your `devDependencies`.

Another recommended cleanup step is to move all `chai`, `mocha`, `karma` and `sinon` packages from `dependencies` to `devDependencies`


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

### Document Revision Creation

Previously we created a new revision for document updates when any of the following conditions were true:
- First change after publication
- User did not make the previous change
- Revision is over 15 minutes old
- Revision has not been updated for over 2 minutes

:fire: The rules above still apply, but only when revision data has changed. Changes to `Document Title`, `System Metadata`and `Publish Control` data will not create a new revision.

References: [PR](https://github.com/livingdocsIO/livingdocs-server/pull/5231)







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


### Public API - Project Endpoints

- Deprecate `/api/v1/project` -> use `/api/v1/projectConfig` instead
- Deprecate `/api/v1/channels` -> use `/api/v1/projectConfig` instead
- Deprecate `/api/v1/channels/:channelHandle` -> use `/api/v1/projectConfig` instead

Breaking Change: `release-2023-11`

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5178)






## APIs :gift:

### Import API - Payload

:gift: Make `content` and `metadata` optional in payload -> easier to handle `Data Records` with that.
Pass `content` and `design` on the top level of a document payload instead in a livingdoc

```js
{
  "systemName": "identifier-for-your-system",
  ...
  "documents": [
    {
      "title": "test import",
      ...
      // before, deprecated
      "livingdoc": {
        "content": [ ... ],
        "design": {
          "name": "living-times",
          "version": "1.0.1"
        }
      },
      // now
      "content": [ ... ],
      "design": {
        "name": "living-times",
        "version": "1.0.1"
      }
    }
  ]
}
```

* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5172)


## Other Changes

### Features

* [Anonymized History after some time](https://github.com/livingdocsIO/livingdocs-editor/pull/6284)

### Improvements
* [Improve synchronisation of remote metadata changes](https://github.com/livingdocsIO/livingdocs-editor/pull/5861)
* [Metadata: li-integer supports dataProvider](https://github.com/livingdocsIO/livingdocs-editor/pull/6124)
* [Project Config: Prevent duplicate declarations](https://github.com/livingdocsIO/livingdocs-server/pull/5215)
* [Support custom date formats in legacy elasticsearch mapping](https://github.com/livingdocsIO/livingdocs-server/pull/5190)

### Bugfixes
* [Do not send new device emails for archived users](https://github.com/livingdocsIO/livingdocs-server/pull/5179)
* [DisplayFilters: correctly apply url stored state again on reload](https://github.com/livingdocsIO/livingdocs-editor/pull/6365)
* [doc-link: Iframely directive prefill fixed](https://github.com/livingdocsIO/livingdocs-editor/pull/6291)


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v213.6.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.10): fix(lib): Get require("~lib") to work again with newer npm versions
- [v213.6.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.9): test(distribution-planning): Create documents in series again to fix expectations
- [v213.6.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.8): chore(framework): Update `@livingdocs/framework` version
- [v213.6.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.7): chore: PR feedback
- [v213.6.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.6): fix(document-lists): Support list updates with a lot of document ids
- [v213.6.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.5): fix: Fix axios 1 querystring compatibility in the document search
- [v213.6.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.4): fix(queue): Fix waiting delay increment when a fetch returned an empty result set
- [v213.6.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.3): fix(redis): Fix redis support in the repl

### Livingdocs Editor Patches
- [v90.33.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.18): fix(task list): show only the assigned user, never the requester
- [v90.33.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.17): fix(li-buy-in): add planning system guard
- [v90.33.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.16): fix: remove animations from overflow table rows
- [v90.33.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.15): fix(li-list-assignments): avoid flickering after list was selected
- [v90.33.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.14): fix(dashboards): correctly apply filter state from store on inintial search
- [v90.33.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.13): fix(distribution flyouts): Overflow and layout
- [v90.33.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.12): fix(li-meta-integer-filter): don't emit change if no integer selected
- [v90.33.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.11): fix(framework): Update `@livingdocs/framework` version to include latest fix for imgIX URL generation
- [v90.33.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.10): fix(kanban board): reloads results correctly when result is less than page size
- [v90.33.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.9): fix(distribution-planning): Don't show unconfigured content types
- [v90.33.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.8): fix(publish control): ensure button state changes on publish/draft creation
- [v90.33.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.7): fix(distribution dashboard): Time cell

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
