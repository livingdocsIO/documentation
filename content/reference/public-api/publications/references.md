---
title: Incoming References
weight: 6
renderTOC: false
menus:
  reference:
    parent: Publications
---

{{< api-example
  title="Get Incoming Publication References for a Document"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/documents/:documentId/incomingDocumentReferences" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/documents/:documentId/incomingDocumentReferences
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:documentId|integer|x||
|?limit|integer||A limit for how much published documents to retrieve. Defaults to 100. Max. 100.|
|?offset|integer||An offset into the query. Useful when getting more than 100 results (pagination).|

--description--

This endpoint returns all publications which link to this document (via content or metadata)

The example below finds a reference to ID 1 when requesting for incomingDocumentReference with ID 2.

{{< img src="./references.png" alt="Component Property" >}}


##### Use Cases

- Find publications that link to this document for cache invalidation

##### Notes

- Eventual Consistency of Reference because of the usage of Elasticsearch


##### Not Supported

Find publications in a [Document List]({{< ref "/reference/public-api/document-lists" >}}) put on another document.

--response--
200
---
---
```js
[
  {
    "id": 4,
    "references": [
      {
        "id": "1",
        "type": "document",
        "location": "include-directive",
        "componentId": "doc-1euiflvoq0",
        "serviceName": "editable-teaser",
        "propertyName": "article",
        "componentName": "teaser-include",
        "directiveName": "teaser"
      }
    ]
  },
  {
    "id": 2,
    "references": [
      {
        "id": "1",
        "type": "document",
        "location": "include-directive",
        "componentId": "doc-1eu6i7l880",
        "serviceName": "editable-teaser",
        "propertyName": "article",
        "componentName": "teaser-include",
        "directiveName": "teaser"
      }
    ]
  }
]
```

{{< /api-example >}}

{{< api-example
  title="Get Incoming Media References for a Document"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/documents/:documentId/incomingMediaReferences" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/documents/:documentId/incomingMediaReferences
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:documentId|integer|x||
|?limit|integer||A limit for how much published documents to retrieve. Defaults to 100. Max. 100.|
|?offset|integer||An offset into the query. Useful when getting more than 100 results (pagination).|

--description--

This endpoint returns all Media Library Entries which link to this document (via metadata - li-document-reference)

--response--
200
---
---
```js
[
  {
    "id": "98sXCahM5PEk",
    "references": [
      {
        "id": "3",
        "type": "document",
        "location": "metadata",
        "propertyName": "documentLink"
      }
    ]
  }
]
```

{{< /api-example >}}
