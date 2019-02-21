# Storage Config Options

#### Description

Various features have to store files in a blobStore. For this they offer a `storage`
config option that can be configured to store data in memory, on the file system or in S3.

Underlying this we use the abstractBlobStore API: https://github.com/maxogden/abstract-blob-store


#### S3

Standard S3 Config
```js
storage: {
  strategy: 's3',
  config: {
    bucket: 'livingdocs-images-dev',
    params: {ACL: 'public-read'},
    region: 'eu-west-1',
    accessKeyId: 'key',
    secretAccessKey: 'secret'
  }
}
```
Note: `params: {ACL: 'public-read'}` is set by default if you omit `params`.

For more information about the config object see the [S3 docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor_details).

#### S3 With A Proxy

The standard S3 config will respect the `HTTPS_PROXY` environment variable.
(e.g. `HTTPS_PROXY=http://localhost:3128`)

Or you can specify a proxy explicitly as seen in the examples below.


S3 with a proxy set via `httpOptions`:
```js
storage: {
  strategy: 's3',
  config: {
    bucket: 'livingdocs-images-dev',
    region: 'eu-west-1',
    accessKeyId: 'key',
    secretAccessKey: 'secret',
    httpOptions: {
      proxy: 'http://localhost:3128'
    }
  }
}
```

S3 with a `proxy-agent` proxy set via `httpOptions`:
```js
storage: {
  strategy: 's3',
  config: {
    bucket: 'livingdocs-images-dev',
    region: 'eu-west-1',
    accessKeyId: 'key',
    secretAccessKey: 'secret',
    httpOptions: {
      agent: new require('proxy-agent')('http://localhost:3128')
    }
  }
}
```


#### Local File System

Example setup to write to a temporary folder:
```js
storage: {
  strategy: 'fs',
  config: {
    path: require('os').tmpdir()
  }
}
```


#### Memory

For testing purposes you can gain performance with a memory storage:
```js
storage: {
  strategy: 'memory'
}
```
