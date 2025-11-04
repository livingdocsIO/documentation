---
title: li-distribution-dates
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A system metadata plugin to express the demand for a piece of content to be finished and being used at a certain point in time.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: true
description: The plugin is meant to be used on planning boards to express the demand side in editorial planning workflows. Please contact Livingdocs for further details.
defaultUI: Metadata form and Table Dashboard Cell
storageFormat: |
  [
    {
      id: <String>,
      date: <ISO8601 String>,
      done: <Boolean>
    }
  ]
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-distribution-dates',
        ui: {
          config: {
            // {{< added-in "release-2025-11" >}}
            precision: 'datetime' // Options: 'datetime' (default) or 'date'
          }
        }
---

## UI Configuration

### Precision

The `precision` configuration option controls whether editors can set both date and time or only the date.

```js
{
  handle: 'distributionDates',
  type: 'li-distribution-dates',
  ui: {
    config: {
      precision: 'date' // Options: 'datetime' (default) or 'date'
    }
  }
}
```

**Configuration Options:**

- `precision: 'datetime'` (default): Editors can set both date and time
- `precision: 'date'`: Editors only set the date; time is automatically set to 12:00 (noon) for timezone consistency

## Planning Board Config

```js
// Excerpt from project config
module.exports = {
  dashboards: [
    {
      type: 'planningBoard', // automatically adds main column and distribution dates column, has custom sorting and filtering
      handle: 'daily',
      pageTitle: {en: 'Daily Planning', de: 'Tagesplanung'},
      interval: 'day',
      baseFilters: [{key: 'contentType', term: ['regular', 'simple', 'pitch', 'bundle']}],
      displayFilters: [{metadataPropertyName: 'team'}, {metadataPropertyName: 'effort'}],
      additionalMetadataProperties: ['team', 'effort'] // Puts these columns between main column and distribution dates column
    }
  ]
}
```
