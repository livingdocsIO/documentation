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

### `liServer.initialize`

`liServer.initialize((done) => {done()})`

Initializes all features. Executes _initialized hooks_ (see below) right before calling its callback.


### `liServer.listen`

`liServer.listen(port, (done) => {done(err, server)})`

Calls `liServer.initialize()` and then starts a web server under the provided port. 
Note: If you call `liServer.listen()` you must not call `liServer.initialize()` before.



### `liServer.registerInitializedHook`

`liServer.registerInitializedHook((done) => {done()})`

Hooks to be executed by `liServer.initialize()` right after all features have been initialized. This method
is useful to configure features dynamically or register feature specific hooks. An example would be to register
a publish hook on the documents feature.

```js
liServer.registerInitializedHook((done) => {
  done(/* err */)
})
```

You can register as many hooks as you'd like. They will be executed sequentially (and always in registration order), which means that no two hooks ever run in parallel and instead each hook waits until the previous one is done executing before running.
