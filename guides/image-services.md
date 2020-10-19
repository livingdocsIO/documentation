# Image Services

## Overview

Livingdocs supports mechanisms to crop images and serve images in an optimised way to browsers and devices. This is done by uploading an original image and then cropping or resizing it on the fly through a SaaS image service depending


There are 3 parts involved in image management:

1. The **storage** of the images
   Uploaded images are stored in a configurable key value store. Usually
   we recommend S3.
   The location in the key value store and the metadata of the image are also stored in the Media Library.
3. The **delivery** through a SaaS image service
   Livingdocs does not serve images to your end-users directly. For this you
   can choose a service provider of your choice. In Livingdocs itself we have the `image-service` concept which simply is an url rewriter so that images get served through your SaaS provider. Currently we offer a pre-made image-service for imgix (Contact us to add other ones or do so yourself).
2. The **render strategies** to create HTML markup
   Image markup can be rendered in different ways depending on what you want to achieve (e.g. an `img` tag with a `srcset` attribute).


### Storage

The storage of choice for Livingdocs is Amazon S3, the bucket is configured in the server like this:

server configuration:
```js
images: {
  public: 'http://bucket-name.s3.amazonaws.com',
  bucket: 'bucket-name',
  bucket_region: 'eu-west-1'
}
```

You can configure your own image storage using the following configuration:
```js
images: {
  proxy: {
    url: 'http://your-image-storage.com'
  }
}
```

This will route image upload requests from Livingdocs to your chosen URL instead of S3.
For details please see the reference documentation for the [server configuration](../../reference-docs/server-configuration/config.md)


### Delivery

The delivery of the images is done through a URL-pattern-based web service. Out of the box, Livingdocs supports imgix (https://www.imgix.com/).

To use imgix you have to create an account at imgix and configure your server as
described [further down this document](#server-configuration).

You can also use other image services as described at the end of this document.


### Render Strategies

You can choose different render strategies how an image should be rendered in
HTML.

Here are some Examples. For more detailed information check out the [project configuration](../../reference-docs/project-config/design.md)

Example of an image with a srcset attribute:
```html
<img
  src="https://livingdocs.imgix.net/2017/3/13/6ff-ef019.jpeg?w=1024"
  srcset="https://livingdocs.imgix.net/2017/3/13/6ff-ef019.jpeg?w=1024 1024w,
    https://livingdocs.imgix.net/2017/3/13/6ff-ef019.jpeg?w=620 620w"
  sizes="100vw">
```

A div with a `data` attribute meant to be processed by a client-side script.
```html
<div
  class="resrc"
  data-src="https://livingdocs.imgix.net/2017/3/13/6ff-ef019.jpeg">
```

There are many more ways how an image can be rendered. And if you miss a strategy please get in touch.


## Why image services? - Some Background

You might wonder why Livingdocs uses an image service to start with and does not just write the Amazon URL into an `img` tag's `src` attribute. Two reasons mainly:
1. cropping
2. different image widths (sizes) for different devices

The first reason is easily explained. Livingdocs provides an image cropping tool (https://github.com/livingdocsIO/srcissors) in the Livingdocs editor that allows users to crop their images and change the aspect ratio. The Livingdocs server can not generate different versions of an image and deliver them. It gives this responsibility to a web service such as imgix. Currently, Livingdocs expects that a web service takes the cropping information in the form of a URL parameter (example of imgix: https://docs.imgix.com/apis/url/size/rect). This is the case for all services we know of.

The second reason for using an image service is a bit more involved. Put simply, you don't want to download a 5 Megapixel image on your mobile phone. Instead you want a website to be "smart" and download the image in such a size that the resolution is perfect for your device but the size is just as large as need be. There is actually a whole community for this topic: https://responsiveimages.org/

Livingdocs support different strategies for responsive images:
1. `srcset` images
2. script-based plugin


The first approach uses the an images `srcset` attribute. A good article on the topic is found here: https://ericportis.com/posts/2014/srcset-sizes/ The `srcset` attribute is supported by all major browsers. It is *not* supported in IE11 and below. Of course that does not mean that users can not see images on IE11 just that they are not responsive there.

Srcset only works for inline images (`img` tag). If you use a background image, you can currently set a max width. Read here on [why srcset does not work for background images](../know-how/responsive-bg-images.md).

The second approach expects you to provide a client-side Javascript that runs in the reader's browser, detects the respective device size and requests the optimal image for this size. We can provide such a script based on the now out-of-service service rescr.it. For another image service you would need to provide your own script.


An Example of the whole process:
A user uploads an image to the Livingdocs editor, the corresponding file is stored on Amazon S3 and the URL to the Amazon file is available on the component as `originalUrl`. The framework chooses the correct image service (e.g. imgix) for generating the correct HTML markup in the document that is shown in the Livingdocs editor. (The image service to be used is configured via `selectedImageService`. Let's say `imgix` is configured.) The framework loads the `imgix_image_service` and calls the `set` method which will generate an `img` tag with a URL that fits the imgix url specification (https://docs.imgix.com/setup/serving-images). The browser then renders the image by querying imgix for the respective image.


## Configuring an image service

You need to configure your image service in the server. You add the configuration for one or more image services as well as the selected image service.

Below we'll outline the configuration for imgix.


#### Server Configuration

```js
documents: {
  selectedImageService: 'imgix',
  imageServices: {
    imgix: {
      host: 'https://livingdocs-dev.imgix.net',
      preferWebp: true
    }
  }
}
```
The `selectedImageService` field tells Livingdocs which image service should be used.
The `imageServices` contains the configurations for one or more image services.

You can in theory configure several images services in the server, but as of now only one can be used (the one specified in selectedImageService).

The `host` is simply where your imgix images are served from.
If `preferWebp` is set to `true` Livingdocs will pass the `auto=format` parameter (https://docs.imgix.com/apis/url/auto).


#### Backwards compatible image rendering server config

Until all your designs contain an `imageRendering` config you should
keep the server wide 'backgroundImage' and 'srcSet'
imageServices configurations.

Server Config:
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

Images in the metadata have a similar format to images in the document and also
use the same image service.

Metadata fields of type `li-image` will contain the `srcset` in a specific `crop`, but not in the root. The reason for this is simply that you normally only want teaser images in a certain crop and in the metadata definition it is not even possible to have a metadata image without a crop definition.

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
    <img class="teaser__img"
        src="<%= article.teaserImage %>"
        srcset="<%= article.srcSet %>"
        sizes="(min-width: 1024px) 100vw, 50vw"/>
  </div>
</a>
```

You apply the `srcset` attribute manually in your `doc-include` template.
Note also that we prefer here to write the `sizes` attribute directly in the template. This makes sense since the template knows best how the responsive behavior should be.


## Integrate your own image service

Important: You will have to add image services to both your `server` and `editor`.

An image service in livingdocs is basically just a url transformer that
allows to proxy image requests through a 'real' image service like imgix and
write params to the url dynamically to define e.g. the `width` or crop
of an image.

Example of registering an image service:
```js
const myImageService = {
  name: 'myImageService',
  supportsCrop: true,
  supportsWidth: true,

  // This is not a real-world example. It just rewrites
  // the url to go through myproxy.com and embeds the width
  // and image url in the path of the generated url.
  getUrl: function (imageUrl, {crop, width}) {
    return imageUrl || ''

    return `https://myproxy.com/w${width}/${imageUrl}`
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
