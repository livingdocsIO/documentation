---
title: Latest Draft Beta
identifier: Latest Draft Beta
weight: 8
renderTOC: false
menus:
  reference:
    parent: Drafts
---

{{< api-example
  title="Get Latest Draft"
  scopes="public-api:write, public-api:drafts:read"
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

The response is a JSON object with 5 possible top-level properties:

- systemdata
- metadata
- content
- references
- renditions (deprecated)

##### Use Cases

- Automation: Fetch draft, modify draft with an external system, update a draft via [Command API]({{< ref "/reference/public-api/command-api" >}})
- Create a [Document Preview]({{< ref "/guides/editor/document-previews" >}}) with an external draft service
- Drafts [Delivery Build]({{< ref "/guides/editor/publish-control/delivery" >}}) (Digital Ausgabe)


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
    "firstPublicationDate": "2022-03-16T14:08:11:000Z",
    "significantPublicationDate": "2022-10-26T07:25:00.000Z",
    "visiblePublicationDate": "2022-10-27T06:00:00.000Z",
    "updatedAt": "2023-02-22T16:33:42.836Z",
    "design": {
      "name": "living-times",
      "version": "1.0.4"
    }
  },
  "content": [
    {
      "id": "doc-1fsh4faeo0",
      "component": "article-container",
      "identifier": "living-times.article-container",
      "position": "fixed",
      "containers": {
        "main": [
          {
            "id": "doc-1fsh4faeo3",
            "component": "paragraph",
            "identifier": "living-times.paragraph",
            "content": {
              "text": "First paragraph published."
            }
          },
          {
            "id": "doc-1fsh4g83l0",
            "component": "paragraph",
            "identifier": "living-times.paragraph",
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
