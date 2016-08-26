Livingdocs Design
=================

This project is a boilerplate design for Livingdocs ([Documentation](https://github.com/upfrontIO/livingdocs)) - you can fork to create your own designs.


## Project structure

The design is stored in the `src` directory.
A design consists of the following files:

    src/config.json    // design configuration file,             required
    src/components/    // the components of a design,            required
    src/stylesheets/   // stylesheets of a design,               required
    src/images/        // images belonging to a design,          optional
    src/index.html     // preview of the design in development,  optional


## config.json

The config.json defines the design configuration. You can specifiy through the design configuration what options are available and how components behave when editing in the Livingdocs editor.

Basic Information:

```javascript
"name": "boilerplate",
"label": "Boilerplate Design",
"version": "1.0.0",
"author": "upfront.io"
```


### Css

You can put your stylesheets inside of the `src/stylesheets` folders. How your css works and whether you use sass or less to generate it is up to you.

Define the stylesheets that are needed by your design in the `config.json` so that Livingdocs can laod them dynamically into the editor.

```javascript
"assets": {
  "css": ["./stylesheets/boilerplate.css"]
},
```


## Components

Inside of the folder `src/components` you can define HTML components that can be used in documents that use your design. These components will be automatically inserted into `dist/design.json` when you run `grunt build`.

For every component you can create a new file. Here is an example for a paragraph:

```html
<script type="ld-conf">
{
  "label": "Paragraph"
}
</script>

<p doc-editable"text">
  Lorem Ipsum...
</p>
```

Inside of the `<script type="ld-conf">` you can define configurations for the components. The component itself is built with normal HTML and Livindocs specific attributes indicate to Livingdocs what content the user can change and edit. The attribute `doc-editable` will turn the paragraph into an editable element.


#### Advanced Example of a list

This is a custom container that can only be placed at the topmost level (not be nested inside other components) and which can only contain `text` and `image` components.

```html
<script type="ld-conf">
{
  "name": "list",
  "label": "List",
  "allowedParents": ["root"]
  "directives": {
    "children": {
      "allowedChildren": ["text", "image"]
    }
  }
}
</script>

<div doc-container="children"></div>
```

- `name` The name of this component as used in code. If not specified this is inferred from the filename.  
- `label` The label displayed in user interfaces.  
- `directives` Configuration for individual directives. Here the container is configured to only accept certain components.  
- `allowedParents` Inside of which components a component can be placed. ('root' stands for the topmost level.)  


#### Preview Component

```html
<script type="ld-conf">
{
  "name": "hero",
  "label": "Hero Teaser"
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

## Default Components

The `defaultComponents` configuration tells the editor which components should be used by default for some basic interactions like Pressing Enter at the end of a paragraph. Since Livingdocs is completely configurable you can for example define what your standard text paragraph looks like.

```javascript
"defaultComponents": {
  "paragraph": "p", // The default component to insert when pressing Enter
  "image": "image"  // The component to insert when dragging an image into the document.
}
```


## Component Properties

The settings in `componentProperties` will add configuration options to your components. Technically a componentProperty will just add a css class to the top level element of a component if it is selected by the user. You can use these properties in one of your components as shown further below.

```javascript
"componentProperties": {

  // Dropcap that will add the css class 'drop-cap' to a component if selected
  "dropcap": {
    "label": "Drop Capital",
    "type": "option",
    "value": "drop-cap"
  },

  // Position property that lets the user choose to add either the css class 'position-left' or 'position-right' to a component.
  "position": {
    "label": "Position",
    "type": "select",
    "options": [
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
  },
}
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


## Image Aspect Ratios

Named aspect ratios can be added to a design that can be reused in the components. It is possible to restrict images to certain aspect ratios to for example ensure that an image is always a landscape image of 16:9.

```javascript
"imageRatios": {
  "16:9": {
    "label": "16:9",
    "ratio": "16x9"
  },
  "1:1": {
    "label": "1:1",
    "ratio": "1x1"
  }
}
```

In a component the aspect ratios can be defined per image directive. In the following example the user can crop the image freely and the aspect ratios 16:9 and 1:1 are available in the UI to conveniently crop to these ratios.

```html
<script type="ld-conf">
{
  "label": "Image",
  "directives": {
    "image": {
      "imageRatios": ["16:9", "1:1"],
      "allowOriginalRatio": true
    }
  }
}
</script>

<figure class="figure">
    <img doc-image="image" />
</figure>
```


## Groups

For the User interface you can group your components. This is done via the `groups` configuration. These are purely instructions for the user interface how to display a grouped list of components to the user.

```javascript
"groups": [
  {
    "label": "Headers",
    "components": ["hero", "head", "title"]
  }, {
    "label": "Text",
    "components": ["subtitle", "p", "quote", "aside"]
  }, {
    "label": "Images",
    "components": ["image", "peephole"]
  }
],
```

## Metadata

This section allows you to configure the livingdocs metadata extractor for the document's content. For example you might want to extract the content of a title component automatically to a metadata field 'title' in your CMS.
The configuration allows you for each requested metadata field to define which <component>.<directive> combinations should be used for extraction and in what order.
There are two types of content that can be extracted: text and images. You can define which one you want in the parameter 'type'.

```javascript
"metadata": [
  {
    "identifier": "title",
    "type": "text",
    "components": ["hero.title", "head.title", "title.title"]
  }, {
    "identifier": "teaserImage",
    "type": "image",
    "components": ["hero.image", "image.image"]
  }
]
```

The example above will take the metadata field 'title' preferably from the directive title in the component hero otherwise from the component head or if none of these are available from the component title.

## Prefilled Components

This configuration option lets you define components that should be prefilled upon document creation. E.g., you might want to prefill the author field of a newly created document to the name of the current user.
There are two types of prefill modes: 'string' and 'computed'. String will just use the string inside the 'value' field to do the prefilling. Computed expects a respective handler method inside the livingdocs-editor so you can only use this type if you have control over the livingdocs-editor.

```javascript
"prefilledComponents": {
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

## How to export your design

The design is compiled using `grunt build` and previewed using `grunt dev`. The build folder is `/dist` and the build structure is as follows:

    dist/design.js        // the design configuration as a js file
    dist/design.json      // the design configuration as json
    dist/images/          // images are copied
    dist/stylesheets/     // stylesheets are to css and then copied

You can manage your design versions with the `grunt release task`:

    grunt release:patch
    grunt release:minor
    grunt release:major


## Installation

Install [node.js](http://nodejs.org/) and [grunt](http://gruntjs.com/installing-grunt)

  1. From the root of the project run `npm install`
  2. Run `grunt dev` to compile the design. When a file changes, the files in **/dist** folder are updated automatically
