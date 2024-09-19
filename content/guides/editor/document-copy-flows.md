---
title: Document Copy Flows
description: Create copies of documents using server functions
weight: 1
---

{{< added-in "release-2024-09" block >}}

{{< info >}}
  See the [Declarative Document Copy (Legacy)]({{< ref "/guides/editor/declarative-document-copy" >}}) guide for details about the legacy feature used prior to {{< release "release-2024-09" >}}.
{{< /info >}}

## Introduction

Document Copy Flows provide a flexible way to create copies of documents. Copies can be cloned documents (if you return nothing from the function) or modified documents which can be of another content type, with different content and metadata.

## Register a server function

Most of the logic for a copy flow will be defined within the copy function. You can register copy functions using the `liServer.registerCopyFunctions` method, which accepts an array of objects containing a unique `handle` and a `copy` function.

When the function is executed it is provided with the `document` being copied, the `projectConfig` which the document belongs to, the `userId` of the user which triggered the copy process, the `params` of the optional `paramsSchema` form completed by the user, and a `context` object which is defined within the project config later.

The function can return the following values: `contentType`, `title`, `content`, `metadata`, `translations`. If any of the properties are not returned in the response object then the values from the source document will be used to create the copy.

```js
liServer.registerCopyFunctions([
  {
    handle: 'simpleCopy',
    copy ({document, projectConfig, userId, params, context}) {
      if (!context?.targetContentType) {
        throw new Error(`A 'targetContentType' was not provided`)
      }

      const data = {
        contentType: context.targetContentType
        // title
        // content
        // metadata
        // translations
      }

      // An example of merging values from the paramsSchema form into the document metadata
      if (Object.keys(params).length) {
        data.metadata = {
          ...document.systemMetadata.toJSON(),
          ...document.metadata.toJSON()
        }
        for (const key in params) {
          const value = params[key]
          data.metadata[key] = value
        }
      }

      return data
    }
  }
])
```

## Add document copy flow to `projectConfig`

### Minimal

Registering a copy flow for a project can be very simple. A unique `handle` property, a reference to the `handle` of the copy function, and the `sourceLabel` and `targetLabel` properties are required.

The `sourceLabel` and `targetLabel` allow you to specify the origin and destination context of the copy flow in a more user-friendly and descriptive way. These labels are especially useful for editors working with different content types, allowing them to better understand the starting point (source) and destination (target) of a copy operation. This provides more transparency to users by making it clear where the document is being copied from and to, particularly when multiple flows or different content types are involved.

```js
{
  // ...
  editorSettings: {
    // ...
    documentCopyFlows: [
      {
        handle: 'articleToArticle',
        copyFunction: 'simpleCopy',
        sourceLabel: 'original',
        targetLabel: 'copy',
        // copyButtonLabel will be generated using handle: "Simple Copy"
        // copyIcon will default to 'content-duplicate'
      }
    ]
  }
}
```

### Full

In order to customise the copy function further you can also customise the label, description and icon that appear in the UI. The label and description properties are [translatable]({{< ref "/guides/editor/multi-language-ui#translating-config-labels-placeholders-and-titles" >}}). It is also possible to define a `paramsSchema` using metadata plugins to prompt the user to input some additional data. The fields will be presented to the user in a form after they select the copy flow, and provided to the copy function in the `params` object. You can also set default values for the form using the `defaultParams` property. An additional property, `context`, can be used to pass data directly to the copy function. This can be useful in situations where you want to reuse the copy function for different scenarios.

```js
{
  // ...
  editorSettings: {
    // ...
    documentCopyFlows: [
      {
        handle: 'articleToArticle',
        copyFunction: 'simpleCopy',
        sourceLabel: {en: 'original article', de: 'Originalartikel'},
        targetLabel: {en: 'article copy', de: 'Artikelkopie'},
        copyButtonLabel: 'Duplicate Article',
        copyDescription: 'All content will be copied, and only some contextual metadata will be cleared',
        copyIcon: 'file-document',
        paramsSchema: [
          {
            handle: 'dataProviderEnum',
            type: 'li-enum',
            ui: {
              label: 'Data Provider Enum'
            },
            config: {
              dataProvider: {
                items: [
                  {label: {en: 'Item A', de: 'Einheit A'}, value: 'a'},
                  {label: {en: 'Item B', de: 'Einheit B'}, value: 'b'},
                  {label: {en: 'Item C', de: 'Einheit C'}, value: 'c'},
                  {
                    label: {en: 'Item D (default)', de: 'Einheit D (default)'},
                    value: 'd',
                    isDefault: true
                  }
                ]
              }
            }
          }
        ],
        defaultParams: {
          dataProviderEnum: 'd'
        },
        context: {
          targetContentType: 'regular'
        }
      }
    ]
  }
}
```

## Enable copy flow in `contentTypeConfig`

Finally, you need to enable the copy flow for each content type that should be able to use it. To do this you provide a reference to the copy flow you defined in the project config by using the `handle` as the value for the `useDocumentCopyFlow` property.

```js
{
  handle: 'regular',
  // ...
  documentCopyFlows: [
    {
      useDocumentCopyFlow: 'articleToArticle'
    }
  ]
}
```

{{< info >}}
  Once a document copy flow is defined for a content type then the legacy declarative document copy and transform options will no longer be available.
{{< /info >}}
