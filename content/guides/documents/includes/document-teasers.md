---
title: Document Teasers
description: Configuring Document Teasers including drag and drop support
weight: 3
---

Document Teasers based on [Includes]({{< ref "/reference/document/includes" >}}) provide a simple way to setup teasers and the possibility to define the UI with a `paramsSchema`.

To drag and drop Document Cards onto a document to create Teaser Components you need to configure Teaser Components using an Include Service with a `li-document-reference` param to make it work.

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
      preload: true,
      ui: {
        label: 'Teaser',
        config: {
            useDashboard: 'articles-simple'
          }
      }
    }
  ],
  rendering: {
    type: 'function',
    async render (params, context) {
      // params.article.reference.id contains the id of the linked document
      // params.article.value contains part of the DocumentVersion ({systemdata, metadata}) of the include (because preload: true is configured)
      const documentVersion = params.article.value
      return {
        content: [{
          id: `teaser-${documentVersion.systemdata.documentId}`,
          component: 'teaser',
          content: {
            image: parseImageData(documentVersion.metadata.teaserImage),
            title: documentVersion.metadata.title,
            lead: 'lead from include',
            byline: 'byline from include',
            link: 'https://example.com'
          }
        }]
      }
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
      // extend the config for li-document-reference type input
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

```js
// Project Config
editorSettings: {
  dashboards: [
    {
    handle: 'articles-simple',
    type: 'tableDashboard',
    pageTitle: 'Articles',
    baseFilters: [
      {key: 'documentType', term: 'article'} // This must be set to 'documentType'
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
    ]
  }
  ]
}
// ...
```

By adding this dashboard to `contentType.editor.documentEditingToolbar.documentDashboards`, users will see a new button in the toolbar to open the dashboard in a side panel.

{{< img src="./toolbar-teaser.png" alt="Teaser button in toolbar" >}}

```js
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

All there is to do now, is adding a bit of config to let the system know, which Teaser Component should be created when dropping an Article card (source) from that dashboard into any document (target).

This is done in the source content Content-Type, in this case `article.js`:

```js
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


`teaserComponents` is an array, as we support multiple teaser components from the same source content type. For example, you could have several teaser components with different sizes (S, M, L, XL).
The first teaser component in the array will be the default one.

The teaserComponents config must be added only to the source content type (`article`), not in the teaser component nor in the target content type.

## Allow Import and Export in the Project Config

And adding the [allowed import and export config]({{< ref "/reference/project-config/import-export" >}}) to the project config:

```js
  import: {
    allowedProjects: [{ handle: "exampleHandle" }],
  },
  export: {
    allowedProjects: [{ handle: "exampleHandle" }],
  }
```

## References

- [Includes Overview]({{< ref "/reference/document/includes" >}})
