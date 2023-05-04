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
- Enable Publication and Draft Builds

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

## Delivery Builds for Publications

A publication build adds a button to the Publish Panel which can be used to trigger a webhook event. This can be used to export publications to third party systems on demand or also to render previews externally and send a feedback with a link back to the Livingdocs Editor which users can click.

You configure a publication build for a delivery by adding a `build` property.

```js
build: {
  enabled: true,
  type: 'publication',
  triggerButtonLabel: 'Build',
  retriggerButtonLabel: 'Build again',
  retryButtonLabel: 'Retry'
}
```
Notes for the labels:
- `triggerButtonLabel`: Shown when there is no build for the current publication
- `retriggerButtonLabel`: Shown when a build for the current publication exists
- `retryButtonLabel`: Shown when the last build failed due to an error.

The Publication Build UI will only be visible in the Editor once a document is published. And webhook events will include a publicationId.

To see publication builds on a document you will also need to configure `deliveries` on the [contentType]({{< ref "./content-types.md" >}}) config.

## Delivery Builds for Drafts

Draft Builds are the same as Publication builds except they are always available, even before a document is published.

For details see the Publication Builds section above.

Example Configuration
```js
build: {
  enabled: true,
  type: 'draft',
  triggerButtonLabel: 'Build Preview',
  retriggerButtonLabel: 'Build Preview again',
  retryButtonLabel: 'Retry'
}
```

## Further Reading: Delivery Build Guide

Here you find the [Delivery Build Guide]({{< ref "../../guides/editor/publish-control/delivery" >}}) which explains the setup of delivery builds in more detail.
