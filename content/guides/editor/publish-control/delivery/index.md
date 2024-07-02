---
title: Delivery Builds
description: Trigger builds for specific deliveries and show the delivery build status in the Editor.
weight: 6
---

Delivery Builds add support for products requiring a build stage, such as generating an e-paper. They allow users to trigger an external system via webhook from within the Livingdocs editor to initiate the build process. The external system can report the build status back via the Public API. This information is displayed in the editor, providing users with an overview of the product life cycle. Delivery Builds even facilitate advanced use cases where actions and feedback need to be repeatedly exchanged between Livingdocs users and external systems.

![delivery](./delivery.png)

The life cycle of Delivery Builds is tracked through a status, which needs to be supplied to Public API requests.

1. Triggering a build in the Livingdocs editor notifies the external system via a webhook event. The build status is `in-progress`.
2. The external system can repeatedly provide updates to the current state of the build via the Public API. As long as the build is not finished, the status should be kept as `in-progress`.
3. Once the build is finished, the external system can provide a final update to the Public API with the status `success`. This marks the build as successful. Alternatively, if the build has failed, the status should be set to `failed`.

After a build has reached a final status, such as `success`, `failed` or `aborted`, it can no longer be updated.

## User Choices

More advanced scenarios may require a feedback loop; the ability to repeatedly exchange actions and feedback between Livingdocs and an external system. For this case, Delivery Builds support User Choices. Your external system can provide possible actions, which are presented to the user as choices. When the user selects an action, the external system is informed about the choice and can continue the build.

1. Triggering a build in the Livingdocs editor notifies the external system via a webhook event. The build status is `in-progress`.
2. The external system can supply user choices with the `userChoice` property via Public API. The choices are presented to the user. The status must be kept as `in-progress`.
3. When the user selects a choice, the external system is informed via a webhook event.
4. The external system can continue to provide updates to Livingdocs, including further user choices.
5. Once the build is finished, the external system can provide a final update to the Public API with the status `success`. This marks the build as successful. Alternatively, if the build has failed, the status should be set to `failed`.

## Aborting Builds

By default, Livingdocs adds an abort option to user choices. If a build is aborted, your external system will be notified via a webhook event.

You can change this behavior with the [`abortButtonEnabled` option]({{< ref "/reference/project-config/deliveries#delivery-builds" >}}) in the Project Config. When set to `false`, the abort button will never be shown. When set to `true`, the abort button will be shown for builds that are in `in-progress`, including user choices.

Aborted builds have reached a final status and can no longer be updated by your external system.

## Publication Builds vs. Draft Builds

Livingdocs supports two types of Delivery Builds: Delivery Builds for publications and for drafts. The feature set is identical for both types. The main difference is the data sent to the external system:

- **Delivery Builds for publications** are initiated on document publications. When triggering such a build, the last publication of a document is provided to the external system.

- **Delivery Builds for drafts** are initiated on document drafts. When triggering such a build, the latest draft version of a document is provided to the external system.

Whether a Delivery Build is of type `publication` or type `draft` can be configured in the Project Config.

## Setting up Delivery Builds for Publications

To set up Delivery Builds for publications, [configure your Deliveries]({{< ref "/reference/project-config/deliveries" >}}) in the Project Config. Make sure to set the type to `publication`. Optionally, you can customize the button labels and enable an abort button. The abort button should only be enabled if your external system is capable of aborting running builds.

```js
// projectConfig
{
  v: 2,
  deliveries: [{
    handle: 'web',
    build: {
      enabled: true,
      type: 'publication',
      triggerButtonLabel: 'Build',         // Optional
      retriggerButtonLabel: 'Build again', // Optional
      retryButtonLabel: 'Retry',           // Optional
      abortButtonEnabled: true,            // Optional
      abortButtonLabel: 'Abort'            // Optional
    },
    ...
  }]
  ...
}
```

To associate the configured Delivery with your Content Type, reference it in your Content Type's configuration. This will ensure that the Delivery Build and its buttons appear in the Publish Control section of those documents. The section will appear once the document is published.

```js
// projectConfig.contentTypes
[{
  handle: 'article',
  deliveries: [{
    deliveryName: 'web'
  }],
  ...
}]
```

With the UI set up, it is time to integrate your external system. To notify it, you need to register a webhook. There are three relevant events. Depending on your use case, you may want to implement all or only a subset of them.

- [`document.build`]({{< ref "/reference/webhooks/#documentbuild" >}}): Emitted when a user triggers a new build.
- [`document.build.abort`]({{< ref "/reference/webhooks/#documentbuildabort" >}}): Emitted when a user aborts a build. You can define if and under what conditions users can abort builds through the `abortButtonEnabled` setting.
- [`document.build.userChoice`]({{< ref "/reference/webhooks/#documentbuilduserchoice" >}}): Emitted when a user selects a provided user choice. User choices allow you to ask the user for further input after a build has already been triggered.

```js
// projectConfig
{
  v: 2,
  webhooks: {
    active: true,
    configurations: [{
      handle: 'delivery-webhook',
      label: 'Delivery Webhook',
      url: 'https://example.com/delivery-endpoint',
      secret: 'a-secret-token-to-sign-the-request',
      active: true,
      events: [{
        name: 'document.build',
        conditions: {
          deliveryHandles: ['web']
        }
      }, {
        name: 'document.build.userChoice',
        conditions: {
          deliveryHandles: ['web']
        }
      }, {
        name: 'document.build.abort',
        conditions: {
          deliveryHandles: ['web']
        }
      }]
    }]
  },
  ...
}
```

The external system can report the current build status back to Livingdocs via the Public API. The status and an optional message are reflected in the UI. The message supports a restricted set of HTML tags, specifically `<em>`, `<strong>`, `<a>`, and `<br>`.

```
POST /api/v1/documents/360/addDeliveryStatus
{
  "reportId": "2SG2MAA9RwPn",
  "publicationId": 524,
  "deliveryHandle": "web",
  "status": "success",
  "message": "<a href=\"https://example.com/123\" target=\"_blank\">Open</a>"
}
```

Optionally, a `userChoice` property can be passed, which will be displayed to users to ask for input. When a user selects one of the choices, the external system will be notified via `document.build.userChoice` webhook event.

```
POST /api/v1/documents/360/addDeliveryStatus
{
  "reportId": "2SG2MAA9RwPn",
  "publicationId": 524,
  "deliveryHandle": "web",
  "status": "in-progress",
  "message": "Please select an option",
  "userChoices": [
    { "label": "Automatic", "value": "automatic" },
    { "label": "Manual", "value": "manual" }
  ]
}
```

Refer to the [`addDeliveryStatus` Public API documentation]({{< ref "/reference/public-api/add-delivery-status" >}}) for more information about this endpoint and its options.

## Setting up Delivery Builds for Drafts

Configuring Delivery Builds for drafts is similar to configuring them for publications. However, there are a few notable differences.

To get started, [configure the Deliveries]({{< ref "/reference/project-config/deliveries" >}}) for your project in the Project Config. Optionally, you can also customize the button labels. For Delivery Builds for drafts, make sure to set the type to `draft`.

```js
// projectConfig
{
  v: 2,
  deliveries: [{
    handle: 'preview',
    build: {
      enabled: true,
      type: 'draft',
      triggerButtonLabel: 'Build',         // Optional
      retriggerButtonLabel: 'Build again', // Optional
      retryButtonLabel: 'Retry',           // Optional
      abortButtonEnabled: true,            // Optional
      abortButtonLabel: 'Abort'            // Optional
    },
    ...
  }]
  ...
}
```

To associate the configured Delivery with your Content Type, reference it in your Content Type's configuration. This will ensure that the Delivery Build appears in the Publish Control section of those documents.

```js
// projectConfig.contentTypes
[{
  handle: 'article',
  deliveries: [{
    deliveryName: 'preview'
  }],
  ...
}]
```

As with Delivery Builds for publications, you need to register a webhook for Livingdocs to notify your external system about events. Please note that they have slightly different names. Depending on your use case, you may want to implement all or only a subset of them.

- [`document.build.draft`]({{< ref "/reference/webhooks/#documentbuilddraft" >}}): Emitted when a user triggers a new build.
- [`document.build.draft.abort`]({{< ref "/reference/webhooks/#documentbuilddraftabort" >}}): Emitted when a user aborts a build. You can define if and under what conditions users can abort builds through the `abortButtonEnabled` setting.
- [`document.build.draft.userChoice`]({{< ref "/reference/webhooks/#documentbuilddraftuserchoice" >}}): Emitted when a user selects a provided user choice. User choices allow you to ask the user for further input after a build has already been triggered.

```js
// projectConfig
{
  v: 2,
  webhooks: {
    active: true,
    configurations: [{
      handle: 'draft-webhook',
      label: 'Draft Webhook',
      url: 'https://example.com/draft-endpoint',
      secret: 'a-secret-token-to-sign-the-request',
      active: true,
      events: [{
        name: 'document.build.draft',
        conditions: {
          deliveryHandles: ['preview']
        }
      }, {
        name: 'document.build.draft.userChoice',
        conditions: {
          deliveryHandles: ['preview']
        }
      }, {
        name: 'document.build.draft.abort',
        conditions: {
          deliveryHandles: ['preview']
        }
      }]
    }]
  },
  ...
}
```

The external system can report the current build status back to Livingdocs via the Public API. The status and an optional message are reflected in the Delivery Build section. The message supports a restricted set of HTML tags, specifically `<em>`, `<strong>`, `<a>`, and `<br>`. In contrast to Delivery Builds for publications, no publication ID needs to be provided.

```
POST /api/v1/documents/360/addDeliveryStatus
{
  "reportId": "2SG2MAA9RwPn",
  "deliveryHandle": "preview",
  "status": "success",
  "message": "<a href=\"https://example.com/123\" target=\"_blank\">Open</a>"
}
```

Optionally, a `userChoices` property can also be passed, which will be displayed to users to ask for input. When a user selects one of the choices, the external system will be notified via `document.build.draft.userChoice` webhook event.

Refer to the [`addDeliveryStatus` Public API documentation]({{< ref "/reference/public-api/add-delivery-status" >}}) for more information about this endpoint and its options.
