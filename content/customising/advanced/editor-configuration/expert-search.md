---
title: Expert Search
---

{{< added-in "release-2026-07" block >}}

The Expert Search display filter (`liExpertSearch`) lets power users filter a dashboard by writing a filter expression as JSON, directly in the search UI. It is a display filter, so it can be enabled on any dashboard that supports `displayFilters`, typically Media Library and table dashboards.

The expression uses the Livingdocs Search Filter DSL. It is validated as you type (an invalid expression is highlighted), can be auto-formatted, and is applied with the Execute button or `Ctrl`/`Cmd`+`Enter`. The resulting filter is merged with the dashboard's other active filters.

Any indexed field can be queried. Make sure the metadata properties you filter on are set up as indexed fields, see [Metadata]({{< ref "/reference/document/metadata/#configuration" >}}).

## Configuration

Add `liExpertSearch` to a dashboard's `displayFilters`:

```js
{
  handle: 'myDashboard',
  displayFilters: ['liExpertSearch']
}
```

## Filter Expressions

Expert Search uses the [Search Filters Query DSL]({{< ref "/reference/public-api/publications/search-filters#query-expressions" >}}). Every query expression and logical operator documented there is available, written as JSON with quoted keys and double-quoted strings.

```json
{
  "or": [
    {
      "and": [
        {"key": "metadata.count", "range": {"lte": 2}},
        {"key": "metadata.active", "exists": true},
        {"not": {"key": "metadata.title", "term": "My Title"}}
      ]
    },
    {"key": "metadata.count", "term": 3}
  ]
}
```

A top-level array is treated as an AND.

### Searching nested fields

{{< added-in "release-2026-09" block >}}

The [`nested`]({{< ref "/reference/public-api/publications/search-filters#nested" >}}) operator matches a list of sub-objects, such as a media library entry's usage log, where several conditions must hold on the same entry.

```json
{
  "key": "usageLog",
  "nested": [
    {"key": "purpose", "term": "print"},
    {"key": "publicationDate", "range": {"gte": "now-2y"}}
  ]
}
```

Which usage log fields are indexed, and how to make per-purpose `params` searchable, is described in the [Usage Log]({{< ref "/guides/media-library/media-library-setup/#searching-by-usage-log-details" >}}) guide.
