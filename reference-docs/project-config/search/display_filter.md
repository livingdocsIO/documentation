# Display Filter

## Core Display Filter

Possible values for `displayFilters` are:
- `documentState`, unpublished, published, not yet published, my articles, needs proofreading, currently proofreading
- `timeRange`, filter the search results in time ranges such as last 24 hours
- `liDateTimeRange`, filter the search results in time ranges (quick filter + from/to range)
```js
// simple config - filters by updatedAt
displayFilters: ['liDateTimeRange']

// custom config
//   documentPropertyName 'createdAt'/'updatedAt'
//   metadataPropertyName -> filter by any of your metadata date fields
displayFilters: [{filterName: 'liDateTimeRange', config: {documentPropertyName: 'createdAt'}}]
displayFilters: [{filterName: 'liDateTimeRange', config: {metadataPropertyName: 'publicationDate'}}]
```
- `sortBy`: `relevance` (default), `creation_date`, `updated_at`, `alphabetical`
- `language`: uses the project configuration for [available languages](../settings.md) to offer a select box to filter for languages (requires multi-language feature to be enabled)
- `contentType`: uses the content-types configuration in your server to filter for different content-types, e.g. galleries or regular articles.
- `category`: uses the channel configuration for categories to offer a multi-select box to filter for categories (OR filter)
- Enterprise-only: `channels` give the user a dropdown to filter by a specific channel

## Custom Display Filter

One can also register it's own display filter. Look into this [guide](../../../guides/add_custom_display_filter.md) for more information.