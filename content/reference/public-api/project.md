---
title: Project Configuration
weight: 2
renderTOC: false
menus:
  reference:
    parent: Public API
---

{{< api-example
  title="Get Project Config"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/projectConfig" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET /api/v1/projectConfig
```

{{< deprecated-in "release-2023-03" >}}
```
GET api/v1/channelConfig
```

--parameters--

--description--

This endpoint returns the [Project Config]({{< ref "/reference/project-config" >}}).

##### Use Cases

- Used by [Livingdocs CLI]({{< ref "/reference/cli" >}}) to download the Project Config

--response--
200
---
---
```js
{
    "v": 2,
    "$baseRevision": 28,
    "settings": {
        "handle": "service",
        "languages": {
            "available": [
                {
                    "label": "German",
                    "locale": "de"
                }
            ],
            "defaultLanguage": {
                "label": "German",
                "locale": "de"
            },
            "requiredOnCreation": true,
            "translationWorkflow": true
        },
        "editMode": "default"
    },
    "editorSettings": {
        "mainNavigation": [
            {
                "handle": "articleManagement",
                "label": "Articles",
                "dashboard": "articleManagement",
                "icon": "file-document-edit"
            },
            {
                "liItem": "mediaLibrary"
            }
        ],
        "dashboards": [
            {
                "handle": "articleManagement",
                "type": "tableDashboard",
                "pageTitle": "Article Management",
                "baseFilters": [
                    {
                        "type": "documentType",
                        "value": "article"
                    }
                ],
                "displayFilters": [
                    "contentType"
                ],
                "sort": "-updated_at",
                "columns": [
                    {
                        "label": "Article",
                        "minWidth": 375,
                        "growFactor": 2,
                        "priority": 1,
                        "componentName": "liTableDashboardCellMain",
                        "componentOptions": {
                            "image": {
                                "metadataPropertyName": "teaserImage"
                            },
                            "clampTitle": false,
                            "showContentType": true
                        },
                        "editable": false
                    },
                    {
                        "label": "Description",
                        "metadataPropertyName": "description",
                        "editable": true,
                        "minWidth": 150,
                        "growFactor": 1,
                        "priority": 5
                    }
                ]
            }
        ]
    },
    "contentTypes": [
        {
            "handle": "regular",
            "documentType": "article",
            "info": {
                "label": "Regular Article"
            },
            "components": [
                {
                    "name": "web-teaser"
                },
                {
                    "name": "title"
                },
                {
                    "name": "p"
                }
            ],
            "editorWrapper": "<section class=\"container doc-section\"></section>",
            "defaultContent": [
                {
                    "component": "title"
                }
            ],
            "metadata": [
                {
                    "handle": "title",
                    "type": "li-text",
                    "config": {
                        "minLength": 5,
                        "maxLength": 200,
                        "recommendedMinLength": 50,
                        "recommendedMaxLength": 150,
                        "allowNewlines": false,
                        "required": false,
                        "hideFromForm": false,
                        "translatable": false
                    },
                    "ui": {
                        "config": {
                            "readOnly": false
                        }
                    }
                },
                {
                    "handle": "description",
                    "type": "li-text",
                    "config": {
                        "allowNewlines": true,
                        "required": false,
                        "hideFromForm": false,
                        "translatable": false
                    },
                    "ui": {
                        "config": {
                            "readOnly": false
                        }
                    }
                }
            ],
            "metadataGroups": [
                {
                    "label": "General",
                    "properties": [
                        "title",
                        "description"
                    ],
                    "expanded": true
                }
            ]
        }
    ],
    "mediaTypes": [
        {
            "type": "mediaImage",
            "handle": "image",
            "info": {
                "label": "Images",
                "description": ""
            },
            "asset": {
                "translatable": true,
                "replaceable": true
            },
            "metadata": [
                {
                    "handle": "title",
                    "type": "li-text",
                    "config": {
                        "required": true,
                        "requiredErrorMessage": "Please provide a title",
                        "maxLength": 200,
                        "translatable": true,
                        "index": true,
                        "hideFromForm": false
                    },
                    "ui": {
                        "config": {
                            "readOnly": false
                        }
                    }
                }
            ],
            "editor": {
                "dashboard": {
                    "displayFilters": [
                        {
                            "filterName": "liDateTimeRange"
                        }
                    ],
                    "card": {
                        "name": "myImageCard"
                    }
                },
                "managementDashboard": {
                    "displayFilters": [
                        {
                            "filterName": "liDateTimeRange"
                        },
                        {
                            "filterName": "category"
                        }
                    ]
                }
            }
        }
    ],
    "designSettings": {
        "assets": {
            "css": [
                "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
            ]
        },
        "mediaRendering": {
            "backgroundImage": {
                "defaultWidth": 1000
            },
            "srcSet": {
                "defaultWidth": 1000,
                "widths": [
                    1000,
                    600,
                    300
                ],
                "sizes": [
                    "100vw"
                ]
            },
            "video": {
                "muted": true
            }
        },
        "componentGroups": [
            {
                "name": "text",
                "label": "Text",
                "components": [
                    "title",
                    "section-title",
                    "p"
                ]
            }
        ],
        "defaultComponents": {
            "paragraph": "p",
            "image": "image",
            "video": "video-include"
        },
        "fieldExtractor": [
            {
                "identifier": "title",
                "type": "text",
                "matches": [
                    "title.title"
                ]
            }
        ],
        "componentProperties": [
            {
                "name": "depth",
                "label": "Shadow",
                "type": "option",
                "value": "z-depth-2"
            }
        ],
        "namedCrops": [
            {
                "handle": "mobile",
                "label": "Mobile",
                "description": "this image will be shown on small screens",
                "recommendedRatios": [
                    "1:1",
                    "16:9"
                ]
            }
        ]
    },
    "components": [
        {
            "name": "title",
            "label": "Title",
            "iconUrl": "https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_header_simple.svg",
            "directives": [
                {
                    "type": "editable",
                    "name": "title",
                    "minLength": 1,
                    "maxLength": 150,
                    "recommendedMinLength": 20,
                    "recommendedMaxLength": 80,
                    "plainText": true
                }
            ],
            "html": "<h2 doc-editable=\"title\">\n  Title\n</h2>"
        },
        {
            "name": "p",
            "label": "Paragraph",
            "iconUrl": "https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_text.svg",
            "html": "<p class=\"text\" doc-editable=\"text\">\n  Paragraph\n</p>"
        }
    ],
    "categories": [
        {
            "id": "123abc",
            "label": "Home",
            "path": "/",
            "metadata": {
                "adId": "foo"
            }
        }
    ],
    "deliveries": [
        {
            "handle": "web",
            "label": "Website",
            "isPrimary": true,
            "icon": "book-open",
            "url": {
                "origin": "https://livingdocs.io",
                "pathPattern": "/doc/:id"
            }
        }
    ],
    "notifications": {
      "actionGroups": [
        {
          "handle": "all",
          "label": "All Events",
          "description": "Comments, Tasks, Publish and delete",
          "actions": [
            "task.change",
            "document.publish",
            "document.unpublish",
            "document.copy",
            "document.delete",
            "document.transform",
            "comment.add",
            "comment.resolve"
          ]
        }
      ],
      "notifyTaskRequester": true,
      "autoSubscribeOwner": {
        "enabled": true,
        "actionGroup": "all"
      }
    },
    "import": {
        "allowedProjects": [
            {
                "handle": "service-clone"
            }
        ]
    },
    "export": {
        "allowedProjects": [
            {
                "handle": "service-clone"
            }
        ]
    },
    "externalSystems": [
        {
            "handle": "myExternalSystem",
            "label": "My System",
            "url": {
                "origin": "https://example.com",
                "pathPattern": "/{{metadata.myExternalSystemId}}"
            },
            "icon": "track-light",
            "isPrimary": false
        }
    ]
}
```

{{< /api-example >}}


{{< api-example
  title="Get Project Configuration ({{< deprecated-in \"release-2023-03\" >}})"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/project" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/project
```

--parameters--

--description--

Deprecated: Use `GET api/v1/projectConfig` instead.

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
  title="Get Channel Configuration ({{< deprecated-in \"release-2023-03\" >}})"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/channels/:channelHandle" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/channels/:channelHandle
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|:channelHandle|string|Optional channelHandle. Will return first channel of a project if none is passed.|

--description--

Deprecated: Use `GET api/v1/projectConfig` instead.

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
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/design/:designVersion" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/design/:designVersion
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|:designVersion|string|Optional design version. Will take the current design version of a channel if none is passed.|

--description--

##### Use Cases

- Load the appropriate Design Version for a document

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
