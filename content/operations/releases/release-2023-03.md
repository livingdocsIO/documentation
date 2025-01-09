---
type: release-notes
title: March 2023 Release
description: Technical Release Notes for release-2023-03
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-03/release-2023-03/

header:
  upcoming: false
  legacy: true
  current: false
  maintained: false
  branchHandle: "release-2023-03"
---

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
|Postgres|15|
|Elasticsearch<br/>OpenSearch|8.x<br/>v2.3.0|
|Redis|7|
|Livingdocs Server Docker Image|livingdocs/server-base:18.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:18.5|
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

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
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |


## Highlights

### Planning System

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

* [Documentation]({{< ref "/reference/document/metadata/plugins/li-estimated-time-of-completion" >}})
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6255)
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/5176)

#### Team Plugin

The team Metadata Plugin `li-team` enables a user to associate other users with the current document by adding or removing them from the teams plugin. Additionally one user can be marked as the owner. The owner can not be removed from the team.
The plugin is available in the Metadata Form and the Table Dashboard.

**Notice**: The li-team plugin is only available if the Planning System is enabled.

* [Documentation]({{< ref "/reference/document/metadata/plugins/li-team" >}})
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
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 186-api-clients.js
#   adds new table for API Clients and API Tokens
# migration 193-increase-document-title-length.js
#   increases the length of the document title to 1000 characters
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
- [v213.6.62](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.62): fix(security): Update `sharp` to version `0.32.6` to patch CVE-2023-4863
- [v213.6.61](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.61): fix(woodwing): The blob-store createReadStream returns a promise, await it
- [v213.6.60](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.60): fix(document import): copies metadata on drag
- [v213.6.59](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.59): fix(indexing): Also index systemMetadata properties present in the static mapping
- [v213.6.58](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.58): fix(documents): Fix `metadataEntity` typo
- [v213.6.57](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.57): fix(sitemap): Add `entriesPerPage` to `getSitemapIndex` call
- [v213.6.56](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.56): fix(security): Update `protobufjs` (CVE-2023-36665), `semver` (CVE-2022-25883), `vm2` (CVE-2023-37466, CVE-2023-37903), `tough-cookie` (CVE-2023-26136) and  `word-wrap` (CVE-2023-26115) to patch security vulnerabilities
- [v213.6.55](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.55): chore: Add missing corrupted_imago.jpeg fixture
- [v213.6.54](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.54): fix(media-library): Add failOn config for processing corrupt image files
- [v213.6.53](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.53): fix(lists): Return scheduled_in_inbox with find request
- [v213.6.52](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.52): fix(deps): Upgrade @livingdocs/conf to not merge arrays
- [v213.6.51](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.51): fix(documents): Fix metadata_id query in document cleanup script
- [v213.6.50](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.50): chore: Update nzz tests to node 18
- [v213.6.49](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.49): test(document-lists): Test scheduled documents in document lists
- [v213.6.48](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.48): fix(indexing): Fix `--ids=1,2,3` indexing for the drafts index
- [v213.6.47](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.47): fix(indexing): Add try/catch around elasticsearch payload creation to prevent full bulk failures if one document is faulty
- [v213.6.46](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.46): fix(dependencies): Upgrade `vm2` to fix security vulnerabilities CVE-2023-32314
- [v213.6.45](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.45): chore(data-migrations): Support new date range structure on data migration document filter query
- [v213.6.44](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.44): fix: also support camel case in systemdata for a Data Migration
- [v213.6.43](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.43): fix: desk-net status sync back without config
- [v213.6.42](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.42): fix(logging): Make dev string formatter more reliable with custom input
- [v213.6.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.41): fix(retresco): Fix retresco date comparison during publish, write a test
- [v213.6.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.40): fix(search): Search secondary channels again
- [v213.6.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.39): fix(retresco): Check if document is published before accessing properties in Retresco enrichment, include a test for unpublished documents
- [v213.6.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.38): fix(project-config): Enhance content type & media type sync logs with project id context
- [v213.6.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.37): fix(project-config): Set higher request body size for the project config post endpoints
- [v213.6.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.36): fix(retresco): Add workaround to allow republish when data migrations or imports have created a draft, but no changes were applied to the document
- [v213.6.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.35): fix: trigger new release
- [v213.6.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.34): fix: fix data migration memory leak (report at the end) with a lot of migrated documents
- [v213.6.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.33): fix: add x-compressed-zip extension
- [v213.6.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.32): fix(project-configs): Sync content_type_ids and media_type_ids of static project configs during server start
- [v213.6.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.31): fix(retresco): Allow Retresco Re-enrich concurrency configuration via `integrations.retresco.reenrichConcurrency`
- [v213.6.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.30): fix(vm2): Upgrade `vm2` module to patch a security vulnerability
- [v213.6.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.29): fix(blob-storage): Fix blob storage download logic to await the file before streaming it
- [v213.6.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.28): fix(routing): Fix `routing` indexing behavior that breaks CLI tasks when `routing.indexing.enabled` is enabled without `worker` role
- [v213.6.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.27): fix: log invalid metadata type in contentType[].publicationIndex config
- [v213.6.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.26): fix(blob-storage): Azure Blob Storage config Schema validation didn't include custom `computeKey()` function
- [v213.6.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v213.6.25): chore: Use the new elasticsearch environment variable with the drone tests
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
- [v90.33.101](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.101): code(comments): always use the context from editable data
- [v90.33.100](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.100): fix: switch webpack devtool setting to have less errors
- [v90.33.99](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.99): fix(security): Update `semver` (CVE-2022-25883), `word-wrap` (CVE-2023-26115) and `tough-cookie` (CVE-2023-26136) to patch security vulnerabilities
- [v90.33.98](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.98): fix(lists): Include scheduled when calculating sort order
- [v90.33.97](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.97): fix(dashboards): Reset pagination when resetting filters
- [v90.33.96](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.96): fix(drop-handler): check if children allowed
- [v90.33.95](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.95): fix(publish control): show publication date only when a visiblePublicationDate is available (the article has been published before)
- [v90.33.94](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.94): fix(back button): ignore kanban boards from potential navigation targets for user clarity
- [v90.33.93](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.93): fix(document lists): show correct label on card after publish control schedule is removed
- [v90.33.92](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.92): fix: clone dashboard config before modifying
- [v90.33.91](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.91): chore: Add scheduledOrPublished support on legacy documentState filter
- [v90.33.90](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.90): fix(quick publish): correctly show quick publish button if allowed
- [v90.33.89](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.89): fix(dashboards): ensure no errors are logged when legacy dashboards are used
- [v90.33.88](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.88): chore(legacy-search): Skip tests that call `_fetchDocumentList`
- [v90.33.87](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.87): fix(dates): Fix relative date formatting and write tests for it
- [v90.33.86](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.86): fix(dependencies): Upgrade `engine.io` and `socket.io-parser` to fix security vulnerabilities CVE-2023-31125 and CVE-2023-32695, respectively
- [v90.33.85](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.85): fix(li-publish-control-embargo): keep UTC date
- [v90.33.84](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.84): fix(redirect): state given over URL
- [v90.33.83](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.83): fix: treat filter v2 options with `exists` as valid selection
- [v90.33.82](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.82): fix(li-publish-control-embargo): respect setTimeout max delay value
- [v90.33.81](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.81): fix(document creation): set metadata title property with useAsTitle during creation
- [v90.33.80](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.80): fix(display filters): wait for all filters initialized to compute usable listV2 filters
- [v90.33.79](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.79): fix(editable teasers): apply overrides when inserting a component from clipboard
- [v90.33.78](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.78): fix(publish control): don't show publish/unpublish buttons in wrong state until panel reopen
- [v90.33.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.77): fix(tasks): show all started tasks in publish control panel, not just currently accepted ones
- [v90.33.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.76): fix(teaser preview): Layout
- [v90.33.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.75): fix(display filters): don't render container for listV2 filters with no options
- [v90.33.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.74): fix(kanban boards): correctly apply filters for initial search
- [v90.33.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.73): fix(legacy dashboards): wait for filter ready for initial load to take filter values from cache into account
- [v90.33.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.72): fix(srcissors): Update srcissors to not include dev dependencies
- [v90.33.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.71): fix(publish control): allow opening publish control panel when text in editable is selected
- [v90.33.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.70): fix(publish control): disable unpublish buttons for foreign locked documents
- [v90.33.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.69): fix: remove session from MediaLibraryEntry
- [v90.33.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.68): chore(resolve conflicts): li_proposal
- [v90.33.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.67): fix(images): Debounce image crop changes by 500ms to prevent burst requests against the image service
- [v90.33.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.66): fix(document createion flow): still disabled in channels
- [v90.33.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.65): fix(filter bar item): min height added
- [v90.33.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.64): fix: improve crop normalization and update srcissors
- [v90.33.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.63): fix(dependencies): Update `webpack` to patch vulnerability
- [v90.33.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.62): fix(dashboards): enhance multi-channel behavior for dashboards/create flows
- [v90.33.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.61): fix(li-tree): keep invalid items in tree and mark as unsaved
- [v90.33.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.60): fix(metadata): Keep automatic metadata source for fallback title
- [v90.33.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.59): fix(display filter): restore search by typing functionality for listv2 filters
- [v90.33.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.58): fix(dashboard permissions): angular dashboard init correctly called
- [v90.33.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.57): fix: prevent syncing empty metadata title
- [v90.33.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.56): fix(image-cropper): account for missing width
- [v90.33.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.55): fix(menu): fix drag and drop handler - quick fix
- [v90.33.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.54): fix: Do not rely on axios serialization of `metadata` and `filters` attributes. It has depth limits
- [v90.33.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.53): Update app/features/publish/publish-control/publish-control-info/li-publish-control-visible-date.vue
- [v90.33.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.52): fix(rel-attribute): `rel` property was being overwritten by the `...partialLinkAttributes` contents
- [v90.33.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.51): fix(display filter): pass the correct config object to display filter fetch functions
- [v90.33.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.50): fix(draft): Use remote metadata source when updating metadata
- [v90.33.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v90.33.49): fix(image): Use crop in getUpdatedAutomaticCrops() calculation
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
