---
title: Server Customization
bullets:
  - Register a custom server feature
weight: 1
on-premise: true
---

If you use Livingdocs as on-premises software you can register plugins through a code API in both the editor and the server. Your projects will use a `package.json` file to install the core editor and server respectively as npm packages in a specific version.
The boilerplate projects are small customizing setups that illustrate this.

This document gives an overview of how to register custom features without going into detail on how to write any of them.

## Register a custom server feature

(Refer to the [boilerplate server](https://github.com/livingdocsIO/livingdocs-server-boilerplate) to see real examples of this.)

A custom server feature can contain any code you like. Common examples are bridges to third-party APIs or import features that import documents from some other source like an old legacy CMS.

The explanations here only refer to customizations that need coding. Other behavior can be customized using the [JSON configuration files]({{< ref "/reference-docs/server-extensions/server-configuration" >}}).

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
```js
const featureApi = server.features.api('featureName')
featureApi.doSomething()
```
(you need the server instance for this)

The same also works if you need to access any of the [core features](https://github.com/livingdocsIO/livingdocs-server/tree/master/app/features) from Livingdocs, which by convention all start with `li-`.
