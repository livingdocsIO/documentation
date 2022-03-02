---
title: Metadata Plugin List
menus:
  reference-docs:
    parent: Metadata
renderTOC: false
---

## Overview

This overview contains a list of all metadata plugins provided by Livingdocs.
Go to [Metadata]({{< ref "/reference-docs/document/metadata" >}}) to get an overview of the metadata concept.
You can [create your own plugins]({{< ref "/guides/documents/metadata/metadata-examples" >}}) in the downstream.


| Metadata Plugin                             | Metadata Plugin Type   | Description                                  | Usage (D = Document, M = Media Library Entries) | Default UI                                        |
| ------------------------------------------- | ---------------------- | -------------------------------------------- | ----------------------------------------------- | ------------------------------------------------- |
| [Boolean](#li-boolean)                      | li-boolean             | Boolean                                      | D, M                                            | checkbox                                          |
| [Category](#li-category)                    | li-category            | category                                     | D                                               | select                                            |
| [Date/Time validity](#li-datetime-validity) | li-datetime-validity   | Date                                         | M                                               | 2 date/time inputs                                |
| [Date/Time](#li-datetime)                   | li-datetime            | Date                                         | D, M                                            | date/time input                                   |
| [Dependencies](#li-dependencies)            | li-dependencies        | Livingdocs framework dependencies definition | D                                               | no UI                                             |
| [Desk-Net](#li-desknet-integration)         | li-desknet-integration | Desk-Net Integration                         | D                                               | Link to Desk-Net distribution entry               |
| [Document Target Length](#li-target-length) | li-target-length       | Target length in characters for a document   | D                                               | number input or length slider                     |
| [Google Vision](#li-google-vision)          | li-google-vision       | Google Vision Autotagging for Images         | M                                               | specialized UI, no config possible                |
| [Image](#li-image)                          | li-image               | Images                                       | D, M                                            | Image selection/upload/crops                      |
| [iMatrics](#li-imatrics-nlp-tags)           | li-imatrics-nlp-tags   | iMatrics tag management                      | D                                               | manage tags                                       |
| [Integer](#li-integer)                      | li-integer             | Integer                                      | D, M                                            | number input                                      |
| [Language](#li-language)                    | li-language            | Language                                     | D                                               | select                                            |
| [Named Crops](#li-named-crops)              | li-named-crops         | Default Crops for Images                     | M                                               | crop management UI                                |
| [Numeric List](#li-numeric-list)            | li-numeric-list        | Array of Numbers                             | D, M                                            | multi number input                                |
| [Poster Image](#li-poster-image)            | li-poster-image        | Poster Image for Videos                      | M (Video)                                       | image selection                                   |
| [Publish Date](#li-publish-date)            | li-publish-date        | Holds first publication date, user editable  | D                                               | date/time input                                   |
| [Reference List](#li-reference-list)        | li-reference-list      | Multiple references to other documents       | D, M                                            | document selection (dialog)                       |
| [Reference](#li-reference)                  | li-reference           | A reference to another document              | D, M                                            | document selection (dialog)                       |
| [Retresco](#li-retresco)                    | li-retresco            | Retresco tag management                      | D                                               | manage tags                                       |
| [String List](#li-string-list)              | li-string-list         | Array of Strings                             | D, M                                            | multiselect                                       |
| [String](#li-text)                          | li-text                | String                                       | D, M                                            | text, textarea, select                            |
| [Transcoding State](#li-transcoding-state)  | li-transcoding-state   | State of external transcoding job            | M (Video)                                       | trigger transcoding, current job progress, result |

## li-boolean
**Data Format**: Boolean\
**Default UI**: checkbox (`liMetaCheckboxForm`)

## li-category
**Data Format**: `{id: <String>, path: <String>}`\
**Default UI**: select with category tree view and search

## li-datetime-validity
**Data Format**: `{from: ISO8601 String, to: ISO8601 String}`\
**Default UI**: 2 date/time inputs (`liMetaDateTimeValidityForm`)

## li-datetime
**Data Format**: `<ISO8601 String>`\
**Default UI**: 2 date/time inputs (`liMetaDatetimeForm`)

## li-dependencies
**Data Format**:
```js
{
  js: [
    {
      src: <String>,
      code: <String>,
      inline: <Boolean>,
      library: <String>,
      namespace: <String>,
      componentIds: [
        <String>
      ]
    }
  ],
  css: [
    {
      src: <String>,
      code: <String>,
      inline: <Boolean>,
      library: <String>,
      namespace: <String>,
      componentIds: [
        <String>
      ]
    }
  ]
}
```
**Default UI**: no UI

## li-desknet-integration
**Data Format**:
```js
{
  id: <Integer>,
  publicationId: <Integer>,
  platformId: <Integer>,
  categoryId: <Integer>
}
```
**Default UI**: Link to Desk-Net distribution entry

## li-document-soft-lock
**Data Format**:
```js
{
  userId: <Integer>,
  userName: <String>,
  locktime: <ISO8601 String>,
  tabId: <String>
}
```
**Default UI**: no UI


## li-google-vision
**Data Format**: `{}`\
**Default UI**: specialed UI in the Media Library Image Detail View, no config possible

## li-image
**Data Format**:
```js
{
  originalUrl: <String,
  url: <String>,
  mediaId: <String>,
  height: <Integer>,
  width: <Integer>,
  mimeType: <String>,
  imageService: <String>,
  crops: [
    <Object>
  ]
}
```
**Default UI**: UI to select/upload/delete/crop an image (`liMetaImageForm`)

## li-imatrics-nlp-tags
**Data Format**:
```js
{
  contentVersion: <String>,
  concepts: [
    {
      weight: <Number>,
      title: <String>,
      slug: <String>,
      type: <String>,
      uuid: <String>,
      inappropriate: <Boolean>,
      userAdded: <Boolean>
    }
  ]
}
```
**Default UI**: manage tags, add new tag suggestions (`liMetaIMatricsForm`)

## li-integer
**Data Format**: `<Integer>`\
**Default UI**: number input (`liMetaIntegerForm`)
* No UI is rendered if the `handle` is `lastProofreadRevision`.

## li-language
**Data Format**:
```js
{
  locale: <String>,
  label: <String>,
  groupId: <String>
}
```
**Default UI**: language selection
* This works together with the `languageSelection` service.

## li-named-crops
**Data Format**:
```js
{
  crops: [
    {
      name: <String>,
      x: <Integer>,
      y: <Integer>,
      width: <Integer>,
      height: <Integer>,
      isAutomatic: <Boolean>
    }
  ]
}
```
**Default UI**: crop management (`liMetaNamedCropsForm`)

## li-numeric-list
**Data Format**: `[<Number>]`\
**Default UI**: input for multiple numbers (`liMetaNumericListForm`)

## li-poster-image
**Data Format**:
```js
{
  originalUrl: <String>,
  url: <String>,
  mediaId: <String>,
  height: <Integer>,
  width: <Integer>,
  mimeType: <String>,
  imageService: <String>,
  crops: [
    {
      name: <String>,
      x: <Integer>,
      y: <Integer>,
      width: <Integer>,
      height: <Integer>,
      isAutomatic: <Boolean>
    }
  ]
}
```
**Default UI**: Poster Image selection, has some special UI within Video Media Library Entries (`liMetaPosterImageForm`)

## li-publish-date
**Data Format**: `<ISO8601 String>`\
**Default UI**: date/time input (`liMetaDatetimeForm`)

## li-reference-list
**Data Format**:
```js
{
  $ref: 'documents',
  references: [{
    id: <String>
  }]
}
```
**Default UI**: Document Selection (Dialog) (`liMetaReferenceForm`)

## li-reference
**Data Format**:
```js
{
  $ref: 'document',
  reference: {
    id: <String>
  }
}
```
**Default UI**: Document Selection (Dialog) (`liMetaReferenceForm`)

## li-retresco
**Data Format**:
```js
{
  contentVersion: <String>,
  entities: [{
    id: <String>,
    type: <String>,
    name: <String>,
    score: <Number>,
    inappropriate: <Boolean>,
    userAdded: <Boolean>
  }]
}
```
**Default UI**: Retresco tag management (`liMetaRetrescoForm`)

Please see the [Retresco integration guide]({{< ref "/guides/integrations/retresco" >}}) for details on how to setup the integration.

## li-string-list
**Data Format**: Array of Strings\
**Default UI**: Multiselect

Needs a `dataProvider` to work.

**Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [{
  handle: 'myStringList',
  type: 'li-string-list',
  config: {
    dataProvider: { // required: any dataProvider
      type: 'labelValuePair',
      items: [
        {label: 'Item A', value: 'a'},
        {label: 'Item B', value: 'b'},
        {label: 'Item C', value: 'c'}
      ]
    }
  },
  ui: {
    label: 'foo', // optional
    config: {
      readOnly: true, // default: false
    }
  }
}]
```

## li-target-length
**Data Format**: `{characters: <Number>}`\
**Default UI**: Number input (`LiMetaTargetLengthForm`)

Doesn't work if the editor config `metadata.useAngularBasedFormRendering` is `true`.

**Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [{
  handle: 'targetLength',
  type: 'li-target-length',
  // optional, allows picking a step instead of entering an exact number
  ui: {
    config: {
      steps: [
        {
          label: 'S', // use a short one, e.g. "S" "M" "L"
          value: 100 // number of characters
        },
        {
          label: 'M',
          value: 200
        }
      ],
      // optional, allows the input of an exact number besides picking a step
      allowAnyNumber: true
    }
  }
}]
```

## li-text
**Data Format**: String<br>\
**Default UI**: text input, textarea, select\
**UI**:
  * Renders a select element if a `dataProvider` is configured
  * Renders a textarea if `ui.component` is set to `LiMetaFormTextarea`
  * Renders a text input otherwise {{< img src="./images/max-length.png" >}}
  
**Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [{
  handle: 'title',
  type: 'li-text',
  config: {
    maxLength: 200,                         // optional
    required: true,                         // optional, default: false
    requiredErrorMessage: 'Provide a title' // optional
    useAsTitle: true,                       // default: false, synchronises the value with document.title if true
    dataProvider: {                         // optional: any dataProvider
      type: 'labelValuePair',
      items: [
        {label: 'Item A', value: 'a'},
        {label: 'Item B', value: 'b'},
        {label: 'Item C', value: 'c'}
      ]
    }
  },
  ui: {
    label: 'foo',                   // optional
    component: 'LiMetaFormTextarea' // optional
    config: {
      placeholder: 'bar',           // optional
      readOnly: true,               // default: false
      rows: 10                      // optional, only applicable for LiMetaFormTextarea, integer, 5 by default
    }
  }
}]
```

## li-transcoding-state
**Data Format**:
```js
{
  commands: [{
    assetKey: <String>,
    commandId: <String>,
    createdAt: <String>,
    state: <String>,
    errorMessage: <String>,
    progress: <Number>
  }],
  transcodings: [{
    assetKey: <String>
  }]
}
```
**Default UI**: UI to trigger transcodings, see progress and the result in the end (`liMetaTranscodingStateForm`)



# Legacy Docs


## Image

ContentType metadata config:
```js
metadata: [{
  handle: 'teaserImage',
  type: 'li-image',
  config: {
    imageRatios: ['16:9', '1:1']
  },
  ui: {
    component: 'liMetaImageForm'
  }
}]
```

This defines an image with two crops: 16:9 and 1:1.

You can automatically extract images from the document and set the metadata
automatically unless you change the metadata manually at which point the automatic
extraction will stop.

```js
fieldExtractor: [
  {
    // the metadata field 'teaserImage' is the target of this extraction
    identifier: 'teaserImage',
    // the extraction is of type image
    type: 'image',
    // extract from component 'image' the value in the directive 'image'
    matches: ['image.image']
  }
]
```
This would autofill the metadata property 'teaserImage' with the first image
from the document in a 'image' component.

## Datetime

ContentType metadata config:
```js
metadata: [{
  ...,
  ui: {
    component: 'liMetaDatetimeForm',
    service: 'customServicePlugin', // optional
    label: 'foo' // optional, takes camelized name otherwise
  }
}]
```

You need to make sure that your server-side metadata field is of type `li-datetime` or a suitable custom format, otherwise you will get errors.
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a datetime allows you to customize the logic for the following methods:

```js
{
  // set the date, possibly applying formatting options
  setDate (identifier, value) {},

  // get the date, possibly applying formatting options
  getDate (identifier) {},

  // this lets you define what dates a user can select in the UI. Handy if you want for example
  // to disallow past dates.
  isValidDate (date) {}
}
```

There is a sample implementation in `plugins/metadata_services/default_date_service.coffee` to help you get started.

## Reference

ContentType metadata config for a single reference:
```js
metadata: [{
  ...,
  type: 'li-reference',
  config: {
    referenceType: 'document',
  },
  ui: {
    component: 'liMetaReferenceForm'
    config: {
        // enables display filters for the reference modal
        // see: "Register a Custom Display Filter" for general filter documentation
        displayFilters: []
    }
  }
}]
```

## Reference List

Stores an array of multiple document ids, not to be confused with [List Reference]({{< ref "#list-reference" >}}).

{{< img src="./li-reference-list-example.png" alt="Reference List Example" >}}

ContentType metadata config for a reference list:
```js
metadata: [{
  ...,
  type: 'li-reference-list',
  config: {
    referenceType: 'documents'
    displayFilters: []
  },
  ui: {
    component: 'liMetaReferenceForm',
    config: {
      sortable: true, // enable sorting by drag and drop
      displayFilters: [] // enable display filters
    }
  }
}]
```

## List Reference

Stores a single id of a list, not to be confused with [Reference List]({{< ref "#reference-list" >}}).

{{< img src="./li-list-reference-example.png" alt="List Reference Example" >}}

Config for a list reference:
```js
metadata: [{
  ...,
  type: 'li-list-reference',
  config: {
    enableCount: true,      // enable UI configuration of number of articles (default: false)
    defaultCount: 3,        // number of articles shown by default (default: 3)
    minCount: 2,            // minimum number of articles
    maxCount: 6,            // maximum number of articles
    enableListEditing: true // allow to create/edit list inline (default: false)
  }
}]
```

## Slug

ContentType metadata config:
```js
metadata: [{
  ...,
  ui: {
    component: 'liMetaSlugForm',
    service: 'customServicePlugin', // optional
    label: 'foo', // optional, takes camelized name otherwise
    config: {
      placeholder: 'bar', // optional, takes camelized name otherwise
      canReset: false // optional, false by default
    }
  }
}]
```

You need to make sure that your server-side metadata field is of type `li-text` or a suitable custom format, otherwise you will get errors.
The `canReset` option if set to true renders a reset button next to the slug input that resets the input to its initial value.
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a slug allows you to customize the logic for the following methods:

```js
{
  // define the logic for the initial value of a slug
  // For example: existing value or normalized metadata title
  initSlug (identifier) {},

  // gives you the unnormalized slug input (user input) and lets you define your custom
  // normalization logic (depending on what you want to allow in a URL)
  setSlug (identifier, slug) {},

  // only important if `canReset` is set to true
  // defines to what value the field will be reset
  resetSlug (identifier) {}
}
```

There is a sample implementation in `plugins/metadata_services/default_slug_service.coffee` to help you get started.


## Metadata Translations

Metadata translations are currently supported for the Media Library and Data Records.

#### Metadata Config
```js
metadata: [{
  handle: 'language',
  type: 'li-metadata-translations',
  ui: {
    component: 'liMetaSelectForm',
    service: 'languageSelection'
  }
}]
```

#### Storage
```js
metadata: {
  language: {locale: 'de'}
}
```

#### References

- Read the [metadata translations for Data Records]({{< ref "/guides/editor/metadata-translations" >}}) guide to learn how to use translations for Data Records.
- Read the [setting up the Media Library]({{< ref "/guides/media-library/media-library-setup" >}}) guide to learn how to configure translations for your Images, Videos and Files.
