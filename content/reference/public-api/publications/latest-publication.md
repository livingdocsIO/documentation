---
title: Latest Publication 
weight: 1
renderTOC: false
menus:
  reference:
    parent: Publications
---

{{< api-example
  title="Get Latest Publication"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/documents/:documentId/latestPublication" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/documents/:documentId/latestPublication
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:documentId|integer|x||
|?fields|string||Filters which (comma separated) properties are included in the response. Defaults to 'systemdata,metadata,content' (no renditions).|
|?renditions|string||A comma-separated list of rendition handles. Example: `?renditions=web,json`|
|?ignoreComponentConditions|boolean||Provides a way to opt out of component filtering and return all content regardless of whether each component passes the conditional checks.<br>{{< added-in "release-2024-03" >}}<br>Default: `false`|
|?componentConditions|string||JSON stringified object which contains the component conditions you would like to apply.<br>{{< added-in "release-2024-03" >}}<br>Default: `dateTime: new Date()`<br>Example: `?componentConditions={"dateTime":"2024-02-14T17:25:10.391Z"}`|

--description--

The endpoint provides an unresolved Publication with 4 possible top-level properties:
- systemdata
- metadata
- content
- renditions

##### Advantages

- Be able to cache the response, because it only changes on a republish (does not contain resolved refs)
- Useful for a pull architecture
- (deprecated) Supports the Render Pipeline with it's Renditions


##### Use Cases

-  Load an unresolved Publication with the required information to render a document/page.
-  Export the unresolved Publication to another system and get changes via [Publication Events]({{< ref "/reference/public-api/publications/publication-events" >}}) or [Webhooks]({{< ref "/reference/webhooks" >}})
-  (deprecated) Provides a Publication via a [Rendition]({{< ref "/reference/project-config/content-types#renditions" >}}) for a delivery in another format like `RSS`, `XML`

##### Related

- [Latest Publication API Beta]({{< ref "/reference/public-api/publications/latest-publication-beta" >}})
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
    "contentType": "regular",
    "documentType": "article",
    "publicationId": 1,
    "firstPublicationDate": "2022-03-16T14:08:11:000Z",
    "significantPublicationDate": "2022-10-26T07:25:00.000Z",
    "visiblePublicationDate": "2022-10-27T06:00:00.000Z",
    "lastPublicationDate": "2023-03-18T16:32:04.170Z",
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
  ]
}
```

{{< /api-example >}}
