---
title: Base Filter
---

{{< info >}}
A version of this document for releases prior to {{< release "release-2023-07" >}} is available [here]({{< ref "/customising/advanced/editor-configuration/base-filter-legacy" >}}).
{{< /info >}}

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

Learn more about the filter queries format [here]({{< ref "/reference/public-api/publications/search-filters" >}})

## Filter Query Examples

This are all available `queryTypes` which can be used to form a filter query.

```js
// contentType {key: 'string', term: string || array}
{key: 'contentType', term: 'regular'}

// not contentType {key: 'string', term: string || array}
{not: {key: 'contentType', term: 'regular'}}

// documentType {key: 'string', term: string || array}
{key: 'documentType', term: 'article'}
{key: 'documentType', term: ['article', 'page']}

// language
{key: 'language', term: 'de'}

// ownerId
{key: 'ownerId', term: 1}

// dateRange
{key: 'updatedAt', range: {gte: '2023-06-21T07:55:00.000Z', lte: '2023-06-23T07:55:00.000Z'}}

// metadata
{key: 'metadata.foo', term: 'bar'}
{key: 'metadata.foo', exists: true}
{key: 'metadata.teaserImage.mediaId', exists: true}
{
  key: 'metadata.publicationDate',
  range: {gte: '2023-06-21T07:55:00.000Z', lte: '2023-06-23T07:55:00.000Z'}
}

// tasks
{key: 'metadata.proofreading.state', taskValue: 'pending'}
{key: 'metadata.review.state', taskValue: 'done'}

// reference
{key: 'references', term: ['document:123']}
{key: 'references', term: ['image:W8GRbmju4grG']}
{key: 'references', term: ['file:A7JRa4mS3xBQ']}
{key: 'references', term: ['video:P2rSblad3aUS']}

// state for the mediaLibrary
{key: 'state', term: 'active'}
{key: 'state', term: 'revoked'}

// userInTeam ({{< added-in "release-2023-03" >}})
{key: 'metadata.myTeamHandle.activeUsers.id', termPattern: '{{ userId }}'}

// term variables ({{< added-in "release-2025-01" >}})
// only supported by li-teaser and li-document-search
{key: 'metadata.category.id', termVariable: 'metadata.category.id'}
```

### Example - Filter by metadata with key/value

```js
baseFilters: [{key: 'metadata.foo', term: 'bar'}]
```

This would filter for only documents that have the value `bar` in the metadata field `foo`. You have to make sure that `foo` is an indexed metadata field.

### Example - Filter by metadata with objects

```js
defaultQueries: [{key: 'metadata.author.reference.id', term: 42}]
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

### Example - Filter by task

```js
defaultQueries: [{key: 'metadata.proofreading.state', term: 'requested'}]
```

This would filter for only documents that have had a successful proofreading. The core only exposes the `proofreading` task, but you can define your own custom tasks. The values are `todo`, `doing`, `done` for the 3 states that a task can have.

### Example - Filter by metadata with dataType keyword for mediaIndex

```js
baseFilters: [{key: 'metadata.transformed', term: true}]
```

This would filter for only transformed assets.

### Example - Filter by document statistics

```js
baseFilters: [
  {
    and: [
      {key: 'statistics.componentCount.image', exists: false},
      {
        or: [
          {key: 'statistics.characterCount', range: {gte: 1000}},
          {key: 'statistics.componentCount.paragraph', range: {gte: 3}}
        ]
      }
    ]
  }
]
```

This would filter for documents without an image, but with more than 2 components of name `paragraph` or +1000 characters.
To query for documents without a component, use the `exists: false` notation instead of a `range`, since components
with zero-counts are not indexed.
