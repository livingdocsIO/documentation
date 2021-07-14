---
title: Livingdocs Server Config
linkTitle: Server Config
menu: reference-docs
---

## Configuration Object

```js
{
  "customerId": "{{< a href="#customer" title="<customerId config>">}}",

  "logs": "{{< a href="#logging" title="<logging config>">}}",
  "server": "{{< a href="#server" title="<http server config>" >}}",
  "editor": "{{< a href="#editor" title="<editor config>">}}",

  "db": "{{< a href="#postgres-database" title="<postgres database config>">}}",
  "redis": "{{< a href="#redis-database" title="<redis database config>">}}",

  "auth": "{{< a href="#authentication" title="<authentication config>">}}",
  "emails": "{{< a href="#user-management-emails" title="<user management emails>">}}",

  "designLoader": "{{< a href="#design-loader" title="<design loader config>">}}",
  "designs": "{{< a href="#designs" title="<designs config>">}}",

  "documents": "{{< a href="#documents" title="<document feature config>">}}",
  "mediaLibrary": "{{< a href="#media-library-dam" title="<media library config>">}}",
  "documentLists": "{{< a href="#document-lists" title="<document list feature config>">}}",

  "projects": "{{< a href="#projects" title="<projects config>">}}",
  "render_pipeline": "{{< a href="#render-pipeline" title="<render pipeline config>">}}",
  "categories": "{{< a href="#categories" title="<categories config>">}}",

  // Configure the elasticsearch behavior
  "search": "{{< a href="#search" title="<search config>">}}",
  "elasticIndex": "{{< a href="#custom-elasticsearch-index" title="<elasticIndex config>">}}",

  // Interactions between server, editor and users
  "pusher": "{{< a href="#pusher" title="<pusher config>">}}",
  "pushNotifications": "{{< a href="#push-notifications" title="<push notification config>">}}",
  "preview": "{{< a href="#custom-previews" title="<preview config>">}}",
  "integrations": "{{< a href="#integrations" title="<integrations config>">}}",

  // routing feature
  "routing": "{{< a href="#routing" title="<routing config>">}}",
  "kv": "{{< a href="#routing" title="<routing storage config>">}}"
}
```

## Customer

{{< added-in release-2021-06 >}}

The `customerId` property is a string which is used to identify the server. It will typically be the same across all of your environments, but if you use multiple Livingdocs servers for different projects you should give them different `customerId` values.

```js
customerId: 'daily-planet'
```

## Logging

[More info about logging]({{< ref "./logging.md" >}})

```js
logs: {
  enabled: true,

  // possible log levels: 'error', 'warn', 'info', 'debug', 'trace'
  level: 'warn',

  // use `true` for development to have a formatted output
  pretty: false,

  // enable request logs
  logRequests: true
}
```
## Services

#### Server

```js
server: {
  port: 9090,
  max_json_request_size: '100kb'
}
```

#### Editor


```js
editor: {
  // configure the Editor Host. This is used for password reset & login urls.
  public_host: 'http://localhost:9000',
  autoSaveInterval: 3 // This defines how often the editor auto saves in seconds
}
```

#### Postgres Database

```js
db: {
  connectionString: 'postgres://postgres:password@localhost:5432?max=20',
  ssl: {
    rejectUnauthorized: false,
    ca: '-----BEGIN CERTIFICATE-----....',
    key: '-----BEGIN PRIVATE KEY-----...',
    cert: '-----BEGIN CERTIFICATE-----....',
  }
}
// or
db: {
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  database: 'li_local',
  pool_min: 1,
  pool_max: 20,
  ssl: false
}
```

To not create too many connections against postgres, we suggest to use a connection pooler running using `transaction` mode.

Amazon, Google Cloud and other hosters also offer solutions for that.

Self-hosted solutions could use [pgbouncer](https://www.pgbouncer.org/) or [odyssey](https://github.com/yandex/odyssey). We have some docker images for them in our docker registry.
https://github.com/livingdocsIO/docker#livingdocsodyssey

#### Redis Database

Livingdocs uses redis worker queue for imports and elasticsearch indexing.
A functional setup is mandatory.

```js
redis: {
  // All keys in redis will be prefixed by this value
  // This can be used to prevent tests from interfering with regular usage
  prefix: 'li:develop',

  // Configure a specific redis primary, defaults to 'localhost'
  host: 'redis',
  port: 6379,

  // Or configure {{< a title="redis sentinel" href="https://redis.io/topics/sentinel" >}}
  masterName: 'livingdocs-develop',
  sentinels: [
    {host: 'sentinel1', port: 26379},
    {host: 'sentinel2', port: 26379}
  ],

  // Optional username and password
  username: 'string',
  password: 'string'
}
```

## Features


#### Authentication

Configure the authentication feature.

*Important* Replace `accessTokenSecret` with a randomly generated string for every environment you use. It will be used to sign json web tokens.
Changing the `accessTokenSecret` will render all access tokens in the
database useless.

##### `connections.local`

Represents the default email/password authentication strategy.

- `defaultLoginDomain` Allows to omit the email suffix
  (e.g '@gmail.com') during login
- `deniedPasswords` Array of regexes that are used in the strong passwords
  feature. If the regex matches the password cannot be used.


```js
auth: {
  accessTokenSecret: 'GpA^xLH5$qLzWcqEvZmE3imYwVf68kXa1JR5rP*NFRUyRPQRtbVwWk3bHusD',

  // The refresh interval of tokens used in the editor
  accessTokenTtl: '12h',

  // How long a password reset link should be valid
  passwordResetTtl: '6h',

  // How long the link in an account confirmation email should be valid
  account_confirmation_ttl: '3d',
  connections: {
    local: {
      label: 'Password',
      enabled: true,
      loginEnabled: true,
      registrationEnabled: true,
      strategy: 'li-authentication-local',
      config: {
        defaultLoginDomain: 'livingdocs.io',
        passwordResetUrl: '/reset#code={{code}}',
        deniedPasswords: [
          'upfront',
          'livingd[o0][cg]s',
          'lukas',
          'nzz',
          '@[a-z]{2,6}\\.[chomteinf]{2,4}(.au)?$' // Email blacklisting
        ]
      }
    }
  }
}
```

#### User Management Emails

```js
emails: {
  transports: {
    awsEmailSender: {
      from: 'Livingdocs <noreply@livingdocs.io>',
      // You can use any nodemailer module to send emails
      // The configuration below gets passed to this module
      // See https://nodemailer.com/
      module: 'nodemailer-ses-transport',
      // for more options see the aws client config object:
      // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html
      config: {
        accessKeyId: 'yourAccessKeyId',
        secretAccessKey: 'yourSecretAccessKey',
        region: 'eu-west-1',
        httpOptions: {proxy: process.env.HTTP_PROXY}
      }
    }
  },
  templates: {
    userCreated: {
      transport: 'default',
      subject: 'Welcome at Livingdocs',
      htmlTemplatePath: require.resolve('@livingdocs/server/plugins/email-templates/user_created.html'),
      attachments: {
        cid: 'logo',
        filename: 'logo.png',
        path: require.resolve('@livingdocs/server/plugins/email-templates/logo.png')
      }
    },
    passwordReset: {
      transport: 'awsEmailSender',
      subject: 'Password reset',
      htmlTemplatePath: require.resolve('@livingdocs/server/plugins/email-templates/password_reset.html'),

      // # or
      // textTemplate: 'Reset password for <%= user.name %>'
      // htmlTemplate: 'Reset password for <%= user.name %>'

      attachments: {
        cid: 'logo',
        filename: 'logo.png',
        path: require.resolve('@livingdocs/server/plugins/email-templates/logo.png')
      }
    }
  }
}
```

##### New Login Device Detection

In case you want to activate abuse detection through login device comparison, please configure:

```js
auth: {
  connections: {
    local: {
      sendNotificationIfNewDevice: true
    }
  }
}
```

After activating the feature, you have to also configure the email content that is sent:

```js
emails: {
  templates: {
    newLoginDevice: {
      transport: 'default',
      subject: 'New device login detected',
      htmlTemplatePath: require.resolve('@livingdocs/server/plugins/email-templates/new_login_device.html'),
      attachments: [{
        cid: 'logo',
        filename: 'logo.png',
        path: require.resolve('@livingdocs/server/plugins/email-templates/logo.png')
      }]
    }
  }
}
```

Note: We compare the previously used device (Platform, OS, Browser) with the one that is used to login. In case the check fails,
we then send out this email. The email contains information about the device that was used to login and a revokation link to
prevent access for the possibly abusing actor.

In case you want to adjust the email template, head over to the original file `@livingdocs/server/plugins/email-templates/new_login_device.html`
and copy it's content into your target file which you then can adapt to your needs.

#### Design Loader

The DesignLoader offers different options how designs are loaded. By default designs
are loaded from the local database.

Options include:
* Load a specific design from a url
* Preload a design into memory (useful for testing, or if you only change designs
  during a deployment)
* Load a design from another Livingdocs Server

All these options can work alongside each other.

If a design is requested the design loader will execute these steps in the given order:

1. check if the design is preloaded in `localDesigns`.
  -> If yes, return it, otherwise continue.
2. check if for this design name a custom url is configured in `hostedDesigns`.
  -> If yes append the version to the url and fetch from that url. Return the design or an error.
3. load from a remote design server if a `designRepository` is configured otherwise load from local server


```js
designLoader: {
  hostedDesigns: [{ // optional
    designName: 'timeline',

    // The final request for timeline design v1.0.0 will go to this url:
    // -> http://assets.livingdocs.io/timeline/1.0.0
    url: 'http://assets.livingdocs.io/timeline'
  }],
  localDesigns: [{ // optional
    path: '/designs/timeline/v1.1.0' // path to design
  }],
  designRepository: { // optional, defaults to the local design server
    remoteHost: 'http://api.livingdocs.io'
  },
  cacheSize: 100 // optional, defaults to '20'
}
```

#### Designs

Configure the Livingdocs Design Server. When a design is uploaded the assets
are moved to the [storage configured]({{< ref "/enterprise/reference-docs/server-configuration/storage" >}}) here.

```js
designs: {
  assets: {
    cache_expiration: 31536000,
    publicUrl: 'http://livingdocs-designs-dev.s3.amazonaws.com',
    // {{< a ref="/enterprise/reference-docs/server-configuration/storage" title="Storage Configuration" >}}
    storage: {
      strategy: 's3',
      prefix: 'images/' // optional, the storage key will be prefixed ({{< added-in release-2021-06 >}})
      config: {
        bucket: 'livingdocs-designs-dev',
        region: 'eu-west-1',
        accessKeyId: '*****',
        secretAccessKey: '*****'
      }
    }
  }
}
```

#### Documents

```js
documents: {
  selectedImageService: 'imgix',
  imageServices: {
    imgix: {} // imageService specific configuration
  },
  paginationFindConfig: {
    default: 50, // default is the batch size
    limit: 100 // limit is the max.
  }
}
```

See [image service configuration]({{< ref "/enterprise/guides/image-services.md" >}}) for more information.
The `paginationFindConfig` allows you to set how many documents you can see on the documents dashboard.
Defaults to max. 100 documents.


#### Document-lists

```js
 documentLists: {
    paginationConfig: {
      default: 300, // default is the batch size
      limit: 1000 // limit is the max.
    }
  }
```

The `paginationConfig` allows you to set how many documents you can see on the lists dashboard.
Defaults to max. 1000 documents.



#### Projects


```js
projects: {

  // Example static channel configurations
  channelConfigurations: [
    require('./path/to/static-channel-config')
  ]
}
```

The channel and contentType config is described in detail here: [channel config]({{< ref "/enterprise/reference-docs/project-config/project-config.md" >}})


#### Render Pipeline

Configure the worker configuration that is used to render Livingdoc Documents.

```js
render_pipeline: {
  worker_strategy: 'worker-nodes',
  max_concurrent_workers: Math.max(require('os').cpus().length - 1, 1),
  executions_per_worker: 300, // number of render jobs before workers are restarted
  execution_timeout: 1000 * 20 // timeout in milliseconds
}
```


#### Routing

```js
routing: {
  enabled: false,
  indexing: {
    enabled: true,
    debug_routes: false,
    // number of publication events to process in each batch
    batch_size: 50000, // (default: 50000)
    // routes cache update interval
    watch_interval: 1000 // (default: 1000)
  },
  redis: {
    master_check_interval: 5000 // (default: 5000) how often do we check if we're the master
  }
},
// Routes indexer
kv: {
  enabled: true,
  levelUpAdapter: 'redisdown', // (default: memdown)
  redis: {
    prefix: 'li:r',
    host: process.env.redis__host,
    port: process.env.redis__port || 6379,
    sentinels: process.env.redis_sentinels && JSON.parse(process.env.redis_sentinels),
    masterName: process.env.redis_masterName
  }
}
```

Note: only use routing in production with redis. Memdown is only for tests or local development.

#### Categories

```js
categories: {
  maxInheritanceDepth: 20,
  maxAutoRepublishes: 5, // used to re-publish pages after the path was changed
  hooksEnabled: true
}
```

Categories always have to be used in tandem with the Routing (see above).
Categories have a property `metadata`. Values can be inherited down to child categories up
to a maximum inheritance depth configured in `maxInheritanceDepth`.
When the `path` property of a category changes we automatically try to republish pages with
that category in order to update the routing cache. Since this can be expensive for a lot of documents
the `maxAutoRepublishes` setting limits the number of pages that are republished. We don't recommend going
above 10 here.
`hooksEnabled` should always be true. It makes sure that whenever a document is published the category on the
document is correctly updated.


#### Search

Configure the elasticsearch instance used by the search feature.

```js
search: {
  // Configures the elasticsearch search cluster
  host: 'http://localhost:9200',
  // Instead of `host`, you can also declare the
  // configuration using the elasticsearch.js client configuration object.
  // For more details about the configuration,
  // please consult the elasticsearch client documentation. https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/basic-config.html
  elasticsearchClient: {node: 'http://localhost:9200'}

  articleDocumentIndex: 'li-local-documents',
  numberOfReplicas: 1,
  apiVersion: '2.4', // optional, defaults to '2.4'
  log: null, // use 'trace' to debug the search feature (warning: very verbose)

  // The metadata mapping determines which metadata fields will be indexed
  // in elasticsearch. This can then be used to e.g. create search filters
  // based on metadata.
  metadataMapping: require.resolve('../some/path/metadata/es_metadata_mapping'),

  // Metadata fields that will be forwarded to the livigndocs-editor when
  // a document search is performed. This forwarding is needed to e.g show
  // the open tasks in the dashboard article list.
  documentsMetadataFields: [
    'tasks.*',
    'pushNotifications.*'
  ],
  // your optional custom elasticsearch search function
  queryBuilderPlugin: path.resolve('/path/to/your/own/search/function')
}
```

##### documentsMetadataFields

The `documentsMetadataFields` array whitelists metadata that can be used in the dashboard. By
default the article list query gets no metadata.

##### queryBuilderPlugin

`queryBuilderPlugin` is the path to your custom elasticsearch query.

If you know Elasticsearch, it's simple to define your own [search request body](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html) function.
The simplest possible query function looks like this:

```js
// reference this file with the 'queryBuilderPlugin' property in your server config

// @param {String} searchQuery 'hello world'
// @returns {Object} Elasticsearch body.query
module.exports = function (searchQuery) {
  return {
    match : { 'document.title' : searchQuery }
  }
}
```

For inspiration, you can also check out our [current default document search function]({{< ref "/enterprise/reference/query-builder-plugin-implementation.md" >}}).



#### Custom Elasticsearch Index

{{< added-in release-2020-12 >}}

Integrate custom Elasticsearch indexes. If you want to know more (with all possible options), look into the [guide]({{< ref "enterprise/guides/elasticsearch-indexing/custom-index.md" >}}).

```js
// conf/environments/local.js
elasticIndex: {
  // If this option is configured, every index name will be prefixed.
  // We advise to configure this in case you don't use credentials per environment (dev/stage/prod).
  // The indexes are created with the following pattern: `${indexNamePrefix}-${index.handle}-index`
  indexNamePrefix: 'your-company-local',

  // The concurrency defines how many requests the livingdocs-server is doing
  // in parallel on every single process.
  concurrency: 5,

  // The batchSize defines how many documents/entries should be
  // aggregated into a single elasticsearch /_bulk request.
  batchSize: 100,

  // Define the maximum cpu threshold of the elasticsearch cluster
  // that pauses the elasticsearch indexing once it's exceeded.
  maxCpu: 80,

  // To support multi cluster indexing, you can declare multiple clusters.
  // By default we index into the cluster defined in `search.host` or `search.elasticsearchClient`.
  // Consult {{< ref "enterprise/guides/elasticsearch-indexing/multi-cluster-indexing.md" >}} for more details.
  clusters: [
    {handle: 'default', node: 'https://elasticsearch:9200', useAsLivingdocsIndexTarget: true}
  ],

  // Custom indexes can be configured in case you want to
  // index documents with a custom structure and mapping.
  // Consult {{< ref "enterprise/guides/elasticsearch-indexing/custom-index.md" >}} for more details.
  customIndexes: [
    {
      // used as identifier e.g. for the background indexing via CLI
      handle: 'my-custom-publication',

      // Reference to a file that contains a factory function to transform and index documents.
      // Please
      indexInitializationFile: require.resolve('../../app/search/my-custom-publication/init.js'),

      // You can disable a specific index by setting that flag to false
      enabled: true,

      // Overrides the elasticIndex.concurrency config for a specific index
      concurrency: 5,

      // Overrides the elasticIndex.batchSize config for a specific index
      batchSize: 5,

      // Declare an alias, so we can reindex in the background and switch it once finished
      // By default the index handle is used as alias. Use `false` to disable the alias creation.
      alias: 'my-custom-publication',

      // An object passed to the index bulk operations
      context: {projectHandle: 'your-project-handle', isPublished: true},

      //  To support multi cluster indexing, you can configure a target cluster by handle.
      // Consult {{< ref "enterprise/guides/elasticsearch-indexing/multi-cluster-indexing.md" >}} for more details.
      clusters: ['default']
    }
  ]
},
```

#### Pusher

Disabled by Default. Enable to show who is viewing a document in real time
and allow for collaboration features in the editor.

```js
pusher: {
  enabled: false,
  app_id: '108378',
  key: 'dda3c0ca58ed2f649ea8',
  secret: '*****',
  cluster: 'eu'
}
```

#### Push Notifications
Configuration examples for the different notification services.

Firebase:
```js
pushNotifications: {
  enabled: true,
  firebase: {
    serverKey: '*****',

    // Params sent with each message.
    //
    // Google Firebase Docs:
    // https://firebase.google.com/docs/cloud-messaging/http-server-ref
    notificationParams: {
      // high|normal, 'high' will send message immediately
      // https://firebase.google.com/docs/cloud-messaging/concept-options
      priority: 'high',

      // ringtone played when the message is received
      sound: 'sms_alert_input.caf', // other possible value: 'sms_alert_popcorn.caf'

      // The value of the badge on the home screen app icon.
      // If not specified, the badge is not changed.
      // If set to 0, the badge is removed.
      badge: '1'
    }
  }
}
```

Airship:

{{< added-in release-2020-10 >}}
```js
pushNotifications: {
  enabled: true,
  airship: {
      apiUrl: 'https://go.urbanairship.com'
      apiAuthKeys: [{
        // must be base64 encoded '<App key>:<master secret key>'
        apiAuthKey: 'SECRET',

        // must match with the platform handle
        handle: 'li-website'
      }],
      deepLinks: [{
        // must match with the platform handle
        handle: 'li-website',

        // {articleId} will be replaced with the id from the document
        urlTemplate: 'az://artikel/{articleId}',

        // fallback Url in case the deep link doesn't work
        fallbackUrl: 'https://livingdocs.io'
      }],
    deviceTypes: ['android', 'ios']
  }
}
```

For push notifications to be enabled you also need to follow the steps in the [channel config setup]({{< ref "/enterprise/reference-docs/project-config/content-types.md#push-notifications">}})


#### Media Library (DAM)

The Media Library impacts editor in four ways:
- You can pick images from the library which have been previously uploaded
- You can see all the uploaded images and perform operations on them
- You can edit the Metadata of images in a dedicated view, which is accessible over an image
- You can enforce metadata on images before a user can upload them

{{< added-in release-2020-12 >}}
- Videos are supported

{{< added-in release-2021-03 >}}
- Customize indexing of metadata is supported

{{< added-in release-2021-06 >}}
- Files are supported (for example PDFs)
- We now support the following configs: `mediaLibrary.images` `mediaLibrary.videos` `mediaLibrary.files` is now supported.
_Before the release-2021-06 - those configs were stored on the top-level 'images', 'videos', 'files'_

Below you see a full mediaLibrary config (with default values).
```js
mediaLibrary: {
  // define behavior for images in Livingdocs (upload, upload processing, storage)
  images: {
    processingStrategy: 'libvips' // 'libvips' (default), 'imagemagick'
    publicUrl: 'https://livingdocs-images-dev.s3.amazonaws.com', // base url of the storage
    // {{< a ref="/enterprise/reference-docs/server-configuration/storage" title="Storage Configuration" >}}
    storage: {
      strategy: 's3',
      prefix: 'images/' // optional, the storage key will be prefixed ({{< added-in release-2021-06 >}})
      config: {
        bucket: 'livingdocs-images-development',
        region: 'eu-central-1',
        secretAccessKey: '****',
        accessKeyId: '****'
      }
    },
    // max upload values of Livingdocs API endpoints
    uploadRestrictions: {
      maxFileSize: 15 * 1000 * 1000, // 15MB, default 15MB
      maxResolution: 24 * 1000 * 1000 // 24MP,  default 24 mega-pixels
    },
    processing: {
      maxFileSize: 15 * 1000 * 1000, // 15MB, default 15MB
      maxConcurrentProcesses: 5, // default 5
      lossy: {
        // max pixel width or height
        maxDimension: 6000, // default 6000
        // compression
        quality: 80 // default 80
      }
      lossless: {
        // max pixel width or height
        maxDimension: 6000 // default 6000
      },
      // optional - Convert your image during upload into another format
      convert: [{
        sourceFormat: 'pdf',
        targetFormat: 'png',
        // density is only available with processingStrategy 'imagemagick'
        // If the sourceFormat is a vector based format you can define the density (dpi) which should be used to create the pixel based format.
        density: 300
      }]
    }
  },

  // define behavior for videos in Livingdocs (upload, storage)
  videos: {
    // must be public accessible
    publicUrl: 'https://livingdocs-videos-development.s3.amazonaws.com',  // base url of the storage
    // {{< a ref="/enterprise/reference-docs/server-configuration/storage" title="Storage Configuration" >}}
    storage: {
      strategy: 's3',
      prefix: 'videos/' // optional, the storage key will be prefixed ({{< added-in release-2021-06 >}})
      config: {
        // the videos must be public-read to be shown in the editor
        params: {ACL: 'public-read'},
        bucket: 'livingdocs-videos-development',
        region: 'eu-central-1',
        secretAccessKey: '****',
        accessKeyId: '****'
      }
    },
    // max upload values of Livingdocs API endpoints
    uploadRestrictions: {
      maxFileSize: 100 * 1000 * 1000 // 100MB, default 100MB
    }
  },

  // define behavior for files in Livingdocs (upload, storage)
  files: {
    publicUrl: 'https://livingdocs-files-dev.s3.amazonaws.com',  // base url of the storage
    // {{< a ref="/enterprise/reference-docs/server-configuration/storage" title="Storage Configuration" >}}
    storage: {
      strategy: 's3',
      prefix: 'files/' // optional, the storage key will be prefixed ({{< added-in release-2021-06 >}})
      config: {
        bucket: 'livingdocs-files-dev',
        region: 'eu-central-1',
        secretAccessKey: '****',
        accessKeyId: '****'
      }
    },
    // max upload values of Livingdocs API endpoints
    uploadRestrictions: {
      allowedMimeTypes: ['application/pdf'],
      maxFileSize: 100 * 1000 * 1000 // 100MB, default 100MB
    }
  }

  // tells the media library dashboard how many images to show on one page
  paginationSize: 25,
}
```

##### Filename Strategy

When uploading an asset into the media library, we choose one strategy to define the filename/path. See the pattern below:
- pattern: `<mediaLibrary.images.storage.prefix>/YYYY/MM/DD/uuid.file-extension`
- example: `/images/2021/05/04/7f6352fb-8bff-4560-98e6-304a0d0885b9.jpeg`

Even when the storage (e.g. Amazon S3) is public, the name of the path is difficult to guess.


##### Alternative Image Proxy Configuration (mediaLibrary.images.proxy)

Alternatively you can forward image upload to another service.
For more info about this see [Image Services]({{< ref "/enterprise/guides/image-services.md" >}}).

```js
mediaLibrary: {
  images: {
    proxy: {
      url: 'https://foobar.com/images/upload'
    },
    uploadRestrictions: {
      maxFileSize: 15 * 1000 * 1000 // 15MB, defaults to 15MB.
    }
  }
}
```


##### Setting up the Media Library Elastic Search Mapping

For now the very first step when setting up the server, you need to create a new index 'media-library' in Elastic Search.

The name of the Media index has to be configured:


```js
{
 search: {
    // Analogous to the `articleDocumentIndex` configuration
    mediaLibraryIndex: 'li-local-media-library'
  }
}
```

Then the media-library index must be created.

```js
livingdocs-server elasticsearch-index --handle li-media -y // ({{< added-in release-2021-03 >}})
```

To index the metadata the plugin must support the mediaIndex and on the metadata in the mediaType the index must be enabled.

###### Enable mediaIndex on metadata plugin
To enable the indexing for the Media Library in a plugin you have to add the `mediaIndex` config.

```js
  mediaIndex: {
    enabled: true,
    index_behavior: [
      {
        // the type for the index
        type: 'text',
        // when there are more than behavior with the same type, a key is needed
        key: 'labels',
        // the return value of this function will be indexed
        // it is also possible to return an array
        // default is just return the value
        getValue: (val) => { if (val.labels) return val.labels.map(obj => obj.label) }
      },
      {
        // this will return the value of the metadata property and will index it as keyword
        type: 'keyword'
      },
    ]
  },
```

We support these types for indexing
- `text` will be available for text search
- `keyword` to filter by keyword
- `boolean` to filter by boolean
- `date` to filter by date range
- `integer` to index integer
- `float` to index float

##### Document Metadata Mapping in Elasticsearch

When you want to index your metadata image fields in elasticsearch (e.g. for dashboard filters), you have to define the elasticsearch metadata mapping, e.g.

```js
// the elasticsearch metadata mapping file is defined in the environment config at 'search.metadata_mapping'
    "teaserImage": {
      "properties": {
        "crops": {
          "properties": {
            "height": {
              "type": "long"
            },
            "name": {
              "type": "keyword"
            },
            "url": {
              "type": "keyword"
            },
            "width": {
              "type": "double"
            },
            "x": {
              "type": "double"
            },
            "y": {
              "type": "long"
            },
            "ratio": {
              "type": "double"
            }
          }
        },
        "height": {
          "type": "long"
        },
        "imageService": {
          "type": "keyword"
        },
        "mimeType": {
          "type": "keyword"
        },
        "originalUrl": {
          "type": "keyword"
        },
        "url": {
          "type": "keyword"
        },
        "mediaId": {
          "type": "keyword"
        },
        "width": {
          "type": "long"
        }
      }
    }
```

##### Google Vision API

Livingdocs supports auto-tagging of images through the Google Vision API integration. In order to use this feature you need to open an account on GCP. Careful, use of this feature will incur costs with GCP. Refer to Google's pricing for more details. Livingdocs uses the label annotation and web detection features (can be configured).
The node vision API package has some good documentation on how to create an account: https://github.com/googleapis/nodejs-vision

If you are using configurable channels you can use the UI in "Project Setup - Integrations" to setup the Google Vision API integration.
If you want to do it manually, add the following configuration to the project's channel-config where you want to add the plugin:

```js
{
  handle: 'magazine',
  integrations: {
    googleVision: {
      enabled: true,
      credentials: {
        type: 'service_account',
        project_id: 'livingdocs-devel-1540279986584',
        private_key_id: 'd715e0a07dd75660cc63c55571d07f92fe20c35e',
        // eslint-disable-next-line
        private_key: `-----BEGIN PRIVATE KEY-----foo bar\n-----END PRIVATE KEY-----\n`,
        client_email: 'vision-api-dev@livingdocs-devel-1540279986584.iam.gserviceaccount.com',
        client_id: '116066780307201591107',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/vision-api-dev%40livingdocs-devel-1540279986584.iam.gserviceaccount.com'
      },
      confidenceCliff: 0.7,
      language: {
        label: 'German',
        locale: 'de'
      },
      shouldDetectWeb: true
    }
  }
}
```

The `confidenceCliff` lets you specify a value (0..1) below which to drop results from the Vision API, e.g. only to take results with a confidence of 70% or higher. In fact we found 70% (0.7) to be a good default.
You can turn on detection of web entities separately. Refer to the Google Vision API documentation for details about both. Livingdocs shows labels in the UI under "Topics" and web entities under "Entities".
The credentials object is just the google service account json. We advise you to download the json from GCP and then entering the values here.
The language enables a separate call to Google Translate API to translate the labels received from an image analysis. You GCP Account needs to have Google Translate API activated for this to work (will also infer costs).


#####  Enforcing image metadata (Beta)

{{< added-in release-2020-04 >}}

Below you see an example of enforcing image metadata. Before _any_ image can be uploaded, a modal will open promting the user to fill the metadata for the image before it goes into the media library.

This will validate the required metadata properties for an image in the editor and the server, so you can ensure no image will be uploaded without proper metadata set on it.

```js
assetManagement: {
  enabled: true,
},
```

#### Custom previews

{{< added-in release-2020-05 >}}

Custom previews are a way to display a custom preview of a document. This could be a custom mobile preview, a preview of a finished article living on the frontend or anything that fits the specific customer need. You will need to enable the feature and register a custom render function that will contain the `documentId`.

```js
preview: {
  enabled: true
}
```

```js
liServer.registerInitializedHook(async () => {
  const previewApi = liServer.features.api('li-preview')
  const renderFunction = async ({documentId}) => {
    return {html: '<div>HTML FROM RENDER FUNCTION </div>'}
  }
  previewApi.registerRenderFunction(renderFunction)
}
```

{{< img src="images/custom_preview.png" alt="Teaser Preview" >}}

## Integrations

{{< added-in release-2020-04 >}}

There is a general `integrations` configuration for small integrations that can be configured in the `channelConfig` through editor UI. They need to be enabled in the server config with the following config.

```js
{
  integrations: {
    comyan: {
      allowed: true
    },
    googleVision: {
      allowed: true
    },
    imatrics: {
      allowed: true
    },
    woodwingAssets: {
      allowed: true
    }
  }
}
```

## Webhooks

{{< added-in release-2020-05 >}}

To disable the webhooks feature, add this:
```js
webhooks: {
  enabled: false
}
```

#### HuGO

The HuGO integration has it's own top level config:

```js
hugo: {
  resource: {
    enabled: true,
    host: 'hugo-api.customer.com',
    customer: 'yourCustomerKey'
  },
  print: {
    enabled: true,
    host: 'hugo-api-pss.customer.com',
    xmlRoot: 'articleUpload'  // XML root element for print endpoints
  }
}
```
