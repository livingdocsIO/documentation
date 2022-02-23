---
title: Document Lists
weight: 6
renderTOC: false
menus:
  reference-docs:
    parent: Public API
---

{{< api-example
  title="Get List by Id"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/document-lists/:id?reverse=false&limit=20" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/document-lists/:id
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:id|integer|x||
|?reverse|boolean||Pass 'reverse=false' to get the list in the same order as you see it in the editor. (the default is reverse=true for backwards compatibility reasons)|
|?fields|string||Filters which (comma separated) document properties are included in the response. Defaults to 'systemdata,metadata' also accepts 'content' (no renditions).|
|?limit|integer||A limit for how much documents to resolve for the requested list. Defaults to 100. Max. 100.|

--description--
This endpoint resolves the referenced documents in a list.<br>
The response is a JSON object including list information with resolved documents.
--response--
200
---
api/v1/document-lists/1
---
```js
{
  "id": 1,
  "name": "List one",
  "documents": [
    {
      "systemdata": {
        "projectId": 1,
        "channelId": 1,
        "documentId": 1,
        "contentType": "article",
        "documentType": "article",
        "layout": "regular",
        "design": {
          "name": "timeline",
          "version": "1.1.0"
        }
      },
      "metadata": {
        "title": "a title",
        "description": "some lead",
        "dependencies": {},
        "test": {
          "callCount": 3,
          "message": "li-test called 3 times",
          "events": [
            "onUpdate",
            "onUpdate",
            "onPreparePublish"
          ]
        },
        "testDependency": "li-test-dependency.onUpdate is correct"
      }
    }
  ],
  "createdAt": "2020-11-05T10:55:51.255Z",
  "updatedAt": "2020-11-05T10:55:51.255Z"
}
```

{{< /api-example >}}

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
