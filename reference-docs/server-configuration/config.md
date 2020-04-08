# Livingdocs Server Configuration

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
  auto_save_interval: 10 // This defines how often the editor auto saves in seconds
}
```


#### Postgres

```js
db: {
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  database: 'li_local',
  pool_min: 1,
  pool_max: 5,
  ssl: false
}
```

#### Amazon S3

```js
aws: {
  force_local_storage: false // defaults to `false`
  secret_key: 'yourSecretKey'
  access_key: 'yourAccessKey'
}
```

#### Pusher

Disabled by Default. Enable to show who is viewing a document in real time
and allow for basic collaboration features in the editor.

```js
pusher: {
  enabled: false,
  app_id: '108378',
  key: 'dda3c0ca58ed2f649ea8',
  secret: '*****'  
}
```

#### Logging

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

[More info about logging](./logging.md)


## Stack
A stack is a list of features that a server loads when it starts: [How to configure a stack?](./stack.md)
```js
stack: ['all']
```


## Features


#### Authentication

Configure the authentication feature.

*Important* Replace `access_token_secret` and `connections.local.config.secret`
with a randomly generated string for every environment you use.
Changing the `access_token_secret` will render all access tokens in the
database useless.

##### `connections.local`

Represents the default email/password authentication strategy.

- `default_login_domain` Allows to omit the email suffix
  (e.g '@gmail.com') during login
- `denied_passwords` Array of regexes that are used in the strong passwords
  feature. If the regex matches the password cannot be used.


```js
auth: {
  realm: 'livingdocs',
  access_token_secret: 'GpA^xLH5$qLzWcqEvZmE3imYwVf68kXa1JR5rP*NFRUyRPQRtbVwWk3bHusD',
  access_token_ttl: 12 * 3600 * 1000, // 12 h
  authorization_code_ttl: 3600 * 1000 / 4, // 15min
  password_reset_ttl: 6 * 3600 * 1000, // 6h
  account_confirmation_ttl: 72 * 3600 * 1000, // 3d
  connections: {
    local: {
      label: 'Password',
      enabled: true,
      loginEnabled: true,
      registrationEnabled: true,
      strategy: 'li-authentication-local',
      config: {
        default_login_domain: 'upfront.io',
        secret: '8wP0oTmQFX4^f@FCW*MiQ%qkDu*m6B!NBElVg%hVmMHNdr2F@F9J4yf$ykN5',
        bcrypt_iterations: 10,
        password_reset_url: '/reset#code={{code}}',
        denied_passwords: [
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
      htmlTemplatePath: require.resolve('../../plugins/email-templates/user_created.html'),
      attachments: {
        cid: 'logo',
        filename: 'logo.png',
        path: require.resolve('../../plugins/email-templates/logo.png')
      }
    },
    passwordReset: {
      transport: 'awsEmailSender',
      subject: 'Password reset',
      htmlTemplatePath: require.resolve('../../plugins/email-templates/password_reset.html'),

      // # or
      // textTemplate: 'Reset password for <%= user.name %>'
      // htmlTemplate: 'Reset password for <%= user.name %>'

      attachments: {
        cid: 'logo',
        filename: 'logo.png',
        path: require.resolve('../../plugins/email-templates/logo.png')
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
are moved to the storage configured here.

```js
designs: {
  assets: {
    cache_expiration: 31536000,
    publicUrl: 'http://livingdocs-designs-dev.s3.amazonaws.com',
    storage: {
      strategy: 's3',
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
[config options](./config-storage-options.md) for `storage`.


#### Images

- Standard Option

Define the Amazon S3 image upload target plus processing options that are
applied before the image is uploaded. (The `bucket_region` must support
Amazon Signature Version 2)

```js
images: {
  public: 'http://livingdocs-images-dev.s3.amazonaws.com',
  bucket: 'livingdocs-images-dev',
  bucket_region: 'us-west-1',
  upload: {
    max_file_size: 100 * 1000 * 1000, // 100MB, defaults to 5MB.
    max_resolution: 15 * 1000 * 1000 // 15 mega-pixels
  },
  processing: {
    // Default values that approximate 4MB
    max_file_size: 4 * 1000 * 1000,
    max_concurrent_processes: 1,
    lossy: {
      max_dimension: 4000,
      quality: 80
    }
    lossless: {
      max_dimension: 1500
    }
  }
}
```

- Proxy Option

Alternatively you can forward image upload to another service.
For more info about this see [Image Services](../../concepts/images/image-services.md).

```js
images: {
  proxy: {
    url: 'https://foobar.com/images/upload'
  },
  upload_restrictions: {
    max_file_size: 100*1000*1000 // 100MB, defaults to 5MB.
  }
}
```

- Convert Option

It is possible to define a convert from one image format to another. If the sourceFormat is a vector based format you can define the density (dpi) which should be used to create the pixel based format.

```
processing: {
  convert: [{sourceFormat: 'pdf', targetFormat: 'png', density: 300}]
}
```

#### Files

```js
files: {
  public: 'http://livingdocs-images-dev.s3.amazonaws.com',
  bucket: 'livingdocs-images-dev',
  bucket_region: 'us-west-1',
  uploadRestrictions: {
    allowedMimeTypes: ['application/pdf'],
    maxFileSize: 100 * 1000 * 1000  // 100MB
  }
}
```

The files feature is optional and can be disabled.

```js
files: {
  enabled: false
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

See [image service configuration](../../concepts/images/image-services.md) for more information.
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

The channel and contentType config is described in detail here: [channel config](./channel-config.md)


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
}
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

```
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
  host: 'http://localhost:9200',
  article_document_index: 'li_local_documents',
  number_of_replicas: 1,
  apiVersion: '2.4', // optional, defaults to '2.4'
  log: null, // use 'trace' to debug the search feature (warning: very verbose)

  // The metadata mapping determines which metadata fields will be indexed
  // in elasticsearch. This can then be used to e.g. create search filters
  // based on metadata.
  metadata_mapping: require.resolve('../some/path/metadata/es_metadata_mapping'),

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

For inspiration, you can also check out our [current default document search function](../search/improved-document-search-example.md).



#### Push Notifications

```js
push_notifications: {
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

For push notifications to be enabled you also need to follow the steps in the [channel config setup](./channel-config.md#push-notifications)


#### Asset management

The asset management impacts editor in four ways:
- You can pick images from the library which have been previously uploaded
- You can see all the uploaded images and perform operations on them
- You can edit the Metadata of images in a dedicated view, which is accessible over an image
- You can enforce metadata on images before a user can upload them

##### Prerequisite

This is not specific to the DAM and is the same for Image uploads. However, it needs to be ensured that valid S3 credentials are configured. This information is usually not checked in and can be configured in `conf/secrets/local.js`.

```js
images: {
  publicUrl: 'http://some-bucketname.s3.amazonaws.com',
  storage: {
    strategy: 's3',
    config: {
      bucket: 'some-bucketname',
      region: 'some-s3-region',
      secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
      accessKeyId: 'YOUR_ACCESS_KEY'
    }
  }
}
```
[config options](./config-storage-options.md) for `storage`.


##### Setting up the Elastic Search Mapping

For now the very first step when setting up the server, you need to create a new index 'images' in Elastic Search. The mapping is defined in the file `app/features/indexing/mapping/image_v6.json`.

The name of the Image index has to be configured:


```js
{
 search: {
    // Analogous to the `article_document_index` configuration
    image_document_index: 'livingdocs-local-images',
  }
}
```

Then the Image index must be created.

``` javascript
npx livingdocs-server es-media-reindex -y
```

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

##### Feature Flag and internal image service
The endpoint /upload can function with Asset Management functionality or without. The change can be configured in the environment with:

```js
  assetManagement: {
    enabled: true,
    paginationSize: 25,
  }
```

The feature flag is ignored by the other Asset Management endpoints (`GET /images?fullText` search and `GET /images/:id` Image information endpoint), because they are new endpoints and would only be called explicitly by an Editor which is configured for using the Asset Management.

The `paginationSize` tells the asset management how many images to show on one page.

Make sure that you disable the Asset Management in the Editor as well and make sure that you configure the image services properly too.

##### Google Vision API

Livingdocs supports auto-tagging of images using the Google Vision API. In order to use this feature you need to open an account on GCP. Careful, use of this feature will incur costs with GCP. Refer to Google's pricing for more details. Livingdocs uses the label annotation and web detection features (can be configured separately).
The node vision API package has some good documentation on how to create an account: https://github.com/googleapis/nodejs-vision

Once you have your account, you can configure Livingdocs with the Vision API as follows:
```js
assetManagement: {
    autoTagging: {
      googleVision: {
        isEnabled: true,
        detectLabels: true,
        detectWeb: true,
        confidenceCliff: 0.7,
        credentials: {
          type: '***',
          project_id: '***',
          private_key_id: '***',
          private_key: '***',
          client_email: '***',
          client_id: '***',
          auth_uri: '***',
          token_uri: '***',
          auth_provider_x509_cert_url: '***',
          client_x509_cert_url: '***'
        }
      }
    }
  }
```

The `confidenceCliff` lets you specify a value (0..1) below which to drop results from the Vision API, e.g. only to take results with a confidence of 70% or higher. In fact we found 70% (0.7) to be a good default.
You can turn on detection of labels and web entities separately. Refer to the Google Vision API documentation for details about both. Livingdocs shows labels in the UI under "Topics" and web entities under "Entities".
The credentials object is just the google service account json. We advise you to download the json from GCP and then entering the values here.


#####  Enforcing image metadata (Beta)

Added in: `release-2020-04`

Below you see an example of enforcing image metadata. Before _any_ image can be uploaded, a modal will open promting the user to fill the metadata for the image before it goes into the media library.

This will validate the required metadata properties for an image in the editor and the server, so you can ensure no image will be uploaded without proper metadata set on it.

```js
assetManagement: {
  enabled: true,
  types: [{
    type: 'image',
    requiredMetadataProperties: ['title', 'caption']
  }]
},
```

## Integrations

Added in: `release-2020-04`

There is a general `integrations` feature for small integrations that can be configured in the `channelConfig` through editor UI. They need to be allowed in the server config with the following config.

#### Comyan

To allow the `comyan` integration, add this to your config:

```js
integrations: {
  comyan: {
    allowed: true
  }
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
