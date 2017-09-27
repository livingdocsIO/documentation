#### Channel Configuration

The channel configuration allows you to:
- define alterations of your content before Rendering
- define different rendering outputs (renditions)
- define metadata
- define the metadata screen setup for the editor (this can be done on the server or in the editor whereas the server configuration takes precedence)
- configure the push notifications feature
- implement hook methods that are called on publish and on unpublish
- define document copy options
- define various frontend behaviors

The following sample configuration file illustrates all of the above.

Configuration file for a single channel:
```js
// run before the rendering process, the same for all renditions
beforeRender: function (rendition, callback) {
  const livingdoc = rendition.getLivingdoc()
  const galleryTeasers = livingdoc.componentTree.find('gallery-teaser')

  extendGalleryTeasers(galleryTeasers, rendition, callback)
},

// define a set of renderings for your channel
renditions: {
  // a label
  'web': {
    output: {
      // an output renderer
      'html': {
        outputRenderer: new CheerioHtml({
          // middlewares for content alterations
          middleware: [
            addSocialLinks,
            addPublicationDate
          ]
        }),
        // resolve definitions for doc-includes
        resolveIncludes: ['embed-teaser', 'list', 'categoryList']
      }
    }
  },
  'app': {
    output: {
      'json': {
        outputRenderer: appRenderer
      }
    }
  }
},

// define the server-side metadata
metadata: {

  // invisible editor metadata
  author: { plugin: 'li-text' },

  // A required metadata field
  description: {
    plugin: 'li-text',
    config: {
      required: true,
      requiredErrorMessage: 'please provide a short description'
    }
  }
},

// define the layout of the metadata screen in the editor
metadataFormArrangement: [{
  name: 'title',
  form: 'li-meta-text-form',
  config: {service: 'defaultText'}
}, {
  name: 'description',
  form: 'li-meta-text-form',
  config: {service: 'defaultText'}
}]

// setup the push notification feature if applicable
pushNotifications: {
  topics: [{
    handle: 'breaking-news',
    label: 'Breaking News',
    value: 'ios_de_breakingnews, android_de_breakingnews'
  }, {
    handle: 'sport',
    label: 'Sport',
    value: 'ios_de_sports, android_de_sports'
  }]
}

// called whenever a document is published, gets the structured document (documentVersion) and all renderings (renditions)
publish: function ({documentVersion, renditions}, callback) {
  getDocumentCache().del(documentVersion.getDocumentId())
  callback()
},

// called whenever a document is unpublished
unpublish: function ({documentVersion}, callback) {
  getDocumentCache().del(documentVersion.getDocumentId())
  callback()
},

editor: {
  frontend: {
    // link pattern for ld-editor publish panel to generate a link
    // Available placeholders:
    // :path
    // :routingPath
    // :id
    // :projectId
    // :slug
    preview: 'http://localhost:9999/:slug',

    // link pattern for api access to that document
    // The same placeholders apply as for the preview
    api: ''

    // Iframe embed code
    // Available placeholders:
    // :fallbackLink
    // :articleId
    // :projectId
    // :title
    iframe: ''


  },

  images: {
    // whitelist of hosts for image urls that are drag & dropped into the editor
    whitelist: ['//pixabay.com']
  }
},

copy: [
  source: {
    design: 'basic',
    layout: 'default'
  },
  target: [
    design: 'basic',
    layout: 'default',
    options: {
      copyUnknownComponents: false
    },
    metadata: {
      map: [
        {from: 'title', to: 'title'},
        'tasks',
        {from: 'author', to: 'description'}
      ]
    }
  ]
]
```


## A visual example of the `editor.frontend` configuration

In the Livingdocs Editor navigate to the publish panel. Once you published a
document, you get three links on the right-hand side of the screen: a preview,
an API link and an Iframe embed code.

![API Link](./api_link.png)

<!-- todo (LP) this is not a link to our api -->
Click the "Use API access" link and you will get a new browser page with a JSON response.
This is the API result for a single document.
