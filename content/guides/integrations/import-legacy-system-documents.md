---
title: Import and Identify Documents from a Legacy System
menus:
  guides:
    parent: Integrations
---

{{< added-in release-2020-10 >}}

## Motivation

During a migration of an existing system, it's best practice to migrate all entries of the old system into livingdocs.
To ease the migration, we want to support user-defined identifiers, so a custom import script can reuse existing identifiers.

To prevent issues with the id generation of postgres, we'll make the maximum allowed id configurable.

## Example
SQL to execute to prevent conflicts when new documents are generated:

You should replace 100000 with the maximum id of the legacy system you'd like to import documents from.

```sql
ALTER SEQUENCE documents_id_seq  RESTART WITH 100000;
```

Livingdocs Server Configuration needed to support custom ids:

```js
// server configuration
documents: {
  allowCustomIdsBelow: 100000,
}
```

Example curl request to import a document with a custom document id:

```js
curl -k -X POST "https://edit.livingdocs.io/proxy/api/v1/import/documents" \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer ey1234' \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data-binary @- << EOF
 {
  // Attention! It's important that the systemName is always the same
  // for all documents, otherwise the mapping does not work properly
  "systemName": "import",
  "documents": [{
    "documentId": 1,
    "id": "123abc",
    "title": "test import",
    "contentType": "article",
    "checksum": "xyz456",
    "livingdoc": {
      "content": [],
      "design": {
        "name": "living-times",
        "version": "1.0.1"
      }
    },
    "metadata": {
      "description": "foo"
    }
  }]
}
EOF
```
