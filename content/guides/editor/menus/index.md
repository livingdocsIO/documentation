---
title: Menus
description: Model menus with data records
weight: 4
---

> [!WARNING] {{< deprecated-in "release-2024-11" >}}
> The dedicated Menu Tool with the endpoint [GET /api/v1/menus/:channelHandle]{{< ref "/reference/public-api/menus" >}} has been deprecated in favor of modeling menus with data records as described below. Please reach out for assistance with migrating from the Menu Tool to data records. The dedicated Menu Tool will be removed with release-2025-05.

Menus can be conveniently modeled using data records, which can be included in dashboards and referenced in other documents. Like all documents in Livingdocs, they define the content but not the presentation.

Common use cases for menus include:

- Top-level navigation in delivery frontends
- Shared navigation structures across multiple topic pages
- Any hierarchical structure of links

You can create multiple menu content types with different configurations. For example, some menus might include additional metadata to control their behavior when rendered in Include Services or deliveries, while others may have custom editing permissions.

## Configuration

### Configuring a Content Type

{{< img src="menu-metadata.png" alt="Menu Metadata View" >}}

Menus are best modeled using a data record [content type]({{< ref "/reference/project-config/content-types" >}}). We recommend including the following properties, with the option to add additional properties as needed:

- **Menu Name**: Use the [`li-unique-id`]({{< ref "/reference/document/metadata/plugins/li-unique-id">}}) metadata plugin to represent the menu name, ensuring uniqueness and preventing duplicate names across menus. Deliveries can [retrieve menus by name]({{< ref "#fetch-menus-by-li-unique-id" >}}), with the assurance that only a single one matches the query.
- **Menu Items**: Represent menu items using the [`li-tree`]({{< ref "/reference/document/metadata/plugins/li-tree">}}) metadata plugin. This allows for a tree structure, enabling users to reference both internal and external resources.

```js
{
  handle: 'menu',
  documentType: 'data-record',
  displayTitlePattern: '{{metadata.name}}',
  info: {
    label: 'Menu'
  },
  metadata: [
    {
      handle: 'name',
      type: 'li-unique-id',
      config: {
        index: true,
        required: true,
        regex: '^[a-zA-Z0-9\\-]+$',
        uniquenessScope: 'menu'
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
            useDashboard: 'articles'
          }
        }
      }
    }
  ]
}
```

### Configuring a Table Dashboard

{{< img src="menu-creation.png" alt="Menu Creation Dialog" >}}

To manage and create menus, configure a [Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) along with a [Document Creation Flow]({{< ref "/guides/editor/document-creation-flow" >}}) in the [Editor Settings]({{< ref "/reference/project-config/editor-settings" >}}):

```js
{
  dashboards: [{
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
    columns: [{
      label: 'Name',
      minWidth: 375,
      growFactor: 2,
      priority: 1,
      componentName: 'liTableDashboardCellMain'
    }]
  }],
  documentCreationFlows: [{
    handle: 'createMenu',
    createFunction: 'createMenu',
    createButtonLabel: 'Create Menu',
    paramsSchema: [{
      handle: 'name',
      type: 'li-unique-id',
      config: {
        required: true,
        regex: '^[a-zA-Z0-9\\-]+$',
        uniquenessScope: 'menu'
      },
      ui: {
        config: {
          placeholder: 'Enter unique name',
        }
      }
    }]
  }],
  mainNavigation: [{
    handle: 'menus',
    label: 'Menus',
    dashboard: 'menus',
    icon: 'file-tree'
  }]
}
```

Finally, register a creation function on the server, which will be invoked by the creation flow:

```js
liServer.registerCreateFunction({
  handle: 'createMenu',
  async create({params = {}}) {
    return {
      title: params.name,
      contentType: 'menu',
      metadata: {name: params.name}
    }
  }
})
```

## Fetch Menus by `li-unique-id`

Deliveries can query the public API to find a menu using its `li-unique-id` metadata property. Unlike document IDs, this approach allows the same identifier to be used across different environments (e.g., staging, production). When querying with the key `metadata.<handle>.id` and the value `<uniquenessScope>.<uniqueId>`, the `li-unique-id` metadata plugin ensures a single matching result.

```js
const filters = JSON.stringify([{key: 'metadata.name.id', term: 'menu:main'}])
const response = await fetch(`api/v1/publications/search?filters=${filters}`)
```
