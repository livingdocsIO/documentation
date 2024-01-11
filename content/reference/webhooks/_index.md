---
title: Webhooks
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
  active: true
  configurations: [
    {
      // unique handle per project
      handle: 'my-webhook',
      // shown label in UI
      label: 'My Webhook',
      description: 'A description for future self and coworkers',
      // called url with a POST request when a selected event happens
      url: 'https://example.com/my-webhook-endpoint',
      // sign request with HTTP header 'x-livingdocs-signature'
      //   1) empty                                   -> no sign request
      //   2) 'a-secret-token-to-sign-the-request'    -> sign request with token
      //   3) {$secretRef: {name: 'webhook-local'}}   -> sign request with project secret
      // see below a more detailled description
      secret: 'a-secret-token-to-sign-the-request',
      // a webhook only gets called when this is set to true
      active: true,
      // this webhook only gets called when this event happens
      events: [
        'document.create', // {{< added-in "release-2024-01" >}}
        'document.delete', // {{< added-in "release-2024-01" >}}
        'document.publish'
        {
          name: 'document.publish',
          // conditions that must be met to trigger the webhook
          conditions: {
            contentTypes: [
              'regular'
            ],
            metadataProperties: [
              {
                name: 'description',
                value: true
              }
            ]
          }
        },
        {
          name: 'document.unpublish',
          // conditions that must be met to trigger the webhook
          conditions: {
            metadataProperties: [
              {
                name: 'description',
                value: 'Example Description'
              }
            ]
          }
        },
        {
          name: 'document.update',
          changeFilter: {
            metadataProperties: [
              'title'
            ]
          }
        },
        {
          name: 'document.build',
          conditions: {
            // deliveries configured in the Project Config
            deliveryHandles: [
              'web',
              'desktop'
            ]
          }
        },
        {
          name: 'document.build.draft',
          conditions: {
            // deliveries configured in the Project Config
            deliveryHandles: [
              'web',
              'desktop'
            ]
          }
        },
        'mediaLibraryEntry.create',
        'mediaLibraryEntry.archive',
        'mediaLibraryEntry.revoke',
        'mediaLibraryEntry.update'
      ]
    }
  ]
}
```

## List of Available Webhook Events

- `document.create` ({{< added-in "release-2024-01" >}})
  - Supported conditions: `contentTypes`, `metadataProperties`
- `document.delete` ({{< added-in "release-2024-01" >}})
  - Supported conditions: `contentTypes`, `metadataProperties`
- `document.publish`
  - Supported conditions: `contentTypes`, `metadataProperties`
- `document.unpublish`
  - Supported conditions: `contentTypes`, `metadataProperties`
- `document.update`
  - Supported conditions: `contentTypes`, `metadataProperties`
  - Supported change filters: `metadataProperties`
- `document.build`
  - Supported conditions: `contentTypes`, `deliveryHandles`, `metadataProperties`
- `document.build.draft`
  - Supported conditions: `contentTypes`, `deliveryHandles`, `metadataProperties`
- `mediaLibraryEntry.create`
- `mediaLibraryEntry.archive`
- `mediaLibraryEntry.revoke`
- `mediaLibraryEntry.update`

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

`document.create`
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

`document.delete`
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

`document.publish`
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

`document.unpublish`
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

`document.update`
```json
{
  "event": "document.update",
  "deliveryId": "B_-8BAfgvuJRKk7m_RSls",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 179,
  "metadataPropertyChanges": [
    "title"
  ],
  "actor": {
    "type": "user"
  }
}
```

`document.build`
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

`document.build.draft`
```json
{
  "event": "document.build",
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

`mediaLibraryEntry.create`
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

`mediaLibraryEntry.update`
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

`mediaLibraryEntry.archive`
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

`mediaLibraryEntry.revoke`
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
