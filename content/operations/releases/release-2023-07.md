---
type: release-notes
title: July 2023 Release
description: Technical Release Notes for release-2023-07
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-07/release-2023-07/

header:
  upcoming: false
  legacy: true
  current: false
  maintained: false
  branchHandle: release-2023-07
---

## Intro

**Attention:** If you skipped one or more releases, please also check the technical release notes of the skipped releases.

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/livingdocs-release-july-2023).
To learn about the necessary actions to update Livingdocs to `release-2023-07`, read on.

## Webinar

- [Feature Webinar Recording](https://us02web.zoom.us/rec/share/TSaG7WiFT_RYQs4A5Ab9J9QeAoz9bozQ1vtrOU6rYbcTigyKpTpv9pMFWogxoP4B.aFK-KAdQVSODjPRA) | Passcode: R=Y6AS5Z
- [Feature Webinar Slides](https://docs.google.com/presentation/d/1jvUyP-dnPS6EWIBjUwKM6n-4mGi9kKs2UO2mnAI9hpA)
- [Dev Webinar Recording](https://us02web.zoom.us/rec/share/bnnN-sc1Z_Kka0WauI_PS7KIXl_tqRc-87YLZoDGAegwdZed9RELbF7q4KP80g2O.yDCx0L8p32NLo36l) | Passcode: +3r9#&Te
- [Dev Webinar Slides](https://docs.google.com/presentation/d/1WK6xjWHRJ0QJlsTCk0NBeRfxetWIWgVOWPZXUE5uVzQ)
- [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

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
# migration 192-remove-unused-columns.js
#   removes unused columns from the database
# migration 193-increase-document-title-length.js
#   increases the length of the document title to 1000 characters
livingdocs-server migrate up
```

### Drop support for Node v16

🔥 Drop support for Node 16 as it will reach End-of-life in September, use Node v20 instead.

- [Server: Remove Nodev16 support](https://github.com/livingdocsIO/livingdocs-server/pull/5809)
- [Editor: Remove Nodev16 support](https://github.com/livingdocsIO/livingdocs-editor/pull/7044)

### Removal `useAsTitle` 🔥

🔥 Support for `useAsTitle` has been removed.
If you are currently using an `li-text` plugin with `useAsTitle: true`, please migrate to [displayTitlePattern]({{< ref "/reference/project-config/content-types#displaytitlepattern" >}}). You will have to remove the `useAsTitle` from the metadata and introduce `displayTitlePattern: '{{metadata.title}}'` to maintain the functionality, where `title` is handle for an `li-text` plugin.
Please bear in mind that Editor toolbar behaviour will change, and it will no longer be possible to change the title of the article from the toolbar. The title will only be editable in the `li-text` plugin.
Please also make sure that `document.title` is no longer accessed in custom code, e.g. in Includes since this would leak the internal Working Title to the public.

- [Server: Remove `useAsTitle`](https://github.com/livingdocsIO/livingdocs-server/pull/5763)
- [Editor: Remove `useAsTitle`](https://github.com/livingdocsIO/livingdocs-editor/pull/6949)

### Rename searchPublications property `conditions` to `filters`

🔥 Rename `conditions` property to `filters`
When calling `searchManager.searchPublications()` directly, and providing the new `conditions` property in the first argument, please rename that property to `filters`.
Please note that the old `filters` property was renamed to `legacyFilters`.
This rename is part of the refactor done for the new [Search DSL](#search-dsl).

- [Rename `searchPublications()` property `conditions` to `filters`](https://github.com/livingdocsIO/livingdocs-server/pull/5744)

### Rename searchPublications property `filters` to `legacyFilters`

🔥 Rename `filters` property to `legacyFilters`
When calling `searchManager.searchPublications()` directly, and providing the new `conditions` property in the first argument, please rename the property to `legacyFilters` for a quick backwards compatibility fix.
The preferred update path would be to use `filters` from the new [Search DSL](#search-dsl).

- [Rename `searchPublications()` property `filters` to `legacyFilters`](https://github.com/livingdocsIO/livingdocs-server/pull/5744)

### Removal Seed API

🔥 The Seed API feature has been removed. If you were still using it, you should consider using Document/Publication API or Import API instead.
You can find more information in [Import API documentation]({{< ref "/customising/advanced/import-api.md" >}}).

- [Remove seed API](https://github.com/livingdocsIO/livingdocs-server/pull/5767)

### Removal Proposals feature

🔥 Features wasn't in use an didn't cover any use case.

- [Remove proposals feature](https://github.com/livingdocsIO/livingdocs-editor/pull/6910)

### Removal Cache feature

🔥 Features wasn't in use an didn't cover any use case.

- [Remove `li-cache` feature](https://github.com/livingdocsIO/livingdocs-server/pull/5751)

### Removal `liImageProxy` feature

🔥 Features wasn't in use an didn't cover any use case. If you were still using it, you should use imgix or another Image Service provider instead. [More information]({{< ref "/guides/media-library/image-services.md" >}}).

- [Remove `liImageProxy` feature](https://github.com/livingdocsIO/livingdocs-server/pull/5772)

## Deprecations

### `searchPublications()` property `legacyFilters`

The `legacyFilters` property (previously named `filters`) of the first argument passed to `searchManager.searchPublications()` has been deprecated, and will be removed in `release-2023-09`.
This only exists to provide a bit of additional time to migrate any queries to the new [Search DSL](#search-dsl).

### Preview API

Preview API is deprecated and removed with `release-2023-09`: `previewApi.registerRenderFunction`, migrate to `documentApi.registerPreviewFunction`.

## APIs :gift:

### Add Api endpoint for incoming references for drafts

New draft endpoint for incoming document references: `/drafts/:documentId/incomingDocumentReferences`. Needs `public-api:drafts:read privileges`. [Learn more]({{< ref "/reference/public-api/drafts/incoming-references" >}})

### Public API Search Filters

A `filters` query parameter can now be provided to the `GET /api/v1/publications/search` endpoint.
The filters value should be a JSON (stringified) array or object, using the new [Search DSL](#search-dsl).

```
GET /api/v1/publications/search?filters=[{"key":"metadata.title","term":"My Title"}]
```

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

Please also check the [Public API Search DSL]({{< ref "/reference/public-api/publications/search-filters" >}}) documentation for more details.

## Features :gift:

For a business level explanation of the new features please check [July Release Notes](https://livingdocs.io/en/livingdocs-release-july-2023)

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

The elasticsearch indexing and filter functionality received major updates. With this release we're introducing a new search DSL, which can be used in base filters of dashboards and also in display filter implementations.

Please follow the [migration guide for display filters and base filters]({{< ref "/guides/editor/filter-migration" >}}).  
Please also check the [Public API Search DSL]({{< ref "/reference/public-api/publications/search-filters" >}}) documentation for details how to use it there.

The new DSL builds up on logical operators (`and`, `or`, `not`), or a query expression property (`term`, `exists`, `range`). The logical operator values can be either arrays or objects. The query expression properties should have the value you are filtering for, and they must be combined with a `key` property. The default top level array or object behaviour is that of an AND logical expression.

For example:

```js
;[
  {key: 'contentType', term: 'regular-article'},
  {
    or: [
      {key: 'metadata.proofreadingTask.state', term: 'requested'},
      {key: 'metadata.imageEnhancementTask.state', term: 'requested'}
    ]
  }
]
```

By default all metadata properties in a custom metadata mapping are included. So you can filter them directly.

Additionally we have a new `index: true` configuration [within the metadata property declaration]({{< ref "/guides/search/publication-index#metadata-plugins" >}}) to support automatic indexing without causing elasticsearch mapping conflicts. We advise to this new attribute instead of a static mapping.

### Translatable li-tree plugin

li-tree plugin has new config `multilang` to support multiple languages on items: [Learn more]({{< ref "/reference/document/metadata/plugins/li-tree" >}})

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

With this release, we introduced multi-language support for the UI and label config. Currently we support English and German as UI languages: [Learn more]({{< ref "/guides/editor/multi-language-ui/index.md" >}})

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

Property `significantPublicationDate` sets a date which deliveries can display to viewers: [Learn more]({{< ref "/reference/public-api/imports/documents.md" >}})

When performing a `POST api/v1/import/documents` request, you can define `significantPublicationDate` within `documents.[].publishControl` object. See example below:

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

The copy target config has been extended to support an icon and a label: [Learn more]({{< ref "/guides/editor/declarative-document-copy#setup-config" >}})

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

- [CVE-2023-32313](https://github.com/advisories/GHSA-p5gc-c584-jj6v) patched in `vm2` v3.9.19
- [CVE-2023-32314](https://github.com/advisories/GHSA-whpj-8f3w-67p5) patched in `vm2` v3.9.19

We are aware of the following vulnerabilities in the Livingdocs Server:

- [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Server.

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-32695](https://github.com/advisories/GHSA-cqmj-92xf-r6r9) patched in `socket.io-parser` v4.2.4
- [CVE-2023-31125](https://github.com/advisories/GHSA-q9mw-68c2-j6m5) patched in `engine.io` v6.4.2

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Editor because `rangy` module is scoped in the `livingdocs-framework` and not exposed to the users.
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

- [v231.0.49](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.49): fix(lists): Define limit as option on `documentListModel.getInbox()`, as it is possible to retrieve more than 1010 leading to `Too many results` error
- [v231.0.48](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.48): chore(desknet): Add tests for token refresh
- [v231.0.47](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.47): chore: Remove nzz and onboarding downstreams from .drone.yml
- [v231.0.46](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.46): fix(exif-extraction): Normalize the `Date Created` exif field to a full iso timestamp supported everywhere
- [v231.0.45](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.45): chore(import): Mark unused import configs as deprecated
- [v231.0.44](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.44): fix(notifications): Use link which opens the task side panel
- [v231.0.43](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.43): fix(deps): Update dependency @livingdocs/framework from 25.0.13 to 25.0.15
- [v231.0.42](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.42): fix(notifications): Use project defaultLocale for labels in task emails
- [v231.0.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.41): fix(image): Fix matcher to detect SVG images that include ` ` or `\n`
- [v231.0.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.40): fix(http): agent updated to only support https
- [v231.0.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.39): fix: wrong method call
- [v231.0.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.38): fix(image-processing): Detect SVG uploads
- [v231.0.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.37): fix(http): Define longer `requestTimeout` on `liServer.httpServer` to avoid requests being cancelled by the socket timeout
- [v231.0.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.36): fix(indexing): Increase events to fetch if no group existed
- [v231.0.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.35): fix(comyan): encode title when reporting usage
- [v231.0.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.34): fix(security): Update `get-func-name` to version `v231.0.49` to patch CVE-2023-43646
- [v231.0.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.33): chore(example-server): Map additional metadata in copy instructions
- [v231.0.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.32): fix(security): Update `sharp` to version `v231.0.49` to patch CVE-2023-4863
- [v231.0.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.31): fix(image-services): Always pass originalDimensions to getUrl
- [v231.0.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.30): fix(imageservice): bump framework to include original dimensions
- [v231.0.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.29): fix(routing): Remove slug limitation of 30 characters
- [v231.0.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.28): fix(documents): Truncate title on creation
- [v231.0.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.27): fix(db): Use special json stringify function where we've stringified objects manually
- [v231.0.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.26): chore(copy): try/catch
- [v231.0.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.25): fix(editor): Add li-document-reference to textFormatting.customElements
- [v231.0.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.24): fix(dashboard source): doesn't query by ID
- [v231.0.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.23): fix(deps): update dependency @livingdocs/framework from 25.0.10 to v25.0.12
- [v231.0.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.22): fix(indexing): Expose lastPublicationDate, significantPublicationDate and visiblePublicationDate on document index
- [v231.0.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.21): fix(woodwing): The blob-store createReadStream returns a promise, await it
- [v231.0.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.20): fix(document import): copies metadata on drag
- [v231.0.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.19): fix(indexing): Also index systemMetadata properties present in the static mapping
- [v231.0.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.18): chore(import): Always append the appendix to import errors
- [v231.0.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.17): fix(sitemap): Add `entriesPerPage` to `getSitemapIndex` call
- [v231.0.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.16): fix(security): Update `protobufjs` (CVE-2023-36665), `semver` (CVE-2022-25883), `vm2` (CVE-2023-37466, CVE-2023-37903), `tough-cookie` (CVE-2023-26136) and `word-wrap` (CVE-2023-26115) to patch security vulnerabilities
- [v231.0.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.15): fix(image-processing): Use .on listeners instead of .once to prevent process crashes on errors
- [v231.0.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.14): fix(media-library): Add failOn config for processing corrupt image files
- [v231.0.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.13): chore(elasticsearch): Increase index delay to 3 - 6 seconds during 429 errors
- [v231.0.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.12): fix(lists): Return scheduled_in_inbox with find request
- [v231.0.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.11): fix: Write .npmrc file before updating tag
- [v231.0.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.10): fix: Tag active release as latest
- [v231.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.9): fix(search): Don't provide format for Elasticsearch < 7.13.0
- [v231.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.8): chore: Add lib/lazy.js
- [v231.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.7): fix(search): Provide format when sorting by date
- [v231.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.6): fix(documents): Fix metadata_id query in document cleanup script
- [v231.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.5): fix(documents): Set `first_publication_id` of scheduled documents when they get published
- [v231.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.4): fix(importer): trim title
- [v231.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.3): test(document-lists): Test scheduled documents in document lists
- [v231.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.2): fix(routing): Use isolatedCacheFactory instead of persistent in-process cache for route builders

### Livingdocs Editor Patches

- [v95.0.87](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.87): fix(softlock): Revert #6238 to keep lock while on metadata screen
- [v95.0.86](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.86): fix(deps): Update dependency @livingdocs/framework from 25.0.14 to 25.0.15
- [v95.0.85](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.85): chore(editor): Remove online listener from autosave on unload
- [v95.0.84](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.84): fix(tasks): Add metadataProperty.config.label fallback
- [v95.0.83](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.83): fix: support component drag&drop in safari 17.2
- [v95.0.82](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.82): fix(tasks): ensure tasks panel and toolbar button updates when a task is updated by another user
- [v95.0.81](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.81): chore(collaboration): Set CollaborationUser values on creation
- [v95.0.80](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.80): fix(url-util): Take subdomains into account when validating URL TLD
- [v95.0.79](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.79): fix(tasks): Use correct steps within task value
- [v95.0.78](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.78): fix(spellcheck): make sure spellcheck is called on document open
- [v95.0.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.77): fix(security): Update `get-func-name` to version `v95.0.87` to patch CVE-2023-43646
- [v95.0.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.76): chore(realtime): Use activity monitor composable instead of vueuse
- [v95.0.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.75): fix: update avatar when changing user name
- [v95.0.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.74): fix(publish control): make print mode work
- [v95.0.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.73): fix(tasks): open tasks panel when article is opened from task board
- [v95.0.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.72): chore(tasks): Use \_injector to get coreApi
- [v95.0.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.71): code(comments): always use the context from editable data
- [v95.0.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.70): fix(realtime): Remove Pusher listeners when calling removeAllListeners
- [v95.0.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.69): chore: Use animationFrame.digest instead of setTimeout
- [v95.0.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.68): fix(focalPoint): fix reactivity issues for preview crops
- [v95.0.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.67): fix(component lock): Restored look
- [v95.0.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.66): fix(references): typo
- [v95.0.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.65): fix(pills): print layout has translate hack
- [v95.0.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.64): fix(iframe directive): Icon check
- [v95.0.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.63): fix(tasks): Reset all state when removing a task
- [v95.0.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.62): fix(li-push-messages): make all reachable through scrolling
- [v95.0.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.61): fix(imageservice): bump framework to include original dimensions
- [v95.0.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.60): fix(comments): Allow avatar size to be string or number for mentions
- [v95.0.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.59): fix(angular-vue-wrapper): Destroy components when detatched from the DOM
- [v95.0.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.58): fix(dashboard): Clone media library dashboard configs to prevent mutations against original config objects
- [v95.0.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.57): fix(translations): Task labels on history side panel and home screen
- [v95.0.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.56): fix(filter-bar): show selected filter value
- [v95.0.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.55): fix(editor): Correctly position apply and discard buttons in conflict UI
- [v95.0.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.54): fix(login messages): line break
- [v95.0.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.53): fix(workspace): show properties panel after history mode
- [v95.0.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.52): chore(li-comment): fix eslint errors and some more formatting
- [v95.0.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.51): fix: pass image original dimensions for crop preview
- [v95.0.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.50): fix(login): Spacing
- [v95.0.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.49): fix(push message dialog): has correct padding
- [v95.0.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.48): fix(display-filter-dorpdown): fix hidden display filter dropdown in ld-modal
- [v95.0.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.47): fix(button group): Spacing
- [v95.0.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.46): fix(tasks): listen to cancel event
- [v95.0.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.45): fix(editor): Support li-document-reference in customElements
- [v95.0.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.44): fix(main-nav): Support translatable tags label
- [v95.0.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.43): fix(filters): Add isDefault flag on documentState filter
- [v95.0.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.42): fix(deps): update dependency @livingdocs/framework from 25.0.10 to v25.0.12
- [v95.0.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.41): fix: switch webpack devtool setting to have less errors
- [v95.0.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.40): fix(editor): show doc-link and doc-image UI at the correct position in more scenarios
- [v95.0.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.39): fix(editor): Prevent unnecessary saves after conflict resolution
- [v95.0.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.38): fix(document preview): ensure there is no unnessecary scrollbar with custom previews
- [v95.0.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.37): fix(li-task-list-item-tooltip): fix tooltip translation
- [v95.0.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.36): fix(security): Update `semver` (CVE-2022-25883), `word-wrap` (CVE-2023-26115) and `tough-cookie` (CVE-2023-26136) to patch security vulnerabilities
- [v95.0.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.35): fix(editor): Prevent unnecessary component blurs when collaborating
- [v95.0.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.34): fix(comments): Disable comments for data records
- [v95.0.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.33): fix(doc-image): ensure doc-image UI is shown when image is selected
- [v95.0.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.32): fix(publish control panel): padding added
- [v95.0.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.31): fix(directive areas): make directive area UI work correctly with multiple directives with UI
- [v95.0.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.30): fix(lists): Include scheduled when calculating sort order
- [v95.0.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.29): fix: Tag active release as latest
- [v95.0.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.28): fix(dashboards): Reset pagination when resetting filters
- [v95.0.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.27): fix(dashboards): Disable create button when insufficient permission
- [v95.0.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.26): fix(drop-handler): check if children allowed
- [v95.0.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.25): fix(dashboards): Fix table dashboard li-integer select form hover state
- [v95.0.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.24): fix(editor): Limit back button target to specific allow list
- [v95.0.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.23): fix(media-library): Always show the media info, even if there's no user present (e.g. with imports)
- [v95.0.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.22): fix(publish control): show publication date only when a visiblePublicationDate is available (the article has been published before)
- [v95.0.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.21): fix(back button): ignore kanban boards from potential navigation targets for user clarity
- [v95.0.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.20): fix(article embed teaser): really deprecate liEmbedTeaserIncludeModal without directive.config.search config
- [v95.0.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.19): fix(document inbox): generate displayFilters instead of relying on filters.pageList config
- [v95.0.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.18): fix(ui): crops -> zuschnitte
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

  ***

  **Icon Legend**

  - Breaking changes: :fire:
  - Feature: :gift:
  - Bugfix: :beetle:
  - Chore: :wrench:
