---
title: Public API
menus:
  customising:
    parent: Server API
    weight: 1
---

The server Public API offers a way to programmatically access and utilize the same functionalities available through the [HTTP Public API]({{< ref "/reference/public-api" >}}) within Livingdocs. You can find further information about the API, including its functions and arguments, by visiting the [HTTP Public API]({{< ref "/reference/public-api" >}}) reference.

This document provides a few examples demonstrating how to utilize the server Public API. For more detailed information, please reach out to your Customer Solutions contact.

## Get Latest Publication

**Related**

- [HTTP Public API - Get Latest Publication]({{< ref "/reference/public-api/publications/latest-publication" >}})

### API

```js
const publicApi = liServer.features.api('li-public-api')

// get publication with documentId 53
const documentVersion = await publicApi.getLatestPublication({projectId: 12, documentId: 53})
```

## Get Latest Publications

**Related**

- [HTTP Public API - Get Latest Publications]({{< ref "/reference/public-api/publications/latest-publications" >}})

### API

```js
const publicApi = liServer.features.api('li-public-api')

// get publications with documentId 53 or 57
const documentVersions = await publicApi.getLatestPublications({projectId: 12, documentId: [53, 57]})
```

## Search Publications

**Related**

- [HTTP Public API - Search]({{< ref "/reference/public-api/publications/search" >}})
- [Publication Search | Filter | Sort]({{< ref "/guides/search/publication-index" >}})

### API

```js
  const publicApi = liServer.features.api('li-public-api')
  const documentVersions = await publicApi.searchPublications({
    projectId: 12,
    contentTypes: ['regular']
  })
```

The query allows the following entries:
- `projectId`, mandatory, the projectId (int) for which documents are searched
- `searchTerm`, string used for full-text search
- `contentTypes`, array of contentType handles (string) to filter for (OR concatenated)
- `categories`, array of category ids (string) to filter for (OR concatenated)
- `languages`, array of language handles (string) to filter for (OR concatenated)
- `languageGroupId`, string of a single language group
- `filters`, array or object (see [Filters]({{< ref "/guides/search/publication-index#filters" >}}))
- `sort`, array of fields (string or object) to sort results by (see [Sort]({{< ref "/guides/search/publication-index#sort" >}}))
- `fields`, array of fields (string) to include for results (see [Fields]({{< ref "/guides/search/publication-index#fields" >}}))
- `limit`, integer of how many results to get, default 10
- `offset`, integer from which position to count results, useful for pagination, default 0. Max. 10000.

### Examples

```js
  const publicApi = liServer.features.api('li-public-api')

  // search for Regular articles with title 'My Article'
  const documentVersions = await publicApi.searchPublications({
    projectId: 12,
    contentTypes: ['regular'],
    filters: {
      key: 'metadata.title', term: 'My Article'
    }
  })
```
