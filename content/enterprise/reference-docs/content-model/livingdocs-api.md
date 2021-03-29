---
title: "Framework: Livingdocs API"
weight: 2
menus:
  reference-docs:
    parent: Content Model
    name: Livingdoc API
---

A `Livingdoc` represents a Livingdocs document. It consists of a [componentTree]({{< ref "component-tree.md" >}}) and can have one or more views.


## Examples

#### Create a new livingdoc

```js
const doc = require('@livingdocs/framework')

doc.design.load(jsonSerializedDesign)

const livingdoc = doc.create({
  design: {
    name: 'bootstrap',
    version: '1.0.0'
  }
})
```


#### Create views

Simply render a livingdoc into your current page:

```js
livingdoc.appendTo('.article-container', { interactive: false })
```

Create multiple views in iframes:

```js
const interactiveView = livingdoc.createView('.editor-section', {interactive: true})
const preview = livingdoc.createView('.editor-preview')
```

With the iframe technique you can isolate CSS or Javascript that is needed in your documents and also generate views that will work properly with responsive designs. There can only be one interactive view where the user can edit, but you can have as many readOnly views as you want to preview the content at different screen sizes at the same time.

## Properties

#### componentTree
A [componentTree]({{< ref "component-tree.md" >}}) instance. Here you can manipulate your document.

#### design
The Design used in this `livingdoc`.

#### views
An array of all views associated with this `livingdoc`.

#### interactiveView
The interactiveView associated with this `livingdoc` if you created one.

## Methods

#### createComponent()

```js
// Create a component
const titleComponent = livingdoc.createComponent('title')
const componentTree = livingdoc.componentTree
componentTree.append(titleComponent)
```

#### toJson()

With `toJson()` you can serialize a `Livingdoc` to a JSON string. To get a JSON object instead of a string, you can call `serialize()` instead of `toJson()`.

Here you see a serialized version of a `livingdoc` in JSON. This is an example document that uses the 'ghibli' design and consists of three components: A cover, a title and a lead.

```json
{
  "content": [
    {
      "id": "doc-18fsfqsiq0",
      "component": "cover",
      "content": {}
    },
    {
      "id": "doc-18fsfr5f50",
      "component": "title",
      "content": {
        "title": "Storytellers have more fun"
      }
    },
    {
      "id": "doc-18fsfra8r0",
      "component": "lead",
      "content": {
        "text": "Yet, if we look at the interesting people in our lives, I think we’ll find few of them have climbed Mount Everest or broken a wild mustang. Most have never wrestled an alligator or gotten embroiled in a covert operation. Most haven’t seen a whole lot of real excitement."
      }
    }
  ]
}
```

## Manage Dependencies

```js
// add js
livingdoc.addJsDependency({src: 'url'})
livingdoc.addJsDependency({code: 'inline js'})

// add css
livingdoc.addCssDependency({src: 'url'})
livingdoc.addCssDependency({code: 'inline css'})

// use namespaces
livingdoc.addJsDependency({src: 'url', namespace: 'embeds.twitter'})

// Access the dependencies collection directly:
const dependencies = livingdoc.dependencies

// Transform to JSON object
dependencies.serialize()

// Get namespaces (Array of String)
dependencies.getNamespaces()

// Get all dependencies of a namespace
dependencies.getNamespace('embeds.twitter')

// Get an HTML string to include in a published document or to
// Add to a document on the server side.
dependencies.printJs()
dependencies.printCss()
```

## Exposed Modules

For reuse in the editor these modules are exposed on `doc`:
`doc.JsLoader` and `doc.CssLoader`

### Example
```js
const jsLoader = new doc.JsLoader({window: iframe.contentWindow})
jsLoader.loadSingleUrl(url, callback)
jsLoader.loadInlineScript(url, callback)
```
