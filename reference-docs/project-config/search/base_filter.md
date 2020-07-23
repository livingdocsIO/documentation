# Base Filter

Base filters are used to filter the resultset on a dashboard or a search modal.
They can be visible (`displayFilter`) or invisible (all other types).
Base filters are used in different places and have a common format to construct the filter query.

## Filter Query Format

There are different places, where one can define base filter:
- `baseFilters` (used in [custom dashboards](../editor_settings.md))
- `defaultQueries` (used in [default dashboards](../../editor-configuration/default_dashboard_filter.md#filter-config-properties-see-example))
- `emptySearchQueries` (used in [default dashboards](../../editor-configuration/default_dashboard_filter.md#filter-config-properties-see-example))

At all this places, one can use the same query format, e.g.

```js
{type: 'documentType', value: 'article'}
```

The query format always has a `type` and most of the time a `value`. You can see some examples in the next section.

## Filter Query Types

This are all available `queryTypes` which can be used to form a filter query.

```js
// documentType
{type: 'documentType', value: 'article'}

// locale
{type: 'locale', value: 'de-DE'}

// channelHandle
{type: 'channelHandle', value: 'web'}

// contentType
{type: 'contentType', value: 'regular'}

// notContentType (multiple value combinations possible)
{type: 'notContentType', value: 'regular'}

// ownerId
{type: 'ownerId', value: 1}

// channelId
{type: 'channelId', value: 2}

// dateRange
const from = new Date('2016-01-23T15:00')
const to = new Date('2015-04-05T20:00')
{type: 'dateRange', key: 'created_at', from, to}

// documentState (value: 'published', 'unpublished', 'deleted', 'draft', 'publishedWithDraft')
{type: 'documentState', value: 'published'}

// metadata (multiple key, value combinations possible)
{type: 'metadata', key: 'foo', value: 'bar'}
{type: 'metadata', key: 'foo', value: {exists: true}}
{type: 'metadata', key: 'foo.bar.id', value: 42}

const from = new Date('2016-01-23T15:00')
const to = new Date('2015-04-05T20:00')
{type: 'metadata', key: 'publicationDate', value: {dateFilter: {from, to}}}

// task (multiple taskName and taskValue combinations possible)
// taskValue: 'todo', 'doing', 'done'
{type: 'task', taskName: 'proofreading', taskValue: 'pending'},
{type: 'task', taskName: 'review', taskValue: 'done'}

// sortBy (multiple values possible)
{type: 'sortBy', value: '-created_at'},
{type: 'sortBy', value: 'title'}
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