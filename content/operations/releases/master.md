---
type: release-notes
title: November 2022 Release
description: Release notes for release-2022-11
excludeFromSearch: true
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

## PRs to Categorize
* [Prefill values after creating document using the new creation flow](https://github.com/livingdocsIO/livingdocs-editor/pull/5879)
* [German translation for comments toggles are no longer mixed up](https://github.com/livingdocsIO/livingdocs-editor/pull/5876)
* [Fix prepare-publication endless loop](https://github.com/livingdocsIO/livingdocs-editor/pull/5871)
* [Set timestamps for precision date to 12:00 UTC](https://github.com/livingdocsIO/livingdocs-editor/pull/5872)
* [fix(billing): show existing users in detail month view](https://github.com/livingdocsIO/livingdocs-editor/pull/5854)
* [fix(users): return correct user occupation](https://github.com/livingdocsIO/livingdocs-server/pull/4864)
* [Add roles write and worker for public-api endpoints, defined with instance configuration](https://github.com/livingdocsIO/livingdocs-server/pull/4814)
* [Add image fieldExtractor to planning-system project](https://github.com/livingdocsIO/livingdocs-server/pull/4872)
* [fix(metadata): fix vue type of reference label to not log error](https://github.com/livingdocsIO/livingdocs-editor/pull/5869)
* [Added expectedOrActualPublicationDate as a sort field for dashboards](https://github.com/livingdocsIO/livingdocs-server/pull/4828)
* [fix cleanup-metadata command which was throwing error](https://github.com/livingdocsIO/livingdocs-server/pull/4802)
* [Move validity icon to avoid duration overlap](https://github.com/livingdocsIO/livingdocs-editor/pull/5863)
* [Hide teaser format select when no transforms are available](https://github.com/livingdocsIO/livingdocs-editor/pull/5862)
* [fix(metadata): add strict ui schema for li-target-length](https://github.com/livingdocsIO/livingdocs-server/pull/4827)
* [fix/invitation mail](https://github.com/livingdocsIO/livingdocs-server/pull/4858)
* [Fix the toggling of li-component-link.vue with multiple links](https://github.com/livingdocsIO/livingdocs-editor/pull/5851)
* [fix(deps): update dependency date-fns from 2.29.2 to v2.29.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4861)
* [fix(preparePublish): Validation visible for angular plugins](https://github.com/livingdocsIO/livingdocs-editor/pull/5852)
* [Fix desknet config](https://github.com/livingdocsIO/livingdocs-server/pull/4865)
* [Do not mutate global metadata plugin objects](https://github.com/livingdocsIO/livingdocs-server/pull/4862)
* [The component Link icon now always remounts with a selection change](https://github.com/livingdocsIO/livingdocs-editor/pull/5848)
* [fix(desknet): Get default content from content type, not settings](https://github.com/livingdocsIO/livingdocs-server/pull/4853)
* [fix: add custom preview render example](https://github.com/livingdocsIO/livingdocs-server/pull/4840)
* [fix(deps): update dependency fast-glob from 3.2.11 to v3.2.12 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/4842)


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
|Node|16|
|NPM|8|
|Postgres|14|
|Elasticsearch|7|
|Redis|7|
|Livingdocs Server Docker Image|livingdocs/server-base:16|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

### Minimal
|Name|Version|
|-|-|
|Node|14|
|NPM|7|
|Postgres|12|
|Elasticsearch|6.x (Deprecated)|
|Redis|5 (Deprecated)|
|Livingdocs Server Docker Image|livingdocs/server-base:14.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:14.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

### Cut and paste Components

Similar to copy/paste one can now also cut/paste components.

* [PR: Cut and paste components](https://github.com/livingdocsIO/livingdocs-editor/pull/5824)

### Separation of Revision Metadata and System Metadata

We introduce "System Metadata" for data which only needs to be stored per document and need no history like the existing Revision Metadata. Typically System Metadata are used for handling state on a document like proofreading, language settings, integration settings and a lot more.

To understand the possibilities and use cases better, you can read the [TODO: Documentation]().

* [TODO: Documentation]()
* [PR: System Metadata Preparation](https://github.com/livingdocsIO/livingdocs-server/pull/4735)
* [PR: System Metadata Preparation II](https://github.com/livingdocsIO/livingdocs-server/pull/4778)
* [PR: System Metadata](https://github.com/livingdocsIO/livingdocs-server/pull/4807)

### Microsoft Teams Integration

TODO: Is this a highlight? Is the feature ready? Is the feature documented?

* [Microsoft Teams Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4408)


## Breaking Changes :fire:

### Migrate the database :fire:

TODO: add db migrations

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

### Separation of Revision Metadata and System Metadata

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

### Break metadata plugin li-desknet-integration | li-transcoding-state

* :fire: `ui.component` option for `li-transcoding-state` metadata plugin has been removed (it uses a default component)
* :fire: `ui.component` option for `li-desknet-integration` metadata plugin has been removed (it uses a default component)

References:
* [PR Server](https://github.com/livingdocsIO/livingdocs-server/pull/4782)
* [PR Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5813)


### Remove li-desknet-platforms metadata plugin

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

### Standardise the alt text and directive prefilling

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

## APIs :gift:

## Other Changes

### Security

### Design

### Features

* [Specific asset loading per Content-Type](https://github.com/livingdocsIO/livingdocs-server/pull/4791)
* [Limit alt text prefilling by component](https://github.com/livingdocsIO/livingdocs-editor/pull/5798)

### Improvements

* [Improve placement of text formatting toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/5790)
* [Log framework violations after initialization](https://github.com/livingdocsIO/livingdocs-editor/pull/5765)
* [Table Dashboards: provide a documentLoader to dashboard cards](https://github.com/livingdocsIO/livingdocs-editor/pull/5805)

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
