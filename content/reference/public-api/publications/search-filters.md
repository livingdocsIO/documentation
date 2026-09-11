---
title: Search Filters
weight: 9
menus:
  public-api:
    parent: Publications
---

Search filters can be used to filter documents using a custom query DSL.

The same DSL is used in several places. The structure is identical everywhere, only the literal syntax differs:

| Where                                                 | Context                                                                                               | Syntax            |
| :---------------------------------------------------- | :---------------------------------------------------------------------------------------------------- | :---------------- |
| `filters` query parameter                             | Public API                                                                                            | JSON string       |
| `baseFilters`, `defaultQueries`, `emptySearchQueries` | [Base Filter]({{< ref "/customising/advanced/editor-configuration/base-filter" >}}) project config     | JavaScript object |
| `filter` property of a display filter                 | [Display Filter]({{< ref "/customising/advanced/editor-configuration/display-filter" >}}) definition   | JavaScript object |
| Expert Search input                                   | [Expert Search]({{< ref "/customising/advanced/editor-configuration/expert-search" >}}) display filter | JSON              |

The examples on this page are written as JavaScript objects. In the Public API and the Expert Search, write the same expressions as JSON, with quoted keys and double-quoted strings.

### Filter Fields

| Property                        | Type    |
| :------------------------------ | :------ |
| documentId                      | long    |
| contentType                     | keyword |
| firstPublicationDate            | date    |
| lastPublicationDate             | date    |
| significantPublicationDate      | date    |
| visiblePublicationDate          | date    |
| statistics.characterCount       | integer |
| statistics.componentCount.\*    | integer |
| metadata.\*                     | Any     |
| publishControl.embargo.enforced | boolean |
| publishControl.embargo.until    | date    |

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

#### Nested

{{< added-in "release-2026-09" block >}}

Some fields hold a list of sub-objects, where each entry carries its own set of properties. A `nested` block matches when a **single** entry satisfies all of its conditions at once, so criteria that belong together are not spread across different entries of the same document.

The clearest example is a media library entry's usage log: one image can have many usage log entries, each with its own `purpose`, `state`, `publicationDate` and per-purpose `params`.

```js
{
  key: 'usageLog',
  nested: [
    {key: 'purpose', term: 'print'},
    {key: 'publicationDate', range: {gte: 'now-2y'}}
  ]
}
```

This matches entries that have at least one usage log entry whose purpose is `print` and whose publication date is within the last two years. Sub-keys are resolved relative to the nested field, so `purpose` means `usageLog.purpose`.

The `nested` value accepts the following forms:

| Value                   | Meaning                    |
| :---------------------- | :------------------------- |
| Array                   | Implicit AND               |
| `{and: [...]}`          | All conditions must match  |
| `{or: [...]}`           | Any condition may match    |
| `{not: {...}}`          | Negates the contained block |
| `{key: ..., term: ...}` | A single condition         |

Because a nested block is an expression like any other, it combines with top-level conditions and can be negated.

```js
{
  and: [
    {key: 'mediaType', term: 'image'},
    {not: {key: 'usageLog', nested: [{key: 'purpose', term: 'socialMedia'}]}}
  ]
}
```

This matches images that were never used for the `socialMedia` purpose.

Which fields of a media library usage log are indexed, and how to make per-purpose `params` searchable, is described in the [Usage Log]({{< ref "/guides/media-library/media-library-setup/#searching-by-usage-log-details" >}}) guide.

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

const response = await fetch(`api/{{< api-version >}}/publications/search?filters=${filters}`)
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
- `publishControl.embargo.until`

The default sort order is `sortDate` descending (see [Sort Date]({{< ref "/guides/search/publication-index#sort-date" >}})), with `documentId` descending used as a fallback when multiple results have exactly the same `sortDate`.

`relevance` will only have an affect if you provide a search term.

Most metadata properties can be used to sort, but not those indexed as `text` or `boolean` (see [Filter Fields]({{< ref "#filter-fields" >}})).

When a string is used to define the sort order, the order can be reversed by prefixing the property with a `-` (e.g. `-sortDate,documentId`).

Documents which don't have an indexed value will appear at the end of the results.
