---
title: Image Services
description: In-depth guide for a dynamic responsive images setup
weight: 2
---

## Overview

Livingdocs has built-in support for image optimization ensuring images are responsive and served efficiently across different devices.
When an image is uploaded to Livingdocs, it is stored in its original form. Then, as needed, Livingdocs interfaces with
an image service (such as [imgix](https://imgix.com)) to dynamically crop or resize images according to specified parameters.

There are 3 parts involved in image management:

1. The **storage** of the images
   Uploaded images are stored in a configurable key value store (e.g. Amazon S3).
2. The **delivery** through a SaaS image service (imgix or a custom one).
3. The **render strategies** to create HTML markup (e.g. an `img` tag with a `srcset` attribute).

### Storage

The storage of choice for Livingdocs is Amazon S3, a bucket can be set up in the server configuration like this:

```js
mediaLibrary: {
  images: {
    // base url of the storage
    publicUrl: 'https://livingdocs-images-dev.s3.amazonaws.com',
    // {{< a ref="/customising/server-configuration/storage" title="Storage Configuration" >}}
    storage: {
      strategy: 's3',
      prefix: 'images/' // optional prefix for the storage key
      config: {
        bucket: 'livingdocs-images-development',
        region: 'eu-central-1',
        secretAccessKey: '****',
        accessKeyId: '****'
      }
    }
  }
}
```

You can also configure your own image storage:

```js
mediaLibrary: {
  images: {
    proxy: {
      url: 'http://your-image-storage.com'
    }
  }
}
```

This will route image upload requests from Livingdocs to your chosen URL instead of S3.
For details please see the reference documentation for the [server configuration]({{< ref "/customising/server-configuration#media-library-dam" >}}).

### Delivery

Images are delivered via a web service that utilizes a URL pattern. Out of the box, Livingdocs supports [imgix](https://imgix.com/).

To use imgix you have to create an account and configure your server as described [further down in this document](#server-configuration).

You can also use other image services as described [at the end of this document](#integrate-your-own-image-service).

#### Computing the image URL in the delivery

March Release Image Services and how to use them in the Delivery

With the new image format {{< added-in "release-2024-03" >}} we have introduced a `key` property next to the `originalUrl`. This can be used to compute the path to the file on storage.

The image object will now look like this:

```json
{
  "key": "2024/01/23/0a704a7b-18fc-4a74-a31b-9fbf0ae7beb3.jpeg",
  "width": 2048,
  "height": 1329,
  "mimeType": "image/jpeg",
  "focalPoint": {
    "x": 600,
    "y": 250
  },
  // This is the default crop for the image
  "crop": {
    "x": 400,
    "y": 100,
    "width": 1200,
    "height": 800,
    "name": "desktop"
  },
  "crops": [
    {
      "x": 400,
      "y": 100,
      "width": 1200,
      "height": 800,
      "name": "desktop"
    },
    {
      "x": 500,
      "y": 200,
      "width": 600,
      "height": 800,
      // this comes from image directive config on a
      // component in the project config
      "name": "mobile"
    }
  ],
  // do not use in future
  "originalUrl": "http://yourbucket.s3.aws.com/2024/01/23/0a704a7b-18fc-4a74-a31b-9fbf0ae7beb3.jpeg",
  // do not use in future
  "url": "https://images.yourdomain.io/2024/01/23/0a704a7b-18fc-4a74-a31b-9fbf0ae7beb3.jpeg?w=1024&auto=format",
  // do not use in future
  "imageService": "imgix"
}
```

Before release-2024-03 we have the url in the image which has a default crop applied. This is not useable as it is only a default crop. We then have the `srcSets` which have hard coded cropped Urls.

In the long term, we want to get rid of any hard coded URls.

As of the March release the delivery can use the key to calculate the path to the file on storage. This means no more hard coded URLs and you have the ability to change image services and use signed URLs.

Until you can use the key you need to use the originalUrl and calculate the resizing based on the width and height in the crop objects.

In our framework we have a function to get the URL from teh original URL which we provide here to help in the delivery:

```js
const md5hex = require('blueimp-md5')
const keyRegex = /^(?:https?:\/\/[^/]+\/|\/)?\/?([^?]+)/

function getUrl(
  value, // original URL
  {crop, width, originalDimensions, focalPoint},
  {preferWebp, host: targetHost, stripPathPrefix, secureToken}
) {
  let key = keyRegex.exec(value)?.[1]
  if (stripPathPrefix) key = key.replace(stripPathPrefix, '')

  let query = ''
  if (crop) query += getCropPathPart(crop)
  if (width) query += `&w=${width}`
  if (preferWebp) query += `&auto=format`

  // add signature s=<signature> to searchParams
  // s must be on the last position! https://github.com/imgix/imgix-blueprint#securing-urls
  if (secureToken) {
    query += `&s=${md5hex(`${secureToken}/${key}${query.replace('&', '?')}`)}`
  }

  return `${targetHost}/${key}${query.replace('&', '?')}`
}

const getCropPathPart = function (c) {
  return `/C=W${c.width},H${c.height},X${c.x},Y${c.y}`
}
```

We recommend having an srcSet configured in your delivery, as the srcSet in Livingdocs is in the database and exists for all images that are created when it's available - so even changing it in Livingdocs does not change the data.

### Render Strategies

You can choose different render strategies for how an image should be rendered in
HTML.

Example of an image with a `srcset` attribute:

```html
<img
  src="https://livingdocs.imgix.net/2017/3/13/6ff-ef019.jpeg?w=1024"
  srcset="
    https://livingdocs.imgix.net/2017/3/13/6ff-ef019.jpeg?w=1024 1024w,
    https://livingdocs.imgix.net/2017/3/13/6ff-ef019.jpeg?w=620   620w
  "
  sizes="100vw"
/>
```

A div with a `data` attribute meant to be processed by a client-side script.

```html
<div
  class="resrc"
  data-src="https://livingdocs.imgix.net/2017/3/13/6ff-ef019.jpeg"
></div>
```

There are many more ways how an image can be rendered. And if you miss a strategy please get in touch.

## Why image services? - Some Background

You might be wondering as to why Livingdocs relies on an image service in the first place, rather than directly embedding Amazon URLs into the `src` attribute of an `img` tag. There are two primary reasons for this approach:

1. cropping
2. different image widths (sizes) for different devices

The first reason is easily explained. Livingdocs provides an image cropping tool (https://github.com/livingdocsIO/srcissors) in the editor which allows users to crop their images and change the aspect ratio. However, the Livingdocs server does not generate these different versions of the image and deliver them. Instead, it gives this responsibility to a web service such as imgix. Currently, Livingdocs expects that a web service takes the cropping information in the form of a URL parameter ([example of imgix](https://docs.imgix.com/apis/rendering/size/rect)). This is the case for all services we know of.

The second reason for using an image service is to have images that are responsive. Put simply, you don't want to download a 5 Megapixel image on your mobile phone. Instead you want a website to be "smart" and download the image in such a size that the resolution is perfect for your device but the size is just as large as need be.

Livingdocs support different strategies for responsive images:

1. `srcset` images
2. script-based plugin

The first approach uses an images `srcset` attribute. A [good article on the topic can be found here](https://ericportis.com/posts/2014/srcset-sizes/). The `srcset` attribute is supported by all major browsers.

Srcset only works for inline images (`img` tag). If you use a background image, you can currently set a max width. Read here on [why srcset does not work for background images]({{< ref "responsive-bg-images.md" >}}).

The second approach expects you to provide client-side javascript which runs in the reader's browser, detects the respective device size and requests the optimal image for this size.

So, in summary the whole process looks like this:

- A user uploads an image to the Livingdocs editor,
- the corresponding file is stored on S3 and
- the URL to the file is made available on the component as the `originalUrl`.
- Livingdocs chooses the image service for generating the HTML markup in the document that is shown in the editor. (The image service to be used is configured via `selectedImageService`. Let's say `imgix` is configured.)
- Livingdocs loads the `imgix_image_service` and calls the `set` method which will generate an `img` tag with a URL that fits the imgix url specification (https://docs.imgix.com/setup/serving-images).
- Finally, the browser then renders the image by querying imgix for the respective image.

## Configuring an image service

You need to configure your image service in the server. You add the configuration for one or more image services as well as the selected image service.

Below we'll outline the configuration for Imgix.

#### Server Configuration

```js
documents: {
  selectedImageService: 'imgix',
  imageServices: {
    imgix: {
      host: 'https://livingdocs-dev.imgix.net',
      preferWebp: true, // default: true
      secureToken: '<your-token>' // optional
    }
  }
}
```

The `selectedImageService` field tells Livingdocs which image service should be used.
The `imageServices` contains the configurations for one or more image services.

You can in theory configure several images services in the server, but as of now only one can be active (the `selectedImageService`).

The `host` is simply where your imgix images are served from.
If `preferWebp` is set to `true` Livingdocs will pass the [`auto=format` parameter](https://docs.imgix.com/apis/url/auto).
When the optional property `secureToken` is set, the images are [secured](https://docs.imgix.com/setup/securing-images).

#### Backwards compatible image rendering server config

Until all your designs contain a `mediaRendering` config you should
keep the `backgroundImage` and `srcSet` in your server configuration.

```js
documents: {
  selectedImageService: 'imgix',
  imageServices: {
    imgix: {
      host: 'https://livingdocs-dev.imgix.net',
      preferWebp: true,
      backgroundImage: {
        maxWidth: 2048
      },
      srcSet: {
        defaultWidth: 1024,
        widths: [
          2048,
          1024,
          620,
          320
        ],
        sizes: ['100vw']
      }
    }
  }
}
```

#### Images in the Metadata of a Document

Images in the metadata have a similar format to images in the document and
use the same image service.

Metadata fields of type `li-image` will contain the `srcset` in a specific `crop`, but not in the root. The reason for this is that you normally want teaser images in a certain crop and it is not possible to have the metadata definition for the image without a crop definition.

An example:

```js
metadata: {
  teaserImage: {
    originalUrl: 'http://livingdocs-images-dev.s3.amazonaws.com/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg',
    url: 'https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?w=1024&auto=format',
    width: 1760,
    height: 791,
    imageService: 'imgix',
    crops: [
      {
        url: 'https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=1024&auto=format',
        name: '16:9',
        x: 177,
        y: 0,
        width: 1406,
        height: 791,
        srcSet: [
          {
              url: 'https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=2048&auto=format',
              width: 2048
          },
          {
              url: 'https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=1024&auto=format',
              width: 1024
          },
          {
              url: 'https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=620&auto=format',
              width: 620
          },
          {
              url: 'https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=320&auto=format',
              width: 320
          }
        ]
      }
    ]
  }
}
```

The `srcset` information is useful when you want to have responsive images in your overview pages or embeds (`doc-include` directives). In such a case you could render the `doc-include` HTML in a server-side plugin (template). This plugin will not use the Livingdocs framework to render thus your configured `srcset` will not be automatically applied. You can though use the information on the metadata field to apply it manually in the template.

An example template:

```html
module.exports =
<a href="<%= article.url %>">
  <div class="teaser__img-wrap">
    <img
      class="teaser__img"
      src="<%= article.teaserImage %>"
      srcset="<%= article.srcSet %>"
      sizes="(min-width: 1024px) 100vw, 50vw"
    />
  </div>
</a>
```

You apply the `srcset` attribute manually in your `doc-include` template.
Note also that we prefer here to write the `sizes` attribute directly in the template. This makes sense since the template knows best how the responsive behavior should be.

## Integrate your own image service

**Important: You will have to add image services to both your `server` and `editor`!**

An image service in Livingdocs is basically a url transformer allowing you to
proxy image requests through a 'real' image service like imgix and write params
to the url dynamically. For example, to define the `width` or crop of an image.

We support the setting of allowed or disabled mime types which defines which mime types the custom image service will handle but does not stop upload in the editor itself. This is for cases where you want to use different image services for different mime types.

Example of registering an image service:

```js
const myImageService = {
  name: 'myImageService',
  hasBrowserPlugin: true,
  supportsCrop: true,
  supportsWidth: true,
  supportsVideoConversion: true, // default: false
  // Either allowedMimeTypes or disabledMimeTypes can be defined.
  // If you define both of them, disabledMimeTypes will be ignored.
  // If neither is defined, all mime types will be handled by this service
  allowedMimeTypes: ['image/jpeg', 'image/png'],
  disabledMimeTypes: ['image/gif', 'image/webp'],

  // This is not a real-world example. It just rewrites
  // the url to go through myproxy.com and embeds the width
  // and image url in the path of the generated url.
  getUrl: function (imageUrl, {crop, width, originalDimensions}) {
    imageUrl = imageUrl || ''

    return `https://myproxy.com/w${width}/${imageUrl}`
  },
  // Return an image url without any cropping applied. This is used
  // e.g for the cropping interface. This is not a real-world example neither,
  // it just rewrites the url to go through myproxy.com.
  getUncroppedUrl: function (imageUrl) {
    imageUrl = imageUrl || ''

    return `https://myproxy.com/${imageUrl}`
  }
}

const livingdocs = require('@livingdocs/framework')
livingdocs.imageServices.add(myImageService)
```

In practice we recommend to create a separate npm package to share your
image service between a downstream server and editor:

```js
const myImageService = require('@yourOrg/myImageService')
const livingdocs = require('@livingdocs/framework')
livingdocs.imageServices.add(myImageService)
```
