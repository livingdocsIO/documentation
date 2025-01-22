---
title: Document Print Flows
description: Create print copies of documents using server functions and a dedicated UI
weight: 1
---

{{< added-in "release-2024-11" block >}}

## Introduction

Document Print Flows provide a flexible way to create print copies of web documents. They can also be used to create web versions of print documents in situations where the print version was created first. They are configured in a similar way to [Document Copy Flows]({{< ref "/guides/editor/document-copy-flows" >}}), with the server functions handling most of the logic. The main difference is that there is a 1:1 relationship between a print and web document, and they use a different UI to initiate the copy. There are also additional indicators within the UI to show the status of the linked documents.

## Register a server function

You can register print copy functions using the `liServer.registerPrintFunctions` method, which accepts an array of objects containing a unique `handle` and a `copy` function.

When the function is executed it is provided with the `document` being copied, the `projectConfig` which the document belongs to, the `userId` of the user which triggered the copy process, and a `context` object which is defined within the project config later.

The function can return the following values: `contentType`, `title`, `content`, `metadata`, `translations`. Only `contentType` is required. If any of the other properties are not returned in the response object then the values from the source document will be used to create the copy.

{{< warning >}}
When returning content you must define component ids, either by keeping the id from the source document or defining your own string. Component ids are used when diffing the content to detect changes, so if they are missing or randomly generated then a green dot used to indicate changes in the UI will always be visible.
{{< /warning >}}

```js
liServer.registerPrintFunctions([
  {
    handle: 'myPrintCopyFunction',
    copy({projectConfig, document, userId, context}) {
      if (context.createPrintArticle) {
        return {
          title: `Print version of: ${document.title}`,
          contentType: 'print',
          content: filterComponents(document.content, allowedComponents),
          metadata: filterMetadata(document.metadata.toJSON(), allowedMetadata)
        }
      }

      return {
        title: `Web version of: ${document.title}`,
        contentType: 'regular'
      }
    }
  }
])
```

## Add document print flow to `projectConfig`

### Minimal

Registering a print flow for a project can be very simple. A unique `handle` property, a reference to the `handle` of the print copy function, and the `direction` are required. The `direction` property is used to set the correct labels and behaviours within the UI.

```js
{
  // ...
  editorSettings: {
    // ...
    documentPrintFlows: [
      {
        handle: 'printToRegular',
        printFunction: 'myPrintCopyFunction',
        direction: 'print-to-web' // or 'web-to-print'
        // printButtonLabel will be generated using handle: "Print To Regular"
        // printIcon will default to 'book-open-variant-outline'
      }
    ]
  }
}
```

### Full

In order to customise the print flow further you can set the label, description and icon that appear in the UI. However, these will only appear in the dialog when there is more than one print option available. The label and description properties are [translatable]({{< ref "/guides/editor/multi-language-ui#translating-config-labels-placeholders-and-titles" >}}). An additional property, `context`, can be used to pass data directly to the print copy function. This can be useful in situations where you want to reuse the function for different scenarios.

```js
{
  // ...
  editorSettings: {
    // ...
    documentPrintFlows: [
      {
        handle: 'regularToPrint',
        printFunction: 'myPrintCopyFunction',
        direction: 'web-to-print',
        printButtonLabel: {
          en: 'Make Short Format Print Version',
          de: 'Kurzformatigen Druckartikel Erstellen'
        },
        printDescription:
          'Only text will be copied, and only some contextual metadata will be cleared',
        printIcon: 'format-align-justify',
        context: {createPrintArticle: true}
      }
    ]
  }
}
```

## Enable print flow in `contentTypeConfig`

Finally, you need to enable the print flow for each content type that should be able to use it. To do this you provide a reference to the print flow you defined in the project config by using the `handle` as the value for the `useDocumentPrintFlow` property.

```js
{
  handle: 'regular',
  // ...
  documentPrintFlows: [
    {
      useDocumentPrintFlow: 'regularToPrint'
    }
  ]
}
```

```js
{
  handle: 'print',
  // ...
  documentPrintFlows: [
    {
      useDocumentPrintFlow: 'printToRegular'
    }
  ]
}
```

## Table Dashboard Cell

Optionally, if you would like to have a quick overview of the state of print versions of web articles then you can use `liTableDashboardCellPrint` within a table dashboard's columns. The cell shows the print icon when a print copy exists, and clicking on it will open the print document. It also uses a small dot to indicate that the web version has changed since the print copy was created. The dot is also visible as part of the print flow drop-down in the document editor, and further options are provided here to compare the differences between the documents.

```js
{
  editorSettings: {
    dashboards: [
      {
        handle: 'myDashboard',
        type: 'tableDashboard',
        // ...
        columns: [
          // ...
          {
            label: {en: 'Print', de: 'Druck'},
            minWidth: 50,
            growFactor: 0,
            priority: 2,
            componentName: 'liTableDashboardCellPrint'
          }
        ]
      }
    ]
  }
}
```
