
# Metadata Plugins

## Example 1: Full Example on how to Introduce a Metadata Field with a Standard Metadata Plugin

Say we want to create a new metadata field "catchline" for articles of your default web channel. The catchline should be a simple text input on the publish panel that journalists can edit.

For details have a look at the [server configuration reference documentation](../../reference-docs/server-configuration/metadata.md)

#### Server

(Note: we assume the use of the [Livingdocs server boilerplate](https://github.com/livingdocsIO/livingdocs-server-boilerplate) here)

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
2. Open the `contentType` configuration file you want to edit and add the catchline config from the example to the metadata configuration. The field `catchline` is now available on documents with this `contentType`.
3. If you want to see `catchline` on the editor publish screen, you have to configure the `metadataFormArrangement` in the same `contentType` configuration file. This will render a text-input field to the publish screen of articles where users can type in the value for the "catchline" which is automatically saved to the server.
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


## Example 2: Create your own Metadata Plugin

If you want to use a custom metadata plugin, you have to do the following steps on the server:

- Define the custom plugin folder in the environment config (e.g. `conf/environments/all.js`).

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

* Activate the custom plugin in the `contentType` config

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


## Example 3: Fully customized metadata component

Lets add a new metadata field, a `slug`, in the publish screen.

A slug is a reader/SEO friendly text used in a URL, example:
```
https://www.example.com/a-way-to-compare-schools
```

`a-way-to-compare-schools` is a slug.

![Slug form metadata](./slug-metadata-form.png)


#### Server

First we need to define a new property in our Elasticsearch mapping.

In `app/search/custom-mappings/metadata.json`, add the `slug` property:
```JSON
{
  "properties": {
    "slug": {
      "type": "string",
      "index": "not_analyzed"
    }
  }
}
```

Then, we extend the configuration of the **web** channel for documents with `contentType` **article**.

ContentType configuration:
```js
module.exports = {
  metadata: {
    slug: {
      plugin: 'bp-slug',
      config: {
        required: true,
        requiredErrorMessage: 'please provide a slug'
      }
    }
  },
  metadataFormArrangement: [
    {
      slug: 'slug',
      form: 'bp-slug-form',
      config: {
        service: 'bpSlugService',
        label: 'Slug',
        placeholder: 'Set a slug'
      }
    }
  ]
};

```

There is a new `metadata` key: `slug`. It has a custom server `plugin` set to `'bp-slug'`. We are going to see later on how to define this plugin.

There is also a new object in the `metadataFormArrangement` array. It describes how the editor handles the `slug` metadata. It has a form: `'bp-slug-form'`, and a custom service: `'bpSlugService'`.

The form is an Angular component and the custom service refers to some business logic code.

The `bp` prefix stands for one of our downstream named: *boilerplate*. It's generally a good practice to namespace custom components.

Next step is to create a file to implement a simple custom server plugin.
`plugins/metadata/bp-slug.js`:
```js
mmodule.exports = {
  name: 'bp-slug',
  schema: {
    type: 'string'
  }
}
```

Finally we need to reset Elasticsearch.
```bash
grunt search-index:document:reset
```

As a side note, in the server, custom plugins are probably ready to use. See `conf/environments/all.js`:
```js
module.exports = {
  metadataPlugins: path.resolve('./plugins/metadata')
}
```


#### Editor

In the editor we need to create the form defined in the server as `'bp-slug-form'`.

Add the following files in `plugins/metadata/bp-slug/form`:

- `index.js`
  ```js
  module.exports = (editorModule) => {
    editorModule.component('bpSlugForm', {
      template: require('./template.html'),
      controller: require('./controller'),
      bindings: {
        name: '@', // The name of the metadata field:'slug'
        type: '@' // The type of document for which this form is used: 'article'
      }
    })
  }
  ```

- `template.html`
  ```html
  <div class="ld-form-group ld-form-group--horizontal">
    <div class="ld-form-group__label">
      <label>{{$ctrl.label}}</label>
    </div>
    <div class="ld-form-group__content">
      <input class="ld-text-input ld-text-input--full-width"
        ng-change="$ctrl.enteringText()"
        type="text"
        ng-model="$ctrl.slug"/>
    </div>
  </div>
  ```

- `controller.js`
  ```js
  module.exports = class BpSlugController {
    static get $inject () { return ['editor'] }

    constructor (editor) {
      const metadataForm = editor.workspace.metadataForm
      const {service, label} = metadataForm.getFormConfig(this.name, this.type)
      this.service = metadataForm.getService(service)
      this.slug = this.service.get(this.name)
      this.label = label
    }

    enteringText () {
      this.slug = this.service.set(this.name, this.slug)
    }
  }
  ```

In the server there was also a custom service named: `'bpSlugService'`, we need to create it.

Add `plugins/metadata/bp-slug/service/index.js`:
```js
class BpSlugService {

  constructor (metadata, $injector) {
    this.metadata = metadata
  }

  set (identifier, slug) {
    const normalized = slug.replace(/ /g, '-')
    this.metadata.set(identifier, normalized)
    return normalized
  }

  get (identifier) {
    return this.metadata.get(identifier)
  }

}

module.exports = ({metadata, $injector}) => {
  return new BpSlugService(metadata, $injector)
}
```

Finally, the form and the service are to be registered.

In `app/editor.js`:

```js
const editorModule = window.angular.module('livingdocs-editor')

require('../plugins/metadata/bp-slug/form/bp-slug')(editorModule)

liEditor.metadataServices
  .register(
    'bpSlugService',
    require('../plugins/metadata/bp-slug/service')
  )
```

## Boilerplate

The whole implementation for this already exists in the boilerplates projects:
- https://github.com/livingdocsIO/livingdocs-server-boilerplate
- https://github.com/livingdocsIO/livingdocs-editor-boilerplate

One would need to "activate" it by uncommenting the server's configurations and the editor's registrations.
