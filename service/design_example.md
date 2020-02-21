# Embedded Design Example

This is a small example to setup an embedded design for the service.

## Use embedded design
- Add following properties to the index.js in the [project config](./project_config.md)

```js
designSettings: require('./design-settings'),
components: [
  require('./components/image'),
  require('./components/insta'),
  require('./components/title'),
  require('./components/paragraph')
]
```

### designSettings

We use external assets because we can’t upload it at the moment on the livingdocs service
The assets (javascript, css and images) has to be uploaded on an external service manually (cdn/s3).

```js
// ./design-settings.js
module.exports = {
 
  // assets for the design
  assets: {
    css: [
      // https://materializecss.com/
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
    ]
  },
 
  // group components
  componentGroups: [{
    name: 'content',
    label: 'Components',
    components: ['title', 'p', 'image', 'insta']
  }],
 
  // default components for a paragraph and image
  defaultComponents: {
    paragraph: 'p',
    image: 'image'
  },
 
  // extract the content of a field to set a metadata 
  fieldExtractor: [{
    identifier: 'title',
    type: 'text',
    matches: ['title.title']
  }]
}
```
 
### components

For each component we create a file.

#### paragraph
```js
// ./components/paragraph.js

// add dedent to your package.json
const dedent = require('dedent')
 
module.exports = {
  name: 'p',
  label: 'Paragraph',
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_text.svg',
  html: dedent`
    <p class="text" doc-editable="text">
      Paragraph
    </p>
  `
}
```

#### image

```js
// ./components/image.js

const dedent = require('dedent')
 
module.exports = {
  name: 'image',
  label: 'Image',
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_image.svg',
  directives: [{
    name: 'img',
    type: 'image',
    imageRatios: ['16:9', '1:1', '4:3', '3:4']
 }],
  html: dedent`
<img
doc-image="img"
class="responsive-img">
  `
}
```

#### title

```js
// ./components/title.js

const dedent = require('dedent')
 
module.exports = {
  name: 'title',
  label: 'Title',
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_header_simple.svg',
  html: dedent`
    <h2 doc-editable="title">Title</h2>
    `
}
```

#### instagram

```js
// ./components/instagram.js

const dedent = require('dedent')
 
module.exports = {
  name: 'insta',
  label: 'Instagram',
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_image.svg',
  directives: [{
    name: 'insta',
    type: 'include',
    service: 'instagram'
  }],
  html: dedent`
    <div doc-include="insta">
        <div>Instagram Include</div>
    </div>`
}
```