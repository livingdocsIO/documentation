# How to register a feature within the Livingdocs Server

```js
module.exports = function (feature, server) {

  const appConfig = server.config.get('featureName')
  // validate and process your feature configuration
  // before injecting it into your feature code.

  // Initialize feature
  // require files from your feature. Use dependency injection and
  // avoid state in required files.
  const featureApi = require('./featureApi')

  // Expose an api that other features can use
  feature.registerApi(featureApi)

  // Expose routes and controller functions.
  feature.registerResource({
    controller: editingApiController,
    routes: editingApiRoutes
  })

}
```
