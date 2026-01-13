---
title: Stricter Validation for Imported Documents
type: changelog-entry
weight: 1

change:
  date: 2026-01
  type: breaking-change
---

Documents imported via the Public API were previously validated too loosely, allowing imports with incorrect content structures. This could cause issues later when editing these documents in the Livingdocs Editor, where content validation is more strict.

Importing documents with an invalid content schema via the Public API is no longer possible and will now result in a failed import.
