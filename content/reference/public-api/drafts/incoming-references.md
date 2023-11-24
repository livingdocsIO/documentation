---
title: Incoming Draft References
identifier: Incoming Draft References
weight: 9
renderTOC: false
menus:
  reference:
    parent: Drafts
---

{{< api-example
  title="Get Incoming Draft References for a Document"
  scopes="public-api:drafts:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/drafts/:documentId/incomingDocumentReferences" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/drafts/:documentId/incomingDocumentReferences
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:documentId|integer|x||
|?limit|integer||A limit for how much documents to retrieve. Defaults to 100. Max. 100.|
|?offset|integer||An offset into the query. Useful when getting more than 100 results (pagination).|

--description--

This endpoint is functionally equivalent to the [Incoming Document References]({{< ref "/reference/public-api/publications/latest-publication-beta" >}}) endpoint for publications. But with this draft endpoint you will receive references from unpublished documents as well as references from the current state of documents even if these latest updates to the document are not published yet.

##### Related

- [Incoming Document References]({{< ref "/reference/public-api/publications/latest-publication-beta" >}}) (for publications)

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
