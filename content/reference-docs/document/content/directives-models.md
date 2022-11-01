---
title: Directive Models
weight: 4
menus:
  reference-docs:
    parent: Content
---

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
  origins: [{name: 'uez463x8ie39', identifier: 'hugo'}],
  focalPoint: {x: 234, y:123}
})

// Update the crop
imageDirective.setCrop({x: 0, y: 0, width: 250, height: 250})
```

Please notice that the (optional) `focalPoint` property needs to be within the image `width` and `height` bounds.
However, the focal point is not necessarily related to the `crop`.
The focal point gives the automatic cropping capabilities a hint what to include in the crop.
But the user may still adjust the crop manually which ignores, but still remembers the focal point. 

#### Video

```js
videoDirective.setContent({
  url: 'http://images.com/1',
  width: 400,
  height: 300,
  mimeType: 'image/jpeg',
  imageService: 'resrc.it',
  crop: {x: 100, y: 50, width: 200, height: 200},
  origins: [{name: 'uez463x8ie39', identifier: 'hugo'}]
})

// Update the crop
videoDirective.setCrop({x: 0, y: 0, width: 250, height: 250})
```


#### Html

type: 'html'
component template attribute: `doc-html`

```js
htmlDirective.setContent({
  html: '<div>Moby Dick</div>'
})
```


#### Link

type: 'link'
component template attribute: `doc-link`

```js
linkDirective.setContent({
  href: 'http://www.test.com/',
  target: '_blank'
})
```

Allowed values for `target`: '_blank', '_self', '_parent' or '_top'


#### Include

type: 'include'
component template attribute: `doc-include`

```js
includeDirective.setContent({
  service: 'list',
  params: {foo: 'bar'}
})

// Retrieve the params set on a directive (this includes defaultParams
// specified in the component configuration if they have not been overwritten).
includeDirective.getParams()


// setParams overwrites all parameters of this include.
includeDirective.setParams({foo: 'bar'})

// addParams merges the specified params with the existing ones
// (including any default params that may have been set in the component
// configuration).
includeDirective.addParams({foo: 'bar'})
```
