---
title: Latest Publications
identifier: Beta Latest Publications
weight: 2
renderTOC: false
menus:
  reference-docs:
    parent: Beta
---

{{< api-example
  title="Get Latest Publications"
  beta=true
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/beta/documents/latestPublications" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/beta/documents/latestPublications
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|?fields|string|Filters which (comma separated) properties are included in the response. Defaults to `systemdata,metadata,content` (no renditions).|
|?limit|integer|A limit for how much published documents to retrieve. Defaults to 100. Max. 100.|
|?offset|integer|An offset into the query. Useful when getting more than 100 results (pagination)|
|?reverse|boolean|Order publications in ascending order instead of the default descending order. This is useful if you want to paginate using a time based filter.|
|?homepage|boolean|Return only the document labeled as homepage in the current project.|
|?contentTypes|string|Comma separated list of content types to use as filter.|
|?documentTypes|string|Comma separated list of document types to use as filter.<br>Can be one of `article`, `page`, `data-record`.|
|?id.gte|string|Filter by document id range.<br>Supported filters: `id.gte`, `id.gt`, `id.lte`, `id.lt`.<br><br>The id range filter is useful if you want to export a lot of documents. You can do many requests in parallel against the api, where you filter by the specific ranges.<br><br>This query is much more flexible than an offset-based filter and works with millions of documents.<br>**Request 1:** `?id.gt=0&id.lte=100`<br>**Request 2:** `?id.gt=100&id.lte=200`<br>**Request 3:** `?id.gt=200&id.lte=300`|
|?publishedAt.gte|string|Filter by publish date range.<br>Supported filters: `?publishedAt.gte`, `publishedAt.gt`, `publishedAt.lte`, `publishedAt.lt`.<br><br>Example: To retrieve all publications since a specific timestamp, use `?reverse&publishedAt.gte=2021-05-01T00:00:00.000Z`|

--description--
This endpoint is the list equivalent of the previous one.

The response is an array of objects with 4 possible top-level properties:
- systemdata
- metadata
- content
- references

--response--
200
---
---
```js
[
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
        "content": {
          "title": "a title",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
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
        "identifier": "timeline.p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "identifier": "timeline.p",
        "content": {
          "text": "second"
        }
      },
      {
        "id": "doc-1b8i1mfei0",
        "identifier": "timeline.p",
        "content": {
          "text": "and third one. :)"
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
  },
  {
    "systemdata": {
      "projectId": 1,
      "channelId": 1,
      "documentId": 2,
      "contentType": "article",
      "documentType": "article",
      "publicationId": 5,
      "firstPublicationDate": "2021-03-17T15:09:12:687Z",
      "updatedAt": "2021-03-19T17:33:05.171Z",
      "layout": "regular",
      "design": {
        "name": "timeline",
        "version": "1.1.0"
      }
    },
    "metadata": {
      "title": "another title",
      "description": "some other lead",
      "dependencies": {}
    },
    "content": [
      {
        "id": "doc-1b8i1ksh10",
        "identifier": "timeline.head",
        "content": {
          "title": "a title",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
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
        "identifier": "timeline.p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "identifier": "timeline.p",
        "content": {
          "text": "second"
        }
      },
      {
        "id": "doc-1b8i1mfei0",
        "identifier": "timeline.p",
        "content": {
          "text": "and third one. :)"
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
]
```

{{< /api-example >}}