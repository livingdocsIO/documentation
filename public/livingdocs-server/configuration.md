# Livingdocs Server Configuration

## Services

#### Server

```coffee
server:
  port: 9090
  max_json_request_size: '100kb'
```


#### Editor

Configure the Editor Host. This is used for password reset & login urls.

```coffee
editor:
  public_host: 'http://localhost:9000'
```


#### Postgres

```coffee
db:
  host: 'localhost'
  port: '5432'
  user: 'postgres'
  database: 'li_local'
  pool_min: 1
  pool_max: 5
  ssl: false
```

#### Amazon S3

```coffee
aws:
  force_local_storage: false # defaults to `false`
  secret_key: 'yourSecretKey'
  access_key: 'yourAccessKey'
```

#### Pusher

Disabled by Default. Enable to show how is viewing documetn and allow for basic
collaboration features in the editor.

```coffee
pusher:
  enabled: false
  app_id: '108378'
  key: 'dda3c0ca58ed2f649ea8'
  secret: '*****'
```


#### Logging

Possible log levels: `['debug', ''success', 'warn', 'error']`

```coffee
loglevel: 'success'
```


## Features


#### Authentication

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


```coffee
auth:
  realm: 'livingdocs'
  access_token_secret: 'GpA^xLH5$qLzWcqEvZmE3imYwVf68kXa1JR5rP*NFRUyRPQRtbVwWk3bHusD'
  access_token_ttl: 12 * 3600 * 1000 # 12 h
  authorization_code_ttl: 3600 * 1000 / 4 # 15min
  password_reset_ttl: 6 * 3600 * 1000 # 6h
  account_confirmation_ttl: 72 * 3600 * 1000 # 3d
  connections:
    local:
      label: 'Password'
      enabled: true
      strategy: 'li-authentication-local'
      config:
        default_login_domain: 'upfront.io'
        secret: '8wP0oTmQFX4^f@FCW*MiQ%qkDu*m6B!NBElVg%hVmMHNdr2F@F9J4yf$ykN5'
        bcrypt_iterations: 10
        password_reset_url: '/reset#code={{code}}'
        denied_passwords: [
          'upfront',
          'livingd[o0][cg]s',
          'lukas',
          'nzz',
          '@[a-z]{2,6}\\.[chomteinf]{2,4}(.au)?$' # Email blacklisting
        ]
```

#### User Management Emails

```coffee
emails:
  transports:
    default:
      from: 'Livingdocs <noreply@livingdocs.io>'
      module: 'nodemailer-ses-transport'
      config:
        accessKeyId: 'yourAccessKeyId'
        secretAccessKey: 'yourSecretAccessKey'
        region: 'eu-west-1'

  templates:
    userCreated:
      transport: 'default'
      subject: 'Welcome at Livingdocs'
      htmlTemplatePath: require.resolve('../../plugins/email-templates/user_created.html')

      attachments: [
        cid: 'logo'
        filename: 'logo.png'
        path: require.resolve('../../plugins/email-templates/logo.png')
      ]

    passwordReset:
      transport: 'default'
      subject: 'Password reset'
      htmlTemplatePath: require.resolve('../../plugins/email-templates/password_reset.html')

      # # or
      # textTemplate: 'Reset password for <%= user.name %>'
      # htmlTemplate: 'Reset password for <%= user.name %>'

      attachments: [
        cid: 'logo'
        filename: 'logo.png'
        path: require.resolve('../../plugins/email-templates/logo.png')
        ]
```


#### Designs

Configure the Livingdocs Design Server.

- `design_repository` is used to define from where designs are loaded.
- `public`, `bucket` and `bucket_region` are only used if designs are
  uploaded through this server. (The `bucket_region` must support
  Amazon Signature Version 2)

```coffee
designs:
  design_repository: 'https://api.livingdocs.io'
  public: 'http://livingdocs-designs-dev.s3.amazonaws.com'
  bucket: 'livingdocs-designs-dev'
  bucket_region: 'eu-west-1'
```


#### Images

##### Standard Option

Define the Amazon S3 image upload target plus processing options that are
applied before the image is uploaded. (The `bucket_region` must support
Amazon Signature Version 2)

```coffee
images:
  public: 'http://livingdocs-images-dev.s3.amazonaws.com'
  bucket: 'livingdocs-images-dev'
  bucket_region: 'us-west-1'
  upload:
    max_file_size: 100*1000*1000 # 100MB, defaults to 5MB.
    max_resolution: 15*1000*1000 # 15 mega-pixels
  processing:
    # Default values that approximate 4MB
    max_file_size: 4 * 1000 * 1000
    max_concurrent_processes: 1
    lossy:
      max_dimension: 4000
      quality: 80
    lossless:
      max_dimension: 1500
```

##### Proxy Option

Alternatively you can forward image upload to another service.

```coffee
images:
  proxy:
    url: 'https://foobar.com/images/upload'
  upload_restrictions:
    max_file_size: 100*1000*1000 # 100MB, defaults to 5MB.
```

#### Documents

To be defined.


#### Render Pipeline

Configure the worker configuration that is used to render Livingdoc Documents.

```coffee
render_pipeline:
  worker_strategy: 'worker-nodes'
  max_concurrent_workers: Math.max(require('os').cpus().length - 1, 1)
  executions_per_worker: 300 # number of render jobs before workers are restarted
  execution_timeout: 1000 * 20 # timeout in milliseconds
```


#### Routing

```coffee
routing:
  enabled: false
  indexing: # (optional)
    # number of publication events to process in each batch
    batch_size: 50000 # (default: 50000)
    # routes cache update interval
    watch_interval: 1000 # (default: 1000)
  db: 'leveldown' # (default: leveldown) to use leveldb, npm i leveldown and set 'leveldown' here
  # db_options: # (optional) cf. https://github.com/Level/levelup#options

```


#### Search

Configure the elasticsearc instance used by the search feature.

```coffee
search:
  host: 'http://localhost:9200'
  article_document_index: 'li_local_documents'
  number_of_replicas: 1
  log: null # use 'trace' to debug the search feature (warning: very verbose)
```


## Integrations

#### HuGO

```coffee
hugo:
  resource:
    enabled: true
    host: 'hugo-api.customer.com'
    customer: 'yourCustomerKey'
  print:
    enabled: true
    host: 'hugo-api-pss.customer.com'
    xmlRoot: 'articleUpload'  # XML root element for print endpoints
```
