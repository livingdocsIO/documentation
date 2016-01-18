
# ComponentModel

A component model is the model of a component. You edit a `livingdoc` by creating, updating and removing `componentModels` in a [componentTree](component_tree.md).

## Properties

#### id
Every `component` has a unique id that allows Livingdocs to always identify a `component` no matter if it was moved to a different place somewhere else in a document.

#### componentName
The name of your component. E.g. a title component could have the name 'title'. Normally you use the name when creating a new component of the same type querying for component of a certain type.

#### template
The Template from which your component was created.

#### componentTree
A referenc to the [componentTree](component_tree.md) a component is part of. If empty a component is not yet part of a document just like a detached DOM node.


## Methods

#### Edit Content

```javascript
textDirective = paragraph.directives.get('text');
textDirective.setContent('Lorem Ipsum dolorem...');
content = textDirective.getContent();


// Set the content of a directive directly from the componentModel
paragraph.setContent('text', 'Lorem Ipsum dolorem...');

// Get the content of a directive
paragraph.getContent('text');
```

#### ComponentTree operations

```javascript
var title = componentTree.createComponent('title');

// Insert the title component before this one
component.before(title);

// Insert a component after this one
component.after(title);

// Append a component to a container of this component
component.append(containerName, title);

// Prepend a component to a container of this component
component.prepend(containerName, title);

// Move this component up
component.up();

// Move this component down
component.down();

// Remove this component from its componentTree
component.remove();
```


#### Traverse the componentTree relative to a component

```javascript
// Get the parent component if the component is nested
component.getParent();

// Iterate through all parents
components.parents(function(component) {
    // your code
});

// Iterate through all direct children
components.children(function(component) {
    // your code
});

// Iterate through oneself and all direct children
components.childrenAndSelf(function(component) {
    // your code
});

// Iterate through all descendants (children and their children and so on...)
components.descendants(function(component) {
    // your code
});

// Iterate through oneself, and all descendants
components.descendantsAndSelf(function(component) {
    // your code
});
```
