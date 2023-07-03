---
title: Base Filter
---

Base filters are used to filter the result set on a dashboard or a search modal.
They can be visible (`displayFilter`) or invisible (all other types).
Base filters are used in different places and have a common format to construct the filter query.

## Filter Query Format

There are different places, where one can define base filter:

- `baseFilters` (used in [custom dashboards]({{< ref "/reference/project-config/editor-settings" >}}))
- `defaultQueries` (used in [default dashboards]({{< ref "/customising/advanced/editor-configuration/default-dashboard-filter#filter-config-properties-see-example" >}}))
- `emptySearchQueries` (used in [default dashboards]({{< ref "/customising/advanced/editor-configuration/default-dashboard-filter#filter-config-properties-see-example" >}}))

At all these places, one can use the same query format, e.g.

```js
{key: 'contentType', term: 'regular'}
```

Learn more about the filter queries format [here]({{< ref "/content/reference/public-api/publications/search.md" >}})

## Filter Query Examples

This are all available `queryTypes` which can be used to form a filter query.

```js
// documentType {key: 'string', term: string || array}
{key: 'documentType', term: ['article', 'page', 'data-record']}

// locale
{key: 'locale', term: 'de-DE'}

// contentType {key: 'string', term: string || array}
{key: 'contentType', term: 'regular'}

// not contentType {key: 'string', term: string || array}
{not: {key: 'contentType', term: 'regular'}}

// ownerId
{key: 'ownerId', term: 1}

// dateRange
{key: "updatedAt", range: { gte: "2023-06-21T07:55:00.000Z", lte: "2023-06-23T07:55:00.000Z" }}

// metadata
{key: 'metadata.foo', term: 'bar'}
{key: 'metadata.foo', exists: true}
{key: 'metadata.teaserImage.mediaId', exists: true}
{
  key: 'metadata.publicationDate',
  range: { gte: "2023-06-21T07:55:00.000Z", lte: "2023-06-23T07:55:00.000Z" }
}

// tasks
{key: 'metadata.proofreading.state', taskValue: 'pending'}
{key: 'metadata.review.state', taskValue: 'done'}

// reference
{key: 'references', term: ['document:123']}
{key: 'references', term: ['image:W8GRbmju4grG']}
{key: 'references', term: ['file:A7JRa4mS3xBQ']}
{key: 'references', term: ['video:P2rSblad3aUS']}

// state for the mediaLibrary (added-in release-2022-07)
{key: 'state', term: 'active'}
{key: 'state', term: 'revoked'}
```

### Example - Filter by documentType

```js
baseFilters: [
  {key: 'documentType', term: 'article'}
]
```

This would reduce the search to only articles (no pages).

### Example - Filter by metadata with key/value

```js
baseFilters: [
  {key: 'metadata.foo', term: 'bar'}
]
```

This would filter for only documents that have the value `bar` in the metadata field `foo`. You have to make sure that `foo` is an indexed metadata field.

### Example - Filter by metadata with objects

```js
defaultQueries: [
  {key: 'metadata.author.reference.id', term: 42}
]
```

More complex metadata fields are indexed as an object (instead of key/value). In this case one can filter based on subproperties.

```js
// This is how the metadata field has been indexed into the search index
{
  metadata: {
    author: {
      reference: {
        id: 42
      }
    }
  }
}
```

This example would filter documents that have the value `42` in the metadata field `author` with properties `reference.id`. You have to make sure that `author` is an indexed metadata field.

### Example 4 - filter by task

```js
defaultQueries: [
  { key: "metadata.proofreading.state", term: "requested" }
]
```

This would filter for only documents that have had a successful proofreading. The core only exposes the `proofreading` task, but you can define your own custom tasks. The values are `todo`, `doing`, `done` for the 3 states that a task can have.

### Example 5 - filter by metadata with dataType keyword for mediaIndex

```js
baseFilters: [
  {key: 'metadata.transformed', term: true }
]
```

This would filter for only transformed assets.
