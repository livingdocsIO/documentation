---
title: Kordiam Platform Integration
description: Integrate Kordiam with Livingdocs using a publication platform
---

{{< info >}}
  {{< added-in "release-2024-11" >}}. Prior to {{< release "release-2024-11" >}}, the Kordiam Platform Integration was known as [Desk-Net Platform Integration]({{< ref "/guides/integrations/desknet-legacy" >}}).
{{< /info >}}

{{< warning >}}
  The Kordiam Platform Integration will eventually be removed. For new setups please use the [Kordiam Global Integration]({{< ref "/guides/integrations/kordiam" >}}) guide instead, or for upgrading from the platform integration to the global integration please read the [Kordiam Global Integration migration guide]({{< ref "/guides/integrations/kordiam-global-integration-migration" >}}).
{{< /warning >}}

[Kordiam](https://kordiam.io) is a planning tool for publication processes. This feature, if set up properly, lets you easily connect your Kordiam world to your Livingdocs universe. Here's a few things you can do:
- Create Livingdocs documents directly from Kordiam.
- Sync publication status between the two domains.
- Exchange and sync any data that is relevant to your workflow.
- View Kordiam story planning lists in Livingdocs

## Setup

### Prerequisites

- You should have a Kordiam account and a set of valid API credentials to authorize Livingdocs to access the Kordiam HTTP API.
- You should be somewhat familiar with the Kordiam data entities (Stories, Publications, Platforms and so on). A technical overview can be found [here](https://api.kordiam.app).
- You should know about the different Livingdocs configuration levels/methods, namely the [project config]({{< ref "/reference/project-config" >}}) and the [content type config]({{< ref "/reference/project-config/content-types.md" >}})).
- You should be familiar with how to [set up custom metadata fields]({{< ref "/customising/server/metadata-plugins" >}}) for your content types.
- For local development, we strongly suggest you use:
   - some kind of http tunnel solution like [ngrok](https://ngrok.com). This is useful, when you want to redirect messages from Kordiam to your local server.
   - a HTTP API client like [Postman](https://www.getpostman.com/). Very handy to explore the Kordiam API. Certain configuration settings also need you to provide Kordiam entity ID's, which are not easily (or not at all) accessible via the Kordiam UI.

### Basic configuration

#### 1. Create a public API token

- Make sure you are in the project you want to connect with Kordiam
- In the main project menu select "Project Admin"
- Then select "Api Clients" in the left menu
- Click the "Add API Client" button on the right
- Enter a descriptive name, provide permission for desk-net integration API access, and click the "Create" button
- The token will be displayed in the table, copy it and save it in a safe place, we will use it later. Please note that the token will not be displayed again after you leave the page

#### 2. Setup integration in Kordiam

- Log into your Kordiam account
- Click on the "Settings / Admin" icon in the top right and select "Platforms" from the menu that appears
- Click on the platform you want to connect with Livingdocs and go to the "Integrations" tab
- Click on the "Livingdocs / Forward Publishing" option
- Paste your token from Livingdocs into the "API secret" field
- Type any value into the "API user" field (it isn't used)
- Enter the path to your Livingdocs server's Kordiam integration root enpoint into the "URL" field (e.g. https://example.com/api/v1/kordiam-integration)
{{< img src="kordiam-config.png" alt="Kordiam Integration" >}}
- Click on "Test Connection" button to make sure Kordiam can communicate with Livingdocs
- Optionally, select which publication statuses you would like to trigger updates to Livingdocs

#### 3. Enable the Kordiam feature

In your main server config, enable the `kordiam` feature by simply adding the following:

```js
{
  kordiam: {
    enabled: true
  }
}
```

#### 4. Connect a Livingdocs project to Kordiam

Add the following to the project config of the project you want to connect with Kordiam:

```js
{
  kordiam: {
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

    // Optional. Default: "title". The path used to extract the title from the Kordiam element.
    titlePath: '',

    publicationStatus: {
      // Optional. If this key is set to true, the publication status will be synced everytime
      // it is updated in Kordiam. This basically allows you to publish Livingdocs documents
      // directly from Kordiam. Whether that is desirable or not depends on your workflow.
      sync: false

      // Deprecated. The old way to calculate the publication status before the matchers were
      // introduced to the li-kordiam-integration metadata plugin in {{< release "release-2022-07" >}}.
      publishedStatus: 5,
      unpublishedStatus: 1
    },

    contentTypes: {
      // The default content type to create in Livingdocs when a new story is created
      // (or reaches a trigger level) in Kordiam.
      standard: 'regular',

      // Optional. These two settings can be used to describe a more sophisticated content type lookup.
      // By providing source path and a mapping object, we actually say this (see actual values):
      // If the Kordiam element has a value at element.publication.type.name
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

Add the `li-kordiam-integration` metadata plugin to all content types that can be created using the "contentTypes" configuration in the previous step:

```js
{
  handle: 'article',
  documentType: 'article',
  // ...
  metadata: [
    // ...
    {
      handle: 'kordiam',
      type: 'li-kordiam-integration',

      // The config can be used if you intend to keep Kordiam's publication status up-to-date
      // with the status of the document in Livingdocs. It is required if you intend to publish a
      // document in Livingdocs when updating the publication status in Kordiam.
      config: {
        publicationStatus: {
          // Optional. The fallback is used when no matcher condition is met for a document.
          fallbackPublicationStatusId: 3,

          // Matchers provide a way to synchronise the state of a Livingdocs document to Kordiam.
          // You can use publication, task, or metadata matchers to calculate a Kordiam
          // publication status id value. You can find the publicationStatusId value using the
          // Kordiam API, or by inspecting network requests in the Statuses page in Kordiam.
          // The order of matchers is important. The array is iterated through from first to last,
          // with the publicationStatusId taken from the earliest document state match.
          matchers: [
            {
              // Defining a publicationStatusId for the published status is required if you intend to
              // publish a document in Livingdocs when updating the publication status in Kordiam.
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
  kordiam: {
    title: {
      // Defines if the document title should be synced on document update from
      // either way, livingdocs -> kordiam or kordiam -> livingdocs.
      // By default it is synced.
      sync: false
    }
  }
}
```

With all this in place, whenever we create a new story in Kordiam that is assigned to the platform connected to Livingdocs, we'll have a Livingdocs document created and linked with the Kordiam element entity that represents the story.

## Mapping Kordiam values to Livingdocs document metadata

In many cases it is probably desirable to have a little more information about the connected Kordiam entity on an article, than just merely the fact, that they're somewhat related.

As an example, let's say we want to achieve the following:
- We want to display the planned publication date from Kordiam in a datetime form field on the «Publish» screen in the Livingdocs Editor.
- We want this field to be shown only for documents of content type `'regular'`.
- We want this field to update, whenever somebody changes the planned publication date in Kordiam.
- We *don't* want this field to be editable in Livingdocs.
- The technical label for this field on the metadata should be `kordiamPublicationDate` and the actual label should read «Kordiam – Planned publication»

Let's do this, then!

### 1. Define a metadata plugin on the content type

Add the plugin to the settings of content type `'regular'`:

```js
{
  handle: 'regular',
  metadata: [
    {
      handle: 'kordiamPublicationDate',
      type: 'li-datetime',
      ui: {
        config: {
          readOnly: true,
          label: 'Kordiam – Planned publication'
        }
      }
    }
  ]
}
```

As mentioned before, we won't go further into how to set up metadata at this point, but you can read all about that [here]({{< ref "/reference/document/metadata" >}}).

### 2. Set up a mapping that defines how to translate from Kordiam to Livingdocs

Again to the settings of content type `'regular'`, add the following:

```js
{
  handle: 'regular'
  kordiam: {
    // A list of mapping objects. Each mapping object describes one metadata field.
    metadata: [
      {
        // The path to the value on the Kordiam element
        source: 'publication.single.start.date',
        // The path to the Livingdocs metadata property
        target: 'metadata.kordiamPublicationDate',

        // Optional. Enable or disable sync from Livingdocs to Kordiam (only applies one-way).
        // Every time we publish or unpublish a document in Livingdocs we update the element on
        // Kordiam. Setting sync to true will set the source property, with the value taken
        // from the target property of the Livingdocs document. Essentially, this is the
        // inverse of the logic used when creating or updating a document in Livingdocs. When
        // sync is false then the current Kordiam value will be returned to Kordiam.
        sync: false
      }
    ]
  }
}
```

And we're all set. From now on, whenever you create a new story on Kordiam with a scheduled publication date or change the scheduled publication date on an existing story *and* the story at hand is assigned to a platform connected to Livingdocs, the metadata of the document will have an up-to-date property `kordiamPublicationDate` with the date as value.

### What are the available Kordiam properties?

When determining mapping results we analyze an enriched version of the result of [GetElement](https://api.kordiam.app/#api-Element-GetElement) on the Kordiam API.

The following prefetches are already in place:

- `elementStatus` – [GetElementStatus](https://api.kordiam.app/#api-Element_status-GetElementStatus)
- `publications[].status` – [GetPublicationStatus](https://api.kordiam.app/#api-Publication_status-GetPublicationStatus)
- `publications[].category` – [GetCategory](https://api.kordiam.app/#api-Category-GetCategory)
- `publications[].platform` – [GetPlatform](https://api.kordiam.app/#api-Platform-GetPlatform)
- `publications[].type` – [GetType](https://api.kordiam.app/#api-Type-GetType)

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
- *Import functions* handle incoming data from Kordiam.
- *Export functions* handle data that should get sent to Kordiam.

**Transform functions should always be asynchronous**

The import and export procedures are actually quite similar: They translate data from one domain to the other. But in our case, there are two peculiarities, that you should take note off:
- An an import function always gets resolved to a single corresponding metadata field. The return value must comply to the requirements of the related metadata plugin.
- An export function should always return an object of (possibly nested) key/value pairs. It should only contain keys accepted by Kordiam.

This means that your import functions only ever resolve to a single field, while export functions can aggregate and return multiple keys.

### Registering and referencing transforms

Let's do another example:
- We want to display whether the Kordiam story is also assigned to any platform with some occurrence of the word `'Print'` in its name.
- We want this field to be shown only for documents of content type `'regular'`.
- We want this field to be shown as a checkbox, so we're looking for a boolean value.
- We *don't* want this field to be editable in Livingdocs.
- The technical label for this field on the metadata should be `hasPrint` and the actual label should read «Kordiam – Is planned for Print»

First, we have to write and register the transforms. As we have to register transforms before the server actually starts, but only after the application is properly up and running, we use a [hook]({{< ref "/customising/server/server-hooks" >}}) for that:

```js
liServer.registerInitializedHook(async () => {

  const {
    registerTransform
  } = liServer.features.api('li-kordiam-integration')


  // Takes two arguments:
  // - A string identifier, we call that the handle.
  // - Your transform function.
  registerTransform(
    'readHasPrint',
    async (kordiamApi, element, document) => {
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
          label: 'Kordiam - Is planned for Print'
        }
      }
    }
  ],
  kordiam: {
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
async function myImportTransform (kordiamApi, element, document): any
```

- `kordiamApi` – A [set of helper functions](#desk-net-api) to make requests to the Kordiam API.
- `element` – The Kordiam [element](#full-desk-net-element-example)
- `document` – Optional. The Livingdocs document. Only provided if it's an update operation.

### Export functions

```js
async function myExportTransform (kordiamApi, value, element, document): Object
```

- `kordiamApi` – A [set of helper functions](#desk-net-api) to make requests to the Kordiam API.
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


### Kordiam API

A set of helper functions to make authorized requests to the Kordiam API.

Usage in transforms:

```js
const myImportTransform = async (kordiamApi, element, document) => {
  const elementStatus await kordiamApi.getElementStatus(document.metadata.myCustomStatusField)
  // ...
}
```

- `async function getElement (elementId)`
 – [GetElement](https://api.kordiam.app/#api-Element-GetElement)

- `async function getElementStatus (elementStatusId)`
 – [GetElementStatus](https://api.kordiam.app/#api-Element_status-GetElementStatus)

- `async function getElementStatus (publicationStatusId)`
 – [GetPublicationStatus](https://api.kordiam.app/#api-Publication_status-GetPublicationStatus)

- `async function getCategory(categoryId)`
 – [GetCategory](https://api.kordiam.app/#api-Category-GetCategory)

- `async function getPlatform(platformId)`
 – [GetPlatform](https://api.kordiam.app/#api-Platform-GetPlatform)

- `async function getType(typeId)`
 – [GetType](https://api.kordiam.app/#api-Type-GetType)

- `async function getFullElement (elementId)` –
This function resolves to a Kordiam element [with prefetched values](#what-are-the-available-desk-net-properties).

#### Full Kordiam element example
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
   "url": "https://kordiam.app/mySchedulePage.htm?fragment=de1111111111111",
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

An optional step is to enable the story planning side panel within the Livingdocs editor. Further details can be found in the [Kordiam Schedule Guide]({{< ref "/guides/integrations/kordiam-schedule" >}}).
