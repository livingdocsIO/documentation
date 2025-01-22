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

// get publications by ids
const documentVersions = await publicApi.getLatestPublications({
  projectId: 12,
  documentId: [53, 57]
})
```

The query allows the following entries:

- `projectId`, mandatory, the projectId (int) for which documents are searched
- `documentId`, filter by one, multiple or documentId ranges (Supported filters: id.gte, id.gt, id.lte, id.lt)
- `contentTypes`, array of contentType handles (string) to filter for (OR concatenated)
- `fields`, array of fields (string) to include for results (see [Fields]({{< ref "/guides/search/publication-index#fields" >}}))
- `includeReferences`, default: false, adds `references` to [Fields]({{< ref "/guides/search/publication-index#fields" >}})
- `publishedAt`, filter by publish date range. (Supported filters: publishedAt.gte, publishedAt.gt, publishedAt.lte, publishedAt.lt)
- `reverse`, order publications in ascending order instead of the default descending order. This is useful if you want to paginate using a time based filter with publishedAt.
- `limit`, integer of how many results to get, default 10
- `after`, offset into the filter. Useful when getting more than 100 results (pagination). Max. 10000. Prefer range based filters like documentId.get or publishedAt.gte.

### Examples

```js
// get multiple documents by id
const documentVersions = await publicApi.getLatestPublications({
  projectId: 12,
  documentId: [53, 57]
})

// get documents by id range e.g. for exports
const documentVersions = await publicApi.getLatestPublications({
  projectId: 12,
  documentId: {gt: 0, lte: 100}
})

// retrieve all publications since a specific timestamp
const documentVersions = await publicApi.getLatestPublications({
  projectId: 12,
  publishedAt: {gte: '2021-05-01T00:00:00.000Z'}
})
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
    key: 'metadata.title',
    term: 'My Article'
  }
})

// get documents by id range
const documentVersions = await publicApi.searchPublications({
  projectId: 12,
  contentTypes: ['regular'],
  filters: {
    key: 'documentId',
    range: {gt: 0, lte: 100}
  }
})
```

## Command API

**Related**

- [HTTP Public API - Document Command API]({{< ref "/reference/public-api/document-command-api" >}})

### API

```js
const publicApi = liServer.features.api('li-public-api')

// add paragraph after the first component
await publicApi.executeDocumentCommands({
  documentId: documentVersion.id,
  projectId: documentVersion.projectId,
  commands: [
    {
      // Inserts a new component into the document content.
      operation: 'insertComponent',
      componentId: 'doc-custom-123456',
      componentName: 'p',
      content: {
        text: 'I automatically added a new paragraph.'
      },
      position: {
        previousComponentId: documentVersion.content[0].id
      }
    }
  ]
})
```

The function allows the following parameters:

- `projectId`, mandatory, the projectId (int) for which documents are searched
- `documentId`, mandatory, document to update
- `conditions`, mandatory, an array of commands to execute.
- `userId`, optional, user which updated the document
- `version` optional, current document version. When set on update the version is checked.
- `preconditions`, optional, If a precondition assertion fails, no commands are executed

Please check [HTTP Public API - Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) for a more detailled description of how to apply `conditions`, `version`, `preconditions`.
