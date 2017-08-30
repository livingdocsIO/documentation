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

// define the layout of the metadata screen in the editor (this can also be configured in the editor)
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


## Hooks

A few APIs are provided to allow hooking into the document (un)publication process and into the rendering pipeline.

Although these hooks should preferably be registered before the server gets initialized (using [Server Initialized Hooks](../../reference-docs/server-extensions/server-initalization.md#initialized-hooks)), it is also possible to register them at runtime using the same APIs. (This is particularly handy for testing purpose, but also useful if you create projects or channels at runtime and need to set hooks for these.)

All hooks are asynchronous functions, registered asynchronously using the common signature: `({projectHandle, channelHandle, namedHook}, callback)`. The hook provided must have the signature `({documentType, payload}, callback)`. The `payload` is the only thing that varies by hook type.

Each hook is tied to a specific channel of a specific project. For a single channel, you can only register one hook of each type:

```js
registerPublicationHooks({projectHandle: 'foo', channelHandle: 'bar', publishHook: myHook})
// the following register call will overwrite `myHook` with `myOtherHook`:
registerPublicationHooks({projectHandle: 'foo', channelHandle: 'bar', publishHook: myOtherHook})
```

Since hooks get passed the `documentType` of a document, it is up to the hook implementer to filter by `documentType` if need be. This can be used to apply different modifications to documents that have different `documentType`s.

Examples for each hook type:

### Publish/Unpublish Hooks

These two are set at once on the `documents` feature:

* `publishHook`:
    * `({documentType, {documentVersion, renditions}}, callback)`
* `unpublishHook`:
    * `({documentType, {documentVersion}}, callback)`

```js
const server = require('livingdocs-server/core')
const config = require('livingdocs-server/conf')
const liServer = server(config)
const port = liServer.config.get('server:port')


liServer.registerInitializedHook((done) => {
  liServer.features.api('li-documents').registerPublicationHooks({
    projectHandle: 'your-awesome-project',
    channelHandle: 'some-channel',
    publishHook: ({
      documentType,
      payload // payload is {documentVersion, renditions}
    }, callback) => {
      liServer.log.info(`Hook called for documentType: ${documentType}!`)
      liServer.log.debug({
        documentVersion: payload.documentVersion,
        renditions: payload.renditions
      })
      callback()
    },
    unpublishHook: ({
      documentType,
      payload // payload is {documentVersion}
    }, callback) => {callback()}
  }, done)
})

liServer.listen(port, function (err) {
  if (err) throw err
  liServer.log.info('Listening on http://localhost:%s, started within %ss', port, process.uptime())
})
```

### Before Render Hooks

This one hooks into the `render-pipeline` feature. The `beforeRenderHook` is the last opportunity you have to modify/transform a document before it bets rendered.

* `beforeRenderHook`:
    * `({documentType, rendition}, callback)`

Here is a full example including server initialization:

```js
const server = require('livingdocs-server/core')
const config = require('livingdocs-server/conf')
const liServer = server(config)
const port = liServer.config.get('server:port')


liServer.registerInitializedHook((done) => {
  liServer.features.api('li-render-pipeline').registerRenderHooks({
    projectHandle: 'your-interesting-project',
    channelHandle: 'some-channel',
    beforeRenderHook: ({documentType, rendition}, callback) => {
      if (['interview', 'biography'].includes(documentType)) {
        liServer.log.info("We're about to render something about somebody!")
        // do something with the rendition:
        const livingdoc = rendition.getLivingdoc()
        const galleryTeasers = livingdoc.componentTree.find('gallery-teaser')

        return extendGalleryTeasers(galleryTeasers, rendition, callback)
      }

      callback()
    }
  }, done)
})

liServer.listen(port, function (err) {
  if (err) throw err
  liServer.log.info('Listening on http://localhost:%s, started within %ss', port, process.uptime())
})
```

### Document Lists Hooks

Two hooks are available in the `document-lists` feature.

* `listUpdateHook`:

        ({
          listId,
          remove: [30, 199, …],
          add: [{id: 77, order: 12}, …]
        }, callback)

    The payload describe here has a custom format where it gives the added and removed `documentId`s. A use case would be to e.g. have Elasticsearch reflect changes that got detected here.

* `getExternalList`:
    * `({listId}, callback)`

    This one is different from other hooks. This is a method to get the current `documentId`s from an external storage. A use case might be to have a `repairList` task to check if there are inconsistencies between e.g. a list exported to Elasticsearch by the `listUpdateHook` and the list that lives in Postgres.

Here is a full example including server initialization:

```js
const server = require('livingdocs-server/core')
const config = require('livingdocs-server/conf')
const liServer = server(config)
const port = liServer.config.get('server:port')


liServer.registerInitializedHook((done) => {
  liServer.features.api('li-document-lists').registerListHooks({
    projectHandle: 'your-interesting-project',
    channelHandle: 'some-channel',
    listUpdateHook: ({listId, remove, add}, callback) => {
      console.info(`${listId} update happening, removing ${remove.length} things, adding ${add.length} things.`)
      callback()
    },
    getExternalList: ({listId}, callback) => {
      console.info(`Getting list ${listId}`)
      callback()
    }
  }, done)
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
