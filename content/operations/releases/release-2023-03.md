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
  upcoming=true
  legacy=false
  current=false
  maintained=false
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

TODO

### Minimal

TODO


## Highlights

### Homescreen

* [Documentation](TODO)
* [Server: Dashboard Sources](https://github.com/livingdocsIO/livingdocs-server/pull/5016)
* [Home Screen Example Config](https://github.com/livingdocsIO/livingdocs-server/pull/5020)


### Dynamic Indexing

TODO: Description
TODO: find out to what feature this PR belongs.

* [Documentation](TODO)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/5000)

### Distribution Planning

TODO: Description

* [Documentation](TODO)
* [PR: Editor Part I](https://github.com/livingdocsIO/livingdocs-editor/pull/6077)


### Planning System

Tasks feature enhancements
Distribution Planning

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

### API Consumer Management

With the new API Consumer Management feature you are now able to manage the lifecycle for tokens, e.g.
- manage token rotation
- manage token suspension
- manage token expiration

* [Documentation](TODO)
* [Design](https://github.com/livingdocsIO/livingdocs-editor/pull/6254)
* [Editor: API Consumer Management](https://github.com/livingdocsIO/livingdocs-editor/pull/6243)
* [Server: API Consumer Management](https://github.com/livingdocsIO/livingdocs-server/pull/5170)


### Metadata Plugin li-team

* [Documentation](TODO)
* [li-team: add li-team config schema and validation](https://github.com/livingdocsIO/livingdocs-server/pull/4974)
* [li-team: add li-meta-team plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/6024)


### Anonymize User History

TODO: Description

* [Documentation](TODO)






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


# Public API - Project Endpoints

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


### Import API - Publish Control

TODO

* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5253)





## Other Changes

### Features

* [Table Dashboard Cell for Task List](https://github.com/livingdocsIO/livingdocs-editor/pull/6325)
* [Anonymized History after some time](https://github.com/livingdocsIO/livingdocs-editor/pull/6284)
* [rel='sponsored' can be added to a HTML link in Text Formatting Toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6245)
* [Extend Focal Point Handling](https://github.com/livingdocsIO/livingdocs-editor/pull/6355)

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
- [v213.7.100](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.7.100): fix(retresco): Fix reported error while the tests run. Use a blocking Redis connection in tests
- [v213.7.99](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.7.99): fix(retresco): Fix reported error while the tests run. Use a blocking Redis connection in tests
- [v213.6.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.2): fix(retresco): Fix reported error while the tests run. Use a blocking Redis connection in tests
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
- [v90.33.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.6): fix(drag-and-drop): Fix issue where drag-and-drop from the SVG starting in the clipboard would result in an error
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v??.?.?): text

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
