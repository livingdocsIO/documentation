---
title: Document Teasers
description: Configuring Document Teasers including drag and drop support
weight: 3
---

Document Teasers based on [Includes]({{< ref "/reference-docs/document/includes" >}}) provide a simple way to setup teasers and the possiblity to define the UI with a `paramsSchema`. Please see [Article List Teasers]({{< ref "/guides/documents/includes/list-teasers" >}}) for information on setting up lists of document teasers.

With [`release-2022-07`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2022-07.md) the possibility to drag and drop Document Cards onto a document to create Teaser Components was introduced. You need to configure Teaser Components using an Include Service with a `li-document-reference` param to make it work.

This guide assumes that you are familiar with the possibilities to register an Include Service and how to use it in a Component.

## Include Service
Here is an example includes configuration to consider for the editable teaser usecase:
```js
{
  name: 'teaser',
  // this will render a UI in the document editing sidebar to let the User select a document with
  // the contentType `regular` to link to.
  paramsSchema: [
    {
      handle: 'article',
      type: 'li-document-reference',
      ui: {
        label: 'Teaser'
      }
    }
  ],
  rendering: {
    type: 'function',
    preload: true,
    render (params, context) {
      // params.article.reference.id contains the id of the linked document
      // params.article.value contains the Document (because preload: true is configured)
      // you want to render the teaser here. Either as HTML or use the possibility of Embedded Documents
      return params.article.reference.id
    }
  }
}
```

## Teaser Component
```js
{
  name: 'teaser-include',
  label: 'Teaser',
  iconUrl: 'URL to an SVG icon',
  directives: [
    {
      name: 'teaser',
      type: 'include',
      // refer to the include service handle
      service: 'teaser',
      // extend the config for li-reference type input
      paramsSchemaExtension: [
        {
          // refer to the handle of the services paramsSchema property
          name: 'article',
          // configure base filters for the article search modal
          config: {
            // only document of contentType 'regular'
            contentType: ['regular'],
            // only published documents
            published: true
          }
        }
      ]
    }
  ],
  html: `
    <div doc-include="teaser">
      <div>Link an Article</div>
    </div>
  `
}
```


## Document Dashboard in Editor
Now you want to configure a Teaser Dashboard for use in the Editor. For this, you configure an article dashboard first, then you can make use of it in the page ContentType.

Dashboards are configured in the Project Config editorSettings.
```
// Project Config
// ...
editorSettings: {
  dashboards: [
    {
    handle: 'articles-simple',
    type: 'tableDashboard',
    pageTitle: 'Articles',
    baseFilters: [
      {type: 'contentType', value: 'article'}
    ],
    displayFilters: [
      'channels',
      'documentState',
      'contentType',
      'timeRange',
      'language',
      'category'
    ],
    sort: '-published_at',
    columns: [
      {
        label: 'Title',
        minWidth: 100,
        growFactor: 1,
        priority: 1
        componentName: 'liTableDashboardCellMain',
        componentOptions: {
          image: {
            metadataPropertyName: 'teaserImage'
          },
          clampTitle: false,
          showContentType: true
        }
      }
    ]
  }
  ]
}
// ...
```

By adding this dashboard to `contentType.editor.documentEditingToolbar.documentDashboards`, users will see a new button in the toolbar to open the dashboard in a side panel.

```
// page.js
{
  handle: 'page',
  documentType: 'page',
  //...

  editor: {
    documentEditingToolbar: {
      documentDashboards: [
        {
          label: 'Teaser',
          useDashboard: 'articles-simple',
          published: true
        }
      ]
    },
  }
  
}
```

## Enabling Drag and Drop to create Teaser Components
All there is to do now, is adding a bit of config to let the system know, which Teaser Component should be created when dropping an Article card from that dashboard onto the Document. This is done in the Article Content-Type:

```
// article.js
{
  handle: 'article',
  documentType: 'article',
  // ...
  teaserComponents: [
    {
      component: 'teaser-include',
      directiveName: 'teaser'
    }
  ]
}
```