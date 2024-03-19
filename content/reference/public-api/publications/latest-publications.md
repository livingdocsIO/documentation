---
title: Latest Publications 
weight: 3
renderTOC: false
menus:
  reference:
    parent: Publications
---

{{< api-example
  title="Get Latest Publications"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/documents/latestPublications" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/documents/latestPublications
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|?fields|string|Filters which (comma separated) properties are included in the response. Defaults to `systemdata,metadata,content` (no renditions).|
|?reverse|boolean|Order publications in ascending order instead of the default descending order. This is useful if you want to paginate using a time based filter.|
|?homepage|boolean|Return only the document labeled as homepage in the current project.|
|?contentTypes|string|Comma separated list of content types to use as filter.|
|?documentTypes|string|Comma separated list of document types to use as filter.<br>Can be one of `article`, `page`, `data-record`.|
|?id.gte|string|Filter by document id range.<br><br>Supported filters: `id.gte`, `id.gt`, `id.lte`, `id.lt`.<br><br>The id range filter is useful if you want to export a lot of documents. You can do many requests in parallel against the api, where you filter by the specific ranges.<br><br>This query is much more flexible than an offset-based filter and works with millions of documents.<br><br>Request 1: `?id.gt=0&id.lte=100`<br>Request 2: `?id.gt=100&id.lte=200`<br>Request 3: `?id.gt=200&id.lte=300`|
|?id|string|Filter by one or multiple document ids.<br>**Example 1:** `?id=12`<br>**Example 2:** `?id=100,120,123`|
|?publishedAt.gte|string|Filter by publish date range.<br>Supported filters: `publishedAt.gte`, `publishedAt.gt`, `publishedAt.lte`, `publishedAt.lt`.<br><br>Example: To retrieve all publications since a specific timestamp, use `?reverse&publishedAt.gte=2021-05-01T00:00:00.000Z`|
|?ignoreComponentConditions|boolean|Provides a way to opt out of component filtering and return all content regardless of whether each component passes the conditional checks.<br>{{< added-in "release-2024-03" >}}<br>Default: `false`|
|?componentConditions|string|JSON stringified object which contains the component conditions you would like to apply.<br>{{< added-in "release-2024-03" >}}<br>Default: `dateTime: new Date()`<br>Example: `?componentConditions={"dateTime":"2024-02-14T17:25:10.391Z"}`|
|?limit|integer|A limit for how much published documents to retrieve. Defaults to 100. Max. 100.|
|?offset|integer|An offset into the query. Useful when getting more than 100 results (pagination). Max. 10000. Prefer range based filters like id.get or publishedAt.gte.|

--description--

The endpoint provides an unresolved Publication with 3 possible top-level properties:
- systemdata
- metadata
- content

##### Use Cases

- Bulk export of data, e.g. a specific `Content Type`

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
      "firstPublicationDate": "2022-03-16T14:08:11:000Z",
      "significantPublicationDate": "2022-10-26T07:25:00.000Z",
      "visiblePublicationDate": "2022-10-27T06:00:00.000Z",
      "updatedAt": "2022-10-30T16:32:04.170Z",
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
      "firstPublicationDate": "2022-03-16T14:08:11:000Z",
      "significantPublicationDate": "2022-10-26T07:25:00.000Z",
      "visiblePublicationDate": "2022-10-27T06:00:00.000Z",
      "updatedAt": "2022-10-30T16:32:04.170Z",
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
    ]
  }
]
```

{{< /api-example >}}
