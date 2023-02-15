---
title: Include User Interfaces
menus:
  reference:
    parent: Includes
---

In order to provide a custom User Interface for your includes, you can register custom Vue components.
Another option is to configure an iframe that you serve from any webserver.

In order to actually render content, you need to configure the server to do so, [see here]({{< ref "/customising/server/include-functions" >}}) how that works.


### Include User Interface with paramsSchema
This is the most simple way to render a UI for the include. It doesn't need any code in the editor.
[See here]({{< ref "/customising/server/include-functions#generated-sidebar" >}}) for an example.

### Custom Include User Interface with Vue
Here is an example of an include User Interface Vue Component:
```html
// my-instagram-include-params-sidebar-form.vue
<template>
  <div
    v-if="params"
    class="my-instagram-include-params-sidebar-form ld-panel hard--bottom"
  >
    <div class="ld-panel__header">
      <h2 class="ld-panel__header__title">
        Instagram settings
      </h2>
    </div>
    <div class="ld-panel__body">
      <form
        name="idForm"
      >
        <div
          class="ld-form-group flush--bottom"
        >
          <div class="ld-form-group__content breathe-quarter--bottom">
            <input
              v-model="paramsDraft.url"
              v-li-debounce-input:300="save"
              name="idInput"
              class="ld-text-input"
              placeholder="URL"
              required
            >
          </div>
          <div class="ld-form-group__content">
            <input
              id="caption"
              v-model="paramsDraft.caption"
              v-li-debounce-input:300="save"
              name="captionInput"
              class="ld-checkbox"
              type="checkbox"
            >
            <label
              class="soft-half--right"
              for="caption"
            ><div>✕</div></label> Caption
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
      default: function () { return {} }
    }
  },
  data: function () {
    return {
      paramsDraft: {
        url: this.params.url || '',
        caption: this.params.caption || false
      }
    }
  },
  methods: {
    save () {
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

You have to register this component like this:
```js
coreApi.vueComponentRegistry.registerComponent({
    type: 'includeParamsSidebarForm',
    name: 'myInstagramInclude',
    component: require('../../plugins/doc_includes/instagram/my-instagram-include-params-sidebar-form.vue').default
  })
```

The component `myInstagramInclude` can then be used as the `sidebarContentComponent` config property when registering the include in the server.

### Custom Include User Interface with an iframe

In the [server configuration]({{< ref "/customising/server/include-functions#include-ui-options" >}}) we learned that you can also register an external iframe as a user interface in a modal.
The Livingdocs modal which will contain the iframe listens to `postMessage`s for updates. You can use this to update the include params or close the modal without any changes:
```js
window.top.postMessage({action: 'update', params: {someParam: "test"}})
// or
window.top.postMessage({action: 'close'})
```

The `params` stored in the document when the modal is opened are passed into the iframe as a URL query parameter `?params`. It contains the stringified JSON of the `params` Object as an urlencoded String. You want to handle this case in the iframe's code.

### onIncludeRendered Hook

To make includes work in the Livingdocs Editor you sometimes have to execute some code inside the rendered document in the editor. For example when adding a twitter embed to a document you have to tell the twitter script to parse the page again and render the embed. In such cases you can use an onIncludeRendered hook in the editor.

 1) [register](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/add-include-example/plugins%2Fincludes%2Ftweet.js) a twitter include in the **server**<br>
 2) [register](https://github.com/livingdocsIO/livingdocs-editor-boilerplate/pull/99/files#diff-beb9ebd19fcc1e56d5bdeda46106e930R54) a twitter include rendering plugin in the **editor**<br>
 3) [trigger](https://github.com/livingdocsIO/livingdocs-editor-boilerplate/pull/99/files#diff-f2e50a0b2e458496f0fc57617c4a6a33) your script for a given include in the **editor**
