---
title: Server Customization
bullets:
  - Register a custom route
weight: 1
---

You can register plugins through a code API in both the editor and the server. Your projects will use a `package.json` file to install the core editor and server respectively as npm packages in a specific version.

This document gives an overview of how to register custom routes to extend server
functionality without going into detail on how to write any of them.

## Register a custom route

A custom route can be used to extned your server with additional functionality. Common examples are bridges to third-party APIs or import features that import documents from some other source like an old legacy CMS.

The explanations here only refer to customizations that need coding. Other behavior can be customized using the [JSON configuration files]({{< ref "/customising/server-configuration" >}}).

In the server you will normally have an `app/server.js` file add new features. The content looks something like this:

```js
const config = require('../conf')
// require the core server that you installed via npm
const server = require('@livingdocs/server')

// Create livingdocs server instance
const liServer = server(config)

// register your custom routes
liServer.registerServerRoutes(require('./webhook')(liServer))
liServer.registerServerRoutes(require('./import')(liServer))

module.exports = liServer
```

A custom route is normally put in a separate folder under `app` and has an `index.js` file with the following structure.

```js
module.exports = function customRoute(liServer) {
  // get configuration options that you might have under this feature
  const featureConfig = liServer.config.get('featureName')

  // Initialize feature
  // require files from your feature. Use dependency injection and
  // avoid state in required files.
  const featureApi = require('./yourApi')

  // Expose routes and controller functions if applicable (not all features need
  // a REST API)
  return {
    method: 'get',
    prefix: '/daily-planet',
    path: '/resource'
    // additional config options
  }
}
```
