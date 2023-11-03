---
title: Menu Tool
description: Use Data-Record and li-tree plugin to build a menu tool
weight: 4
---

The idea is to use the [`li-tree`]({{< ref "/reference/document/metadata/plugins/li-tree">}}) metadata plugin on a Data Record to define a menu tree structure along with additional metadata.
Since each menu is just a document, it can be shown in dashboards and referenced in other documents.
As with all documents in Livingdocs, this is a way to express what the content is, but not how it is rendered.

Possible use cases can be:
- Top-level navigations in delivery frontends
- Shared navigation menus across topic pages
- Anything that represents a hierarchy of links

It's perfectly fine to create multiple such menu Content Types with different configurations.
Some may have additional metadata properties to control the behavior when rendered in Include Services or delivery frontends. Others may have stricter access control rules.

## Configuration

The menu tool can be completely setup using the Project Setup.

### Menu Content Type

The foundation of a menu is a Data-Record Content Type with an `li-tree` metadata property. We also add a text property that will be used as a display name.
Make sure to add it to the projects' list of Content Types.

{{< img src="menu-metadata.png" alt="Menu Metadata View" >}}

```js
{
  handle: 'menu',
  documentType: 'data-record',
  displayTitlePattern: '{{metadata.name}}',
  publishControl: {},
  info: {
    label: 'Menu'
  },

  metadata: [
    {
      handle: 'name',
      type: 'li-text',
      config: {
        required: true,
        maxLength: 20
      }
    },
    {
      handle: 'tree',
      type: 'li-tree',
      config: {
        maxDepth: 3
      },
      ui: {
        label: 'Menu Tree',
        config: {
          document: {
            useDashboard: 'articlesSimple'
          }
        }
      }
    }
  ]
}
```

### Table Dashboard

To have a place where menus can be found, created and deleted, we can use a [Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard">}}) along with a [Document Creation Flow]({{< ref "/guides/editor/document-creation-flow" >}}).

{{< img src="menu-creation.png" alt="Menu Creation Dialog" >}}
{{< img src="menu-dashboard.png" alt="Menu Dashboard View" >}}

Add a Document Creation Flow and a Table Dashboard to your Editor Settings:

```js
{
  documentCreationFlows: [
    {
      handle: 'createMenu',
      createFunction: 'createMenu',
      createButtonLabel: 'Create Menu',
      paramsSchema: [
        {
          handle: 'name',
          type: 'li-text',
          config: {
            required: true,
            maxLength: 20
          },
          ui: {
            config: {
              placeholder: 'Enter unique name',
            }
          }
        }
      ]
    }
  ],
  dashboards: [
    {
      handle: 'menus',
      type: 'tableDashboard',
      pageTitle: 'Menus',
      documentCreationFlows: [
        {useDocumentCreationFlow: 'createMenu'}
      ],
      baseFilters: [
        {key: 'documentType', term: 'data-record'},
        {key: 'contentType', term: 'menu'}
      ],
      columns: [
        {
          label: 'Name',
          minWidth: 375,
          growFactor: 2,
          priority: 1,
          componentName: 'liTableDashboardCellMain'
        }
      ]
    }
  ]
}
```
And here the registered creation function:

```js
liServer.registerCreateFunction({
  handle: 'createMenu',
  async create ({params = {}}) {
    return {
        title: params.name,
        contentType: 'menu',
        metadata: {name: params.name}
    }
  }
})
```

### Find menu by name

Delivery frontends can query the public API to find a menu by the `name` metadata property.
Fetching it by name instead by ID allows for the same identifier in different environments (staging, production, etc.).

**Note:** At the moment, there is no standard way to enforce the uniqueness and immutability of such an identifier.
We are working on a solution for that.

```js
const filters = JSON.stringify([
  {key: 'contentType', term: 'menu'},
  {key: 'metadata.name', term: 'a menu name'},
])
const response = await fetch(`api/v1/publications/search?filters=${filters}`)
```
