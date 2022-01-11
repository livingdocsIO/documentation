---
title: Publication Events
weight: 3
renderTOC: false
menus:
  reference-docs:
    parent: Publications 
---

{{< api-example
  title="Get Publication Events"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/publicationEvents" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/publicationEvents
```
```
GET api/v1/publicationEvents/:channelHandle
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|:channelHandle|string|The handle of the channel for which you want to get the events.|
|?limit|integer|Number of events to return. Default: 100. Highest limit: 1000.|
|?reverse|boolean|Returns the events in reverse order, starting at the biggest id.|
|?contentTypes|string|Comma separated list of content types to use as filter.|
|?documentTypes|string|Comma separated list of document types to use as filter.<br>Can be one of `article`, `page`, `data-record`.|
|?after|integer|Deprecated: Please use `id.gte` instead.<br>Return matching events after this event id.|
|?id.gte|string|Filter by event id range.<br>**Supported filters:** `id.gte`, `id.gt`, `id.lte`, `id.lt`.<br>**Example:** To retrieve all events since you've fetched the last entry, use `?limit=1000&id.gt=40000`|
|?createdAt.gte|string|Filter by event date range.<br>**Supported filters:** `createdAt.gte`, `createdAt.gt`, `createdAt.lte`, `createdAt.lt`.<br>**Example:** To retrieve all events since a specific timestamp, use `?limit=1000&createdAt.gte=2021-05-01T00:00:00.000Z`|

--description--

--response--
200
---
api/v1/publicationEvents
---
```js
[
  {
    "id": 910,
    "createdAt": "2016-12-27T09:19:00.928Z",
    "projectId": 30,
    "channelId": 53,
    "documentId": 7892,
    "documentType": "article",
    "eventType": "publish",
    "publicationId": 1066
  },
  {
    "id": 988,
    "createdAt": "2016-12-27T09:32:10.898Z",
    "projectId": 30,
    "channelId": 53,
    "documentId": 7892,
    "documentType": "article",
    "eventType": "unpublish",
    "publicationId": 1100
  },
  {
    "id": 990,
    "createdAt": "2016-12-27T09:33:05.010Z",
    "projectId": 30,
    "channelId": 53,
    "documentId": 8005,
    "documentType": "article",
    "eventType": "publish",
    "publicationId": 1131
  },
  {
    "id": 1011,
    "createdAt": "2016-12-27T09:33:31.517Z",
    "projectId": 30,
    "channelId": 53,
    "documentId": 7892,
    "documentType": "article",
    "eventType": "update",
    "publicationId": 1394
  }
]
```
-----
200
---
api/v1/publicationEvents?reverse&limit=2
---
```js
[
  {
    "id": 1011,
    "createdAt": "2016-12-27T09:33:31.517Z",
    "projectId": 30,
    "channelId": 53,
    "documentId": 7892,
    "documentType": "article",
    "eventType": "update",
    "publicationId": 1394
  },
  {
    "id": 990,
    "createdAt": "2016-12-27T09:33:05.010Z",
    "projectId": 30,
    "channelId": 53,
    "documentId": 8005,
    "documentType": "article",
    "eventType": "publish",
    "publicationId": 1131
  }
]
```

{{< /api-example >}}