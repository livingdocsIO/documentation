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
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/health" \
  -H "Accept: application/json"
```

--endpoint--
```
GET api/v1/health
```

--parameters--

--description--

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
