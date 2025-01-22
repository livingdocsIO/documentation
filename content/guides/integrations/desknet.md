---
title: Desk-Net Global Integration
description: Integrate Desk-Net with Livingdocs
---

{{< warning >}}
Desk-Net rebranded as Kordiam. Consequently, the Desk-Net Global Integration has been deprecated as of {{< release "release-2024-11" >}} and will be removed in {{< release "release-2025-05" >}}. Please use the [Kordiam Global Integration]({{< ref "/guides/integrations/kordiam" >}}) instead. For more details, refer to our [Desk-Net to Kordiam migration guide]({{< ref "/guides/integrations/desknet-to-kordiam-migration" >}}).
{{< /warning >}}

{{< added-in "release-2024-05" block >}}

{{< info >}}
See the [Desk-Net Platform Integration]({{< ref "/guides/integrations/desknet-legacy" >}}) guide for details about the legacy integration used prior to {{< release "release-2024-05" >}}, or read the [Desk-Net Migration]({{< ref "/guides/integrations/desknet-global-integration-migration" >}}) guide for details on upgrading from the platform integration to the global integration.
{{< /info >}}

## Setup

### Desk-Net

The [Global Export Integration (Webhooks)](https://support.desk-net.com/hc/en-us/articles/5288027432860-Global-Export-Integration-Webhooks) feature must be enabled by Desk-Net for your organisation before you can use it with Livingdocs. You will need to provide a URL and a token. The base URL should be `https://<livingdocs-server>/api/v1/desknet`. The token can be generated from the Api Clients page within the Project Admin section of the editor. The Desk-Net integration scope must be selected (no other scope is necessary).

### Server config

To setup the Livingdocs server the server config needs to be updated to enable Desk-Net:

```js
{
  integrations: {
    desknet: {
      allowed: true,
      registerHooks: true,
      forceLinkUsingDesknetApiRequest: false
    }
  }
}
```

If you use a proxy or message queue between Desk-Net and Livingdocs you can define `forceLinkUsingDesknetApiRequest: true`. This sends an extra Desk-Net API request to set the `externalId` on the Desk-Net story after creating a Livingdocs document.

It's also possible to prevent the hooks from being registered to reduce side effects while testing.

{{< info >}}
Please be aware that the global integration uses `integrations.desknet`, and not `desknet` which the legacy platform integration uses.
{{< /info >}}

### Project config

In the project config you will also need to enable the integration and configure the required `credentials`. For more information on how to use secrets, please check [Project Secrets]({{< ref "/guides/setup/project-secrets" >}}). The remainder of the config properties are used to reference the Desk-Net functions required for your workflows.

Along with the project-level config you will also need to register the [`li-desknet-global`]({{< ref "/reference/document/metadata/plugins/li-desknet-global" >}}) metadata plugin on each content type you would like to be able to link to a Desk-Net story. The metadata plugin must be indexed.

```js
{
  settings: {
    integrations: {
      desknet: {
        enabled: true,
        credentials: {
          clientId: 'my-desknet-client-id',
          clientSecret: {
            $secretRef: {
              name: 'my-desknet-secret'
            }
          }
        },
        createDocumentFunction: 'myCreateDocumentFunction',
        createElementFunction: 'myCreateElementFunction',
        incomingElementToDocumentCommandsFunction: 'myIncomingElementToDocumentCommandsFunction',
        outgoingDocumentToElementFunction: 'myOutgoingDocumentToElementFunction',
        outgoingDocumentToElementEventSources: ['publish', 'unpublish', 'update'] // Default: ['publish', 'unpublish']
      }
    }
  },
  contentTypes: [
    {
      handle: 'myArticle',
      documentType: 'article',
      metadata: [
        {
          handle: 'desknetGlobal', // Any handle
          type: 'li-desknet-global',
          config: {index: true} // Must be indexed
        }
      ]
    }
  ]
}
```

{{< info >}}
Please be aware that the global integration uses `settings.integrations.desknet`, and not `settings.desknet` which the legacy platform integration uses.
{{< /info >}}

### Register functions

Once your configs are setup you can register the Desk-Net functions. All of the functions are optional, so you can simply configure the ones you need for your integration workflow.

```js
liServer.registerInitializedHook(() => {
  if (liServer.features.isActive('li-desknet')) {
    liServer.registerDesknetFunctions([
      require('./app/desknet-functions/create-document'),
      require('./app/desknet-functions/create-element'),
      require('./app/desknet-functions/incoming'),
      require('./app/desknet-functions/outgoing')
    ])
  }
})
```

#### `createDocumentFunction`

The `createDocumentFunction` is called whenever an un-linked Desk-Net story is created or updated.

The `element` provided by Desk-Net is forwarded to the function, along with the `userId` of the API client actor, the `projectConfig` of the current project, and the `desknetApi`. For details of the values contained within the `element` please see the [Get Element](https://api.desk-net.com/#api-Element-GetElement) section of the Desk-Net API documentation.

If you wish to create a document the function should return an object with a `document` property containing document data. The `title` and `contentType` properties are required, and `content`, `designVersion`, `metadata`, `metadataSource`, and `translations` are all optional.

If you do not need to create a document, for example when the Desk-Net story status does not meet a certain condition, then do not return a value.

```js
{
  handle: 'myCreateDocumentFunction',
  action ({userId, element, projectConfig, desknetApi}) {
    return {
      document: {
        title: element.slug, // required
        contentType: 'regular', // required
        content: [{component: 'title', content: {text: 'My Title'}}],
        // designVersion: '1.0.0',
        metadata: {description: 'My description'},
        // metadataSource: {},
        // translations: [{locale: 'en', metadata: {}}]
      }
    }
  }
}
```

#### `createElementFunction`

The `createElementFunction` is used to create a Desk-Net story from a Livingdocs document, and link the two together. When configured, a "Create Story" button will appear in the metadata form of any content type with the `li-desknet-global` metadata plugin (when the document is not already linked to Desk-Net).

The function will be called with a `document` property, the `userId` of the user that triggered the request, the `projectConfig` of the current project, and the `desknetApi`.

The function should return an object containing an `element` property. Due to the constraints enforced by the Desk-Net API the `element` object must contain at least one of the following: Publication platform, Task, Group. The Livingdocs code will handle setting the `externalElement` value and sending the request to Desk-Net. For details of the values you can provide within the `element` please see the [Update Element](https://api.desk-net.com/#api-Element-UpdateElement) section of the Desk-Net API documentation.

If you do not want to create a Desk-Net story for the specific document then the function can throw an error and the message will be displayed to the user.

```js
{
  handle: 'myCreateElementFunction',
  action ({document, userId, projectConfig, desknetApi}) {
    const dateParts = (new Date()).toISOString().split('T')
    const element = {
      slug: document.title,
      title: document.metadata.description,
      elementStatus: document.isPublished() ? 2 : 1,
      publications: [{
        category: 123,
        single: {
          start: {
            date: dateParts[0],
            time: dateParts[1].slice(0, 5)
          }
        }
      }]
    }
    return {element}
  }
}
```

#### `incomingElementToDocumentCommandsFunction`

The `incomingElementToDocumentCommandsFunction` is called every time a linked Desk-Net story is updated.

It is called with the Livingdocs `document`, the `userId` of the API client actor, the `element` from Desk-Net, the `projectConfig` of the current project, and the `desknetApi`. For details of the values contained within the `element` please see the [Get Element](https://api.desk-net.com/#api-Element-GetElement) section of the Desk-Net API documentation.

The expected return value is an object with a `commands` array. The function can optionally return a `preconditions` array as well. For further details on what can be within the `commands` and `preconditions` arrays please see the [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) reference documentation.

If no document update is necessary then the function should not return a value.

```js
{
  handle: 'myIncomingElementToDocumentCommandsFunction',
  action ({document, userId, element, projectConfig, desknetApi}) {
    return {
      commands: [{
        operation: 'setMetadataProperty',
        propertyName: 'manualStatus',
        value: 'modified'
      }],
      preconditions: [{type: 'isPublishedAndHasNoChanges'}]
    }
  }
}
```

#### `outgoingDocumentToElementFunction`

The `outgoingDocumentToElementFunction` function is called after certain events within Livingdocs, and is used to synchronise Livingdocs document changes to Desk-Net. It has an additional config option, `outgoingDocumentToElementEventSources`, which pre-filters when the function is called. The value of the property should be an array containing any of the following strings: `'publish'`, `'unpublish'`, `'update'`. By default the function will be called for publish and unpublish events.

The function is called with the Livingdocs `document`, the `userId` of the user which updated the document, the Desk-Net `elementId`, the `eventSource`, a metadata `changes` array, the `projectConfig` of the current project, and the `desknetApi`. The `eventSource` will be `'publish'`, `'unpublish'`, or `'update'`. The `changes` array is only present for `'update'` events. Each change object in the array includes the `metadataProperty` handle, the `oldValue` and the `newValue`.

If you would like to update the Desk-Net story then you should load the latest element using `desknetApi.getElement(elementId)`, apply any changes you would like to make to it, and then return an object with an `element` property.

If you do not need to update the Desk-Net story then do not return a value.

```js
{
  handle: 'myOutgoingDocumentToElementFunction',
  async action ({document, userId, elementId, eventSource, changes, projectConfig, desknetApi}) {
    const element = await desknetApi.getElement(elementId)
    const elementStatus = document.isPublished() ? 2 : 1
    if (elementStatus !== element.elementStatus) {
      return {
        element: {...element, elementStatus}
      }
    }
  }
}
```

## Story Planning Schedule in Livingdocs

An optional step is to enable the story planning side panel within the Livingdocs editor. Further details can be found in the [Desk-Net Schedule Guide]({{< ref "/guides/integrations/desknet-schedule" >}}).
