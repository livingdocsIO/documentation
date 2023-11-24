---
title: Menus
weight: 12
renderTOC: false
menus:
  reference:
    parent: Public API
---

{{< api-example
  title="Get Menus for a Channel"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/menus/:channelHandle" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/menus/:channelHandle
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|:channelHandle|string|The handle of the channel for which you want to get the events.|
|?handle|string|Handle of the menu to retrieve.|

--description--

Attention:

Menus and this endpoint should not be used anymore. The [Menu Tool]({{< ref "/guides/editor/menu-tool" >}}) provides a better developer and user experience for managing menus.

Menu items can be of three types:

- uri for arbitrary URIs, mainly used for URLs
- path for internal paths, such as when the menu item should link to an article or page
- document is the same as path except it is used when routing is disabled



##### Use Cases

- Get menus for deliveries

##### Related

- [Menu Tool]({{< ref "/guides/editor/menu-tool" >}})

--response--
200
---
api/v1/menus/web
---
```js
[
  {
    "version": 8,
    "label": "My Menu",
    "maxDepth": 1,
    "nodes": [
      {
        "id": "11111111-0601-4c2b-a3b5-4da19b6d3bde",
        "label": "My Index",
        "path": "/",
        "type": "uri",
        "target": "_self",
        "nodes": [
          {
            "id": "22222222-0601-4c2b-a3b5-4da19b6d3bde",
            "documentId": 71,
            "label": "Other Page",
            "type": "path",
            "path": "/page/some-other-page",
            "nodes": []
          }
        ]
      },
      {
        "id": "33333333-0601-4c2b-a3b5-4da19b6d3bde",
        "label": "Arbitrary URL",
        "type": "uri",
        "uri": "http://example.com",
        "nodes": []
      },
      {
        "id": "44444444-0601-4c2b-a3b5-4da19b6d3bde",
        "label": "Other But External URL Link",
        "type": "uri",
        "uri": "http://foo.bar",
        "target": "_blank",
        "nodes": []
      }
    ]
  }
]
```

{{< /api-example >}}
