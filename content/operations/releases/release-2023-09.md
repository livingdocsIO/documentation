---
type: release-notes
title: September 2023 Release
description: Technical Release Notes for release-2023-09
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-09/
  - /operations/releases/release-2023-09/release-2023-09/
---

{{< release-header
  title="September 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-09"
>}}

## Intro

**Attention:** If you skipped one or more releases, please also check the technical release notes of the skipped releases.

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/livingdocs-release-september-2023).
To learn about the necessary actions to update Livingdocs to `release-2023-09`, read on.

## PRs to Categorize



## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
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
| Browser Support                | Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67 |

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
| Browser Support                | Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67 |


## Breaking Changes 🔥

### Migrate the Postgres Database 🔥 

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

### Drop support for AngularJS metadata plugins 🔥

Custom AngularJS metadata plugins are no longer supported. You should migrate to [core metadata plugins]({{< ref "/reference/document/metadata/plugins" >}}). If you cannot replace AngularJS plugins with core plugins: contact your Livingdocs customer manager before you write new plugins in Vue. You can find a [guide]({{< ref "/customising/angular-migration/metadata-plugins" >}}) to migrate your AngularJS metadata plugins to Vue.

This includes Angular Metadata UI components, Metadata Services, mixing custom UI with Livingdocs core metadata types and custom types with Livingdocs UI components.

* [Editor PR: Remove Angular Metadata Support](https://github.com/livingdocsIO/livingdocs-editor/pull/7043) 

### Drop support for Legacy Dashboards 🔥

Support for Legacy Dashboards has been removed in favor of the new Table Dashboards. If you are using a legacy dashboard, you should migrate to the new [Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}).

* [Editor PR: Remove Legacy Dashboards & `app.filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for `app.filters.pageList`, `app.filters.articleList`, `app.filters.inlineArticleList` and `app.filters.dataRecordList` 🔥

Support for `app.filters.pageList`, `app.filters.articleList`, `app.filters.inlineArticleList` and `app.filters.dataRecordList` in Editor configuration has been removed. Please use specific [Table Dashboards]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) instead.

* [Editor PR: Remove Legacy Dashboards & `app.filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for `app.filters.documentListList` 🔥

Configuration `app.filters.documentListList` has no effect anymore. Configure the filters for the document-list search dashboard in the project config at `editorSettings.documentLists.dashboard.displayFilters`.

* [Editor PR: Remove Legacy Dashboards & `app.filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for `app.documents.useLegacyDashboards` 🔥

Configuring `app.documents.useLegacyDashboards` has no effect anymore.
Support for Legacy Dashboards has been dropped. Livingdocs will automatically generate a Table Dashboard with default display filters if no dashboard is explicitly defined.

* [Editor PR: Remove Legacy Dashboards & `app.filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for `app.search.articleSearch.listItemComponent` 🔥

Configuring `app.search.articleSearch.listItemComponent` has no effect anymore. Please use [Table Dashboards]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) instead.

* [Editor PR: Remove Legacy Dashboards & `app.filters.*` support](https://github.com/livingdocsIO/livingdocs-editor/pull/7283)

### Drop support for `legacyFilters` in `searchManager.searchPublications()` 🔥

Customers calling `searchManager.searchPublications()` directly, and providing a `legacyFilters` property in the first argument, should update to the new `filters` in the [new Search DSL]({{< ref "/reference/public-api/publications/search" >}}).

* [Server PR: Remove support for `legacyFilters` property in `searchManager.searchPublications()](https://github.com/livingdocsIO/livingdocs-server/pull/6002)

### Drop support for `project.contentType.publicationIndex.scheduledPublishing` 🔥

Please remove the `project.contentType.publicationIndex.scheduledPublishing` property from your project config and configure scheduled publishing using Publish Control as described [here]({{< ref "/guides/editor/publish-control/scheduled-publishing" >}}).

* [Server PR: Remove support for `project.contentType.publicationIndex.scheduledPublishing`](https://github.com/livingdocsIO/livingdocs-server/pull/6003)

### Drop support for `propertyConfig.config.behaveAsLiImage` 🔥

Custom metadata plugins cannot use `propertyConfig.config.behaveAsLiImage` to take advantage of upstream `li-image` plugin features. Please use type `li-image` instead.

* [Server PR: Replace `teaserImage` type with `li-image` due `behaveAsLiImage` removal](https://github.com/livingdocsIO/livingdocs-server/pull/6053)

### Structure changes in references extracted from `li-document-references`

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
`node @livingdocs/server/db/manual-migrations/006-generate-references.js`

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
```
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
```
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

Check the [Ticker Feature documentation]() for more details and limitations.

### Anchor Linking

When selecting a document in the inline link edit tool or in `li-tree`, it is now possible to also select a specific component within that document. The directiveId (= componentId:directiveName) will then be included in the URL hash part.

To enable anchor linking for a project, at least one component with a doc-editable and `anchor: true` must be defined within the project config. For example:

```
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

We have added the possibility to configure display filters for the following metadata plugins:
- `li-document-reference` with `style: minimal`
- `li-document-references` with `style: minimal`
- `li-enum`
- `li-string-list` with `dataProvider`
- `li-text` with `dataProvider`

We have added the possibility to configure base filters for the following metadata plugins:
- `li-desknet-integration`
- `li-retresco`
- `li-imatrics-nlp-tags`

For these filters to take effect you must index the metadata properties in Elasticsearch/Opensearch. To do so you have to define `index: true` in the metadata plugin config. See [metatadata plugins]({{< ref "/reference/document/metadata/plugins/#indexing" >}}) for more information. Then, reindex the document using:

```sh
npx livingdocs-server elasticsearch-index --handle=li-documents -y
```

For more information see [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter#named-filters" >}})

### Multilanguage includes in French and Italian

Livingdocs UI has been translated to more languages. We now support French and Italian on top of English and German. A new language switcher has been added to the user profile for a personalized experience. By default, the language defined in the Editor configuration `app.locale` is used.

Administrators can define which languages are available in the language dropdown by configuring `app.availableLocales` in the Editor configuration. Supported languages are `en`, `de`, `fr` and `it`. The language switch stays hidden if `app.availableLocales` is `undefined` or `[]`.

```js
app: {
  locale: 'en',
  availableLocales: ['en', 'de', 'fr', 'it']
}
```

### Publish Control UX improvements

We have improved Publish Control UI to make it easier to use. No configuration changes are required from developers perspective to take advange of the improvements. The main improvements are:
- The visual feedback for Metadata errors blocking a publish is improved
- Unpublish Buttons use red text color now to be more clear about the potentially damaging effects
- The confirm step presented when a publish is scheduled and the user clicks "Publish Now" has more visual clarity now

### Cross Project Content Sharing



## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-36665](https://github.com/advisories/GHSA-h755-8qp9-cq85) patched in `protobufjs` v7.2.4
* [CVE-2022-25883](https://github.com/advisories/GHSA-c2qf-rxjj-qqgw) patched in `semver` v5.7.2, v6.3.1, v7.5.4
* [CVE-2023-26115](https://github.com/advisories/GHSA-j8xg-fqg3-53r7) patched in `word-wrap` v1.2.4

We are aware of the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Server.

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2022-26136](https://github.com/advisories/GHSA-72xf-g2v4-qvf3) patched in `tough-cookie` v4.1.3
* [CVE-2022-25883](https://github.com/advisories/GHSA-c2qf-rxjj-qqgw) patched in `semver` v5.7.2, v6.3.1, v7.5.4

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Editor because `rangy` module is scoped in the `livingdocs-framework` and not exposed to the users.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v237.2.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.9): fix(references): Update after running hooks
- [v237.2.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.8): fix(includes): Handle errors in custom getDocumentIds functions
- [v237.2.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.7): fix(public-api): Remove non-functional renderOptions.decodeHtml in composition api
- [v237.2.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v237.2.6): fix(documents): Truncate title on creation

### Livingdocs Editor Patches
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
