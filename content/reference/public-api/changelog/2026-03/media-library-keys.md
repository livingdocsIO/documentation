---
title: Get All Media Library Entry Keys
type: changelog-entry
weight: 2

change:
  date: 2026-03
  type: feature
---

A new endpoint has been added, `GET /api/:apiVersion/mediaLibrary/:id/keys`, which returns all asset keys (including variants) for the specified media library entry. This is useful for cache purging when image caches are handled by external systems. Further details can be found in the [Get All Media Library Entry Keys]({{< ref "/reference/public-api/media-library/#get-all-media-library-entry-keys" >}}) endpoint documentation.
