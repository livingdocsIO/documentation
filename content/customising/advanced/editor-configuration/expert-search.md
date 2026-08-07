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

## Query Expressions

A query expression targets a single field via its `key` and one of the operators below.

### Term

An exact value match.

```json
{
  "key": "metadata.title",
  "term": "My Title"
}
```

An array behaves like an OR over the values.

```json
{
  "key": "metadata.language.locale",
  "term": ["de", "fr"]
}
```

### Range

Match within a range. Any of `gt`, `gte`, `lt`, `lte` can be combined.

```json
{
  "key": "metadata.count",
  "range": {"gt": 1, "lt": 5}
}
```

### Exists

Check whether a property is set.

```json
{
  "key": "metadata.teaserImage.mediaId",
  "exists": true
}
```

## Logical Operators

Logical operators group expressions and change the default AND behaviour. Each operator takes an object or an array containing expressions or nested operators.

### AND

All conditions must match.

```json
{
  "and": [
    {"key": "metadata.news", "term": true},
    {"key": "metadata.teaserImage.mediaId", "exists": false}
  ]
}
```

### OR

Any condition may match.

```json
{
  "or": [
    {"key": "metadata.image.mediaId", "exists": true},
    {"key": "metadata.teaserImage.mediaId", "exists": true}
  ]
}
```

### NOT

Negate the contained expression.

```json
{
  "not": {"key": "metadata.language.locale", "term": "de"}
}
```

## Nested

{{< added-in "release-2026-09" block >}}

Some fields hold a list of sub-objects, where each entry has its own set of properties. The clearest example is a media library entry's usage log: one image can have many usage log entries, each with its own `purpose`, `state`, `publicationDate`, and per-purpose `params`. A `nested` block matches when a **single** entry satisfies all of its conditions at once, so criteria that belong together are not accidentally spread across different entries.

```json
{
  "key": "usageLog",
  "nested": [
    {"key": "purpose", "term": "print"},
    {"key": "publicationDate", "range": {"gte": "now-2y"}}
  ]
}
```

This matches images that have at least one usage log entry whose purpose is `print` and whose publication date is within the last two years. Sub-keys are resolved relative to the nested field, so `purpose` refers to `usageLog.purpose`.

The `nested` value can also be a logical operator, so entry conditions can be combined with `and`, `or`, or `not`:

```json
{
  "not": {
    "key": "usageLog",
    "nested": [{"key": "purpose", "term": "socialMedia"}]
  }
}
```

This matches images that were never used for the `socialMedia` purpose.

A nested block combines with normal top-level conditions like any other expression:

```json
{
  "and": [
    {"key": "mediaType", "term": "image"},
    {"key": "usageLog", "nested": [
      {"key": "state", "term": "confirmed"},
      {"key": "params.date", "range": {"gte": "2026-01-01", "lte": "2026-12-31"}}
    ]}
  ]
}
```

Which usage log fields are indexed, and how to make per-purpose `params` searchable, is described in the [Usage Log]({{< ref "/guides/media-library/media-library-setup/#searching-by-usage-log-details" >}}) guide.

## Example

Logical operators and query expressions can be combined into more complex queries. A top-level array is treated as an AND.

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
