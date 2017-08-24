#### Channel Configuration

The channel configuration allows you to:
- implement a hook method to alter document content before Rendering
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


## Hooks: before render, on publish, on unpublish

A few APIs are provided to allow hooking into the document (un)publication process and into the rendering pipeline.

Although these hooks should preferably be registered before the server gets initialized, it is also possible to register them at runtime using the same APIs. (This is particularly handy for testing purpose, but also useful if you create projects or channels at runtime and need to set hooks for these.)

All hooks are asynchronous functions that are registered synchronously using the common signature: `({projectHandle, channelHandle, hook})`. The function `hook` passed here has the signature `({contentType, payload}, callback)`. The `payload` is the only thing that vary by hook type.

Each hook is tied to a specific channel of a specific project. For a single channel, you can only register on hook of each type:

```js
registerPublishHook({projectHandle: 'foo', channelHandle: 'bar', hook: myHook})
// the following register call will overwrite `myHook` with `myOtherHook`:
registerPublishHook({projectHandle: 'foo', channelHandle: 'bar', hook: myOtherHook})
```

Since hooks get passed the document `contentType`, it is up to the hook implementer to filter by `contentType` if need be. This can be used to apply different modifications to documents that have different `contentTypes`.

Examples for each hook type:

### Publish/Unpublish Hooks

These two are set on the `documents` feature.

```js
// publish hook
liServer.features.api('li-documents').hooks
  .registerPublishHook({
    projectHandle: 'your-awesome-project',
    channelHandle: 'some-channel',
    hook: ({
      contentType,
      payload // payload is {documentVersion, renditions}
    }, callback) => {
      liServer.log.info(`Hook called for contentType: ${contentType}!`)
      liServer.log.debug({
        documentVersion: payload.documentVersion,
        renditions: payload.renditions
      })
      callback()
    }
  })

// unpublish hook
liServer.features.api('li-documents').hooks
  .registerUnpublishHook({
    projectHandle: 'your-awesome-project',
    channelHandle: 'some-channel',
    hook: ({
      contentType,
      payload // payload is {documentVersion}
    }, callback) => {
      liServer.log.info({documentVersion: payload.documentVersion}, `of type ${contentType} will get unpublished!`)
      callback()
    }
  })
```

### Before Render Hooks

This one hooks into the `render-pipeline` feature. Here is a full example including server initialization:

```js
const server = require('livingdocs-server/core')
const config = require('livingdocs-server/conf')
const liServer = server(config)
const port = liServer.config.get('server:port')

liServer.features.api('li-render-pipeline').registerBeforeRenderHook({
  projectHandle: 'your-interesting-project',
  channelHandle: 'some-channel',
  hook: ({contentType, rendition}, callback) => { // here `payload` is a rendition
    if (['interview', 'biography'].includes(contentType)) {
      liServer.log.info("We're about to render something about somebody!")
      // do something with the rendition:
      const livingdoc = rendition.getLivingdoc()
      const galleryTeasers = livingdoc.componentTree.find('gallery-teaser')

      return extendGalleryTeasers(galleryTeasers, rendition, callback)
    }

    callback()
  }
})

liServer.listen(port, function (err) {
  if (err) throw err
  liServer.log.info('Listening on http://localhost:%s, started within %ss', port, process.uptime())
})
```


## A visual example of the `editor.frontend` configuration

In the Livingdocs Editor navigate to the publish panel. Once you published a
document, you get three links on the right-hand side of the screen: a preview,
an API link and an Iframe embed code.

![API Link](./api_link.png)

<!-- todo (LP) this is not a link to our api -->
Click the "Use API access" link and you will get a new browser page with a JSON response.
This is the API result for a single document.
