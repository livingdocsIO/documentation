---
title: Dashboard Source API
weight: 7
menus:
  customising:
    parent: Server API
    weight: 4
---

The DashboardSource API provides a simple way to populate a [home screen table dashboard]({{< ref "/reference/project-config/editor-settings#home-screen" >}}) with a custom list of documents.
Register a custom function on the server that returns a list of document ids. Consolidate the [home screen documentation]({{< ref "/reference/project-config/editor-settings#home-screen" >}}), to see how it can be connected to a dashboard.

Custom fetch functions can make requests to internal or external systems. However, they need to return document ids that exist within Livingdocs.

- Documents that are not found or not visible to the current user are skipped
- Results are limited to 35, no pagination support

```js
const axios = require('axios')

liServer.registerInitializedHook(() => {
  const dashboardSourcesApi = liServer.features.api('li-dashboard-sources')
  dashboardSourcesApi.register({
    handle: 'liDashboardSourceExample',
    async fetch({projectId, userId}) {
      // Make a request to a third party system, query the documents API, read a file or similar.
      return {results: ['1', '2', '3']}
    }
  })
})
```
