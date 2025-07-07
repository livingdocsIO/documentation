---
title: 'Deprecation of `/project`, `/channelConfig` and `/channels/{channelHandle}` endpoints'
type: changelog-entry
weight: 1

change:
  date: 2025-07
  type: deprecation
---

The following endpoints are no longer available in newer api versions anymore:

❌ `GET` `/api/2025-07/project`  
❌ `GET` `/api/2025-07/channels/{channelHandle}`  
❌ `GET` `/api/2025-07/channelConfig`  
❌ `POST` `/api/2025-07/channelConfig`

Please use the following endpoints instead, which are available since v1:

✅ `GET` `/api/2025-07/projectConfig`  
✅ `POST` `/api/2025-07/projectConfig`

All the 4 legacy endpoints are still available in v1 to 2025-05:

✅ `GET` `/api/v1/project` to `/api/2025-05/project`  
✅ `GET` `/api/v1/channels` to `/api/2025-05/channels`  
✅ `GET` `/api/v1/channelConfig` to `/api/2025-05/channelConfig`  
✅ `POST` `/api/v1/channelConfig` to `/api/2025-05/channelConfig`
