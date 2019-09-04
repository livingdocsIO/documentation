# Add an Twitter include (embed)

This guide will show you how to add a custom Include for Twitter. We will show the implementation for the design, server and editor.
This is more of a quick-guide where you can just copy and paste code. For a deeper understanding you can dive into [server-customization](../reference-docs/doc-includes/server_customization.md) and [editor-customization](../reference-docs/doc-includes/editor_customization.md)


## Design definition

In the design you will define the component. This is pretty basic.

```json
"name": "blank-design",
"layouts": [
  {
    "name": "regular",
    "caption": "Article",
    "wrapper": "<div>Some wrapper</div>",
    "groups": [
      { "label": "Twitter Include", "components": ["twitterIncludeComponent"] }
    ]
  }
],

"components": [
  {
    "name": "twitterIncludeComponent",
    "html": "<div doc-include='twitterInclude' class='placeholder'><div className='example-inline-placeholder-styles' style='min-height: 100px;outline: 1px dashed rgba(0, 0, 0, 0.2);position: relative;'/></div>",
    "label": "Twitter Include",
    "description": "Embed a tweet",
    "directives": {
      "twitterInclude": {
        "service": "twitterInclude"
      }
    }
  }
]
```

## Server - rendering the include and defining the service

In the server you will define the `twitterInclude` service.

This twitterInclude service has one main job -
rendering the include with parameters filled in the editor.

```js
// app/server.js
liServer.features.register('custom-includes', require('app/doc-includes'))

// app/doc-includes/index.js
module.exports = async function (feature, server) {
  const includesApi = server.features.api('li-includes')
  await includesApi.registerServices([
    require('../../plugins/includes/tweet')
  ])
}

// ../../plugins/includes/tweet.js
const fetch = require('node-fetch')
module.exports = {
  name: 'twitterInclude',
  uiComponents: [
    {
      type: 'angular-component',
      sidebarLabel: 'Twitter-include',
      sidebarContentComponent: 'liTwitterInclude' // TwitterPlugin registered in the editor.
    }
  ],
  rendering: {
    type: 'function',
    render: renderTweet
  }
}

async function renderTweet (params, options) {
  // we are using the twitter oembed api, so we expect a link in the editor
  const res = await fetch(`https://publish.twitter.com/oembed?url=${params.embedLink};omit_script=true`, {method: 'GET'})
  if (res.status === 404) {
    const err = new Error(`Could not find twitter link.`)
    err.status = 404
    throw err
  }

  const tweetData = await res.json()
  return {
    html: tweetData.html,
    doNotRender: false,
    embed: 'liTwitterRenderPlugin', // Twitter rendering plugin registered in the editor.
    dependencies: {
      js: [{
        src: 'https://platform.twitter.com/widgets.js',
        namespace: 'includes.twitter'
      }]
    }
  }
}
```


## Editor - Sidebar and trigger twitter script

You will have to define two things, the sidebar where one can paste the embed code or twitter link and in certain cases once the script has already loaded you will need to trigger it again. For example when components are moved or a second twitter component been pasted in the same document.

We have a special `onIncludeRendered` hook for includes where you can trigger a script.

```js
liEditor.includes.register('twitterIncludeSidebar', {
  template: require('../plugins/doc_includes/twitter/template.html'),
  controller: require('../plugins/doc_includes/twitter/controller'),
  bindings: {
    directive: '=',
    componentView: '=',
    component: '='
  }
})

// Example of a custom include rendering plugin
liEditor.includeRenderPlugins.register('twitterIncludeRenderPlugin',
  require('../plugins/doc_include_render_plugins/twitter'))
```

Registering the HTML for the sidebar, you can decide what parameters the user can enter here
```js
// ../plugins/doc-includes/twitter-include/template.html
<div class="ld-panel" ng-if="$ctrl.directive">
  <div class="ld-panel__header">
    <h2 class="ld-panel__header__title">Include embed settings</h2>
  </div>
  <div class="ld-panel__body">
    <form name="idForm" novalidate>
      <div class="ld-form-group"
        ng-class="{'has-error': idForm.idInput.$invalid && idForm.idInput.$touched}">
        <div class="ld-form-group__label">
          <label class="ld-form-label">Twitter-embed</label>
        </div>
        <div class="ld-form-group__content">
          <input
            name="idInput"
            class="ld-text-input"
            ng-model="$ctrl.embedLink"
            ng-change="$ctrl.save()"
            ng-model-options="{debounce: 512}"
            placeholder="Twitter embed link"
            required>
        </div>
      </div>
    </form>
  </div>
</div>
```

The controller for the HTML, here you save the parameters onto the document.
In the server the render function will now be triggered
```js
// ../plugins/doc-includes/twitter-include/controller.js
module.exports = class twitterInclude {
  $onInit () {
    const params = this.directive.getParams()
    this.embedLink = params && params.embedLink
  }

  save () {
    this.directive.addParams({
      embedLink: this.embedLink
    })
  }
}
```

Once the server has returned the include object with the HTML and scripts,
as everything has loaded the `onIncludeRendered` hook will be fired and you can fire `twttr.widgets.load()` and it should be nicely displayed!
```js
module.exports = {
  onIncludeRendered (err, {componentId, directiveName, includeValue, renderer}) {
    if (err) return
    const {twttr} = renderer.renderingContainer.window
    twttr != null ? twttr.ready(() => twttr.widgets.load()) : undefined
  }
}
```