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
  schema: {
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
      service: 'bpSlugService',
      config: {
        label: 'Slug',
        placeholder: 'Set a slug'
      }
    }
  }]
}
```

This defines a `metadata` property `slug`. It has a custom metadata `plugin` set to `bp-slug`. We are going to see later on how to define this plugin.

There is also a custom component for the the form in editor defined via `ui.component`. It describes how the editor displays the `slug` metadata. It has a form: `bpSlugForm`, and a custom service `bpSlugService`.

The component is an Angular component and the custom service refers to some business logic code defined separately in the Editor.

The `bp` prefix stands for one of our downstream named: *boilerplate*. It's generally a good practice to prefix custom components in Angular as all components are registered globally.

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
