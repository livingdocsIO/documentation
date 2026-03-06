---
title: Preserve Updated At on Document Command API and Media Library Patch
type: changelog-entry
weight: 1

change:
  date: 2026-03
  type: feature
---

```
PATCH /api/:apiVersion/documents/{documentId}/commands {preserveUpdatedAt: true, commands: [...]}
PATCH /api/:apiVersion/mediaLibrary/{id} {preserveUpdatedAt: true, patches: [...]}
```

A new optional `preserveUpdatedAt` boolean parameter has been added to the [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) and the [Media Library]({{< ref "/reference/public-api/media-library" >}}) patch endpoint.

When set to `true`, the `updated_at` timestamp of the document or media library entry is not modified by the operation. By default (`false`), `updated_at` is set to the current time as before.

For the Document Command API, when combined with a `publish` command, the `lastPublicationDate` will also be set to the preserved `updated_at` timestamp instead of the current time.

This is useful for imports and migrations where the original timestamps should be preserved to maintain correct dashboard sort order.
