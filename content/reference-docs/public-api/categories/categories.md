---
title: Categories 
weight: 2
renderTOC: false
menus:
  reference-docs:
    parent: Categories  
---

{{< api-example
  title="Get Categories for a Project"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/categories" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/categories
```

--parameters--

--description--
You need to activate the Categories / Routing Feature in the Project Config in order to query categories.
--response--
200
---
api/v1/categories
---
```js
[
  {
    "id": "category-id-1",
    "label": "Category 1",
    "path": "/category1"
  },
  {
    "id": "category-id-2",
    "label": "Category 2",
    "path": "/category2",
    "parent": "category-id-1"
  },
  {
    "id": "category-id-3",
    "label": "Category 3",
    "path": "/category3"
  }
]
```
-----
400
---
api/v1/categories
---
```js
[
  {
    "status": 400,
    "error": "Bad Request",
    "error_details": {
      "message": "Use of the category API requires a configurable channel. The project you requested uses a static configuration though."
    }
  }
]
```
{{< /api-example >}}