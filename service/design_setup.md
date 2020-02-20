# Design setup
This is a small example to setup a design for the service. On the service the embedded design is used. Otherwise we only can use a default design and can't change it.

## Use embedded design
- Add following properties to the index.js in the [project config](./project_setup.md)

```
designSettings: require('./design_settings'),
components: [
  require('./components/image'),
  require('./components/insta'),
  require('./components/title'),
  require('./components/paragraph')
]
```

### The design_settings
We use external assets because we can’t upload it at the moment on the livingdocs service
The assets (javascript, css and images) has to be uploaded on an external service manually.
```
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
 
### The component configs
For each component we create a file
The dedent must be installed with npm in the project

#### paragraph
```
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
```
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
```
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
```
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

## Design restrictions
At the moment following changes on the design are not supported.
- rename a directive in a component
- rename a component
- add a new directive to a component
- remove a component (please remove it only from the content-type)

## Design links
Use the https://github.com/livingdocsIO/magazine-example Design example to see a design example. This is not an embedded Design so it can't be used the same way as an embedded design.