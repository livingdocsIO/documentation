---
title: Search
weight: 8
menus:
  reference:
    parent: Publications
---

{{< api-example-resource file="search_publications.yaml" >}}

## Search Filters

{{< added-in "release-2023-07" block >}}

Search filters can be used to filter documents using a custom query DSL.

### Filter Fields

| Property                     | Type    |
| :--------------------------- | :------ |
| documentId                   | long    |
| contentType                  | keyword |
| firstPublicationDate         | date    |
| lastPublicationDate          | date    |
| significantPublicationDate   | date    |
| visiblePublicationDate       | date    |
| statistics.characterCount    | integer |
| statistics.componentCount.\* | integer |
| metadata.\*                  | Any     |

Metadata fields must be indexed. Please read the [Publication Index]({{< ref "/guides/search/publication-index" >}}) guide for further information.
Details of the core metadata plugins, along with their built-in indexing capabilities, can be found in the [Metadata Plugin List]({{< ref "/reference/document/metadata/plugins" >}}).

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

### Query Expressions

#### Term

The standard value comparison behaviour.

An exact match is required, although some type coercion may be applied.

```js
{
  key: 'metadata.title',
  term: 'My Title'
}
```

An array can also be provided as the 'term' value, which behaves like an OR operator.

```js
{
  key: 'metadata.language.locale',
  term: ['de', 'fr']
}
```

#### Range

Search within a range.

```js
{
  key: 'metadata.count',
  range: {lte: 2}
}
```

Multiple range terms ('gt', 'gte', 'lt', 'lte') can be combined.

```js
{
  key: 'metadata.count',
  range: {gt: 1, lt: 5}
}
```

#### Exists

Check if a property has been set.

When querying a metadata property with an object value, always use the key of a leaf node (e.g. `metadata.teaserImage.mediaId`), because the parent itself (e.g. `metadata.teaserImage`) is not indexed.

```js
{
  key: 'metadata.teaserImage.mediaId',
  exists: true
}
```

### Logical Operators

The logical operators allow you to group queries, and to change from the default AND behaviour of the top-level array. All logical operator values can be an object, or an array, containing logical operators or query expressions.

#### AND

All conditions must be met for a publication to be included in the results.

```js
{
  and: [
    {key: 'metadata.news', term: true},
    {key: 'metadata.teaserImage.mediaId', exists: false}
  ]
}
```

#### OR

Any condition can be met for a publication to be included in the results.

```js
{
  or: [
    {key: 'metadata.image.mediaId', exists: true},
    {key: 'metadata.teaserImage.mediaId', exists: true}
  ]
}
```

#### NOT

This operator negates the expression contained within.

```js
{
  not: {key: 'metadata.language.locale', term: 'de'}
}
```

To negate multiple conditions nest another logical operator within.

```js
{
  not: {
    or: [
      {key: 'metadata.news', term: false},
      {key: 'metadata.language.locale', term: 'fr'}
    ]
  }
}
```

### Example

An example of how the logical operators and query expressions can be combined to create a more complex query:

```js
const filters = JSON.stringify({
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
})

const response = await fetch(`api/v1/publications/search?filters=${filters}`)
const results = await response.json()
```

## Sort Fields

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

The default sort order is `sortDate` descending (see [Sort Date]({{< ref "/guides/search/publication-index#sort-date" >}})), with `documentId` descending used as a fallback when multiple results have exactly the same `sortDate`.

`relevance` will only have an affect if you provide a search term.

Most metadata properties can be used to sort, but not those indexed as `text` or `boolean` (see [Filter Fields]({{< ref "#filter-fields" >}})).

When a string is used to define the sort order, the order can be reversed by prefixing the property with a `-` (e.g. `-sortDate,documentId`).

Documents which don't have an indexed value will appear at the end of the results.
