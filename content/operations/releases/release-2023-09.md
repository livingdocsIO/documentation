---
type: release-notes
title: September 2023 Release
description: Technical Release Notes for release-2023-09
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-09/release-2023-09/
---

{{< release-header
  title="September 2023 Release"
  upcoming=false
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-09"
>}}

## Intro

**Attention:** If you skipped one or more releases, please also check the technical release notes of the skipped releases.

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-september-2023).
To learn about the necessary actions to update Livingdocs to `release-2023-09`, read on.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/kXglSR22wezHhzBLJNO0SNtvfX-Z4-w8QY25z0ykD8gbNZRh_L-DjKW7rIExpQUe.9DiSYOSYOtyjSlIK) | Passcode: 8e+4+k%B
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/13lebRD_R1KzV-fMn2b7DA7kdLAAD5bvfL8rHOcIA04Q/)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/fiLSbWO-I1eMt-PTjIO6g2RpYZUdhCxxXoVCmNMPkuOkmMy4Ct7oh6MNXoOZdro5.gdBbbsBXhdYnPqTZ) | Passcode: #yUHR362
* [Dev Webinar Slides](https://docs.google.com/presentation/d/1KfJmsHcUHrM-GLNV2R7Kp2BfSugtRk3VIHdgW3WxjIc/edit?usp=sharing)
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 20                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 15                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:20                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:20                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 18                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 12                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |


## Breaking Changes 🔥

### Migrate the Postgres Database 🔥

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 193-increase-document-title-length.js
#   increases the length of the document title to 1000 characters
livingdocs-server migrate up
```

### Drop support for AngularJS metadata plugins 🔥

Custom AngularJS metadata plugins are no longer supported. You should migrate to [core metadata plugins]({{< ref "/reference/document/metadata/plugins" >}}). If you cannot replace AngularJS plugins with core plugins: contact your Livingdocs customer manager before you write new plugins in Vue. You can find a [guide]({{< ref "/customising/angular-migration/metadata-plugins" >}}) to migrate your AngularJS metadata plugins to Vue.

This includes Angular Metadata UI components, Metadata Services, mixing custom UI with Livingdocs core metadata types and custom types with Livingdocs UI components.

* [Editor PR: Remove Angular Metadata Support](https://github.com/livingdocsIO/livingdocs-editor/pull/7043)

### Drop support for Legacy Dashboards 🔥

Support for Legacy Dashboards has been removed in favor of the new Table Dashboards. If you are using a legacy dashboard, you should migrate to the new [Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}).

* [Editor PR: Remove Legacy Dashboards & `filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for most filters in Editor Config 🔥

Support for 4 Editor Config `filters.*` has been removed. Please use specific [Table Dashboards]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) instead.
- `filters.articleList`
- `filters.dataRecordList`
- `filters.inlineArticleList`
- `filters.pageList`

* [Editor PR: Remove Legacy Dashboards & `filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for Editor Config filters.documentListList 🔥

The Editor Config `filters.documentListList` has no effect anymore. Configure the filters for the document-list search dashboard in the Project Config at `editorSettings.documentLists.dashboard.displayFilters`.

* [Editor PR: Remove Legacy Dashboards & `filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for Editor Config documents.useLegacyDashboards 🔥

Editor Config `documents.useLegacyDashboards` has no effect anymore.
Support for Legacy Dashboards has been dropped. Livingdocs will automatically generate a Table Dashboard with default display filters if no dashboard is explicitly defined.

* [Editor PR: Remove Legacy Dashboards & `filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for Editor Config search.articleSearch.listItemComponent 🔥

Editor Config `search.articleSearch.listItemComponent` has no effect anymore. Please use [Table Dashboards]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) instead.

* [Editor PR: Remove Legacy Dashboards & `filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for `legacyFilters` in `searchManager.searchPublications()` 🔥

Customers calling `searchManager.searchPublications()` directly, and providing a `legacyFilters` property in the first argument, should update to the new `filters` in the [new Search DSL]({{< ref "/reference/public-api/publications/search" >}}).

* [Server PR: Remove support for `legacyFilters` property in `searchManager.searchPublications()](https://github.com/livingdocsIO/livingdocs-server/pull/6002)

### Drop support for `project.contentType.publicationIndex.scheduledPublishing` 🔥

Please remove the `project.contentType.publicationIndex.scheduledPublishing` property from your project config and configure scheduled publishing using Publish Control as described [here]({{< ref "/guides/editor/publish-control/scheduled-publishing" >}}).

* [Server PR: Remove support for `project.contentType.publicationIndex.scheduledPublishing`](https://github.com/livingdocsIO/livingdocs-server/pull/6003)

### Drop support for `propertyConfig.config.behaveAsLiImage` 🔥

Custom metadata plugins cannot use `propertyConfig.config.behaveAsLiImage` to take advantage of upstream `li-image` plugin features. Please use type `li-image` instead.

* [Server PR: Replace `teaserImage` type with `li-image` due `behaveAsLiImage` removal](https://github.com/livingdocsIO/livingdocs-server/pull/6053)

### Structure changes in references extracted from `li-document-references` 🔥

We have changed the structure of references extracted from metadata properties with the type `li-document-references`.
Every document member within the stored value of the metadata property is now listed separately as reference.

Before:
```js
references: [{
  type: 'documents',
  ids: ['1', '2'],
  location: 'metadata',
  propertyName: 'referenceListTest'
}]
```

Now:
```js
references: [{
  type: 'document',
  id: '1',
  location: 'metadata',
  propertyName: 'referenceListTest'
},
{
  type: 'document',
  id: '2',
  location: 'metadata',
  propertyName: 'referenceListTest'
}]
```

This change only affects newly updated documents. Existing documents will keep the old structure.
To optionally update existing documents, run the following command:
`node node_modules/@livingdocs/server/db/manual-migrations/006-generate-references.js`

The manual migration can be executed any time after the deployment.

Affected API endpoints:
- [`GET api/beta/documents/:documentId/latestPublication`]({{< ref "/reference/public-api/publications/latest-publication-beta" >}})
- [`GET api/beta/documents/latestPublications`]({{< ref "/reference/public-api/publications/latest-publications-beta" >}})
- [`GET api/v1/documents/:documentId/incomingDocumentReferences`]({{< ref "/reference/public-api/publications/references#get-incoming-publication-references-for-a-document" >}})
- [`GET api/v1/documents/:documentId/incomingMediaReferences`]({{< ref "/reference/public-api/publications/references#get-incoming-media-references-for-a-document" >}})

* [Server PR: Cross Project Content Sharing](https://github.com/livingdocsIO/livingdocs-server/pull/6035)

### Drop backwards compatibility mode for `li-text` 🔥

The backwards compatibility mode for `li-text` for `ui.component` and `ui.config.rows` has been removed. If you still have `ui.component` or `ui.config.rows` in the metadata config for a `li-text` property, you have to move to `config.allowNewlines` and length Editor configurations: `config.minLength`, `config.maxLength`, `config.recommendedMinLength`, `config.recommendedMaxLength`.

* [Editor PR: Remove backwards compatibility mode for `li-text`](https://github.com/livingdocsIO/livingdocs-editor/pull/7249)

### Drop support for `li-media-language` metadata plugin 🔥

Metadata plugin type `li-media-language` got replaced with `li-metadata-translations`. Upgrade path using `li-metadata-translations` instead which supports the same config as `li-media-language`.

* [Server PR: Remove `li-media-language` metadata plugin](https://github.com/livingdocsIO/livingdocs-server/pull/6054)

### Preview API 🔥

The previewApi (`li-preview`) feature support has been removed. Use [`registerPreviewFunction`]({{< ref "/customising/server-configuration/#custom-previews" >}}) instead.

* [Server PR: Remove `li-preview` feature](https://github.com/livingdocsIO/livingdocs-server/pull/6008)

## Deprecations

### `document.customPublicationDateField` is deprecated

Using Editor config `document.customPublicationDateField` is deprecated and will be removed with `release-2023-11`. Please migrate to `contentType.publishControl.publishSchedule`.

### `li-reference` metadata plugin is deprecated

Metadata plugin type `li-reference` has been deprecated. Please replace it with `li-document-reference`. No data migration is required, but you will need to remove `referenceType` from the metadata plugin config. If you encounter any other schema errors please check the documentation for the [`li-document-reference`]({{< ref "/reference/document/metadata/plugins/li-document-reference" >}}) plugin for further details.

* [Reference plugin feature parity](https://github.com/livingdocsIO/livingdocs-server/pull/6030)

### `li-reference-list` metadata plugin is deprecated

Metadata plugin type `li-reference-list` has been deprecated. Please replace it with `li-document-references`. No data migration is required, but you will need to remove `referenceType` from the metadata plugin config. If you encounter any other schema errors please check the documentation for the [`li-document-references`]({{< ref "/reference/document/metadata/plugins/li-document-references" >}}) plugin for further details.

* [Reference plugin feature parity](https://github.com/livingdocsIO/livingdocs-server/pull/6030)

### `storageFormat.label` property within the `li-language` metadata plugin is deprecated

The `storageFormat.label` property within the `li-language` metadata plugin is deprecated and will be removed in `release-2024-01`. There is no replacement for this property.

### `uiComponent` property passed to `liServer.registerChannelConfigProperty` is deprecated

`uiComponent` property used when registering Channel with `liServer.registerChannelConfigProperty` is deprecated and will be removed in `release-2024-01`. This property will be removed as part of the migration to Vue.js, therefore no replacement is provided.

## Features

### Ticker Tool

Livingdocs now offers a tool to create ticker articles with ease. This feature uses a contentType as Ticker Host document, and another contentType as the Ticker Entry. The Ticker Host is used to create a new ticker article, and the Ticker Entry is used to create new entries in the ticker.

An example Ticker Host contentType configuration:
```js
handle: 'tickerHost',
documentType: 'article',
info: {
  label: 'Ticker'
},

ticker: {
  // The tickerEntry contentType
  entryContentType: 'tickerEntry'
},

// ...the rest of your content type configuration
// like metadata, components, publishControl etc.
```
An example Ticker Entry contentType configuration:
```js
handle: 'tickerEntry',

metadata: [
  {
    handle: 'tickerHost',
    type: 'li-ticker-host-reference'
  }
  // ...possibly more metadata configs
]

// ...the rest of your content type configuration
// like metadata, components, publishControl etc.
```
Notice the Ticker Host contentType has a `ticker` property, which defines the Ticker Entry contentType. The Ticker Entry contentType has a metadata property `tickerHost`, which defines the reference to the ticker host. This reference is set on creation of each ticker entry.

### Anchor Linking

When selecting a document in the inline link edit tool or in `li-tree`, it is now possible to also select a specific component within that document. The directiveId (= componentId:directiveName) will then be included in the URL hash part.

To enable anchor linking for a project, at least one component with a doc-editable and `anchor: true` must be defined within the project config. For example:

```js
  name: 'title',
  label: 'Title',
  directives: [{
    type: 'editable',
    name: 'title',
    anchor: true
  }],
  html: dedent`
    <h2 doc-editable="title">
      Title
    </h2>
  `
```

### Display and Base Filters

In the July 2023 release, we introduced in the possibility for users to create configurable filters. With this release, we have added filter support for more core metadata plugins.

We have added the possibility to configure [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter#metadata-filters" >}}) for the following metadata plugins:
- `li-document-reference` with `style: minimal`
- `li-document-references` with `style: minimal`
- `li-enum`
- `li-string-list` with `dataProvider`
- `li-text` with `dataProvider`

We have added the possibility to configure base filters for the following metadata plugins:
- `li-desknet-integration`
- `li-retresco`
- `li-imatrics-nlp-tags`

For these filters to take effect you must index the metadata properties in Elasticsearch/Opensearch. To do so you have to define `index: true` in the metadata plugin config. See [metadata plugins]({{< ref "/reference/document/metadata/#configuration" >}}) for more information. Then, reindex the document using:

```sh
npx livingdocs-server elasticsearch-index --handle=li-documents -y
```

### Language Switcher and Additional Support for French and Italian

Livingdocs UI has been translated to more UI languages. We now support French and Italian on top of English and German. A new language switcher has been added to the user profile for a personalized experience. By default, the language defined in the Editor configuration `app.locale` is used.

Administrators can define which languages are available in the language dropdown by configuring `app.availableLocales` in the Editor configuration. [Multi-Language UI]({{< ref "/guides/editor/multi-language-ui" >}}) supported languages are `en`, `de`, `fr` and `it`. The language switch stays hidden if `app.availableLocales` is `undefined` or `[]`.

```js
app: {
  locale: 'en', // optional, language to show UI in - defaults to 'en'
  availableLocales: ['en', 'de', 'fr', 'it'] // optional - languages available in UI language switcher
}
```

### Cross Project Content Sharing

Cross Project Content Sharing enables users to link documents of another project.
The external project can either be on the same or a different livingdocs cluster.

Please also see the [Cross Project Content Sharing Guide]({{< ref "/guides/integrations/cross-project-content-sharing">}}) where the setup steps are described in detail.

There are some limitations to this feature:
* In case documents of another Livingdocs instance should get embedded, the same Elasticsearch instance must be configured on the remote Livingdocs Server.
* The content type of the external document that should get embeded must be of a content type present in the destination project configuration.
* It only works for table dashboards that are shown in the metadata property context. Therefore you'll need to configure `useDashboard` on either `li-document-reference`, `li-document-references` or `li-tree` metadata plugins.

To enable this feature you can configure your current server cluster with `clusterId` in the server configuration and the `externalSystems: []` in the project configuration, see code snippets below. You can generate `livingdocsServerToken` in the Livingdocs Server Project Admin page in the Editor under [Api Clients]({{< ref "/reference/public-api/get-started#authorization" >}}) you can create a new token with `Enable cross-project content sharing` checked.

Server configuration:
```js
{
  clusterId: 'my-cluster-id', // must be unique per database / livingdocs cluster
}
```

Keep attention, if you change this config on an already-existing server, you will need to reindex document on Elasticsearch as document ids get prefixed using the cluster id.
```sh
npx livingdocs-server elasticsearch-index --handle=li-documents --recreate -y
npx livingdocs-server elasticsearch-index --handle=li-publications --recreate -y
```

Include `externalSystems` in the project configuration that fetches documents from other projects:
```js
externalSystems: [
  {
    handle: 'myExternalSystem',
    label: 'My System',
    url: {
      origin: 'https://example.com',
      pathPattern: '/{{metadata.myExternalSystemId}}'
    }
  },
  {
    type: 'livingdocs',
    handle: 'externalProject',
    label: 'External Project',
    livingdocsServerUrl: 'http://example.com:9090',
    livingdocsServerToken: {
      $secretRef: {name: 'crossProjectTokenOnRemoteProject'}
    }
  }
],
```

Then create a dashboard that includes the `crossProjectContentSearch` filter.
Use that dashboard on one of the metadata properties that should support embedding external documents.
```js
displayFilters: [
  {filterName: 'crossProjectContentSearch', config: {filterLabel: 'Content Hubs'}}
]
```

The dashboard must be referenced in a metadata property configuration.
```js
{
  handle: 'relatedDocuments',
  type: 'li-document-references',
  config: {documentType: 'article'},
  ui: {
    label: {en: 'Related articles', de: 'Verwandte Artikel'},
    config: {
      // reference the dashboard here
      useDashboard: 'articlesWithExternalDocuments',
      sortable: true,
      style: 'default'
    }
  }
}
```

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-36665](https://github.com/advisories/GHSA-h755-8qp9-cq85) patched in `protobufjs` v7.2.4
* [CVE-2022-25883](https://github.com/advisories/GHSA-c2qf-rxjj-qqgw) patched in `semver` v5.7.2, v6.3.1, v7.5.4
* [CVE-2023-26115](https://github.com/advisories/GHSA-j8xg-fqg3-53r7) patched in `word-wrap` v1.2.4
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.5
* [CVE-2023-45857](https://github.com/advisories/GHSA-wf5p-g6vw-rhxx) patched in `axios` v1.6.5

We are aware of the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Server.

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2022-26136](https://github.com/advisories/GHSA-72xf-g2v4-qvf3) patched in `tough-cookie` v4.1.3
* [CVE-2022-25883](https://github.com/advisories/GHSA-c2qf-rxjj-qqgw) patched in `semver` v5.7.2, v6.3.1, v7.5.4
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.5
* [CVE-2023-51701](https://github.com/advisories/GHSA-v2v2-hph8-q5xp) patched in `@fastify/reply-from` v9.7.0
* [CVE-2023-45857](https://github.com/advisories/GHSA-wf5p-g6vw-rhxx) patched in `axios` v1.6.5
* [CVE-2023-46234](https://github.com/advisories/GHSA-x9w5-v3q2-3rhw) patched in `browserify-sign` v4.2.2

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Editor because `rangy` module is scoped in the `livingdocs-framework` and not exposed to the users.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v237.2.50](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.50): fix(queue): Properly await in lib/async-queue
- [v237.2.49](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.49): fix(deps): update dependency @livingdocs/framework from 26.0.9 to v26.0.10
- [v237.2.48](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.48): fix(lists): Define limit as option on `documentListModel.getInbox()`, as it is possible to retrieve more than 1010 leading to `Too many results` error
- [v237.2.47](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.47): fix(security): Patch vulnerabilities `CVE-2024-24758` on `undici` and `GHSA-9h6g-pr28-7cqp` on `nodemailer`
- [v237.2.46](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.46): chore(desknet): Add tests for token refresh
- [v237.2.45](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.45): chore(example-server): use `li-push-messages` handler with longer execution time
- [v237.2.44](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.44): fix(OIDC): Skip logging an error when thrown error is `nonce expired` during OIDC flow
- [v237.2.43](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.43): fix(image-processing): Fix extracting metadata from large image headers
- [v237.2.42](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.42): fix(mediaLibrary): Map the state attribute on media library entries based on the archived flag
- [v237.2.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.41): fix(openid-connect): Remove log when nonce expires in Redis
- [v237.2.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.40): fix(security): Patch vulnerabilities `CVE-2023-26159` on `follow-redirects` and `CVE-2023-45857` on `axios`
- [v237.2.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.39): fix(composition-api): Make sure we never load errors or null values into preloaded values
- [v237.2.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.38): fix(notifications): Use link which opens the task side panel
- [v237.2.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.37): fix(deps): Update dependency @livingdocs/framework from 26.0.7 to 26.0.9
- [v237.2.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.36): fix(notifications): Use project defaultLocale for labels in task emails
- [v237.2.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.35): fix(media-library): Use extracted mime type for file uploads
- [v237.2.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.34): fix(history): Upgrade @livingdocs/framework to fix include history
- [v237.2.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.33): fix(media-library): Fix sort support in media library
- [v237.2.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.32): fix(deps): Upgrade metalman-schema to fix response body transformation
- [v237.2.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.31): fix(image): Fix matcher to detect SVG images that include ` ` or `\n`
- [v237.2.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.30): fix(project): Allow handles that are 2 characters long and improve validation error message
- [v237.2.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.29): fix(http): agent updated to only support https
- [v237.2.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.28): fix(framework): upgrade to fix html parsing and firefox issues
- [v237.2.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.27): fix: wrong method call when calling importUserCache
- [v237.2.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.26): fix(exif-extraction): Normalize the `Date Created` exif field to a full iso timestamp supported everywhere
- [v237.2.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.25): fix(image-processing): Detect SVG uploads
- [v237.2.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.24): chore(import): Mark unused import configs as deprecated
- [v237.2.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.23): chore(includes): Reduce loops when assigning preloaded li-tree values
- [v237.2.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.22): fix(http): Define longer `requestTimeout` on `liServer.httpServer` to avoid requests being cancelled by the socket timeout
- [v237.2.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.21): fix(twitter oembed): supports x.com urls
- [v237.2.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.20): fix(indexing): Increase events to fetch if no group existed
- [v237.2.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.19): fix(comyan): encode title when reporting usage
- [v237.2.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.18): fix(external ID): readoly config allowed
- [v237.2.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.17): fix(security): Update `get-func-name` to version `v237.2.50` to patch CVE-2023-43646
- [v237.2.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.16): chore(example-server): Map additional metadata in copy instructions
- [v237.2.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.15): fix(security): Update `sharp` to version `v237.2.50` to patch CVE-2023-4863
- [v237.2.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.14): fix(includes): allow onboarding platform
- [v237.2.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.13): fix(includes): Allow li-document-reference with minimal style
- [v237.2.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.12): fix(search): Always filter media library entries by cluster id
- [v237.2.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.11): fix(routing): Remove slug limitation of 30 characters
- [v237.2.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.10): test(cross-project): Add a test for the /projects/cross-project-config endpoint
- [v237.2.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.9): fix(references): Update after running hooks
- [v237.2.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.8): fix(includes): Handle errors in custom getDocumentIds functions
- [v237.2.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.7): fix(public-api): Remove non-functional renderOptions.decodeHtml in composition api
- [v237.2.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.6): fix(documents): Truncate title on creation

### Livingdocs Editor Patches
- [v100.8.113](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.113): fix(editor): Prefill existing teasers when dropped from side panel
- [v100.8.112](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.112): fix(ticker): Reassign shallowReactive attributes to trigger reactivity
- [v100.8.111](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.111): fix: Blur components when exiting the edit mode
- [v100.8.110](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.110): fix(workspace): Add cleanup fn to leaveWindow event handler response
- [v100.8.109](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.109): fix(deps): update dependency @livingdocs/framework from 26.0.9 to v26.0.10
- [v100.8.108](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.108): chore(collaboration): Simplify collaboration bar to only use one event listener
- [v100.8.107](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.107): fix(drag-and-drop): Always pass the mediaLibraryEntry.asset.duration when dropping a video media library entry on directives
- [v100.8.106](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.106): fix(images): Fix named crops for imported images that don't have an imageService configured
- [v100.8.105](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.105): chore(vue-components): Use correct lifecycle method in li-angular-component
- [v100.8.104](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.104): fix(url): Allow URLs without a TLD
- [v100.8.103](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.103): fix(security): Patch vulnerability `CVE-2024-24758` on `undici`
- [v100.8.102](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.102): fix(document-preview): Post to wildcard if the origin uses a sandbox without `allow-same-site`. Without it postMessage doesn't work at all.
- [v100.8.101](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.101): chore: Remove TODO, leave the comment about workspace initialization
- [v100.8.100](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.100): fix(li-table): Correctly compute whether a table cell is in the overflow
- [v100.8.99](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.99): fix(toolbar): Hide metadata overlay when opening tasks sidebar
- [v100.8.98](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.98): fix(publish-control): Clear content validation errors on publish
- [v100.8.97](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.97): fix(li-image): Do not allow picking images from a document that are not present in the media library
- [v100.8.96](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.96): fix: Use input or change events instead of keyup
- [v100.8.95](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.95): fix(popover): save on removing specialproviders and make custom elements work on vue popover
- [v100.8.94](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.94): fix(filters): Reposition filter popups when selecting values
- [v100.8.93](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.93): fix(li-image): actually reload document images when content changed
- [v100.8.92](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.92): refactor: implement review comments
- [v100.8.91](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.91): fix(publish-control-delivery): Show delivery state when opening publish control panel
- [v100.8.90](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.90): fix(canvas): Reassign state.areas to trigger reactivity
- [v100.8.89](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.89): test(links): Add cypress tests
- [v100.8.88](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.88): fix(li-link-edit): apply correct default attributes for internal urls
- [v100.8.87](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.87): fix(deps): Update dependency @livingdocs/framework from 26.0.8 to 26.0.9
- [v100.8.86](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.86): chore(editor): Remove online listener from autosave on unload
- [v100.8.85](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.85): fix(tasks): Add metadataProperty.config.label fallback
- [v100.8.84](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.84): fix(ticker): Save publication date on first attempt
- [v100.8.83](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.83): fix(tasks): Only show remove action when the task has a value
- [v100.8.82](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.82): fix(editor): Prefill teasers when dropped from side panel
- [v100.8.81](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.81): fix: support component drag&drop in safari 17.2
- [v100.8.80](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.80): fix(li-link-edit): extend typeahead search baseFilters from useDashboard
- [v100.8.79](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.79): fix(ticker): Stop editing ticker before deleting
- [v100.8.78](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.78): fix(delivery-builds): start listening to realtime updates after publish
- [v100.8.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.77): fix(editor): close publish control panel when user clicks into content to make room for properties panel
- [v100.8.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.76): chore: fix cypress test for video includes
- [v100.8.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.75): fix(history): Upgrade @livingdocs/framework to fix include history
- [v100.8.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.74): fix(tasks): ensure tasks panel and toolbar button updates when a task is updated by another user
- [v100.8.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.73): chore(collaboration): Set CollaborationUser values on creation
- [v100.8.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.72): fix(admin): Fix api client url after creating a project in the admin UI
- [v100.8.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.71): fix(li-link-edit): allow to reopen and edit links with invalid href
- [v100.8.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.70): fix(url-util): Take subdomains into account when validating URL TLD
- [v100.8.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.69): fix(framework): revert htmlparser2 and editable.js upgrade
- [v100.8.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.68): fix(media-library): Fix error when opening media side panel in editor
- [v100.8.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.67): fix(image-crop): Prevent focal point button overlapping content
- [v100.8.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.66): fix(ticker): Support rendering includes in multiple ticker entries
- [v100.8.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.65): fix: don't prevent click events in li-link-edit
- [v100.8.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.64): fix(search): Load dynamic metadata with inline document search
- [v100.8.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.63): fix(tasks): Use correct steps within task value
- [v100.8.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.62): fix(media-library): Don't show hidden form field on multi-asset upload
- [v100.8.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.61): fix(comments): safeguard comment highlighting if comments disabled
- [v100.8.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.60): fix(security): Update `get-func-name` to version `v100.8.113` to patch CVE-2023-43646
- [v100.8.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.59): fix(comments): create comment after visiting history
- [v100.8.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.58): fix(lists): Only re-render document list when it changes
- [v100.8.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.57): fix(publish control): remove content validation errors when user edits the directive
- [v100.8.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.56): fix(publish control): make sure nzz special behavior for publish control works again
- [v100.8.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.55): fix(print mode): make publish control work with print mode again
- [v100.8.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.54): fix(planning boards): always use correct dates for weekly interval stepper
- [v100.8.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.53): fix(metadata): show error inputs with red border
- [v100.8.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.52): fix(li-tree): disable document preview link if no url buildable
- [v100.8.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.51): fix: proper handling of tel: and mailto: urls
- [v100.8.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.50): test: implement code review feedback
- [v100.8.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.49): fix(realtime): Don't display connection error when window is not active
- [v100.8.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.48): fix(tasks): open tasks panel when article is opened from task board
- [v100.8.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.47): chore(metadata): Standardise li-document-reference(s) templates
- [v100.8.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.46): fix(video transcoding): Visual
- [v100.8.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.45): fix(locales): add fallback default locale
- [v100.8.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.44): fix(metadata): Bundle Separator
- [v100.8.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.43): chore(tasks): Replace moment with date-fns in task deadline API
- [v100.8.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.42): fix(li-link-edit): null-safe baseFilter access
- [v100.8.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.41): fix(schema form): Box model
- [v100.8.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.40): chore(display-filters): Warn when properties have different configs
- [v100.8.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.39): fix(server-admin): Use teaser style for author selection
- [v100.8.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.38): fix: update avatar when changing user name
- [v100.8.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.37): code(comments): always use the context from editable data
- [v100.8.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.36): chore(realtime): Remove unused listener assignment to `this`
- [v100.8.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.35): fix(focalPoint): fix reactivity issues for preview crops
- [v100.8.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.34): fix(axios): Log out the editor upon 401 errors in axios
- [v100.8.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.33): fix(pills): print layout has translate hack
- [v100.8.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.32): fix(iframe directive): Icon check
- [v100.8.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.31): fix(cross-project): Include externalSystem in table dashboard row identifier
- [v100.8.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.30): style(li-document-references): Use LiResourceDocument error states instead of inline ones
- [v100.8.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.29): fix(tasks): Reset all state when removing a task
- [v100.8.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.28): fix(li-push-messages): make all reachable through scrolling
- [v100.8.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.27): fix(angular-vue-wrapper): Destroy components when detatched from the DOM
- [v100.8.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.26): fix(image-services): Always pass `originalDimensions` to `imageService.getUrl` function.
- [v100.8.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.25): chore: Use animationFrame.digest instead of setTimeout
- [v100.8.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.24): refactor(ticker): remove event handler again in li-ticker-entry
- [v100.8.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.23): fix(ticker): Sidepanel and pagination
- [v100.8.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.22): fix(dashboard): Clone media library dashboard configs to prevent mutations against original config objects
- [v100.8.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.21): fix(numberdots): Rendering
- [v100.8.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.20): fix(editor): Allow scrolling in conflict preview
- [v100.8.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.19): fix(team filter): Element order
- [v100.8.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.18): fix(translations): Task labels on history side panel and home screen
- [v100.8.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.17): fix(editor): Correctly position apply and discard buttons in conflict UI
- [v100.8.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.16): fix(cross-project): Support multi selection label fro crossProjectContentSearch filter
- [v100.8.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.15): chore: Update renovate config
- [v100.8.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.14): fix(li-link-edit): apply base filters in quick search
- [v100.8.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.13): fix(workspace): show properties panel after history mode
- [v100.8.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.12): chore(cypress): fix flaky media-library tests
- [v100.8.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.11): fix(component lock): Restored look
- [v100.8.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.10): chore(li-comment): fix eslint errors and some more formatting
- [v100.8.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.9): improvement(li ticker): Empty state and responsiveness
- [v100.8.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.8): chore: Update chrome version in cypress
- [v100.8.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.7): chore(metadata): Add tests for li-image and li-poster-image
- [v100.8.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.6): chore(metadata): Compute whether li-image is in document context
- [v100.8.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.5): fix(comments): Allow avatar size to be string or number for mentions
- [v100.8.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.4): fix(editableCount): updated name
- [v100.8.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.3): fix(viewEvents): make blur editable fire before blur component
- [v100.8.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.2): fix: pass image original dimensions for crop preview
- [v100.8.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v100.8.1): fix(release-2023-09): Update framework to 26.0.1 (release-2023-09 tag)


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
