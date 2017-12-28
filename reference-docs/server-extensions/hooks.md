# Livingdocs Server Hooks

## Overview

The boilerplate app allows you to hook into the *before publish* state as well
as the publish and unpublish transactions of articles and pages and implement
your customizations, e.g., for third-party system integrations. Note that in the
case of publish and unpublish hooks you are executing your code within the
transaction, therefore it is best to avoid things like long-running polls in
there. You can also abort the publish (visible to the user) by returning the
callback with an error.

Other example use cases:

- implement a hook that adds some metadata to a document before publishing it
- implement a hook to alter document content before Rendering
- implement hooks that are called on publish and on unpublish

## Registering hooks

### Publish hook

There are sample hooks in the boilerplate located under
[`app/event_listeners.js`](https://github.com/upfrontIO/livingdocs-server-boilerplate/blob/master/app/event_listeners.js).
See [*hooks*](../server-configuration/hooks.html) for all the options and definition of the available
hooks.

Upon every publish event in Livingdocs, e.g., when a user presses the "Publish"
button in the editor, this hook method is called. You get two parameters that
your custom implementation can use: the `documentVersion` which contains all
information about the document and the `renditions` object which contains all
rendered renditions that you defined for your channels. By default the
`renditions` object will contain just one entry `webarticle` or `webpage`
respectively, which is the rendered HTML without any alterations.

If you want to use the HTML of a rendered article, you can access it as `renditions.webarticle.html`.


### The documentVersion object

The documentVersion object is a core object and thus contains private APIs. You
should only use the provided getter methods on the instance in order not to
program against private APIs that are prone to change. The following methods are
provided:

* **getDocumentId()**, returns the unique document id of the document that was
  published (the same as is in the URL of the editor when you have the document
  opened)

* **getProjectId()**, gets the id of the project that this document belongs to

* **getSerializedLivingdoc()**, gets the document description in the Livingdocs
  data format (JSON)

* **getMetadata()**, gets the metadata associated with the document (JSON)

* **getDesignDescriptor()**, gets the name and version of the design that this
  document was created with

* **getDocumentType()**, gets the document type, either 'article' or 'page'

* **render(callback)**, renders the document, i.e., produces output according to
  your renditions configuration. The hook method is called *after* a render, so
  you will probably never want to call `render` in this context. The callback
  receives the `renditions` object.

### The unpublish hook

Just as with the publish hook, you can also configure a method that reacts to
unpublish events. See [here](../server-configuration/channel-config.html#hooks)
for all the options and definition.

Just as before you get a `documentVersion` object for the document that was
unpublished. If your publish customization notified a third-party system of a
new document to present to your readers, you can use this method to take the
document from the web again. Be sure to remember the unique `document_id` in
your third-party system so you can reference to your document again.

### Sample webhook implementation

The [boilerplate server](https://github.com/upfrontIO/livingdocs-server-boilerplate)
implements a very simple webhook module that you can use to send
the publish and unpublish payloads to a third-party system via the web. To
enable the wehbook module you need to adapt the
[configuration](https://github.com/upfrontIO/livingdocs-server-boilerplate/blob/master/conf/environments/all.js)
to use your endpoints. Also, in the
[event listener setup](https://github.com/upfrontIO/livingdocs-server-boilerplate/blob/master/app/event_listeners.js)
you need to uncomment the relevant code to trigger the webhook.

The implementation is extremely bare-bone and only suited to get you started
quickly. Please provide your own implementation for production code or at least
carefully review the sample code to your requirements.
