# Design settings config options

## Design description options

```js
label: 'Demo Design',
description: 'This is an example design',
author: 'living doc'
```

## componentProperties

Component properties let you define css classes or styles that can be set on
the root element of a component.

You can add 3 different types: 
- style: user can add a css value in the side-bar
- option: user can enable or disable class
- select: user can select a value from given options

Component Properties definition in the design:

```js
componentProperties: [{
    type: 'style',
    label: 'Background Color',
    name: 'css-background-color',
    // this is the property which is set with the input from the user
    cssProperty: 'background-color'
  }, {
    type: 'option',
    label: 'Thin',
    name: 'css-class',
    value: 'thin'
  },
  {
    type: 'select',
    label: 'Class selection',
    name: 'css-class-selection',
    options: [
      // no value will set no class
      {caption: 'Default'},
      // the value is the class which is set on the root element of the component
      {caption: 'Red',
      value: 'materialize-red-text'}
    ]
  }
}]
```

Component definition:
add the properties property to the component definition

```js
properties: ['css-background-color', 'css-class', 'css-class-selection']
```

## assets
You can add custom css and js files to your design. These files will be loaded in the editor to show an article.

```js
assets: {
  css: [
    'url to css'
  ], 
  js: [
    'url to js'
  ]
}
```

## componentGroups
To group different components together a componentGroups section can be added. 

The group alwasys have a name, label and the components.
```js
componentGroups: [{
  name: 'content',
  label: 'Components',
  components: ['title', 'p']
}, {
  name: 'media',
  label: 'Media',
  components: ['image', 'insta']
}]
```

## defaultComponents
For the different component types in a livingdoc the default component can be defined. 
These components are used on default operation like drag and drop an image or after the enter/return key is pressed and a new component will be created.

```js
defaultComponents: {
  // enter/return key is pressed and a new component will be created
  paragraph: 'p',

  // drag and drop an image
  image: 'image'
}
```

## fieldExtractor
```js
// extract the content of a field to set a metadata 
fieldExtractor: [{
  // metadata field name
  identifier: 'title',
  // type of metadata text or image
  type: 'text',
  // matches in the document componentName.directiveName
  matches: ['title.title']
}]
```