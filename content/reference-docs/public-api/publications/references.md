---
title: Incoming References
weight: 5
renderTOC: false
menus:
  reference-docs:
    parent: Publications 
---

{{< api-example
  title="Get Incoming Publication References for a Document"
  release="release-2022-03"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/documents/:documentId/incomingDocumentReferences" \
  -H "Accept: application/json" \
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
  release="release-2022-03"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/documents/:documentId/incomingMediaReferences" \
  -H "Accept: application/json" \
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
