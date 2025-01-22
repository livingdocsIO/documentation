---
title: Document Transform Flows
description: Transform documents using server functions
weight: 1
---

{{< added-in "release-2024-09" block >}}

{{< info >}}
See the [Declarative Document Copy (Legacy)]({{< ref "/guides/editor/declarative-document-copy" >}}) guide for details about the legacy feature used prior to {{< release "release-2024-09" >}}.
{{< /info >}}

## Introduction

Document Transform Flows provide a flexible way to modify a document while keeping the same `documentId`. It is possible to modify the content type, title, content, metadata and translations of a document. However, once a document has been published it is no longer possible to transform it.

## Register a server function

Most of the logic for a transform flow will be defined within the transform function. You can register transform functions using the `liServer.registerTransformFunctions` method, which accepts an array of objects containing a unique `handle` and a `transform` function.

When the function is executed it is provided with the `document` being transformed, the `projectConfig` which the document belongs to, the `userId` of the user which triggered the transform process, the `params` of the optional `paramsSchema` form completed by the user, and a `context` object which is defined within the project config later.

The function can return the following values: `contentType`, `title`, `content`, `metadata`, `translations`. These values will be used to modify the existing document.

```js
liServer.registerTransformFunctions([
  {
    handle: 'simpleContentTypeTransform',
    transform({document, projectConfig, userId, params, context}) {
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

## Add document transform flow to `projectConfig`

### Minimal

Registering a transform flow for a project can be very simple. Only a unique `handle` property and a reference to the `handle` of the transform function are required.

```js
{
  // ...
  editorSettings: {
    // ...
    documentTransformFlows: [
      {
        handle: 'externalArticleToArticle',
        transformFunction: 'simpleContentTypeTransform'
        // transformButtonLabel will be generated using handle: "External Article To Article"
        // transformIcon will default to 'swap-horizontal'
      }
    ]
  }
}
```

### Full

In order to customise the transform function further you can also customise the label, description and icon that appear in the UI. The label and description properties are [translatable]({{< ref "/guides/editor/multi-language-ui#translating-config-labels-placeholders-and-titles" >}}). It is also possible to define a `paramsSchema` using metadata plugins to prompt the user to input some additional data. The fields will be presented to the user in a form after they select the transform flow, and provided to the transform function in the `params` object. You can also set default values for the form using the `defaultParams` property. An additional property, `context`, can be used to pass data directly to the transform function. This can be useful in situations where you want to reuse the transform function for different scenarios.

```js
{
  // ...
  editorSettings: {
    // ...
    documentTransformFlows: [
      {
        handle: 'externalArticleToArticle',
        transformFunction: 'simpleContentTypeTransform',
        transformButtonLabel: 'Transform into Article',
        transformDescription: 'All data will be kept',
        transformIcon: 'file-outline',
        paramsSchema: [
          {
            handle: 'category',
            type: 'li-category',
            ui: {
              label: 'Category',
              config: {
                placeholder: 'Select a category...'
              }
            }
          },
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

## Enable transform flow in `contentTypeConfig`

Finally, you need to enable the transform flow for each content type that should be able to use it. To do this you provide a reference to the transform flow you defined in the project config by using the `handle` as the value for the `useDocumentTransformFlow` property.

```js
{
  handle: 'external',
  // ...
  documentTransformFlows: [
    {
      useDocumentTransformFlow: 'externalArticleToArticle'
    }
  ]
}
```
