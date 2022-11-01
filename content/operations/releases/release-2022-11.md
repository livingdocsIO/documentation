---
type: release-notes
title: November 2022 Release
description: Release notes for release-2022-11
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2022-11/
  - /operations/releases/release-2022-11/release-2022-11/
---

{{< release-header
  title="November 2022 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=true
  branchHandle="release-2022-11"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk


**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* Release Newsletter Subscription: **TODO**

## System Requirements

### Suggested
|Name|Version|
|-|-|
|Node|18|
|NPM|8|
|Postgres|15|
|Elasticsearch<br/>OpenSearch|8.x<br/>v2.3.0|
|Redis|7|
|Livingdocs Server Docker Image|livingdocs/server-base:16|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16|
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

* [PR: Focal point selection for images](https://github.com/livingdocsIO/livingdocs-editor/pull/5916)

### Push Notification

TODO@Dominik: description

* [Documentation: TODO@Dominik](TODO@Dominik)
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5833)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4829)

### Public API - Open API Specification

The [Livingdocs Public API]({{< ref "/reference-docs/public-api" >}}) can be tested and consumed with an [OpenAPI v3 specification file](https://livingdocsio.github.io/openapi/livingdocs-openapi.json).

Thanks to the [OpenAPI specification](https://swagger.io/specification/), it's possible to quickly test the API using [Swagger UI](https://petstore.swagger.io/?url=https://livingdocsio.github.io/openapi/livingdocs-openapi.json). And import the full collection of existing API endpoints into Insomnia or Postman.

### Separation of Revision Metadata and System Metadata

TODO: how we want to announce that?

We introduce "System Metadata" for data which only needs to be stored per document and need no history like the existing Revision Metadata. Typically System Metadata are used for handling state on a document like proofreading, language settings, integration settings and a lot more.

To understand the possibilities and use cases better, you can read the [TODO: Documentation]().

* [TODO: Documentation]()
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

* [Documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-document-references)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4871)
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5873)

### Roles for Read and Write Instances

We introduce `roles` to define the type of server
- read (all server have read access by default)
- write (stores data)
- worker (executes jobs like indexing)

* [Documentation](https://docs.livingdocs.io/reference-docs/server-extensions/roles/)
* [PR: Roles](https://github.com/livingdocsIO/livingdocs-server/pull/4814)

### Reindexing CLI task improvements

Elasticsearch Indexing CLI (`livingdocs-server elasticsearch-index`) got some improvements:
- add `--ids=1,2,3,4` to index specific document id's
- add `--ids-file=file-with-ids.txt` to index specific document id's passed by a file

* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4837)

## Breaking Changes :fire:

### Migrate the database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
# migration 182-add-started_at-index-on-users_occupations.js
#   add index on user_occupations.started_at
# migration 183-add-user_id-index-on-users_occupations.js
#   add index on user_occupations.user_id
livingdocs-server migrate up
```

### Drop Elasticsearch v6 :fire:

[Drop support for Elasticsearch v6](https://github.com/livingdocsIO/livingdocs-server/pull/4907)

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

Remove any regular expressions from `pathPattern` configs and update them according to our [examples](https://docs.livingdocs.io/reference-docs/project-config/deliveries/#pathpattern).

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

* [Allow to import video and file Media Library Entries via public API - Documentation](https://docs.livingdocs.io/reference-docs/public-api/imports/media-library-entries/)
* [Allow to import video and file Media Library Entries via public API - PR](https://github.com/livingdocsIO/livingdocs-server/pull/4876)
* [Allow translated assets for a MediaLibraryEntries import - Documentation](https://docs.livingdocs.io/reference-docs/public-api/imports/media-library-entries/)
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
- [v200.3.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.10): fix(li-media-language): Remove support for `li-media-language`
- [v200.3.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.9): fix(desknet): Check value changed before publication status sync
- [v200.3.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.8): fix(desknet): Don't try to save null values for metadata properties
- [v200.3.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.7): fix(includes): load drafts in preview
- [v200.3.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.6): fix(indexing): Correctly apply updatedAt filter during indexing of media library entries
- [v200.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v200.3.5): fix(desknet): get all desknet entries in search
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
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
