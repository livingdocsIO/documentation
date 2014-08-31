
# Design

## Component Description

##### Title component configuration:

```coffee
'title':
  data:
    title: 
      type: 'text'
      characterLimit: 100
    subtitle:
      type: 'text'
      optional: true # consider: rename to 'excludeWhenEmpty'.

  transforms:
    'paragraph':
      'text': 'this.title'

  # Example of a restriction so that this component can only be placed
  # inside the root container.
  restrict:
    only: ['root']
```

#### Paragraph component configuration:

```coffee
'paragraph': 
  data:
    text: 
      type: 'text'

  properties: ['position', 'extra-space']

  transforms:
    # This will transform a paragraph to a title
    # by copying the field paragraph.text to title.title
    # (the 'this.' in 'this.text' would be optional)
    'title':
      'title': 'this.text'
```

#### Container component configuration:

```coffee
'sidebar': 
  data:
    title: 
      type: 'text'
    children: 
      type: 'container'
      # restriction what components can be placed inside 
      # of this container.
      only: ['paragraph', 'list']
```

#### List component configuration:

```coffee
'list': 
  data:
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

```coffee
componentProperties:
  'position':
    type: 'cssClassList'
    value: ['color--red', 'color--blue', 'color--green']
  'extra-space'
    type: 'cssClass'
    value: 'component--extra-space'
```

#### User Interface configuration:

```coffee
groups: [
  name: 'Body Text'
  components: [
    'title', 'paragraph'
  ]
]

components: 
  'title': 
    name: 'Title Header'
    # This would be the name when displayed in the context of a group.
    # Sometimes we want to use shorter names so as to not sound repetitive.
    # This is opt-in. If not set the UI will just use 'name'.
    groupName: 'Title'
  'paragraph':
    name: 'paragraph'
    # properties can be set to reorder properties or hide certain 
    # available properties in the user-interface (optional).
    properties: ['extra-space', 'position']

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
