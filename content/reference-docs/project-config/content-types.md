---
title: Content Types
weight: 3
menus:
  reference-docs:
    parent: Project Config
---

You can define as many contentTypes per project as you want. A contentType represents a specific kind of document like an article or an image gallery. The contentTypes define which components can be used in a document and which metadata are present.

Whenever you create a document you have to choose of what contentType it will be. The contentType of a document cannot be changed after creation.

You might also come across the `documentType`. It distinguishes between articles and pages. It is considered legacy by now, whenever possible differentiate by the content-type.

_Good to know:_ If you use a reference design, then for every `contentType` there must be a `layout` in the reference design. The name layout of the layout must be exactly the same as the `contentType.handle`.

We plan to allow to move all layout options which are currently defined in the design to the `contentType` configuration. The current situation is an intermediary step to limit the required changes when upgrading to the latest version.

## Example

```js
contentTypes: [
  {
    handle: 'gallery',
    documentType: 'article', // either 'article', 'page' or 'data-record'
    isAuthor: false, // only true if this content-type represents an author, must be 'data-record'

    info: {
      label: 'Boilerplate Article',
      description: 'The most simple article',
      icon: 'file-outline'
    },

    editorWrapper: '<div class="doc-section"></div>',
    defaultContent: [
      {component: 'title', position: 'fixed'}
    ],
    // {{< added-in release-2022-05 >}}
    defaultMetadata: {
      author: 'Mister X'
    },

    // define the server-side metadata
    metadata: [
      {
        handle: 'author',
        type: 'li-text',
        ui: {component: 'liMetaTextForm'}
      },
      {
        handle: 'description',
        type: 'li-text',
        config: {
          required: true,
          requiredErrorMessage: 'please provide a short description'
        },
        ui: {component: 'liMetaTextForm'}
      }
    ],

    metadataGroups: [
      {
        label: 'text',
        properties: ['description']
      }
    ],

    // Overwrites config in `settings`
    imageSourcePolicy: [
      {
        provider: 'upload',
        enabled: true
      },
      {
        provider: 'hugo',
        enabled: false
      },
      {
        provider: 'url',
        enabled: true,
        hosts: ['//pixabay.com']
      }
    ],

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

      // One or multiple deliveryLinks are show in the publish panel
      // They should point to your frontends
      // url can be a pattern containing these placeholders:
      // :path
      // :routingPath
      // :id
      // :projectId
      // :slug
      deliveryLinks: [
        {
          url: 'http://localhost:9999/:slug',
          icon: 'link-variant',
          label: 'Publish link'
        }
      ]
    },

    // if enabled is true this content-type will use the WoodWing
    // print layout selection and preview
    print: {
      enabled: false,
      enableStepZooming: true,
      componentMap: {
        toptitle: {
          title: 'toptitle'
        }
      }
    },

    // With 'documentCreationDisabled: true',
    // you can't create documents with this content-type
    documentCreationDisabled: true, // default false

    // defines where to go after creating a document
    viewAfterDocumentCreation: 'publish'

    // Allows the current content type ("gallery") to accept
    // "regular" and "another-handle" documents into its inbox.
    // The inbox assignment UI will be displayed for those content types.
    inbox: {
      contentTypes: ['regular', 'another-handle']
    },

    // Delivery build button and status to be shown in the Publish Control panel
    deliveries: [
      { deliveryName: 'web', isPrimary: true }
    ],

    // See the "Desk-Net Integration" guide for further details
    desknet: {
      title: {
        // Defines if the document title should be synced on document update from
        // either way, livingdocs -> desknet or desknet -> livingdocs.
        // By default it is synced.
        sync: false
      },
      // Link and optionally synchronise Desk-Net element values with Livingdocs metadata
      metadata: [
        {
          sync: false,
          source: 'slug',
          target: 'metadata.desknetWorkingTitle'
        }, {
          sync: true,
          source: 'publication.scope',
          target: 'metadata.targetLength.characters'
        }
      ],
      // A more customisable way to link Desk-Net element values with Livingdocs metadata
      metadataTransforms: [
        {
          importFunctionHandle: 'getPrintPublicationDate',
          exportFunctionHandle: null,
          target: 'metadata.desknetPublicationDate'
        }
      ]
    }
  }
]
```

## Default Content

The default content defines what components are pre-set on your document upon creation.

NOTE: the default content only gets applied when a document is created manually, i.e. in the editor. If you create documents programmatically (e.g. import), you need to define the content yourself.

The default content is simply a (valid) Livingdocs JSON applying to your design.

One useful property on components within the default content is the `position: fixed` property. It allows to fix a component in place, useful, e.g. for headers. [Read more]({{< ref "/reference-docs/editor-extensions/editor-configuration#pin-components" >}})

```js
defaultContent: [
  {
    component: 'title',
    position: 'fixed'
  }
]
```

## Default Metadata

The default [metadata]({{< ref "/reference-docs/document/metadata" >}}) defines what metadata properties are predefined on your document upon creation.

Passed metadata (via Editor on document creation) are preferred over default metadata. The merging is done property by property on the top level of every metadata field.

```js
defaultMetadata: { // Added in: release-2022-05
  author: 'Mister X'
}
```


## viewAfterDocuments

With `viewAfterDocumentCreation` you can define to which view you are redirected after a document has been created.

```js
viewAfterDocumentCreation: 'publish'
```

- `publish` redirects to the 'publish view'
- `edit` redirects to the 'editor view' (default)
- `metadata` redirects to the 'metadata view'


## Editor Wrapper

Defines a HTML string that wraps the document when used in the editor. Use the class `doc-section` where you want the content to be inserted.

```html
<div class="doc-section" style="padding: 20px"></div>
```

The example above would put a padding of 20px on documents in the editor to give some space on the sides.

## Metadata

Metadata can be freely configured for each content-type. An article might have different metadata fields than an image gallery.

The schema of the metadata array looks as follows:
```js
  metadata: ms.arrayOf(ms.strictObj({
    id: 'string',
    handle: 'string:required',
    type: 'string:required',
    config: ms.obj({
      required: 'boolean',
      requiredErrorMessage: 'string'
      // more properties possible for specific metadata types
    }),
    ui: ms.obj({
      component: 'string:required',
      label: 'string',
      config: ms.obj({
        readOnly: 'boolean',
        // more properties possible for specific metadata types
      })
    })
  }))
```

Get a list of available [metadata plugins]({{< ref "/reference-docs/document/metadata/metadata-plugin-list" >}})


## Metadata Groups

The Metadata Groups allow you to logically group the fields into collapsible cards. By default all the cards are expanded but can be configured to be collapsed with the property `metadataGroups[].expanded: false`.
Once a card has been manually collapsed/expanded in the UI, then this state will be saved in the local storage of the browser and the card will show in that state even after a page reload.

The schema looks as follows:
```js
metadataGroups: ms.arrayOf(ms.strictObj({
  label: 'string',
  expanded: ms.boolean(), // optional, default is true
  properties: ms.arrayOf(ms.string())
}))
```
e.g.:
```js
metadataGroups: [
  {
    label: 'SEO',
    expanded: false,
    properties: ['keywords', 'title']
  }
]
```

## Components and Component Groups

The `components` entry tells the Livingdocs editor which subset of all components in the design should be usable within a content-type. For example, a gallery should probably only have images.
The groups allow you to define how the components are shown in the Livingdocs editor sidebar of a document.

Example:
```js
components: [
  {name: 'subtitle'},
  {name: 'paragraph'},
  {name: 'image'}
],
componentGroups: [
  {
    name: 'text',
    label: 'Text',
    components: ['subtitle', 'paragraph']
  },
  {
    name: 'media',
    label: 'Media',
    components: ['image']
  }
]
```

## Public API config

The `publicationIndex` config allows you to define how documents of this content-type are indexed into the elastic search publication index which in turn is used by the public API. You can for example change the date field by which API results are sorted.

For details on the configuration and how it interacts with the metadata configuration, see our section on [searching publications]({{< ref "/guides/search/publication-index.md" >}}).

## Routing

The routing setting defines how the routes cache (Redis) builds lookup route entries for this content-type.

Example:
```js
  routing: {
    enabled: true,
    pathPatterns: {
      type: 'article', // article or page, if article :id must be present
      current: '/s/:slug--:id',
      legacy: []
    }
  }
```

You can use the value of metadata fields in the path. e.g. `:slug` will enter the value of the metadata field `slug` at this point. The special field `:id` is always there and allows you to insert the document id.

## Image Source Policy

You may set a `contentType` specific sourcePolicy here.

```js
{
  sourcePolicy: [
    {
      provider: 'upload',
      enabled: false
    },
    {
      provider: 'hugo',
      enabled: true
    },
    {
      provider: 'url',
      enabled: true,
      hosts: ['https://cdn.pixabay.com']
    }
  ]
}
```

The above example disables direct image uploads to Livingdocs and allows only the external image DAM hugo.

## Teaser Previews

You can configure teaser previews for this content-type that are displayed on the publish panel, e.g. how an article will look like when referenced from the start page. This is useful for your editors to see the provided metadata in the real, visual context.

The schema is as follows:
```js
  teaserPreview: ms.strictObj({
    enabled: ms.boolean(),
    renderSettings: ms.arrayOf(ms.strictObj({
      handle: 'string:required',
      windowWidth: 'integer:required',
      windowHeight: 'integer',
      wrapper: 'string'
    })),
    teasers: ms.arrayOf(ms.strictObj({
      label: 'string',
      renderSetting: 'string',
      componentName: 'string:required',
      directives: ms.arrayOf(ms.strictObj({
        name: 'string:required',
        source: ms.arrayOf('string'),
        target: 'string'
      }))
    }))
  })
```

Apart from the general settings (`renderSettings`) you define an entry for each teaser (`teasers`) giving it the Livingdocs component (from the design) that should be used for rendering as well as a mapping of metadata values to component directives. See our guide on [teaser preview guide]({{< ref "/guides/editor/teaser-preview" >}}) for more details.

## Desk-Net

See our [Desk-Net plugin guide]({{< ref "/guides/integrations/desknet" >}}) for comprehensive infos (custom code parts require enterprise version).

## Renditions

Renditions can only be changed in the enterprise model since they require custom code.

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
        // resolve definitions for includes
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

## Enable Push Notifications for a ContentType

To enable push notifications for a specific content type you must have a metadata field called `pushNotifications`. Name and plugin must match exactly.

```js
metadata: [
  {handle: 'pushNotifications', type: 'li-push-notifications'}
]
```

With this in place you can set the project configuration for your push notification topics \(see example config above\) and the firebase configuration in the [server config]({{< ref "/reference-docs/server-extensions/server-configuration#push-notifications" >}}).

## Enable Push Messages for a ContentType

To enable Push Messages for a specific content type you must have a metadata field of type [`li-push-messages`]({{< ref "/reference-docs/document/metadata/metadata-plugin-list#li-push-messages" >}}).

You can configure it multiple times on the same ContentType and the handle does not have any special naming conventions. 

## Text Formatting

The text formatting toolbar can be customized per content-type in addition to the global config in the [editor settings]({{< ref "editor-settings" >}}).

{{< img src="images/text_formatting.png" alt="image" >}}

Enable or disable the existing elements for text formatting.

Example:
```js
textFormatting: {
  bold: true,
  italic: true,
  superscript: false,
  subscript: false,
  link: true,
  specialChars: false,
  quotes: ['„', '“'],
  singleQuotes: ['‚', '‘']
  apostrophe: '’',
  locales: {
    de: {
      quotes: ['„', '“'],
      singleQuotes: ['‚', '‘']
    },
    en: {
      quotes: ['“', '”'],
      singleQuotes: ['‘', '’']
    }
  }
}
```

Extend the text formatting toolbar with custom configured elements. The elements will be shown after the default elements. Add this configuration to the textFormatting configuration above.

Example:
```js
customElements: [
  {
    label: 'blue color',
    handle: 'bluecolor',
    // if trim is set to true, whitespaces on the left and right of the selection are removed
    trim: true,
    // the tag which is set around the selection
    tagName: 'span',
    // the icon which will be displayed. Only existing icons in the editor can be used.
    icon: 'format-color-highlight',
    // the attributes which are set on the tag
    attributes: [{name: 'class', value: 'blue'}]
  }
]
```

Following attribute types can be added to a customElement:

- static value

  e.g. add to the class attribute on the customElement the value blue `{name: 'class', value: 'blue'}`
- li-reference

  Users can link a document. The attribute name is always `data-li-document-ref`. And the references are extracted as with a normal link to a document.
  ```js
  {
    label: 'author link',
    handle: 'authorlink',
    tagName: 'span',
    icon: 'file-link',
    attributes: [
      {
        handle: 'documentref',
        type: 'li-reference',
        config: {referenceType: 'document', contentType: 'author'}
      }
    ]
  }
  ```
- li-enum

  Users can select a value from a list
  ```js
  {
    handle: 'specialprovider',
    type: 'li-enum',
    name: 'data-specialprovider',
    config: {
      dataProvider: {
        handle: 'specialprovider',
        type: 'labelValuePair',
        items: [
          {label: 'Batman', value: 'batman'},
          {label: 'Alfred', value: 'alfred'},
          {label: 'Robin', value: 'robin'},
          {label: 'Riddler', value: 'riddler'},
          {label: 'Joker', value: 'joker'},
          {label: 'Penguin', value: 'penguin'},
          {label: 'Mr. Freeze', value: 'freeze'}
        ]}
    }
  }
  ```
- li-text

  Users can add a text value by themself
  ```js
  {
    label: 'input',
    handle: 'input',
    tagName: 'span',
    icon: 'format-color-highlight',
    attributes: [
      {
        handle: 'input',
        type: 'li-text',
        name: 'data-input'
      }
    ]
  }
  ```

**Restrictions**

There can be only one attribute with a type in the attributes array. Static values can be added as many as needed.

## Print

The print options allow you to enable the WoodWing Studio print connector on a content-type. Refer to our [setup guide]({{< ref "/guides/integrations/print" >}}) in order to setup your project with the print connector. Note: before you consider productive use of a print connector you must get in contact with us. The provided WoodWing connector is only to be used for test purposes.

## Document Inbox

{{< added-in release-2021-11 >}}, and media library support {{< added-in release-2022-03 >}}

The document inbox feature allows document and media references to be assigned to another document. Currently pages can accept documents or media library entries to their inbox, articles can only accept media library entries.

### Configuration

The following configuration allows the "page" content type to accept "regular" and "another-handle" documents, and "image" and "video" media library entries, into its inbox. The inbox assignment UI will be displayed for the "regular" and "another-handle" content types on the publication screen. The "Send to inbox" link will be accessible in the context menu of the "image" and "video" media library entires on their dashboards.

```js
{
  handle: 'page',
  // ...
  inbox: {
    contentTypes: ['regular', 'another-handle'],
    mediaTypes: ['image', 'video']
  }
}
```

For regular article content types add only the mediaTypes config to accept images and videos which can be dragged directly into the document. We do not currently support other content types inside of articles. The config will look something like this:

```js
{
  handle: 'regular',
  // ...
  inbox: {
    mediaTypes: ['image', 'video']
  }
}
```

### Documents

The document inbox for content types provides a way for users to indicate that a document should be listed within another document without the need to know which specific list it should appear on. It can be used in parallel with, or as a replacement for, the list assignment feature. The multilist editor (see screenshot below) is only visible if you have a list in your document.

An example use-case would be: When Editor User A finishes an article they would like to tell CvD User B (Chef vom Dienst - a role that is in charge of the frontpage at many newsrooms) to publish the teaser to that article on the frontpage. If the frontpage is compiled from multiple lists, it's not User A's job to decide into which list the article should go, as it's User B deciding that. Once assigned, User B will be able to see the article in the inbox column of the multi-list editor view for the frontpage.

The inbox assignment UI will be displayed on the publish screen for any content type listed within an `inbox.contentTypes` array. The document search dialog used for the inbox assignment will display documents with content type(s) that accept the content type of the document which is being published.

Send document to another document (publish screen):

![image](https://user-images.githubusercontent.com/172394/158125497-a9a8ecb5-5674-4f28-a111-79a3ae344932.png)

Open multilist editor in the Editor:

![image](https://user-images.githubusercontent.com/172394/158125447-5bea2ff6-cc84-4579-9f17-40efb79b350e.png)

### Media Library Entries

When a content type is configured to accept media library entries into its inbox it allows users to send images, videos, and files to specific documents. This can be achieved directly from the media library dashboards by using the "Send to inbox" link within the content menu of media library entries.

An example use-case would be: A user is interested in adding images to a document they are working on, but they are unsure which to use from an initial search, and would like to view a larger version of the images or get some additional context from the metadata. The user can search through the media library and then assign the images to the document they are working on. Once assigned to a document's inbox the media can be dragged from the Inbox sidebar when the user is editing the document.

The "Send to inbox" option will only be displayed in a media library entry's context menu if there is at least one content type which is configured to accept it. The document search dialog used for the inbox assignment will display documents with content type(s) that accept the media type of the media library entry.

Send an asset to a document inbox (Media Library):

![image](https://user-images.githubusercontent.com/5101376/143496169-f06c3e4d-7ed9-4a20-ab0f-87a9f9232178.png)

Show asset inbox of a document in the Editor:

![image](https://user-images.githubusercontent.com/172394/158125175-42a1758a-d388-46ff-a0c0-57cc7dfcbfec.png)
