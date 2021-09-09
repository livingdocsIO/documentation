---
title: Document Drag & Drop
description: Implement a custom Drag & Drop handler in the editor.
weight: 4
menus:
  reference-docs:
    parent: Editor Extensions
---

## Description

The editor has some built in Drag & Drop implementations, to handle image, file and text drops onto a document. And It is possible to register your own drag & drop handlers.

Dropping objects over a dashboard is a separate subject.


## Add Custom Drag & Drop Handlers

You can register your own drop handlers which will be called before the core drop handlers
are called. In your plugin you can either call `next()` which will call the next drop handler, or you can call `end()` if you either handle the drop with this handler or wish to
abort without handling the drop.


The following example recognises a custom mime type in the `DataTransfer` object and inserts an HTML component into the document at the dropLocation:

Example code
```js
liEditor.dropHandlers.register({
  name: 'customPlugin',
  handler: function ({dropActions, dropObject, next, end}) {
    const {dataTransfer} = dropObject
    const data = dataTransfer.getData('application/test+json')
    if (!data) return next()

    const {component, directiveName} = dropActions.createHtmlComponent()
    const directive = component.directives.get(directiveName)
    directive.setContent({
      html: data.html
    })

    dropActions.dropLocation.insert(component)

    end()
  }
})
```
(Code location in editor-boilerplate: `app/editor.js`)
