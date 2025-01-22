---
title: Base Filter (Legacy)
hideSectionTeaser: true
excludeFromSearch: true
---

{{< warning >}}
A new version of this document, for {{< release "release-2023-07" >}} and above, is available [here]({{< ref "/customising/advanced/editor-configuration/base-filter" >}}).
{{< /warning >}}

Base filters are used to filter the resultset on a dashboard or a search modal.
They can be visible (`displayFilter`) or invisible (all other types).
Base filters are used in different places and have a common format to construct the filter query.

## Filter Query Format

There are different places, where one can define base filter:

- `baseFilters` (used in [custom dashboards]({{< ref "/reference/project-config/editor-settings" >}}))
- `defaultQueries` (used in [default dashboards]({{< ref "/customising/advanced/editor-configuration/default-dashboard-filter#filter-config-properties-see-example" >}}))
- `emptySearchQueries` (used in [default dashboards]({{< ref "/customising/advanced/editor-configuration/default-dashboard-filter#filter-config-properties-see-example" >}}))

At all this places, one can use the same query format, e.g.

```js
{type: 'documentType', value: 'article'}
```

The query format always has a `type` and most of the time a `value`. You can see some examples in the next section.

## Filter Query Types

This are all available `queryTypes` which can be used to form a filter query.

```js
// documentType {type: 'string', value: string || array}
{type: 'documentType', value: 'article'}
{type: 'documentType', value: ['article', 'page']}

// locale
{type: 'locale', value: 'de-DE'}

// channelHandle
{type: 'channelHandle', value: 'web'}

// contentType {type: 'string', value: string || array}
{type: 'contentType', value: 'regular'}
{type: 'contentType', value: ['regular', 'news']}

// notContentType{type: 'string', value: string || array}
{type: 'notContentType', value: 'regular'}
{type: 'notContentType', value: ['regular', 'news']}

// ownerId
{type: 'ownerId', value: 1}

// channelId
{type: 'channelId', value: 2}

// dateRange
{type: 'dateRange', key: 'created_at', from: '2016-01-23T15:00', to: '2015-04-05T20:00'}

// documentState (value: 'published', 'unpublished', 'deleted', 'draft', 'publishedWithDraft')
{type: 'documentState', value: 'published'}

// metadata (multiple key, value combinations possible)
{type: 'metadata', key: 'foo', value: 'bar'}
{type: 'metadata', key: 'foo', value: {exists: true}}
{type: 'metadata', key: 'foo.bar.id', value: 42}
{type: 'metadata', key: 'foo.bar.id', value: [42, 43]}
{
  type: 'metadata',
  key: 'publicationDate',
  value: {
    dateFilter: {
      from: '2015-04-05T20:00',
      to: '2016-01-23T15:00'
    }
  }
}

// task (multiple taskName and taskValue combinations possible)
// taskValue: 'todo', 'doing', 'done'
{type: 'task', taskName: 'proofreading', taskValue: 'pending'},
{type: 'task', taskName: 'review', taskValue: 'done'}

// sortBy (multiple values possible)
{type: 'sortBy', value: '-created_at'},
{type: 'sortBy', value: 'title'}
{type: 'sortBy', value: 'metadata.department'}

// reference
{type: 'reference', value: 'document:123'}
{type: 'reference', value: 'image:W8GRbmju4grG'}
{type: 'reference', value: 'file:A7JRa4mS3xBQ'}
{type: 'reference', value: 'video:P2rSblad3aUS'}

// state for the mediaLibrary
{type: 'state', value: 'active'}
{type: 'state', value: 'revoked'}

// userInTeam ({{< added-in "release-2023-03" >}})
{type: 'userInTeam', key: 'myTeamMetadataPropertyName'}
```

## Filter Query Examples

#### Example 1 - filter by documentType

```js
baseFilters: [
  {type: 'documentType', value: 'article'}
]
```

This would reduce the search to only articles (no pages).

#### Example 2 - filter by metadata with key/value

```js
baseFilters: [
  {type: 'metadata', key: 'foo', value: 'bar'}
]
```

This would filter for only documents that have the value `bar` in the metadata field `foo`. You have to make sure that `foo` is an indexed metadata field.

#### Example 3 - filter by metadata with objects

```js
defaultQueries: [
  {type: 'metadata', key: 'author.reference.id', value: 42}
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

This example would filter documents that have the value `42` in the metadata field `author` with propreties `reference.id`. You have to make sure that `author` is an indexed metadata field.

#### Example 4 - filter by task

```
defaultQueries: [
  {type: 'task', taskName: 'proofreading', taskValue: 'done'}
]
```

This would filter for only documents that have had a successful proofreading. The core only exposes the `proofreading` task, but you can define your own custom tasks. The values are `todo`, `doing`, `done` for the 3 states that a task can have.

#### Example 5 - filter by metadata with dataType keyword for mediaIndex

```js
baseFilters: [
  {type: 'metadata', key: 'transformed', value: true, dataType: 'boolean'}
]
```

This would filter for only transformed assets.
