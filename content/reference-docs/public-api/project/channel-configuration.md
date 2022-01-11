---
title: Channel Configuration
weight: 2
renderTOC: false
menus:
  reference-docs:
    parent: Project
---

{{< api-example
  title="Get Channel Configuration"
>}}

--query--

```bash
GET api/v1/channels/:channelHandle
```

--endpoint--

--parameters--
|Name|Type|Notes|
|-|-|-|
|:channelHandle|string|Optional channelHandle. Will return first channel of a project if none is passed.|

--description--

--response--
200
---
---
```js
{
  "channelId": 1,
  "channelHandle": "web",
  "label": "Web",
  "designName": "timeline",
  "designVersion": "1.1.0",
  "editMode": "default",
  "contentTypeHandles": [
    "regular",
    "page"
  ],
  "contentTypes": [
    {
      "contentTypeHandle": "regular",
      "documentType": "article",
      "metadata": [
        {
          "name": "title",
          "plugin": "li-text"
        },
        {
          "name": "author",
          "plugin": "li-text"
        },
        {
          "name": "teaserImage",
          "plugin": "li-image"
        },
        {
          "name": "dependencies",
          "plugin": "li-dependencies"
        },
        {
          "name": "tasks",
          "plugin": "li-tasks"
        }
      ],
      "renditionHandles": [
        "web",
        "mobile"
      ]
    },
    {
      "contentTypeHandle": "page",
      "documentType": "page",
      "metadata": [
        {
          "name": "title",
          "plugin": "li-text"
        },
        {
          "name": "dependencies",
          "plugin": "li-dependencies"
        },
        {
          "name": "routing",
          "plugin": "li-default-routing"
        }
      ],
      "renditionHandles": [
        "web"
      ]
    }
  ]
}
```

{{< /api-example >}}
