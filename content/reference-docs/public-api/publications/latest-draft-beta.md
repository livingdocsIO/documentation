---
title: Latest Draft Beta
identifier: Latest Draft Beta
weight: 8
renderTOC: false
menus:
  reference-docs:
    parent: Publications 
---

{{< api-example
  title="Get Latest Draft (public-api:write, public-api:drafts:read)"
  release="release-2022-03"
  beta=true
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/beta/documents/:documentId/latestDraft" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/beta/documents/:documentId/latestDraft
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:documentId|integer|x||
|?renditions|string||A comma-separated list of rendition handles. Example: `?renditions=web,json`|

--description--
This endpoint returns the most recent draft version of a document.
A token with permission 
The response is a JSON object with 5 possible top-level properties:

- systemdata
- metadata
- content
- references
- renditions (if rendition handles are specified)

--response--
200
---
---
```js
{
  "systemdata": {
    "projectId": 1,
    "channelId": 1,
    "documentId": 603,
    "contentType": "regular",
    "documentType": "article",
    "firstPublicationDate": "2022-02-22T16:33:42.836Z",
    "updatedAt": "2022-02-22T16:33:42.836Z",
    "design": {
      "name": "living-times",
      "version": "1.0.4"
    }
  },
  "content": [
    {
      "id": "doc-1fsh4faeo0",
      "identifier": "living-times.article-container",
      "component": "article-container",
      "position": "fixed",
      "containers": {
        "main": [
          {
            "id": "doc-1fsh4faeo3",
            "identifier": "living-times.paragraph",
            "component": "paragraph",
            "content": {
              "text": "First paragraph published."
            }
          },
          {
            "id": "doc-1fsh4g83l0",
            "identifier": "living-times.paragraph",
            "component": "paragraph",
            "content": {
              "text": "Second paragraph unpublished."
            }
          }
        ]
      }
    }
  ],
  "references": [
    {
      "id": "KjqXSj2P1-L0",
      "type": "language-group",
      "location": "metadata",
      "propertyName": "language"
    }
  ],
  "metadata": {
    "language": {
      "label": "German",
      "locale": "de",
      "groupId": "KjqXSj2P1-L0"
    },
    "title": "Draft (Changed)"
  },
  "renditions": [
    {
      "handle": "web",
      // ...
    }
  ]
}
```

{{< /api-example >}}
