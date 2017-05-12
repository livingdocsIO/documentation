# Image Services

## Overview

Livingdocs allows users to upload pictures and then subsequently shows them. There are 3 parts here:

1. the **storage** of the images
2. the generated image **markup** (e.g. `img` tags in the HTML document)
3. the **delivery** of the images

### Storage

The storage of choice for Livingdocs is Amazon S3, the bucket is configured in the server like this:
```js
'images': {
  'public': 'http://bucket-name.s3.amazonaws.com',
  'bucket': 'bucket-name',
  'bucket_region': 'eu-west-1'
}
```

You can configure your own image storage using the following configuration:
```js
'images': {
  'proxy': {
    'url': 'http://your-image-storage.com'
  }
}
```

This will route image upload requests from Livingdocs to your chosen URL instead of S3.
For details please see the reference documentation for the [server configuration](../../reference-docs/server-configuration/config.md)

### Delivery

The delivery of the images is done through a URL-pattern-based web service. Out of the box, Livingdocs supports:
1. resrc.it (https://www.resrc.it/ note: resrc.it was bought by fastly and you can currently not open new accounts)
2. ImgIX (https://www.imgix.com/)

You can also add another image service, or even your own. SZ did so for their magazine.

### Markup

In order to see an image in a HTML document, Livingdocs needs to generate the HTML markup. This has to work in tandem with the chosen web service (ImgIX or resrc.it) since each of those services expects a specific URL pattern to encode things like the image width or a cropping. Currently, both ImgIX and resrc.it have their corresponding markup generator in the Livingdocs framework. As an outlook, we are pushing towards a more configurable Lego-like system where you don't configure a specific web service but rather specific strategies.

Below is an example workflow that summarizes the whole process.

A user uploads an image to the Livingdocs editor, the corresponding file is stored on Amazon S3 and the URL to the Amazon file is available on the component as `originalUrl`. The framework chooses the correct image service (e.g. ImgIX) for generating the correct HTML markup in the document that is shown in the Livingdocs editor. (The image service to be used is configured in the Livingdocs editor. Let's say `ImgIX` is configured.) The framework loads the `imgix_image_service` and calls the `set` method which will generate an `img` tag with a URL that fits the ImgIX url specification (https://docs.imgix.com/setup/serving-images). The browser then renders the image by querying ImgIX for the respective image.

## Why image services?

You might wonder why Livingdocs uses an image service to start with and does not just write the Amazon URL into an `img` tag's `src` attribute. Two reasons mainly:
1. cropping
2. different image widths (sizes) for different devices

The first reason is easily explained. Livingdocs provides an image cropping tool (https://github.com/upfrontIO/srcissors) in the Livingdocs editor that allows users to crop their images and change the aspect ratio. The Livingdocs server can not generate different versions of an image and deliver them. It gives this responsibility to a web service such as ImgIX. Currently, Livingdocs expects that a web service takes the cropping information in the form of a URL parameter (example of ImgIX: https://docs.imgix.com/apis/url/size/rect). This is the case for all services we know of.

The second reason for using an image service is a bit more involved. Put simply, you don't want to download a 5 Megapixel image on your mobile phone. Instead you want a website to be "smart" and download the image in such a size that the resolution is perfect for your device but the size is just as large as need be. There is actually a whole community for this topic: https://responsiveimages.org/
Livingdocs support 2 strategies for responsive images:
1. script-based plugin
2. `srcset` images (inline images only)

The first approach expects you to provide a client-side Javascript that runs in the reader's browser, detects the respective device size and requests the optimal image for this size. We provide such a script for rescr.it. For another image service you would need to provide your own script.
The second approach uses the browser's `srcset` markup. A good article on the topic is found here: https://ericportis.com/posts/2014/srcset-sizes/ The `srcset` attribute is today (2017) supported by all major browsers, including Mircosoft's edge. It is *not* supported in IE11 and below. Of course that does not mean that users can not see images on IE11 just that they are not responsive there.
Srcset only works for inline images (`img` tag). If you use a background image, you can currently set a max width. Read here on [why srcset does not work for background images](./responsive-bg-images.md).

## Configuring an image service

You currently need to configure your image service in both the editor and the server. We will push towards a server-only configuration, also because most of the configuration is duplicated, but we're not there yet. In the editor you configure which image service to use and the configuration for this image service. In the server you just add the configuration for the image service.

Below we'll outline the configuration for both ImgIX and resrc.it.

### ImgIX

The ImgIX configuration uses `srcset`. If you don't know about this HTML standard yet, refer to this article first: https://ericportis.com/posts/2014/srcset-sizes/

#### Editor

```js
  app: {
    imageService: 'imgix',
    imageServiceConfig: {
      host: "https://livingdocs-dev.imgix.net",
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
```

The `imageService` field tells Livingdocs which image service should be used. The `imageServiceConfig` contains the configuration for this specific image service.
The `host` is simply where your ImgIX images are served from.
If `preferWebp` is set to `true` Livingdocs will pass the `auto=format` parameter (https://docs.imgix.com/apis/url/auto).
`srcSet` defines the settings you want for your `srcset` attribute:
1. the available image widths `widths`
2. the width that is set to the `src` attribute (e.g. for IE11 and below), defined in `defaultWidth`
3. The `sizes` attribute that defines the responsive behavior

Note: We will take (3) out of the configuration in the medium term since we think it makes more sense to set the `sizes` attribute directly on the component or template.

For background images you can simply set a fixed max-width, so that each background image will get the corresponding ImgIX width set. (if the actual width of the image is lower, ImgIX will never try to interpolate but just leave it -> this is why it is called max-width).

#### Server

```coffee
documents:
  imageServices:
    imgix:
      host: 'https://livingdocs-dev.imgix.net'
      preferWebp: true
      backgroundImage:
        maxWidth: 2048
      srcSet:
        defaultWidth: 1024
        widths: [
          2048,
          1024,
          620,
          320
        ],
        sizes: ['100vw']
```

The parameters are equivalent to the ones in the editor. You can in theory also configure several images services in the server, but as of now only one can be used (the one specified in the editor config).

### Resrc.it

#### Editor

```coffee
app:
  imageService: 'resrc.it'
  imageServiceConfig:
    host: 'https://app.resrc.it'
    quality: 75
    scriptUrl: '//d2o08py1e264ss.cloudfront.net/assets/resrc-0.9.0.min.js'
```

The `imageService` field tells Livingdocs which image service should be used. The `imageServiceConfig` contains the configuration for this specific image service.
The `host` is simply where your resrc.it images are served from. With `resrc.it` this is normally always the same.
The `quality` setting allows you to choose a global quality for your images. In the range between 75 to 100 you normally don't see a difference.
The `scriptUrl` points to the client-side Javascript code used for the responsive behavior. You need to provide this. And don't rely on our URL ;)

#### Server

```js
documents: {
  imageServices: {
    'resrc.it': {
      host: 'https://app.resrc.it',
      quality: 75,
      scriptUrl: '//d2o08py1e264ss.cloudfront.net/assets/resrc-0.9.0.min.js'
    }
  }
}
```

The parameters are equivalent to the ones in the editor. You can in theory also configure several images services in the server, but as of now only one can be used (the one specified in the editor config).

## `srcset` in Metadata

This section is only relevant if you are using ImgIX. Skip it otherwise.

Metadata fields of type image will contain the `srcset` in a specific `crop`, but not in the root. The reason for this is simply that you normally only want teaser images in a certain crop and in the metadata definition it is not even possible to have a metadata image without a crop definition.

An example:
```json
"metadata": {
  "teaserImage": {
    "originalUrl": "http://livingdocs-images-dev.s3.amazonaws.com/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg",
    "url": "https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?w=1024&auto=format",
    "width": 1760,
    "height": 791,
    "imageService": "imgix",
    "crops": [
        {
            "url": "https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=1024&auto=format",
            "name": "16:9",
            "x": 177,
            "y": 0,
            "width": 1406,
            "height": 791,
            "srcSet": [
                {
                    "url": "https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=2048&auto=format",
                    "width": 2048
                },
                {
                    "url": "https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=1024&auto=format",
                    "width": 1024
                },
                {
                    "url": "https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=620&auto=format",
                    "width": 620
                },
                {
                    "url": "https://livingdocs-dev.imgix.net/2017/3/29/56cac115-07ef-4421-9fbf-4c886d4543cd.jpeg?rect=177%2C0%2C1406%2C791&w=320&auto=format",
                    "width": 320
                }
            ]
        }
    ]
  }
}
```

The `srcset` information is useful when you want to have responsive images in your overview pages or embeds (`doc-include` directives). In such a case you will render the `doc-include` HTML in a server-side plugin (template). This plugin will not use the Livingdocs framework to render thus your configured `srcset` will not be automatically applied. You can though use the information on the metadata field to apply it manually in the template.

An example template:
```html
module.exports = `
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
Note also that we prefer here to write the `sizes` attribute directly in the template. This makes sense since the template knows best how the responsive behavior should be (better than a config).
