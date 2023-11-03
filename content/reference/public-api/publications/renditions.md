---
title: Renditions
weight: 7
renderTOC: false
menus:
  reference:
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

With the Renditions Endpoint you can load different output formats of your publication like `RSS`, `XML`, `HTML` etc. Attention: A rendition is only available if the output format is configured in the [Content Type]({{< ref "/reference/project-config/content-types#renditions" >}}) configuration.

##### Use Cases

- Provides a Publication for a delivery in another format like `RSS`, `XML` (so called `Rendition`)

##### Related


- [Latest Publication API]({{< ref "/reference/public-api/publications/latest-publication" >}})
- [Latest Publication API Beta]({{< ref "/reference/public-api/publications/latest-publication-beta" >}})
- [Composition API]({{< ref "/reference/public-api/composition-api" >}})


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
        "component": "head",
        "identifier": "timeline.head",
        "content": {
          "title": "a title",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
        "component": "normal",
        "identifier": "timeline.normal",
        "content": {
          "caption": "my caption"
        },
        "styles": {
          "position": "left"
        }
      },
      {
        "id": "doc-1b8i1ksh30",
        "component": "p",
        "identifier": "timeline.p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "component": "p",
        "identifier": "timeline.p",
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
