---
title: 'Media Library: Serve Image'
type: changelog-entry
weight: 1

change:
  date: 2025-03
  type: feature
---

We’ve added a new public API endpoint:

`/api/2025-03/mediaLibrary/serve-image/:key`

This endpoint provides access to an image in its original dimensions, as long as it has not been revoked or marked as invalid. It can serve as a source for proxies or image processing services.

Please check the [API reference]({{< ref "/reference/public-api/media-library/#serve-image" >}}) for more details.
