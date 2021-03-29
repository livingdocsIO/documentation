---
title: Initialize a Livingdocs Server
menus:
  reference-docs:
    parent: Server Config
---

## Bootstrapping

```js
// see server-configuration for how the configuration should look like
const conf = require('./conf')
const port = conf.get('server:port')

// create a liServer with your configuration
const liServer = require('@livingdocs/server')(conf)

liServer.listen(port)
  .then(() => {
    liServer.warn('Listening on http://localhost:%s', port)
  })
```

### `liServer.initialize`

Initializes all features and executes _initialized hooks_ (see below) right before calling its callback. It returns a promise. This can be used in scripts and tests.

```js
const conf = require('./conf')
const liServer = require('@livingdocs/server')(conf)

liServer.initialize()
  .then(() => {
    liServer.warn('Started the server without http server')
  })
```

### `liServer.listen`

Calls `liServer.initialize()` and then starts a http server on the configured port.
Note: If you call `liServer.listen()` you must not call `liServer.initialize()` before.

### `liServer.registerInitializedHook`

Hooks to be executed by `liServer.initialize()` right after all features have been initialized.
This method is useful to configure features dynamically or register feature specific hooks.
An example would be to register a publish hook on the documents feature.

```js
liServer.registerInitializedHook(async () => {
  liServer.log.info('This gets executed before starting the http server.')

  // And will only start the server after it
  // succeeded if you use promises in here
  return new Promise((resolve) => setTimeout(resolve, 1000))
})
```

You can register as many hooks as you'd like. They will be executed sequentially (and always in registration order), which means that no two hooks ever run in parallel and instead each hook waits until the previous one is done executing before running.
