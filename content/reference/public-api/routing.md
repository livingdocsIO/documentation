---
title: Routing
weight: 13
renderTOC: false
menus:
  reference:
    parent: Public API
---

{{< api-example
  title="Resolve a Path to a Document"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/routing/resolve?path=:path" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/routing/resolve
```

--parameters--
|Name|Type|Rquired|Notes|
|-|-|-|-|
|?path|string|x|Path to the document.<br>Example 1: A page with a category `/news` can be found with `?path=/news.html`.<br>Example 2: A document with id 10, with category `/news` and a slug `hello` can be found with `?path=/magazin/hello-10.html'`.|

--description--
You need to activate the [Categories]({{< ref "/reference/project-config/categories" >}}) / [Routing]({{< ref "/reference/project-config/content-types#routing" >}}) feature in the Project Config in order to resolve paths to your documents. Routing is a quite advanced topic and the examples only work with a default configuration. Find more [here](/guides/organisation/routing-system/).
--response--
200
---
api/v1/routing/resolve?path=/correct-path/my-article-173.html
---
```js
[
  {
    "type": "document",
    "resource": {
      "id": 173,
      "statusCode": 200
    }
  }
]
```
-----
301
---
api/v1/routing/resolve?path=/incorrect-path/slug-with-correct-id-77.html
---
```js
[
  {
    "type": "redirect",
    "path": "/path/to/redirect",
    "resource": {
      "statusCode": 301
    }
  }
]
```
-----
404
---
api/v1/routing/resolve?path=/does/not/exist
---
```js
{
  "status": 404,
  "error": "Not Found"
}
```
-----
410
---
api/v1/routing/resolve?path=/unpublished-document-123.html
---
```js
[
    {
        "type": "unpublished",
        "resource": {
            "id": 123,
            "statusCode": 410
        }
    }
]
```

{{< /api-example >}}
