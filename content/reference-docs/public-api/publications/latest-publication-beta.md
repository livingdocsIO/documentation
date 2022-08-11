---
title: Latest Publication Beta
identifier: Latest Publication Beta
weight: 2
renderTOC: false
menus:
  reference-docs:
    parent: Publications 
---

{{< api-example
  title="Get Latest Publication"
  scopes="public-api:read"
  beta=true
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/beta/documents/:documentId/latestPublication" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/beta/documents/:documentId/latestPublication
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:documentId|integer|x||
|?fields|string||Filters which (comma separated) properties are included in the response. Defaults to 'systemdata,metadata,content' (no renditions).|
|?renditions|string||A comma-separated list of rendition handles. Example: `?renditions=web,json`|

--description--
The response is a JSON object with 5 possible top-level properties:

- systemdata
- metadata
- content
- renditions
- references

--response--
200
---
---
```js
{
  "systemdata": {
    "projectId": 1,
    "channelId": 1,
    "documentId": 1,
    "contentType": "article",
    "documentType": "article",
    "publicationId": 1,
    "firstPublicationDate": "2021-03-16T14:08:11:686Z",
    "updatedAt": "2021-03-18T16:32:04.170Z",
    "layout": "regular",
    "design": {
      "name": "timeline",
      "version": "1.1.0"
    }
  },
  "metadata": {
    "title": "a title",
    "description": "some lead",
    "dependencies": {}
  },
  "content": [
    {
      "id": "doc-1b8i1ksh10",
      "identifier": "timeline.head",
      "component": "head",
      "content": {
        "title": "a title",
        "text": "some lead"
      }
    },
    {
      "id": "doc-1b8i1ksh20",
      "identifier": "timeline.normal",
      "component": "normal",
      "content": {
        "caption": "my caption"
      },
      "styles": {
        "position": "left"
      }
    },
    {
      "id": "doc-1b8i1ksh30",
      "identifier": "timeline.p",
      "component": "p",
      "content": {
        "text": "first paragraph"
      }
    },
    {
      "id": "doc-1b8i1me1d0",
      "identifier": "timeline.p",
      "component": "p",
      "content": {
        "text": "second paragraph"
      }
    }
  ],
  "renditions": [
    {
      "handle": "web",
      "content": "<div class=\"head\">\n  <h1>a title</h1>\n  <p class=\"lead\">some lead</p>\n</div>\n<figure class=\"aspect-ratio left\">\n  <img class=\"doc-image-empty\" src=\"data:image/svg+xml;charset=UTF-8,…\">\n  <figcaption>my caption</figcaption>\n</figure>\n<p>first paragraph</p>\n<p>second</p>\n<p> and third one. :)</p>"
    },
    {
      "handle": "mobile",
      "content": {
        "content": [
          {
            "id": "doc-1b8i1ksh10",
            "identifier": "timeline.head",
            "component": "head",
            "content": {
              "title": "a title",
              "text": "some lead"
            }
          },
          {
            "id": "doc-1b8i1ksh20",
            "identifier": "timeline.normal",
            "component": "normal",
            "content": {
              "caption": "my caption"
            },
            "styles": {
              "position": "left"
            }
          },
          {
            "id": "doc-1b8i1ksh30",
            "identifier": "timeline.p",
            "component": "p",
            "content": {
              "text": "first paragraph"
            }
          },
          {
            "id": "doc-1b8i1me1d0",
            "identifier": "timeline.p",
            "component": "p",
            "content": {
              "text": "second paragraph"
            }
          }
        ],
        "design": {
          "name": "timeline",
          "version": "1.1.0"
        }
      }
    },
    {
      "handle": "app",
      "error": {
        "message": "Processing of Channel 'app' for document '1' failed. Detailed error message…"
      }
    }
  ],
  "references": [
    {
      "id": "YbzTpusGyJtF",
      "type": "language-group",
      "location": "metadata",
      "propertyName": "language"
    }
  ]
}
```

{{< /api-example >}}
