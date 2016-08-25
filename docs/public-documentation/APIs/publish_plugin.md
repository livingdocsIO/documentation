# Livingdocs Publish Plugin

[« back](../../README.md)

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Livingdocs Publish Plugin](#livingdocs-publish-plugin)
	- [Overview](#overview)
		- [The publish hook](#the-publish-hook)
		- [The documentVersion object](#the-documentversion-object)
		- [The unpublish hook](#the-unpublish-hook)
		- [Sample webhook implementation](#sample-webhook-implementation)

<!-- /TOC -->

## Overview

The boilerplate app allows you to subscribe to publish and unpublish events of articles and pages and implement your customizations, e.g., for third-party system integrations.

Pages are still an experimental feature so you should focus on the article configuration.

### The publish hook

The hooks for article and page publish events are located in `app/channels/article_config.coffee` and `app/channels/page_config.coffee` respectively. The method definition looks as follows:
```
publish: ({documentVersion, renditions}, callback)
```

Upon every publish event in Livingdocs, e.g., when a user presses the "Publish" button in the editor, this hook method is called.
You get two parameters that your custom implementation can use: the `documentVersion` which contains all information about the document and the `renditions` object which contains all rendered renditions that you defined for your channels. By default the `renditions` object will contain just one entry `webarticle` or `webpage` respectively, which just is the rendered HTML without any alterations. You can define your own renditions with custom output renderers and middlewares (documentation for this will follow).
<!-- TODO add render pipeline doku -->

If you want to use the HTML of a rendered article, you can access it as `renditions.webarticle.html`.

### The documentVersion object

The documentVersion object is a core object and thus contains private APIs. You should only use the provided getter methods on the instance in order not to program agains private APIs that are prone to change. The following methods are provided:

* **getDocumentId()**, returns the unique document id of the document that was published (the same as is in the URL of the editor when you have the document opened)

* **getProjectId()**, gets the id of the project that this document belongs to

* **getSerializedLivingdoc()**, gets the document description in the Livingdocs data format (JSON)

* **getMetadata()**, gets the metadata associated with the document (JSON)

* **getDesignDescriptor()**, gets the name and version of the design that this document was created with

* **getDocumentType()**, gets the document type, either 'article' or 'page'

* **render(callback)**, renders the document, i.e., produces output according to your renditions configuration. The hook method is called *after* a render, so you will probably never want to call `render` in this context. The callback receives the `renditions` object.

### The unpublish hook

Just as with the publish hook, you can also configure a method that reacts to unpublish events, e.g. when you need to quickly take an article offline due to copyright infringements. The definition looks as follows:
```
unpublish: ({documentVersion}, callback)
```

Just as before you get a `documentVersion` object for the document that was unpublished. If your publish customization notified a third-party system of a new document to present to your readers, you can use this method to take the document from the web again. Be sure to remember the unique `document_id` in your third-party system so you can reference to your document again.

### Sample webhook implementation

The boilerplate app implements a very simple webhook module that you can use to send the publish and unpublish payloads to a third-party system via the web. To enable the wehbook module you need to uncomment the feature in the app's [configuration](https://github.com/upfrontIO/livingdocs-server-boilerplate/blob/master/conf/environments/all.coffee#L81) as well as in the [channel configuration](https://github.com/upfrontIO/livingdocs-server-boilerplate/blob/master/app/channels/article_config.coffee#L29). You will also need to adapt the [url endpoints](https://github.com/upfrontIO/livingdocs-server-boilerplate/blob/master/conf/environments/all.coffee#L84) to match the ones of your third-party system.

The implementation is extremely bare-bone and only suited to get you started quickly. Please provide your own implementation for production code or at least carefully review the sample code to your requirements.

[« back](../README.md)