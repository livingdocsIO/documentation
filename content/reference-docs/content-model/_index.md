---
title: "Framework: Content Model"
weight: 1
menus:
  reference-docs:
    name: Content Model
---

### Component Templates

Instead of having a template for an entire article or a page, Livingdocs defines templates for components (or little snippets) of a page like headers, paragraphs or images.

A Livingdocs document is a structured JSON tree representation. It holds a (nestable) list of components and within each component the data stored in it such as text or image data.

A simple Livingdocs document JSON defining a header and a paragraph:
```js
{
  content: [{
    identifier: 'header',
    content: {
      title: 'Publishing has never been easier',
      subline: 'Livingdocs',
      image: {
        url: 'https://server.livingdocs.io/api/v1/images/collaboration.jpg?id=MQkvMjAxOS83LzIyLzJiZTcwZWI2LTIxYjMtNDBiMy04MmRkLWY4OTY5ZGE4YjBmMy5qcGVnCTQ4NQ%3D%3D&w=1024&auto=format'
      }
    }
  }, {
    identifier: 'paragraph',
    content: {
      text: 'Livingdocs is a modern Digital Content Creation and Publishing System in use at a large variety of media companies.'
    }
  }],
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
  components: [{
    name: 'header',
    html: '<div class="head"><span doc-editable="subline"><h1 class="head__title"      doc-editable="title">Title</h1><div class="figure"><img doc-image="image"</div></div>',
    label: 'Header',
    directives: [{
      name: 'title',
      plainText: true
    }]
  }, {  
    name: 'paragraph',
    html: '<p doc-editable="text">Tell your story</p>',
    label: 'Paragraph'
  }]
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

In Livingdocs the components that can be used are defined in a Livingdocs `Design`. Just like the DOM represents a tree of HTML elements a `Livingdoc` represents a tree of `components`.

From the user's perspective a `livingdoc` is a page with a list of components that can be dragged around, selected, edited and deleted individually. The same is true for developers: all action in the editor map to livingdocs framework actions that can be scripted as well.

### Headless approach for multi channel publishing

Livingdocs is very different from other Content Management Systems in that it does not make any assumptions about how you deliver your content. From a Livingdocs perspective a single-page app, an integration into another CMS, or a native app are all the same. In essence, the Livingdocs delivery layer is:

- a set of APIs that provide the necessary data to make rendering really easy
- a set of boilerplate apps that you can fork and use if they fit your needs

Livingdocs pre-renders content for you and delivers those pre-rendered documents over the API. This means that it gets the correct version of your design, fetches the right content of your document and renders everything to HTML. This makes writing HTML-based apps really easy. But you can also write JSON or XML based apps (or whatever other format you might need). The Livingdocs server defines a render pipeline where you can define what content you want to export into which formats. Every channel is always represented as a Livingdocs design which enables your users to write in every channel directly in the Livingdocs editor. This makes for real multi channel publishing: your users can write natively in every channel and delivery is fully customizable.
