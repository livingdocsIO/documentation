---
title: Delivery Builds
description: Trigger builds for specific deliveries and show the delivery build status in the Editor.
weight: 6
---

For finite products like an e-paper there is usually a “build” stage involved. With the new Deliveries feature we allow a user to trigger a remote system to kick off a delivery build and report the status of the build back to Livingdocs. This allows an editor to get a better view on the finite product life cycle. These are the features:

![delivery](./delivery.png)

## Delivery Builds for publications

The delivery section in the Publish Panel will show delivery builds for the current document once it is published. Clicking on the build button will trigger the [Webhook]({{< ref "/reference/webhooks" >}}) `document.build` which in turn will trigger the delivery build in the external system, as configured in the Project Config `settings`.
The external build system can report back the current build status with an optional message via public API. The status and an optional message are reflected in the delivery section of the Publish Control, as seen above.

Update the status (from an external system) back to Livingdocs:

`POST /api/v1/documents/360/addDeliveryStatus`

Payload:

```json
{
  "reportId": "2SG2MAA9RwPn",
  "publicationId": 524,
  "deliveryHandle": "web",
  "status": "success",
  "message": "More info see <a href=\"https://google.ch\" target=\"_blank\">here</a>"
}
```

See [addDeliveryStatus]({{< ref "/reference/public-api/add-delivery-status" >}}) in the Public API documentation for more information.

## Add Webhooks and Deliveries to your Project Config

Add a Webhook to the Project Config to trigger the external system to build a delivery.

```js
// Project Config
{
  v: 2,
  ...
  webhooks: {
    active: true,
    configurations: [
      {
        handle: 'my-registered-build-endpoint',
        label: '...',
        description: '...',
        url: 'https://example.com/my-webhook-endpoint',
        secret: 'a-secret-token-to-sign-the-request',
        active: true,
        events: [
          {
            // the document.build event will be called when an editor presses the build button
            name: 'document.build',
            conditions: {
              // only call the Webhook when the delivery build called 'web' is triggered
              deliveryHandles: ['web']
            }
          }
        ]
      }
    ]
  },
  ...
}

```

Configure the available deliveries for this project and optionally customize the build button labels in the Project Config.

```js
// Project Config
{
  v: 2,
  ...
  deliveries: [
    {
      handle: 'web',
      label: 'Website',
      isPrimary: true,
      icon: 'book-open',
      url: {
        origin: 'https://livingdocs.io',
        pathPattern: '/doc/:id'
      },
      build: {
        enabled: true,
        type: 'publication',
        triggerButtonLabel: 'Build',
        retriggerButtonLabel: 'Build again',
        retryButtonLabel: 'Retry'
      }
    }
  ],
  ...
}
```

Configure which data-records have a build button and build status in the publish control.


```js
// Project Config contentTypes
{
  v: 2,
  ...
  documentType: 'data-record',
  deliveries: [
    {
      deliveryName: 'web',
      isPrimary: true
    }
  ]
}

```

## Delivery Builds for Drafts

You can also configure delivery builds for drafts. These are available before a document is published and no `publicationId` is tracked in the build status.

These are the differences of a draft build:

Use `type: 'draft'` in the delivery config:

```js
build: {
  enabled: true,
  type: 'draft',
  triggerButtonLabel: 'Build',
  retriggerButtonLabel: 'Build again',
  retryButtonLabel: 'Retry'
}
```

Use the event name `document.build.draft` in the webhook config:

```js
events: [
  {
    name: 'document.build.draft',
    conditions: {
      deliveryHandles: ['draftDelivery']
    }
  }
]
```

The webhook works the same as for delivery builds of type `publication` but there will be no publicationId in the event even if the document is published.

This also means when you report your status you don't have to include the `publicationId` in your request.

Here is an example:

`POST /api/v1/documents/360/addDeliveryStatus`

Payload:

```json
{
  "reportId": "2SG2MAA9RwPn",
  "deliveryHandle": "draftDelivery",
  "status": "success",
  "message": "More info see <a href=\"https://google.ch\" target=\"_blank\">here</a>"
}
```
