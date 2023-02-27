---
type: release-notes
title: January 2023 Release
description: Release notes for release-2023-01
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-01/
  - /operations/releases/release-2023-01/release-2023-01/
---

{{< release-header
  title="January 2023 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2023-01"
>}}

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/njfTVMspn7_cU2VBLw8Io1QcDukoFvlbHm5TwYJJ_iJNabGMMOHkAWdtatCiYwpl.rAkqpWECUhxoUtg5) | Passcode: y1Dw?P0X
* [Feature Webinar Slides](https://docs.google.com/presentation/d/1_XFPtkkRGRmYY5-815pLSCkT0k7E5Vso2djNUawE3oA)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/GyxbikJWTDFZPbEp35NILsLwBhBknXPQgEogS2yGCjpSIMeLpj9xcHfT_cw3CHde.wKqlN0R9lrt9dFUP) | Passcode: jq%sBK7B
* [Dev Webinar Slides](https://docs.google.com/presentation/d/1QFep2oTseMQmMsJGh2aESHOLXkfapvDqZVtonmHBfC8)
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

### Home Screen

Project home screen with multiple Table Dashboards and Document Creation Flow buttons on it.

* [Documentation]({{< ref "/reference/project-config/editor-settings#home-screen" >}})
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6082)

## Breaking Changes :fire:

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
# migration 184-increase-webhook-handle-length.js
#   limit webhook handle to 50 characters
# migration 185-li-get-leaf-of-revision-history.js
#   add psql function li_get_leaf_of_revision_history
livingdocs-server migrate up
```

### Drop support for node v14

🔥 Drop support for node 14, use node v18 instead.

### Drop support for Redis < v6.2

🔥 The minimal required Redis version is v6.2.

### Upgrade to elasticsearch client v8

🔥 The response structure changed in the new client. If you have custom code that accesses elasticsearch, you'll need to update it accordingly:

```diff
- const {body} = await elasticsearchClient.search({
+ const body = await elasticsearchClient.search({
    index: 'li-documents',
    q: `document.id:${this.doc.id}`
  })
```

Please see the examples of elasticsearch how to use it: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/get_examples.html


🔥 The elasticsearch client configuration changed slightly. Please consult the elasticsearch client configuration documentation: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/basic-config.html

```diff
  search: {
    elasticsearchClient: {
      node: 'https://127.0.0.1:9200/',
      auth: {username: 'admin', password: 'admin'},
-     ssl: {rejectUnauthorized: false}
+     tls: {rejectUnauthorized: false}
    }
  },
```

### Stricter search queries

- 🔥 Filters on unavailable properties throw an error.
- 🔥 Elasticsearch `exists` queries on objects not supported anymore. Please use a specific sub-property instead.

   e.g. To filter for documents that have no category assigned, you need to use `category.reference.id` instead of `category` in the editor search filter:
  ```diff
  {
    id: 'without-category',
    label: 'Without category',
    type: 'metadata',
  -  key: 'category',
  +  key: 'category.reference.id',
    value: {exists: false}
  }
  ```

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5000)

### Don't expose error_details in 5xx response

🔥 5XX responses will no longer contain `body.error_details` object, still the whole error response will be logged.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4988)

### Remove metadata plugin li-media-language

🔥 Remove metadata plugin `li-media-language`, use `li-metadata-translations` instead.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4899)


### Remove deprecated document.path

Since a long time we deprecated the DB property `documents.path`, because there is no real feature behind that property.

:fire: `contentTypes[].editor.deliveryLinks` do not support`:path` placeholder
:fire: editor model `draft.path` is not accessible anymore

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5001)


### Support removal of metadata properties by assigning null

🔥 Before this change, assigning null values resulted in a metadata schema error.
Now it's accepted and it removes the metadata property. Therefore it's not possible anymore to save the value null as metadata property value.

```js
// before
metadata.myField = null // throws
// now
metadata.myField = null // delete metadata.myField
```

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5007)

### Mandatory project_id in documentApi.find

🔥 Make `project_id` mandatory in `documentApi.find`

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/5017)

### Fix firstPublicationDate to documents table (Post Deployment) :fire:

This script was backported to release-2022-11, so it has been added again for release-2023-01 in case anyone missed it. If you already ran the script with the previous release upgrade you do not need to run it again.

If you have unpublished a document while running release-2022-07 or release-2022-09 then you may have inaccurate values for the `document.systemdata.firstPublicationDate`. Below is a comparison of the change in the four most recent versions:

First publish:
release-2022-07 and release-2022-09: Set `firstPublicationDate`
release-2022-05 and release-2022-11: Set `firstPublicationDate`

Republish while published:
release-2022-07 and release-2022-09: Keep `firstPublicationDate`
release-2022-05 and release-2022-11: Keep `firstPublicationDate`

Unpublish:
release-2022-07 and release-2022-09: Remove `firstPublicationDate`
release-2022-05 and release-2022-11: Keep `firstPublicationDate`

Republish after unpublish:
release-2022-07 and release-2022-09: Set `firstPublicationDate`
release-2022-05 and release-2022-11: Keep `firstPublicationDate`

Essentially the old behaviour and the new "fixed" behaviour is to set `firstPublicationDate` once and never modify it. This property will still exist even when the document is unpublished. For release-2022-07 and release-2022-09 the difference in behaviour was that the `firstPublicationDate` would be cleared on unpublish and set again at the next publish.

If you would like to correct the `firstPublicationDate` property for all of your articles you can run:
```bash
node ./node_modules/@livingdocs/server/db/manual-migrations/009-fix-first-publication-date.js
```

This script performs the following actions:

1. Check that `first_publication_id` has been set (same as the script 007-populate-first-publication-data.js)
2. Move `firstPublicationDate` from `data` to `data.publishControl`
3. Remove `data.firstPublicationDate`
4. If `firstPublicationDate` is not set then use the value from the first publication
5. If `firstPublicationDate` is set then use the value from the first publication when the first publication is older

It is highly recommended that you run this script because it is performing a data migration as well as fixing the values.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4957)

## Deprecations

### Deprecate Dashboard Display Filters

These Dashboard Display Filters get deprecated:
- `coreApi.searchFilters.register`
- `coreApi.searchFilters.registerList`
- `coreApi.searchFilters.registerAngularComponent`

Update the deprecated filter to the supported [Display Filters](https://docs.livingdocs.io/customising/advanced/editor-configuration/display-filter/) from the core.
- Named Filters
- Metadata Filters
- ListV2 Filters

If you can't handle your requirements with core filters it's best to contact your Customer Solutions manager to get inputs for solutions (one option is to create your custom Vue component, but that should be prevented whenever possible)

Breaking Change: `release-2023-03`

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/6150)


## Other Changes

### Features
* [Load drafts in includes](https://github.com/livingdocsIO/livingdocs-server/pull/4936)
* [Add server config 'httpServer.showStackTraces'](https://github.com/livingdocsIO/livingdocs-server/pull/4926)
* [Support Dailymotion for oEmbed include](https://github.com/livingdocsIO/livingdocs-server/pull/4910)

### Improvements
* [TLS Support in Redis](https://github.com/livingdocsIO/livingdocs-server/pull/4982)
* [Add `acceptedCharacterDifference` property to `li-target-length` metadata plugin](https://github.com/livingdocsIO/livingdocs-editor/pull/6029)

### Bugfixes
* [Publish screen back button returns to custom data record dashboard after create](https://github.com/livingdocsIO/livingdocs-editor/pull/5959)
* [Handle focal point in metadata forms](https://github.com/livingdocsIO/livingdocs-editor/pull/5953)
* [Fix date sort order on users admin screen](https://github.com/livingdocsIO/livingdocs-editor/pull/6054)


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v208.3.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.29): fix(document-lists): Support list updates with a lot of document ids
- [v208.3.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.28): fix(performance): Give postgres better query hints by adding a project_id to content type joins
- [v208.3.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.27): fix(indexing): Always pass the contentTypeId used for indexing filtering
- [v208.3.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.26): fix(webhooks): Acknowledge and delete duplicated webhook requests
- [v208.3.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.25): fix(security): Update `taffydb` modules to latest non-vulnerable version
- [v208.3.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.24): fix(deps): update dependency ua-parser-js from 1.0.32 to v1.0.33
- [v208.3.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.23): fix(security): Update `undici` module to latest non-vulnerable version
- [v208.3.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.22): fix(designs): Fix transaction support
- [v208.3.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.21): fix(scheduled-publishing): Coerce schedule dates to a proper iso date with time zone
- [v208.3.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.20): fix(local-authentication): Make the current_password validation more strict
- [v208.3.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.19): fix(public-api): Fix `mutating` property on route declaration of composition api
- [v208.3.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.18): fix(search): Support custom date format dd.MM.yyyy in legacy elasticsearch mappings
- [v208.3.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.17): fix: extend test for filtering unknown components when nested default content is defined in the contentType
- [v208.3.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.16): fix(public-api): Fix `Cannot set headers after they are sent to the client` error on `POST /api/v1/import/mediaLibrary`
- [v208.3.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.15): fix: check documentType delete permissions
- [v208.3.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.14): fix(import): Ignore duplicate import webhook delivery report error
- [v208.3.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.13): fix(date-filter): Do not match a date as date range
- [v208.3.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.12): fix(date-filter): Use a more strict date, boolean and date range parsing
- [v208.3.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.11): fix(date-filter): use correct key
- [v208.3.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.10): fix(comyan): expose api
- [v208.3.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.9): fix(homeScreen): add dashboardTitle config
- [v208.3.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.8): test(image-processing): Add a timeout to the extractHeader tests and use a larger file
- [v208.3.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.7): fix: add test for id range parameter for PublicationEvents
- [v208.3.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.6): fix(desknet): Prevent empty userId from Desk-Net
- [v208.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.5): chore: Fix DocumentEntity save tests that use the documents repo
- [v208.3.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.4): test: Simplify the tests
- [v208.3.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.3): fix(cli reencrypt): now uses correct stringify

### Livingdocs Editor Patches
- [v87.5.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.53): fix(publish control): ensure button state changes on publish/draft creation
- [v87.5.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.52): fix: defaultParams from directive
- [v87.5.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.51): fix(drag-and-drop): Fix issue where drag-and-drop from the SVG starting in the clipboard would result in an error
- [v87.5.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.50): fix(deps): update dependency fastify
- [v87.5.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.49): chore(drone): Disable Bluewin pipeline
- [v87.5.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.48): fix(dashboard-reload): persist current result list
- [v87.5.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.47): fix(li-link-edit): Fix error logged in `triggerDigest()`
- [v87.5.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.46): fix(multilist): Prevent removed item from being re-added on sort
- [v87.5.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.45): fix(supportCrops): false checker
- [v87.5.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.44): fix(supportsCrop): checks for false value
- [v87.5.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.43): fix(version): minor commit for version control
- [v87.5.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.42): fix(scheduled-publishing): Send iso dates with timestamp to the server
- [v87.5.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.41): fix: make builds feedback more visible
- [v87.5.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.40): fix(deps): bump ua-parser-js from 0.7.32 to 0.7.33
- [v87.5.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.39): fix(focalPoint): avoid creating empty object as focal point
- [v87.5.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.38): fix(document reference): Class typo
- [v87.5.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.37): fix: Replace jsonwebtoken with jose
- [v87.5.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.36): fix(images): do not auto-update images for includes
- [v87.5.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.35): fix(li-date-time-range-filter): prevent filter dropdown to be cut off
- [v87.5.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.34): chore(soft lock): no helper function, better lock check
- [v87.5.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.33): fix(basePath): Always load webpack assets with the absolute path
- [v87.5.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.32): fix(deps): update dependency fastify from 4.9.2 to 4.10.2 [security]
- [v87.5.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.31): fix(security): Applies all security patches that do not have the patch in a breaking version
- [v87.5.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.30): fix: show configured style of li-document-reference in creation flow dialogs and includes
- [v87.5.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.29): fix(security): Upgrade `socket.io` to fix critical vulnerability
- [v87.5.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.28): fix(security): Upgrade `resolve-url-loader` to fix `loader-utils` critical vulnerability
- [v87.5.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.27): fix: detect media changes by asset.key
- [v87.5.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.26): fix(upload): handle unsupported images in browser
- [v87.5.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.25): fix(comyan): remove unsupported config from the ui
- [v87.5.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.24): fix(document lists): Code removed
- [v87.5.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.23): fix(homeScreen): use unique key to loop over home screen dashboards
- [v87.5.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.22): fix(metadata): Wrap document references in default list
- [v87.5.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.21): chore(li-link-edit): tests added
- [v87.5.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.20): fix(namedCrops): Delete button works correctly
- [v87.5.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.19): fix: add system user for empty userid
- [v87.5.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.18): fix(home screen): return to home screen with back button from article if opened from home screen
- [v87.5.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.17): fix(metadata): Always pass focalPoint when initialising image cropper
- [v87.5.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.16): fix(filters): deprecate list and angular component custom filters
- [v87.5.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.15): fix(deps): update dependency moment-timezone from 0.5.34 to 0.5.35 [security]
- [v87.5.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.14): fix(medialibrary): Fix error where uploading images by restricted user would fail
- [v87.5.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.13): fix(autosave): Add scheduled save when autosave.stopped
- [v87.5.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.12): fix(search): Fix load more button translation for list search
- [v87.5.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.11): fix(inlineListEditor): Only publishable when dirty
- [v87.5.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.10): fix(dateTimevalidity): Does not error without 'to' date
- [v87.5.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.9): fix(metadata): Change calculation for li-text input height
- [v87.5.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.8): fix(li-document-creation-flow-button): null-safe access to `documentCreationFlow`
- [v87.5.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.7): fix: change to selected service on copy
- [v87.5.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.6): fix(document-lists): Update German translation for "Close"
- [v87.5.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.5): fix(loader): added and styled for translation card

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
