# Component Tree

A component tree is a tree of [components](component_model.md). Just like the DOM is a tree of DOM nodes.

Schematic example of a `componentTree`:

```javascript
// - ComponentContainer (root)
//  - Component 'Hero'
//  - Component '2 Columns'
//    - ComponentContainer 'main'
//      - Component 'Title'
//    - ComponentContainer 'sidebar'
//      - Component 'Info-Box'
```

## Methods

### Create components:

```javascript
// Create a component
const title = componentTree.createComponent('title')
```

### Insert components:

```javascript
// Insert a component at the beginning.
componentTree.prepend(title)

// Insert component at the end.
componentTree.append(title)
```

### Traverse and find components:

```javascript
// Traverse through each component
componentTree.each((component) => {
    // your code
})

// Traverse through each container
componentTree.eachContainer((container) => {
    // your code
})

// Traverse through each component and container
componentTree.all((componentOrContainer) => {
    // your code
})

// Find all components of a type
const subtitles = componentTree.find('subtitle')
if (subtitles.length) {
    const subtitleComponent = subtitles[0]
}

// Get the first component in a document
const firstComponent = componentTree.first()
```

### Serialize:

```javascript
componentTree.toJson()
```

This method is called by `Livingdoc.toJson()` internally.

### Development Helpers:

```javascript
// Get a readable string of the whole componentTree
componentTree.print()
```

## Change Events:

A `componentTree` issues events whenever a change happens. You can subscribe to those events to get notified of changes. Internally views listen to the `componentTree` for changes to update the DOM.

* **componentAdded**  

  Get notified when a component was added

* **componentRemoved**  

  Get notified when a component was deleted

* **componentMoved**  

  Get notified when a component has changed its position

* **componentContentChanged**  

  Get notified when the content of a component changed. \(E.g. the user has edited a text\)

* **componentHtmlChanged**  

  Get notified when component settings changed. For example a css class.

* **changed**  

  Get notified of all changes in a document. Fires when any of the above events for any component fires.

