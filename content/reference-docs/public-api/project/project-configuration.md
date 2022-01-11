---
title: Project Configuration
weight: 1
renderTOC: false
menus:
  reference-docs:
    parent: Project
---

{{< api-example
  title="Get Project Configuration"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/project" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/project
```

--parameters--

--description--
Your `AccessToken` is valid for a single project. This endpoint tells you the details and configuration of this project.

--response--
200
---
---
```js
{
  "projectId": 1,
  "name": "b5c5f804-7927-44e2-a3fd-f97bc6784dab",
  "label": "Daily Planet",
  "defaultChannelId": 1,
  "channels": [
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
  ]
}
```

{{< /api-example >}}
