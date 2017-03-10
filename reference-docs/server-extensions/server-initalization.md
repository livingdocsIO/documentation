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
