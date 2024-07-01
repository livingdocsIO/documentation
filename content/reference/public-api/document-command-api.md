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
|preconditions|array||An array of preconditions for command execution. If a precondition assertion fails, no commands are executed and the request responds with a `429 Conflict` status.<br><br>Each entry is an object with at least a **type** property.<br><br>Possible types:<br>- `isPublished`: Document is currently public<br>- `isPublishedAndHasNoChanges`: Document is currently public and has no changes since last publish<br><br>See further details in example requests.|
|commands|array|x|An array of commands to execute. Each entry is an object with at least an **operation** property.<br><br>Possible operations:<br>- `setMetadataProperty`<br>- `setEditableDirective`<br>- `setTitle`<br>- `insertComponent` {{< added-in "release-2024-05" >}}<br>- `removeComponent` {{< added-in "release-2024-07" >}}<br>- `publish`<br>- `unpublish` {{< added-in "release-2024-07" >}}<br><br>See further details in example requests.|

#### Example Request
```js
{
  "version": 1,
  "preconditions": [
    // Asserts that the document is published or
    // unpublished based on the value property.
    {"type": "isPublished", "value": true}

    // Asserts that the document is published and
    // has no changes since last publish.
    // {"type": "isPublishedAndHasNoChanges"}
  ],
  "commands": [
    {
      // Update a single metadata property.
      "operation": "setMetadataProperty",
      "propertyName": "title",
      "value": "updated title", // send null to delete metadata property
      "oldValue": "previous title" // optional, for conflict detection (not necessary when sending document version too)
    },
    {
      // Sets the content of an editable directive.
      "operation": "setEditableDirective",
      "componentId": "doc-1a2b3c4d5",
      "directiveName": "headline",
      "value": "updated headline"
    },
    {
      // Sets the title property on a document (might be overruled by displayTitlePattern on read).
      "operation": "setTitle",
      "value": "updated title",
      "oldValue": "previous title"
    },
    {
      // Inserts a new component into the document content.
      "operation": "insertComponent",
      "componentId": "doc-custom-123456",
      "componentName": "paragraph",
      "content": {
        "text": "Some text"
      },
      "position": {
        "parentComponentId": "doc-4a2b3g4d5", // Omit to insert into document root
        "parentContainerName": "children", // Omit to insert into document root,
        "previousComponentId": "doc-1a2b3c4d5", // To insert after component with this id
        "nextComponentId": "doc-1a2b3c4d5", // To insert before component with this id
      }
    },
    {
      // Removes a component from the document content.
      // Does not work if component or parent component has `position: 'fixed'`
      "operation": "removeComponent",
      "componentId": "doc-4a2b3g4d5"
    },
    {
      // Creates a new publication for the document if applicable
      "operation": "publish"
    },
    {
      // Unpublishes the document if it was published before.
      // Cannot be used with "publish" command in same request.
      "operation": "unpublish"
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
    "commands.0.operation": "value of tag \"operation\" must be in oneOf",
    "commandIndex": 0
  }
}
// or
{
  "status": 400,
  "error": "Bad Request",
  "error_details": {
    "message": "Command at index 0 failed: Metadata property \"notExistingProperty\" does not exist",
    "commandIndex": 0
  }
}
// or
{
  "status": 400,
  "error": "Bad Request",
  "error_details": {
    "message": "Command at index 0 failed: Component with id doc-00000000 and directive name title does not exist on document with id 123",
    "commandIndex": 0
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
// or
{
  "status": 409,
  "error": "Conflict",
  "error_details": {
    "name": "Conflict",
    "message": "Precondition failed: 'isPublished'"
  }
}
```

{{< /api-example >}}
