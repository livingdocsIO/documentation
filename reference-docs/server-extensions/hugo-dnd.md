# Hugo Drag and Drop

## Overview

In case you use _Hugo_ as Digital Assets Management software, you can import articles from hugo by dragging and dropping them into livingdocs. There are two types of articles available for imports: _Agency_ and _Archive_ articles.

## Preparation

Think about what types of articles you want to create from an imported hugo document, what design and layout you'd like them to have. You can specify any number of target documents with designs and layouts that are available to you.

## Configuration

```coffee
# all.coffee

hugo:
  targets:
    basePath: path.resolve('./plugins/hugo-import-transformations')
    # Hugo provides two types of articles, encoded as 'articleAgency' and 'articleArchive'
    articleAgency:
      dir: 'agency' # Specify the directory that contains transformations for agency articles
      layouts: [ # Arbitrary number of targets possible
        design: 'timeline' # You'd typically want to specify your own design here
        layout: 'regular' # This can be any layout that is embedded in your design
        transformation: 'regular' # This corresponds to a file named 'regular.js'
      ,
        design: 'limestone'
        layout: 'report'
        transformation: 'lime_report'
      ]
    articleArchive:
      dir: 'archive'
      layouts: [
        design: 'timeline'
        layout: 'magazine'
        transformation: 'magazine'
      ]
```

Every item in the configuration is required for the feature to work.

## Transformations

Now that you have configured the feature you'll want to provide transformations so the hugo document can be converted to a document that corresponds to your design and layout.

A transformation is a single function that is expected to return an object containing a `livingdoc` and `metadata` and should have following signature:

```js
// E.g. ./plugins/hugo-import-transformations/agency/regular.js

module.exports = function ({hugoArticle, design, targetLayout, imagesApi}, callback) {
  // ...
  // Create a livingdoc and collect metadata
  // ...
  callback(null, {livingdoc, metadata})
}
```

You are provided with the `hugoArticle` you imported, the `design` and `layout` you have specified in your config and the `imagesApi` which is a service you can use to handle images.

## Example transformation

```js
const async = require('async')
const framework = require('@livingdocs/server/framework')

module.exports = function ({hugoArticle, design, targetLayout, imagesApi}, callback) {
  const imageService = conf.get('image_service') // You'll need to configure an imageservice like 'resrc.it' if you'd like to use images
  framework.design.add(design)
  const livingdoc = createEmptyLivingdoc({name: design.name, version: design.version}, targetLayout)
  const tree = livingdoc.componentTree
  // the header part
  const header = createHeader(hugoArticle.title, tree)
  tree.append(header)

  // the body as collection of paragraphs
  for (const text of hugoArticle.text) {
    const p = createParagraph(text, tree)
    tree.append(p)
  }

  // all images in the end
  const imageUploader = function (image, cb) {
    const job = imagesApi.createImageJob({url: image.url})
    imagesApi.processJob(job, (err, imageInfo) => {
      if (err) return cb(err)
      return cb(null, {imageInfo, image})
    })
  }

  const hugoImages = hugoArticle.images || []
  // the images have to be added to the document in order
  async.map(hugoImages, imageUploader, function (err, livingdocsImages) {
    if (err) return callback(err)
    for (const {imageInfo, image} of livingdocsImages) {
      const imageComponent = createImage(imageInfo, image, imageService, tree)
      tree.append(imageComponent)
    }

    callback(null, livingdoc)
  })
}

const createEmptyLivingdoc = function (targetDesign, layout) {
  return framework.create({
    content: [],
    design: targetDesign,
    layoutName: layout
  })
}

const createHeader = function (title, tree) {
  const headerComponent = tree.createComponent('header')
  const titleDirective = headerComponent.directives.get('title')
  titleDirective.setContent(title)
  return headerComponent
}

const createParagraph = function (text, tree) {
  const paragraphComponent = tree.createComponent('p')
  paragraphComponent.setContent('text', text)
  return paragraphComponent
}

const createImage = function ({url, height, width, size, mime: mimeType},
  hugoImage, imageService, tree) {
  const imageComponent = tree.createComponent('image')
  imageComponent.setContent('image', {url, height, width, size, mimeType, imageService})
  imageComponent.setContent('caption', hugoImage.caption)
  imageComponent.setContent('source', hugoImage.agency)
  return imageComponent
}
```

## Example Metadata extraction

```js
const hugoMetadata = {
  id: hugoArticle.id,
  category: hugoArticle.category,
  urgency: hugoArticle.urgency,
  source: hugoArticle.source,
  timestamp: new Date(hugoArticle.hugoTimestamp).toISOString(),
  service: hugoArticle.service,
  keywords: hugoArticle.keywords
}

const metadata = {
  hugo: hugoMetadata,
  title: hugoArticle.title
}
```
