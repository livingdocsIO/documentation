---
title: Public API
menus:
  customising:
    parent: Server API
    weight: 1
---

The server Public API offers a way to programmatically access and utilize the same functionalities available through the [HTTP Public API]({{< ref "/reference/public-api" >}}) within Livingdocs. You can find further information about the API, including its functions and arguments, by visiting the [HTTP Public API]({{< ref "/reference/public-api" >}}) reference.

This document provides a few examples demonstrating how to utilize the server Public API. For more detailed information, please reach out to your Customer Solutions contact.

## Example - Get Latest Publication

Similar to [HTTP Public API - Get Latest Publication]({{< ref "/reference/public-api/publications/latest-publication" >}})

```js
const publicApi = liServer.features.api('li-public-api')
const documentVersion = await publicApi.getLatestPublication({projectId: 12, documentId: 53})
```

## Example - Search Publications

Similar to [HTTP Public API - Search Publications]({{< ref "/reference/public-api/publications/search" >}})

```js
  const publicApi = liServer.features.api('li-public-api')
  const doc = await publicApi.searchPublications({
    projectId: 12,
    contentTypes: ['regular'],
    filters: {
      key: 'metadata.title',
      term: 'My Article'
    }
  })
```
