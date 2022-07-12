---
title: Desk-Net integration
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
- You should know about the different Livingdocs configuration levels/methods, namely the [project config]({{< ref "/reference-docs/project-config" >}}) and the [content type config]({{< ref "/reference-docs/project-config/content-types.md" >}})).
- You should be familiar with how to [set up custom metadata fields]({{< ref "/reference-docs/server-extensions/metadata-plugins" >}}) for your content types.
- For local development, we strongly suggest you use:
   - some kind of http tunnel solution like [ngrok](https://ngrok.com). This is useful, when you want to redirect messages from Desk-Net to your local server.
   - a HTTP API client like [Postman](https://www.getpostman.com/). Very handy to explore the Desk-Net API. Certain configuration settings also need you to provide Desk-Net entity ID's, which are not easily (or not at all) accessible via the Desk-Net UI.

### Basic configuration

#### 1. Create a public API token

- Make sure you are in the project you want to connect with Desk-Net
- In the main project menu select "Project Admin"
- Then select "Api Tokens" in the left menu
- Click the "Add API Token" button on the right
- Enter a descriptive name, provide permission for desk-net integration API access, and click the "Create Token" button:
{{< img src="desknet-token.png" alt="Create API Token" >}}
- In the list of tokens, select "Show" for your newly created token, then copy the token to your clipboard, we're going to use it in a minute

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
        // {{< added-in release-2022-07 >}}
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
      // introduced to the li-desknet-integration metadata plugin in release-2022-07.
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

#### 5. Add metadata plugin to content types

Add the following metadata plugin to all content types that can be created using the "contentTypes" configuration above:

```js
{
  handle: 'desknet',
  type: 'li-desknet-integration',

  // {{< added-in release-2022-07 >}}
  // Optional. The config can be used if you intend to keep Desk-Net's publication status up-to-date
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

  // {{< added-in release-2022-07 >}}
  // Optional. Only required if you intend to display the current publication status in a
  // table dashboard cell.
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
        component: 'liMetaDatetimeForm',
        config: {
          readOnly: true,
          label: 'Desk-Net – Planned publication'
        }
      }
    }
  ]
}
```

As mentioned before, we won't go further into how to set up metadata at this point, but you can read all about that [here]({{< ref "/reference-docs/document/metadata" >}}).

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

First, we have to write and register the transforms. As we have to register transforms before the server actually starts, but only after the application is properly up and running, we use a [hook]({{< ref "/reference-docs/server-extensions/server-hooks" >}}) for that:

```js
liServer.registerInitializedHook(async () => {

  const {
    registerTransform
  } = liServer.features.api('li-integrations-desknet-api')


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

{{< added-in release-2022-05 block >}}

An optional step is to enable the story planning side panel within the Livingdocs editor. This can be configured to only display for certain content types, for example pages to help with page management. This step can also be done without mapping Desk-Net values, but this will result in the side panel displaying document titles instead of document reference cards.

### Setup

#### Content type config

Add the `li-desknet-platforms` metadata plugin to the content type that you would like the side panel enabled for:

```js
{
  handle: 'page',
  documentType: 'page',
  // ...
  metadata: [
    {
      handle: 'desknet-platforms',
      type: 'li-desknet-platforms',
      ui: {
        label: 'Desk-Net Platforms',
        config: {
          placeholder: 'Select a Desk-Net platform or category'
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

At the moment the side panel is for information only. A user can change the date to see the scheduled articles in the configured platforms or categories. However, the ability to create teasers by dragging articles from the side panel will be added soon.

{{< img src="desknet-schedule-side-panel.png" alt="Desk-Net Schedule side panel in Livingdocs" >}}
