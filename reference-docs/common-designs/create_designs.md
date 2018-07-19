# Create designs

This guide references the [Livingdocs timeline design](https://github.com/livingdocsIO/livingdocs-design-timeline),
 which you can use as a starting point for your own designs. We advise you to clone this repository now to follow the subsequent examples.

## What is a Livingdocs design?

A Livingdocs design is a set of HTML components and configurations how they can be used and edited.
It also lists the CSS and/or Javascript dependencies that need to be loaded to show the design correctly,
both in the editor and when rendering it on the server side.
A Livingdocs design is defined in a `design definition` JSON file.

To use a Livingdocs design you have to upload the JSON file and all its dependencies
(CSS, Javascript and image files) to a livingdocs server and configure your account to use this design.


## Example design definition:

Let's start with a possible end result of a Livingdocs design definition.

```javascript
var designDefinition = {

  // General design information
  name: 'designName',
  version: '1.0.0',
  author: 'Peter Pan',

  // Assets required by the design
  assets: {
    css: ["/stylesheets/test.css"]
  },

  // All available properties you can define on your components.
  // A componentProperty is for example a css class a user can
  // toggle on a component.
  componentProperties: {
    'position': {
      label: 'Position',
      type: 'select',
      options: [
        {
          caption: 'Default'
        }, {
          caption: 'Left',
          value: 'position-left'
        }, {
          caption: 'Right',
          value: 'position-right'
        }
      ]
    },
    'extra-space': {
      label: 'Extra Space',
      type: 'option',
      value: 'extra-space'
    }
  },

  // Here are the available components.
  // This is the central piece of every design definition.
  // Here you can list all possible HTML constructs that can
  // be used by users of your design.
  components: [
    {
      name: 'title',
      html: '<h1 doc-editable="title"></h1>',
      properties: ['position', 'extra-space']
    }, {
      name: 'paragraph',
      label: 'Text',
      html: '<p doc-editable="title"></p>'
    }, {
      name: 'image',
      label: 'Image',
      directives: {
        image: {
          imageRatios: ["16:9"]
        }
      },
      html: '<img doc-image="image">'
    }
  ],

  // Groups are just required to show your components in the
  // user interface. You can group and order the appearance of
  // your components here.
  groups: [
    {
      label: 'Headers',
      components: ['title']
    }, {
      label: 'Text',
      components: ['paragraph']
    }
  ],

  // The defaults paragraph component defines which component is
  // inserted if a user hits ENTER.
  // The default image component defines which image component is
  // inserted if a user drags and drops an image on a document
  defaultComponents: {
    paragraph: 'paragraph',
    image: 'image'
  },

  // Image ratios allow you to control the aspect ratios
  // of uploaded images.
  imageRatios: {
    "16:9": {
      label: "16:9 Cinemascope",
      ratio: "16/9"
    }
  }
};
```


## How to define components

The atom of a design is the `component`. Each component is a file in the filesystem with the ending `.html`.
It includes a HTML template and configuration options. In your template you can use attributes to tell Livingdocs what
elements can be edited or changed. Basically you create rules for the Livingdocs editor for what users will be allowed to change.
Following you see a basic paragraph definition. It consists of a configuration part inside a `<script type="ld-conf">` tag and an HTML part.

```html
<script type="ld-conf">
{
  "name": "myParagraph",
  "label": "My very first paragraph"
}
</script>

<!-- your html comes here -->
<p doc-editable="text">
  Placeholder text
</p>
```

In the **configuration** (inside the `<script>` tag) the name and label of the component is defined that is shown to the user in the user interface.

The **HTML** part defines a paragraph with a `doc-editable` attribute. The attribute has a value of 'text'. This means that the text assigned to the paragraph by the user (inline editing) will be accessible through the property 'text'. The content inside the paragraph will be used as the placeholder text and disappear as soon as the user starts typing.

Go ahead and create a file called `myParagraph.html` under `src/components/Text` and paste the above content.

#### Adding your component to the design

Once you have a component definition you will want to add your new component to your design. For this we will
need to move to our `config.json` file in the timeline design repository. Find the section `groups` within this file.
Here you can add your newly created `myParagraph` component. (NOTE: Use the `name`, not the `label`).
Add it to any of the existing groups or create a new one. Now run a build and you will get a `dist` folder with a
new design definition that contains your new component.

#### Using the preview

In order to preview your components outside of the editor, you can add it to the file `src/index.html`.
In the script section of this file you will see the creation of a Livingdoc using the JSON data model.
Don't worry about the details of this data yet. Simply navigate to the end of the `content` array and add the following markup:

```json
{
  "component": "myParagraph",
  "content": {
    "text": "This is placeholder text for the preview."
  }
}
```

You just added a `myParagraph` component to the preview Livingdoc and assigned some sample text to the `text` template of this component.

Now start the development server on your command line and you should get a browser window with your preview document, fully working with inline editing.
(NOTE: this is not the Livingdocs editor only the Livingdocs framework is loaded).

#### A more complex example

This is an example of a cover component with a background image and a title on top of that image.

```html
<script type="ld-conf">
{
  "name": "cover"
  "label": "Cover"
}
</script>

<!-- your html comes here -->
<header class="page__header">
  <div class="page__header__content" doc-image="background-image">
    <div class="head-section head-section--deco">
      <h1 class="head-section__title" doc-editable="title">Title</h1>
    </div>
  </div>
</header>
```

This component definition has a `doc-image` attribute on a `<div>` tag. This will give the user the opportunity to upload an image that will the be used as the `background-image` of that `<div>` tag. Just like the `doc-editable`, the `doc-image` also has an attribute value that gives the background image property of this component a name so it can be accessed.

#### Available attributes in the component HTML

A Livingdocs `component definition` consists of HTML that has added attributes that define the possible content or behaviour of the component.

| Attribute  | Description           |
|:---------|:-----------|
| doc-editable | The content of this tag is editable text by the user. |
| doc-image    | The user can select and image that is set as a `src` attribute on `<img>` tags and as `background-image` style on other tags. |
| doc-optional    | Can be used only with `doc-editable` and prevents rendering of the tag to the published document if the editable content is empty.|
| doc-container | This tag can contain other components. |
| doc-html | The content of this tag is freeform HTML. This can be used to embed tweets or IFrames. |
| doc-link | The href attribute of this tag can be set to a link by the user. |
| doc-include | Inside of this tag, the server will render an edge-side include of the given type |
| doc-style | Allows a user to set the `style` attribute on a DOM node |

#### But I want my own design

Sure enough you don't want to keep working with the `livingdocs-design-timeline` forever. We highly advise you though to use the setup defined there as it makes working with Livingdocs designs a lot easier. Just copy the `livingdocs-design-timeline` repository, name it anything you like and start replacing the CSS and HTML with your own.
