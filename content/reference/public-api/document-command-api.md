---
title: Document Command API
weight: 3
renderTOC: false
menus:
  reference:
    parent: Public API
---

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
    "commands": [{
      "operation": "setMetadataProperty",
      "propertyName": "title",
      "value": "updated title"
    }]
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
|commands|array|x|An array of commands to execute. Each entry is an object with at least an **operation** property.<br><br>Possible operations:<br>- `setMetadataProperty`<br>- `setTitle`<br>- `insertComponent` {{< added-in "release-2024-05" >}}<br>- `removeComponent` {{< added-in "release-2024-07" >}}<br>- `setComponentCondition` {{< added-in "release-2024-11" >}}<br>- `setComponentStyle` {{< added-in "release-2024-11" >}}<br>- `setEditableDirective`<br>- `setIncludeDirective` {{< added-in "release-2024-11" >}}<br>- `setLinkDirective` {{< added-in "release-2024-11" >}}<br>- `setStyleDirective` {{< added-in "release-2024-11" >}}<br>- `publish`<br>- `unpublish` {{< added-in "release-2024-07" >}}<br><br>Some commands supports an optional `oldValue` parameter. When specified, the system verifies that the value being updated matches the provided `oldValue`. This prevents accidental overwrites that might occur due to changes made between reading a document and issuing the command. If the `oldValue` does not match, a conflict error is thrown. `oldValue` is redundant when providing a document version.<br><br>See further details in example requests.|

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
      // Updates a component condition. Currently, only "dateTime" conditions
      // are supported.
      "operation": "setComponentCondition",
      "componentId": "doc-123",
      "conditionName": "dateTime",
      "value": {
        "gte": "2025-01-01T10:30:00.000Z",
        "lt": "2025-02-02T14:30:00.000Z"
      },
      "oldValue": {
        "gte": "2024-01-01T10:30:00.000Z",
        "lt": "2024-02-02T14:30:00.000Z"
      }
    },
    {
      // Updates a component style. It supports all types: style, option, and select.
      "operation": "setComponentStyle",
      "componentId": "doc-123",
      "propertyName": "background",
      "value": "#1fc47a",
      "oldValue": "#000"
    },
    {
      // Sets the content of an editable directive.
      "operation": "setEditableDirective",
      "componentId": "doc-1a2b3c4d5",
      "directiveName": "headline",
      "value": "updated headline"
    },
    {
      // Updates params and overrides of an include directive. These properties
      // depend on each other: if only params are provided, any existing
      // overrides are removed. Conversely, specifying overrides without params
      // is invalid and will return a validation error. To update overrides,
      // both the params and overrides properties must be provided.
      "operation": "setIncludeDirective",
      "componentId": "doc-123",
      "directiveName": "related-article",
      "value": {
        "params": {
          "teaser": {
            "$ref": "document",
            "reference": {id: "3"}
          },
        },
        "overrides": [{
          "id": "teaser-normal-3",
          "content": {
            "link": {"href": "https://livingdocs.io"},
            "title": "Changed title",
          },
          "originalSnapshot": {...},
          "contentProperties": [...]
        }]
      },
      "oldValue": null
    },
    {
      // Updates a link directive.
      "operation": "setLinkDirective",
      "componentId": "doc-123",
      "directiveName": "link",
      "value": {
        "href": "https://livingdocs.io/article/123",
        "target": "_blank",
        "$ref": "document",
        "reference": {"id": "123"}
      },
      "oldValue": {
        "href": "https://livingdocs.io/"
      }
    },
    {
      // Updates a style directive. It supports all types: style, option, and select.
      "operation": "setStyleDirective",
      "componentId": "doc-123",
      "directiveName": "appearance",
      "propertyName": "background",
      "value": "#1fc47a",
      "oldValue": "#000"
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
    "message": "Command at index 0 failed: Component 'doc-123' does not exist in document '123'",
    "commandIndex": 0
  }
}
// or
{
  "status": 400,
  "error": "Bad Request",
  "error_details": {
    "message": "Command at index 0 failed: Directive 'my-directive' of type 'editable' does not exist on component 'doc-123' in document '123'",
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
// or
{
  "status": 409,
  "error": "Conflict",
  "error_details": {
    "name": "Conflict",
    "message": "Cannot update outdated value'"
  }
}
```

{{< /api-example >}}
