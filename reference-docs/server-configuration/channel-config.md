#### Static Channel Configuration

Configuration file for a single channel:
```js
beforeRender: function (rendition, callback) {
  const livingdoc = rendition.getLivingdoc()
  const galleryTeasers = livingdoc.componentTree.find('gallery-teaser')

  extendGalleryTeasers(galleryTeasers, rendition, callback)
},

renditions: {
  'web': {
    output: {
      'html': {
        outputRenderer: new CheerioHtml({
          middleware: [
            addSocialLinks,
            addPublicationDate
          ]
        }),
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

metadataFormArrangement: [{
  name: 'title',
  form: 'li-meta-text-form',
  config: {service: 'defaultText'}
}, {
  name: 'description',
  form: 'li-meta-text-form',
  config: {service: 'defaultText'}
}]

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

publish: function ({documentVersion, renditions}, callback) {
  getDocumentCache().del(documentVersion.getDocumentId())
  callback()
},

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
