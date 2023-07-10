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

🔥 The Seed API feature has been removed. If you were still using it, you should consider using Document/Publication API or Import API instead.
    You can find more information in [Import API documentation]({{< ref "/customising/advanced/import-api.md" >}}).

* [Remove seed API](https://github.com/livingdocsIO/livingdocs-server/pull/5767)

### Removal Proposals feature

🔥 Features wasn't in use an didn't cover any use case.

* [Remove proposals feature](https://github.com/livingdocsIO/livingdocs-editor/pull/6910)

### Removal Cache feature

🔥 Features wasn't in use an didn't cover any use case.

* [Remove `li-cache` feature](https://github.com/livingdocsIO/livingdocs-server/pull/5751)

### Removal `liImageProxy` feature

🔥 Features wasn't in use an didn't cover any use case. If you were still using it, you should use imgix or another Image Service provider instead. [More information]({{<ref "/content/guides/media-library/image-services.md">}}).

* [Remove `liImageProxy` feature](https://github.com/livingdocsIO/livingdocs-server/pull/5772)

## Deprecations

### `searchPublications()` property `legacyFilters`

The `legacyFilters` property (previously named `filters`) of the first argument passed to `searchManager.searchPublications()` has been deprecated, and will be removed in `release-2023-09`.
This only exists to provide a bit of additional time to migrate any queries to the new Search DSL.

### Preview API

Preview API is deprecated and removed with `release-2023-09`: `previewApi.registerRenderFunction`, migrate to `documentApi.registerPreviewFunction`.

## APIs :gift:

### Add Api endpoint for incoming references for drafts

New draft endpoint for incoming document references: `/drafts/:documentId/incomingDocumentReferences`. Needs `public-api:drafts:read privileges`. [Learn more]({{<ref "/content/reference/public-api/drafts/incoming-references.md">}})

### Public API Search Filters

A `filters` query parameter can now be provided to the `GET /api/v1/publications/search` endpoint.
The filters value should be a JSON (stringified) array or object, using the correct [query DSL]({{< ref "/reference/public-api/publications/search#search-filters" >}}).
```
GET /api/v1/publications/search?filters=[{"key":"metadata.title","term":"My Title"}]
```

Each object must contain either a valid logical operator property ("and", "or", "not"), or a query expression property ("term", "exists", "range"). The logical operator values can be either arrays or objects. The query expression properties should have the value you are searching for, and they must be combined with a "key" property. The default top level array or object behaviour is that of an AND logical expression.

Below is an example showing how query expressions and logical operators can be combined to create a complex query:

```js
const filters = {
  or: [
    {
      and: [
        {
          key: 'metadata.count',
          range: {lte: 2}
        },
        {
          key: 'metadata.bool',
          exists: true
        },
        {
          not: {
            key: 'metadata.title',
            term: 'My Title'
          }
        }
      ]
    },
    {
      key: 'metadata.count',
      term: 3
    }
  ]
}

// Public API request
const response = await fetch(`api/v1/publications/search?filters=${JSON.stringify(filters)}`)
const results = await response.json()
```

The `filters` object from the example above can also be passed to the `publicApi.searchPublications()` method.

```js
// Public API server feature
const publicApi = server.features.api('li-public-api')
const results = await publicApi.searchPublications({projectId: 1, filters})
```

## Features :gift:

For a business level explanation of the new features please check [July Release Notes](TODO)

- [Display Filters ListV2 with OR combination](#display-filters-listv2-with-or-combination)
- [Document Preview](#document-preview)
- [Search DSL](#search-dsl)
- [Translatable li-tree plugin](#translatable-li-tree-plugin)
- [UI and label config multi-language support](#ui-and-label-config-multi-language-support)
- [Support significantPublicationDate on document import](#support-significantpublicationdate-on-document-import)
- [Copy Target Icon and Label Config](#copy-target-icon-and-label-config)

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

You can use HTML or iFrame as return format when using the Document Preview feature.
To enable Document Previews, you first need to register a preview function in the server. Then, define the handles in `editorSettings.documentPreviews` from the Project Config. Finally, enable the document preview in the desired content types. When using HTML scroll position will be preserved automatically when the user reloads the preview, but if you use iFrame you will have to let Livingdocs know using a postMessage interface. [Learn more]({{< ref "/guides/editor/document-previews/index.md" >}}).

Register Document Preview Functions in the server:
```js
liServer.registerInitializedHook(async () => {
  const documentApi = liServer.features.api('li-documents').document

// return html ...
documentApi.registerPreviewFunction({
  handle: 'myHtmlPreviewFunction',
  async getPreview ({projectConfig, documentId}) {
    const doc = await documentApi.getLatestDocument(documentId)
    return {
      html: `<div><h1>Title: ${doc.title}</h1><p>This is a custom preview</p></div>`
    }
  }
})

// ... or an iframe
documentApi.registerPreviewFunction({
    handle: 'myIframePreviewFunction',
    async getPreview ({projectConfig, documentId}) {
      return {
        iframe: {
          src: `https://example.com/my-preview/${documentId}`,
          sandbox: 'allow-same-origin' // make sure this is set if you want to preserve scroll position
        }
      }
    }
  })
```

Configure Document Previews in the project config:
```js
// editorSettings
{
  documentPreviews: [
    {
      handle: 'htmlPreview',
      previewFunction: 'myHtmlPreviewFunction',
      icon: 'book-edit',
      label: 'Preview'
    },
    {
      handle: 'iframePreview',
      previewFunction: 'myIframePreviewFunction',
      icon: 'pencil',
      label: {
        de: 'Meine Seite',
        en: 'My Site'
      }
    }
  ]
}
```

Enable Document Previews in the content type config:
```js
{
  handle: 'myContentType',
  // ...
  // for documentPreviews, define the handles of editorSettings.documentPreviews
  documentPreviews: ['iframePreview', 'htmlPreview']
}
```

### Search DSL

TODO @marcbachmann

### Translatable li-tree plugin

li-tree plugin has new config `multilang` to support multiple languages on items [Learn more]({{< ref "/reference/document/metadata/plugins/li-tree" >}})

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

### Support significantPublicationDate on document import

Property `significantPublicationDate` sets a date which deliveries can display to viewers [Learn more]({{< ref "/content/reference/public-api/imports/documents.md" >}})

When performing a `POST api/v1/import/documents` request, you can define `significantPublicationDate` within `document.publishControl` object. See example below:

```js
{
  "systemName": "identifier-for-your-system",
  ...,
  "documents": [
    {
      "id": "123abc",
      ...,
      "publishControl": {
        "significantPublicationDate": "1999-03-19T17:27:00.107Z",
      },
    }
  ]
}
```

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
- [v231.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.7): fix(search): Provide format when sorting by date
- [v231.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.6): fix(documents): Fix metadata_id query in document cleanup script
- [v231.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.5): fix(documents): Set `first_publication_id` of scheduled documents when they get published
- [v231.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.4): fix(importer): trim title
- [v231.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.3): test(document-lists): Test scheduled documents in document lists
- [v231.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.2): fix(routing): Use isolatedCacheFactory instead of persistent in-process cache for route builders

### Livingdocs Editor Patches
- [v95.0.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.17): chore: Improve unique value computation
- [v95.0.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.16): chore(deprecation): add a deprecation notice to the filter sets admin screen
- [v95.0.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.15): fix(editor): Fix labels for cut and copy buttons in multiselect panel
- [v95.0.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.14): fix(metadata preview): show different previews in correct order
- [v95.0.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.13): fix(user): Improve li-user-avatar
- [v95.0.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.12): fix(document lists): show correct label on card after publish control schedule is removed
- [v95.0.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.11): fix(realtime): Notify user on Pusher connection error
- [v95.0.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.10): fix(metadata previews): show previews after errors and length feedback
- [v95.0.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.9): fix: clone dashboard config before modifying
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
