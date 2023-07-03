---
type: release-notes
title: July 2023 Release
description: Technical Release Notes for release-2023-07
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-07/
  - /operations/releases/release-2023-07/release-2023-07/
---

{{< release-header
  title="July 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-07"
>}}


## Intro

**Attention:** If you skipped one or more releases, please also check the technical release notes of the skipped releases.

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2023-07`, read on.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Slides: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

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
| Livingdocs Server Docker Image | livingdocs/server-base:18.5                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67 |

## Breaking Changes 🔥

### Migrate the Postgres Database 🔥

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

### Drop support for Node v16

🔥 Drop support for Node 16 as it will reach End-of-life in September, use Node v20 instead.

* [Server: Remove Nodev16 support](https://github.com/livingdocsIO/livingdocs-server/pull/5809)
* [Editor: Remove Nodev16 support](https://github.com/livingdocsIO/livingdocs-editor/pull/7044)

### Removal `useAsTitle` 🔥

🔥 Support for `useAsTitle` has been removed.
If you are currently using an `li-text` plugin with `useAsTitle: true`, please migrate to [displayTitlePattern]({{< ref "/reference/project-config/content-types#displaytitlepattern" >}}). You will have to remove the `useAsTitle` from the metadata and introduce `displayTitlePattern: '{{metadata.title}}'` to maintain the functionality, where `title` is handle for an `li-text` plugin.
Please bear in mind that Editor toolbar behaviour will change, and it will no longer be possible to change the title of the article from the toolbar. The title will only be editable in the `li-text` plugin.
Please also make sure that `document.title` is no longer accessed in custom code, e.g. in Includes since this would leak the internal Working Title to the public.

* [Server: Remove `useAsTitle`](https://github.com/livingdocsIO/livingdocs-server/pull/5763)
* [Editor: Remove `useAsTitle`](https://github.com/livingdocsIO/livingdocs-editor/pull/6949)

### Removal `ui.component`

🔥 Configuring `ui.component` for metadata plugins does not work anymore.

### Rename searchPublications property `conditions` to `filters`

🔥 Rename `conditions` property to `filters`
When calling `searchManager.searchPublications()` directly, and providing the new `conditions` property in the first argument, please rename that property to `filters`.
Please note that the old `filters` property was renamed to `legacyFilters`.
This rename is part of the refactor done for the new [search DSL](#search-dsl).
* [Rename `searchPublications()` property `conditions` to `filters`](https://github.com/livingdocsIO/livingdocs-server/pull/5744)

### Rename searchPublications property `filters` to `legacyFilters`

🔥 Rename `filters` property to `legacyFilters`
When calling `searchManager.searchPublications()` directly, and providing the new `conditions` property in the first argument, please rename the property to `legacyFilters` for a quick backwards compatibility fix.
The preferred update path would be to use `filters` from the new [search DSL](#search-dsl).

* [Rename `searchPublications()` property `filters` to `legacyFilters`](https://github.com/livingdocsIO/livingdocs-server/pull/5744)

### Removal Seed API

🔥 Features wasn't in use an didn't cover any use case.

* [Remove seed API](https://github.com/livingdocsIO/livingdocs-server/pull/5767)

### Removal Proposals feature

🔥 Features wasn't in use an didn't cover any use case.

* [Remove proposals feature](https://github.com/livingdocsIO/livingdocs-editor/pull/6910)

### Removal Cache feature

🔥 Features wasn't in use an didn't cover any use case.

* [Remove `li-cache` feature](https://github.com/livingdocsIO/livingdocs-server/pull/5751)

### Removal `liImageProxy` feature

🔥 Features wasn't in use an didn't cover any use case.

* [Remove `liImageProxy` feature](https://github.com/livingdocsIO/livingdocs-server/pull/5772)

## Deprecations

### `searchPublications()` property `legacyFilters`

The `legacyFilters` property (previously named `filters`) of the first argument passed to `searchManager.searchPublications()` has been deprecated, and will be removed in `release-2023-09`.
This only exists to provide a bit of additional time to migrate any queries to the new Search DSL.

### Preview API

Preview API is deprecated and removed with `release-2023-09`: `previewApi.registerRenderFunction`, migrate to `documentApi.registerPreviewFunction`.

## APIs :gift:

### Add Api endpoint for incoming references for drafts

New draft endpoint for incoming document references: `/drafts/:documentId/incomingDocumentReferences`. Needs `public-api:drafts:read privileges`. [learn more]({{<ref "/content/reference/public-api/drafts/incoming-references.md">}})

### Public API Search Filters

TODO @ajwild

## Features :gift:

For a business level explanation of the new features please check [July Release Notes]() // TODO

- [Dashboard language filter for li-tree document selection](#dashboard-language-filter-for-li-tree-document-selection)
- [Display Filters ListV2 with OR combination](#display-filters-listv2-with-or-combination)
- [Document Preview](#document-preview)
- [Search DSL](#search-dsl)
- [Translatable li-tree plugin](#translatable-li-tree-plugin)
- [UI and label config multi-language support](#ui-and-label-config-multi-language-support)


### Dashboard language filter for li-tree document selection

TODO @dfreier

### Display Filters ListV2 with OR combination

The Filters ListV2 have been extended to support multiple selections. The selected values are `OR` combined in the search query. [Learn more]({{< ref "/guides/editor/custom-dashboard-filters/index.md#example-multi-value-filter" >}})

Configure a multi-value filter:

```js
liEditor.searchFilters.registerListV2('MultiSelectV2Filter', {
  multiple: true, // allow multiple selections
  datasource: {
    ...
  },
  ...
})
```

### Document Preview

TODO @benib

### Search DSL

TODO @marcbachmann

### Translatable li-tree plugin

li-tree plugin has new config `multilang` to support multiple languages on items [Learn more]({{< ref "/content/reference/document/metadata/metadata-plugin-list.md#li-tree" >}})

Metadata config in project config:

```js
metadata: [
  {
    handle: 'tree',
    type: 'li-tree',
    config: {
      multilang: true,
      ...
    },
    ...
  }
]
```

### UI and label config multi-language support

With this release, we introduced multi-language support for the UI and label config. Currently we support English and German as UI languages [Learn more]({{< ref "/content/guides/editor/multi-language-ui/index.md" >}})

Set UI language in editor config:

```js
app: {
  locale: 'de'
}
```

Configure multi language metadata plugin label in project config:

```js
metadata: [
  {
    handle: 'category',
    ui: {
      label: {
        en: 'Category',
        de: 'Kategorie'
      },
    },
    ...
  },
]
```

## Improvements

- [Support significantPublicationDate on document import](#support-significantpublicationdate-on-document-import)
- [Copy Target Icon and Label Config](#copy-target-icon-and-label-config)

### Support significantPublicationDate on document import

Property `significantPublicationDate` sets a date which deliveries can display to viewers [Learn more]({{< ref "/content/reference/public-api/imports/documents.md" >}})

### Copy Target Icon and Label Config

The copy target config has been extended to support an icon and a label. [Learn more]({{< ref "/guides/editor/document-copy/index.md#setup-config" >}})

Copy config in project config:

```js
copy: [
  {
    source: {...},
    targets: [
      {
        label: 'Web Article',
        icon: 'web',
        ...
      }
    ]
  }
]
```

## Bugfixes

* Do not change the working title if a displayTitlePattern is configured
* Do not send title to server with displayTitlePattern config
* Fix Broken Navigation after MediaLibrary Asset Upload
* documentCreationDisabled flag still supported in multi channel projects
* Fix Editable Teaser override clearing
* Fix Legacy Dashboards: initial load takes cached filter value into account now
* Redirecting to home page improved to rely on state not URL
* Fix set metadata title (useAsTitle) property during creation
* Prevent unsaved document data while processing remote updates
* Use `$t()` instead of undefined `this.$t()` in `li-unsaved-dialog`

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-32313](https://github.com/advisories/GHSA-p5gc-c584-jj6v) patched in `vm2` v3.9.19
* [CVE-2023-32314](https://github.com/advisories/GHSA-whpj-8f3w-67p5) patched in `vm2` v3.9.19

We are aware of the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Server.

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2023-32695](https://github.com/advisories/GHSA-cqmj-92xf-r6r9) patched in `socket.io-parser` v4.2.4
* [CVE-2023-31125](https://github.com/advisories/GHSA-q9mw-68c2-j6m5) patched in `engine.io` v6.4.2

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Editor because `rangy` module is scoped in the `livingdocs-framework` and not exposed to the users.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v231.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.3): test(document-lists): Test scheduled documents in document lists
- [v231.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.2): fix(routing): Use isolatedCacheFactory instead of persistent in-process cache for route builders

### Livingdocs Editor Patches
- [v95.0.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.8): chore: Do not add `dashboardConfig.published = true` filter if scheduled publishing is also active for lists
- [v95.0.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.7): fix(document preview): Angular component
- [v95.0.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.6): fix(table dashboards): correctly error when custom tableDashboardCell components take editable prop
- [v95.0.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.5): fix(quick publish): correctly show quick publish button if allowed

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
