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
  creationFlow: true
  pushMessage: false
  usageLog: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: true
  webhookConditions: false
description: Stores the dates when a document needs to be ready for distribution, for example on the website, in a newsletter or in print. A document can have several distribution dates. The dates are used by the Planning Board and the Planning Calendar.
defaultUI: Metadata form, Table Dashboard Cell, and creation, copy and transform dialogs
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
        config: {
          required: false,                              // optional, default: false
          requiredErrorMessage: 'Provide a date'        // optional
        },
        ui: {
          label: 'Distribution Dates',                  // optional
          config: {
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

## Planning Calendar

Distribution dates can also be planned on a calendar. See [Planning Calendar]({{< ref "/guides/editor/planning-calendar" >}}).

## Creation, Copy and Transform Flows

{{< added-in "release-2027-01" block >}}

Editors can set distribution dates in the dialog that creates, copies or transforms a document, so a document is created and planned in one step. The dates count like any other distribution date, so the document shows up on the Planning Board and the Planning Calendar right away.

Add the plugin to the `paramsSchema` of a [document creation flow]({{< ref "/guides/editor/document-creation-flow" >}}), [copy flow]({{< ref "/guides/editor/document-copy-flows" >}}) or [transform flow]({{< ref "/guides/editor/document-transform-flows" >}}). The dialog shows the same date list as the metadata form, including the Today, Tomorrow and Other date quick actions.

```js
// projectConfig.editorSettings
documentCreationFlows: [
  {
    handle: 'planArticle',
    createFunction: 'planArticle',
    paramsSchema: [
      {handle: 'workingTitle', type: 'li-text', config: {required: true}},
      {
        handle: 'distributionDates',
        type: 'li-distribution-dates',
        ui: {
          config: {
            precision: 'date' // use the same precision as the content type's property
          }
        }
      }
    ]
  }
]
```

The dates reach your function as `params.distributionDates`. Livingdocs doesn't copy params into the metadata, so your create, copy or transform function writes them to the content type's `li-distribution-dates` property:

```js
liServer.registerCreateFunction({
  handle: 'planArticle',
  async create({projectConfig, params = {}}) {
    return {
      title: params.workingTitle,
      contentType: 'regular',
      metadata: {
        ...projectConfig.contentTypesByHandle.regular?.defaultMetadata,
        distributionDates: params.distributionDates
      }
    }
  }
})
```

- The default create function `liDefaultCreateFunction` ignores params. Register your own create function to store the dates.
- The target content type needs an `li-distribution-dates` property with the handle your function writes to. Otherwise the dates are not stored.
- Copy and transform dialogs don't show the dates the document already has. The field starts empty unless the flow sets `defaultParams`. If your copy or transform function writes the param to the property, it replaces the existing dates, so merge them in your function if you want to keep them.
- The flow's `defaultParams` can prefill the field with fixed dates. Dynamic values such as today are not supported.
- Use the same `precision` as the content type's property, so the dialog and the metadata form store dates the same way.
- With `config.required: true`, editors can't submit the dialog without a date. The server doesn't check this when the document is created.
