---
title: Revoke State Conflict Errors
type: changelog-entry
weight: 2

change:
  date: 2026-01
  type: breaking-change
---

Revoking an already revoked media library entry will now throw a `ConflictError`, and return a 409 status for requests. Throwing an error is important to preserve the exising revoke note. It also matches the new unrevoke behaviour where calling unrevoke on an entry which is not revoked will throw an error.
