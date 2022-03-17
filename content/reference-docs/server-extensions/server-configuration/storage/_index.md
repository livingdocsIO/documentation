---
title: Storage Strategy Configuration
linkTitle: Storage
menus:
  reference-docs:
    parent: Server Config
---

Various features have to store files in a blobStore. For this they offer a `storage`
config option that can be configured to store data in memory, on the file system or on an object storage like S3.

Underlying this we use the abstract-blob-store API: https://github.com/maxogden/abstract-blob-store

## Configuration

At the moment we have a fixed set of supported strategies:
- [memory](#memory)
- [fs](#local-file-system)
- [s3](#s3-object-storage)
- [google-cloud-storage](#google-cloud-storage)
- [cloudinary](#cloudinary)

### Interface

```js
storage: {
  // an alias to our supported abstract blob stores
  strategy: 'strategy-name',
  // configuration that gets passed to the abstract blob store
  config: {...}
}
```


## Strategies

#### Memory

For testing purposes you directly use a memory storage:
```js
storage: {
  strategy: 'memory'
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

### S3 Object Storage

S3 is the most common strategy. It is implemented by multiple cloud hosters
and also supported by on-premise solutions like [minio](https://min.io/) or [ceph](https://docs.ceph.com/en/latest/radosgw/s3/).

The whole config object gets passed down to the [aws-sdk S3 class](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property).

{{< added-in release-2022-03 >}}: The `accessKeyId` and `secretAccessKey` are optional when running on AWS ECS/EKS/Fargate together with an [IAM service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html). This simplifies token management and rotation within the AWS ecosystem.

```js
storage: {
  strategy: 's3',
  config: {
    bucket: 'livingdocs-images-dev',
    region: 'eu-central-1',
    accessKeyId: 'key',
    secretAccessKey: 'secret',
    params: {ACL: 'public-read'}
  }
}
```

#### S3 with a HTTP Proxy

If you use an http proxy like [squid](http://squid-cache.org/), you can declare the `HTTPS_PROXY` environment variable, which then configures the aws client.
e.g. `HTTPS_PROXY=http://localhost:3128 node index.js`

Or you can explicitly configure it with the options provided by the aws sdk:

```js
storage: {
  strategy: 's3',
  config: {
    ...
    httpOptions: {
      proxy: 'http://localhost:3128'
      // If you can't use ssl in your http proxy,
      // you might need to disable it explicitly
      // sslEnabled: false
    }
  }
}
```

### Google Cloud Storage

The google cloud storage just needs a bucket name and a credentials object.
Please consult the [detailed instructions]({{< ref "/reference-docs/server-extensions/server-configuration/storage/google-cloud-storage" >}}) to retrieve the `credentials` from google.

```js
storage: {
  strategy: 'google-cloud-storage',
  config: {
    bucket: 'my-bucket-name',
    credentials: {
      type: 'service_account',
      project_id: '******',
      private_key_id: '******',
      private_key: '******',
      client_email: '******',
      client_id: '******',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: '******'
    }
  }
}
```

### Cloudinary

With cloudinary we support a storage provider that has built in image-processing
and can directly serve the images instead of using a separate image service
in front of another object storage like S3.

The whole config object gets passed down to the cloudinary sdk.
The minimal configuration are the 3 properties listed here,
For more details you might want to go through [their configuration options](https://cloudinary.com/documentation/node_integration#configuration).

```js
storage: {
  strategy: 'cloudinary',
  config: {
    cloud_name: 'sample',
    api_key: 'your-key',
    api_secret: 'your-secret'
  }
}
```
