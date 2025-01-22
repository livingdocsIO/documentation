---
title: Publication Index
description: How to configure and use the publication index of Livingdocs.
weight: 1
---

{{< info >}}
A version of this document for releases prior to {{< release "release-2023-07" >}} is available
[here]({{< ref "/guides/search/publication-index-legacy" >}}).
{{< /info >}}

The publication index is an Elasticsearch index that allows developers to do queries in order to retrieve published documents from Livingdocs.

There are two parts to the feature:

- the indexing side that defines how values are indexed to the publication index
- the query side that defines the syntax for querying

## Indexing

### Sort Date

The `sortDate` defines the date that is used to sort results in a publication search query. By default it's just the `visiblePublicationDate` timestamp of the publication. The configuration allows you to choose a separate metadata property from your metadata set that is used. **The property must be a date type.** A common use case is to take a metadata property that defines a first publication date (first time of publish). The definition of the custom indexing is done in the project config at `contentTypes['your-content-type'].publicationIndex`:

```js
publicationIndex: {
  sortDate: {
    fieldName: 'publishDate',
    type: 'li-datetime'
  }
}
```

### Metadata Plugins

Details of the core metadata plugins, along with their built-in indexing capabilities, can be found in the [Metadata Plugin List]({{< ref "/reference/document/metadata/plugins" >}}).

To be able to filter documents using a metadata value you must ensure the metadata plugin supports indexing. You also need to enable indexing on the metadata property defined in the content type config:

```js
{
  handle: 'regular',
  documentType: 'article',
  // ...
  metadata: [
    // ...
    {
      handle: 'priority',
      type: 'li-integer',
      config: {
        index: true
      }
    }
  ]
}
```

You will need to re-index your existing documents to populate the values in Elasticsearch after changing the content type config:

```
npx livingdocs-server elasticsearch-index --handle=li-publications
```

## Searching

After setting up your publication index you can use either the public API or the core's search API (enterprise only) to query for published documents.

### Public API

The documentation for the public API can be found here: [Public API Publications Search]({{< ref "reference/public-api/publications/search" >}}). It contains details about the query DSL for filtering publications by metadata values. Examples can also be found below.

```js
const response = await fetch(`api/v1/publications/search?contentTypes=regular,author`)
const results = await response.json()
```

The query allows the following entries:

- `search`, string used for full-text search
- `contentTypes`, string of comma separated content type handles (OR concatenated)
- `categories`, string of comma separated category ids (OR concatenated)
- `languages`, string of comma separated language handles (OR concatenated)
- `languageGroupId`, string of a single language group
- `filters`, JSON string (see [Filters]({{< ref "#filters" >}}))
- `sort`, string of comma separated fields to sort by (see [Sort]({{< ref "#sort" >}}))
- `fields`, string of comma separated fields to include for results (see [Fields]({{< ref "#fields" >}}))
- `limit`, integer how many results to get, default 10
- `offset`, integer from which position to count results, useful for pagination, default 0

### Server Feature

To query publications you can also use the `searchPublications` method on the `li-public-api` feature. In this case you provide an object containing query parameters very similar to those listed above, but you will always need to provide a `projectId` value. More info can be found [here]({{< ref "/customising/server/server-api/public-api" >}})

```js
module.exports = function (feature, server) {
  const publicApi = server.features.api('li-public-api')
  const results = await publicApi.searchPublications({
    projectId: 1,
    contentTypes: ['regular', 'author']
  })
}
```

### Filters:

Valid filter fields are:

- `documentId`
- `contentType`
- `firstPublicationDate`
- `lastPublicationDate`
- `significantPublicationDate`
- `visiblePublicationDate`
- `metadata.*`

The index type of each field will determine which query capabilities are supported:

| Type    |     Term      |     Range     |    Exists     |     Sort      |
| :------ | :-----------: | :-----------: | :-----------: | :-----------: |
| keyword | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| integer | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| float   | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| double  | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| long    | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| date    | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| boolean | {{< check >}} | {{< cross >}} | {{< check >}} | {{< cross >}} |

An example of how the logical operators and query expressions can be combined to create a more complex query:

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
          key: 'metadata.author',
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

// Public API server feature
const publicApi = server.features.api('li-public-api')
const results = await publicApi.searchPublications({projectId: 1, filters})
```

For further details on how to define filters please see the [Public API]({{< ref "/reference/public-api/publications/search#search-filters" >}}) documentation.

### Fields

Valid fields are:

- `id`
- `systemdata`
- `metadata`
- `content`

If `id` is specified then all other fields will be ignored and the results will have the structure `{projectId: 1, documentId: 2}`.
If you require the document id along with other data you will need to include `systemdata` in your query, and it will be defined at `systemdata.documentId`.

The default fields are `['systemdata', 'metadata', 'content']`. Please be aware that by excluding `content`, or other fields that you do not require, you might be able to significantly reduce data transfer and database load.

### Sort

Valid sort fields are:

- `relevance`
- `sortDate`
- `documentId`
- `contentType`
- `firstPublicationDate`
- `lastPublicationDate`
- `significantPublicationDate`
- `visiblePublicationDate`
- `metadata.*`

The dafault sort order is `sortDate` descending (see [Sort Date]({{< ref "#sort-date" >}})), with `documentId` descending used as a fallback when multiple results have exactly the same `sortDate`.

`relevance` will only have an affect if you provide a search term.

Most metadata properties can be used to sort, but not those indexed as `text` or `boolean`.

When a string is used to define the sort order, the order can be reversed by prefixing the property with a `-` (e.g. `-sortDate,documentId`).
If you are calling the server method directly you can provide a string in the same format, but you can also provide an array of strings (e.g. `['-sortDate', 'documentId']`), or an object (e.g. `{sortDate: 'desc'}`), or an array of objects (e.g. `[{sortDate: 'desc'}, {documentId: 'asc'}]`).

Documents which don't have an indexed value will appear at the end of the results.
