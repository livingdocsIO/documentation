## Channel Configuration

The channel configuration allows you to:
- define different rendering outputs (renditions)
- define metadata
- define the metadata screen setup for the editor (this can be done on the server or in the editor whereas the server configuration takes precedence)
- configure the push notifications feature
- define document copy options
- define various frontend behaviors

The following sample configuration file illustrates all of the above.

Configuration file for a single channel:

```js
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
// for this to work you also must:
// 1. configure firebase in the server-wide `pushNotifications` configuration
// 2. have a metadata field with the (exact) name `pushNotifications`
// IMPORTANT: value can not contain more than three comma separated entries
// see firebase conditions for more details.
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

### Push Notifications

To enable push notifications for a channel you must have a metadata field called `pushNotifications`. Name and plugin must match exactly.
```
metadata: {
  pushNotifications: {
    plugin: 'li-push-notifications'
  }
}
```

With this in place you can set the channel configuration for your push notification topics (see example config above) and the firebase configuration in the [server config](./config.md#push-notifications).
