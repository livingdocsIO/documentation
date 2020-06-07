# Design Configuration v2

## Overview

A design is mainly an array of `components`. Additional to that you can
specify `designSettings` to configure things like css or js files and
additional configurations.

todo...
```js
v: 2,
name: 'testv2',
version: '1.0.0',
components: [{name, label, iconUrl, directives, html, ...}],

// (all designSettings are optional)
designSettings: {
  label: 'Design Label',
  description: 'This is a livingdocs design',
  author: 'livingdocs.io',
  assets: {},
  componentGroups: [],
  defaultComponents: {},
  fieldExtractor: [],
  componentProperties: []
}
```


## Components

In `components` you define HTML components that can be used in documents that use your design.

For every component you can create a new file. Here is an example for a paragraph:

```html
<script type="ld-conf">
{
  "label": "Paragraph",
  "iconUrl": "https://livingdocs.io/images/building_blocks_magazine.svg",
  "description": "Your main writing tool"
}
</script>

<p doc-editable"text">
  Lorem Ipsum...
</p>
```

Inside of the `<script type="ld-conf">` you can define configurations for the components. The component itself is built with normal HTML and Livingdocs specific attributes indicate to Livingdocs what content the user can change and edit. The attribute `doc-editable` will turn the paragraph into an editable element.

#### Preview Component

```html
<script type="ld-conf">
{
  "name": "hero",
  "label": "Hero Teaser",
  "iconUrl": "https://livingdocs.io/images/building_blocks_magazine.svg",
  "description": "A mega title"
}
</script>


<div class="jumbotron">
  <h1 doc-editable="title">Hello, world!</h1>
  <p doc-editable="text">
    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
  </p>
  <p>
    <a doc-link="featured" class="btn btn-primary btn-lg" role="button" doc-editable="button">Learn more</a>
  </p>
</div>
```

## designSettings

The `designSettings` define the design configuration. You can specify what options are available and how components behave when editing in the Livingdocs editor.


#### Default Components

The `defaultComponents` configuration tells the editor which components should be used by default for some basic interactions like Pressing Enter at the end of a paragraph. Since Livingdocs is completely configurable you can for example define what your standard text paragraph looks like.

```js
{
  // ... other properties in `designSettings`

  defaultComponents: {
    paragraph: "p", // The default component to insert when pressing Enter
    image: "image"  // The component to insert when dragging an image into the document.
  }
}
```


#### Component Properties

The settings in `componentProperties` will add configuration options to your components. Technically a componentProperty will just add a css class to the top level element of a component if it is selected by the user. You can use these properties in one of your components as shown further below.

```js
componentProperties: [
  // Dropcap that will add the css class 'drop-cap' to a component if selected
  {
    name: "dropcap",
    label: "Drop Capital",
    type: "option",
    value: "drop-cap"
  },

  // Position property that lets the user choose to add either the css class 'position-left' or 'position-right' to a component.
  {
    name: "position",
    label: "Position",
    type: "select",
    options: [
      {
        "caption": "Default"
      },
      {
        "caption": "Left",
        "value": "position-left"
      },
      {
        "caption": "Right",
        "value": "position-right"
      }
    ]
  }
]
```

This is an example configuration of a paragraph component that uses the `dropcap` componentProperty. This will automatically add a checkbox to the user inteface so the user can select if they want to have a dropcap at the beginning of their paragraph.

```html
<script type="ld-conf">
{
  "label": "Paragraph",
  "properties": ["dropcap"]
}
</script>

<p doc-editable="text">
  Lorem Ipsum...
</p>
```


## Component Groups

For the User interface you can group your components. This is done via the `groups` configuration. These are purely instructions for the user interface how to display a grouped list of components to the user.

```js
componentGroups: [
  {
    label: "Headers",
    components: ["hero", "head", "title"]
  }, {
    label: "Text",
    components: ["subtitle", "p", "quote", "aside"]
  }, {
    label: "Images",
    components: ["image", "peephole"]
  }
],
```

## Field Extractor

This section allows you to configure the livingdocs metadata extractor for the document's content. For example you might want to extract the content of a title component automatically to a metadata field 'title' in your CMS.
The configuration allows you for each requested metadata field to define which <component>.<directive> combinations should be used for extraction and in what order.
There are two types of content that can be extracted: text and images. You can define which one you want in the parameter 'type'.

```js
fieldExtractor: [
  {
    identifier: 'title',
    type: 'text',
    matches: ['hero.title', 'head.title', 'title.title'],
    isEditable: true
  }, {
    identifier: 'teaserImage',
    type: 'image',
    matches: ['hero.image', 'image.image'],
    imageRatios: ['16:9'],
    isEditable: true
  }
]
```

The example above will take the metadata field 'title' preferably from the directive title in the component hero otherwise from the component head or if none of these are available from the component title.


## Prefilled Components

This configuration option lets you define components that should be prefilled upon document creation. E.g., you might want to prefill the author field of a newly created document to the name of the current user.
There are two types of prefill modes: 'string' and 'computed'. String will just use the string inside the 'value' field to do the prefilling. Computed expects a respective handler method inside the livingdocs-editor so you can only use this type if you have control over the livingdocs-editor.

```js
prefilledComponents: {
  "header": {
    "author": {
      "value": "author",
      "type": "computed"
    }
  },
  "image": {
    "caption": {
      "value": "&nbsp;(all copyright by me)",
      "type": "string"
    }
  }
}
```

The example above will generate the content of header.author from the handler method "author" inside the livingdocs-editor and the content of image.caption will always be prefilled with "all copyright by me".
Prefilling is just an initial value. You can always overwrite the content in the editor.
