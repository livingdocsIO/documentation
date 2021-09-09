---
title: Components
weight: 5
menus:
  reference-docs:
    parent: Project Config
---

The components config is an array of document design components.
For details how to create and customize a design please refer to
[Document Design]({{< ref "/reference-docs/document/document-design" >}}).

Example with a title and a paragraph component:
```js
components: [{
  name: 'title',
  label: 'Title',
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_header_simple.svg',
  directives: [{
    type: 'editable',
    name: 'title',
    maxLength: 5
  }],
  html: '<h2 doc-editable="title">\n  Title\n</h2>'
}, {
  name: "p",
  label: "Paragraph",
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_text.svg',
  html: '<p class="text" doc-editable="text">\n  Paragraph\n</p>'
}]
```
