---
title: Hugo Drag & Drop
description: Configure image and document imports from Hugo via Drag & Drop
weight: 3
---

## Basic Configuration

To enable dragging both images and documents from _huGO+_ into livingdocs you first need to configure `hugo.resource`
in the [server configuration]({{< ref "/reference-docs/server-configuration/_index.md" >}})


## Image Drag and Drop

Images can be dragged onto a livingdocs document directly from _huGO+_ after the basic configuration is set up.

Note: you can restrict from which sources images can be uploaded, e.g. you could allow only uploads from _huGO+_.
See [Image Source Policy]({{< ref "/reference-docs/editor-configuration/image-source-policy.md" >}})


## Document Drag and Drop

In case you use _huGO+_ as Digital Assets Management software, you can import articles from huGO+ by dragging and dropping them onto a livingdocs dashboard.

There are two types of articles available for imports:
* Agency articles
  These are imported from established news agencies like _DPA_, _Reuters_, etc.
* Archive articles
  They come from sources you specify on your own: If you have a print system or any other system and wish to feed articles into huGO+ you would get Archive articles.


### Preparation

Think about what types of articles you want to create from an imported hugo document and which contentType you'd like them to have. You can specify multiple target documents with different contentTypes.

### Configuration

This configuration is needed to let the server know what kind of target designs and layouts are available, which transformations handle them and where these transformations are located.

```js
// conf/environments/all.js

hugo: {
  targets: {
    // basePath is the root directory for transformations
    basePath: path.resolve('./plugins/hugo-import-transformations'),
    // huGO+ provides two types of articles, encoded as 'articleAgency' and 'articleArchive'
    articleAgency: {
      // Specify the directory that contains transformations for agency articles
      dir: 'agency',
      // Arbitrary number of targets possible
      layouts: [{
        // You'd typically want to specify your own design here
        design: 'timeline',
        // This can be any contentType from your project.
        layout: 'regular',
        // This corresponds to a file named 'regular.js' that holds code for this particular transformation
        transformation: 'regular'
      }, {
        design: 'limestone',
        layout: 'report',
        transformation: 'lime_report'
      }]
    },
    articleArchive: {
      dir: 'archive'
      layouts: [
        design: 'timeline'
        layout: 'magazine'
        transformation: 'magazine'
      ]
    }
  }
}
```

**Important**: Every item in the configuration object is required for the feature to work.

### Transformations

Now that you have configured the feature you'll want to provide transformations so the huGO+ document can be converted to a document that corresponds to your design and layout.

A transformation is a single function that is expected to return an object containing a [`livingdoc`]({{< ref "/reference-docs/content-model/livingdocs-api.md" >}}) and [`metadata`]({{< ref "/reference-docs/server-api/metadata.md" >}}) and should have following signature:

```js
// E.g. ./plugins/hugo-import-transformations/agency/regular.js

module.exports = function ({hugoArticle, design, layout, metadata, imagesApi}, callback) {
  // ...
  // Create a livingdoc and collect metadata
  // ...
  callback(null, {livingdoc, metadata})
}
```

You are provided with the `hugoArticle` you imported, the `design` and `layout` you have specified in your config and the `imagesApi` which is a service you can use to handle images, e.g. uploading them to your storage. You also have the possibility to pass additional metadata which must have been defined beforehand (see below).

### Example transformation

```js
const async = require('async')
const framework = require('@livingdocs/server/framework')

module.exports = function ({hugoArticle, design, layout, metadata, imagesApi}, callback) {
  transform({hugoArticle, design, layout, imagesApi}, function (err, livingdoc) {
    if (err) return callback(err)
    const metadata = getMetadata(hugoArticle)
    callback(null, {livingdoc, metadata})
  })
}

function transform ({hugoArticle, design, layout, imagesApi}, callback) {
  const imageService = conf.get('image_service') // You'll need to configure an imageservice like 'imgix' if you'd like to use images
  framework.design.add(design)
  const livingdoc = createEmptyLivingdoc({name: design.name, version: design.version}, layout)
  const tree = livingdoc.componentTree

  // Header
  const header = createHeader(hugoArticle.title, tree)
  tree.append(header)

  // Body as a collection of paragraphs
  for (const text of hugoArticle.text) {
    const p = createParagraph(text, tree)
    tree.append(p)
  }

  // Handle images
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

// Extract metadata
function getMetadata (hugoArticle) {
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

  return metadata
}
```

### Metadata
You might want to store data that's embedded in each `hugoArticle` thus you need to specify that data in order for it to be valid.

#### Metadata plugin
```js
// plugins/metadata/hugo.js

module.exports = {
  name: 'hugo',
  schema: {
    additionalProperties: false,
    properties: {
      id: {
        plugin: 'li-text'
      },
      category: {
        plugin: 'li-text'
      },
      urgency: {
        plugin: 'li-number'
      },
      source: {
        plugin: 'li-text'
      },
      timestamp: {
        plugin: 'li-datetime'
      },
      service: {
        plugin: 'li-text'
      },
      keywords: {
        plugin: 'li-text'
      },
      note: {
        plugin: 'li-text'
      }
    }
  }
}
```

#### Elasticsearch metadata
The metadata you have specified should be made known to Elasticsearch as well.

```js
// app/search/custom-mappings/document_metadata.json

// ...
"hugo": {
  "properties": {
    "id": {
      "type": "string",
      "index": "not_analyzed"
    },
    "category": {
      "type": "string",
      "index": "not_analyzed"
    },
    "urgency": {
      "type": "integer",
      "index": "not_analyzed"
    },
    "source": {
      "type": "string",
      "index": "not_analyzed"
    },
    "timestamp": {
      "type": "date",
      "format": "strict_date_time",
      "index": "not_analyzed"
    },
    "service": {
      "type": "string",
      "index": "not_analyzed"
    },
    "keywords": {
      "type": "string",
      "index": "not_analyzed"
    },
    "note": {
      "type": "string",
      "index": "not_analyzed"
    }
  }
}
// ...

```

#### Configure articles
At last you have to configure all your possible huGO+ targets with the metadata plugin you created before.

```js
  // E.g. conf/channels/web/article/all.js
  //  or conf/channels/web/magazine/all.js

  hugo: {plugin: 'hugo'}
```
