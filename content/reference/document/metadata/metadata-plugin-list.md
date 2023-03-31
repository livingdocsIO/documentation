---
title: Metadata Plugin List
menus:
  reference:
    parent: Metadata
renderTOC: false
---

## Overview

This overview contains a list of all metadata plugins provided by Livingdocs.
Go to [Metadata]({{< ref "/reference/document/metadata" >}}) to get an overview of the metadata concept.
You can [create your own plugins]({{< ref "/guides/documents/metadata/metadata-examples" >}}) in the downstream.

| Metadata Plugin                                                  | Metadata Plugin Type            | Description                                    | Usage (D = Document, M = Media Library Entries, T = Table Dashboard, I = Includes, F = Display Filters) | Default UI                                                 |
| ---------------------------------------------------------------- | ------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Boolean](#li-boolean)                                           | li-boolean                      | Boolean                                        | D, M, T, I                                                                                              | checkbox                                                   |
| [Buy-In](#li-buy-in)                                             | li-buy-in                       | Buy-in workflow timeline and actions           | D, T                                                                                                    | Placeholder for initial status                             |
| [Color](#li-color)                                               | li-color                        | Color Code                                     | D, M, T, I                                                                                              | text                                                       |
| [Category](#li-category)                                         | li-category                     | category                                       | D, T, F                                                                                                 | select                                                     |
| [Date](#li-date)                                                 | li-date                         | Date                                           | D, M, I                                                                                                 | date input                                                 |
| [Date/Time validity](#li-datetime-validity)                      | li-datetime-validity            | Date                                           | M                                                                                                       | 2 date/time inputs                                         |
| [Date/Time](#li-datetime)                                        | li-datetime                     | Date                                           | D, M, I                                                                                                 | date/time input                                            |
| [Dependencies](#li-dependencies)                                 | li-dependencies                 | Livingdocs framework dependencies definition   | D                                                                                                       | no UI                                                      |
| [Desk-Net Integration](#li-desknet-integration)                  | li-desknet-integration          | Desk-Net Integration                           | D, T                                                                                                    | Link to Desk-Net distribution entry                        |
| [Desk-Net Schedule](#li-desknet-schedule)                        | li-desknet-schedule             | Desk-Net Schedule                              | D                                                                                                       | Platform/category select and date input                    |
| [Document Reference](#li-document-reference)                     | li-document-reference           | A reference to another document                | D, M, T, I                                                                                              | document selection (dialog)                                |
| [Document References](#li-document-references)                   | li-document-references          | A list of references to other documents        | D, M, I                                                                                                 | document selection (dialog)                                |
| [Enum](#li-enum)                                                 | li-enum                         | string from static list, validated on publish  | D, M, T, I                                                                                              | select                                                     |
| [Estimated Time Of Completion](#li-estimated-time-of-completion) | li-estimated-time-of-completion | Estimated time of completion of a document     | D                                                                                                       | buttons to select Estimated Time of Completion from        |
| [External Id](#li-external-id)                                   | li-external-id                  | id marker for an external system               | D, M, T                                                                                                 | select                                                     |
| [Document Target Length](#li-target-length)                      | li-target-length                | Target length in characters for a document     | D                                                                                                       | number input or length slider                              |
| [Google Vision](#li-google-vision)                               | li-google-vision                | Google Vision Autotagging for Images           | M                                                                                                       | specialized UI, no config possible                         |
| [Image](#li-image)                                               | li-image                        | Images                                         | D, M                                                                                                    | Image selection/upload/crops                               |
| [Issue Management](#li-issue-management)                         | li-issue-management             | Issue Management                               | D                                                                                                       | List of linked documents with actions to manage references |
| [iMatrics](#li-imatrics-nlp-tags)                                | li-imatrics-nlp-tags            | iMatrics tag management                        | D                                                                                                       | manage tags                                                |
| [Integer](#li-integer)                                           | li-integer                      | Integer                                        | D, M, F, I                                                                                              | number input                                               |
| [Language](#li-language)                                         | li-language                     | Language                                       | D                                                                                                       | no Ui                                                      |
| [Metadata Translations](#li-metadata-translations)               | li-metadata-translations        | Enable metadata translations                   | D (data record only), M                                                                                 | translation UI                                             |
| [Named Crops](#li-named-crops)                                   | li-named-crops                  | Default Crops for Images                       | M                                                                                                       | crop management UI                                         |
| [Numeric List](#li-numeric-list)                                 | li-numeric-list                 | Array of Numbers                               | D, M, I                                                                                                 | multi number input                                         |
| [Poster Image](#li-poster-image)                                 | li-poster-image                 | Poster Image for Videos                        | M (Video)                                                                                               | image selection                                            |
| [Publish Date](#li-publish-date)                                 | li-publish-date                 | Holds first publication date, user editable    | D                                                                                                       | date/time input                                            |
| [Push Messages](#li-push-messages)                               | li-push-messages                | Manages creation and storage of push messages  | D, T                                                                                                    | Table Dashboard button launches dialog with input form     |
| [Reference List](#li-reference-list)                             | li-reference-list               | Multiple references to other documents         | D, M                                                                                                    | document selection (dialog)                                |
| [Reference](#li-reference)                                       | li-reference                    | A reference to another document                | D, M                                                                                                    | document selection (dialog)                                |
| [Retresco](#li-retresco)                                         | li-retresco                     | Retresco tag management                        | D                                                                                                       | manage tags                                                |
| [String List](#li-string-list)                                   | li-string-list                  | Array of Strings                               | D, M, T, I                                                                                              | multiselect                                                |
| [String](#li-text)                                               | li-text                         | String                                         | D, M, T, I                                                                                              | text, textarea, select                                     |
| [Team](#li-team)                                                 | li-team                         | Show user avatars associated with the document | D, T                                                                                                    | team in Metadata Form or dashboard                         |
| [Tree](#li-tree)                                                 | li-tree                         | Tree with link, document, group                | D                                                                                                       | tree                                                       |
| [Transcoding State](#li-transcoding-state)                       | li-transcoding-state            | State of external transcoding job              | M (Video)                                                                                               | trigger transcoding, current job progress, result          |
| [Video Reference](#li-video-reference)                           | li-video-reference              | A reference to a video (and a poster image)    | D, M, I                                                                                                 | Upload/Media Library Picker for a Video and a Poster Image |

## li-boolean

A simple checkbox which you can turn on/off.

If you want to have the field checked on during document creation, you can do that via [defaultMetadata]({{< ref "/reference/project-config/content-types#default-metadata" >}}) in your projectConfig.

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

## li-buy-in

{{< added-in release-2023-03 block >}}

**Notice**: The li-buy-in plugin is only available if the Planning System is enabled.

As part of the Planning System, users want to ask for buy-in when writing an article or pitching an idea.
Other users can express their backing by accepting a buy-in request.
The presence, absence or status of a buy-in request has no effect on permissions and is just a communication tool.

- A buy-in request is closed after it was accepted or declined by one other person
- Users cannot respond to their own buy-in requests
- All other users with read and write permissions to the document can respond to a buy-in request
- Buy-in requests can be answered by returning them to the creator, e.g. to clarify questions before accepting the request 
- Closed buy-in requests can be reopened an unlimited number of times
- Buy-in requests can be answered directly from a Table Dashboard
- Expired buy-in requests remain in their state, but may disappear from Table Dashboards (depends on config)
- All own actions can be undone if no other action has occurred afterwards
- All own comments can be edited, but will be marked as such

**Storage Format**:
```js
{
  workflow: {
    status: <String>, // 'initial' | 'requested' | 'returned' | 'closed' | 'reopened'
    userId: <Integer>,
    expiryDate: <ISO8601 String>, // only set once requested
    timeline: [{
      eventType: <String>, // 'BuyInRequest' | 'BuyInReRequest' | 'BuyInAcceptance' | 'BuyInDeclining' | 'BuyInReturn' | 'BuyInReopen'
      userId: <Integer>,
      createdAt: <ISO8601 String>,
      updatedAt: <ISO8601 String>, // only set when edited
      comment: <String> // optional
    }]
  }
}
```

**UI:**

The li-buy-in plugin in initial status:

{{< img src="./images/li-buy-in-initial.png" alt="A screenshot of the li-buy-in plugin showing an empty state message, a comment field and a button to ask for buy-in." >}}

The li-buy-in plugin in closed status:

{{< img src="./images/li-buy-in-closed.png" alt="A screenshot of the li-buy-in plugin showing the buy-in as accepted along with a comment and a button to reopen the request." >}}

The li-buy-in plugin as a Table Dashboard cell in requested status:

{{< img src="./images/li-buy-in-dashboard.png" alt="A screenshot of a Table Dashboard where users can see the buy-in request details and can directly respond." >}}

**Project Config**

**Notice**: Plugin needs to be configured with same handle on all relevant content types, otherwise data is lost
when transforming content type, e.g. from pitch to article.

[Content Type]({{< ref "/reference/project-config/content-types" >}}) config:
```js
metadata: [
  {
    type: 'li-buy-in',
    handle: 'buy-in',
    ui: {
      label: 'Buy-In'
    },
    config: {
      defaultExpiryDays: 5, // The default number of days before the request expires. Users can pick another date.
      index: true // Required for filters on Table Dashboard
    },
  }
]
```

[Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) config:
```js
baseFilters: [
  {type: 'buyInNotExpired', key: 'buyIn'}, // Only showing documents with non-expired buy-in requests
  {type: 'metadata', key: 'buyIn.workflow.status', value: 'requested'} // Additional status filter
],
columns: [
  {
    label: 'Buy-In',
    minWidth: 400, // Recommended min. width
    growFactor: 0,
    priority: 1,
    metadataPropertyName: 'buyIn',
    editable: true
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
      contentType: 'my-content-type',          // optional, filters the document selection
      published: true,                         // optional, shorthand for publication displayFilter, default: false
    },
    ui: {
      label: 'foo',                  // optional, takes camelized name otherwise
      config: {
        style: 'default',            // optional, defaults to 'default'. Other options: 'teaser'
        useDashboard: '',            // optional, reference to a custom dashboard
        baseFilters: [],             // optional, invisible filters and applied to every search (including the default result list)
        displayFilters: [],          // optional, filters that the user can set in the UI (below the search input)
      }
    }
  }
]
```

References:
* [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter" >}})
* [Base Filters]({{< ref "/customising/advanced/editor-configuration/base-filter" >}})

## li-document-references

{{< added-in release-2022-11 >}}

A `li-document-references` metadata field is a list of references to other documents. A Document Selection Dialog is shown, based on shorthand queries and `useDashboard` to select documents.

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

![image](https://user-images.githubusercontent.com/172394/163945540-02557891-ee21-42c5-a03e-4bfb1723e228.png)

**Project Config**
```js
// contentType[].metadata / mediaType[].metadata
metadata: [
  {
    handle: 'references',
    type: 'li-document-references',
    config: {
      // common
      hideFromForm: false,                     // optional, default: false
      required: true,                          // optional, default: false
      requiredErrorMessage: 'Provide a value', // optional
      // specific
      documentType: 'article',                 // optional, one of article, page, data-record
      contentType: 'my-content-type',          // optional, filters the document selection
      published: true,                         // optional, shorthand for publication baseFilter, default: false
    },
    ui: {
      label: 'foo',                  // optional, takes camelized name otherwise
      config: {
        // style: 'default' -> default for metadata
        // style: 'teaser' -> default for include paramsSchema
        style: 'default',
        useDashboard: '',            // optional, reference to a custom dashboard
        baseFilters: [],             // optional, invisible filters and applied to every search (including the default result list)
        displayFilters: [],          // optional, filters that the user can set in the UI (below the search input)
      }
    }
  }
]
```

References:
* [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter" >}})
* [Base Filters]({{< ref "/customising/advanced/editor-configuration/base-filter" >}})


## li-estimated-time-of-completion

{{< added-in release-2023-03 block >}}

The Estimated Time of Completion Metadata Plugin `li-estimated-time-of-completion` enables a user to set an estimated time of completion for the current document. The plugin is available in the Metadata Form.

**Notice**: The li-estimated-time-of-completion plugin is only available if the Planning System is enabled.

**Storage Format**:

```js
{
  date: <ISO8601 String>,   // for a single date
  after: <ISO8601 String>,  // for a date range - start date
  before: <ISO8601 String>, // for a date range - end date
  precision: <String>       // enum: ['date', 'datetime'] - is the date above saved as date or datetime
}
```

**Default UI**

Metadata Form:

{{< img src="./images/li-estimated-time-of-completion-buttons.png" alt="Estimated Time of Completion Metadata Plugin buttons" >}}
{{< img src="./images/li-estimated-time-of-completion-single-date.png" alt="Estimated Time of Completion Metadata Plugin single date" >}}
{{< img src="./images/li-estimated-time-of-completion-date-range.png" alt="Estimated Time of Completion Metadata Plugin date range" >}}

**Project Config**

[Content Type]({{< ref "/reference/project-config/content-types" >}}) config:

```js
metadata: [
  {
    handle: 'estimatedTimeOfCompletion',
    type: 'li-estimated-time-of-completion',
    config: {
      // common
      hideFromForm: false,                      // optional, default: false
      required: false,                          // optional, default: false
      requiredErrorMessage: 'Provide a value',  // optional
    },
    ui: {
      label: 'Ready for publication',           // optional, takes camelized name otherwise
      config: {
        readOnly: false,                        // optional, default: false
      }
    }
  }
]
```

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
        placeholder: 'foo'           // optional, takes camelized name otherwise
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
  originalUrl: <String>,
  url: <String>,
  mediaId: <String>,
  height: <Integer>,
  width: <Integer>,
  mimeType: <String>,
  imageService: <String>,
  crops: [
    <Object>
  ],
  focalPoint: {
    x: <Integer>,
    y: <Integer>
  }
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
**Default UI**: number input\
**UI**:
  * Renders a number input.
  * No UI is rendered if the `handle` is `lastProofreadRevision`.
  * With `release-2023-03`: Renders a select element if a `dataProvider` is configured

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
      maxValue: 50,                             // optional
      translatable: true,                      // optional, default: false, translations are only supported for data-record and mediaLibrary
      dataProvider: {                          // optional, added in release-2023-03
        // Option 1 - list of items
        type: 'labelValuePair',
        items: [
          {label: 'A', value: 1},
          {label: 'B', value: 2, isDefault: true}, // isDefault sets the value if document opened the first time
          {label: 'C', value: 3}
        ]
        // Option 2 - DataSource
        dataSource: 'labelValuePairDataSource'
      }
    },
    ui: {
      label: 'foo',                   // optional, takes camelized name otherwise
      config: {
        placeholder: 'bar',           // optional, takes camelized name otherwise
        readOnly: true                // optional, default: false
      }
    }
  }
]
```

## li-language

When adding `li-language`, it allows a user to translate articles and pages into different languages. Additionally you need to enable [translationWorkflow and requiredOnCreation]({{< ref "/reference/project-config/settings" >}}).

Data Records also support translations, but need to add the metadata plugin [li-metadata-translations]({{< ref "/reference/document/metadata/metadata-plugin-list#li-metadata-translations" >}}).


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
  ],
  focalPoint: {
    x: <Integer>,
    y: <Integer>
  }
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

## li-push-messages

{{< added-in release-2022-11 block >}}

As an alternative to the existing [Push Notifications]({{< ref "/guides/editor/push-notifications" >}}) feature,
we introduced the more flexible `li-push-messages` metadata plugin.

Use Push **Messages** if you like to send messages directly from Table Dashboards and if you need
a flexible message format.

Use Push **Notifications** if you need to send notifications directly from the Editor Toolbar or if you'd like
to use a predefined push service like Google Firebase.

The two features may be merged in the future, but for now they co-exist independently.

|                | Push Notifications                        | Push Messages           |
|----------------|-------------------------------------------|-------------------------|
| Accessed from  | Editor Toolbar Action                     | Table Dashboards        |
| Push Services  | Google Firebase, Urban airship, Ethinking | Custom Implementation   |
| Message Format | Fixed (Message + Topic)                   | Dynamic (Params Schema) |

**Notice**: Push Messages can only be sent on published documents. If the document is not published, the Table Dashboard won't show the button.

**Storage Format**:
```js
{
  messages: [{
    id: <String>,
    sentAt: <ISO8601 String>,
    userId: <Number>,
    params: <Object>
  }]
}
```

**Default UI**: Push messages dialog launched from Table Dashboard

{{< img src="./images/li-push-messages-dashboard.png" alt="Push Messages on Table Dashboard" >}}

{{< img src="./images/li-push-messages-dialog.png" alt="Push Messages Dialog Form" >}}


**Project Config**

[Content Type]({{< ref "/reference/project-config/content-types" >}}) config:
```js
metadata: [
  {
    type: 'li-push-messages',
    handle: 'myPushMessages',             // Name of the metadata field
    ui: {
      label: 'Push Me'                    // Optional, controls button label on Table Dashboards
    },
    config: {
      paramsSchema: [                     // Defines schema of message object
        {
          type: 'li-text',                // One of: li-text, li-boolean, li-integer, li-date, li-datetime
          handle: 'messageText',          // Property name on message object
          config: {                       // Config based on type (li-text here)
            required: true,
            maxLength: 120,
            recommendedMaxLength: 100
          }
        }
      ],
      handlerName: 'myPushMessageHandler' // Optional, name of the registered function to send the message
    }
  }
]
```

[Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) config:
```js
columns: [
  ...,
  {
    label: 'My push messages',
    metadataPropertyName: 'myPushMessages',
    minWidth: 70,
    growFactor: 1,
    priority: 1
  }
]
```

**Custom function**

The `li-push-messages` metadata plugin handles everything regarding the user interface and saves the messages to the database.
But it does not actually send push messages anywhere. Instead, it lets you register your own function to do that job.

- Register Push Message handler after server initialization
- Handler function can be `async`, returned value will be ignored
- Push Message will not be saved if handler throws an error

Example configuration from [Livingdocs server boilerplate](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/master/app/hooks/push-messages-hooks.js):

```js
module.exports = function (liServer) {
  // Register function after server initialization
  liServer.registerInitializedHook(async function () {

    const log = liServer.log.child({ns: 'push-messages-hooks'})
    const pushMessagesApi = liServer.features.api('li-documents').pushMessages

    pushMessagesApi.registerPushMessageHandler({
      // Name must be unique across projects
      name: 'myPushMessageHandler',

      /**
       * @async
       * @param {object} args
       * @param {object} args.projectConfig
       * @param {number} args.userId
       * @param {string} args.documentId
       * @param {string} args.metadataPropertyName
       * @param {string} args.pushMessageId - Id the push message will have
       * @param {object} args.params - The message object, following paramsSchema
       * @return {Promise<void>}
       */
      async handler (args) {
        log.info(
          `Handling push message for metadata property name "${args.metadataPropertyName}"`
        )
      }
    })
  })
}
```

## li-reference-list

With `release-2022-11` this is superseeded by `li-document-references`.

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
      published: true,                         // optional, shorthand for publication baseFilter, default: false
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
* [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter" >}})


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
        acceptedCharacterDifference: 20, // Range above and below `value` considered accepted
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

**Default UI**: Difference, Total Characters, Target Range, Characters in Focussed Component

{{< img src="./images/li-target-length.png" alt="Target Length Indicator" >}}

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

## li-team

{{< added-in release-2023-03 block >}}

The team metadata plugin `li-team` enables a user to associate other users with the current document by adding or removing them from the teams plugin. Additionally one user can be marked as the owner. The owner can not be removed from the team.
The plugin is available in the Metadata Form and the Table Dashboard.

**Notice**: The li-team plugin is only available if the Planning System is enabled.

**Storage Format**:

```js
{
  // 'id' and '*By' keys are always user ids
  owner: {
    id: <Number>,
    assignedAt: <ISO8601 String>,
    assignedBy: <Number>
  },
  activeUsers: {
    id: <Number>,
    addedAt: <ISO8601 String>,
    addedBy: <Number>
  },
  inactiveUsers: ms.arrayOf(ms.strictObj({
    id: <Number>,
    addedAt: <ISO8601 String>,
    addedBy: <Number>,
    removedAt: <ISO8601 String>,
    removedBy: <Number>'
  }))
}
```

**Default UI**

Metadata Form:

{{< img src="./images/li-team-meta.png" alt="Team plugin in the meta data" >}}

Dashboard:

{{< img src="./images/li-team-dashboard.png" alt="Team plugin in the Table Dashboard" >}}

**Project Config**

[Content Type]({{< ref "/reference/project-config/content-types" >}}) config:

```js
metadata: [
  {
    handle: 'myTeam',
    type: 'li-team',
    config: {
      // common
      hideFromForm: false,                      // optional, default: false
      required: false,                          // optional, default: false
      requiredErrorMessage: 'Provide a value',  // optional
    },
    ui: {
      label: 'My Team',                         // optional, takes camelized name otherwise
      config: {
        readOnly: false,                        // optional, default: false
      }
    }
  }
]
```

[Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) config:

```js
columns: [
  ...,
  {
    label: 'Team',
    metadataPropertyName: 'myTeam',
    editable: true,
    minWidth: 200,
    growFactor: 1,
    priority: 2
  }
]
```

## li-tree

{{< added-in release-2022-09 >}}

The plugin `li-tree` lets you set up a tree with items of the 3 possible types `group`, `link`, `document`.

* group -> a structural item without a link, just a label
* link -> link to an external URL
* document -> link to another Livingdocs document

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
          baseFilters: [],                          //   https://docs.livingdocs.io/customising/advanced/editor-configuration/base-filter/
          displayFilters: []                        //   https://docs.livingdocs.io/customising/advanced/editor-configuration/display-filter/
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
  * With `release-2022-11`: Renders a default UI and no longer accepts a `ui.component` option

**Project Config**
```js
metadata: [
  {
    handle: 'transcoding',
    type: 'li-transcoding-state',
    ui: {
      label: 'My Transcoding'     // optional, takes "Transcoding State" otherwise
    }
  }
]
```
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
