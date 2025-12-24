---
title: Return objects with `results` array instead of directly returning arrays
type: changelog-entry
weight: 1

change:
  date: 2026-01
  type: feature
---

Starting with `/api/2026-01/*` the Public API endpoints which previously returned an array now return an object containing a `results` property with this array. There can also be a `total` number of results and a `cursor` for pagination depending on whether or not the endpoint supports it. To improve the accuracy of the pagination the `cursor` can be passed back to the endpoints or functions using the `after` parameter, for example: `/api/2026-01/publications/search?filters=${filters}&limit=10&after=${cursor}`.

The following endpoints return `{results: [], total: 0, cursor: ''}`:

- `GET /api/2026-01/publications/search`
- `GET /api/2026-01/documents/:documentId/incomingDocumentReferences`
- `GET /api/2026-01/documents/:documentId/incomingMediaReferences`
- `GET /api/2026-01/mediaLibrary/:mediaId/incomingDocumentReferences`
- `GET /api/2026-01/mediaLibrary/:mediaId/incomingMediaReferences`
- `GET /api/2026-01/drafts/:documentId/incomingDocumentReferences`

The following endpoints return `{results: []}`:

- `GET /api/2026-01/documents/latestPublications`
- `GET /api/2026-01/publicationEvents{/:channelHandle}`
- `GET /api/2026-01/document-lists`
- `GET /api/2026-01/categories`
- `GET /api/2026-01/mediaLibrary`
- `POST /api/2026-01/import/mediaLibrary`

To achieve the same effect when working directly with the Public API feature in downstream code you can pass `apiVersion: '2026-01'` (or greater once supported) within the main parameter object, for example: `publicApi.searchPublications({projectId, filters, apiVersion: '2026-01'})`.

The following methods return `{results: [], total: 0, cursor: ''}`:

- `publicApi.searchPublications()`
- `publicApi.getIncomingPublicationReferencesForDocument()`
- `publicApi.getIncomingMediaReferencesForDocument()`
- `publicApi.getIncomingPublicationReferencesForMedia()`
- `publicApi.getIncomingMediaReferencesForMedia()`
- `publicApi.getIncomingDocumentReferencesForDraft()`

The following methods return `{results: []}`:

- `publicApi.getLatestDraftsBeta()`
- `publicApi.getLatestPublications()`
- `publicApi.getPublicationEvents()`
- `publicApi.findDocumentLists()`
- `publicApi.getCategories()`
- `publicApi.getMediaLibraryEntries()`
- `publicApi.createMediaLibraryEntries()`

To continue to return the array directly you can still use the `/api/2025-11/*` (or earlier) endpoints, or omit the `apiVersion` when calling the methods.
