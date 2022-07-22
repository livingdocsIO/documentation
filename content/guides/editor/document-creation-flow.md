---
title: Document Creation Flow
description: Define a Document Creation Flow
weight: 14
---

{{< added-in release-2022-09 >}}

## Motivation

With a Document Creation Flow you can configure how a document gets created:

- Define a create button (only supported for Table Dashboards)
- Define fields on the document creation modal
- Register a create function to parse the data which creates the document

## Goal

With this walkthrough we show you how to define a simple Document Creation Flow.


## Guide

### Add a Document Creation Flow to the ProjectConfig

```js
projectConfig.editorSettings.dashboards: [
{
    // the first part of the dashboard config ist just for completeness
    handle: 'articlesSimple',
    type: 'tableDashboard',
    pageTitle: 'Articles',
    baseFilters: [
      {type: 'documentType', value: 'article'}
    ],
    displayFilters: ['timeRange'],
    sort: '-updated_at',
    columns: [
      {
        label: 'Article',
        minWidth: 375,
        growFactor: 2,
        priority: 1,
        componentName: 'liTableDashboardCellMain',
        componentOptions: {
          image: {
            metadataPropertyName: 'teaserImage'
          },
          clampTitle: false,
          showContentType: true
        }
      }
    ],
    // ... here is the interesting part
    // define a create flow for the dashboard
    documentCreationFlows: [
      {
        handle: 'breakingNews',
        // register a createFunction with documentApi.registerCreateFunction (later in the guide)
        createFunction: 'breakingNews',
        createButtonLabel: 'Create Breaking News',

        // shows title and urgency field in the create modal
        // the config is the same as for metadata plugins
        paramsSchema: [
          {handle: 'title', type: 'li-text'},
          {handle: 'urgency', type: 'li-number'},
        ],

        // values passed to paramsSchema fields as initial value
        defaultParams: {
          urgency: 5
        },

        // additional info for your createFunction
        context: {
          projectType: 'flex'
        }
      }
    ]
  }
]
```

When you go to the dashboard in the editor, you will see a "Create Breaking News" button.

### Register createFunction

The first step defined a creation flow with flexible data (`paramsSchema`, `context`). Now you need to register a `createFunction` to define how your data gets parsed and how the document will be created.

Let's register the createFunction: `breakingNews`, the one you defined in the dashboard config before. We have a few goals with our function:
- apply Project Config defaultMetadata to metadata
- apply the custom fields from the editor create modal to the metadata (title + urgency)
- apply context data to metadata (projectType)

```js
liServer.registerInitializedHook(async () => {
  const documentApi = liServer.features.api('li-documents').document

  documentApi.registerCreateFunction({
    handle: 'breakingNews',

    // params and context are coming from Document Creation Flow
    // and can differ from flow to flow
    async create ({projectConfig, userId, params = {}, context = {}}) {

      // you should validate params/context and you can throw an error
      if (!context.projectType) throw new Error("context 'projectType' is required")
      const contentType = context.projectType === 'flex'
        ? 'flex'
        : 'regular'

      const title = params.title || `Untitled`

      const metadata = {
        ...projectConfig.contentTypesByHandle[contentType]?.defaultMetadata,
        title,
        urgency: params.urgency,
        projectType: context.projectType
      }

      // response format of the registered create function
      return {
        // mandatory properties of return object
        title,
        contentType,
        // optional properties of return object
        content: [],                                  // default: []
        metadata,                                     // default: {}
        designVersion: '1.0.0',                       // default: project designVersion
        metadataSource: {},                           // default: {}
        translations: []                              // default: []
      }
    }
  })
})
```
