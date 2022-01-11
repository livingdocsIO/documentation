---
title: Design Configuration
weight: 3
renderTOC: false
menus:
  reference-docs:
    parent: Project
---

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
