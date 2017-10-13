# Example 1: Full Example on how to Introduce a Metadata Field with a Standard Metadata Plugin

Say we want to create a new metadata field "catchline" for articles of your default web channel. The catchline should be a simple text input on the publish panel that journalists can edit.

For details have a look at the [server configuration reference documentation](../../reference-docs/server-configuration/metadata.md)

## Server

(Note: we assume the use of the [Livingdocs server boilerplate](https://github.com/upfrontIO/livingdocs-server-boilerplate) here)

You will first need to configure this in your server.

**Configuration Example with a Default Plugin**
```js
metadata: {
  // Name of the metadata field
  catchline: {
    // Define the plugin for the catchline
    // 'li-text' is the name defined in /plugins/metadata/li-text
    plugin: 'li-text'
  }
},
metadataFormArrangement: [
  {
    name: 'catchline',
    form: 'li-meta-text-form',
    config: {
      service: 'defaultText'
    }
  }
]
```

1. A standard plugin is stored in `plugins/metadata` and will automatically be loaded on the downstream and is always ready for usage. In our example we use `li-text`.
2. Open the respective configuration file, in our case `conf/channels/web/article/all.js` and add the catchline config from the example to the metadata object into `all.js`. The field `catchline` is now available on the server.
3. If you want to see `catchline` on the editor publish screen, you have to configure the `metadataFormArrangement` in `conf/channels/web/article/all.js`. This will render a text-input field to the publish screen of articles where users can type in the value for the "catchline" which is automatically saved to the server.
4. Open your elastic search metadata mapping (typically in `search/custom-mappings/metadata.json`) and add an entry as follows (the key `properties` probably already exists):
```json
{
  "properties": {
    "catchline": {
      "type": "string"
    }
  }
}
```
5. Reset your document elastic search index by running `grunt search-index:document:reset`
6. After you have setup your new metadata field you can use it in the editor.

# Example 2: Activate and Use a Custom Plugin

If you want to define and use a custom plugin, you have to do the following steps on the server:

- Define the custom plugin folder in the environment config (`conf/environments/all.js`).

```js
metadataPlugins: path.resolve('./plugins/metadata')
```

* Add a new custom plugin to './plugins/metadata/customername-pluginname.js'

```js
module.exports = {
  name: 'customername-pluginname',
  schema: {
    type: 'string'
  },
  validate: (value, config) => {
    console.log(value); // the entered value
    console.log(config); // { custompluginconfig: 'test' }
  }
}
```

* Activate the custom plugin in the channel config

```js
metadata: {
  myNewMetadataField: {
    plugin: 'customername-pluginname',
    config: {
      custompluginconfig: 'test'
    }
  }
}
```
