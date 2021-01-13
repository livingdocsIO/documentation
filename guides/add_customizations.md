## Adding Customizations

If you use Livingdocs as on-premises software you can register plugins through a code API in both the editor and the server. Your projects will use a `package.json` file to install the core editor and server respectively as npm packages in a specific version.
The boilerplate projects are small customizing setups that illustrate this.

This document gives an overview of how to register custom features without going into detail on how to write any of them.

### Server

(Refer to the [boilerplate server](https://github.com/livingdocsIO/livingdocs-server-boilerplate) to see real examples of this.)

A custom server feature can contain any code you like. Common examples are bridges to third-party APIs or import features that import documents from some other source like an old legacy CMS.

The explanations here only refer to customizations that need coding. Other behavior can be customized using the [JSON configuration files](../reference-docs/server-configuration/config.md).

In the server you will normally have an `app/server.js` file add new features. The content looks something like this:
```js
const config = require('../conf')
// require the core server that you installed via npm
const server = require('@livingdocs/server')

// Create livingdocs server instance
const liServer = server(config)

// register your custom features
liServer.features.register('custom-webhook', require('./webhook'))
liServer.features.register('custom-import', require('./import'))

module.exports = liServer
```

A custom feature is normally put in a separate folder under `app` and has an `index.js` file with the following structure.

```js
module.exports = function (feature, server) {

  // get configuration options that you might have under this feature
  const appConfig = server.config.get('featureName')

  // Initialize feature
  // require files from your feature. Use dependency injection and
  // avoid state in required files.
  const featureApi = require('./featureApi')

  // Expose an api that other features can use
  feature.registerApi(featureApi)

  // Expose routes and controller functions if applicable (not all features need
  // a REST API)
  feature.registerResource({
    controller: editingApiController,
    routes: editingApiRoutes
  })
}
```

If you need to get your feature at some other point in your customizing project, you can do so with:
```
const featureApi = server.features.api('featureName')
featureApi.doSomething()
```
(you need the server instance for this)

The same also works if you need to access any of the [core features](https://github.com/livingdocsIO/livingdocs-server/tree/master/app/features) from Livingdocs, which by convention all start with `li-`.

### Editor

The code customizations in the Livingdocs editor (user interface) are restricted to the following cases:
- custom Angular factories or services (for use in other customizations)
- custom Angular components for metadata fields
- .. or [custom model classes](../reference-docs/editor-configuration/metadata.md) for existing metadata fields
- custom Angular components for doc-include sidebar user interfaces
- custom [Display Filter](/reference/display_filter.md)
- custom Dashboard item (a single item in the articles dashboard)
- custom Embed components (the core contains Iframes and Tweets)
- custom Iframely metadata extractors
- locale customizations

In addition to this some behavior can be customized using the JSON configuration.

The editor (like the server) usually has an `app/editor.js` file where code customizations are registered and that looks something like this:
```js
// entry point when using the webpack build of the editor
const liEditor = require('@livingdocs/editor')()
const editingApiModule = window.angular.module('li-editing-api')
// the Angular editorModule -> can be used to register services and factories
const editorModule = window.angular.module('livingdocs-editor')

// example of loading a custom angular module: ui-validate
// require('angular-ui-validate')
// editorModule.requires.push('ui.validate')

// Just require a custom Angular factory using the editorApiModule
require('./custom/scripts/factories/categories')(editingApiModule)

// Register a custom filter for the dashboard
const layoutsFilter = require('./custom/filters/layouts_filter')
liEditor.searchFilters.registerList('layouts', layoutsFilter)

// Register a custom doc-include sidebar interface (Angular component)
liEditor.includes.register('brightcove', {
  template: require('../plugins/includes/ld-brightcove-include/brightcove_include_template.html'),
  controller: require('../plugins/includes/ld-brightcove-include/brightcove_include_controller'),
  bindings: {
    directive: '=',
    componentView: '=',
    component: '='
  }
})

// Register a custom metadata field model (business logic)
liEditor.metadataServices
  .register('categorySelection',
    require('../plugins/metadata_services/category_selection_service'))

// Example of custom embeds
// embeds = require('@livingdocs/editor/app/scripts/modules/embeds/embeds')
// Pinterest = require('./custom/scripts/modules/embeds/pinterest/pinterest')
// Facebook = require('./custom/scripts/modules/embeds/facebook/facebook')
// embeds.registerCustomEmbeds [
//   Facebook,
//   Pinterest
// ]

const Iframely = require('@livingdocs/editor/app/scripts/modules/iframely')
const defaultExtractor = require('@livingdocs/editor/app/scripts/modules/iframely/default_metadata_extractor')
Iframely.initializeOembedMetadataExtractor(defaultExtractor)

// Example of changing the date locale
// moment = require('moment')
// momentDe = require('moment/locale/de')
// moment.locale('de')

liEditor.mount()
```
