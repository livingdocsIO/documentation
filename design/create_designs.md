
# Create designs with livingdocs-design-boilerplate


## Overview

A Livingdocs `Design` is created from a `design defintion` JSON file. Here we describe the details of such a `design defintion` and how you can create them yourself.

[`livingdocs-design-boilerplate`](https://github.com/upfrontIO/livingdocs-design-boilerplate) is a git repository that helps building Livingdocs `design defintions`. It has a grunt task that can create the files needed to configure the `livingdocs-engine`.


## Example design definition:

Lets start with a possible end result: a livindocs design definition which is just a JSON file. The `livingdocs-design-boilerplate` project helps you to create these files. But you can, of course, just create or edit them by hand if you prefer.

```javascript
var designDefinition = {

  // General design information
  name: 'designName',
  version: 'v1.0.0',
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

  // Groups are jsut required to show your components in the
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
  defaultComponents: {
    paragraph: 'paragraph'
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

Let's get right to it how you can create a design definition with the `livingdocs-design-boilerplate`. A `component` includes a HTML template and configuration options. In your template you can use attributes to tell livingdocs what elements can be edited or changed. Basically you create rules what the editor what users will be allowed to change.

Following you see a basic paragraph definition. It consists of a configuration part inside a `<script type="ld-conf">` tag and an HTML part. 

```html
<script type="ld-conf">
{
  "name": "p"
  "label": "Paragraph"
}
</script>

<!-- your html comes here -->
<p doc-editable="text">
  Placeholder text
</p>
```

In the **configuration** (inside the `<script>` tag) the name and label of the component is defined that is shown to the user in the User interface.

The **HTML** part defines a paragraph with a `doc-editable` attribute. The attribute has a value of 'text'. This means that the text assigned to the paragraph by the user will be accessible through the property 'text'. The content inside the paragraph will be used as the placeholder text and disappear as soon as the user starts typing.


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
| doc-optional    | Can be used together with `doc-editable` and prevents rendering of the tag to the published document if the editable content is empty.|
| doc-container | This tag can contain other components. |
| doc-html | The content of this tag is freeform HTML. This can be used to embed tweets or IFrames. |


