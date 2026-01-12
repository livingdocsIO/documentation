---
title: Revoke Note
type: changelog-entry
weight: 2

change:
  date: 2026-01
  type: feature
---

```
PATCH /api/:apiVersion/mediaLibrary/:id {patches: [{operation: 'revokeAsset', note: 'Case #1'}]}
```

The revoke action has been extended with a `note` property. `note` is a string which has a maximum length of 200 characters. This is only available with the media library's [2025 Behavior]({{< ref "/guides/media-library/2025-behavior" >}}).
