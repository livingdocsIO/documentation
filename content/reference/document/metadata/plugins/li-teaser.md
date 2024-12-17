---
title: li-teaser
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Versatile document teaser management with support for direct, curated, and algorithm-based references.
addedIn: release-2024-11
support:
  document: false
  media: false
  include: true
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: false
  planningSystem: false
description: |
  The `li-teaser` plugin for includes facilitates flexible page management by allowing users to establish rule based links from teasers to documents. Teasers can be configured to use direct references, curated lists, or algorithm-driven selections, supporting a mix of static and dynamic teasers.
defaultUI: |
  {{< img src="../images/li-teaser-default-ui.png" alt="li-teaser plugin in default state in properties panel schema form." >}}
storageFormat: |
  ms.strictObj({
    $ref: ms.const('document'),
    reference: ms.strictObj({
      id: 'string:required'
    }),
    curatedList: ms.strictObj({
      $ref: ms.const('document'),
      reference: ms.strictObj({
        id: 'string:required'
      })
    }),
    algorithm: ms.strictObj({
      displayFilterStates: ms.arrayOf(ms.obj())
    })
  })
---

## About implementing page management
This plugin offers a flexible and powerful page management approach, by covering many of the technical necessities out of the box, such as document preloading and deduplication.
Since page management is a complex topic, we encourage you to get in touch with us, so we can figure out how your use case fits into frame and which migration paths exist.  

## Behavior

### Resolving and Preloading
- Level 1 (Direct Reference): Always preloads the referenced document selected by the user. Only active when configured and user selected a document. When resolved through Composition API the publication is returned, when previewing in Editor the draft is returned.
- Level 2 (Curated List): Loads the curated list document, extracting references as candidates for teaser document. Only active when configured and user selected a document. The list content acts as a managed set of documents. Both Composition API and Editor preview work on top of the published list and the referenced publications.
- Level 3 (Algorithm): Performs a filtered search on the publication index, generating candidates based on configured filters and display filters. Always active when configured, also if no display filters were selected. Acts as fallback if Level 2 runs out of documents. Both Composition API and Editor preview load documents from publication index.

When resolving all teasers on a page, li-teaser uses a deduplication process across Levels 2 and 3 to avoid repeated documents in multiple teasers. Documents selected via direct references (Level 1) are excluded from deduplication, as they are explicitly chosen by the user.

### Editor Interface
In the Livingdocs editor:

- Teasers with a direct reference can be re-positioned easily, transferring the document reference between teasers with a simple interface.
- Editor aims to show a deduplicated preview of the resolved page at any time, e.g. after adding, changing or removing components.
- Colorized borders around teaser components indicate the Level (1 = yellow, 2 = violet, 3 = gray).
- Transformations between li-teaser based includes are supported if they are common in `contentType.teaserComponents`.
- Level 1 Teasers do support local editing.

## Configuration

The `li-teaser` plugin offers three levels of document selection for teasers:

1. **Level 1: Direct Reference** - Links directly to a document selected by the user.
2. **Level 2: Curated List** - References documents within a manually curated list.
3. **Level 3: Algorithm** - Selects documents dynamically using filters.

{{< img src="../images/li-teaser-overview.jpg" alt="Page management with li-teaser overview" >}}

Each level can be enabled or restricted in the configuration schema, as shown in the example below.

```js
'use strict'

module.exports = function () {
  return {
    name: 'textTeaserService',
    paramsSchema: [
      {
        handle: 'teaser',
        type: 'li-teaser',
        config: {
          // Optional, enables level 1 and defines what is selectable by users 
          directReference: {
            useDashboard: 'articlesSimple', // Optional, for selection dialog and for column config of selected document
            contentType: 'article', // Optional, shorthand base filter (string or array)
            published: true, // Optional, defaults to true
            baseFilters: [], // Optional, overrides base filters in selection dialog
            displayFilters: [] // Optional, overrides display filters in selection dialog
          },
          // Optional, enables level 2 and defines what is selectable by users
          curatedList: {
            useDashboard: 'curatedLists', // For selection dialog
            contentType: 'curatedList', // Optional, shorthand base filter
            baseFilters: [], // Optional, overrides base filters in selection dialog
            displayFilters: [] // Optional, overrides display filters in selection dialog
          },
          // Optional, enables and configures level 3
          algorithm: {
            contentType: 'article', // Optional, shorthand base filter (string or array)
            baseFilters: [], // Optional, filters need to conform with publication search!
            sort: 'lastPublicationDate' // Optional, sorting needs to conform with publication search!
            displayFilters: [ // Optional, selectable by user, filters need to conform with publication search!
              { metadataPropertyName: 'ressorts' },
              {
                filterName: 'liDateTimeRange',
                config: {
                  documentPropertyName: 'lastPublicationDate',
                  label: { 'en': 'Publication Date', 'de': 'Publikationsdatum' }
                }
              }
            ]
          }
        }
      }
    ],
    rendering: {
      type: 'function',
      render (params) {
        // The preloaded document is resolved as value of li-teaser handle.
        // It can be originated from any of the configured levels.
        const document = params.teaser?.value
        const content = document
          ? [{
            id: `textTeaser-${document.systemdata.documentId}`,
            component: 'textTeaser',
            content: {
              title: document.metadata.title
            }
          }]
          : [] // make sure not to fail if no document was resolved

        return {
          content,
          editableContent: true // has no effect if a level 2 or 3 document was resolved
        }
      }
    }
  }
}
```

The overall configuration for a full page management rig highly depends on the actual use case and spans further configurations across Content Types, Dashboards, Components and Services.

### Recommendations

- Content Type Restrictions: Configure the li-teaser plugin to limit the selectable content types in each level to ensure only documents compatible with the service render function are resolved.
- Multiple Teaser Variants: For different visual teaser styles (e.g., with image, text-only), use separate components. For example:
  - Include Components: `imageTeaserInclude`, `textTeaserInclude`
  - Services: `imageTeaserService`, `textTeaserService`
  - Rendered Components: `imageTeaser`, `textTeaser`
- Curated Lists: Use dedicated includes based on li-document-reference or a li-teaser (only level 1 configured) for documents in curated lists. Do not use the teaser components used on actual pages.
- Drag & Drop: For the content types which are rendered by the include service, configure their `teaserComponents` section to enable drag & drop and transformations.

### Term Variables

In addition to the regular [Search DSL]({{< ref "/customising/advanced/editor-configuration/base-filter/" >}}), base filters in the `algorithm` level of `li-teaser` support term variables. Term variables enable you to reference a value that is evaluated only at the time of the request.

Two types of term variables are supported:

- Metadata properties of the document in which the component is placed  
- The brand for which the document is requested (see [Conditional Components]({{< ref "/reference/project-config/content-types/#conditional-components" >}}))

#### Metadata Properties

Let's first look at term variables that reference metadata properties. For example, consider the following base filter:

```js
baseFilters: [
  {key: 'metadata.description', termVariable: 'metadata.title'}
]
```

This base filter matches all documents that have the same metadata property `description` as the metadata property `title` of the document in which this component is placed. On request, `metadata.title` is replaced with the value set on the `title` metadata property of the document containing the component.

Metadata properties from all metadata plugins are supported. Values are accessed using the same syntax as the indexing behavior of the underlying metadata plugin. For example, consider a metadata property `relatedArticles` of type `li-document-references`. To reference this property in a term variable, use `metadata.relatedArticles.references.id`, as shown below:

```js
baseFilters: [
  {key: 'documentId', termVariable: 'metadata.relatedArticles.references.id'}
]
```

This syntax corresponds to the indexing behavior of metadata plugin `li-document-references`, specifically its key. Importantly, metadata properties do not need to be indexed for this to work. Only the indexing behavior needs to be defined in the metadata plugin.

```js
indexing: {
  enabled: true,
  behavior: [{
    type: 'keyword',
    key: 'references.id',
    getValue (val) { return val.references.map((r) => r.id) }
  }]
}
```

If a referenced metadata property is empty, the term variable will be excluded from the query. Therefore, we recommend to always pair such terms with an additional superset term as a fallback. For example:

```js
baseFilters: [
  {key: 'contentType', term: 'article'},
  // This will be excluded if relatedArticles is empty
  {key: 'documentId', termVariable: 'metadata.relatedArticles.references.id'}
]
```

#### Brand Component Conditions

In addition to metadata properties, you can reference the [brand for which the document is requested]({{< ref "/reference/project-config/content-types/#conditional-components" >}}) using the `componentConditions.brand` term variable. This enables you to load teasers relevant to a specific brand.

For example, if articles are categorized by a `brand` metadata property, you can filter them using the following base filter:

```js
baseFilters: [
  {key: 'metadata.brand', termVariable: 'componentConditions.brand'}
]
```

If no brand is provided in a request, `componentConditions.brand` uses the [default brand]({{< ref "/reference/project-config/brands" >}}) as configured in the Project Config.