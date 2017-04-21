
# Framework: Directives

## Accessing Directives

Directives are always part of a `ComponentModel`. On a component you can access the
directives through the `directives` property which is a `DirectiveColletion`.

```js
// get hold of a specific directive
const textDirective = componentModel.directives.get('title')

// loop through all directives on a component in the order
// they are defined.
for (const directive in componentModel.directives) {
  directive.getContent()
}

// loop through each image directive on a component
componentModel.directives.eachImage((imageDirective) => {
  imageDirective.getUrl()
})


// Get the number of directives of a certain type
// on a component.
// Possible types: 'editable', 'image', 'html', 'link', 'include'
const count = componentModel.directives.count('include')
```


## Directive Types

#### Text

type: 'editable'
component template attribute: `doc-editable`

```js
textDirective.setContent('Lorem Ipsum dolorem...')
const content = textDirective.getContent()
```


#### Image

type: 'image'
component template attribute: `doc-image`

Minimal Example:
```js
imageDirective.setContent({url: 'http://images.com/1'})
```

Most of the time you will want to have optimized delivery with an image service.
For this `width`, `height`, `mimeType` as well as the `imageService` itself have
to be specified when setting an url.

Real World Example with image service:
```js
imageDirective.setContent({
  url: 'http://images.com/1',
  width: 400,
  height: 300,
  mimeType: 'image/jpeg',
  imageService: 'resrc.it',
  crop: {x: 100, y: 50, width: 200, height: 200},
  origins: [{name: 'uez463x8ie39', identifier: 'hugo'}]
})

// Update the crop
imageDirective.setCrop({x: 0, y: 0, width: 250, height: 250})
```


#### Html

type: 'html'
component template attribute: `doc-html`

```js
htmlDirective.setContent('<div>Moby Dick</div>')
```


#### Link

type: 'link'
component template attribute: `doc-link`

```js
linkDirective.setContent('http://www.test.com/')
```


#### Include

type: 'include'
component template attribute: `doc-include`

```js
includeDirective.setContent({
  service: 'list',
  params: {foo: 'bar'}
})

includeDirective.setParams({foo: 'bar'})
```


## Events

##### `componentContentChanged`

Whenever a directive is changed a `componentContentChanged` event is fired on the `componentTree` the `componentModel` is attached to. If the `componentModel` the directive belongs to is not attached to a `componentTree` no event is fired.
