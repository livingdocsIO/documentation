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


| Metadata Plugin                                    | Metadata Plugin Type     | Description                                   | Usage (D = Document, M = Media Library Entries, T = Table Dashboard, I = Includes) | Default UI                                                 |
| -------------------------------------------------- | ------------------------ | --------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Boolean](#li-boolean)                             | li-boolean               | Boolean                                       | D, M, T                                                                            | checkbox                                                   |
| [Color](#li-color)                                 | li-color                 | Color Code                                    | D, M, T, I                                                                         | text                                                       |
| [Category](#li-category)                           | li-category              | category                                      | D, T                                                                               | select                                                     |
| [Date](#li-date)                                   | li-date                  | Date                                          | D, M                                                                               | date input                                                 |
| [Date/Time validity](#li-datetime-validity)        | li-datetime-validity     | Date                                          | M                                                                                  | 2 date/time inputs                                         |
| [Date/Time](#li-datetime)                          | li-datetime              | Date                                          | D, M                                                                               | date/time input                                            |
| [Dependencies](#li-dependencies)                   | li-dependencies          | Livingdocs framework dependencies definition  | D                                                                                  | no UI                                                      |
| [Desk-Net Integration](#li-desknet-integration)                | li-desknet-integration   | Desk-Net Integration                          | D, T                                                                                  | Link to Desk-Net distribution entry                        |
| [Desk-Net Schedule](#li-desknet-schedule)                | li-desknet-schedule   | Desk-Net Schedule                          | D                                                                                  | Platform/category select and date input                        |
| [Document Reference](#li-document-reference)       | li-document-reference    | A reference to another document               | D, M, T                                                                            | document selection (dialog)                                |
| [Enum](#li-enum)                                   | li-enum                  | string from static list, validated on publish | D, M, T                                                                            | select                                                     |
| [External Id](#li-external-id)                     | li-external-id           | id marker for an external system              | D, M, T                                                                            | select                                                     |
| [Document Target Length](#li-target-length)        | li-target-length         | Target length in characters for a document    | D                                                                                  | number input or length slider                              |
| [Google Vision](#li-google-vision)                 | li-google-vision         | Google Vision Autotagging for Images          | M                                                                                  | specialized UI, no config possible                         |
| [Image](#li-image)                                 | li-image                 | Images                                        | D, M                                                                               | Image selection/upload/crops                               |
| [Issue Management](#li-issue-management)           | li-issue-management      | Issue Management                              | D                                                                                  | List of linked documents with actions to manage references |
| [iMatrics](#li-imatrics-nlp-tags)                  | li-imatrics-nlp-tags     | iMatrics tag management                       | D                                                                                  | manage tags                                                |
| [Integer](#li-integer)                             | li-integer               | Integer                                       | D, M                                                                               | number input                                               |
| [Language](#li-language)                           | li-language              | Language                                      | D                                                                                  | no Ui                                                      |
| [Metadata Translations](#li-metadata-translations) | li-metadata-translations | Enable metadata translations                  | D (data record only), M                                                            | translation UI                                             |
| [Named Crops](#li-named-crops)                     | li-named-crops           | Default Crops for Images                      | M                                                                                  | crop management UI                                         |
| [Numeric List](#li-numeric-list)                   | li-numeric-list          | Array of Numbers                              | D, M                                                                               | multi number input                                         |
| [Poster Image](#li-poster-image)                   | li-poster-image          | Poster Image for Videos                       | M (Video)                                                                          | image selection                                            |
| [Publish Date](#li-publish-date)                   | li-publish-date          | Holds first publication date, user editable   | D                                                                                  | date/time input                                            |
| [Reference List](#li-reference-list)               | li-reference-list        | Multiple references to other documents        | D, M                                                                               | document selection (dialog)                                |
| [Reference](#li-reference)                         | li-reference             | A reference to another document               | D, M                                                                               | document selection (dialog)                                |
| [Retresco](#li-retresco)                           | li-retresco              | Retresco tag management                       | D                                                                                  | manage tags                                                |
| [String List](#li-string-list)                     | li-string-list           | Array of Strings                              | D, M, T                                                                            | multiselect                                                |
| [String](#li-text)                                 | li-text                  | String                                        | D, M, T                                                                            | text, textarea, select                                     |
| [Tree](#li-tree)                                   | li-tree                  | Tree with link, document, group               | D                                                                                  | tree                                                       |
| [Transcoding State](#li-transcoding-state)         | li-transcoding-state     | State of external transcoding job             | M (Video)                                                                          | trigger transcoding, current job progress, result          |
| [Video Reference](#li-video-reference)             | li-video-reference       | A reference to a video (and a poster image)   | D, M, I                                                                            | Upload/Media Library Picker for a Video and a Poster Image |

## li-boolean

A simple checkbox which you can turn on/off.

If you want to have the field checked on during document creation, you can do that via [defaultMetadata]({{< ref "/reference-docs/project-config/content-types#default-metadata" >}}) in your projectConfig.

**Storage Format**: Boolean\
**Default UI**: checkbox\
**UI**: Renders a checkbox

**Project Config**
```js
metadata: [
  {
    type: 'li-boolean',
    config: {
      // common
      hideFromForm: false                      // optional, default: false
    }
    ui: {
      label: 'foo',                            // optional, takes camelized name otherwise
      config: {
        readOnly: true                         // optional, default: false
      }
    }
  }
]
```


## li-color

li-color will provide you with 2 settings (based on `useInputTypeColor`)
* `useInputTypeColor: true` - color picker which stores the HEX color code
* `useInputTypeColor: false` - text field where you have to enter the HEX color code (e.g. `#8CBA51`)


**Storage Format**: String\
**Default UI**: text\
**UI**: Renders a text element + color field

![image](https://user-images.githubusercontent.com/172394/164286195-51beb096-492d-4f7f-b8e7-4623db658125.png)

**Project Config**
```js
metadata: [
  {
    handle: 'color',
    type: 'li-color',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      translatable: true                       // optional, default: false, translations are only supported for data-record and mediaLibrary
    },
    ui: {
      label: 'your label',
      config: {
        useInputTypeColor: false,              // optional, default: true, shows a color picker
        readOnly: true,                        // optional, default: false
        placeholder: 'foo',                    // optional, takes camelized name otherwise
      }
    }
  }
]
```

## li-category
**Storage Format**: `{id: <String>, path: <String>}`\
**Default UI**: select with category tree view and search

## li-date
{{< added-in release-2022-09 >}}
**Storage Format**: `<ISO8601 String>`\
**UI**: Renders a date picker element

**Project Config**
```js
metadata: [
  {
    handle: 'date',
    type: 'li-date',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value'  // optional
      translatable: false                      // optional, default: false
    },
    ui: {
      label: 'foo',                   // optional, takes camelized name otherwise
      config: {
        readOnly: true                // optional, default: false
      }
    }
  }
]
```

## li-datetime-validity
**Storage Format**: `{from: ISO8601 String, to: ISO8601 String}`\
**Default UI**: 2 date/time inputs (`liMetaDateTimeValidityForm`)

## li-datetime
**Storage Format**: `<ISO8601 String>`\
**Default UI**: 2 date/time inputs (`liMetaDatetimeForm`)\
**UI**: Renders a date and time picker element

![image](https://user-images.githubusercontent.com/172394/165904353-a9e02ad2-dd64-48ca-9b31-803d4279467e.png)

**Project Config**
```js
metadata: [
  {
    handle: 'date',
    type: 'li-datetime',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value'  // optional
    },
    ui: {
      label: 'foo',                   // optional, takes camelized name otherwise
      config: {
        readOnly: true                // optional, default: false
      }
    }
  }
]
```

## li-dependencies
**Storage Format**:
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

This plugin is used to connect Desk-Net stories with Livingdocs documents. There are numerous options available to synchronise data between the two platforms. Further details can be found in the [Desk-Net Integration Guide]({{< ref "/guides/integrations/desknet" >}}).

**Storage Format**:
```js
{
  id: <Integer>,
  publicationId: <Integer>,
  platformId: <Integer>,
  categoryId: <Integer>,
  publicationStatusId: <Integer> // {{< added-in release-2022-07 >}}
}
```

**Default UI**:

Document Metadata: Read-only link to Desk-Net distribution entry\
Table Dashboard: Read-only Desk-Net publication/platform status

**Project Config**
```js
metadata: [
  {
    handle: 'desknet',
    type: 'li-desknet-integration',
    config: {
      // {{< added-in release-2022-07 >}}
      publicationStatus: {
        fallbackPublicationStatusId: '2',
        // The order of matchers is important. The array is iterated through from first to last,
        // with the publicationStatusId taken from the earliest document state match.
        matchers: [
          {
            type: 'publication',
            value: 'published', // Only 'published' supported
            publicationStatusId: '5'
          },
          {
            type: 'task',
            taskName: 'proofreading',
            value: 'completed', // 'requested', 'accepted', 'completed'
            publicationStatusId: '4'
          },
          {
            type: 'metadata',
            propertyName: 'prepared',
            value: true, // <String>, <Number>, <Boolean>, <Array>, <Object>
            publicationStatusId: '3'
          }
        ]
      }
    },
    ui: {
      label: 'Desk-Net',
      config: {
        // {{< added-in release-2022-07 >}}
        publicationStatus: {
          labels: [
            {
              publicationStatusId: '5',
              label: 'Published',
              // optional, any SVG (ideally using viewBox)
              icon: '<svg viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h9v9H0z"/></svg>',
              // optional, any CSS colour string
              color: '#f00'
            }
          ]
        }
      }
    }
  }
]
```

## li-desknet-schedule

{{< added-in release-2022-09 block >}}

This plugin will allow a user to select Desk-Net platforms and categories that they would like to view in the Desk-Net Schedule side panel. Once selected the Desk-Net button in the editor becomes active and the side panel can be opened. It is possible to lock the schedule to a specific date, as well as filter the Desk-Net stories that are displayed. Further details can be found in the [Desk-Net Integration Guide]({{< ref "/guides/integrations/desknet#story-planning-schedule-in-livingdocs" >}}).

**Storage Format**:
```js
{
  platforms: [
    {
      platformId: <Integer>,
      categoryId: <Integer>
    }
  ],
  date: <ISO8601 String>
}
```
**Default UI**:
Platform/category select and date input

**Project Config**
```js
metadata: [
  {
    handle: 'desknetSchedule',
    type: 'li-desknet-schedule',
    config: {
      filters: {
        linkedDocumentsOnly: true,
        elementStatusIds: [1, 2, 10322, 10332],
        publicationStatusIds: [5]
      }),
      desknetExternalElementIdMetadataPath: 'myExternalSystem.id',
      automaticPlacementCreationFlowHandle: 'myDesknetGenerateContentFlow'
    },
    ui: {
      label: 'Desk-Net Schedule',
      config: {
        placeholder: 'Select a Desk-Net platform or category',
        useDashboard: 'articlesSimple'
      }
    }
  }
]
```

## li-document-reference

{{< added-in release-2022-03 >}}

A `li-document-reference` metadata field shows a reference to another document. To select a document one gets provided a Document Selection Modal.

**Storage Format**:
```js
{
  reference: {
    id: <String>
  }
}
```
**Default UI**: Document Selection (Dialog) (`liMetaReferenceForm`)

![image](https://user-images.githubusercontent.com/172394/163945540-02557891-ee21-42c5-a03e-4bfb1723e228.png)

**Project Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [
  {
    handle: 'reference',
    type: 'li-document-reference',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      documentType: 'article',                 // optional, one of article, page, data-record
      contentType: 'my-content-type'           // optional, filters the document selection
      published: true,                         // optional, shorthand for publication displayFilter, default: false
    },
    ui: {
      label: 'foo',                  // optional, takes camelized name otherwise
      config: {
        // style: 'default' -> default for metadata
        // style: 'teaser' -> default for include paramsSchema
        // style: 'minimal' -> only show a selection element with a title (no modal)
        style: 'default',
        useDashboard: '',            // optional, reference to a custom dashboard
        baseFilters: [],             // optional, filters that the user can set in the UI (below the search input)
        displayFilters: [],          // optional, invisible filters and applied to every search (including the default result list)
      }
    }
  }
]
```

References:
* [Display Filters]({{< ref "/reference-docs/editor-extensions/editor-configuration/display-filter" >}})
* [Base Filters]({{< ref "/reference-docs/editor-extensions/editor-configuration/base-filter" >}})



## li-enum

A `li-enum` metadata field shows a select form based on a statically defined list. On publish the selected value gets validated against the defined static list. With that you can assure that only specific values gets published.

**Storage Format**: `<String>`\
**Default UI**: select

![image](https://user-images.githubusercontent.com/172394/157249103-fd951f85-edf8-48ff-acc5-1b1a04831589.png)

**Project Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [
  {
    handle: 'tags',
    type: 'li-enum',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      dataProvider: {                          // required
        type: 'labelValuePair',                // required
        items: [
          {label: 'Tag A', value: 'a'},
          {label: 'Tag B', value: 'b', isDefault: true}, // isDefault sets the value if document opened the first time
          {label: 'Tag C', value: 'c'}
        ]
      }
    },
    ui: {
      label: 'foo',                   // optional, takes camelized name otherwise
      config: {
        readOnly: true,               // optional, default: false
        placeholder: 'foo',           // optional, takes camelized name otherwise
      }
    }
  }
]
```

## li-external-id

{{< added-in release-2022-07 block>}}

A `li-external-id` metadata field can be used to save an external id of another system. For example if you want to have an article reference to your original system. At the moment `li-external-id` has no UI and can only be set via the public API import.

**Storage Format**: `<String>`\
**Default UI**: no UI\
**Project Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [
  {
    handle: 'externalId',
    type: 'li-external-id',
    config: {
      // no config values are allowed
    },
    ui: {
      // no ui config values are allowed
    }
  }
]
```

## li-document-soft-lock
**Storage Format**:
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
**Storage Format**: `{}`\
**Default UI**: specialed UI in the Media Library Image Detail View, no config possible

## li-image
**Storage Format**:
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

## li-issue-management

{{< added-in release-2022-09 block >}}

**Default UI**: List of linked documents with actions to manage references

The `li-issue-management` metadata plugin can be used to manage issues (a data-record with references to pages).

{{< img src="./images/li-issue-management-overview.png" alt="Issue management overview" >}}

* View status: page publication status, article count and publication status
* Create and add a new page
* Open and edit a page
* View Articles
* Remove a page reference (will not delete the page, only remove the reference from this issue (data-record)
* Disable / enable a page reference for this issue (data-record)
* Change order of pages

{{< img src="./images/li-issue-management-view-articles.png" alt="Issue management view articles" >}}

See articles of the selected page.

{{< img src="./images/li-issue-management-remove.png" alt="Issue management remove page" >}}

Removing a page reference has to be confirmed in a second state, to prevent accidental removal.

**Storage Format**

```js
{
  "$ref": "documents",
  "references": [
    {
      "id": "359",
      "inactive": true
    },
    {
      "id": "358"
    }
  ]
}
```

**Project Config**

```js
metadata: [{
  handle: 'pages',
  type: 'li-issue-management',
  ui: {
    config: {
      documentCreationFlows: [{
        useDocumentCreationFlow: 'digitaleAusgabePage' // document creation flow function to call, when the "add page" button is clicked - see https://docs.livingdocs.io/guides/editor/document-creation-flow/#goal
      }]
    }
  }
}]
```

## li-imatrics-nlp-tags
**Storage Format**:
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

**Storage Format**: `<Integer>`\
**Default UI**: number input (`liMetaIntegerForm`)\
**UI**: Renders a number input. No UI is rendered if the `handle` is `lastProofreadRevision`.

**Project Config**
```js
metadata: [
  {
    handle: 'integer',
    type: 'li-integer',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      minValue: 1,                             // optional
      maxValue: 50                             // optional
    },
    ui: {
      label: 'foo',                   // optional, takes camelized name otherwise
      config: {
        placeholder: 'bar',           // optional, takes camelized name otherwise
        readOnly: true,               // optional, default: false
      }
    }
  }
]
```

## li-language

When adding `li-language`, it allows a user to translate articles and pages into different languages. Additionally you need to enable [translationWorkflow and requiredOnCreation]({{< ref "/reference-docs/project-config/settings" >}}).

Data Records also support translations, but need to add the metadata plugin [li-metadata-translations]({{< ref "/reference-docs/document/metadata/metadata-plugin-list#li-metadata-translations" >}}).


**Storage Format**:
```js
{
  locale: <String>,
  label: <String>,
  groupId: <String>
}
```
**Default UI**: no UI\
**Project Config**
```js
metadata: [
  {
    handle: 'language',
    type: 'li-language'
  }
]
```

## li-metadata-translations

When adding `li-metadata-translations`, it allows a user to translate metadata into different languages. Metadata translations are supported for the Media Library and Data Records.
- Guide: [Metadata Translations for Data Records]({{< ref "/guides/editor/metadata-translations" >}})
- Guide: [Metadata Translations for Media Library]({{< ref "/guides/media-library/media-library-setup" >}})

**Storage Format**: `{locale: <String>}`\
**Default UI**: translation UI
![image](https://user-images.githubusercontent.com/172394/157072134-5d2be902-3416-4ab3-8047-eb74760b6b5a.png)

**Project Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [
  {
    handle: 'language',
    type: 'li-metadata-translations',
    ui: {
      component: 'liMetaSelectForm',
      service: 'languageSelection'
    }
  }
]
```

## li-named-crops
**Storage Format**:
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
**Storage Format**: `[<Number>]`\
**Default UI**: input for multiple numbers (`liMetaNumericList`)

{{< img src="./li-numeric-list-example.png" alt="Numeric List Example" >}}

**Project Config**

```js
metadata: [
  {
    handle: 'otherIds',
    type: 'li-numeric-list',
    config: {
      // common
      required: true,                                   // optional, default: false
      requiredErrorMessage: 'Custom required message',  // optional
      // specific
      maxItems: 5,                                      // optional
    },
    ui: {
      label: 'foo',                   // optional, takes camelized name otherwise
      config: {
        placeholder: 'bar',           // optional, takes capitalized handle name otherwise
        readOnly: true                // optional, default: false
      }
    }
  }
]
```

## li-poster-image
**Storage Format**:
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
**Storage Format**: `<ISO8601 String>`\
**Default UI**: date/time input (`liMetaDatetimeForm`)

## li-reference-list
**Storage Format**:
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

A `li-reference` metadata field shows a reference to another document. To select a document one gets provided a Document Selection Modal.
If you don't want to use the `prefillAuthor` property, use [li-document-reference](#li-document-reference).

**Storage Format**:
```js
{
  $ref: 'document',
  reference: {
    id: <String>
  }
}
```
**Default UI**: Document Selection (Dialog) (`liMetaReferenceForm`)

![image](https://user-images.githubusercontent.com/172394/164621716-d7dc9fb7-bd6f-4dd5-bc7b-157edd327c34.png)

**Project Config**
```js
metadata: [
  {
    handle: 'reference',
    type: 'li-reference',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      documentType: 'data-record',             // optional
      contentType: 'author',                   // optional
      prefillAuthor: true                      // optional, default: false
      published: true,                         // optional, shorthand for publication displayFilter, default: false
    },
    ui: {
      label: 'foo',                            // optional, takes camelized name otherwise
      component: 'liMetaReferenceForm',
      config: {
        displayFilters: ['timeRange']
      }
    }
  }
]
```

References:
* [Display Filters]({{< ref "/reference-docs/editor-extensions/editor-configuration/display-filter" >}})


## li-retresco
**Storage Format**:
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
**Storage Format**: Array of Strings\
**Default UI**: Multiselect

Needs a `dataProvider` to work.

**Project Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [
  {
    handle: 'myStringList',
    type: 'li-string-list',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      dataProvider: { // required
        // Option 1 - list of items
        type: 'labelValuePair',
        items: [
          {label: 'Item A', value: 'a'},
          {label: 'Item B', value: 'b', isDefault: true}, // isDefault sets the value if document opened the first time
          {label: 'Item C', value: 'c'}
        ]
        // Option 2 - DataSource
        dataSource: 'labelValuePairDataSource'
      }
    },
    ui: {
      label: 'foo', // optional, takes camelized name otherwise
      config: {
        readOnly: true, // optional, default: false
      }
    }
  }
]
```

## li-target-length
**Storage Format**: `{characters: <Number>}`\
**Default UI**: Number input (`LiMetaTargetLengthForm`)

Doesn't work if the editor config `metadata.useAngularBasedFormRendering` is `true`.

**Project Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [
  {
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
  }
]
```

## li-text
**Storage Format**: String\
**Default UI**: text input, textarea, select\
**UI**:
  * Renders a select element if a `dataProvider` is configured
  * With `release-2022-09`: Renders an autogrowing reasonably sized textarea otherwise
  * Before `release-2022-09`: Renders a textarea if `ui.component` is set to `LiMetaFormTextarea`
  * Before `release-2022-09`: Renders a text input otherwise {{< img src="./images/max-length.png" >}}

**Project Config**
```js
metadata: [
  {
    handle: 'title',
    type: 'li-text',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      minLength: 100,                          // optional, added in release-2022-09
      maxLength: 200,                          // optional
      recommendedMinLength: 110,               // optional, added in release-2022-09
      recommendedMaxLength: 150,               // optional, added in release-2022-09
      allowNewlines: false                     // default: undefined, added in release-2022-09, validated if set. Effect on ui: newlines are stripped uf not true and ui.config.rows is undefined and ui.component is not liMetaTextareaForm
      useAsTitle: true,                        // default: false, synchronises the value with document.title if true
      translatable: true,                      // optional, default: false, translations are only supported for data-record and mediaLibrary
      dataProvider: {                          // optional
        // Option 1 - list of items
        type: 'labelValuePair',
        items: [
          {label: 'Item A', value: 'a'},
          {label: 'Item B', value: 'b', isDefault: true}, // isDefault sets the value if document opened the first time
          {label: 'Item C', value: 'c'}
        ]
        // Option 2 - DataSource
        dataSource: 'labelValuePairDataSource'
      }
    },
    ui: {
      label: 'foo',                   // optional, takes camelized name otherwise
      config: {
        placeholder: 'bar',           // optional, takes camelized name otherwise
        readOnly: true,               // optional, default: false
        rows: 10                      // optional, only applicable for LiMetaFormTextarea, integer, 5 by default
      }
    }
  }
]
```

## li-tree

{{< added-in release-2022-09 >}}

The plugin `li-tree` lets you set up a tree with items of the 3 possible types `group`, `link`, `document`.
- group -> a structural item without a link, just a label
- link -> link to an external URL
- document -> link to another Livingdocs document

**Storage Format**
```js
// schweiz -> link
//   zürich -> link
//   bern -> document
// deutschland -> group
//   hamburg -> link
//   berlin -> document
[
  {
    id: 'menu-schweiz',
    label: 'Schweiz',
    type: 'link',
    href: '/schweiz',
    items: [
      {
        id: 'menu-zuerich',
        label: 'Zürich',
        type: 'link',
        href: '/zuerich'
      },
      {
        id: 'menu-bern',
        label: 'Bern',
        type: 'document',
        reference: {
          id: '42'
        }
      }
    ]
  },
  {
    id: 'menu-deutschland',
    label: 'Deutschland',
    type: 'group',
    items: [
      {
        id: 'menu-hamburg',
        label: 'Hamburg',
        type: 'link',
        href: '/hamburg'
      },
      {
        id: 'menu-berlin',
        label: 'Berlin',
        type: 'document',
        reference: {
          id: '991'
        }
      }
    ]
  }
]
```
**Default UI**: tree\
**UI**: The main view lets you structure the menu. The detail let's you edit one menu entry\
**Project Config**
```js
metadata: [
  {
    handle: 'tree',
    type: 'li-tree',
    config: {
      // common
      hideFromForm: false,                          // optional, default: false
      required: true,                               // optional, default: false
      requiredErrorMessage: 'Provide a value',      // optional
      // specific
      maxDepth: 3,                                  // default: undefined | tree depth
      allowedTypes: ['group', 'document', 'link'],  // default: ['group', 'document', 'link']

      // settings for document link
      document: {
        contentType: ['regular'],                   // default: all   | only be able to link contentType 'regular' | string or array of strings
        published: true                             // default: false | only be able to link published document
      }
    },
    ui: {
      label: 'foo',                                 // optional, takes camelized name otherwise
      config: {
        readOnly: true,                             // optional, default: false

        document: {                                 // define a Dashboard with filters
          useDashboard: 'my-dashboard',             //   reference to a custom dashboard
          baseFilters: [],                          //   https://docs.livingdocs.io/reference-docs/editor-extensions/editor-configuration/base-filter/
          displayFilters: []                        //   https://docs.livingdocs.io/reference-docs/editor-extensions/editor-configuration/display-filter/
        }
      }
    }
  }
]
```

## li-transcoding-state
**Storage Format**:
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
**Default UI**: UI to trigger transcodings, see progress and the result in the end

## li-video-reference

{{< added-in release-2022-03 >}}

A `li-video-reference` metadata field shows a list of video references where one entry can be selected. Optionally a customer poster image can be defined. `li-video-reference` is only supported property in includes.

**Storage Format**:
```js
{
  $ref: 'video',
  reference: {
    id: <String>,
    posterImageId: <String>
  }
}
```
**Default UI**: Video & Poster Image Upload/Media Library Selection

![image](https://user-images.githubusercontent.com/172394/163946930-329405af-f511-40fc-ab8b-e5642702bdea.png)

**Config**
```js
paramsSchema: [
  {
    handle: 'video',
    type: 'li-video-reference',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      translatable: true,                      // optional, default: false, translations are only supported for data-record and mediaLibrary
    },
    ui: {
      config: {
        posterImageUploadMediaType: 'image2',  // optional, default: 'image'
      }
    }
  }
]
```




# Legacy Docs


## Image

ContentType metadata config:
```js
metadata: [
  {
    handle: 'teaserImage',
    type: 'li-image',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      imageRatios: ['16:9', '1:1']
    },
    ui: {
      component: 'liMetaImageForm'
    }
  }
]
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
metadata: [
  {
    ...,
    ui: {
      component: 'liMetaDatetimeForm',
      service: 'customServicePlugin',  // optional
      label: 'foo'                     // optional, takes camelized name otherwise
    }
  }
]
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

## Reference List

Stores an array of multiple document ids, not to be confused with [List Reference]({{< ref "#list-reference" >}}).

{{< img src="./li-reference-list-example.png" alt="Reference List Example" >}}

ContentType metadata config for a reference list:
```js
metadata: [
  {
    ...,
    type: 'li-reference-list',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
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
  }
]
```

## List Reference

Stores a single id of a list, not to be confused with [Reference List]({{< ref "#reference-list" >}}).

{{< img src="./li-list-reference-example.png" alt="List Reference Example" >}}

Config for a list reference:
```js
metadata: [
  {
    ...,
    type: 'li-list-reference',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      enableCount: true,      // enable UI configuration of number of articles (default: false)
      defaultCount: 3,        // number of articles shown by default (default: 3)
      minCount: 2,            // minimum number of articles
      maxCount: 6,            // maximum number of articles
      enableListEditing: true // allow to create/edit list inline (default: false)
    }
  }
]
```
