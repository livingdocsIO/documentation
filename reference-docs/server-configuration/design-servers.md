# Design servers

Any livingdocs server can act as design server.

## Configure a design server

In the configuration of the livingdocs server, you can point `designsApi:host` to any livingdocs server
instance, even a local installation.

```js
module.exports = {
  designsApi: {
    host: 'http://localhost:9090'
  }
}
```

For simple evaluations you can use the server of our service at `https://api.livingdocs.io`.
When customizing livingdocs, you might want to configure your own.
