---
title: List
weight: 1
renderTOC: false
menus:
  reference-docs:
    parent: Document Lists
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
            "onPublish"
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