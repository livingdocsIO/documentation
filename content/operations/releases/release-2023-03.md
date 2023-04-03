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

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/dRvC-FtjfueWcmcvxVY6-rz8Ac_-x83tpCYdHckhEZzRIEFH1V3eu5nJsUsmj2pC.Sua3lgYxjTjcdBxH) | Passcode: B?^VPv7.
* [Feature Webinar Slides](https://docs.google.com/presentation/d/1k2r0uP5Vg_-rBN6RWTFivR7c0Wy-B_XxPcHStDGINqg)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/vzIxocWVH6hGvI-QJB4cKj73gZrh4E97F4hEhgwnDP1DkM8mPHEB76ShwkpRb0sJ.ulrwLKkx_urrJaP1)  | Passcode: +yp9#sTZ
* [Dev Webinar Slides](https://docs.google.com/presentation/d/1zXVo9CQ5U99ectwgW7cAU1m4ZqmHWWihdp4tcvUYfEs/edit?usp=sharing)
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
* [PR Server: Document Transform Functions](https://github.com/livingdocsIO/livingdocs-server/pull/5010)
* [PR Editor: Create and transform UI](https://github.com/livingdocsIO/livingdocs-editor/pull/6060)
* [PR Editor: Distribution Channel Groups and Navigation Component](https://github.com/livingdocsIO/livingdocs-editor/pull/6230)
* [PR Server: Metadata Plugin: li-estimated-time-of-completion](https://github.com/livingdocsIO/livingdocs-server/pull/5176)
* [PR Editor: Metadata Plugin: li-buy-in](https://github.com/livingdocsIO/livingdocs-editor/pull/6308)
* [PR Server: Metadata Plugin: li-distribution-schedule](https://github.com/livingdocsIO/livingdocs-server/pull/5283)
* [PR Editor: Metadata Plugin: li-integer - dataProvider support](https://github.com/livingdocsIO/livingdocs-editor/pull/6124)
* [PR Editor: Distribution Planning: Table Cells](https://github.com/livingdocsIO/livingdocs-editor/pull/6303)
* [PR Editor: Table Dashboard Cell: Buy-In](https://github.com/livingdocsIO/livingdocs-editor/pull/6332)
* [PR Editor: Table Dashboard Cell: Distribution](https://github.com/livingdocsIO/livingdocs-editor/pull/6357)
* [PR Editor: Distribution Planning (Part 1)](https://github.com/livingdocsIO/livingdocs-editor/pull/6077)

#### Estimated Time of Completion Plugin

The Estimated Time of Completion Metadata Plugin `li-estimated-time-of-completion` enables a user to set an estimated time of completion for the current document. The plugin is available in the Metadata Form.

**Notice**: The li-estimated-time-of-completion plugin is only available if the Planning System is enabled.

* [Documentation]({{< ref "/reference/document/metadata/metadata-plugin-list#li-estimated-time-of-completion" >}})
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6255)
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/5176)

#### Team Plugin

The team Metadata Plugin `li-team` enables a user to associate other users with the current document by adding or removing them from the teams plugin. Additionally one user can be marked as the owner. The owner can not be removed from the team.
The plugin is available in the Metadata Form and the Table Dashboard.

**Notice**: The li-team plugin is only available if the Planning System is enabled.

* [Documentation]({{< ref "/reference/document/metadata/metadata-plugin-list#li-team" >}})
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6024)
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/4974)

#### Task List Table Dashboard Cell

The Task List Table Dashboard Cell `liTableDashboardCellTaskList` is a read only component for the Table Dashboard. It gives an overview of current tasks connected with the given document.

* [Documentation]({{< ref "/reference/project-config/editor-settings#litabledashboardcelltasklist" >}})
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6325)
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/5230)

### API Consumer Management

With the new API Consumer Management feature you are now able to manage the lifecycle for tokens, e.g.
- manage token rotation
- manage token suspension
- manage token expiration

* [Documentation]({{< ref "/reference/public-api/get-started#authorization" >}})
* [PR Editor: Design](https://github.com/livingdocsIO/livingdocs-editor/pull/6254)
* [PR Editor: API Consumer Management](https://github.com/livingdocsIO/livingdocs-editor/pull/6243)
* [PR Server: API Consumer Management](https://github.com/livingdocsIO/livingdocs-server/pull/5170)

## Notable Features

### Retresco Queued Retagging

A new hook is introduced to the Retresco integration. It allows document re-enrich functionality with Retresco tags in a queued manner. This is useful if you want to re-enrich a large number of documents in a batch.

* [Documentation]({{< ref "/guides/integrations/retresco#re-enrich-documents" >}})
* [PR Server: Retresco retagging hook](https://github.com/livingdocsIO/livingdocs-server/pull/5254)

### Metadata Property Display Filters

A new type of [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter" >}}) is introduced: `metadataPropertyName`.

With these filters, you will be able to easily configure a filter for any metadata property on your documents. Currently, only 2 types of metadata properties are supported: `li-integer` and `li-category`. Support for other types will be added in future releases.

### link rel="sponsored"

You can now add `rel="sponsored"` tag to an HTML link in the text formatting toolbar. This is useful if you want to mark links as sponsored for search engines.

* [PR Editor: rel='sponsored' can be added to a HTML link in Text Formatting Toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/6245)

### Anonymize User History

You can now configure timespan in the server configuration after which the revision history will be anonymized.
After said time, the editor does not receive a `user_id` with the revisions response and thus can not render the associated users but renders a fallback "Anonymous User".

* [Documentation]({{< ref "/customising/server-configuration#documents" >}})
* [PR Editor: Anonymized History after specified time](https://github.com/livingdocsIO/livingdocs-editor/pull/6284)
* [PR Server: Anonymized History after specified time](https://github.com/livingdocsIO/livingdocs-server/pull/5191)

## Small Improvements

### Publish Control Import API Support

You can now set `publishControl.firstPublicationDate` and `publishControl.lastPublicationDate` when importing documents using the Import API.
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/5253)

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
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6166)
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6136)

### Remove Editor Config appConfig.app.sidePanelItems :fire:

The Editor Config `appConfig.app.sidePanelItems` is removed, move the config to the Project Config `editorSettings.mainNavigation`.

References:
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6153)

### Document Revision Creation

Previously we created a new revision for document updates when any of the following conditions were true:
- First change after publication
- User did not make the previous change
- Revision is over 15 minutes old
- Revision has not been updated for over 2 minutes

:fire: The rules above still apply, but only when revision data has changed. Changes to `Document Title`, `System Metadata`and `Publish Control` data will not create a new revision.

References:
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/5231)







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

* [Anonymized History after specified time](https://github.com/livingdocsIO/livingdocs-editor/pull/6284)

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
- [v213.6.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.24): fix: extend airship log
- [v213.6.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.23): fix(link-directive): Include `target` property to LinkDirective schema
- [v213.6.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.22): chore: Add a comment about elasticsearch version conflicts in the delete_by_query call
- [v213.6.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.21): fix(dashboard): allow allowQuickPublish option for publish state dashboard cell
- [v213.6.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.20): fix(sort): correctly support arrays
- [v213.6.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.19): chore: Log warnings about deleted content types that are still present on postgres
- [v213.6.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.18): fix(dataSource): allow dataSources to return integers as values
- [v213.6.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.17): fix(redis): Coerce strings to numbers. There was an inconsistency with some integers where `tonumber('0')` fails as it requires a base with that.
- [v213.6.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.16): fix: improve isTestFile regex
- [v213.6.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.15): test: Fix test description in app/features/retresco/retresco-api.test.js
- [v213.6.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.14): fix(password-validation): Generic error (5XX) was used for Password input verification and error properties where removed, replaced with `validationError` which will return clearer 4XX error
- [v213.6.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.13): chore(revisions): remove code duplication
- [v213.6.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.12): fix: update framework version
- [v213.6.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.11): fix(distribution-planning): Remove document content from response
- [v213.6.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.10): fix(lib): Get require("~lib") to work again with newer npm versions
- [v213.6.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.9): test(distribution-planning): Create documents in series again to fix expectations
- [v213.6.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.8): chore(framework): Update `@livingdocs/framework` version
- [v213.6.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.7): chore: PR feedback
- [v213.6.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.6): fix(document-lists): Support list updates with a lot of document ids
- [v213.6.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.5): fix: Fix axios 1 querystring compatibility in the document search
- [v213.6.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.4): fix(queue): Fix waiting delay increment when a fetch returned an empty result set
- [v213.6.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.3): fix(redis): Fix redis support in the repl

### Livingdocs Editor Patches
- [v90.33.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.48): fix(li-component-link): Fix error where links to other documents would fail to save the document
- [v90.33.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.47): fix(use_embedded_overrides): Fix "Has local changes" for editable teasers - make sure it shows when there are changes for editable teasers that have been edited for the first time
- [v90.33.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.46): fix(li-tree): allow unparsable links
- [v90.33.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.45): fix(li-comment-mention): fix undefined session console error
- [v90.33.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.44): fix(teasers): allow component creation by document drop with any param handle for the document reference
- [v90.33.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.43): fix(dashboards): take componentOptions.allowQuickPublish into account for liTableDashboardCellPublishState if defined
- [v90.33.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.42): fix(dashboards): show quick publish only when reasonable
- [v90.33.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.41): fix(li-integer): correctly treat 0 value
- [v90.33.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.40): fix(buy-in): improve wording
- [v90.33.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.39): fix(li-link-edit): Pass all `linkAttributes` properties to be included in `a` tag
- [v90.33.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.38): fix(li-table-dashboard-cell-context-menu): filter out hidden actions
- [v90.33.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.37): fix(embedded documents): allow document references on any param, not just 'article'
- [v90.33.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.36): fix(menu tool): apply filters.menuList when not using legacy dashboards
- [v90.33.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.35): fix(document selection): ensure filters are applied when using legacy dashboards
- [v90.33.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.34): chore(context-menu): Remove unnecessary hover logic
- [v90.33.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.33): fix: add favicon.ico and apple-touch-icon
- [v90.33.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.32): fix(image_form): hide download button when no crops are available
- [v90.33.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.31): fix(vue): Fix default parameter of components that should fallback to an empty object
- [v90.33.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.30): fix(insert panel): Spacing
- [v90.33.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.29): fix(creation flow): Made content type boxes keep their size
- [v90.33.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.28): fix: remove unnecessary, layout breaking `app__notifications` div
- [v90.33.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.27): fix: pass the correct config object to custom angular display filters
- [v90.33.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.26): fix(create): correctly check if contentType on defaultChannel to use the right code path during creation
- [v90.33.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.25): fix(desknet): Fix automatic placement errors due to schedule properties
- [v90.33.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.24): fix: bump framework version
- [v90.33.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.23): fix(document tooltip): shows scheduled docs
- [v90.33.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.22): fix(dashboards): don't show the open task count since we have a separate cell for this now
- [v90.33.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.21): fix(distribution-planning): Use yyyy-MM-dd for fixed date request
- [v90.33.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.20): fix(buy-in): remove 2nd line of empty state
- [v90.33.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.19): fix(dashboards): Don't load document content in table dashboards
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
