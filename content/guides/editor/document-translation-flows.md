---
title: Document Translation Flows
description: Create translations of documents using server functions
weight: 1
---

{{< added-in "release-2026-11" block >}}

## Introduction

Document Translation Flows let a project control how a document is translated into another language. When a user picks a language in the translation card of the editor, the server creates a new document in the same language group with the target locale. Without a translation flow, the server duplicates the source document. With a translation flow, a registered translate function decides the title, metadata and content of the translation, for example by calling a machine translation service.

Translations require the translation workflow of the multi-language setup. See the [Enable Multi-Language Content]({{< ref "/guides/editor/multi-language-content" >}}) guide for the language configuration and the `li-language` metadata property.

## Register a server function

You can register translate functions using the `liServer.registerTranslateFunctions` method, which accepts an array of objects containing a unique `handle` and a `translate` function.

When the function is executed it is provided with the `document` being translated, the `projectConfig` which the document belongs to, the `userId` of the user which triggered the translation, the `sourceLocale` and `targetLocale`, and a `context` object which is defined within the project config later.

The function can return the following values: `title`, `metadata`, `metadataSource`, `translations`, `content`. All of them are optional. If a property is not returned, the value of the source document is used. Returning nothing duplicates the source document, which is what the built-in default function does. A translate function cannot change the content type.

When a user edits content that the editor extracts into metadata, for example the headline into the title, the editor updates that metadata property again. If your function returns a metadata value that intentionally differs from the content, return `metadataSource: {title: 'manual'}` for it so the editor keeps it.

The language metadata property of the translation is always set by the server. It keeps the `groupId` of the source document and receives the target locale, regardless of what the function returns for that property.

```js
liServer.registerTranslateFunctions([
  {
    handle: 'machineTranslation',
    async translate({document, projectConfig, userId, context, sourceLocale, targetLocale}) {
      // Returned metadata replaces the source metadata, so skip the properties
      // that a default copy removes as well
      const metadata = {}
      for (const {handle, plugin, value} of [...document.metadata, ...document.systemMetadata]) {
        if (!plugin.removeDuringDefaultCopy) metadata[handle] = value
      }

      const options = {from: sourceLocale, to: targetLocale, glossary: context.glossary}
      metadata.title = await translateText(metadata.title, options)

      return {
        title: metadata.title,
        metadata,
        content: await translateContent(document.content, options)
      }
    }
  }
])
```

{{< warning >}}
The `context` of a translation flow is part of `editorSettings`, which the editor loads for every user. Do not put credentials into it. Keep API keys in the server configuration or in environment variables and read them inside the translate function.
{{< /warning >}}

The source document's inbox is copied to the translation when it is created. Inbox entries that the content type's inbox config does not permit are skipped.

## Add document translation flow to `projectConfig`

A translation flow needs a unique `handle` and a reference to the `handle` of the translate function. An optional `context` object is passed to the translate function, which is useful when the same function serves several flows.

```js
{
  // ...
  editorSettings: {
    // ...
    documentTranslationFlows: [
      {
        handle: 'deepl',
        translateFunction: 'machineTranslation',
        context: {glossary: 'news'}
      }
    ]
  }
}
```

A translation flow has no labels, dialog or `paramsSchema`, because the translation card only asks for the target language.

## Enable translation flow in `contentTypeConfig`

Finally, you need to enable the translation flow for each content type that should use it. To do this you provide a reference to the translation flow you defined in the project config by using the `handle` as the value for the `useDocumentTranslationFlow` property.

```js
{
  handle: 'regular',
  // ...
  documentTranslationFlows: [
    {
      useDocumentTranslationFlow: 'deepl'
    }
  ]
}
```

A content type can reference one translation flow. The referenced flow must exist in `editorSettings.documentTranslationFlows`, otherwise the project config is rejected. Content types without `documentTranslationFlows` use the built-in default function, which duplicates the document.

## Behavior

- A translation keeps the title of the source document unless the translate function returns a `title`.
- The default function removes metadata properties whose plugin is marked with `removeDuringDefaultCopy`, in the same way as [Document Copy Flows]({{< ref "/guides/editor/document-copy-flows" >}}).
- A translation is linked to its source through `systemdata.translationSource`. `documentId` is the source document and `documentTranslationFlow` is the handle of the translate function that ran, which is `liDefaultTranslateFunction` without a translation flow. Both can be used as filters in the document search, and `translationSource.documentId` also in the publication search.
- The info panel of a translation shows the source under "Translation of", and the info panel of the source lists its translations in the copies section.
- The server rejects a translation with a `409` status when the target locale is the locale of the source document or already exists in the language group.
- The user needs the create permission for the content type. It is checked before the translate function runs.
- Creating a translation emits a `document.create` event and no `document.copy` event.
