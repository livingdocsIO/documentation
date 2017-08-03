
# Framework: ComponentModel

A component model is the model of a component. You edit a `livingdoc` by creating, updating and removing `componentModels` in a [componentTree](component_tree.md).

## Properties

#### id
Every `component` has a unique id that allows Livingdocs to always identify a `component` no matter if it was moved to a different place somewhere else in a document.

#### componentName
The name of your component. E.g. a title component could have the name 'title'. Normally you use the name when creating a new component of the same type querying for component of a certain type.

#### [directives](directives.md)
The content of a component is managed through directives. For different
content types like text and images there exists different directive types.

Quick examples:
```js
const textDirective = paragraph.directives.get('text')
textDirective.setContent('Lorem Ipsum dolorem...')
const content = textDirective.getContent()

// Test if a directive contains content
textDirective.isEmpty() // false

// Set the content of a directive directly from the componentModel
paragraph.setContent({text: 'Lorem Ipsum dolorem...'})
```

For more information see the [detailed directive documentation](directives.md).

#### componentProperties

Component properties let you define css classes or styles that can be set on
the root element of a component.


Component Properties definition in the design:
```js
componentProperties: {
  'css-background-color': {
    type: 'style',
    label: 'Background Color',
    cssProperty: 'background-color'
  }
  'css-class': {
    type: 'option'
    value: 'capitalize'
  }
  'css-class-selection': {
    type: 'select'
    options: [
      caption: 'Default'
    ,
      caption: 'Red'
      value: 'color--red'
    ]
  }
}
```

Component definition:
```html
<script type="ld-conf">
{
  name: 'header',
  properties: ['css-background-color', 'css-class', 'css-class-selection']
}
</script>
<header>...</header>
```

Setting the style on the `componentModel`:
```js
header.setStyle('css-background-color', '#29b96f')
header.setStyle('css-class', 'capitalize')
header.setStyle('css-class-selection', 'color--red')
```


#### template
The Template from which your component was created.

#### componentTree
A referenc to the [componentTree](component_tree.md) a component is part of. If empty a component is not yet part of a document just like a detached DOM node.


## Methods

#### ComponentTree operations

```js
const title = componentTree.createComponent('title')

// Insert the title component before this one
component.before(title)

// Insert a component after this one
component.after(title)

// Append a component to a container of this component
component.append(containerName, title)

// Prepend a component to a container of this component
component.prepend(containerName, title)

// Move this component up
component.up()

// Move this component down
component.down()

// Remove this component from its componentTree
component.remove()
```


#### Traverse the componentTree relative to a component

```js
// Get the parent component if the component is nested
component.getParent()

// Iterate through all parents
component.parents((component) => {
    // your code
})

// Iterate through all direct children
component.children((component) => {
    // your code
})

// Iterate through oneself and all direct children
component.childrenAndSelf((component) => {
    // your code
})

// Iterate through all descendants (children and their children and so on...)
component.descendants((component) => {
    // your code
})

// Iterate through oneself, and all descendants
component.descendantsAndSelf((component) => {
    // your code
})
```
