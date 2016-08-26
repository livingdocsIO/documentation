
# Livingdoc

A `Livingdoc` represents a Livingdocs document. It consists of a [componentTree](component_tree.md) and can have one or more views.


## Examples

#### Create a new livingdoc:

```javascript
var livingdoc = doc.new({
  design: 'bootstrap'
});
```


#### Create views:

Simply render a livingdoc into your current page:

```javascript
livingdoc.appendTo('.article-container', { interactive: false });
```

Create multiple views in iframes:

```javascript
var interactiveView = livingdoc.createView('.editor-section', { interactive: true });
var preview = livingdoc.createView('.editor-preview');
```

With the iframe technique you can isolate CSS or Javascript that is needed in your documents and also generate views that will work properly with responsive designs. There can only be one interactive view where the user can edit, but you can have as many readOnly views as you want to preview the content at different screen sizes at the same time.

## Properties

#### componentTree
A [componentTree](component_tree.md) instance. Here you can manipulate your document.

#### design
The Design used in this `livingdoc`.

#### views
An array of all views associated with this `livingdoc`.

#### interactiveView
The interactiveView associated with this `livingdoc` if you created one.

## Methods

#### createComponent()

```javascript
// Create a component
var titleComponent = livingdoc.createComponent('title');
```

#### toJSON()

With toJSON you can serialize a `Livingdoc`.

Here you see a serialized version of a `livingdoc` in JSON. This is an example document that uses the 'ghibli' design and consist of three components: A cover, a title and a lead.

```json
{
  "content": [
    {
      "id": "doc-18fsfqsiq0",
      "identifier": "ghibli.cover",
      "content": {}
    },
    {
      "id": "doc-18fsfr5f50",
      "identifier": "ghibli.title",
      "content": {
        "title": "Storytellers have more fun"
      }
    },
    {
      "id": "doc-18fsfra8r0",
      "identifier": "ghibli.lead",
      "content": {
        "text": "Yet, if we look at the interesting people in our lives, I think we’ll find few of them have climbed Mount Everest or broken a wild mustang. Most have never wrestled an alligator or gotten embroiled in a covert operation. Most haven’t seen a whole lot of real excitement."
      }
    }
  ]
}
```
