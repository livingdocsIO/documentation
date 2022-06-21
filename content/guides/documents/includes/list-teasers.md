---
title: List Teasers
description: Register an include service to embed a list
weight: 4
---

With [`release-2021-09`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2021-09.md) a simpler way to setup list teasers is introduced. It is based on [Includes]({{< ref "/reference-docs/document/includes" >}}) and the possiblity to define the UI with a `paramsSchema`. Please see [Article Teasers]({{< ref "/guides/documents/includes/document-teasers" >}}) for information on setting up individual document teasers.

This guide assumes that you are familiar with the possibilities to register an Include Service and how to use it in a Component.

## Include Service

```js
{
  name: 'my-teaser-list-service',
  paramsSchema: [
    {
      handle: 'list',
      type: 'li-list-reference',
      preload: true, // Populate referenced article data
      config: {
        enableCount: true,      // enable UI configuration of number of articles (default: false)
        defaultCount: 3,        // number of articles shown by default (default: 3)
        minCount: 2,            // minimum number of articles
        maxCount: 6,            // maximum number of articles
        enableListEditing: true // allow to create/edit list inline (default: false)
      }
    }
  ],
  rendering: {
    type: 'function',
    async render (params, context) {
      // The "list" property is from the "handle" above
      // The "reference.id" is defined by the "li-list-reference" schema
      // "params.list.$ref" would contain the type, in this case "document"
      if (!params.list?.reference?.id) {
        // No list selected
        return {doNotRender: true}
      }
      // Using "preload" in "paramsSchema" will populate the documents in the "values" property.
      // It will automatically remove duplicates between lists displayed on the same page.
      if (!params.list?.values?.length) {
        // Empty list
        return {content: []}
      }

      // Return an array of Livingdocs components for the content property,
      // or a HTML string for the html property.
      return {
        // Render multiple "teaser" components
        content: params.list.values.map(({metadata, systemdata}) => ({
          id: `list-teaser-${systemdata.documentId}`,
          component: 'my-teaser-component', // The component is defined below
          content: {
            // Provide the necessary properties for the component
            image: metadata.teaserImage,
            title: metadata.title,
            showLead: true,
            lead: 'lead from include',
            showByline: true,
            byline: 'byline from include',
            link: 'https://example.com'
          }
        }))
      }
    }
  }
}
```

## Components

```js
// Register a teaser list component which will be used to show multiple teaser components
{
  name: 'my-list-teaser-component',
  label: 'Teaser List', // Displayed in the editor UI as the component name
  iconUrl: 'https://www.example.com/my/icon.svg', // Provide a URL to an SVG icon
  directives: [
    {
      name: 'my-teaser-list-directive',
      type: 'include',
      service: 'my-teaser-list-service'
    }
  ],
  // The "Select a List" placeholder element is displayed when
  // `{doNotRender: true}` is returned by the service
  html: `
    <div doc-include="my-teaser-list-directive">
      <div>Select a List</div>
    </div>
  `
}

// Register a teaser component which will be used to show individual article teasers
{
  name: 'my-teaser-component',
  label: 'Teaser',
  directives: [
    {
      name: 'image',
      type: 'image',
      allowOriginalRatio: true,
      imageRatios: ['16:9', '1:1', '4:3', '3:4']
    },
    {
      type: 'editable',
      name: 'title',
      maxLength: 10
    },
    {
      type: 'toggle',
      name: 'showLead',
      label: 'show lead',
      default: false
    },
    {
      type: 'toggle',
      name: 'showByline',
      label: 'show byline',
      default: true
    }
  ],
  html: `
    <a class="teaser" doc-link="link">
      <img class="responsive-img" doc-image="image">
      <h3 doc-editable="title">Title</h3>
      <p class="text" doc-editable="lead" doc-toggle="showLead">
        Lead
      </p>
      <p class="text" doc-editable="byline" doc-toggle="showByline">
        Byline
      </p>
    </a>
  `
}
```
