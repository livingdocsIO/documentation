---
title: "Example: Rename a directive"
linkTitle: Rename a directive
tags: [guides, maintenance]
menus:
  guides:
    parent: Livingdocs Data Migrations
---

Renaming or moving a directive in a design is a breaking change. To denote it in the design you should use a major semver version (https://semver.org/). In any case you need to write a data migration in order to be able to open old documents with the new design. The below code is a sample migration for a design change that renames an image directive called "image" to "teaser".


Designs for the example
- [test@2.0.0](../designs/test_design_2.0.0.js)
- [test@3.0.0](../designs/test_design_3.0.0.js)

```js
const _ = require('lodash')
const liSDK = require('@livingdocs/node-sdk')
const testDesignV2 = require('../designs/test_design_2.0.0.js')
const testDesignV3 = require('../designs/test_design_3.0.0.js')

module.exports = {
  async migrateAsync ({serializedLivingdoc, metadata, systemdata}) {
    // You can work directly on the JSON or create a livingdoc instance from
    // it and use the livingdoc API. We do the latter in this example.
    const livingdocV2 = liSDK.document.create({
      content: serializedLivingdoc.content,
      design: testDesignV2
    })

    // First we save all the data from the old image directive.
    // This is an array since in theory there could be more than one header in
    // the document.
    const imagesData = []
    const headersV2 = livingdocV2.componentTree.find('header')
    _.each(headersV2, function (header) {
      const imageDirective = header.directives.get('image')
      const imageData = imageDirective.getContent()
      imagesData.push(imageData)
      // We set the image directive's content to undefined in order to reset it
      // NOTE: the image directive has no reset API yet, thus we use the private
      // API.
      imageDirective.content = undefined
    })

    // In order to add the teaser we need to load the document in the new design
    // only the new design has a "teaser" directive.
    const livingdocV3 = liSDK.document.create({
      content: livingdocV2.serialize().content,
      design: testDesignV3
    })

    const headersV3 = livingdocV3.componentTree.find('header')
    _.each(headersV3, function (header, index) {
      // For each header in the document loaded with the new design we get the
      // "teaser" directive
      const teaserDirective = header.directives.get('teaser')
      const respectiveImageData = imagesData[index]
      // and set the image data we got above to it.
      // NOTE: we need to set the url to the originalUrl of the data we got. This
      // is because the Livingdocs Framework automatically applies image service
      // information to an image URL.
      teaserDirective.setContent({
        url: respectiveImageData.originalUrl,
        width: respectiveImageData.width,
        height: respectiveImageData.height,
        mimeType: respectiveImageData.mimeType,
        imageService: respectiveImageData.imageService,
        origins: respectiveImageData.origins,
        crop: respectiveImageData.crop
      })
    })

    // return the modified serializedLivingdoc and metadata
    // those will overwrite the ones you got as an input and the migration is
    // done.
    return {serializedLivingdoc: livingdocV3.serialize(), metadata}
  }
}
```
