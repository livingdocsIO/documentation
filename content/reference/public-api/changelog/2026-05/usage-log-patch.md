---
title: Add Usage Log Operations to Media Library Patch
type: changelog-entry
weight: 2

change:
  date: 2026-05
  type: feature
---

The Media Library Entry patch endpoint in the public API has been extended to allow external systems (e.g. print system) to report the usage of a media library entry and provide the details.

The new operations are `addUsageLogEntry`, `updateUsageLogEntry` and `removeUsageLogEntry`. Further details can be found in the [Patch a Media Library Entry]({{< ref "/reference/public-api/media-library/#patch-a-media-library-entry" >}}) endpoint documentation.
