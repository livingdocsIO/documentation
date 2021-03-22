---
menu: guides
title: Add a Twitter Embed
menus:
  guides:
    parent: Includes and Embeds
---

This guide will show you how to add a custom Include for Twitter. We will show the implementation for the design, server and editor.
This is more of a quick-guide where you can just copy and paste code. For a deeper understanding you can dive into [server-customization]({{< ref "/reference-docs/includes/server_customization.md" >}}) and [editor-customization]({{< ref "/reference-docs/includes/editor_customization.md" >}})


## Design definition

In the design you will define the component.

```json
{
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
      "directives": [{
        "name": "twitterInclude",
        "type": "include",
        "service": "twitterInclude"
      }]
    }
  ]
}
```

## Server - rendering the include and defining the service

In the server you will define the `twitterInclude` service.

This twitterInclude service has one main job -
rendering the include with parameters filled in the editor.

```js
// app/server.js
liServer.features.register('custom-includes', require('app/includes'))

// app/includes/index.js
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
      type: 'vue-component',
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
  if (!params.embedLink) {
    return options.preview
      ? {doNotRender: true} // render the placeholder in the editor
      : {html: ''} // do not render anything
  }

  // we are using the twitter oembed api, so we expect a link in the editor
  const url = `https://publish.twitter.com/oembed?url=${params.embedLink};omit_script=true`
  const res = await fetch(url, {method: 'GET'})
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

Please note that using Vue Components for the Sidebar requires at least [`release-2020-07`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2020-07.md).
```js
// register the sidebar Vue Component
liEditor.vueComponentRegistry.registerComponent({
  type: 'includeParamsSidebarForm',
  name: 'twitterIncludeSidebar',
  component: require('../plugins/includes/twitter-include/twitter-include-sidebar.vue').default
})

// register the render plugin implementing 'onIncludeRendered'
liEditor.includeRenderPlugins.register('liTwitterRenderPlugin',
  require('../plugins/doc_include_render_plugins/twitter'))
```

You are free to render any kind of form for the sidebar. Any params the user can define here
will be passed to the include service.
```vue
<!-- ../plugins/includes/twitter-include/twitter-include-sidebar.vue -->
<template>
  <div class="ld-panel">
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
              v-model="paramsDraft.embedLink"
              @change="save()"
              placeholder="Twitter embed link"
              required>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    params: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      paramsDraft: {
        embedLink: this.params.embedLink || '',
      }
    }
  },
  methods: {
    save () {
      // you have to dispatch a CustomEvent named 'update:params'
      // the let livingdocs know when your params have changed
      // send the new params object as event.detail
      const event = new CustomEvent('update:params', {
        detail: this.paramsDraft,
        bubbles: true
      })
      this.$el.dispatchEvent(event)
    }
  }
}
</script>
```

Once the server has returned the include object with the HTML and scripts,
as everything has loaded the `onIncludeRendered` hook will be fired and you can fire `twttr.widgets.load()` and it should be nicely displayed!
```js
// ../plugins/doc_include_render_plugins/twitter
liEditor.includeRenderPlugins.register('liTwitterRenderPlugin', {
  onIncludeRendered (err, {componentId, directiveName, includeValue, renderer}) {
    if (err) return
    const {twttr} = renderer.renderingContainer.window
    twttr != null ? twttr.ready(() => twttr.widgets.load()) : undefined
  }
})
```
