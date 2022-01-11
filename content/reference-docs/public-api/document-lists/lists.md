---
title: Lists
weight: 2
renderTOC: false
menus:
  reference-docs:
    parent: Document Lists
---

{{< api-example
  title="Get Lists"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/document-lists" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/document-lists
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|?name|string|Filters the result set and allows searching by list name.|
|?limit|integer|A limit for how much document lists to retrieve. Defaults to 10. Max. 100.|
|?offset|integer|An offset into the query. Useful when getting more than 100 results (pagination).|

--description--
The response is a JSON array including only document lists without resolving documents.
--response--
200
---
api/v1/document-lists
---
```js
[
  {
    "id": 1,
    "name": "List one",
    "createdAt": "2020-11-05T10:55:51.255Z",
    "updatedAt": "2020-11-05T10:55:51.255Z"
  },
  {
    "id": 2,
    "name": "List two",
    "createdAt": "2020-11-05T11:09:16.561Z",
    "updatedAt": "2020-11-05T11:09:16.561Z"
  },
  {
    "id": 3,
    "name": "List three",
    "createdAt": "2020-11-05T11:09:37.213Z",
    "updatedAt": "2020-11-05T11:09:37.213Z"
  },
  {
    "id": 4,
    "name": "List four",
    "createdAt": "2020-11-05T11:08:53.765Z",
    "updatedAt": "2020-11-05T11:08:53.765Z"
  }
]
```

{{< /api-example >}}