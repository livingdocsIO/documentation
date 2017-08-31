# Initialize a Livingdocs Server

## Bootstrapping

```js
// see server-configuration for how the configuration should look like
const conf = require('./conf')

// create a liServer with your configuration
const liServer = require('@livingdocs/server')(conf)

const port = liServer.config.get('server:port')
liServer.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log('Listening on http://localhost:%s', port)
})
```

### `liServer.listen`

`liServer.listen(port, (done) => {done(err, server)})`

Initializes all registered features and spins a web server up.

### `liServer.initialize`

`liServer.initialize((done) => {done()})`

Initializes all registered features. Executes _initialized hooks_ (see below) right before calling its callback.

### `liServer.registerInitializedHook`

`liServer.registerInitializedHook((done) => {done()})`

Hooks to be executed right after the server initialized can be registered on a Livingdocs Server instance.

```js
liServer.registerInitializedHook((done) => {
  done(/* err */)
})
```

You can register as many hooks as you'd like. They will be executed sequentially (and always in registration order), which means that no two hooks ever run in parallel and instead each hook waits until the previous one is done executing before running.
