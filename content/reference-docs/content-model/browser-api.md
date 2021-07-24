---
title: "Framework: Browser API"
weight: 3
menus:
  reference-docs:
    parent: Content Model
    name: Browser API
---

## Working with the current document

```js
// Get the currently loaded livingdocs-framework document
const livingdoc = doc.editor.livingdoc

// Get the design of the document
const design = livingdoc.design
```


## Working with designs

```js
// Get all component identifiers of a design as an array
doc.design.get('timeline').list()

// Get an individual component template
doc.design.get('timeline').get('peephole')
```
