
# Design

## Component Description

##### Title component configuration:

```coffee
'title':
  directives:
    'title': 
      type: 'text'
      characterLimit: 100
    'subtitle':
      type: 'text'
      optional: true # consider: rename to 'excludeWhenEmpty'.

  transforms:
    'paragraph':
      'text': 'this.title'

  behavior: 
    documentTitle: 'this.title'
    tableOfContents: 'this.title'
    nextComponentOnEnter: 'paragraph'

  # Example of a restriction so that this component can only be placed
  # inside the root container.
  restrict:
    only: ['root']
    limit: 1 # can only be used once per document
```

#### Paragraph component configuration:

```coffee
'paragraph': 
  directives:
    'text': 
      type: 'text'

  properties: ['position', 'extra-space']

  transforms:
    # This will transform a paragraph to a title
    # by copying the field paragraph.text to title.title
    # (the 'this.' in 'this.text' would be optional)
    'title':
      'title': 'this.text'

  behavior:
    split: true
    defaultTextComponent: true
```

#### Container component configuration:

```coffee
'sidebar': 
  directives:
    'title': 
      type: 'text'
    'children': 
      type: 'container'
      # restriction what components can be placed inside 
      # of this container.
      only: ['paragraph', 'list']
```

#### Image component configuration:

```coffee
'sidebar': 
  directives:
    'image': 
      type: 'image'
      cropAspectRatio: '16:9' # Or use an array: ['16:9', '9:16', 'free']
      cropMaxWidth: 320
      defaultCrop: '16:9 center'

  cssClassOverrides:
    'format--wide':
      data:
        'image':
          cropAspectRatio: '20:6'
        
```

#### List component configuration:

```coffee
'list': 
  directives:
    title: 
      type: 'text'
    items: 
      type: 'repeatable'
      data:
        text: 'text'
      repeatableProperties: ['extra-space']

  properties: ['position', 'extra-space']

  transforms:
    # This will transform a paragraph to a title
    # by copying the field paragraph.text to title.title
    # (the 'this.' in 'this.text' would be optional)
    'list-with-images':
      'title': 'this.title'
      'images':
        'image': undefined
        'caption': 'this.items.text'
```

#### Component Properties:

Specify the type of the property:

```coffee
componentProperties:
  'position':
    type: 'cssClassList'
    value: ['color--red', 'color--blue', 'color--green']
  'extra-space'
    type: 'cssClass'
    value: 'component--extra-space'
  'format':
    type: 'cssClass'
    value: ['format--square', 'format--wide', 'format--high']
```

#### User Interface configuration:

```coffee


components: 
  'title': 
    label: 'Title Header'
    # This would be the name when displayed in the context of a group.
    # Sometimes we want to use shorter names so as to not sound repetitive.
    # This is opt-in. If not set the UI will just use 'name'.
    groupLabel: 'Title'

properties:
  'position'
    type: 'select-box'
    name: 'positioning'
    description: 'some description what this style does'
    select:
      'color--red': 'red'
      'color--blue': 'blue'
      'color--green': 'green'
  'extra-space':
    type: 'checkbox'
    name: 'Extra Space'
```


## Json Examples

```coffee
components:
  'doc-18fsfqsiq0':
    component: 'title'
    content:
      'title': 'Storytellers have more fun'
  'doc-18fsfqsiq1':
    component: 'paragraph'
    content:
      'text': 'Yes, it\'s true.'
```


## Repeatables

```coffee
components:
  'doc-18fsfqsiq0':
    component: 'list'
    content:
      'title': 'Superior storyteller skills'
      'items': [
        'text': 'Storytelling' 
      ,
        'text': 'More storytelling'
      ]
```


## Data Fields

Data fields are an idea that give designers an easy way to add elements to components that can be filled automatically from publication metadata. Examples could be author information or a publish date.

Example component template:

```html
<div>
  <h1 doc-editable="title">Title</h1>
  <h3 doc-data-field="author">Author</h3>
</div>
```


## Placeholders

Example component template:

```html
<div>
  <h1 doc-editable="title">Title</h1>
  <h3 doc-placeholder="author">Author</h3>
</div>
```

Output HTML which inserts a placeholder string that can be replaced by a delivery layer.

```html
<div>
  <h1>Awesome Title</h1>
  <h3>{{ author }}</h3>
</div>
```
