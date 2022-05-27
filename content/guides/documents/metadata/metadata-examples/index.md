---
title: Metadata Plugins
bullets:
  - Add a metadata field to a contentType
  - Create a metadata plugin
---

## Example 1: Add a Metadata Field (Use Existing Plugins)

Say, we want to add a new metadata field "catchline" for articles. The catchline should be a simple text input in the publish view, editable by journalists.

### Server

(Note: we assume the use of the [Livingdocs server boilerplate](https://github.com/livingdocsIO/livingdocs-server-boilerplate) here)

You will first need to configure this in your server.

**Configuration Example with a Default Plugin**
```js
metadata: [
  {
    handle: 'catchline',               // Name of the metadata field
    type: 'li-text',                   // name of the metadata plugin
    config: {                          // config e.g. boundaries when saving values
      maxLength: 400
    },
    ui: {                              // UI config for the editor
      label: 'My Catchline'
    }
  }
]
```

The metadata lives in the content-type config. You can for example add the above defition to the content-type file `article.js` to have a `catchline` metadata field on articles.

Some things to note:

1. A standard plugin is stored in [`plugins/metadata`](https://github.com/livingdocsIO/livingdocs-server/tree/master/plugins/metadata) and will automatically be loaded on the downstream and is always ready for usage. In our example we use `li-text`.
2. Open the `contentType` configuration file you want to edit and add the catchline config from the example to the metadata configuration. The field `catchline` is now available in documents with this `contentType`.
3. By default, metadata is only stored in the database. When you also want to be the metadata field searchable via public API's publication search, you can read more [here]({{< ref "/guides/search/publication-index.md" >}}).



## Example 2: Create your own Metadata Plugin

Let's add your own metadata field `slug`.

A slug is a reader/SEO friendly text, used in a URL – example:
```
https://www.example.com/a-way-to-compare-schools
```

`a-way-to-compare-schools` is a slug.

An example of a slug form field on a metadata card in Livingdocs:
{{< img src="slug-metadata-form.png" alt="Slug form metadata" >}}

### Server

1. Define the custom plugin folder in the environment config (e.g. `conf/environments/all.js`).

```js
metadataPlugins: path.resolve('./plugins/metadata')
```

2. Activate the custom plugin in the `contentType` config. Attention: If there are `metadataGroups` defined in the contentType, you also have to add `bp-slug` to a group, otherwise you won't see it in the editor later.

```js
module.exports = {
  // ...
  metadata: [
    {
      handle: 'slug',
      type: 'bp-slug',
      config: {
        required: true,
        requiredErrorMessage: 'please provide a slug'
      },
      ui: {
        component: 'bpSlugForm',
        config: {
          label: 'Slug',
          placeholder: 'Set a slug'
        }
      }
    }
  ]
}
```

This defines a metadata property `slug` (handle). It uses a custom metadata plugin (`type`) set to `bp-slug`. We are going to see later on, how to define this plugin.

There is also a custom component for the form in editor defined via `ui.component`. It describes how the editor displays the `slug` metadata.

This custom component is implemented with Vue and registered through the [Vue Component Registry]({{< ref "/reference-docs/editor-extensions/vue-component-registry" >}}).

The `bp` prefix stands for one of our downstreams, named: *boilerplate*. You should prefix your metadata plugins to not clash with any potential components from Livingdocs.

1. Add a new metadata plugin to `./plugins/metadata/bp-slug.js`. Check the [reference docs]({{< ref "/reference-docs/server-extensions/metadata-plugins" >}}) to find all validation and hook options.

```js
module.exports = {
  name: 'bp-slug',

  storageSchema: {
    type: 'string'
  }
}
```

### Editor

In the editor we need to create the form defined in the metadata configuration: `bpSlugForm`.

Add `app/metadata/bp-slug-form.vue` to your editor files.

```vue
<template>
  <div class="bp-slug-form">
    <input
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      type="text"
      class="ld-text-input ld-text-input--full-width"
      @input="handleInput($event.target.value)"
    >
  </div>
</template>
<script>
export default {
  name: 'BpSlugForm',
  props: {
    value: {
      type: String,
      default: undefined
    },
    handle: {
      type: String,
      required: true
    },
    uiConfig: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    placeholder () {
      return this.uiConfig?.placeholder || `Enter a ${this.handle}`
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value?.replace(/ /g, '-'))
    }
  }
}
</script>
```

Register your metadata plugin in `app/editor.js`.

```js
liEditor.vueComponentRegistry.registerComponent({
  type: 'metadataPlugin',
  name: 'bpSlugForm',
  component: require('./metadata/bp-slug-form.vue').default
})
```

## References
- [Intro Metadata]({{< ref "/reference-docs/document/metadata" >}})
- [Metadata Plugin List]({{< ref "/reference-docs/document/metadata/metadata-plugin-list" >}})
- [Metadata Plugin Server Extension]({{< ref "/reference-docs/server-extensions/metadata-plugins" >}})
- [Vue Component Registry]({{< ref "/reference-docs/editor-extensions/vue-component-registry" >}})
