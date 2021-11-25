---
type: release-notes
title: July 2017 Release
description: Release notes for release-2018-07
excludeFromSearch: true
---

{{< release-header 
  title="July 2017 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2017-07"
>}}

# Release Notes release-17-07

## Involved Repositories

#### `livingdocs-editor`

- link to the release: https://github.com/livingdocsIO/livingdocs-editor/tree/1.0.0-release-17-07
- livingdocs-framework version: `^7.8.0`

#### `livingdocs-server`

- link to the release: https://github.com/livingdocsIO/livingdocs-server/tree/1.0.0-release-17-07
- livingdocs-framework version: `^7.8.0`

#### `livingdocs-framework`

version: v7.8.0

## Summary

Component | Type | Description | PRs | Issues
--- | --- | --- | --- | ---
Editor | Bugfix | Server-side metadata changes will be shown in the publish screen | [#1588](https://github.com/livingdocsIO/livingdocs-editor/pull/1588), [#1585](https://github.com/livingdocsIO/livingdocs-editor/pull/1585) | [#1325](https://github.com/livingdocsIO/livingdocs-planning/issues/1325), [#1261](https://github.com/livingdocsIO/livingdocs-planning/issues/1261)
Editor | Bugfix | Teaser image cropping is now applied in srcset definitions | [#1606](https://github.com/livingdocsIO/livingdocs-editor/pull/1606) | [#1258](https://github.com/livingdocsIO/livingdocs-planning/issues/1258)
Editor | Improvement | Editor’s default font-size was changed to 14px | [#1587](https://github.com/livingdocsIO/livingdocs-editor/pull/1587) | [#1029](https://github.com/livingdocsIO/livingdocs-planning/issues/1029)
Editor | BREAKING CHANGE | This pr removes `grunt` and therefore also `grunt deploy`. [Read more](#remove-grunt-from-editor) | [#1608](https://github.com/livingdocsIO/livingdocs-editor/pull/1608) | -
Editor | Bugfix | Link in List Tool should not be shown while dragging | [#1615](https://github.com/livingdocsIO/livingdocs-editor/pull/1615) | [#1224](https://github.com/livingdocsIO/livingdocs-planning/issues/1224)
Editor, Server | Feature | Adapt Print API for WoodWing | [#1611](https://github.com/livingdocsIO/livingdocs-editor/pull/1611), [#1567](https://github.com/livingdocsIO/livingdocs-server/pull/1567) | -
Server | Improvement | Redis retries on error | [#1534](https://github.com/livingdocsIO/livingdocs-server/pull/1534), [#1530](https://github.com/livingdocsIO/livingdocs-server/pull/1530), [#1552](https://github.com/livingdocsIO/livingdocs-server/pull/1552) | [#1231](https://github.com/livingdocsIO/livingdocs-planning/issues/1231)
Server | BREAKING CHANGE | Configurable asset and image storage with asset delivery. [Read more](#configurable-asset-and-image-storage) | [#1546](https://github.com/livingdocsIO/livingdocs-server/pull/1546) | [#1222](https://github.com/livingdocsIO/livingdocs-planning/issues/1222)
Server | BREAKING CHANGE | Add /designs/:name/:version/:file endpoint. [Read more](#add-designsnameversionfile-endpoint) | [1569](https://github.com/livingdocsIO/livingdocs-server/pull/1569) | -
Server | BREAKING CHANGE | Elasticsearch upgrade from 1.7 to 2.4 [Read more](#elasticsearch-upgrade-from-17-to-24) | [1547](https://github.com/livingdocsIO/livingdocs-server/pull/1547) | [#1281](https://github.com/livingdocsIO/livingdocs-planning/issues/1281)
Framework | Bugfix | Image service configuration is correctly merged | [#238](https://github.com/livingdocsIO/livingdocs-framework/pull/238) | [#1229](https://github.com/livingdocsIO/livingdocs-planning/issues/1229), [#1216](https://github.com/livingdocsIO/livingdocs-planning/issues/1216)


## In Detail

## Remove Grunt from Editor

- This pr removes `grunt` and therefore also `grunt deploy`.
- This change has an impact on your setup in case you're using `grunt deploy` or any other `grunt` script.
- We've completely removed the script without replacement.
- In case you're using `grunt deploy` to deploy to s3, please use the s3 cli directly.

## Configurable asset and image storage

### Features
  - We have a new [storage configuration](#user-content-storage-configuration) for files, images & designs. ([7f77fc8e](https://github.com/livingdocsIO/livingdocs-server/commit/7f77fc8e))
  - Design Assets are served from the server itself, so you can just put a cdn in front of it and use one of the configured storage backends. To fetch a design asset you can use the url pattern `/designs/:name/:version/assets/:filepath`.
  - Design assets have a default expiration header of 1 year. That value is customizable with the config property `designs.assets.cacheExpiration`.

### Deprecations
  - `images.public` moved to `images.publicUrl`
  - `images.bucket` and `images.bucketPath` are deprecated. Use `images.storage` instead.
  - `files.public` moved to `files.publicUrl`
  - `files.aws` is deprecated. Use `files.storage` instead
  - `designs.public` moved to `designs.assets.publicUrl`
  - `designs.bucket` and `designs.bucketPath` moved to `designs.assets.storage`

### Breaking Changes
  - Removed `GET /designs/:name/:version/assets` endpoint which listed assets
  - Removed the `lib/s3` file and therefore it's a breaking change for some of our customers which required this internal file. If you're not using `require('@livingdocs/server/lib/s3')`, this doesn't affect you. Please directly use [`aws-sdk`](https://npm.im/aws-sdk) or some [`abstract-blob-store`](https://npm.im/abstract-blob-store) implementation.
  - Removed `DELETE /designs/:name/:version` because the current document server can't handle deletions of designs. In the near future we'll focus on the design workflow and introduce a new api with most likely a new api. ([5a56c011](https://github.com/livingdocsIO/livingdocs-server/commit/5a56c011))
  - The storage config change is backwards-compatible as long as the new `storage` property isn't present. So as soon as you update the `all.js` config file, you'll also need to update your secrets. Please have a look at the new storage config below.

### Storage configuration
  This PR adds a more explicit configuration for the image, file & design storage in a uniform way.
  It also deprecates the `aws` property in the config object.

  The new configuration looks like that for a local file system storage:
  ```js
  images: {
    public_url: 'https://some-host-that-serves-imag.es'
    storage: {
      strategy: 'fs',
      config: {
        path: require.resolve('./data/dir')
      }
    }
  }
  ```

  And here is an example for an s3 configuration:
  ```js
  images: {
    public_url: 'https://some-host-that-serves-imag.es'
    storage: {
      strategy: 's3',
      config: {
        // You can use any option of the AWS.S3 client in here
        // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor_details
        bucket: 'your-bucket',
        proxy: 'http://localhost:3128',
        region: 'eu-west-1',
        accessKeyId: 'your-key',
        secretAccessKey: 'your-secret'
      }
    }
  }
  ```

  This pr also moves the config `images.public` and `files.public` to `images.public_url` and `files.public_url`.
  e.g.
  ```js
  images: {
    public_url: 'http://some-public-image-url'
  },
  // instead of
  images: {
    public: 'http://some-public-image-url'
  }
  ```

## Add /designs/:name/:version/:file endpoint

This moves the design assets path introduced in the last release to `/designs/:name/:version/:file`. Most likely it won't be needed for you to update anything since you don't use it at the moment. The existing s3 file upload and its url is still working.

With this pr, you can upload an assets using `post /designs/:name/:version/assets` using the file path `/foo`. That asset will then be available using `/designs/:name/:version/foo`. This also means that there can be no asset named `assets` as we use that path to upload files. We don't think that this blacklisted `assets` key will cause an issue in any setup as most likely you only use a directory named like that, which will work.

Now it's possible to serve assets using the same server you're using to manage them. There's no need to use a separate server which serves the design assets. We would advice to use a CDN in front of it to improve the performance.

Instead of using cloudfront or the s3 design assets prefix in
```coffee
designs:
  assets:
    publicUrl: 'https://livingdocs-designs.s3.amazonaws.com'
```

You can use this config to serve assets.
Usually you would point your cdn to this server.
```coffee
designs:
  assets:
    cache_expiration: 31536000
    publicUrl: 'https://localhost:9090/designs'
```

e.g. in our setup we can use
```coffee
designs:
  assets:
    cache_expiration: 31536000
    publicUrl: 'https://cdn.livingdocs.io/designs'
```

## Elasticsearch upgrade from 1.7 to 2.4

Elasticsearch upgraded from 1.7 to 2.4. If you have custom indices or mappings, you will have to update them according to Elasticsearch changelog. Some queries also need to be adapted, for instance search queries sorted by a nested field.
