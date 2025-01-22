---
title: Includes Server API
menus:
  reference:
    weight: 2
    parent: Includes
---

This section gives an exhaustive listing of all options for Includes on the server side.
To get more information about Includes in general, visit the [Includes Overview]({{< ref "/reference/document/includes" >}}).

We recommend where possible going down the paramsSchema route for includes. This saves writing custom sidebar components and covers most include cases. Where it does not, please get in touch with your customer solutions manager before writing custom components to see if we can extend the paramsSchema for your use case.

## Registering your include

```js
// app/server.js
liServer.registerInitializedHook(() => {
  liServer.registerIncludeServices([
    // registers the include rendering service
    require('./include-services/teaser.js')
  ])
})
```

## paramsSchema

`paramsSchema` allows you to generate UI sidebar options in the Editor for Includes. With that you can choose and pass these options to influence the rendering. Look into this [Overview]({{< ref "reference/document/metadata/plugins">}}) to see what plugins are supported for Includes.

If you want to be able to load document metadata and content it's important to set `preload: true`.

```js
module.exports = {
  name: 'teaser',
  paramsSchema: [
    {
      // the data from article will be passed to the render function via 'params.article.value'
      handle: 'article',
      type: 'li-document-reference',
      preload: true, // Populate referenced article data
      ui: {
        label: 'Teaser',
        config: {
          useDashboard: 'articles-simple',
          style: 'teaser'
        }
      }
    }
  ],
  rendering: {
    type: 'function',
    async render(params, context) {
      // Here you can use the publicationApi to get your document
      // You can then return the content of the linked document with ease, Livingdocs will render
      // it exactly as you see it in the document itself
      const id = params.infobox.reference.id
      const publication = await publicationApi.getPublicationsByDocumentIds([id])
      const content = publication[0].revisionEntity.data.content
      return {
        content
      }
      // Alternatively, you can render some custom content based on the metadata information
      // If you have metadata with teaser content anyway, this is the simplest and most effective solution
      return {
        content: [
          {
            id: `teaser-${documentVersion.documentId}`,
            component: 'teaser',
            content: {
              image: parseImageData(documentVersion.metadata.teaserImage),
              title: documentVersion.title,
              lead: 'lead from include',
              byline: 'byline from include',
              link: 'https://example.com'
            }
          }
        ]
      }
    }
  }
}
```

This example uses a helper function for teaserImage data:

```js
function parseImageData(teaserImage) {
  // The teaser image is of type li-image but the editable-teaser service
  // requires LivingdocsImageDirective, so this picks the correct values
  return {
    url: teaserImage.url,
    originalUrl: teaserImage.originalUrl,
    mediaId: teaserImage.mediaId,
    imageService: teaserImage.imageService,
    width: teaserImage.width,
    height: teaserImage.height,
    mimeType: teaserImage.mimeType,
    focalPoint: teaserImage.focalPoint
  }
}
```

## All options

Below is a list of all options (it's not a running example)

```js
// plugins/includes/teaser.js
module.exports = {
  name: 'teaser',

  // The generated sidebar allows you to quickly create new includes. You will be limited to the API's provided by Livingdocs
  // but our API is built to catch most of the common use-cases.
  paramsSchema: [
    {
      handle: 'article',
      type: 'li-document-reference',
      // the data from the referenced article will be passed to the render function via 'params.article.value' when preload: true
      preload: true, // Populate referenced article data
      ui: {
        label: 'Teaser',
        config: {
            useDashboard: 'articles-simple'
          }
      }
    }
  ],

  uiComponents: [

    // custom Vue UI
    {
      type: 'vue-component',
      // displayed as a label in the sidebar
      sidebarLabel: 'Foo Bar',
      // custom Vue component to be rendered in the sidebar
      // this custom component has to be registered in the editor and names must match
      sidebarContentComponent: 'myIncludeSidebarComponent'
    },

    // custom Iframe modal
    {
      type: 'iframe-modal',
      // displayed as a label in the sidebar
      sidebarLabel: 'Embed Q graphic',
      // text for the button that opens the modal dialog
      sidebarButton: 'Search graphic'
      // title in the modal dialog
      modalTitle: 'Q Graphics',
      // the url to the iframe that implements the user interface
      // note this user interface is independent of Livingdocs and can be
      // implemented in any language/framework, e.g. react.js
      modalContentUrl: 'https://q.st.nzz.ch/livingdocs-component.html'
    }
  ],

  rendering: {
    // 'function' or 'remote'
    type: 'function',

    // params contain data set from paramsSchema
    // paramsSchema with handle 'article' get its data passed to 'params.article'
    // params = {
    //   article: {
    //     '$ref': 'document',
    //     reference: { id: '1' },
    //     isPreloaded: true,
    //     value: {
    //       systemdata: {
    //         projectId: 1,
    //         ...
    //       },
    //       metadata: RevisionMetadata {
    //         language: { label: 'German', locale: 'de', groupId: 'Hq-5RpfXUSlXQcRR3TdlB' },
    //         title: '111111111111',
    //         ...
    //       }
    //     }
    //   }
    // },
    //
    // context contain metadata and systemdata of the current document
    // context = {
    //   preview: true,
    //   metadata: {
    //     language: {label: 'German', locale: 'de', groupId: 'OVVyEvOq0RoQDBXeYEgnH'},
    //     title: 'title',
    //   },
    //   systemdata: {
    //     projectId: 3,
    //     channelId: 4,
    //     documentId: 3,
    //     contentType: 'regular',
    //     documentType: 'article',
    //     design: { name: 'p:3:4', version: '1.0.0' }
    //   },
    //   config: {foo: 'bar'}
    // }
    async render (params, context) {
      // context.preview = true  => Request comes from Livingdocs Editor (while editing a document)
      // context.preview = false => Request comes from Public API
      const isPreview = context?.preview === true

      // If you want to report back an include error to the UI, you can return HTML
      // return {html: `<div class="include-render-error"><h2>Maybe a typo?</h2><p>The document can't be found.</p></div>`}

      // It does not render an unpublished document on the public API
      if (isPreview && paramsAreInsufficient(params)) {
        // Show include preview (the HTML defined in your Livingdocs Component)
        return {doNotRender: true}
      } else if (shouldNotBeRendered(params)) {
        // Render nothing (in the Editor + via public API)
        return {html: ''}
      } else {
        // Render the include
        // Option 1 - return a Livingdocs Component (try to prefer that option)
        return {
          // if editableContent is true, the user can overwrite the content for this specific teaser
          // caveat: only possible when returning 1 component
          editableContent: true,
          content: [{
            id: `teaser-${your-documentId}`,
            component: 'teaser',
            content: {
              image: parseImageData(documentVersion.metadata.teaserImage),
              title: documentVersion.title,
              lead: 'lead from include',
              byline: 'byline from include',
              link: 'https://example.com'
            }
          }]
        }

        // Option 2 - return HTML
        const html = renderInclude(params)
        return {
          html,
          // optionally you can also pass dependencies either as raw code or from a source
          // dependencies: {
          //   css: [
          //     {
          //       src: 'http://cdn.cloudflare.com/...'
          //     },
          //     {
          //       code: ... your css
          //     }
          //   ],
          //   js: [
          //     {
          //       src: 'https://instagram.com/embed.js',
          //       namespace: 'includes.instagram'
          //     },
          //     {
          //      code: ... your js script
          //     }
          //   ]
          // }
        }
      }
    }
  },

  // pass values to the render function
  config: {
    foo: 'bar'
  },

  defaultParams: {
    count: 5
  },

  // undefined (default), 'always' or 'initial'
  blockEditorInteraction: undefined,

  // Remounts the scripts and returned js dependencies that are inside the html of an include when this html is re-rendered
  remountScripts: true
}
```

## uiComponents

If the sidebar options with `paramsSchema` are not enough, you have 2 other options to generate UI sidebar options.

You can choose between 2 types of custom UI components.

1. `vue-component`, sidebar user interface
2. `iframe-modal`, as above user interface in a modal dialog but loaded as an iframe (e.g. if you want to implement your UI outside of Livingdocs)

### vue-component

The `uiComponents` config for `vue-component` looks as follows:

```js
{
  // required, fixed name
  type: 'vue-component',
  // required, displayed as a label in the sidebar
  sidebarLabel: 'Foo Bar',
  // required, the custom Vue component to be rendered in the sidebar
  // this custom component has to be registered in the editor and
  // names must match
  sidebarContentComponent: 'myIncludeSidebarComponent'
}
```

The Vue component `myIncludeSidebarComponent` is required to be registered in the editor. We explain [here]({{< ref "/customising/advanced/editor/vue-component-registry.md#includeParamsSidebarForm" >}}) how to do this.

### iframe-modal

The `uiComponents` config for `iframe-modal` looks as follows:

```js
{
  // required, fixed name
  type: 'iframe-modal',
  // required, displayed as a label in the sidebar
  sidebarLabel: 'Embed Q graphic',
  // required, text for the button that opens the modal dialog
  sidebarButton: 'Search graphic'
  // required, title in the modal dialog
  modalTitle: 'Q Graphics',
  // required, the url to the iframe that implements the user interface
  // note this user interface is independent of Livingdocs and can be
  // implemented in any language/framework, e.g. react.js
  modalContentUrl: 'https://q.st.nzz.ch/livingdocs-component.html'
}
```

The iframe modal enables you to implement the user interface in a third-party system or re-use existing interfaces. There is an API in place to pass the `params` object between the iframe and Livingdocs:
Existing `params` are passed into the iframe as a URL query parameter `?params`. It contains the stringified JSON of the `params` Object as an urlencoded String.
From inside the iframe, you have to send messages using [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) like this:

```js
const message = {
  action: 'update',
  params: {
    someParam: 'foo',
    anotherParam: 42
  }
}
// the 2nd parameter is the 'targetOrigin'. Set this to the origin of your Livingdocs Editor instance.
window.parent.postMessage(message, '*')
```

## rendering.type

The `rendering` configuration allows you to define how your `doc-include` is rendered. The options available are:

1. `function`
2. `remote`

The `function` option allows you to render your Include on the Livingdocs Server.

```js
{
  ...,
  rendering: {
    type: 'function',
    async render (params, context) {
      return 'LivingdocsComponent or HTML'
    }
  }
}
```

The `remote` option allows you to render your HTML in a third-party system that is not Livingdocs.

```js
{
  name: 'q-embed',
  rendering: {
    type: 'remote',
    // 'post' and 'get' are possible (get only sends params, not options and config)
    method: 'post',
    url: 'https://q-server.st-staging.nzz.ch/livingdocs-preview/nzz_ch'
  }
}
```

The above example tells the Livingdocs rendering engine that whenever it sees a `doc-include` with service `q-embed` it should do a POST request to the remote URL defined to get the rendered HTML string.

## blockEditorInteraction

The config property `blockEditorInteraction` can be `'always'`, `'initial'`, or not defined at all. It is used to configure how the user can interact with the include within the editor. The default behavior when the value is undefined is to allow the include to be fully interactive. By passing the string `'always'` the user will not be able to interact with the include content, and `'initial'` will only block the first click and then allow interaction (resetting the blocker when the include component is blurred). These two options can be particularly useful when working with videos and other interactive content, because they allow the component to be selected and configured more easily within the UI.

## remountScripts

Remounts the scripts that are inside the html of an include when this html is re-rendered.

## config

Passes any value to the render function.

```js
config: {
  foo: 'bar'
}
```
