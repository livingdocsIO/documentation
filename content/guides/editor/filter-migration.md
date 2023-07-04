---
title: Legacy Base Filter & Display Filter Migration
description: Upgrade to the latest filter syntax
---


### Custom Display Filters Migration
```diff
{
-  id: 'published',
   label: 'Published Documents',
-  type: 'documentState',
-  value: 'published'
   // Migrate `type/value` combination to new `filter` attribute
   // Please consult the list below
+  filter: {key: 'lastPublicationId', exists: true}
}
```

### Custom Filters

```diff
{
-  id: 'published',
   label: 'Published Documents',
-  type: 'customFilter',
-  value: {foo: 'bar'}
   // Migrate `customFilter` value to new `context` attribute
+  context: {foo: 'bar'}
}
```


### Sorting


```diff
{
-  id: 'sortByUpdated',
   label: 'Recently updated documents first',
-  type: 'sortBy',
-  value: '-updated_at'
   // Migrate `sortBy` value to new `sort` attribute
+  sort: '-updated_at'
}
```



### Base Filter Migration

fadsasd



## Sorting

Example dashboard config with sorting:
```diff

{
  type: 'tableDashboard',
  handle: 'gallery-dashboard',
  pageTitle: 'Gallery Board',
  // ...
-  baseFilters: [
-    {type: 'contentType', value: 'gallery'},
-    {type: 'sortBy', value: '-updated_at'}
-  ],
+  sort: '-updated_at',
+  baseFilters: [
+    {key: 'contentType', term: 'gallery'}
+  ]
}
````



### Legacy Base Filter & Display Filter Migration

The filter configuration has changed from `type` and `value` properties to `key` and [query expressions]({{< ref "/reference/public-api/publications/search#query-expressions" >}}). The current supported query expressions are `term`, `range` and `exists`.

A simple legacy filter might look like this:
```js
{type: 'contentType', value: 'regular'}
```
The new filter should look like this:
```js
{key: 'contentType', term: 'regular'}
```
Below you will find more specific example of how to migrate different filters.

## Simple Key / Value Filters

As mentioned above, these are straight forward to migrate. The `type` property should be renamed to `key`, and the `value` property should be renamed to `term`.

The values should be of the correct type, so `string` for `'contentType'`, `'documentType'`, `'mediaType'`, `'reference'`, and `integer` for `id`, `channelId`, `ownerId`, `createdBy`. An array of values can also be passed, or you can use a `range` query expression, or `exists` if you want to know if the property has been indexed.


## Specific Filters

### metadata

Metadata queries will vary based on the desired query expression and the value type.

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

For metadata values which are stored as objects you must always use a nested property to check if it exists.
For example, if you would like to check if a task has been defined you should use `{key: 'metadata.myTaskHandle.state', exists: true}`, because `{key: 'metadata.myTaskHandle', exists: true}` will always return `false` because the object itself is not indexed, only the individual properties within it.

#### Date Range / Range

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

The `optional: true` parameter requires an OR filter to check for the existance of the value:

Before:
```js
{type: 'metadata', key: 'myMetadataHandle', dateFilter: {gte: '2023-07-04T00:00:00.000Z', lt: '2023-07-05T00:00:00.000Z', optional: true}}
{type: 'metadata', key: 'myMetadataHandle', rangeFilter: {gte: '2023-07-04T00:00:00.000Z', lt: '2023-07-05T00:00:00.000Z', optional: true}}
```
After:
```js
{or: [
  {key: 'metadata.myMetadataHandle', exists: false},
  {key: 'metadata.myMetadataHandle', range: {gte: '2023-07-04T00:00:00.000Z', lt: '2023-07-05T00:00:00.000Z'}}
]}
{or: [
  {key: 'metadata.myMetadataHandle', exists: false},
  {key: 'metadata.myMetadataHandle', range: {gte: '2023-07-04T00:00:00.000Z', lt: '2023-07-05T00:00:00.000Z'}}
]}
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

### state

Before:
```js
{type: 'state', value: 'revoked'}
{type: 'state', value: 'revoked,archived'}
{type: 'state', value: ['revoked', 'archived']}
```
After:
```js
{key: 'state', term: 'revoked'}
{key: 'state', term: ['revoked', 'archived']}
{key: 'state', term: ['revoked', 'archived']}
```

A state value of `'active'` requires an OR filter to handle unset states, as the default state is active, as well as those set to `'active'`:

Before:
```js
{type: 'state', value: 'active'}
{type: 'state', value: ['active', 'revoked']}
```
After:
```js
{or: [{key: 'state', exists: false}, {key: 'state', term: 'active'}]}
{or: [{key: 'state', exists: false}, {key: 'state', term: ['active', 'revoked']}]}
```

### dateRange

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

Before:
```js
{type: 'documentState', value: 'published'}
{type: 'documentState', value: 'unpublished'}
{type: 'documentState', value: 'draft'}
{type: 'documentState', value: 'publishedWithDraft'}
```
After:
```js
{key: 'lastPublicationId', exists: true}
{key: 'lastPublicationId', exists: false}
{key: 'hasDraft', term: true}
{and: [{key: 'hasDraft', term: true}, {key: 'lastPublicationId', exists: true}]}
```

### userInTeam

Before:
```js
{type: 'userInTeam', key: 'myTeamHandle'}
```
After:
```js
{key: 'metadata.myTeamHandle.activeUsers.id', termPattern: '{{ userId }}'}
```

### buyInNotExpired

Before:
```js
{type: 'buyInNotExpired', key: 'myBuyInHandle'}
```
After:
```js
{key: 'metadata.myBuyInHandle.workflow.expiryDate', range: {gte: 'now/d'}}
```

### task

Before:
```js
{type: 'task', taskName: 'myTaskHandle', taskValue: 'requested'}
{type: 'task', taskName: 'myTaskHandle', taskValue: 'accepted'}
{type: 'task', taskName: 'myTaskHandle', taskValue: 'completed'}
```
After:
```js
{key: `metadata.myTaskHandle.state`, term: 'requested'}
{key: `metadata.myTaskHandle.state`, term: 'accepted'}
{key: `metadata.myTaskHandle.state`, term: 'completed'}
```

