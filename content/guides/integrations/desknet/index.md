---
title: Desk-Net Integration
description: Integrate Desk-Net with Livingdocs
weight: 1
---

[Desk-Net](https://desk-net.com) is a planning tool for publication processes. This feature, if set up properly, lets you easily connect your Desk-Net world to your Livingdocs universe. Here's a few things you can do:
- Create Livingdocs documents directly from Desk-Net.
- Sync publication status between the two domains.
- Exchange and sync any data that is relevant to your workflow.
- View Desk-Net story planning lists in Livingdocs

## Setup

### Prerequisites

- You should have a Desk-Net account and a set of valid API credentials to authorize Livingdocs to access the Desk-Net HTTP API.
- You should be somewhat familiar with the Desk-Net data entities (Stories, Publications, Platforms and so on). A technical overview can be found [here](https://api.desk-net.com).
- You should know about the different Livingdocs configuration levels/methods, namely the [project config]({{< ref "/reference/project-config" >}}) and the [content type config]({{< ref "/reference/project-config/content-types.md" >}})).
- You should be familiar with how to [set up custom metadata fields]({{< ref "/customising/server/metadata-plugins" >}}) for your content types.
- For local development, we strongly suggest you use:
   - some kind of http tunnel solution like [ngrok](https://ngrok.com). This is useful, when you want to redirect messages from Desk-Net to your local server.
   - a HTTP API client like [Postman](https://www.getpostman.com/). Very handy to explore the Desk-Net API. Certain configuration settings also need you to provide Desk-Net entity ID's, which are not easily (or not at all) accessible via the Desk-Net UI.

### Basic configuration

#### 1. Create a public API token

- Make sure you are in the project you want to connect with Desk-Net
- In the main project menu select "Project Admin"
- Then select "Api Clients" in the left menu
- Click the "Add API Client" button on the right
- Enter a descriptive name, provide permission for desk-net integration API access, and click the "Create" button
- The token will be displayed in the table, copy it and save it in a safe place, we will use it later. Please note that the token will not be displayed again after you leave the page

#### 2. Setup integration in Desk-Net

- Log into your Desk-Net account
- Click on the "Settings / Admin" icon in the top right and select "Platforms" from the menu that appears
- Click on the platform you want to connect with Livingdocs and go to the "Integrations" tab
- Click on the "Livingdocs / Forward Publishing" option
- Paste your token from Livingdocs into the "API secret" field
- Type any value into the "API user" field (it isn't used)
- Enter the path to your Livingdocs server's Desk-Net integration root enpoint into the "URL" field (e.g. https://example.com/api/v1/desknet-integration)
{{< img src="desknet-config.png" alt="Desk-Net Integration" >}}
- Click on "Test Connection" button to make sure Desk-Net can communicate with Livingdocs
- Optionally, select which publication statuses you would like to trigger updates to Livingdocs

#### 3. Enable the Desk-Net feature

In your main server config, enable the `desknet` feature by simply adding the following:

```js
{
  desknet: {
    enabled: true
  }
}
```

#### 4. Connect a Livingdocs project to Desk-Net

Add the following to the project config of the project you want to connect with Desk-Net:

```js
{
  desknet: {
    enabled: true,

    credentials: {
      clientId: '******',
      clientSecret: {
        // Use the "npx livingdocs-server secret-add" command.
        // clientSecret was a string in earlier releases.
        $secretRef: {
          name: '******'
        }
      }
    },

    // Optional. Default: "title". The path used to extract the title from the Desk-Net element.
    titlePath: '',

    publicationStatus: {
      // Optional. If this key is set to true, the publication status will be synced everytime
      // it is updated in Desk-Net. This basically allows you to publish Livingdocs documents
      // directly from Desk-Net. Whether that is desirable or not depends on your workflow.
      sync: false

      // Deprecated. The old way to calculate the publication status before the matchers were
      // introduced to the li-desknet-integration metadata plugin in {{< release "release-2022-07" >}}.
      publishedStatus: 5,
      unpublishedStatus: 1
    },

    contentTypes: {
      // The default content type to create in Livingdocs when a new story is created
      // (or reaches a trigger level) in Desk-Net.
      standard: 'regular',

      // Optional. These two settings can be used to describe a more sophisticated content type lookup.
      // By providing source path and a mapping object, we actually say this (see actual values):
      // If the Desk-Net element has a value at element.publication.type.name
      //    If this value is 'myType1', take content type 'page'
      //    Else If this value is 'myType2', take content type 'gallery'
      // Else take the standard content type
      source: 'publication.type.name',
      mapping: [
        {source: 'myType1', target: 'page'},
        {source: 'myType2', target: 'gallery'}
      ]
    }
  }
}
```

For more information on how to use secrets, please check [Project Secrets](../../setup/project-secrets).

#### 5. Add metadata plugin to content types

Add the `li-desknet-integration` metadata plugin to all content types that can be created using the "contentTypes" configuration in the previous step:

```js
{
  handle: 'article',
  documentType: 'article',
  // ...
  metadata: [
    // ...
    {
      handle: 'desknet',
      type: 'li-desknet-integration',

      // The config can be used if you intend to keep Desk-Net's publication status up-to-date
      // with the status of the document in Livingdocs. It is required if you intend to publish a
      // document in Livingdocs when updating the publication status in Desk-Net.
      config: {
        publicationStatus: {
          // Optional. The fallback is used when no matcher condition is met for a document.
          fallbackPublicationStatusId: 3,

          // Matchers provide a way to synchronise the state of a Livingdocs document to Desk-Net.
          // You can use publication, task, or metadata matchers to calculate a Desk-Net
          // publication status id value. You can find the publicationStatusId value using the
          // Desk-Net API, or by inspecting network requests in the Statuses page in Desk-Net.
          // The order of matchers is important. The array is iterated through from first to last,
          // with the publicationStatusId taken from the earliest document state match.
          matchers: [
            {
              // Defining a publicationStatusId for the published status is required if you intend to
              // publish a document in Livingdocs when updating the publication status in Desk-Net.
              type: 'publication',
              value: 'published',
              publicationStatusId: 5
            },
            {
              type: 'task',
              taskName: 'proofreading',
              value: 'completed', // The "value" of a task can be requested, accepted, or completed
              publicationStatusId: 25912
            },
            {
              type: 'metadata',
              propertyName: 'my-custom-plugin.status', // uses lodash.get()
              value: 'in-progress', // compares with lodash.isEqual()
              publicationStatusId: 123
            }
          ]
        }
      },

      // Only required if you intend to display the current publication status in a table dashboard cell
      ui: {
        config: {
          publicationStatus: {
            labels: [
              {
                publicationStatusId: 5,
                label: 'Published',
                // SVG icons can be minimised and optimised using https://jakearchibald.github.io/svgomg/
                // The SVG icon should have a viewBox property to scale properly.
                icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 15 17"><path class="colour" d="M.333 1.447v14.334h14.334V1.447H.333zM13.11 14.224H1.891V3.004h11.22v11.22z"/><circle class="colour" cx="7.5" cy="8.749" r="2.042"/></svg>',
                color: '#778397'
              },
              {
                publicationStatusId: 25912,
                label: 'Proofreading Completed',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 15 17"><path class="colour" d="M.042 15.778.05 1.445l4.091.003-.008 14.333zM9.537 15.781h-4.09l.008-14.334h4.09l-.008 14.334zM14.992 15.781H10.9l.009-14.334H15l-.008 14.334z"/></svg>',
                color: '#b56eef'
              },
              {
                publicationStatusId: 123,
                label: 'In Progress',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 15 17"><path class="colour" d="M0 1.25v14.5h14.5V1.25H0zm5.901 12.208L1.767 9.05l1.208-1.13 2.921 3.116L12.3 4.158l1.211 1.129-7.61 8.171z"/></svg>',
                color: '#82e580'
              }
            ]
          }
        }
      }
    }
  ],

  // Optional
  desknet: {
    title: {
      // Defines if the document title should be synced on document update from
      // either way, livingdocs -> desknet or desknet -> livingdocs.
      // By default it is synced.
      sync: false
    }
  }
}
```

With all this in place, whenever we create a new story in Desk-Net that is assigned to the platform connected to Livingdocs, we'll have a Livingdocs document created and linked with the Desk-Net element entity that represents the story.

## Mapping Desk-Net values to Livingdocs document metadata

In many cases it is probably desirable to have a little more information about the connected Desk-Net entity on an article, than just merely the fact, that they're somewhat related.

As an example, let's say we want to achieve the following:
- We want to display the planned publication date from Desk-Net in a datetime form field on the «Publish» screen in the Livingdocs Editor.
- We want this field to be shown only for documents of content type `'regular'`.
- We want this field to update, whenever somebody changes the planned publication date in Desk-Net.
- We *don't* want this field to be editable in Livingdocs.
- The technical label for this field on the metadata should be `desknetPublicationDate` and the actual label should read «Desk-Net – Planned publication»

Let's do this, then!

### 1. Define a metadata plugin on the content type

Add the plugin to the settings of content type `'regular'`:

```js
{
  handle: 'regular',
  metadata: [
    {
      handle: 'desknetPublicationDate',
      type: 'li-datetime',
      ui: {
        config: {
          readOnly: true,
          label: 'Desk-Net – Planned publication'
        }
      }
    }
  ]
}
```

As mentioned before, we won't go further into how to set up metadata at this point, but you can read all about that [here]({{< ref "/reference/document/metadata" >}}).

### 2. Set up a mapping that defines how to translate from Desk-Net to Livingdocs

Again to the settings of content type `'regular'`, add the following:

```js
{
  handle: 'regular'
  desknet: {
    // A list of mapping objects. Each mapping object describes one metadata field.
    metadata: [
      {
        // The path to the value on the Desk-Net element
        source: 'publication.single.start.date',
        // The path to the Livingdocs metadata property
        target: 'metadata.desknetPublicationDate',

        // Optional. Enable or disable sync from Livingdocs to Desk-Net (only applies one-way).
        // Every time we publish or unpublish a document in Livingdocs we update the element on
        // Desk-Net. Setting sync to true will set the source property, with the value taken
        // from the target property of the Livingdocs document. Essentially, this is the
        // inverse of the logic used when creating or updating a document in Livingdocs. When
        // sync is false then the current Desk-Net value will be returned to Desk-Net.
        sync: false
      }
    ]
  }
}
```

And we're all set. From now on, whenever you create a new story on Desk-Net with a scheduled publication date or change the scheduled publication date on an existing story *and* the story at hand is assigned to a platform connected to Livingdocs, the metadata of the document will have an up-to-date property `desknetPublicationDate` with the date as value.

### What are the available Desk-Net properties?

When determining mapping results we analyze an enriched version of the result of [GetElement](https://api.desk-net.com/#api-Element-GetElement) on the Desk-Net API.

The following prefetches are already in place:

- `elementStatus` – [GetElementStatus](https://api.desk-net.com/#api-Element_status-GetElementStatus)
- `publications[].status` – [GetPublicationStatus](https://api.desk-net.com/#api-Publication_status-GetPublicationStatus)
- `publications[].category` – [GetCategory](https://api.desk-net.com/#api-Category-GetCategory)
- `publications[].platform` – [GetPlatform](https://api.desk-net.com/#api-Platform-GetPlatform)
- `publications[].type` – [GetType](https://api.desk-net.com/#api-Type-GetType)

Additionally, all elements have
- a property `publication` which always points at the one connected to the platformId set up in the current project config.
- a property `publications[]` which contains all publications, and at least one which is the same as the one at `publication`.

You can find a full example at [the end of this document](#full-desk-net-element-example).

### What are the available Livingdocs properties?

Everything in metadata. Nothing else. So whatever metadata plugins you have set up in your content type config, you can write to and read from them freely, as long as the data types correlate. If they don't, you probably want to use a transform function.

## Advanced mappings: Using transform functions

### Introduction

In cases where trivial source/target mappings simply don't cut it, you can write and register custom transform functions to handle the data translation between the entities.

There are two kinds of transform functions:
- *Import functions* handle incoming data from Desk-Net.
- *Export functions* handle data that should get sent to Desk-Net.

**Transform functions should always be asynchronous**

The import and export procedures are actually quite similar: They translate data from one domain to the other. But in our case, there are two peculiarities, that you should take note off:
- An an import function always gets resolved to a single corresponding metadata field. The return value must comply to the requirements of the related metadata plugin.
- An export function should always return an object of (possibly nested) key/value pairs. It should only contain keys accepted by Desk-Net.

This means that your import functions only ever resolve to a single field, while export functions can aggregate and return multiple keys.

### Registering and referencing transforms

Let's do another example:
- We want to display whether the Desk-Net story is also assigned to any platform with some occurrence of the word `'Print'` in its name.
- We want this field to be shown only for documents of content type `'regular'`.
- We want this field to be shown as a checkbox, so we're looking for a boolean value.
- We *don't* want this field to be editable in Livingdocs.
- The technical label for this field on the metadata should be `hasPrint` and the actual label should read «Desk-Net – Is planned for Print»

First, we have to write and register the transforms. As we have to register transforms before the server actually starts, but only after the application is properly up and running, we use a [hook]({{< ref "/customising/server/server-hooks" >}}) for that:

```js
liServer.registerInitializedHook(async () => {

  const {
    registerTransform
  } = liServer.features.api('li-desknet-integration')


  // Takes two arguments:
  // - A string identifier, we call that the handle.
  // - Your transform function.
  registerTransform(
    'readHasPrint',
    async (desknetApi, element, document) => {
      return element.publications
        .some(p =>
          p.platform &&
          typeof p.platform.name === 'string' &&
          p.platform.name.indexOf('Print') >= 0)
    }
  )
}
```

Now, we have to a) add a metadata plugin and b) a transform mapping to the settings of content type `'regular'`:

```js
{
  handle: 'regular'
  metadata: [
    {
      handle: 'hasPrint',
      type: 'li-boolean',
      ui: {
        config: {
          readOnly: true,
          label: 'Desk-Net - Is planned for Print'
        }
      }
    }
  ],
  desknet: {
    // A list of mapping objects. Each mapping object describes one metadata field.
    metadataTransforms: [
      {
        // Optional. The function name, or handle, under which the transform was registered.
        importFunctionHandle: 'readHasPrint',

        // The function name, or handle, under which the transform was registered.
        exportFunctionHandle: null,

        // Mandatory if importFunctionHandle is provided.
        // The path to the Livingdocs metadata property the import transform will get resolved to.
        // The value at target will also be passed to any registered export function.
        target: 'metadata.hasPrint'
      }
    ]
  }
}
```

## API

### Import functions

```js
async function myImportTransform (desknetApi, element, document): any
```

- `desknetApi` – A [set of helper functions](#desk-net-api) to make requests to the Desk-Net API.
- `element` – The Desk-Net [element](#full-desk-net-element-example)
- `document` – Optional. The Livingdocs document. Only provided if it's an update operation.

### Export functions

```js
async function myExportTransform (desknetApi, value, element, document): Object
```

- `desknetApi` – A [set of helper functions](#desk-net-api) to make requests to the Desk-Net API.
- `value` – The value of the metadata field at `target` (see config section above).
- `element` – The element properties generated using the [metadata mapping](#mapping-desk-net-values-to-livingdocs-document-metadata).
- `document` – The subset of the Livingdocs document, including the id, title and metadata.

### `registerTransform`

```js
function registerTransform (handle, transform): void
```
- `handle` – String, a unique transform name.
- `transform` – A transform function

### `unregisterTransform`

```js
function unregisterTransform (handle): void
```
- `handle` – String, a unique transform name.


### Desk-Net API

A set of helper functions to make authorized requests to the Desk-Net API.

Usage in transforms:

```js
const myImportTransform = async (desknetApi, element, document) => {
  const elementStatus await desknetApi.getElementStatus(document.metadata.myCustomStatusField)
  // ...
}
```

- `async function getElement (elementId)`
 – [GetElement](https://api.desk-net.com/#api-Element-GetElement)

- `async function getElementStatus (elementStatusId)`
 – [GetElementStatus](https://api.desk-net.com/#api-Element_status-GetElementStatus)

- `async function getElementStatus (publicationStatusId)`
 – [GetPublicationStatus](https://api.desk-net.com/#api-Publication_status-GetPublicationStatus)

- `async function getCategory(categoryId)`
 – [GetCategory](https://api.desk-net.com/#api-Category-GetCategory)

- `async function getPlatform(platformId)`
 – [GetPlatform](https://api.desk-net.com/#api-Platform-GetPlatform)

- `async function getType(typeId)`
 – [GetType](https://api.desk-net.com/#api-Type-GetType)

- `async function getFullElement (elementId)` –
This function resolves to a Desk-Net element [with prefetched values](#what-are-the-available-desk-net-properties).

#### Full Desk-Net element example
```json
{
   "id": 1111111111111,
   "version": 1,
   "elementStatus": {
      "id": 4,
      "name": "No Status"
   },
   "title": "Hallo Test 2",
   "groups": [
      33333333
   ],
   "publications": [
      {
         "id": 222222222,
         "version": 0,
         "status": {
            "id": 4,
            "name": "Top story"
         },
         "category": {
            "id": 5555555,
            "version": 0,
            "name": "TestUnterkategorie",
            "platform": 6666666,
            "category": 7777777,
            "position": 1
         },
         "single": {
            "start": {
               "date": "2019-09-09"
            }
         },
         "platform": {
            "id": 6666666,
            "version": 48,
            "name": "Livingdocs",
            "position": 2,
            "weeklySchedule": {
               "mon": true,
               "tue": true,
               "wed": true,
               "thu": true,
               "fri": true,
               "sat": true,
               "sun": true
            }
         }
      }
   ],
   "url": "https://desk-net.com/mySchedulePage.htm?fragment=de1111111111111",
   "modificationDate": "2019-09-09T08:19:27Z",
   "publication": {
      "id": 222222222,
      "version": 0,
      "status": {
         "id": 4,
         "name": "Top story"
      },
      "category": {
         "id": 5555555,
         "version": 0,
         "name": "TestUnterkategorie",
         "platform": 6666666,
         "category": 7777777,
         "position": 1
      },
      "single": {
         "start": {
            "date": "2019-09-09"
         }
      },
      "platform": {
         "id": 6666666,
         "version": 48,
         "name": "Livingdocs",
         "position": 2,
         "weeklySchedule": {
            "mon": true,
            "tue": true,
            "wed": true,
            "thu": true,
            "fri": true,
            "sat": true,
            "sun": true
         }
      }
   }
}
```

## Story Planning Schedule in Livingdocs

An optional step is to enable the story planning side panel within the Livingdocs editor. This can be configured to only display for certain content types, for example pages to help with page management. This step can also be done without mapping Desk-Net values, but this will result in the side panel displaying document titles instead of document reference cards.

### Setup

#### Content type config

Add the `li-desknet-schedule` metadata plugin to the content type that you would like the side panel enabled for:

```js
{
  handle: 'page',
  documentType: 'page',
  // ...
  metadata: [
    // ...
    {
      handle: 'desknet-schedule',
      type: 'li-desknet-schedule',
      config: {
        // Optionally filter the documents which are displayed in the side panel
        filters: {
          linkedDocumentsOnly: true,
          elementStatusIds: [1, 2, 10322, 10332],
          publicationStatusIds: [5]
        }),
        // Only required if li-desknet-integration is not used.
        // It will compare the metadata value from the path provided
        // with the externalElement.id property in the Desk-Net element.
        desknetExternalElementIdMetadataPath: 'myExternalSystem.id',
        // Enable a button in the side panel which triggers a create flow
        automaticPlacementCreationFlowHandle: 'myDesknetGenerateContentFlow'
      },
      ui: {
        label: 'Desk-Net Schedule',
        config: {
          placeholder: 'Select a Desk-Net platform or category',
          // Use a custom table dashboard for the side panel
          useDashboard: 'articlesSimple'
        }
      }
    }
  ]
}
```

#### Adding a platform or category to a page

Once you have made the config changes above you should be able to see a disabled Desk-Net button in the editor toolbar when viewing a document of the configured content type. To enable the button you need to go to the metadata screen of the document and select any relevant platforms, categories, or subcategories. Articles within the selected tree branches will be displayed in the side panel.

{{< img src="desknet-schedule-metadata-field.png" alt="Desk-Net Platforms metadata input" >}}

### Using the side panel

A user can change the date to see the scheduled articles in the configured platforms or categories. If the Desk-Net story is linked to a document in Livingdocs then it is possible to drag the story on to the page to create a teaser.

{{< img src="desknet-schedule-side-panel.png" alt="Desk-Net Schedule side panel in Livingdocs" >}}

### Automatic Teaser Placement

Along with manually dragging stories from the side bar on to the page to create teasers, it is also possible to register a document create flow to update or re-generate the content for the current document.

This feature should be considered beta.

#### Register Create Function

To begin with you should register a new create function in your server runtime config. Below is an example function which demonstrates the possibility of merging existing document content with new content which is generated from the Desk-Net Schedule:

```js
liServer.registerInitializedHook(async () => {
  const documentApi = liServer.features.api('li-documents').document
  documentApi.registerGenerateFunction({
    handle: 'generateTeasersFromDesknetSchedule',
    async create ({projectConfig, userId, params = {}, context = {}}) {
      // Extract Desk-Net elements from schedule tree
      function extractElements (accumulator, node) {
        const elements = node.elements || []
        const nestedElements = node.categories?.reduce(extractElements, []) || []
        return [
          ...accumulator,
          ...elements,
          ...nestedElements
        ]
      }
      const document = context.document
      // Keep the first title (if it exists)
      const title = document.content.find((c) => c.component === 'title')
      // Generate a paragraph for each Desk-Net element
      const elements = (params.schedule || []).reduce(extractElements, [])
      const elementComponents = elements.map((element, index) => ({
        component: 'p',
        content: {text: `${index + 1}. ${element.title}`},
      }))

      return {
        content: [
          title,
          ...elementComponents
        ].filter(Boolean)
      }
    }
  })
})
```

The main differences between this "generate content" function and a standard create function is that we provide the current `document` in the `context` object so that it is possible to re-use existing components. In addition to this, the return value should be an object that only contains a `content` property which is a [component tree]({{< ref "/reference/document/content/component-tree" >}}) (an array of component objects).

The Desk-Net Schedule loaded in the editor is passed to the function as `params.schedule`, and it has the following tree structure:

```js
[
  {
    id: 1,
    label: 'Platform 1',
    breadcrumbs: ['Platform 1'],
    categories: [
      {
        id: 2,
        label: 'Category 1',
        breadcrumbs: ['Platform 1', 'Category 1'],
        categories: [
          {
            id: 3,
            label: 'Subcategory 1',
            breadcrumbs: ['Platform 1', 'Category 1', 'Subcategory 1'],
            elements: [
              {
                // Full Desk-Net element
                id: 4,
                title: 'Article 1',
                publication: {},
                // ...
                // Additional linked document (if available)
                document: {}
              }
            ]
          }
        ],
        elements: [{id: 5, title: 'Article 2', publication: {...}}]
      },
      {id: 6, label: 'Category 3', breadcrumbs: [...], categories: [...], elements: [...]}
    ],
    elements: [{id: 7, title: 'Article 2', publication: {...}}]
  },
  {id: 8, label: 'Platform 2', breadcrumbs: [...], categories: [...], elements: [...]}
]
```

The `elements` array will contain [full Desk-Net elements](#full-desk-net-element-example) with an additional `document` property if a link between the Desk-Net element and a Livingdocs document can be found.

#### Update Project Config

The next step is to link the create function to a document creation flow. You can do this by modifying `editorSettings` in your project config:

```js
{
  // ...
  editorSettings: {
    // ...
    documentCreationFlows: [
      // ...
      {
        handle: 'myDesknetGenerateContentFlow',
        createFunction: 'generateTeasersFromDesknetSchedule',
        createButtonLabel: 'Generate Teasers' // Default: "Run Automatic Placement"
      }
    ]
  }
}
```

#### Update Metadata Plugin

Finally, you need to update the `li-desknet-schedule` metadata plugin with the `automaticPlacementCreationFlowHandle`. Once this is setup then a button will be added to the Desk-Net Schedule side panel to trigger the document update.

```js
{
  handle: 'desknetSchedule',
  type: 'li-desknet-schedule',
  config: {
    automaticPlacementCreationFlowHandle: 'myDesknetGenerateContentFlow'
    // ...
  }
  // ...
}
```
