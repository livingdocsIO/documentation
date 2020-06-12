## Removing a directive

Removing a directive in a design is a breaking change.
To denote it in the design you should use a major semver version (http://semver.org/). In any case you need to write a data migration in order to be able to open old documents with the new design. The below code is a sample migration for a design change that removes an editable directive called "author" from a component. 

_You will first need to configure a design for the migrations to work._

## Further reference
You can find various files such as demo designs, tests and code snippets used [here in our boilerplate](https://github.com/livingdocsIO/livingdocs-server-boilerplate/pull/132/files) before they were removed in favor of putting them into the documentation.

## Sample code snippet: 
```js
// Sample component "header", version 1.0.0 with editable directive "author"
// <div>
//   <h2 doc-editable="title">Title</h2>
//   <img doc-image="image"/>
//   <div>
//     <span doc-editable="date">Date</span>
//     <span doc-editable="author">Author</span>
//   </div>
// </div>

// Sample component "header", version 2.0.0 without ediatble directive "author"
// <div>
//   <h2 doc-editable="title">Title</h2>
//   <img doc-image="image"/>
//   <div>
//     <span doc-editable="date">Date</span>
//   </div>
// </div>

// These designs are loaded for test and tutorial purposes. In your migrations
// you will want to load your own design.
const _ = require('lodash')
const liSDK = require('@livingdocs/node-sdk')
const testDesignV1 = require('../../test/support/designs/test_design_1.0.0')

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
  callback(null, {
    serializedLivingdoc: livingdoc.serialize(),
    metadata
  })
}
```