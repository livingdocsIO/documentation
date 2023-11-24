---
title: Latest Publication Beta
identifier: Latest Publication Beta
weight: 2
renderTOC: false
menus:
  reference:
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
curl -k -X GET "https://server.livingdocs.io/api/beta/documents/:documentId/latestPublication" \
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
The endpoint provides an unresolved Publication with 5 possible top-level properties:
- systemdata
- metadata
- content
- renditions
- references

##### Advantages

- Be able to cache the response, because it only changes on a republish (does not contain resolved refs)
- Useful for a pull architecture
- (deprecated) Supports the Render Pipeline with it's Renditions


##### Use Cases

- Load an unresolved Publication with the required information to render a document/page.
- Export the unresolved Publication to another system and get changes via [Publication Events]({{< ref "/reference/public-api/publications/publication-events" >}}) or [Webhooks]({{< ref "/reference/webhooks" >}})
- (deprecated) Provides a Publication via a [Rendition]({{< ref "/reference/project-config/content-types#renditions" >}}) for a delivery in another format like `RSS`, `XML`

##### Related

- [Latest Publication API]({{< ref "/reference/public-api/publications/latest-publication" >}})
- [Composition API]({{< ref "/reference/public-api/composition-api" >}})

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
    "firstPublicationDate": "2022-03-16T14:08:11:000Z",
    "significantPublicationDate": "2022-10-26T07:25:00.000Z",
    "visiblePublicationDate": "2022-10-27T06:00:00.000Z",
    "updatedAt": "2023-03-18T16:32:04.170Z",
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
