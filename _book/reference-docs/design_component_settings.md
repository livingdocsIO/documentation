# Design component

Example:

```javascript
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

The [component config reference documentation](https://github.com/livingdocsIO/livingdocs/tree/bc45ad164d41aa10cdb72c2e832e4e0b334c9a7b/reference-docs/common-designs/component_config.md) describes everything you need to know about components. The 'component config reference documentation' example uses an outdated format, but with the above example, you should be able to adapt the code.

