---
title: Document Command API
weight: 3
renderTOC: false
menus:
  reference:
    parent: Public API
---

{{< added-in "release-2023-11" block >}}

{{< api-example
title="Execute Commands on Documents"
scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X PATCH "https://server.livingdocs.io/api/v1/documents/:id/commands" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  --data-binary @- << EOF
  {
    "commands": [{"operation": "setMetadataProperty", "propertyName": "title", "value": "updated title"}]
  }
EOF
```

--endpoint--
```
PATCH api/v1/documents/:id/commands
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|version|integer||Current document version. When set on update the version is checked.|
|preconditions|array||An array of preconditions for command execution. Each entry is an object with at least a **type** property. Possible types: `isPublished`. See further details in example requests.|
|commands|array|x|An array of commands to execute. Each entry is an object with at least an **operation** property. Possible operations: `setMetadataProperty`, `setEditableDirective` or `publish`. See further details in example requests.|

#### Example Request
```js
{
  "version": 1, 
  "preconditions": [
    {
      // Asserts that the document is published or unpublished based on the value property
      "type": "isPublished",
      "value": true
    }
  ],
  "commands": [
    {
      // update a single metadata property
      "operation": "setMetadataProperty",
      "propertyName": "title",
      "value": "updated title", // send null to delete metadata property
      "oldValue": "previous title" // optional, for conflict detection (not necessary when sending document version too)
    },
    {
      // sets the content of an editable directive
      "operation": "setEditableDirective",
      "componentId": "doc-1a2b3c4d5",
      "directiveName": "headline",
      "value": "updated headline"
    },
    {
      "operation": "publish"
    }
  ]
}
```

--description--
Execute a Document Command based on its `id`.
All commands run in a single transaction.

--response--
204
---
api/v1/documents/:id/commands
---
```js
{
  "status": 204
}
```
-----
400
---
api/v1/documents/:id/commands
---
```js
{
  "status": 400,
  "error": "Bad Request",
  "error_details": {
    "commands.0.operation": "value of tag \"operation\" must be in oneOf"
  }
}
// or
{
  "status": 400,
  "error": "Bad Request",
  "error_details": {
    "message": "Metadata property \"notExistingProperty\" does not exist"
  }
}
// or
{
  "status": 400,
  "error": "Bad Request",
  "error_details": {
    "message": "Component with id doc-00000000 and directive name title does not exist on document with id 123"
  }
}
```
-----
404
---
api/v1/documents/:id/commands
---
```js
{
  "status": 404,
  "error": "Not Found",
  "error_details": {
    "name": "NotFound",
    "message": "Document Not Found"
  }
}
```
-----
409
---
api/v1/documents/:id/commands
---
```js
{
  "status": 409,
  "error": "Conflict",
  "error_details": {
    "name": "Conflict",
    "message": "The document you tried to update is outdated",
    "expectedVersion": 1,
    "currentVersion": 2
  }
}
```

{{< /api-example >}}
