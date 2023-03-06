---
title: Composition API
weight: 3
renderTOC: false
menus:
  reference:
    parent: Public API
---

{{< api-example
  title="Compose a Publication"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://edit.livingdocs.io/proxy/api/api/beta/composition/:documentId" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data-binary @- << EOF
 {
    "fields": ["systemdata", "content", "metadata", "includes", "html"]
  }
EOF
```

--endpoint--
```
POST api/beta/composition/:documentId
```

--parameters--

|Name|Type|Notes|
|-|-|-|
|fields|array\<string>|A list of the properties which should be computed and returned.<br>Default: ['systemdata', 'content', 'metadata', 'includes', 'html', 'design']|
|metadata.preload|object|You can pass metadata properties which should be resolved.<br>This only works for properties of type 'li-reference', 'li-document-reference', 'li-reference-list' and 'li-list-reference'<br>Example: `{metadata: {preload: {myProp: true}}}`|
|resolveIncludes|boolean|Resolve includes. If `true` then 'includes' will be populated and includes will be resolved in the rendered `html`|
|renderOptions.decodeHtml|boolean|Decode html entities into unicode|
|renderOptions.renderDirectiveInfo|boolean|Add attributes with the directive name to directive elements.|

--description--

The goal of the composition endpoint is to gather all required information to render a document in one endpoint and to work for different rendering strategies (e.g. render from JSON or use the prerendered Html). The composition Api supports rendering Html without any configuration, can preload references in metadata and can return resolved includes as JSON.

It offers optimised performance for all those tasks and will replace the RenderPipeline feature.

We plan to add additional functionalities like automatic design updates of documents and more to the composition Api in upcoming releases and are open for inputs what we could add.

--response--
200
---
---
```js
{
  "systemdata": {
    "projectId": 1,
    "channelId": 1,
    "documentId": 1,
    "contentType": "article",
    "documentType": "article",
    "publicationId": 1,
    "firstPublicationDate": "2022-03-16T14:08:11:000Z",
    "significantPublicationDate": "2022-10-26T07:25:00.000Z",
    "visiblePublicationDate": "2022-10-27T06:00:00.000Z",
    "updatedAt": "2023-03-18T16:32:04.170Z",
    "design": {
      "name": "timeline",
      "version": "1.1.0"
    }
  },
  "content": [
    {
      "id": "doc-1b8i1ksh10",
      "component": "head",
      "identifier": "timeline.head",
      "content": {
        "title": "a title",
        "text": "some lead"
      }
    },
    {
      "id": "doc-2c95a77x14",
      "component": "teaser",
      "identifier": "timeline.teaser",
      "content": {
        "embed-teaser": {
          "service": "embed-teaser",
          "params": {
            "document": {
              "$ref": "document",
              "reference": {
                "id": 7
              }
            }
          }
        }
      }
    }
  ],
  "metadata": {
    "title": "a title",
    "description": "some lead",
    "topic": {
      "$ref": "document",
      "reference": {
        "id": "5"
      },
      "isPreloaded": true,
      "value": {
        "metadata": {
          "title": "Another title"
        },
        "systemdata": {
          "projectId": 1,
          "channelId": 1,
          "documentId": 5,
          "contentType": "article",
          "documentType": "article",
          "publicationId": 7,
          "firstPublicationDate": "2022-03-16T14:08:11:000Z",
          "significantPublicationDate": "2022-10-26T07:25:00.000Z",
          "visiblePublicationDate": "2022-10-27T06:00:00.000Z",
          "updatedAt": "2023-03-18T17:32:04.170Z",
          "design": {
            "name": "timeline",
            "version": "1.1.0"
          }
        }
      }
    }
  },
  "includes": [
    {
      "componentId": "doc-2c95a77x14",
      "directiveName": "embed-teaser",
      "resolvedValue": {
        "content": [
          {
            "id": "ref-7",
            "component": "p",
            "content": {
              "text": "Some text."
            }
          }
        ]
      }
    }
  ],
  "html": "<div>...</div>"
}
```

{{< /api-example >}}
