---
title: Incoming Publication
weight: 3
renderTOC: false
menus:
  reference-docs:
    parent: Beta
---

{{< api-example
  title="Get Incoming Publication References for a Document"
  beta=true
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/beta/documents/:documentId/incomingDocumentReferences" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/beta/documents/:documentId/incomingDocumentReferences
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
  title="Get Incoming Publication References for a Media Library Entry"
  beta=true
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/beta/mediaLibrary/:mediaId/incomingDocumentReferences" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/beta/mediaLibrary/:mediaId/incomingDocumentReferences
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:mediaId|string|x||
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
    "id": 2,
    "references": [
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "image-directive",
        "componentId": "doc-1ev8345oj0",
        "componentName": "image",
        "directiveName": "image"
      },
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "metadata",
        "propertyName": "teaserImage"
      }
    ]
  },
  {
    "id": 3,
    "references": [
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "image-directive",
        "componentId": "doc-1euq8lq1o0",
        "componentName": "image",
        "directiveName": "image"
      },
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "metadata",
        "propertyName": "teaserImage"
      }
    ]
  }
]
```

{{< /api-example >}}