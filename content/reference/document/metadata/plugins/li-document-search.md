---
title: li-document-search
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Dynamic teaser lists based on configurable filters.
support:
  include: true
description: |
  The `li-document-search` plugin simplifies the management and rendering of article teaser lists within pages based on configurable filters. It provides an efficient solution for semi-automatic page management. This approach reduces the need for custom code compared to other solutions within Livingdocs.
storageFormat: |
  {
    baseFilters: <Array<QueryDSL>>,
    displayFilterStates: <Array<{filter: QueryDSL, context: object, sort: SortParam}>>,
    sort: <String>,
    limit: <Integer>
  }
includeConfig: |2
        handle: 'myHandle',
        type: 'li-document-search',
        config: {
          contentTypes: [],    // optional, shorthand for contentType base filter
          baseFilters: [],     // optional
          displayFilters: [],  // optional
          sort: '',            // optional
          showLimit: true,     // optional, show limit input in UI
          defaultLimit: 3,     // required, default number of included documents
          minLimit: 1,         // optional if showLimit=true, minimum configurable limit in UI
          maxLimit: 5          // required if showLimit=true, maximum configurable limit in UI
        }
---

## Configuration

`li-document-search` supports filtering articles with [base filters]({{< ref "/customising/advanced/editor-configuration/base-filter" >}}) and [display filters]({{< ref "/customising/advanced/editor-configuration/display-filter" >}}). Base filters are always applied and cannot be modified by editors, whereas display filters are rendered in the interface and adjustable by editors. Additionally, [sorting order]({{< ref "/guides/search/publication-index#sort" >}}) and a limit can be defined, with the latter also being adjustable by editors.

{{< info >}}
Filters are always evaluated against the publication index `li-publications`. Make sure that your configured filters are supported by this index.
{{< /info >}}

To set it up, create an [include service]({{< ref "/reference/document/includes/server-customization" >}}) containing the `li-document-search` plugin:

```js
{
  name: 'dynamic-teaser-list',
  paramsSchema: [{
    handle: 'teasers',
    type: 'li-document-search',
    config: {
      baseFilters: [{key: 'metadata.showOnHomepage', term: true}],
      displayFilters: [
        'language',
        {metadataPropertyName: 'category'},
        {filterName: 'liDateTimeRange', config: {documentPropertyName: 'lastPublicationDate'}}
      ],
      showLimit: true,
      defaultLimit: 3,
      minLimit: 2,
      maxLimit: 6
    }
  }],
  rendering: {
    type: 'function',
    render (params, context) {
      const content = params.teasers?.values
        .map((document) => ({
          component: 'teaser',
          content: {
            title: document.metadata.title
          }
        }))
      return {content}
    }
  }
}
```

### Term Variables

In addition to the regular [Search DSL]({{< ref "/customising/advanced/editor-configuration/base-filter/" >}}), base filters in `li-document-search` support term variables. Term variables enable you to reference a value that is evaluated only at the time of the request.

To learn more, please refer to the [term variable documentation]({{< ref "/reference/document/metadata/plugins/li-teaser/#term-variables" >}}).

## User Interface

Editors can adjust display filters in the user interface to control which articles should be included. If enabled, they can also adjust the number of included articles.

![li-document-search UI](/reference/document/metadata/li-document-search-example.png)

{{< info >}}
When utilizing custom display filters, it is crucial to conduct thorough testing. Your display filter must be capable of restoring its state solely from the `filter`, `sort` and `context` attributes. All other attributes are not persisted. For more details, refer to our guide on how to write [custom display filters]({{< ref "/guides/editor/custom-dashboard-filters#custom-vue-component-filter" >}}).
{{</ info >}}

## Resolving

The specified filters are stored within documents and evaluated on request. Therefore, teaser lists may contain other teasers over time as new articles match the filters, without requiring editors to republish a page. Thus, it is recommended to configure your delivery to repeatedly invalidate the cache for such pages and refetch them occasionally from the Composition API to obtain the latest state.

We recommend obtaining documents from the Composition API, as it supports resolving includes. For `li-document-search`, Livingdocs automatically preloads all matching documents, no matter whether `preload` is set or not, and passes them to your render function. The documents are deduplicated across all components in a page, ensuring each teaser is displayed at most once.
