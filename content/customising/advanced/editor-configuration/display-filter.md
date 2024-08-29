---
title: Display Filter
---

Display Filters are filters with a UI. They are configurable per Dashboard and allow the user to define what should be shown in the result list.

There are 3 types of Display Filters:
- `listV2`
- `metadataPropertyName`
- `customVueComponent`

Some Display Filters can be configured without code. It is possible though to provide your own custom filters, [there is a guide]({{< ref "/guides/editor/custom-dashboard-filters" >}}) explaining the details.

Usually you configure `displayFilters` in Dashboard configurations like this:

```js
{
  handle: "myDashboard",
  displayFilters: [
    // shorthand for {filterName: "aFilterName"}
    "aFilterName",

    // some filters take a config object
    {
      filterName: "anotherFilterName",
      config: {
        some: "configToPass"
       }
    },

    // gives you a filter for this metadata property, caveats apply, see below. {{< added-in "release-2023-03" >}}
    {metadataPropertyName: "myMetadataProperty"}
  ],
  // ...
}
```

There are 2 types of filters provided by Livingdocs for you to configure, some you define by `filterName`, some by `metadataPropertyName`.
They are separately listed here:

## Named Filters

- `documentState` (filters: unpublished, published, not yet published, my articles, needs proofreading, currently proofreading)
- `timeRange`, filter the search results in time ranges such as last 24 hours
- `liDateTimeRange`, filter the search results in time ranges (quick filter + from/to range)
  ```js
  // simple config - filters by updatedAt
  displayFilters: ['liDateTimeRange']

  // custom config
  //   documentPropertyName: Supports 'createdAt'/'updatedAt', defaults to updatedAt
  //   metadataPropertyName: Supports any of your metadata date fields
  //   label is useful if you have multiple liDateTimeRange filters on one Dashboard {{< added-in "release-2023-11" >}}
  displayFilters: [{filterName: 'liDateTimeRange', config: {documentPropertyName: 'createdAt', label: 'Created at'}}]
  displayFilters: [{filterName: 'liDateTimeRange', config: {metadataPropertyName: 'publicationDate', label: 'Published at'}}]
  ```
- `sortBy`: `relevance` (default), `creation_date`, `updated_at`, `alphabetical`
- `language`: uses the project configuration for [available languages]({{< ref "/reference/project-config/settings.md" >}}) to offer a select box to filter for languages (requires multi-language feature to be enabled)
- `contentType`: uses the content-types configuration in your server to filter for different content-types, e.g. galleries or regular articles.
- `channels`: give the user a dropdown to filter by a specific channel. The concept of channels will be removed, if you aren't using them yet, don't start doing so.
- `characterCount`: allows the user to select number ranges for the character count a document must have in order to be shown in the result list  
  ```js
  // Creates ranges 0-99, 100-499, 500-2000, 2000-infinity
  displayFilters: [{filterName: 'characterCount', config: {thresholds: [100, 500, 2000]}}]
  ```
- `includedComponents`: lets the user select a bunch of components from one of them must be used in a document in order to be shown in the result list. Use this as a proof-of-concept to showcase what is possible only. We suggest to configure your own display filter with some combinations of component usages. For example: "Image Heavy Articles" filtering for articles with more than 5 image components.
- `missingComponents`: lets the user select a bunch of components from one of them must be absent in a document in order to be shown in the result list. Use this as a proof-of-concept to showcase what is possible only. We suggest to configure your own display filter with some combinations of component usages. For example: "Articles without a Quiz" filtering for articles not containing the Quiz component.
## Metadata Filters

{{< added-in "release-2023-03" block >}}

You can use Metadata Filters, wherever Display Filters are allowed. The example below shows a Metadata Filter on a Dashboard:

```js
{
  handle: "myDashboard",
  displayFilters: [
    // add the metadata handle to the filter (in this case 'myMetadataProperty')
    {metadataPropertyName: "myMetadataProperty"}
  ],
  // ...
}
```

All metadata properties in your `Content Type`|`Media Type` config can be used as a Metadata Filter, if the metadata type is supported (see below):
- [`li-integer`]({{< ref "/reference/document/metadata/plugins/li-integer">}})
- [`li-category`]({{< ref "/reference/document/metadata/plugins/li-category">}})
- [`li-document-reference`]({{< ref "/reference/document/metadata/plugins/li-document-reference">}}) {{< added-in "release-2023-09" >}}
  - only supported for `minimal` style
  - shows a max of 1000 filter options
- [`li-document-references`]({{< ref "/reference/document/metadata/plugins/li-document-references">}}) {{< added-in "release-2023-09" >}}
  - only supported for `minimal` style
  - shows a max of 1000 filter options
- [`li-enum`]({{< ref "/reference/document/metadata/plugins/li-enum">}}) {{< added-in "release-2023-09" >}}
  - shows a max of 1000 filter options
- [`li-text`]({{< ref "/reference/document/metadata/plugins/li-text">}}) {{< added-in "release-2023-09" >}}
  - only supported if plugin has a `dataProvider`
  - shows a max of 1000 filter options
- [`li-string-list`]({{< ref "/reference/document/metadata/plugins/li-string-list">}}) {{< added-in "release-2023-09" >}}
  - shows a max of 1000 filter options
- [`li-imatrics-nlp-tags`]({{< ref "/reference/document/metadata/plugins/li-imatrics-nlp-tags">}}) {{< added-in "release-2024-05" >}}
- [`li-retresco`]({{< ref "/reference/document/metadata/plugins/li-retresco">}}) {{< added-in "release-2024-05" >}}
  - To enable the Retresco display filter, modifications on your Retresco TMS instance might be necessary. For more details, please contact your Livingdocs Customer Solutions representative.

A Metadata field is active as soon as you have set `config: { index: true }` for a [Metadata property]({{< ref "/reference/document/metadata/#configuration" >}}) and after reindexing all documents with `npx livingdocs-server elasticsearch-index --handle=li-documents -y`.
