---
type: release-notes
title: January 2023 Release
description: Technical Release Notes for release-2023-01
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-01/release-2023-01/

header:
  upcoming: false
  legacy: true
  current: false
  maintained: false
  branchHandle: release-2023-01
---

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
|Postgres|15|
|Elasticsearch<br/>OpenSearch|8.x<br/>v2.3.0|
|Redis|7|
|Livingdocs Server Docker Image|livingdocs/server-base:18.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:18.5|
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
# run `livingdocs-server migrate up` to update to the newest database schema
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
- [v208.3.65](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.65): fix(woodwing): The blob-store createReadStream returns a promise, await it
- [v208.3.64](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.64): fix(indexing): Also index systemMetadata properties present in the static mapping
- [v208.3.63](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.63): fix(documents): Fix `metadataEntity` typo
- [v208.3.62](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.62): chore: Disable nzz-downstream tests as it's using release-2023-03 already
- [v208.3.61](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.61): fix(indexing): Fix `--ids=1,2,3` indexing for the drafts index
- [v208.3.60](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.60): fix(indexing): Add try/catch around elasticsearch payload creation to prevent full bulk failures if one document is faulty
- [v208.3.59](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.59): chore(data-migrations): Support new date range structure on data migration document filter query
- [v208.3.58](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.58): fix: also support camel case in systemdata for a Data Migration
- [v208.3.57](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.57): fix: desk-net status sync back without config
- [v208.3.56](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.56): fix(project-config): Enhance content type & media type sync logs with project id context
- [v208.3.55](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.55): fix(project-config): Set higher request body size for the project config post endpoints
- [v208.3.54](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.54): fix: fix data migration memory leak (report at the end) with a lot of migrated documents
- [v208.3.53](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.53): fix: add x-compressed-zip extension
- [v208.3.52](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.52): fix(project-configs): Sync content_type_ids and media_type_ids of static project configs during server start
- [v208.3.51](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.51): fix(vm2): Upgrade `vm2` module to patch a security vulnerability
- [v208.3.50](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.50): fix(blob-storage): Fix blob storage download logic to await the file before streaming it
- [v208.3.49](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.49): fix(routing): Fix `routing` indexing behavior that breaks CLI tasks when `routing.indexing.enabled` is enabled without `worker` role
- [v208.3.48](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.48): fix: log invalid metadata type in contentType[].publicationIndex config
- [v208.3.47](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.47): fix(security): Fix security vulnerabilities from `xml2js` and `vm2`
- [v208.3.46](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.46): fix(blob-storage): Azure Blob Storage config Schema validation didn't include custom `computeKey()` function
- [v208.3.45](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.45): fix: extend airship log
- [v208.3.44](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.44): fix(link-directive): Include `target` property to LinkDirective schema
- [v208.3.43](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.43): chore: Add a comment about elasticsearch version conflicts in the delete_by_query call
- [v208.3.42](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.42): fix(sort): correctly support arrays
- [v208.3.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.41): fix(redis): Coerce strings to numbers. There was an inconsistency with some integers where `tonumber('0')` fails as it requires a base with that.
- [v208.3.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.40): fix(redis): Add breaking change message and code for unsupported redis <v6.2 which was missing from previous PR
- [v208.3.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.39): fix: improve isTestFile regex
- [v208.3.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.38): fix(redis): Include Breaking change message for versions lower than version 6.2
- [v208.3.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.37): chore: Upgrade to redis 6.2 as that's the minimal version supported in this release
- [v208.3.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.36): fix(password-validation): Generic error (5XX) was used for Password input verification and error properties where removed, replaced with `validationError` which will return clearer 4XX error
- [v208.3.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.35): fix: update framework version
- [v208.3.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.34): fix(distribution-planning): Remove document content from response
- [v208.3.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.33): fix: Upgrade to sharp 0.31.3
- [v208.3.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.32): fix(lib): Get require("~lib") to work again with newer npm versions
- [v208.3.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.31): chore(framework): Update `@livingdocs/framework` version
- [v208.3.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v208.3.30): fix(imports): Handle import and webhook jobs immediately instead of using the waiting logic that requires less redis connections
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
- [v87.5.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.77): fix(li-list-assignments): avoid flickering after list was selected
- [v87.5.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.76): fix(menu): fix drag and drop handler - quick fix
- [v87.5.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.75): fix(publish control): allow opening publish control panel when text in editable is selected
- [v87.5.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.74): fix: remove session from MediaLibraryEntry
- [v87.5.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.73): fix(images): Debounce image crop changes by 500ms to prevent burst requests against the image service
- [v87.5.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.72): fix: improve crop normalization and update srcissors
- [v87.5.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.71): fix(dependencies): Update `webpack` and `xml2js` to patch vulnerabilities
- [v87.5.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.70): fix(metadata): Keep automatic metadata source for fallback title
- [v87.5.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.69): fix: prevent syncing empty metadata title
- [v87.5.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.68): fix: apply menu list filters for table dashboards
- [v87.5.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.67): fix(draft): Use remote metadata source when updating metadata
- [v87.5.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.66): fix(li-integer): correctly treat 0 value
- [v87.5.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.65): fix(li-comment-mention): fix undefined session console error
- [v87.5.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.64): fix(li-tree): allow unparsable links
- [v87.5.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.63): fix(dashboards): show quick publish only when reasonable
- [v87.5.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.62): fix(li-table-dashboard-cell-context-menu): filter out hidden actions
- [v87.5.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.61): fix(image_form): hide download button when no crops are available
- [v87.5.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.60): fix(vue): Fix default parameter of components that should fallback to an empty object
- [v87.5.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.59): fix: bump framework version
- [v87.5.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.58): fix(document tooltip): shows scheduled docs
- [v87.5.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.57): fix(dashboards): Don't load document content in table dashboards
- [v87.5.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.56): fix(table dashboards): don't log errors in mixed content type scenarios
- [v87.5.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.55): fix(framework): Update `@livingdocs/framework` version to include latest fix for imgIX URL generation
- [v87.5.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v87.5.54): fix(kanban board): reloads results correctly when result is less than page size
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
