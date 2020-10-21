## Example: Remove a directive

Removing a directive in a design is a breaking change.
To denote it in the design you should use a major semver version (http://semver.org/). In any case you need to write a data migration in order to be able to open old documents with the new design. The below code is a sample migration for a design change that removes an editable directive called "author" from a component.


Designs for the example
- [test@1.0.0](../designs/test_design_1.0.0.js)

```js
const _ = require('lodash')
const liSDK = require('@livingdocs/node-sdk')
const testDesignV1 = require('../designs/test_design_1.0.0.js')

module.exports = {
  async migrateAsync ({serializedLivingdoc, metadata, systemdata}) {
    // You can work directly on the JSON or create a livingdoc instance from
    // it and use the livingdoc API. We do the latter in this example.
    const livingdoc = liSDK.document.create({
      content: serializedLivingdoc.content,
      design: testDesignV1
    })

    // First we get all the header components in this document. This is the
    // component for which we need to remove the 'author' directive
    const headers = livingdoc.componentTree.find('header')
    _.each(headers, function (header) {
      // Then we get the author directive from the header component.
      // Each component has a collection of directives where you can get a single
      // directive by directives.get(directiveName)
      // And yes, the directiveName has to be unique within a component
      const authorDirective = header.directives.get('author')
      // In order to prepare this document for a design version that has no author
      // directive in the header component, we need to simply set the content to
      // undefined.
      authorDirective.setContent(undefined)
    })

    // return the modified serializedLivingdoc and metadata
    // those will overwrite the ones you got as an input and the migration is
    // done.
    return {serializedLivingdoc: livingdoc.serialize(), metadata}
  }
}
```
