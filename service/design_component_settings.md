# Component settings
Please continue to the [component config](../reference-docs/common-designs/component_config.md) section. In this section everything is described with the html template. Please use instead the following template: 

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