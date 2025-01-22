---
title: Content
renderSummaries: false
menus:
  reference:
    weight: 1
    parent: Document
---

### Component Templates

Instead of having a template for an entire article or a page, Livingdocs defines templates for components (or little snippets) of a page like headers, paragraphs or images.

A Livingdocs document is a structured JSON tree representation. It holds a (nestable) list of components and within each component the data stored in it such as text or image data.

A simple Livingdocs document JSON defining a header and a paragraph:

```js
{
  content: [
    {
      component: 'header',
      content: {
        title: 'Publishing has never been easier',
        subline: 'Livingdocs',
        image: {
          url: 'https://livingdocs-images.imgix.net/2019/7/22/2be70eb6-21b3-40b3-82dd-f8969da8b0f3.jpeg?auto=format&w=1024'
        }
      }
    },
    {
      component: 'paragraph',
      content: {
        text: 'Livingdocs is a modern Digital Content Creation and Publishing System in use at a large variety of media companies.'
      }
    }
  ],
  design: {
    name: 'livingdocs',
    version: '0.0.1'
  }
}
```

A Livingdoc references a Livingdocs design which again is a JSON holding the definition how to use the component list to stitch together HTML templates to build a document.

A simple Livingdocs design defining the two components used in the document above:

```js
{
  designSettings: {
    assets: {
      basePath: 'https://server.livingdocs.io',
      css: ['/styles.css', '/gallery-styles.css'],
      js: ['/scripts.js', '/asset-gallery.js']
    }
  },
  components: [
    {
      name: 'header',
      html: '<div class="head"><span doc-editable="subline"><h1 class="head__title"      doc-editable="title">Title</h1><div class="figure"><img doc-image="image"</div></div>',
      label: 'Header',
      directives: [
        {
          name: 'title',
          plainText: true
        }
      ]
    },
    {
      name: 'paragraph',
      html: '<p doc-editable="text">Tell your story</p>',
      label: 'Paragraph'
    }
  ]
}
```

To learn more about designs, read our [guide]({{< ref "/guides/documents/document-design" >}}).

### Rendering

Livingdocs uses a structured JSON (see above) as its document format. There are 2 kinds of rendering:

- a reactive renderer that renders the JSON to HTML whenever a change occurs. This renderer is used in the editor
- a scalable and fast bulk renderer with its own DOM implementation that is used to render documents for delivery over the public API and ultimately rendering of frontend pages

The rendering works by iterating over the list of components (document JSON), for each component getting the respective HTML component template from the design JSON, filling in the content from the document to the template and repeat, ultimately stitching together all HTML component templates to form a complete document.

### How we fit to the web ecosystem

A Livingdocs document is an abstract representation of an HTML document. It's structure is inspired by [web components](http://www.w3.org/TR/components-intro/), which is a set of working draft documents at the W3C with the aim to leverage reusable components for the Web platform.

In Livingdocs the components that can be used are defined in a Livingdocs `Design`. Just like the DOM represents a tree of HTML elements a `livingdoc` represents a tree of `components`.

From the user's perspective a `livingdoc` is a page with a list of components that can be dragged around, selected, edited and deleted individually. The same is true for developers: all action in the editor map to Livingdocs framework actions that can be scripted as well.
