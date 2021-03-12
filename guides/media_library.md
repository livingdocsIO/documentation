# Media Library

Livingdocs contains a Media Library that solves management and delivery of Images and Videos.
There are different pieces that can be used to cover custom needs per project.

This guide will walk you through setting up a basic Media Library for you project with Images support, you will learn about some details along the way.

The Videos Feature is not feature complete yet, it will be documented when it is. If you
are interested in testing it, please contact us.

At heart, the Media Library is based around configured `Media Types`. You might be familiar already with the concept of `Content Types`. `Media Types` are very similar.
You can configure as many different `Media Types` as you want. Usually you want to have at least 1 for Images (in fact, if you don't define one yourself, there is one added automatically at runtime).

See the [mediaType reference](/reference-docs/project-config/media_types.md) for a full reference of the `mediaType` configuration options.

## Media Types
Let's setup a `mediaType` for the images first. You add it to your [project config](/reference-docs/project-config/README.md) in an array at the top-level property `mediaTypes`.

media-types/image.js
```js
module.exports = {
  type: 'mediaImage', // the type is either mediaImage or mediaVideo
  handle: 'image', // You should name the primary image mediaType `image`
  info: {
    label: 'Images', // used in dashboards generated for this mediaType
    description: ''
  },
  metadata: [ // any metadata configuration as you know it from contentTypes already
    {
      handle: 'title',
      type: 'li-text',
      config: {
        required: true, // if a metadata property is required, the user will see a form to enter the metadata during upload
        requiredErrorMessage: 'Please provide a title',
        maxLength: 200,
        index: true
      },
      ui: {component: 'liMetaTextForm'}
    },
    {
      handle: 'description',
      type: 'li-text',
      config: {
        index: true
      },
      ui: {component: 'liMetaTextForm'}
    },
    {
      handle: 'credit',
      type: 'li-text',
      config: {
        required: true,
        requiredErrorMessage: 'Please provide a source',
        index: true
      },
      ui: {component: 'liMetaTextForm'}
    },
    {
      handle: 'namedCrops',
      type: 'li-named-crops',
      config: {
        index: true,
        namedCrops: [
          {
            name: 'mobile',
            isOptional: true
          },
          {
            name: 'desktop'
          }
        ]
      },
      ui: {
        label: 'Named Crops',
        component: 'liMetaNamedCropsForm'
      }
    }
  ],
  editor: {
    // the dashboard seen by users when opening Images/Videos from the document editor
    dashboard: {
      displayFilters: [
        {
          filterName: 'liDateTimeRange'
        }
      ]
    },
    // the dashboard opened through the main navigation
    managementDashboard: {
      displayFilters: [
        {
          filterName: 'liDateTimeRange'
        }
      ]
    }
  }
}
```

### IPTC extraction
Since many image files (especially those you get from image agencies) hold metadata defined by the IPTC standard, you want to configure extraction for certain metadata fields, so your users don't have to manually type them.
You do this by adding the `exifExtraction` property to the `mediaType`. See [the list of all IPTC fields](/reference-docs/project-config/media_types.md#exif-extraction) and how to configure them.

The exif extraction will run when an image is imported through the [Import API](/reference-docs/server-api/import_api.md) or when a user uploads an image through the UI.
The user has the chance to manually change the extracted Metadata before the image is actually stored in the Media Library.

media-types/image.js
```js
module.exports = {
  type: 'mediaImage',
  handle: 'image',
  // ...
  exifExtraction: {
    mappings: [
      {
        field: 'Title',
        metadataPropertyName: 'title'
      },
      {
        field: 'Description',
        metadataPropertyName: 'description'
      },
      {
        field: 'Credit Line',
        metadataPropertyName: 'credit'
      }
    ]
  },
  // ...
}
```

### Crops
With Livingocs, you can manage multiple crops per Image. We call it `Named Crops` and it works like this:
- You can define the crops hold with an image in the Media Library
- A user can edit these crops during upload or from within the Media Library Management Dashboard
- Whenever an image is used in a document, the crops are copied into the document and can be changed locally within the document

There are different strategies how to configure the crops:
1. Configure Named Crops with names after the usage, e.g. `desktop`, `mobile`
2. Configure Named Crops with aspect ratio names, e.g. `16:9`, `4:3`

We are going to configure the strategy 1 in this guide. There are 3 points where we need to configure this:
1. designSettings
2. mediaType
3. Design: image components `doc-image` directive
4. Metadata: `li-image` metadata properties (for a teaser image for example)

#### designSettings
In the [designSettings](/reference-docs/design.md), all the `namedCrops` need to be configured. You can then use all or some of them in `mediaType`s and `doc-image` directives.

```js
projectConfig.designSettings: {
  //...
  namedCrops: [
    {
      handle: 'mobile',
      label: 'Mobile',
      description: 'this image will be shown on small screens',
      // on small screens, having exact same ratios across all images is not that important
      // we let the user pick one but change freely
      recommendedRatios: ['1:1', '16:9']
    },
    {
      handle: 'desktop',
      label: 'Desktop',
      description: 'this image will be shown on wide screens',
      // for large screens, we want consistent 16:9 image ratios, the user can't change that
      imageRatios: ['16:9']
    },
    {
      handle: 'sm-teaser',
      label: 'SM Teaser',
      description: 'this image will be shown on wide screens',
      // for social media, we might want to use a different crop, but the ratio is fixed
      imageRatios: ['16:9']
    }
  ],
  //...
}
```

#### mediaType
Now we want to make sure the user can define the crops during upload or when changing an image in the Media Library. This way, the user can optimize the crops during upload, then these crops will be used by default when an image is inserted into a document.

There is a special purpose metadata plugin `li-named-crops` available to be used for this usecase. You configure it within the metadata config of a `mediaType` of type `mediaImage`.

media-types/image.js
```js
module.exports = {
  type: 'mediaImage',
  handle: 'image',
  // ...
  metadata: [
    // ...
    {
      handle: 'namedCrops',
      type: 'li-named-crops',
      config: {
        // configure all the namedCrops defined in the designSettings
        // that you want to keep a default within every mediaLibrary image for
        namedCrops: [
          {
            // the mobile crop is optional, the user can add it at will
            name: 'mobile', // name references the handle of a namedCrop in the designSettings
            isOptional: true
          },
          {
            // the desktop crop will always be defined after upload
            // the user can't remove it but only change according to the
            // configuration in the designSettings
            name: 'desktop'
          },
          {
            name: 'sm-teaser',
            isOptional: true
          }
        ]
      },
      ui: {
        label: 'Named Crops',
        component: 'liMetaNamedCropsForm'
      }
    }
  ],
  // ...
}
```

#### doc-image directive
Now we need to configure the `namedCrops` on the [doc-image](/reference-docs/project-config/directives/image.md) directive of our image component in the [design](/reference-docs/project-config/design.md).

```js
module.exports = {
  name: 'image',
  label: 'Image',
  iconUrl: `https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_image.svg`,
  directives: [{
    name: 'image',
    type: 'image',
    // for images in documents, only the desktop and mobile namedCrops
    // are used, the desktop is the default (shown in the document)
    // the mobile crop can be added by a user at will
    namedCrops: [{
      name: 'desktop', // the name references the handle of a namedCrop in the designSettings
      isDefault: true
    }, {
      name: 'mobile',
      isOptional: true
    }]
  }],
  html: dedent`
  <div class="m-asset-image m-asset-image--numbered">
    <div class="m-asset-image__image">
      <img class="responsive-img" doc-image="image">
    </div>
    <div class="m-asset-image__options">
      <div class="a-asset-input" doc-editable="caption">Caption</div>
      <div class="a-asset-input" doc-editable="source">Source</div>
    </div>
  </div>
  `
}
```

#### Metadata li-image
Last but not least, we configure the namedCrops on our teaserImage components. In this example, there are two teasers, one used internally called `Teaser Image` and one for social media shares called `Social Media Teaser Image`. We are going to configure both. This goes into the metadata configuration of a [contentType](/reference-docs/project-config/content_types.md).

```js
module.exports = {
  handle: 'regular',
  documentType: 'article',
  // ...
  metadata: [
    // ...
    {
      handle: 'teaserImage',
      type: 'li-image',
      config: {
        namedCrops: [
          {
            name: 'desktop',
            isDefault: true
          },
          {
            name: 'mobile',
            isOptional: true
          }
        ]
      },
      ui: {component: 'liMetaImageForm'}
    }, 
    {
      handle: 'socialMediaTeaserImage',
      type: 'li-image',
      config: {
        namedCrops: [{
          name: 'socialMediaTeaser',
          isDefault: true
        }]
      },
      ui: {component: 'liMetaImageForm'}
    }
    // ...
  ],
  // ...
}
```