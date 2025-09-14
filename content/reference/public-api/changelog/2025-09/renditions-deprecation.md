---
title: 'Deprecation of `renditions` endpoints and query parameters'
type: changelog-entry
weight: 1

change:
  date: 2025-09
  type: deprecation
---

The following endpoint is no longer available in newer api versions anymore:

❌ `GET` `/api/2025-09/documents/{documentId}/latestPublication/renditions/{renditionHandles}`

The following endpoints don't support the `?renditions` query parameter anymore:

❌ `GET` `/api/2025-09/documents/{documentId}/latestDraft?renditions=web`  
❌ `GET` `/api/2025-09/documents/{documentId}/latestPublication?renditions`

There's no replacement for renditions in livingdocs as all transforms should be done when aggregating content for your frontends.

But all three endpoints still support the old logic in v1 to 2025-05:

✅ `GET` `/api/2025-07/documents/{documentId}/latestPublication/renditions/{renditionHandles}`  
✅ `GET` `/api/2025-07/documents/{documentId}/latestDraft?renditions=web`  
✅ `GET` `/api/2025-07/documents/{documentId}/latestPublication?renditions`
