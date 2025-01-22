---
title: Display Filter & Base Filter Migration
description: How to upgrade to the latest filter syntax
---

{{< added-in "release-2023-07" block >}}

## Display Filter Migration

The structure of display filters has changed. Instead of the typical `type` and `value` properties alongside the `label` there are now three distinct properties that can be used to change the filter functionality. The main one is the `filter` property, which is an object containing the filter query using the new [Search Filters Query DSL]({{< ref "/reference/public-api/publications/search#search-filters" >}}). There is also a `context` property which can be used by [Custom Filters]({{< ref "#custom-filters" >}}). Finally, there is a `sort` property, which is a string that replaces the `'sortBy'` filter type.

### Type/Value Filters

The `type/value` combination should be migrated to new `filter` attribute:

```diff
  {
-   id: 'published',
    label: 'Published Documents',
-   type: 'documentState',
-   value: 'published'
+   filter: {key: 'lastPublicationId', exists: true}
  }
```

For additional filter examples please see the [Migration Examples]({{< ref "#migration-examples" >}}) section below.

### Custom Filters

Migrate the `customFilter` value to the new `context` attribute:

```diff
  {
-   id: 'published',
    label: 'My Custom Filter',
-   type: 'customFilter',
-   value: {foo: 'bar'}
+   context: {foo: 'bar'}
  }
```

### SortBy Filter

Migrate the `sortBy` value to the new `sort` attribute:

```diff
  {
-   id: 'sortByUpdated',
    label: 'Recently updated documents first',
-   type: 'sortBy',
-   value: '-updatedAt'
+   sort: '-updatedAt'
  }
```

## Base Filter Migration

Base Filters have not changed as significantly as Display Filters, as they are equivalent to the `filters` property within the Display Filter options. The same [Search Filters Query DSL]({{< ref "/reference/public-api/publications/search#search-filters" >}}) is used within the object.

### Sorting

The `'sortBy'` filter should be replaced with a `sort` property on the root of the dashboard config:

```diff
  {
    type: 'tableDashboard',
    handle: 'gallery-dashboard',
    pageTitle: 'Gallery Board',
    // ...
-   baseFilters: [
-     {type: 'contentType', value: 'gallery'},
-     {type: 'sortBy', value: '-updatedAt'}
-   ],
+   sort: '-updatedAt',
+   baseFilters: [
+     {key: 'contentType', term: 'gallery'}
+   ]
  }
```

### Filtering

The filter configuration has changed from `type` and `value` properties to `key` and [query expressions]({{< ref "/reference/public-api/publications/search#query-expressions" >}}). The current supported query expressions are `term`, `range` and `exists`.

A simple legacy filter might look like this:

```js
{type: 'contentType', value: 'regular'}
```

The new filter should look like this:

```js
{key: 'contentType', term: 'regular'}
```

Below you will find specific examples of how to migrate different legacy filters. These objects can be used for `baseFilters`, the `displayFilters` `filters` property, and for [Public API Search Filters]({{< ref "/reference/public-api/publications/search#search-filters" >}}).

## Migration Examples

### Simple Key/Value Filters

As mentioned above, these are straightforward to migrate. The `type` property should be renamed to `key`, and the `value` property should be renamed to `term`.

The values should be of the correct type, so `string` for `'contentType'`, `'documentType'`, `'mediaType'`, `'reference'`, and `integer` for `id`, `channelId`, `ownerId`, `createdBy`. An array of values can also be passed, or you can use a `range` query expression, or `exists` if you want to know if the property has been indexed.

### metadata

Metadata queries will vary based on the desired query expression and the value type.

For metadata values which are stored as objects you must always use a nested property to check if it exists.
For example, if you would like to check if a task has been defined you should use `{key: 'metadata.myTaskHandle.state', exists: true}`. Using `{key: 'metadata.myTaskHandle', exists: true}` will throw an error because the field `'metadata.myTaskHandle'` is not indexed, only the individual properties within it such as `'metadata.myTaskHandle.state'`.

#### References

References are stored as keywords, so you can use any of the query expressions listed below. The important thing to remember is to query the nested reference property where the id is stored, and not the top-level metadata handle.

```js
{key: 'metadata.myDocumentReference.reference.id', term: 1}
{key: 'metadata.myDocumentReferences.references.id', term: 1}
{key: 'metadata.myCategory.id', term: 1}
{key: 'metadata.myVideoReference.reference.id', term: ['abc123', 'def456']}
```

#### Value / Term

For standard term queries you should provide the correct value type, depending on the indexing config of the metadata plugin. You can also provide an array of values.

Before:

```js
{type: 'metadata', key: 'myMetadataHandle', value: 'myValue'}
{type: 'metadata', key: 'myMetadataHandle', value: 1}
{type: 'metadata', key: 'myMetadataHandle', value: ['myFirstValue', 'mySecondValue']}
```

After:

```js
{key: 'metadata.myMetadataHandle', term: 'myValue'}
{key: 'metadata.myMetadataHandle', term: 1}
{key: 'metadata.myMetadataHandle', term: ['myFirstValue', 'mySecondValue']}
```

#### Exists

Previously there was support for `exists` and `value.exists` properties, but this is now just the top-level `exists`, along with the `key`:

Before:

```js
{type: 'metadata', key: 'myMetadataHandle', exists: true}
{type: 'metadata', key: 'myMetadataHandle', value: {exists: false}}
```

After:

```js
{key: 'metadata.myMetadataHandle', exists: true}
{key: 'metadata.myMetadataHandle', exists: false}
```

#### Date Range / Range

The `dateFilter` and `rangeFilter` properties have been replaced by the `range` property. If you're also using `from` and `to` you should replace them with `gte` and `lte`:

Before:

```js
{type: 'metadata', key: 'myMetadataHandle', dateFilter: {from: '2023-07-04T00:00:00.000Z', to: '2023-07-04T23:59:59.999Z'}}
{type: 'metadata', key: 'myMetadataHandle', rangeFilter: {from: '2023-07-04T00:00:00.000Z', to: '2023-07-04T23:59:59.999Z'}}
```

After:

```js
{key: 'metadata.myMetadataHandle', range: {gte: '2023-07-04T00:00:00.000Z', lte: '2023-07-04T23:59:59.999Z'}}
{key: 'metadata.myMetadataHandle', range: {gte: '2023-07-04T00:00:00.000Z', lte: '2023-07-04T23:59:59.999Z'}}
```

The `optional: true` parameter requires an OR filter to check for the existence of the value:

Before:

```js
{type: 'metadata', key: 'myMetadataHandle', dateFilter: {gte: '2023-07-04T00:00:00.000Z', lt: '2023-07-05T00:00:00.000Z', optional: true}}
```

After:

```js
{
  or: [
    {key: 'metadata.myMetadataHandle', exists: false},
    {
      key: 'metadata.myMetadataHandle',
      range: {gte: '2023-07-04T00:00:00.000Z', lt: '2023-07-05T00:00:00.000Z'}
    }
  ]
}
```

See [Date Range]({{< ref "#daterange" >}}) for more examples.

### locale

The `'locale'` filter type has been renamed to `'language'`:

Before:

```js
{type: 'locale', value: 'en'}
{type: 'locale', value: ['en', 'de']}
```

After:

```js
{key: 'language', term: 'en'}
{key: 'language', term: ['en', 'de']}
```

### notContentTypeBefore:

For NOT queries you can use the new logical operator in the Filter Query DSL:

Before:

```js
{type: 'notContentType', value: 'author'}
{type: 'notContentType', value: ['author', 'page']}
```

After:

```js
{not: {key: 'contentType', term: 'author'}}
{not: {key: 'contentType', term: ['author','page']}}
```

### dateRange

The new `range` property supports `gte`, `lte`, `gt`, and `lt`:

Before:

```js
{type: 'dateRange', key: 'myDateHandle', gte: '2023-07-04T00:00:00.000Z'}
{type: 'dateRange', key: 'myDateHandle', gte: '2023-07-04T00:00:00.000Z', lte: '2023-07-04T23:59:59.999Z'}
{type: 'dateRange', key: 'myDateHandle', gt: '2023-07-03T23:59:59.999Z', lt: '2023-07-05T00:00:00.000Z'}
{type: 'dateRange', key: 'myDateHandle', gte: '2023-07-04T00:00:00.000Z', lt: '2023-07-05T00:00:00.000Z'}
```

After:

```js
{key: 'myDateHandle', range: {gte: '2023-07-04T00:00:00.000Z'}}
{key: 'myDateHandle', range: {gte: '2023-07-04T00:00:00.000Z'}}
{key: 'myDateHandle', range: {gte: '2023-07-04T00:00:00.000Z', lte: '2023-07-04T23:59:59.999Z'}}
{key: 'myDateHandle', range: {gt: '2023-07-03T23:59:59.999Z', lt: '2023-07-05T00:00:00.000Z'}}
{key: 'myDateHandle', range: {gte: '2023-07-04T00:00:00.000Z', lt: '2023-07-05T00:00:00.000Z'}}
```

Instead of `from` and `to`, `gte` and `lte` should be used:

Before:

```js
{type: 'dateRange', key: 'myDateHandle', from: '2023-07-04T00:00:00.000Z', to: '2023-07-04T23:59:59.999Z'}
```

After:

```js
{key: 'myDateHandle', range: {gte: '2023-07-04T00:00:00.000Z', lte: '2023-07-04T23:59:59.999Z'}}
```

### published

To see if a document is currently published you can check if `lastPublicationId` exists:

Before:

```js
{type: 'published', value: true}
{type: 'published', value: false}
```

After:

```js
{key: 'lastPublicationId', exists: true}
{key: 'lastPublicationId', exists: false}
```

### documentState

The various `'documentState'` filters can be replicated using other available properties:

Before:

```js
{type: 'documentState', value: 'published'}
{type: 'documentState', value: 'unpublished'}
{type: 'documentState', value: 'draft'}
{type: 'documentState', value: 'publishedWithDraft'}
{type: 'documentState', value: 'scheduledOrPublished'}
```

After:

```js
{key: 'lastPublicationId', exists: true}
{key: 'lastPublicationId', exists: false}
{key: 'hasDraft', term: true}
{and: [{key: 'hasDraft', term: true}, {key: 'lastPublicationId', exists: true}]}
{or: [{key: 'lastPublicationId', exists: true}, {key: 'publishControl.publishSchedule.date', exists: true}]},
```

### userInTeam

To recreate the `'userInTeam'` filter type there is a special `termPattern` property which uses the current user's id:

Before:

```js
{type: 'userInTeam', key: 'myTeamHandle'}
```

After:

```js
{key: 'metadata.myTeamHandle.activeUsers.id', termPattern: '{{ userId }}'}
```

### buyInNotExpired

The `'buyInNotExpired'` replacement uses a relative time range:

Before:

```js
{type: 'buyInNotExpired', key: 'myBuyInHandle'}
```

After:

```js
{key: 'metadata.myBuyInHandle.workflow.expiryDate', range: {gte: 'now/d'}}
```

The `/d` rounds to the start of the day. Along with `'now/d'` there is also support for `'now'`, `'now-1d'`, and `'now-1d/d'`.
