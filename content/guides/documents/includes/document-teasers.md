---
title: Embedded Document Teasers
description: Register an include service to render teasers to other articles
weight: 3
---

With [`release-2021-03`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2021-03.md) a simpler way to setup teasers is introduced. It is based on [Includes]({{< ref "/reference-docs/includes" >}}) and the possiblity to define the UI with a `paramsSchema`. Please see [Article List Teasers]({{< ref "/guides/documents/includes/list-teasers" >}}) for information on setting up lists of document teasers.

This guide assumes that you are familiar with the possibilities to register an Include Service and how to use it in a Component.

## Include Service
Here is an example includes configuration to consider for the editable teaser usecase:
```js
{
  name: 'teaser',
  // this will render a UI in the document editing sidebar to let the User select a document with
  // the contentType `regular` to link to.
  paramsSchema: [{
    handle: 'article',
    type: 'li-reference',
    config: {
      referenceType: 'document',
    },
    ui: {
      label: 'Teaser'
    }
  }],
  rendering: {
    type: 'function',
    render (params, options) {
      // params.article.reference.id contains the id of the linked document
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
  directives: [{
    name: 'teaser',
    type: 'include',
    // refer to the include service handle
    service: 'teaser',
    // extend the config for li-reference type input
    paramsSchemaExtension: [{
      // refer to the handle of the services paramsSchema property
      name: 'article',
      // configure base filters for the article search modal
      config: {
        // only document of contentType 'regular'
        contentType: ['regular'],
        // only published documents
        published: true
      }
    }]
  }],
  html: `
    <div doc-include="teaser">
      <div>Link an Article</div>
    </div>
  `
}
```
