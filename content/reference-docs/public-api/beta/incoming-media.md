---
title: Incoming Media
weight: 4
renderTOC: false
menus:
  reference-docs:
    parent: Beta
---

{{< api-example
  title="Get Incoming Media References for a Document"
  beta=true
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/beta/documents/:documentId/incomingMediaReferences" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/beta/documents/:documentId/incomingMediaReferences
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

{{< api-example
  title="Get Incoming Media References for a Media Library Entry"
  beta=true
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/beta/mediaLibrary/:mediaId/incomingMediaReferences" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/beta/mediaLibrary/:mediaId/incomingMediaReferences
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
    "id": "B1LPgANhJFpo",
    "references": [
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "metadata",
        "propertyName": "imageLink"
      }
    ]
  }
]
```

{{< /api-example >}}