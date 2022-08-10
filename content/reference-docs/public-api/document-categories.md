---
title: Document Categories
weight: 7
renderTOC: false
menus:
  reference-docs:
    parent: Public API
---

{{< api-example
  title="Get a Category with all Information (public-api:read)"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/categories/:categoryId" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/categories/:categoryId
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:categoryId|string|x|Id of a specific categories as fetched from the /categories endpoint.|
|?inheritMetadata|boolean||If set to "true" will inherit (but not overwrite) metadata properties from all parents Inheritance depth is limited to 20.|

--description--
You need to activate the Categories / Routing Feature in the Project Config in order to query categories.
--response--
200
---
api/v1/categories/123abc
---
```js
{
  "id": "123abc",
  "label": "Sport",
  "path": "/sport",
  "metadata": {
    "adId": "sport-ads",
    "analyticsCode": "sport-analytics"
  }
}
```
-----
400
---
api/v1/categories/123abc
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
-----
500
---
api/v1/categories/123abc?inheritMetadata=true
---
```js
[
  {
    "status": 500,
    "error": "Bad Request",
    "error_details": {
      "message": "Inheritance queries can only be made up to a depth of 20."
    }
  }
]
```
{{< /api-example >}}

{{< api-example
  title="Get Categories for a Project (public-api:read)"
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
