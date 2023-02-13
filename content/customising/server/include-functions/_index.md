---
title: Include Functions
weight: 6
menus:
  customising:
    parent: Server Extensions
    weight: 6
---

This section explains how you setup the server to render `doc-include`s and gives an exhaustive listing of all options. It does not explain how to create custom editor user interfaces, this will be explained [here]({{< ref "/reference/document/includes/editor-customization" >}}).

## Core include services

### oEmbed

The oEmbed include service (`li-oembed-service`) allows users to embed content (such as photos, videos, or iframes) by providing a link to a resource, without having to worry about embed scripts. The include service has a small number of core providers, but it can easily be extended with additional providers or a catch-all provider.

Core oEmbed providers:
- TikTok (`li-tiktok`)
- Twitter (`li-twitter`)
- Vimeo (`li-vimeo`)
- YouTube (`li-youtube`)
- Podigee (`li-podigee`) {{< added-in release-2022-07 >}}
- Datawrapper (`li-datawrapper`) {{< added-in release-2022-07 >}}
- Spotify (`li-spotify`) {{< added-in release-2022-07 >}}
- Instagram (`li-instagram`), ATTENTION: requires credentials {{< added-in release-2022-07 >}}
- Facebook (`li-facebook-post`), ATTENTION: requires credentials {{< added-in release-2022-07 >}}
- Dailymotion (`li-dailymotion`) {{< added-in release-2023-01 >}}

For details on how to setup and configure an oEmbed include please read the [guide]({{< ref "/guides/documents/includes/oembed" >}}).

## Registration of an include renderer in the server

You can register an include renderer in the Livingdocs Server using the API of the `li-includes` feature.

The include is rendered for two cases:

- in the editor while editing (WYSIWYG)
- in the rendered (published) HTML if you choose to resolve the include while rendering

So in order to see a preview while editing you have to register an include renderer even if you choose not to resolve includes while rendering.

### Register an include in the server

Let's register an include renderer for the core include `embed-teaser`. Since article embeds are very common you will very likely need to do this too.

```js
const includesApi = liServer.features.api('li-includes')

await includesApi.registerServices([
  // registers the include rendering service
  require('./plugins/includes/embed-teaser.js')
  require('./plugins/includes/twitter.js')
])
```

`plugins/includes/embed-teaser.js`:
```js
module.exports = {
  name: 'embed-teaser',
  // The ui configuration is used to configure the user interface
  // in the editor. For the core include `embed-teaser` the UI
  // components already exist
  uiComponents: [
    {
      type: 'angular-modal',
      sidebarLabel: 'Assign Teaser to content block',
      sidebarButton: 'Link Article',
      modalTitle: 'Article Search',
      modalContentComponent: 'liEmbedTeaserIncludeModal'
    },
    {
      type: 'angular-component',
      sidebarLabel: ' ',
      sidebarContentComponent: 'liEmbedTeaserLink'
    }
  ],
  rendering: {
    type: 'function',
    async render (params, options) {
      // When options preview is true the request comes from a livingdocs
      // editor while a user is editing a document.
      const isPreview = options?.preview === true
      
      // If you want to report back an include error to the UI, you can return HTML
      // return {html: `<div class="include-render-error"><h2>Maybe a typo?</h2><p>The document can't be found.</p></div>`}

      // It does not render an unpublished document on the public API
      if (isPreview && paramsAreInsufficient(params)) {
        // Return undefined if not enough params are provided to
        // render the include. While editing the draft in the editor
        // this will just leave the include preview visible.
        return {doNotRender: true}
      } else if (shouldNotBeRendered(params)) {
        // Return an empty string to render nothing.
        // While editing the draft in the editor this will remove
        // the include preview.
        return {html: ''}
      } else {
        // Render the include
        const html = renderInclude(params)
        return {
          html,
          // optionally you can also pass dependencies either as raw code or from a source
          // dependencies: {
          //   css: [{src: 'http://cdn.cloudflare.com/...'}],
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
    })
  }
}
```

### Include UI options

#### Generated sidebar

The generated sidebar allows you to quickly create new includes. You will be limited to the API's provided by Livingdocs but our API is built to catch most of the common use-cases.

```js
// Example include service using the paramsSchema
module.exports = {
    name: 'youtubeIncludeService',
    paramsSchema: [
      {
        type: 'li-text',
        // 1. register url form field in sidebar
        handle: 'url',
        config: {
          maxLength: 200
        },
        ui: {
          label: 'Youtube settings',
          config: {
            placeholder: 'Paste Embed Code or URL'
          }
        }
      }
    ],
    defaultParams: {
      url: ''
    },
    rendering: {
      type: 'function',
      async render (params, options) {
        // 2. use the params to render the include
        if (params.url) return {html: `<div> do something with the url: ${params.url}</div>`}

        // render the placeholder in the editor
        if (options.preview) return {doNotRender: true}

        // do not render anything
        return {html: ''}
      }
    },
    blockEditorInteraction: 'initial',

    // Remounts the scripts that are inside the html of an include when this html is re-rendered
    remountScripts: true
  }
}
```


#### More flexibility

The `uiComponents` array allows you to define a list of ui elements that are rendered in the sidebar upon selection of the `doc-include` (top to bottom). As you register your own component or helper provided by livingdocs, you have more choices but the development time increases as well.

You can choose between 3 types of custom UI components.

1. `vue-component`, sidebar user interface

2. `iframe-modal`, as above user interface in a modal dialog but loaded as an iframe (e.g. if you want to implement your UI outside of Livingdocs)

3. `angular-component`, sidebar user interface

4. `angular-modal`, user interface in a modal dialog (if more space is required), button in the sidebar to open the modal

##### vue-component

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


##### iframe-modal

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
  action: "update",
  params: {
    someParam: 'foo',
    anotherParam: 42
  }
};
// the 2nd parameter is the 'targetOrigin'. Set this to the origin of your Livingdocs Editor instance.
window.parent.postMessage(message, "*");
```


##### angular-component

The `uiComponents` config for `angular-component` looks as follows:
```js
{
  // required, fixed name
  type: 'angular-component',
  // required, displayed as a label in the sidebar
  sidebarLabel: 'Foo Bar',
  // required, the custom angular component to be rendered in the sidebar
  // this custom component has to be registered in the editor and
  // names must match
  sidebarContentComponent: 'myIncludeSidebarComponent'
}
```

The angular component `myIncludeSidebarComponent` is required to be registered in the editor. We explain [here]({{< ref "/reference/document/includes/editor-customization" >}}) how to do this.

##### angular-modal

The `uiComponents` config for `angular-modal` looks as follows:
```js
{
  // required, fixed name
  type: 'angular-modal',
  // required, displayed as a label in the sidebar
  sidebarLabel: 'Assign Teaser to content block',
  // required, text for the button that opens the modal dialog
  sidebarButton: 'Link Article',
  // required, title in the modal dialog
  modalTitle: 'Article Search',
  // required, the custom angular component to be rendered in the modal dialog
  // this custom component has to be registered in the editor and
  // names must match
  modalContentComponent: 'myIncludeModalComponent'
}
```

Again, the angular component `myIncludeModalComponent` is required to be registered in the editor.


### Include rendering options

The `rendering` configuration allows you to define how your `doc-include` is rendered. So far we have only seen local methods. The options available are:
1. `function`
2. `remote`

The `function` option is what we have seen so far. You are required to implement a method that renders an HTML string for the `doc-include` in question. Above we have shown several examples for this. The API of the function is:
```
function (params, options, callback)
```

- `params` contains any parameters that the editor user interfaces set plus the `defaultParams` from the design definition, those are the parameters specific to the `doc-include` service
- `options` contains only one entry `preview` that if set to `true` tells you that you are rendering for the editor preview and if `false` for the published document
- `callback` is a method you have to call with your rendered HTML string. The HTML string is the second parameter. The first parameter is `null` on success and an error object if you want to report an error.

The `remote` option allows you to render your HTML in a third-party system that is not Livingdocs.

```js
{
  name: 'q-embed',
  uiComponents: [],
  rendering: {
    type: 'remote',
    // 'post' and 'get' are possible (get only sends params, not options and config)
    method: 'post',
    url: 'https://q-server.st-staging.nzz.ch/livingdocs-preview/nzz_ch'
  }
}
```


The above example tells the Livingdocs rendering engine that whenever it sees a `doc-include` with service `q-embed` it should do a POST request to the remote URL defined to get the rendered HTML string.

### Editor interaction blocker

The config property `blockEditorInteraction` can be `'always'`, `'initial'`, or not defined at all. It is used to configure how the user can interact with the include within the editor. The default behavior when the value is undefined is to allow the include to be fully interactive. By passing the string `'always'` the user will not be able to interact with the include content, and `'initial'` will only block the first click and then allow interaction (resetting the blocker when the include component is blurred). These two options can be particularly useful when working with videos and other interactive content, because they allow the component to be selected and configured more easily within the UI.
