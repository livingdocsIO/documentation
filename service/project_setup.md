# Get Started with the Service
With the following steps a project can be setup and used with a own design.

# Project setup
- Setup a project on the livingdocs Service: https://edit.livingdocs.io/
- Add an API Token
- Add your Design to the project (check Design setup section)
- Add Content types (use also livingdocs-cli)
- Define in each Content Type the components and metadata
- Create groups with the different Rights
- Invite Users to your project

# Design setup
Use the https://github.com/livingdocsIO/magazine-example Design example to see a design example. This is not an embedded Design so it can't be used the same way as an embedded design.

The config options for a design: [design configs](./reference-documentation/livingdocs-design/component_config.md)

### project config download and changes
With the following steps an embedded Design can be created for the new project.

- Install the cli project npm install -g livingdocs-cli
- Use the API Token you have added to your project → LI_TOKEN=
- export LI_DIST_FOLDER=
- export LI_HOST=https://server.livingdocs.io
- livingdocs-cli project-config:download
- Go into your LI_DIST_FOLDER folder
- Now you can change your project settings
- We will use an embedded design
- Add following properties to the index.js

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
The assets (javascript, css and images) has to be uploaded on an external service by hand.
```
module.exports = {
 
  assets: {
    css: [
      // https://materializecss.com/
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
    ]
  },
 
  componentGroups: [{
    name: 'content',
    label: 'Components',
    components: ['title', 'p', 'image', 'insta']
  }],
 
  defaultComponents: {
    paragraph: 'p',
    image: 'image'
  },
 
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
   
### publish the changes to the project on the service
- `livingdocs-cli project-config:publish -d /mnt/c/temp/cli-service`
With this command the project gets updated and has his own embedded design

## Design restrictions
At the moment following changes on the design are not supported.
- rename a directive in a component
- rename a component
- add a new directive to a component


# Frontend
Use the public api to get all Documents
https://edit.livingdocs.io/public-api
