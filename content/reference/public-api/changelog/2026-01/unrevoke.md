---
title: Unrevoke
type: changelog-entry
weight: 3

change:
  date: 2026-01
  type: feature
---

```
PATCH /api/:apiVersion/mediaLibrary/:id {patches: [{operation: 'unrevokeAsset'}]}
```

A new unrevoke action has been added which can be used to revert a revoke action. This can be useful when a legal case has been resolved and the use of the asset is allowed again. This is only available with the media library's [2025 Behavior]({{< ref "/guides/media-library/2025-behavior" >}}).
