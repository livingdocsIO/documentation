---
title: Configure your own Document Preview
bullets:
  - Register Document Preview Functions
  - Configure global Document Previews
  - Define Document Previews per Content-Type
  - Preserve scroll position on reload
weight: 5
---

{{< added-in "release-2023-07" block >}}

## Register Document Preview Functions

First, you need to register Document Preview Functions in the server. You can register as many as you want.

```js
liServer.registerInitializedHook(async () => {
  const documentApi = liServer.features.api('li-documents').document

// return html ...
documentApi.registerPreviewFunction({
  handle: 'myHtmlPreviewFunction',
  async getPreview ({projectConfig, documentId}) {
    const doc = await documentApi.getLatestDocument(documentId)
    return {
      html: `<div><h1>Title: ${doc.title}</h1><p>This is a custom preview</p></div>`
    }
  }
})

// ... or an iframe
documentApi.registerPreviewFunction({
    handle: 'myIframePreviewFunction',
    async getPreview ({projectConfig, documentId}) {
      return {
        iframe: {
          src: `https://example.com/my-preview/${documentId}`,
          sandbox: 'allow-same-origin' // make sure this is set if you want to preserve scroll position
        }
      }
    }
  })
```

## Configure global Document Previews

With the functions registered, you now define the Document Previews in the project config on `editorSettings`.

```js
// editorSettings
{
  documentPreviews: [
    {
      handle: 'htmlPreview',
      previewFunction: 'myHtmlPreviewFunction',
      icon: 'book-edit',
      label: 'Preview'
    },
    {
      handle: 'iframePreview',
      previewFunction: 'myIframePreviewFunction',
      icon: 'pencil',
      label: {
        de: 'Meine Seite',
        en: 'My Site'
      }
    }
  ]
}
```

## Define Document Previews per Content-Type

For every ContentType, you can define the usable DocumentPreviews. This is done on the ContentType configuration:

```js
{
  handle: 'myContentType',
  // ...
  // for documentPreviews, define the handles of editorSettings.documentPreviews
  documentPreviews: ['iframePreview', 'htmlPreview']
}
```

## Preserve scroll position on reload

If you return `{html}`, you don't have to do anything. Livingdocs will preserve the scroll position when the user reloads the preview.
If you return `{iframe: {src: ''}}`, you need to communicate with Livingdocs using a postMessage interface. It works like this:

Within your iframe, add this script block:

```html
<script>
  // set this to the origin of the Livingdocs Editor
  const parentOrigin = 'https://localhost:9000'

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
      // when the user scrolls within your iframe
      // send the scroll position to Livingdocs to store it for later
      window.parent.postMessage(
        {
          action: 'saveScrollPosition',
          position: {
            top: document.querySelector('body').scrollTop
          }
        },
        parentOrigin
      )
    })
  })

  window.addEventListener('message', (event) => {
    if (event.origin !== parentOrigin) return
    if (event.data?.action === 'setScrollPosition') {
      // event.data.position contains the data you sent with
      // the saveScrollPosition message
      document.querySelector('body').scrollTop = event.data.position.top
    }
  })
</script>
```
