---
title: Project
weight: 2
renderTOC: false
menus:
  reference-docs:
    parent: Public API
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

{{< api-example
  title="Get Design Configuration"
>}}

--query--

```bash
GET api/v1/design/:designVersion
```

--endpoint--

--parameters--
|Name|Type|Notes|
|-|-|-|
|:designVersion|string|Optional design version. Will take the current design version of a channel if none is passed.|

--description--

--response--
200
---
---
```js
{
  "name": "p:1:1",
  "version": "1.0.0",
  "assets": {
    "css": [
      "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    ]
  },
  "defaultComponents": {
    "paragraph": "p",
    "image": "image"
  },
  "groups": [
    {
      "name": "content",
      "label": "Components",
      "components": [
        "title",
        "p",
        "image",
        "insta"
      ]
    }
  ],
  "componentProperties": {},
  "metadata": [
    {
      "identifier": "title",
      "type": "text",
      "matches": [
        "title.title"
      ]
    }
  ],
  "components": [
    {
      "name": "title",
      "label": "Title",
      "iconUrl": "https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_header_simple.svg",
      "html": "<h2 doc-editable=\"title\">\n  Title\n</h2>",
      "directives": {}
    },
    {
      "name": "p",
      "label": "Paragraph",
      "iconUrl": "https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_text.svg",
      "html": "<p class=\"text\" doc-editable=\"text\">\n  Paragraph\n</p>",
      "directives": {}
    },
    {
      "name": "image",
      "label": "Image",
      "iconUrl": "https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_image.svg",
      "directives": {
        "img": {
          "name": "img",
          "type": "image",
          "imageRatios": [
            "16:9",
            "1:1",
            "4:3",
            "3:4"
          ]
        }
      },
      "html": "<img\n  doc-image=\"img\"\n  class=\"responsive-img\">"
    },
    {
      "name": "insta",
      "label": "Instagram",
      "iconUrl": "https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_image.svg",
      "directives": {
        "insta": {
          "name": "insta",
          "type": "include",
          "service": "instagram"
        }
      },
      "html": "<div doc-include=\"insta\">\n  <div>Instagram Include</div>\n</div>"
    }
  ]
}
```

{{< /api-example >}}

