---
title: API Versioning
type: changelog-entry
weight: 1

change:
  date: 2025-03
  type: feature
---

We're introducing a new [API Versioning Strategy]({{< ref "/reference/public-api/versioning" >}}) that allows us to iterate on the API without breaking existing integrations.

With the introduction of a new versioning strategy, the `v1` and `beta` versions are now available as `2025-03` version. If you use any of those versions, you can safely change your integration to the `2025-03` version, which now contains both functionalities without any other changes.
