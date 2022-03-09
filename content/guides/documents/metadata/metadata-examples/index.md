---
title: Metadata Plugins
bullets:
  - Add a metadata field to a contentType
  - Create a metadata plugin
---

## Example 1: Add a Metadata Field

Say we want to create a new metadata field "catchline" for articles. The catchline should be a simple text input on the publish panel that journalists can edit.

For details have a look at the [server configuration]({{< ref "/reference-docs/server-extensions/metadata-plugins" >}})

### Server

(Note: we assume the use of the [Livingdocs server boilerplate](https://github.com/livingdocsIO/livingdocs-server-boilerplate) here)

You will first need to configure this in your server.

**Configuration Example with a Default Plugin**
```js
metadata: [{
  handle: 'catchline', // Name of the metadata field
  type: 'li-text', // name of the used metadata plugin
  config: {maxLength: 400}, // configuration
  ui: {component: 'liMetaTextForm'} // UI to use in the editor
}]
```

The metadata lives in the content-type config. You can for example add the above defition to the content-type file `article.js` to have a `catchline` metadata field on articles.

Some things to note:

1. A standard plugin is stored in `plugins/metadata` and will automatically be loaded on the downstream and is always ready for usage. In our example we use `li-text`.
2. Open the `contentType` configuration file you want to edit and add the catchline config from the example to the metadata configuration. The field `catchline` is now available on documents with this `contentType`.
3. The `ui` proprety in `metadata` defines the component that will be displayed in the Editor publish screen.

By default, metadata is only stored in the database. Depending on your use case you might want to add it to your search index. There are two search indexes: drafts (for the internal search), publications (for the public API).

To add something to your drafts index, open the metadata mapping (typically in `search/custom-mappings/metadata.json`) and add an entry as follows (the key `properties` probably already exists):
```json
{
  "properties": {
    "catchline": {
      "type": "text"
    }
  }
}
```
4. Reset your draft elastic search index by running `npx livingdocs-server elasticsearch-index --handle li-documents -y`

Adding to the publication index only makes sense if you want to filter by it (so the catchline is a poor example for this). [Read about the publication index]({{< ref "/guides/search/publication-index.md" >}})

## Example 2: Create your own Metadata Plugin

If you want to use a custom metadata plugin, you have to do the following steps on the server:

- Define the custom plugin folder in the environment config (e.g. `conf/environments/all.js`).

```js
metadataPlugins: path.resolve('./plugins/metadata')
```

* Add a new custom plugin to './plugins/metadata/customername-pluginname.js'

```js
module.exports = {
  name: 'customerName-pluginName',
  storageSchema: {
    type: 'string'
  },
  validate: (value, config) => {
    console.log(value); // the entered value
    console.log(config); // { customPluginConfig: 'test' }
  }
}
```

* Activate the custom plugin in the `contentType` config

```js
metadata: [{
  handle: 'myNewMetadataField',
  plugin: 'customerName-pluginName',
  config: {
    customPluginConfig: 'test'
  }
}]
```


## Example 3: Fully customized metadata component

Lets add a new metadata field, a `slug`, in the publish screen.

A slug is a reader/SEO friendly text used in a URL, example:
```
https://www.example.com/a-way-to-compare-schools
```

`a-way-to-compare-schools` is a slug.

{{< img src="slug-metadata-form.png" alt="Slug form metadata" >}}


#### Server

We extend the configuration for documents with `contentType` **article**.

ContentType configuration:
```js
module.exports = {
  metadata: [{
    handle: 'slug',
    plugin: 'bp-slug',
    config: {
      required: true,
      requiredErrorMessage: 'please provide a slug'
    },
    ui: {
      compononent: 'bpSlugForm',
      config: {
        label: 'Slug',
        placeholder: 'Set a slug'
      }
    }
  }]
}
```

This defines a `metadata` property `slug`. It has a custom metadata `plugin` set to `bp-slug`. We are going to see later on how to define this plugin.

There is also a custom component for the the form in editor defined via `ui.component`. It describes how the editor displays the `slug` metadata.

This custom component is implemented with Vue and registered through the vueComponentRegistry.

The `bp` prefix stands for one of our downstream named: *boilerplate*. It's generally a good practice to prefix custom components to not clash with with any potential components from Livingdocs.

Next step is to create a file to implement a simple custom server plugin.
`plugins/metadata/bp-slug.js`:
```js
mmodule.exports = {
  name: 'bp-slug',
  storageSchema: {
    type: 'string'
  }
}
```

As a side note, in the server, custom plugins are probably ready to use. See `conf/environments/all.js`:
```js
module.exports = {
  metadataPlugins: path.resolve('./plugins/metadata')
}
```


#### Editor

In the editor we need to create the form defined in the metadata configuration: `bpSlugForm`.

Add the following files in `plugins/metadata/bp-slug/form`:

- `index.js`
  ```js
  module.exports = (editorModule) => {
    editorModule.vueComponentRegistry.registerComponent({
      type: 'metadataPlugin',
      name: 'bpSlugForm',
      component: require('./bp-slug-form.vue').default
    })
  }
  ```

- `bp-slug-form.vue`
  ```html
  <template>
    <div class="bp-slug-form">
      <input
        :id="id"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        type="text"
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
      }
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

## References
- [Metadata]({{< ref "/reference-docs/document/metadata" >}})
