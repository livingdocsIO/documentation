---
title: Deliveries
weight: 6
menus:
  reference:
    parent: Project Config
---
You can configure `deliveries` to specify one or multiple applications which render Livingdocs content.

The deliveries can be used to configure these functionalities:
- Enable the `Internal Document Links` feature.
- Enable Delivery Builds for publications and for drafts

An example:
```js
// deliveries is configured at projectConfig.deliveries
deliveries: [
  // Example with a delivery build and internal links
  {
    handle: 'web',
    label: 'Website',
    isPrimary: true,
    icon: 'book-open',
    url: {
      origin: 'https://example.com',
      // the available variables in the pattern are:
      // - :id (document.id)
      // - :projectId (document.projectId)
      // - :slug (document.metadata.slug)
      pathPattern: '/article/:id'
    },
    // optionally customize the build button
    build: {
      enabled: true,
      type: 'publication',
      triggerButtonLabel: 'Build',
      retriggerButtonLabel: 'Build again',
      retryButtonLabel: 'Retry'
    }
  },
  // Example which only supports internal links
  {
    handle: 'app',
    label: 'App',
    icon: 'rocket',
    url: {
      origin: 'https://example.com',
      pathPattern: '/app/article/:id'
    }
  }
]
```

## Enable Internal Links

### pathPattern

The `Internal Document Links` feature will construct a URL to a document based on these placeholders:

- `:id` (document.id, always available)
- `:projectId`, (document.projectId, always available)
- `:slug` (document.metadata.slug, available if you have a metadata property with the handle slug and it is indexed in Elasticsearch)

This URL is then inserted into to `a` tags `href` attribute within the document.
Additionally a `data-li-document-ref` attribute is written containing the `document.id`.

### Caveats

Since the `Internal Document Links` is specifically handy to link to not yet published documents you want to validate these links somewhere in your delivery to remove the ones pointing to not yet published documents.
As this feature works on unpublished documents, Livingdocs cannot resolve the `routing` information from the [Routing System]({{< ref "/guides/organisation/routing-system.md" >}}) since this stores the information on publish which makes it unavailable before a document is published.

To have the `Internal Document Links` feature be able to construct working `href` attributes, you need a routing system in your delivery that is able to redirect a user do a valid document URL based on the `document.id` and `document.projectId` only.

## Delivery Builds

Delivery Builds allow you to export documents from Livingdocs to external systems on demand. A common use case is to render a preview in your external system and notify the Livingdocs user once the build is completed.

When configured, Delivery Builds create a new section in the Publish Panel of a document. This section includes the current build status and controls for triggering the external system by emitting a webhook event.

For instructions on configuring a Delivery Build with your external system, please refer to our [guide]({{< ref "../../guides/editor/publish-control/delivery" >}}).

### Publication Builds vs. Draft Builds

Livingdocs supports two types of Delivery Builds: Delivery Builds for publications and for drafts. Both types have identical feature sets, with the primary difference being the data sent to the external system:

- **Delivery Builds for publications** are initiated on document publications. The last published version of the document is sent to the external system. Build controls become visible in the Publish Panel only after the document is published.

- **Delivery Builds for drafts** are initiated on document drafts. The latest draft version of the document is sent to the external system.

The type of Delivery Build (`publication` or `draft`) can be defined using the [`type` property]({{< ref "#configuration" >}}).

### Configuration

To configure Delivery Builds, define the `build` property:

- `enabled`: Enables the Delivery Build.
- `type`: Specifies the [type of the Delivery Build]({{< ref "#publication-builds-vs-draft-builds" >}}), either `publication` or `draft`.
- `triggerButtonLabel`: Shown when there is no existing build.
- `retriggerButtonLabel`: Shown when a build already exists.
- `retryButtonLabel`: Shown when the last build failed.
- `abortButtonEnabled`: Specifies whether the abort button is shown. By default, the abort button is shown only for builds with user choice prompts. If set to `false`, the button is never shown. If set to `true`, it is shown for in-progress builds, including builds with user choice prompts. ({{< added-in "release-2024-07" >}})
- `abortButtonLabel`: Shown when a build can be aborted. ({{< added-in "release-2024-07" >}})

```js
// projectConfig.deliveries
build: {
  enabled: true,
  type: 'publication',
  triggerButtonLabel: 'Build',         // Optional
  retriggerButtonLabel: 'Build again', // Optional
  retryButtonLabel: 'Retry',           // Optional
  abortButtonEnabled: true,            // Optional
  abortButtonLabel: 'Abort'            // Optional
}
```

To enable Delivery Builds on a document, you must also configure `deliveries` in the [contentType]({{< ref "./content-types.md" >}}) config.


If you have delivery builds configured in your project but you specifically do not want them on a specific contentType, you must configure an empty array inside of the contentType itself:

```js
deliveries: []
```
