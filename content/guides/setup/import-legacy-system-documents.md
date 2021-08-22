---
title: Initial Document Import
description: Use the import API for large document imports
weight: 3
---


## Foreword and import statistics

Importing millions of documents from legacy systems into Livingdocs takes time. We observed these numbers:
- 50k articles per hour
- 100k - 300k images per hour

During these observations, memory usage was around ~4GB or RAM und 25Mbps of inbout and outbound bandwidth was used.

If no images are imported, a lot more documents could be imported.

## Custom document IDs

{{< added-in release-2020-10 >}}

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

## Custom publication dates

{{< added-in release-2021-03 >}}

When importing articles from legacy systems, you should be setting the `publicationDate`. The `publicationDate` can be found in the [public api documentation](https://edit.livingdocs.io/public-api) or [import api reference documentation]({{< ref "/reference-docs/server-api/import-api.md" >}}).

The `publicationDate` controls when an article has been published, updated and is important for the search to function properly.

If an article has multiple publication dates and you want to keep a history of for example `created` and `updated`, we advise importing the same article twice.

First import the article with the `publicationDate` containing the value of the first time an article was published.
Then re-import the article and you basically would 'update' that article with a new `publicationDate`

We save the `firstPublicationDate` of an article, so you could access both dates later on in your delivery and show when an article has been published initially and when it was updated.
