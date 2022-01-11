---
title: Status
weight: 1
renderTOC: false
menus:
  reference-docs:
    parent: Health 
---

{{< api-example
  title="My Title"
>}}

--query--

```bash
ACCESS_
```

--endpoint--
```
GET api/v1/
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|:channelHandle|string|The handle of the channel for which you want to get the events.|

--description--

--response--
200
---
api/v1/
---
```js
[
  {
    "id": 1111
  }
]
```

{{< /api-example >}}