---
title: 'Kordiam Rebranding: Remove Desknet endpoints in newer versions'
type: changelog-entry
weight: 1

change:
  date: 2025-05
  type: deprecation
---

The public API endpoints of the version `2025-05` do not support `desknet` in the path anymore.

That means the following api prefixes should get changed:  
`/api/v1/desknet/` > `/api/2025-05/kordiam/`  
`/api/v1/desknet-integration/` > `/api/2025-05/kordiam-integration/`

The Desknet endpoints are supported in api versions `v1` till `2025-03`, but not in any versions after that:

❌ `POST` `/api/2025-05/desknet/element`  
❌ `PUT` `/api/2025-05/desknet/element`  
❌ `PUT` `/api/2025-05/desknet/element/:documentId`  
❌ `DELETE` `/api/2025-05/desknet/element/:documentId`

We suggest to migrate to the new versions that use `kordiam` in the path:

✅ `POST` `/api/2025-05/kordiam/element`  
✅ `PUT` `/api/2025-05/kordiam/element`  
✅ `PUT` `/api/2025-05/kordiam/element/:documentId`  
✅ `DELETE` `/api/2025-05/kordiam/element/:documentId`

The same goes for the legacy kordiam integration (not the global integration). Just change the path from `/desknet-integration` to `/kordiam-integration`:

❌ `POST` `/api/2025-05/desknet-integration/oauth/token`  
❌ `POST` `/api/2025-05/desknet-integration/statuses`  
❌ `PUT` `/api/2025-05/desknet-integration/publication`  
❌ `PUT` `/api/2025-05/desknet-integration/publication/:documentId`  
❌ `DELETE` `/api/2025-05/desknet-integration/publication/:documentId`

✅ `POST` `/api/2025-05/kordiam-integration/oauth/token`  
✅ `POST` `/api/2025-05/kordiam-integration/statuses`  
✅ `PUT` `/api/2025-05/kordiam-integration/publication`  
✅ `PUT` `/api/2025-05/kordiam-integration/publication/:documentId`  
✅ `DELETE` `/api/2025-05/kordiam-integration/publication/:documentId`
