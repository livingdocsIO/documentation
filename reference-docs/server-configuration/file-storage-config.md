# Storage Configuration

Multiple features need to store static files. For this they offer a `storage`
option that allows for different storage strategies.


## Amazon S3 strategy

Example Amazon S3 configuration to store images:
```js
images: {
  storage: {
    strategy: 's3',
    config: {
      bucket: 'livingdocs-images-dev',
      region: 'us-west-1',
      accessKeyId: process.env.ENV_VAR,
      secretAccessKey: process.env.ENV_VAR,
    }
  }
}
```


#### Using a proxy with S3

For S3 it is necessary to use the proxy-agent module. For more info see
the [Amazon instructions](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-configuring-proxies.html)

Warning: This only works if the environment variable `HTTP_PROXY` is not set.

Example design asset configuration with a proxy:
```js
const proxy = require('proxy-agent')

module.exports = {
designs: {
  assets: {
    publicUrl: 'https://some-host.com',
    storage: {
      strategy: 's3',
      config: {
        bucket: 's3-bucket',
        region: 'eu-central-1',
        accessKeyId: process.env.ENV_VAR,
        secretAccessKey: process.env.ENV_VAR,
        signatureVersion: 'v4',
        httpOptions: {
          agent: proxy('http://proxy.some-host.com:3128/')
        }
      }
    }
  }
  // ...
}
```
