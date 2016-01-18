
# Directives

## Accessing Directives

Directives are always part of a `ComponentModel`. On a component you can access the
directives through the `directives` property which is a `DirectiveColletion`.

```coffee
# get hold of a specific directive
textDirective = componentModel.directives.get('title')

# loop through all directives on a component in the order
# they are defined.
for directive in componentModel.directives
  directive.getContent()

# loop through each image directive on a component
componentModel.directives.eachImage (imageDirective) ->
  imageDirective.getUrl()

# Get the number of directives of a certain type
# on a component.
# Possible types: 'editable', 'image', 'html', 'link', 'include'
count = componentModel.directives.count('include')
```


## Directive Types

#### Text

type: 'editable'
component template attribute: `doc-editable`

```coffee
textDirective.setContent('Lorem Ipsum dolorem...')
content = textDirective.getContent()
```


#### Image

type: 'image'
component template attribute: `doc-image`

```coffee
imageDirective.setContent
  url: 'http://images.com/1'
  width: 400
  height: 300
  mimeType: 'image/jpeg'
  imageService: 'resrc.it'
  crop: {x: 100, y: 50, width: 200, height: 200}
  origins: [{name: 'uez463x8ie39', identifier: 'hugo'}]

# Update the crop
imageDirective.setCrop({x: 0, y: 0, width: 250, height: 250})
```


#### Html

type: 'html'
component template attribute: `doc-html`

```coffee
htmlDirective.setContent('<div>Moby Dick</div>')
```


#### Link

type: 'link'
component template attribute: `doc-link`

```coffee
linkDirective.setContent('http://www.test.com/')
```


#### Include

type: 'include'
component template attribute: `doc-include`

```coffee
includeDirective.setContent
  service: 'list'
  params: {foo: 'bar'}

includeDirective.setParams({foo: 'bar'})
```


## Events

#### `componentContentChanged`

Whenever a directive is changed a `componentContentChanged` event is fired on the `componentTree` the `componentModel` is attached to. If the `componentModel` the directive belongs to is not attached to a `componentTree` no event is fired.
