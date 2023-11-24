---
title: Health
weight: 16
renderTOC: false
menus:
  reference:
    parent: Public API
---

{{< api-example
  title="Check API Status"
>}}

--query--

```bash
curl -k -X GET "https://server.livingdocs.io/api/v1/health"
```

--endpoint--
```
GET api/v1/health
```

--parameters--

--description--

##### Use Cases

- Health check for operations

--response--
200
---
---
```js
{
  "status": "ok"
}
```

{{< /api-example >}}
