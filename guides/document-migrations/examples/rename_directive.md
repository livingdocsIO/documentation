## Renaming a directive

Renaming or moving a directive in a design is a breaking change. To denote it in the design you should use a major semver version (http://semver.org/). In any case you need to write a data migration in order to be able to open old documents with the new design. The below code is a sample migration for a design change that renames an image directive called "image" to "teaser".

_You will first need to configure a design for the migrations to work._

## Further reference
You can find various files such as demo designs, tests and code snippets used [here in our boilerplate](https://github.com/livingdocsIO/livingdocs-server-boilerplate/pull/132/files) before they were removed in favor of putting them into the documentation.

## Sample code snippet: 
```js
// Sample component "header", version 2.0.0 with image directive "image"
// <div>
//   <h2 doc-editable="title">Title</h2>
//   <img doc-image="image"/>
//   <div>
//     <span doc-editable="date">Date</span>
//   </div>
// </div>

// Sample component "header", version 3.0.0 with image directive "teaser"
// <div>
//   <h2 doc-editable="title">Title</h2>
//   <img doc-image="teaser"/>
//   <div>
//     <span doc-editable="date">Date</span>
//   </div>
// </div>

// These designs are loaded for test and tutorial purposes. In your migrations
// you will want to load your own design.
const _ = require('lodash')
const liSDK = require('@livingdocs/node-sdk')
const testDesignV2 = require('../../test/support/designs/test_design_2.0.0')
const testDesignV3 = require('../../test/support/designs/test_design_3.0.0')

// Method name must be "migrate"
// Parameters:
//   serializedLivingdoc: The Livingdocs data model (JSON)
//   metadata: The document's metadata (JSON)
// Return:
//  serializedLivingdoc: will overwrite the input
//  metadata: will overwrite the input
//
// The grunt task 'data-migrations' will call this migration method with every
// document of the project you specify in the task.
exports.migrate = function ({serializedLivingdoc, metadata} = {}, callback) {
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
  callback(null, {
    serializedLivingdoc: livingdocV3.serialize(),
    metadata
  })
}
```