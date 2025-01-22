---
title: Assisted translation with CAT tool
description: Configure our li2xliff library to send Livingdocs content to CAT tools
weight: 14
---

## li2Xliff

We have created a library which converts Livingdocs JSON to XLIFF - the XML format required by computer-assisted translation (CAT) tools to mark, translate and update content - and to convert XLIFF back to Livingdocs content. A CAT tool offers translators a faster and easier way to translate content and can be supported with machine translation.

The library can be found [here](https://github.com/livingdocsIO/Li2Xliff)

To install:

```js
npm install @livingdocs/li2xliff
```

The library exports two functions which can be required:

```js
const {createXliff, updateContent} = require('@livingdocs/li2xliff')
```

### createXliff

`createXliff` converts Livingdoc content to XLIFF and requires Livingdoc content and a config object:

```js
const xliffContent = createXliff({
  content: documentVersion.content, // Livingdoc Content
  config: {
    targetLanguage: config.targetLanguage, // Required
    srcLanguage: config.srcLanguage // Required
  }
})
```

The config object has two required properties, a target language and a source language (so, if you want to translate your German articles to English, your source language is German, target language is English).

It can be extended with the following optional configs:

```js
excludeEditables: [
  {
    component: 'title',
    editables: ['title', 'author'] // this will not translate title or author editables inside title components
    },
    {
    component: 'header',
    editables: ['title'] // this will not translate titles inside header components
  }
],
excludeTags: ['strong', 'a'] // this will translate content inside of strong and anchor tags, but will not preserve the formatting
```

To exclude certain editables you must define a parent component for each editable to be excluded. To exclude tags simply define an array of formatting tags you would not like to appear in the translated document.

### updateContent

`updateContent` requires the Livingdoc you created by pressing translate and the xliff returned by the CAT tool:

```js
const {content, errors} = updateContent({content: documentVersion.content, xliff})
```

It returns the translated content and, if there are any, an array of errors.

## Registering Translation Function

To enable the functionality in Livingdocs you will need to activate multiple languages and translations. The documentation can be found [here]({{< ref "/reference/project-config/settings.md#languages--translations" >}})

In your Livingdocs Server instance you can subscribe to [server events]({{< ref "/customising/advanced/server-events.md" >}}) such as document creation. Then you can send your Livingdoc content for translation.

Here we have an example function:

```js
function registerTranslationHooks({liServer, config}) {
  liServer.events.subscribe('document.create', async (eventName, data) => {
    try {
      const documentVersion = data.documentVersion
      const xliffContent = createXliff({
        content: documentVersion.content,
        config: {
          targetLanguage: config.targetLanguage,
          srcLanguage: config.srcLanguage
        }
      })

      // Here you would send your xliff to your CAT tool of choice
    } catch (err) {
      log.error(err)
    }
  })
}
```

And to add the translation function to the server use an [initialized hook]({{< ref "/customising/server/server-initalization.md" >}}):

```js
register: function ({liServer}) {
    if (liServer.config.get('translations:enabled', false)) {
      liServer.registerInitializedHook(function () {
        registerTranslationHooks({liServer, config})
        registerTranslationRoute({liServer, config})
      })
    }
  }
```

And you can then use a [webhook]({{< ref "/reference/webhooks" >}}) to listen to your CAT service to know when to update your Livingdoc afterwards, summarised:

```js
function registerTranslationRoute({liServer, config}) {
  liServer.registerServerRoutes({
    method: 'post',
    prefix: '/daily-planet',
    path: '/translation',
    title: 'translation webhook',
    body: ms.obj(),

    async action(req, res) {
      try {
        const documentApi = liServer.features.api('li-documents').document // Get the document API
        const documentWriteModel = await documentApi.getDocumentWriteModel({projectId, documentId})
        const documentVersion = documentWriteModel.toDocumentVersion()
        // Here you need to get your xliff from your CAT Tool and pass it to updateContent:
        const {content, errors} = updateContent({content: documentVersion.content, xliff})
        // Handle any errors in updating the content
        await documentApi.updateV2({
          document: documentWriteModel,
          update: {
            ...documentVersion,
            ...{revision: {...documentVersion.revisionEntity, ...{data: {content}}}}
          },
          isSystemUpdate: true
        })
        log.info({documentId: documentVersion.id}, `Target document updated.`)
        res.success()
      } catch (err) {
        log.error(err)
      }
    }
  })
}
```

This is a simplified rendition of a registered webhook which can be called by your CAT tool to let Livingdocs know the translation is complete - you can then write a function to get your XLIFF back and update the document with the document API. You can extend it to update metadata and handle errors and logging more extensively.
