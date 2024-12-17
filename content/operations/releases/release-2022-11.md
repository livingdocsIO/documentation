---
type: release-notes
title: November 2022 Release
description: Release notes for release-2022-11
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2022-11/release-2022-11/
---

{{< release-header
  title="November 2022 Release"
  upcoming=false
  legacy=false
  current=false
  maintained=true
  branchHandle="release-2022-11"
>}}


**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/hdMzoDQaiMjRHpsk_lNy2MEdSRzRGqRJMOkuqiTUR5EzGPIiB8ESriEEGATw5TFP.0jGCoTVt8nDaY3O9) | Passcode: E2JLj+4g
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/1bVlACdvJoM_wZWOcsTy3XGPvEzej5sTFVYWtAqGcd6k)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/Ng_SOGE_p7BdgEbfCcwAgP39az4XLasklhqzMsD107ORuO94sq5qEKajOFjb8VQP.jBgqsTBMFQq3RFw7) | Passcode: CB!HH4c?
* [Dev Webinar Slides](https://docs.google.com/presentation/d/1sICTF2SQPPGYiq0-IZ-DQ_qtdkL2x12eeP07WwSwyyQ)
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
|Livingdocs Server Docker Image|livingdocs/server-base:18|
|Livingdocs Editor Docker Image|livingdocs/editor-base:18|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

### Minimal
|Name|Version|
|-|-|
|Node|14.17.0|
|NPM|7|
|Postgres|12|
|Elasticsearch<br/>OpenSearch|7.x<br/>1|
|Redis|5 (Deprecated)|
|Livingdocs Server Docker Image|livingdocs/server-base:14.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:14.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

### Focal Point Cropping

Automatic crops are a great way to define multiple crops of an image, but automatic crops could cut off the important subject in the image. There is where focal point cropping comes into the game by letting users choose where in the image the main subject is and all automatic crops will make sure it is visible in the frame.

* [Documentation](https://docs.livingdocs.io/guides/media-library/media-library-setup/#focal-point-cropping)
* [PR: Focal point selection for images](https://github.com/livingdocsIO/livingdocs-editor/pull/5916)

### Push Messages

A new metadata plugin which does all the User Interface and database work required to send Push Messages,
but gives you the control over what and how to send.

- Send Push Messages directly from Table Dashboards
- Dynamic message format based on Params Schema
- Implement your own push function to send messages anywhere

* [Documentation]({{< ref "/reference/document/metadata/plugins/li-push-messages" >}})
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5833)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4829)

### Public API - Open API Specification

The [Livingdocs Public API]({{< ref "/reference/public-api" >}}) can be tested and consumed with an [OpenAPI v3 specification file](https://livingdocsio.github.io/openapi/livingdocs-openapi.json).

Thanks to the [OpenAPI specification](https://swagger.io/specification/), it's possible to quickly test the API using [Swagger UI](https://petstore.swagger.io/?url=https://livingdocsio.github.io/openapi/livingdocs-openapi.json). And import the full collection of existing API endpoints into Insomnia or Postman.

### System Metadata

Livingdocs supports configurable metadata since a long time. In this release, we're introducing "System Metadata" properties, which have different versioning behavior and don't affect the draft state. This is useful for metadata properties that are not part of the content, but are used for internal purposes. Typically System Metadata Properties are used for behavioral extensions of the Livingdocs system, like Proofreading tasks or Push Notifications and other extensions. At the moment this is an internal feature and only specific properties use this functionality.

* [PR: System Metadata Preparation](https://github.com/livingdocsIO/livingdocs-server/pull/4735)
* [PR: System Metadata Preparation II](https://github.com/livingdocsIO/livingdocs-server/pull/4778)
* [PR: System Metadata](https://github.com/livingdocsIO/livingdocs-server/pull/4807)

### Document Lists Sync (Autorefresh)

Collaboratively managing Document Lists became much easier. Livingdocs now synchronises all changes so any user always sees the latest version of a Document List. Therefore, no more conflicting changes resulting in error messages and tedious reloads will occur.

* [PR: List Sync](https://github.com/livingdocsIO/livingdocs-editor/pull/5853)
* [PR: Sync Notification](https://github.com/livingdocsIO/livingdocs-editor/pull/5941)

### Cut and paste Components

Cutting and pasting components makes reordering components within a long document much easier. Cutting components moves them into the Clipboard from where they can be dragged to their new position.

* [PR: Cut and paste components](https://github.com/livingdocsIO/livingdocs-editor/pull/5824)

### Metadata Plugin li-document-references

To replace the existing `li-reference-list` metadata plugin with it's more modern variant, `li-document-references` is introduced. It allows a more flexible configuration for the dashboard in use to search documents by the means of the `useDashboard` config as you know it from `li-document-reference`.

* [Documentation](https://docs.livingdocs.io/reference/document/metadata/plugins/li-document-references)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4871)
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5873)

### Roles for Read and Write Instances

We introduce `roles` to define the type of server
- `read` (all server have read access by default)
- `write` (stores data)
- `worker` (executes jobs like indexing)

* [Documentation](https://docs.livingdocs.io/customising/server/roles/)
* [PR: Roles](https://github.com/livingdocsIO/livingdocs-server/pull/4814)

### Reindexing CLI task improvements

Elasticsearch Indexing CLI (`livingdocs-server elasticsearch-index`) got some improvements:
- add `--ids=1,2,3,4` argument to index specific document id's
- add `--ids-file=file-with-ids.txt` argument to index specific document id's passed by a file
- add `--since=2022-10-11` argument to index changes since a specific iso date
- add `--until=1h` argument to index changes until a relative time or iso date
- add `--wait` flag to wait for index completion. The processing still only takes place in other processes, not in the cli process.

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4837)

## Breaking Changes :fire:

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 182-add-started_at-index-on-users_occupations.js
#   add index on user_occupations.started_at
# migration 183-add-user_id-index-on-users_occupations.js
#   add index on user_occupations.user_id
livingdocs-server migrate up
```

### Fix firstPublicationDate to documents table (Post Deployment) :fire:

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

### Drop Elasticsearch v6 :fire:

[Drop support for Elasticsearch v6](https://github.com/livingdocsIO/livingdocs-server/pull/4907).
Please upgrade to Elasticsearch v8 or OpenSearch v2.3.0.

### Separation of Revision Metadata and System Metadata :fire:

We introduce "System Metadata" for data which only needs to be stored per document and need no history like the existing Revision Metadata. Typically System Metadata are used for handling state on a document like proofreading, language settings, integration settings and a lot more.

- :fire: Metadata object spread not supported
  Object spread using `{...documentVersion.metadata}` is not supported anymore for `documentWriteModel.metadata` and `documentVersion.metadata`. Please use `{...documentVersion.metadata.toJSON()}` instead.
  This has the side effect in the tests that `expect(metadata).to.deep.equal({title: 'foo'})` doesn't work anymore. Either call `.toJSON()` on the object or use a clone function that clones all the enumerable properties instead of just own properties.
- :fire: Content types removed from a project config not served in public api
  The public API now only serves configured content types. Before it also served documents of removed content types, which resulted in inconsistencies when a certain set of metadata was expected.
- :fire: Unconfigured metadata properties are not exposed anymore on `documentVersion.metadata`
  `documentVersion.metadata` now only includes configured metadata properties. Before the changes in here it contained all metadata properties, also ones that got removed from the metadata configuration of the project config. Therefore `JSON.stringify(document.metadata)` now only renders configured properties.
- :fire: Move `preparePublish` hooks after metadata plugin `onPreparePublish` hooks
  During the migration to the preparePublish hooks, the order [accidentally](https://github.com/livingdocsIO/livingdocs-server/blob/b5b125709f89973891cb4422427e8c2e2a34ec98/app/features/documents/publication/publication_api.js#L84-L85) changed. Before, the prePublish hooks were run after the metadata plugin onPublish hooks.
  In this [change](https://github.com/livingdocsIO/livingdocs-server/blob/eafbddafd88d9d4b909a70ab404f4df259804534/app/features/documents/entities/documents-repo.js#L241-L247), we're reverting that to execute the metadata plugin onPreparePublish hooks before the preparePublish hooks.
  This has the effect that required metadata are always present in the preparePublish hooks, unlike before where they still could be missing.

References:
* [PR: System Metadata Preparation](https://github.com/livingdocsIO/livingdocs-server/pull/4735)
* [PR: System Metadata Preparation II](https://github.com/livingdocsIO/livingdocs-server/pull/4778)
* [PR: System Metadata](https://github.com/livingdocsIO/livingdocs-server/pull/4807)

### Break metadata plugin li-desknet-integration | li-transcoding-state :fire:

* :fire: `ui.component` option for `li-transcoding-state` metadata plugin has been removed (it uses a default component)
* :fire: `ui.component` option for `li-desknet-integration` metadata plugin has been removed (it uses a default component)

References:
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/4782)
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5813)

### IndexingApi background indexing job :fire:

Remove `indexingApi.addPublicationBackgroundIndexingJobsByIds`.
Please use `indexIndexingApi.addBackgroundIndexingJobsByIds` that supports also cluster parameters.

```diff
- indexIndexingApi.addPublicationBackgroundIndexingJobsByIds({
-   context: {projectId: 1},
-   ids
- })
+ indexIndexingApi.addBackgroundIndexingJobsByIds({
+   handle: 'custom-index-handle',
+   context: {projectId: 1},
+   ids
+ })
```

* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/4837)

### Remove Regex support in Delivery :fire:

Remove any regular expressions from `pathPattern` configs and update them according to our [examples](https://docs.livingdocs.io/reference/project-config/deliveries/#pathpattern).

* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5908)


### Remove li-desknet-platforms metadata plugin :fire:

The metadata plugin `li-desknet-platforms` has been replaced by `li-desknet-schedule`, which has a different storage schema and additional config options.

- :fire: Remove li-desknet-platforms metadata plugin

**Required Actions**

If you have been using the `li-desknet-platforms` metadata plugin you will need to change to the `li-desknet-schedule` plugin and migrate the data to the new format. The metadata storage schema has changed from:

```js
[
  {
    platformId: 1,
    categoryId: 2
  }
]
```
to:
```js
{
  platforms: [
    {
      platformId: 1,
      categoryId: 2
    }
  ]
}
```

If you would like to migrate the data from "li-desknet-platforms" to "li-desknet-schedule" then you will need to write a [migration script](https://docs.livingdocs.io/guides/documents/document-design/data-migrations/) which moves the current metadata value to the platforms property of the new metadata value object:

```js
module.exports = {
  async migrateAsync ({metadata}) {
    // skip the revision from being migrated when deskNetPlatforms is not set
    if (!metadata.desknetPlatforms) return

    metadata.desknetSchedule = {platforms: metadata.desknetPlatforms}
    metadata.desknetPlatforms = undefined
    return {metadata}
  }
}
```

* [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5779)
* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4799)

### Standardise the alt text and directive prefilling :fire:

:fire: Change the processing order of altTextPrefilling and componentDirectivesPrefilling so that the result is more understandable.

If multiple prefill configs are provided for the same directive in `componentDirectivesPrefilling`, then the first match found will be used instead of continuing and overwriting other previously successful matches. Additionally, there is no longer a priority given to translatable metadata fields, so the order of the `componentDirectivesPrefilling` and `altTextPrefilling` configs should be more predictable - the first match in the array will always be used.

**Required Actions**
If you have multiple prefill configs for a single directive in `componentDirectivesPrefilling` then you should change the order so that the highest priority configs are first in the array.

* [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5821)


## Deprecations

### Systemdata

💣 Normalize `documentWriteModel.systemdata` and `documentVersion.systemdata`. Old properties are defined as getters and emit deprecation warnings (`LIDEP018`), new properties are enumerable on the object.

- `systemdata.project_id` > `systemdata.projectId`
- `systemdata.channel_id` > `systemdata.channelId`
- `systemdata.document_id` > `systemdata.documentId`
- `systemdata.revision_id` > `systemdata.revisionId`
- `systemdata.remote_id` > `systemdata.remoteId`
- `systemdata.content_type` > `systemdata.contentType`
- `systemdata.document_type` > `systemdata.documentType`
- `systemdata.designDescriptor` > `systemdata.design`
- `systemdata.publication_id` > `systemdata.publicationId`
- `systemdata.publication_date` > `systemdata.lastPublicationDate`
- `systemdata.first_publication_date` > `systemdata.firstPublicationDate`

### HTTP Server Config

To make the HTTP Config more consistent we [moved](https://github.com/livingdocsIO/livingdocs-server/pull/4830) the settings to another server config property.

```js
// from
server: {
  host: 'localhost',
  port: 9090,
  max_json_request_size: '500kb',
  gzip: false,
  trust_proxy: 'loopback,uniquelocal,172.17.0.0/24'
},

// to
httpServer: {
  //   defaults, you can omit those
  host: '::', // this is the http listen config. if you declare 'localhost', it won't be possible to access it outside the host.
  port: 9090,
  maxRequestBodySize: '500kb',
  useGzipCompression: false,
  xForwardedForTrustIps: 'loopback,uniquelocal,172.17.0.0/24',

  //   optionally define unix socket path or ssl certificates
  //   path: '/path/to/unix/socket',
  //   https: {key, cert},
},
```

### Metadata Plugin Config Validation

* Deprecate support for `metadataPluginsToIgnoreForConfigValidation`

* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4898)


## APIs :gift:

### Public API

* [Allow to import video and file Media Library Entries via public API - Documentation](https://docs.livingdocs.io/reference/public-api/imports/media-library-entries/)
* [Allow to import video and file Media Library Entries via public API - PR](https://github.com/livingdocsIO/livingdocs-server/pull/4876)
* [Allow translated assets for a MediaLibraryEntries import - Documentation](https://docs.livingdocs.io/reference/public-api/imports/media-library-entries/)
* [Allow translated assets for a MediaLibraryEntries import - PR](https://github.com/livingdocsIO/livingdocs-server/pull/4904)

## Other Changes

### Security

### Design

* [Fix/Document Search and Styleguide](https://github.com/livingdocsIO/livingdocs-editor/pull/5931)

### Features

* [Specific asset loading per Content-Type](https://github.com/livingdocsIO/livingdocs-server/pull/4791)
* [Limit alt text prefilling by component](https://github.com/livingdocsIO/livingdocs-editor/pull/5798)

### Improvements

* [Improve placement of text formatting toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/5790)
* [Log framework violations after initialization](https://github.com/livingdocsIO/livingdocs-editor/pull/5765)
* [Table Dashboards: provide a documentLoader to dashboard cards](https://github.com/livingdocsIO/livingdocs-editor/pull/5805)
* [Hide teaser format select when no transforms are available](https://github.com/livingdocsIO/livingdocs-editor/pull/5862)
* [Configurable spellcheck styling](https://github.com/livingdocsIO/livingdocs-editor/pull/5943)

### Bugfixes

* [The insert panel/edit state persists when someone closes the copy button](https://github.com/livingdocsIO/livingdocs-editor/pull/5834)
* [Fix transactions during project create and project config updates](https://github.com/livingdocsIO/livingdocs-server/pull/4818)
* [Show warning for deleted project only in the first login](https://github.com/livingdocsIO/livingdocs-editor/pull/5796)
* [User cannot change list inbox during publish and conflict notification is sticky](https://github.com/livingdocsIO/livingdocs-editor/pull/5763)
* [Send correct options to setupProjects() function.](https://github.com/livingdocsIO/livingdocs-server/pull/4730)
* [Fix crop button for named crops](https://github.com/livingdocsIO/livingdocs-editor/pull/5778)
* [Close document copy popup when clicking on X or outside the popup](https://github.com/livingdocsIO/livingdocs-editor/pull/5755)
* [Save open/closed state of metadata cards for each contentType separately](https://github.com/livingdocsIO/livingdocs-editor/pull/5761)
* [Dashboards: when a documentCreationFlow button is shown, no default create button is shown next to it anymore](https://github.com/livingdocsIO/livingdocs-editor/pull/5776)
* [Handle cases where no teaserComponents are configured](https://github.com/livingdocsIO/livingdocs-editor/pull/5788)
* [Document Editing Toolbar: Enable toolbar buttons opening flyouts when they are grouped/hidden for narrow screens](https://github.com/livingdocsIO/livingdocs-editor/pull/5787)
* [Prevent app from crashing when toggling history view](https://github.com/livingdocsIO/livingdocs-editor/pull/5785)
* [Always emit an update event when extractor updates the metadataForm](https://github.com/livingdocsIO/livingdocs-editor/pull/5786)
* [Pass the advanced formatting configuration from Editor to Editable config](https://github.com/livingdocsIO/livingdocs-editor/pull/5721)
* [Archived documents are removed from multi-list inbox](https://github.com/livingdocsIO/livingdocs-editor/pull/5810)
* [Fix prepare-publication endless loop](https://github.com/livingdocsIO/livingdocs-editor/pull/5871)
* [Billing: Show existing users in detail month view](https://github.com/livingdocsIO/livingdocs-editor/pull/5854)
* [Billing: Show user occupations correctly in the user list](https://github.com/livingdocsIO/livingdocs-server/pull/4864)
* [PreparePublish: Validation visible for Angular plugins](https://github.com/livingdocsIO/livingdocs-editor/pull/5852)
* [Do not mutate global metadata plugin objects](https://github.com/livingdocsIO/livingdocs-server/pull/4862)
* [Component Link: Icon remounts with a selection change](https://github.com/livingdocsIO/livingdocs-editor/pull/5848)
* [Component Link: Fix toggling with multiple links](https://github.com/livingdocsIO/livingdocs-editor/pull/5851)
* [doc-link directive: target option for links get saved](https://github.com/livingdocsIO/livingdocs-editor/pull/5924)
* [Use default language on document creation](https://github.com/livingdocsIO/livingdocs-editor/pull/5902)
* [Comments are shown on the right position](https://github.com/livingdocsIO/livingdocs-editor/pull/5884)
* [List inbox is reactiv again on publish](https://github.com/livingdocsIO/livingdocs-editor/pull/5911)
* [Set height of iframe in editor correctly](https://github.com/livingdocsIO/livingdocs-editor/pull/5933)


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v200.3.53](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.53): fix(documents): Fix `metadataEntity` typo
- [v200.3.52](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.52): fix(indexing): Fix `--ids=1,2,3` indexing for the drafts index
- [v200.3.51](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.51): chore: Disable drone nzz tests, they are on a newer version
- [v200.3.50](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.50): fix: fix data migration memory leak (report at the end) with a lot of migrated documents
- [v200.3.49](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.49): fix: log invalid metadata type in contentType[].publicationIndex config
- [v200.3.48](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.48): fix: improve isTestFile regex
- [v200.3.47](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.47): fix: update framework version
- [v200.3.46](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.46): fix(documents): Allow dashboard request to exclude revision content
- [v200.3.45](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.45): fix(lib): Get require("~lib") to work again with newer npm versions
- [v200.3.44](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.44): fix(document-lists): Support list updates with a lot of document ids
- [v200.3.43](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.43): fix(performance): Give postgres better query hints by adding a project_id to content type joins
- [v200.3.42](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.42): fix(indexing): Always pass the contentTypeId used for indexing filtering
- [v200.3.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.41): fix(webhooks): Acknowledge and delete duplicated webhook requests
- [v200.3.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.40): fix(security): Update `taffydb` modules to latest non-vulnerable version
- [v200.3.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.39): fix(deps): update dependency ua-parser-js from 1.0.32 to v1.0.33
- [v200.3.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.38): fix(designs): Fix transaction support
- [v200.3.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.37): fix(scheduled-publishing): Coerce schedule dates to a proper iso date with time zone
- [v200.3.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.36): fix(local-authentication): Make the current_password validation more strict
- [v200.3.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.35): fix(public-api): Fix `mutating` property on route declaration of composition api
- [v200.3.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.34): fix: extend test for filtering unknown components when nested default content is defined in the contentType
- [v200.3.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.33): fix(import): Ignore duplicate import webhook delivery report error
- [v200.3.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.32): fix(public-api): Fix `Cannot set headers after they are sent to the client` error on `POST /api/v1/import/mediaLibrary`
- [v200.3.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.31): fix: check documentType delete permissions
- [v200.3.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.30): fix(publication-indexing): Remove documents of a deleted content type from the publication index
- [v200.3.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.29): fix(xmldom): Update `@xmldom/xmldom` to a newer release that includes fix for security vulnerability
- [v200.3.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.28): fix: add test for id range parameter for PublicationEvents
- [v200.3.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.27): fix(desknet): Prevent empty userId from Desk-Net
- [v200.3.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.26): chore: Fix DocumentEntity save tests that use the documents repo
- [v200.3.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.25): fix(comyan): expose api
- [v200.3.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.24): fix(cli reencrypt): now uses correct stringify
- [v200.3.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.23): fix(li-push-messages): check if document is published
- [v200.3.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.22): fix(indexing): Handle missing metadata while indexing
- [v200.3.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.21): chore: Adopt elasticsearch version
- [v200.3.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.20): fix(elasticsearch): Always use v7 of the elasticsearch client. v8 changed the api and we can't use it in the release
- [v200.3.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.19): chore(documents): Adopt firstPublicationDate behavior in tests that were recently added on master
- [v200.3.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.18): fix(fastify): Update `fastify` to 4.10.2, to patch a security vulnerability
- [v200.3.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.17): fix(webhooks): Restrict webhook handle length
- [v200.3.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.16): fix(print): Add params to print export
- [v200.3.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.15): fix(errors): Remove `isPublicAPI` from `req` properties
- [v200.3.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.14): fix(redis): Set sentinel username and password if credentials are set
- [v200.3.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.13): fix(lists): Create list endpoint required `lists:publish` permission, changed to `lists:manage` to match permission description
- [v200.3.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.12): fix(includes): Fix paramsSchema `config.published` handling
- [v200.3.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.11): fix(unPublishNow): Workflow improved/implemented
- [v200.3.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.10): fix(li-media-language): Remove support for `li-media-language`
- [v200.3.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.9): fix(desknet): Check value changed before publication status sync
- [v200.3.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.8): fix(desknet): Don't try to save null values for metadata properties
- [v200.3.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.7): fix(includes): load drafts in preview
- [v200.3.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.6): fix(indexing): Correctly apply updatedAt filter during indexing of media library entries
- [v200.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.5): fix(desknet): get all desknet entries in search
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
- [v85.15.78](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.78): fix(menu): fix drag and drop handler - quick fix
- [v85.15.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.77): fix(draft): Use remote metadata source when updating metadata
- [v85.15.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.76): fix(vue): Fix default parameter of components that should fallback to an empty object
- [v85.15.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.75): fix: bump framework version november
- [v85.15.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.74): fix: detect media changes by asset.key
- [v85.15.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.73): fix(dashboards): Don't load document content in table dashboards
- [v85.15.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.72): fix(li-list-assignments): avoid flickering after list was selected
- [v85.15.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.71): fix(kanban board): reloads results correctly when result is less than page size
- [v85.15.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.70): fix(publish control): ensure button state changes on publish/draft creation
- [v85.15.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.69): fix: defaultParams from directive
- [v85.15.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.68): fix(drag-and-drop): Fix issue where drag-and-drop from the SVG starting in the clipboard would result in an error
- [v85.15.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.67): fix(occupations): Migrate to utc time queries on the billing screen
- [v85.15.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.66): fix(li-link-edit): Fix error logged in `triggerDigest()`
- [v85.15.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.65): fix(multilist): Prevent removed item from being re-added on sort
- [v85.15.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.64): fix(supportCrops): false checker
- [v85.15.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.63): fix(supportsCrop): checks for false value
- [v85.15.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.62): fix(dashboard-reload): persist current result list
- [v85.15.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.61): fix(autosave): Add scheduled save when autosave.stopped
- [v85.15.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.60): chore(images): fix image crop tests to test the correct thing
- [v85.15.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.59): fix(images): do not auto-update images for includes
- [v85.15.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.58): fix(deps): bump ua-parser-js from 0.7.32 to 0.7.33
- [v85.15.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.57): fix(focalPoint): avoid creating empty object as focal point
- [v85.15.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.56): fix: Replace jsonwebtoken with jose
- [v85.15.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.55): chore(soft lock): no helper function, better lock check
- [v85.15.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.54): fix(basePath): Always load webpack assets with the absolute path
- [v85.15.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.53): fix(security): Applies all security patches that do not have the patch in a breaking version
- [v85.15.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.52): fix: show configured style of li-document-reference in creation flow dialogs and includes
- [v85.15.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.51): fix(security): Upgrade `socket.io` to fix critical vulnerability
- [v85.15.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.50): fix(security): Upgrade `resolve-url-loader` to fix `loader-utils` critical vulnerability
- [v85.15.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.49): fix(upload): handle unsupported images in browser
- [v85.15.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.48): fix(document lists): Code removed
- [v85.15.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.47): fix(metadata): Wrap document references in default list
- [v85.15.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.46): chore(li-link-edit): tests added
- [v85.15.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.45): fix(namedCrops): Delete button works correctly
- [v85.15.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.44): fix: add system user for empty userid
- [v85.15.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.43): fix(metadata): Always pass focalPoint when initialising image cropper
- [v85.15.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.42): fix(deps): update dependency moment-timezone from 0.5.34 to 0.5.35 [security]
- [v85.15.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.41): fix(li-date-time-range-filter): prevent filter dropdown to be cut off
- [v85.15.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.40): fix(search): Fix load more button translation for list search
- [v85.15.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.39): fix(inlineListEditor): Only publishable when dirty
- [v85.15.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.38): fix(dateTimevalidity): Does not error without 'to' date
- [v85.15.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.37): fix(metadata): Change calculation for li-text input height
- [v85.15.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.36): fix: change to selected service on copy
- [v85.15.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.35): fix(document-lists): Update German translation for "Close"
- [v85.15.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.34): fix(loader): added and styled for translation card
- [v85.15.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.33): fix(count): For reference list
- [v85.15.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.32): fix(focalPoint): make sure crop coordinates are rounded when using focal point tool
- [v85.15.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.31): fix(li-push-messages): only show push button on published documents
- [v85.15.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.30): fix: escape error messages on login screen
- [v85.15.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.29): fix(table dashboard): don't show the empty state while loading a search result but the old result until the new one is ready
- [v85.15.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.28): fix(media library): allow li-document-reference additionalInfo besides li-reference
- [v85.15.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.27): fix(dashboards): Handle `published: false` in legacy dashboards
- [v85.15.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.26): chore(publish-control): fix E2E tests
- [v85.15.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.25): refactor: optimize code for internal vs external link handling
- [v85.15.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.24): fix: correctly compute minHeight with an incomplete config
- [v85.15.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.23): fix(list cards): Rocket
- [v85.15.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.22): fix: update framework v24.6.2
- [v85.15.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.21): fix(dashboards): task boards have no cts
- [v85.15.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.20): fix(toolbar): Restore action button group labels
- [v85.15.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.19): fix(conflictUI): Discard and Apply buttons correctly positioned
- [v85.15.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.18): fix: wrap article metadata view in closable panel
- [v85.15.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.17): fix: prevent refreshing table dashboard when loading more elements
- [v85.15.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.16): fix: prevent endless calling of finalDashboardConfig by moving it from a computed property to the creation lifecycle
- [v85.15.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.15): fix(metadata): ensure teaser card in li-document-references doesn't overflow
- [v85.15.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.14): fix(li-tree): reset search results properly
- [v85.15.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.13): fix(metadata): correct metadata.ui.service deprecation notice
- [v85.15.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.12): fix(issue-management): improve UX
- [v85.15.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.11): fix(resetFilterButton): Correctly styled
- [v85.15.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.10): fix(webpack): Remove deprecated file-loader and extract-loader
- [v85.15.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.9): fix(unpublishNow): Calls correct server endpoint
- [v85.15.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.8): fix(li-media-language): Remove all code references to `li-media-language`, metadata plugin no longer supported.
- [v85.15.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.7): chore(li-tree): implement code review feedback
- [v85.15.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.6): chore(li-tree): implement code review feedback
- [v85.15.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.5): fix(li-tree): do not remove link/reference when updatinglabel name
- [v85.15.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.4): fix(publish): Back returns to custom dashboard after create
- [v85.15.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v85.15.3): test(focal-point): add focal point in image metadata tests
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v??.?.?): text

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
