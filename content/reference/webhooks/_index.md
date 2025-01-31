---
title: Webhooks
description: A Webhook notifies another system via a HTTP POST request about a change in Livingdocs.
icon: webhook
weight: 4
menus:
  reference:
    weight: 4
---

A Webhook notifies another system via a HTTP POST request about a change in Livingdocs, e.g. when a document has been published. You can configure multiple Webhooks that are called on only one or multiple events.

## Configuration

The Webhooks feature is enabled by default, but can get disabled via [Server Configuration]({{< ref "/customising/server-configuration#webhooks" >}}).

One or multiple Webhooks are configured via [Project Config]({{< ref "/reference/project-config" >}}) (see example below):

```js
// Project Config settings.webhooks
webhooks: {
  active: true,
  configurations: [
    {
      // Unique handle per project
      handle: 'my-webhook',
      // UI label
      label: 'My Webhook',
      // UI description
      description: 'A description for future self and coworkers',
      // URL to call with a POST request when one of the specified events occurs
      url: 'https://example.com/my-webhook-endpoint',
      // Sign request with HTTP header 'x-livingdocs-signature'
      //   1) undefined                               -> No signature
      //   2) 'a-secret-token-to-sign-the-request'    -> Sign request with token
      //   3) {$secretRef: {name: 'webhook-local'}}   -> Sign request with project secret
      // See below: Validate Webhook Signature on your Endpoint
      secret: 'a-secret-token-to-sign-the-request',
      // Enable webhook
      active: true,
      // Expose name and email for user actors
      exposeUserActor: true,
      // The webhook is triggered only for the specified events when both
      // the conditions and change filters are met
      events: [
        'document.create',
        {
          name: 'document.update',
          conditions: {
            contentTypes: [
              'regular'
            ]
          },
          changeFilter: {
            metadataProperties: [
              'title'
            ]
          }
        }
      ]
    }
  ]
}
```

### Events

Webhooks are triggered only when one of the specified events occurs. For each webhook, multiple events can be configured.

```js
events: [
  'document.create',
  {
    name: 'document.update'
  }
]
```

The following events are supported:

- `document.create` ({{< added-in "release-2024-01" >}})
- `document.delete` ({{< added-in "release-2024-01" >}})
- `document.publish`
- `document.unpublish`
- `document.update`
- `document.build`
- `document.build.abort` ({{< added-in "release-2024-07" >}})
- `document.build.userChoice` ({{< added-in "release-2024-07" >}})
- `document.build.draft`
- `document.build.draft.abort` ({{< added-in "release-2024-07" >}})
- `document.build.draft.userChoice` ({{< added-in "release-2024-07" >}})
- `publication.update` ({{< added-in "release-2024-03" >}})
- `mediaLibraryEntry.create`
- `mediaLibraryEntry.update`
- `mediaLibraryEntry.archive`
- `mediaLibraryEntry.revoke`
- `mediaLibraryEntry.active` ({{< added-in "release-2024-03" >}})
- `mediaLibraryEntry.invalid` ({{< added-in "release-2024-03" >}})

### Conditions

For more precise control over the triggering of webhooks, additional conditions can be defined for events. Webhooks will only be triggered if all conditions for an event are met.

Three types of conditions are supported:

- Content Types ({{< added-in "release-2024-03" >}})
- Delivery Handles
- Metadata Properties ({{< added-in "release-2024-03" >}})

#### Content Types

Conditions on content types enable the filtering of events from documents with a specific content type. Multiple content types can be specified, of which one must match for the webhook to be triggered.

```js
events: [
  {
    name: 'document.publish',
    conditions: {
      contentTypes: ['regular']
    }
  }
]
```

Content type conditions are applicable to all document and publication events, including:

- `document.create`
- `document.delete`
- `document.publish`
- `document.unpublish`
- `document.update`
- `document.build`
- `document.build.userChoice`
- `document.build.abort`
- `document.build.draft`
- `document.build.draft.userChoice`
- `document.build.draft.abort`
- `publication.update`

#### Delivery Handles

Conditions on delivery handles enable the filtering of build events from documents with a specific delivery handle. Multiple delivery handles can be specified, of which one must match for the webhook to be triggered.

```js
events: [
  {
    name: 'document.build',
    conditions: {
      deliveryHandles: ['web']
    }
  }
]
```

Delivery handle conditions are applicable to document build events, including:

- `document.build`
- `document.build.userChoice`
- `document.build.abort`
- `document.build.draft`
- `document.build.draft.userChoice`
- `document.build.draft.abort`

#### Metadata Properties

Conditions on metadata properties enable the filtering of events from documents with specific metadata properties. Multiple metadata properties can be specified, of which all must match for the webhook to be triggered.

```js
events: [
  {
    name: 'document.publish',
    conditions: {
      metadataProperties: [
        {
          name: 'description',
          value: 'Some description'
        }
      ]
    }
  }
]
```

Please note that metadata property conditions are supported only for metadata plugins that store primitive types (`boolean`, `number`, `string`). Consequently, conditions can be registered for the following metadata plugins:

- [li-boolean]({{< ref "/reference/document/metadata/plugins/li-boolean" >}})
- [li-color]({{< ref "/reference/document/metadata/plugins/li-color" >}})
- [li-date]({{< ref "/reference/document/metadata/plugins/li-date" >}})
- [li-datetime]({{< ref "/reference/document/metadata/plugins/li-datetime" >}})
- [li-enum]({{< ref "/reference/document/metadata/plugins/li-enum" >}})
- [li-external-id]({{< ref "/reference/document/metadata/plugins/li-external-id" >}})
- [li-integer]({{< ref "/reference/document/metadata/plugins/li-integer" >}})
- [li-moderated-collab]({{< ref "/reference/document/metadata/plugins/li-moderated-collab" >}})
- [li-publish-date]({{< ref "/reference/document/metadata/plugins/li-publish-date" >}})
- [li-text]({{< ref "/reference/document/metadata/plugins/li-text" >}})

Metadata property conditions are applicable to all document and publication events, including:

- `document.create`
- `document.delete`
- `document.publish`
- `document.unpublish`
- `document.update`
- `document.build`
- `document.build.userChoice`
- `document.build.abort`
- `document.build.draft`
- `document.build.draft.userChoice`
- `document.build.draft.abort`
- `publication.update`

### Change Filters

Similar to conditions, change filters enable more precise control over when to trigger webhooks.

However, change filters are not evaluated on the current document version but rather on the set of changes made to the document. The webhook is triggered only if at least one of the specified metadata properties has changed. Consequently, change filters are only supported for `document.update` events.

```js
events: [
  {
    name: 'document.update',
    changeFilter: {
      metadataProperties: ['title']
    }
  }
]
```

## Testing Webhooks

For quickly testing Webhooks we use https://webhook.site. It gives you an URL you can use to send webhooks to and look at all the requests in a web interface.

## Webhook Config via Editor UI

We strongly propose adding Webhook configs via Project Config, but we also provide a UI in the Editor.

In the project menu, select "Project Setup", then select "Webhooks" in the "Configuration" section of the menu. You can activate/deactivate all your configured webhooks using the setting "deliver webhooks on events".

{{< img src="./webhooks.png" alt="Webhooks Configuration" >}}

Add a new Webhook by clicking "Add Webhook" or edit an existing one by clicking on it's entry in the list. This shows a form to configure the webhook.

{{< img src="./webhook-detail.png" alt="Webhooks Configuration" >}}

## Payload

Here is an example payload sent to your url set in the Webhook configuration.

### `document.create`

```json
{
  "event": "document.create",
  "deliveryId": "KIOSZpPUt8X6X-FDlnLTX",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "test-1",
  "documentId": 123,
  "actor": {
    "type": "user"
  }
}
```

### `document.delete`

```json
{
  "event": "document.delete",
  "deliveryId": "Vulsdw3-y2JLqnE13NjPa",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "test-1",
  "documentId": 123,
  "actor": {
    "type": "importer",
    "name": "Importer"
  }
}
```

### `document.publish`

```json
{
  "event": "document.publish",
  "deliveryId": "qy8qoxQPVCES1VDneg4FE", // unique id on every call
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "publicationEvent": {
    "createdAt": "2021-02-16T18:04:50.203Z",
    "contentType": "regular",
    "documentType": "article",
    "eventType": "publish",
    "publicationId": 174,
    "projectId": 3,
    "channelId": 4,
    "documentId": 179
  },
  "actor": {
    "type": "api-client",
    "name": "Publibot 3000"
  }
}
```

### `document.unpublish`

```json
{
  "event": "document.unpublish",
  "deliveryId": "p3QA1OhXkQGJepVTkdd1b",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "publicationEvent": {
    "createdAt": "2021-02-16T18:04:51.285Z",
    "contentType": "regular",
    "documentType": "article",
    "eventType": "unpublish",
    "publicationId": 174,
    "projectId": 3,
    "channelId": 4,
    "documentId": 179
  },
  "actor": {
    "type": "user"
  }
}
```

### `document.update`

```json
{
  "event": "document.update",
  "deliveryId": "B_-8BAfgvuJRKk7m_RSls",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "metadataPropertyChanges": ["title"],
  "actor": {
    "type": "user"
  }
}
```

### `document.build`

```json
{
  "event": "document.build",
  "deliveryId": "2Xwe-gvuB_JsK3_4bJerT",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "publicationId": 322,
  "deliveryHandle": "web",
  "reportId": "2SG2MAA9RwPn",
  "actor": {
    "type": "user"
  }
}
```

### `document.build.abort`

```json
{
  "event": "document.build.abort",
  "deliveryId": "2Xwe-gvuB_JsK3_4bJerT",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "publicationId": 322,
  "deliveryHandle": "web",
  "reportId": "2SG2MAA9RwPn",
  "actor": {
    "type": "user"
  }
}
```

### `document.build.userChoice`

```json
{
  "event": "document.build.userChoice",
  "deliveryId": "2Xwe-gvuB_JsK3_4bJerT",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "publicationId": 322,
  "deliveryHandle": "web",
  "reportId": "2SG2MAA9RwPn",
  "selectedUserChoice": {
    "value": "override",
    "label": "Override"
  },
  "actor": {
    "type": "user"
  }
}
```

### `document.build.draft`

```json
{
  "event": "document.build.draft",
  "deliveryId": "2Xwe-gvuB_JsK3_4bJerT",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "deliveryHandle": "web",
  "reportId": "2SG2MAA9RwPn",
  "actor": {
    "type": "user"
  }
}
```

### `document.build.draft.abort`

```json
{
  "event": "document.build.draft.abort",
  "deliveryId": "2Xwe-gvuB_JsK3_4bJerT",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "deliveryHandle": "web",
  "reportId": "2SG2MAA9RwPn",
  "actor": {
    "type": "user"
  }
}
```

### `document.build.draft.userChoice`

```json
{
  "event": "document.build.draft.userChoice",
  "deliveryId": "2Xwe-gvuB_JsK3_4bJerT",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "deliveryHandle": "web",
  "reportId": "2SG2MAA9RwPn",
  "selectedUserChoice": {
    "value": "override",
    "label": "Override"
  },
  "actor": {
    "type": "user"
  }
}
```

### `publication.update`

```json
{
  "event": "publication.update",
  "deliveryId": "2um3G07jkaMVp7TudVzAY",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 187,
  // Actor available for visiblePublicationDate changes,
  // but not when triggered by conditional components
  "actor": {
    "type": "api-client",
    "name": "Publibot 3000"
  }
}
```

### `mediaLibraryEntry.create`

```json
{
  "event": "mediaLibraryEntry.create",
  "deliveryId": "f8K1HZ-_fTIf5kT698NqG",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "mediaId": "PNIi08x4UdEA",
  "actor": {
    "type": "user"
  }
}
```

### `mediaLibraryEntry.update`

```json
{
  "event": "mediaLibraryEntry.update",
  "deliveryId": "_p6aKe9Len6WnlvANDJSz",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "mediaId": "PNIi08x4UdEA",
  "actor": {
    "type": "user"
  }
}
```

### `mediaLibraryEntry.archive`

```json
{
  "event": "mediaLibraryEntry.archive",
  "deliveryId": "gmWn5OfOsZzEiY3FNRgA4",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "mediaId": "PNIi08x4UdEA",
  "actor": {
    "type": "user"
  }
}
```

### `mediaLibraryEntry.revoke`

```json
{
  "event": "mediaLibraryEntry.revoke",
  "deliveryId": "J1FrTJTNKKRoGmjBlQ3_e",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "mediaId": "PNIi08x4UdEA",
  "actor": {
    "type": "user"
  }
}
```

### `mediaLibraryEntry.active`

```json
{
  "event": "mediaLibraryEntry.active",
  "deliveryId": "Ty7XErALFZSi1b96G76KB",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "mediaId": "PNIi08x4UdEA",
  // Actor available for immediate li-invalid and li-datetime-validity changes,
  // but not when triggered by li-datetime-validity events
  "actor": {
    "type": "user"
  }
}
```

### `mediaLibraryEntry.invalid`

```json
{
  "event": "mediaLibraryEntry.invalid",
  "deliveryId": "ql-_3zjSdCrHesEcAERFs",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "mediaId": "PNIi08x4UdEA",
  // Actor available for immediate li-invalid and li-datetime-validity changes,
  // but not when triggered by li-datetime-validity events
  "actor": {
    "type": "user"
  }
}
```

## Validate Webhook Signature on your Endpoint

If you have defined a `secret` for your Webhook, Livingdocs creates a signature of the payload and sends it with the request in the HTTP header `x-livingdocs-signature`.
The signature is created using HMAC-SHA256 and will be sent in `x-livingdocs-signature` in the form `sha256=<hex digest>` for example `sha256=d8a47af83666a771d57117aa28ef8d3243a3de43`.

Here is sample code in JavaScript to validate the signature on your endpoint:

```js
// set payload to the body received with the request to your endpoint
const payload = JSON.stringify(request.body)
const signature = request.headers['x-livingdocs-signature']

// secret needs to be the same you configured with the webhook in livingdocs
const secret = 'a-secret-token-to-sign-the-request' // you should not hardcode this but read it from an environment variable

// compute the hmac on the received payload using the same secret
const crypto = require('crypto')
const hmac = crypto.createHmac('sha256', secret)
const payloadSignature = Buffer.from(`sha256=${hmac.update(payload).digest('hex')}`, 'utf8')
const checksum = Buffer.from(signature, 'utf8')

// use timingSafeEqual to compare the signature sent from livingdocs with the computed checksum
if (crypto.timingSafeEqual(payloadSignature, checksum)) {
  // payload is valid, move on
} else {
  // abort, this is not a valid request
}
```
