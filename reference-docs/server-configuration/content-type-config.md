# Content Type Configuration

You can define as many contentTypes per channel as you want. A contentType represents
a specific kind of document. The contentTypes define which components can be used in
a document and which metadata are present.

Whenever you create a document you have to choose of what contentType it will be. The contentType of a document cannot be changed after creation.

The `documentType` distinguishes between articles and pages. Articles will be accessible in the main dashboard in the editor. Pages appear on a different screen. It is also possible to give distinct permissions for articles or pages.

*Important to know* For every `contentType` there must be a `layout` in the design.
The name layout of the layout must be exactly the same as the `contentType.handle`.

We plan to allow to move all layout options which are currently defined in the design to the `contentType` configuration. The current situation is an intermediary step to limit the required changes when upgrading to the latest version.


## Example

```js
{
  handle: 'gallery',
  documentType: 'article', // either 'article' or 'page'

  info: {
    label: 'Image Gallery',
    description: 'An article that contains exclusively images.'
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

  // You'll find the renditions example further below
  renditions: require.resolve('./path/to/rendition/config'),

  // Configuration for the Editor behaviour
  editor: {
    ui: {
      // flag whether the list assignment on the publish (metadata)
      // screen should be shown for this content-type
      showListAssignment: true,
      // flag whether the component list in the sidebar should show icons and
      // desriptions (true) or only the titles (false)
      useExpandedComponentStyle: true,
      // flag whether the document title at the toolbar can be edited
      disableEditTitleAtToolbar: false
    },

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
  // With 'documentCreationDisabled: true', you can't create documents with this content-type
  documentCreationDisabled: true, // default false
  }
  // Jumps to the 'publish' or 'edit' view after creating a document
  viewAfterDocumentCreation: 'publish' // default 'edit'
}
```


## Renditions

Example `./path/to/rendition/config`:
```js
const CheerioHtml = require('../../../lib/render-pipeline/output/cheerio_html')

module.exports = {
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
      'json': appRenderer
    }
  }
}
```


### Enable Push Notifications for a ContentType

To enable push notifications for a specific content type you must have a metadata field called `pushNotifications`. Name and plugin must match exactly.
```js
metadata: {
  pushNotifications: {
    plugin: 'li-push-notifications'
  }
}
```

With this in place you can set the channel configuration for your push notification topics (see example config above) and the firebase configuration in the [server config](./config.md#push-notifications).
