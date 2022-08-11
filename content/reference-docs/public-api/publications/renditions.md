---
title: Renditions
weight: 7
renderTOC: false
menus:
  reference-docs:
    parent: Publications 
---

{{< api-example
  title="Get Specific Renditions for a Publication"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/documents/:documentId/latestPublication/renditions/:renditionHandles" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/documents/:documentId/latestPublication/renditions/:renditionHandles
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:renditionHandles|string|x|A comma-separated list of renditions handles, e.g. "web,name".|

--description--
##### Upcoming Deprecation
Please note that we're working on offering a better alternative to the renditions with the `composition Api`.

If you need the HTML for a document you can use the `composition Api` and pass the field `html`.

##### Required Server Configuration
Renditions are only available if configured in the `contentType` configuration.
--response--
200
---
---
```js
[
  {
    "handle": "web",
    "content": "<div class=\"head\">\n  <h1>a title</h1>\n  <p class=\"lead\">some lead</p>\n</div>\n<figure class=\"aspect-ratio left\">\n  <img class=\"doc-image-empty\" src=\"data:image/svg+xml;charset=UTF-8,…\">\n  <figcaption>my caption</figcaption>\n</figure>\n<p>first paragraph</p>\n<p>second</p>\n<p>and third one. :)</p>"
  },
  {
    "handle": "mobile",
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
  },
  {
    "handle": "app",
    "error": {
      "message": "Processing of Channel 'app' for document '1' failed. Detailed error message…"
    }
  }
]
```

{{< /api-example >}}
