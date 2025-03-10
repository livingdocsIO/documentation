---
title: 'Document Command API: New Commands'
type: changelog-entry
weight: 1

change:
  date: 2024-11
  type: feature
---

We have extended the [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) with five new commands, which are also available for [Assistants]({{< ref "/customising/assistants" >}}).
Each command supports an optional `oldValue` parameter. When specified, the system verifies that the value being updated matches the provided `oldValue`. This prevents accidental overwrites that might occur due to changes made between reading a document and issuing the command. If the `oldValue` does not match, a conflict error is thrown.

#### `setComponentCondition`

```js
{
  operation: 'setComponentCondition',
  componentId: 'doc-123',
  conditionName: 'dateTime',
  value: {
    gte: '2025-01-01T10:30:00.000Z',
    lt: '2025-02-02T14:30:00.000Z'
  },
  oldValue: {
    gte: '2024-01-01T10:30:00.000Z',
    lt: '2024-02-02T14:30:00.000Z'
  }
}
```

#### `setComponentStyle`

```js
{
  operation: 'setComponentStyle',
  componentId: 'doc-123',
  propertyName: 'background',
  value: '#1fc47a',
  oldValue: '#000'
}
```

#### `setStyleDirective`

```js
{
  operation: 'setStyleDirective',
  componentId: 'doc-123',
  directiveName: 'appearance',
  propertyName: 'background',
  value: '#1fc47a',
  oldValue: '#000'
}
```

#### `setLinkDirective`

```js
{
  operation: 'setLinkDirective',
  componentId: 'doc-123',
  directiveName: 'link',
  value: {
    href: 'https://livingdocs.io/article/123',
    target: '_blank',
    $ref: 'document',
    reference: {id: '123'}
  },
  oldValue: {
    href: 'https://livingdocs.io/'
  }
}
```

#### `setIncludeDirective`

The `setIncludeDirective` command supports updating both include `params` and `overrides`. These properties depend on each other: if only `params` are provided, any existing `overrides` are removed. Conversely, specifying `overrides` without `params` is invalid and will return a validation error. To update `overrides`, both the `params` and `overrides` properties must be provided.

```js
{
  operation: 'setIncludeDirective',
  componentId: 'doc-123',
  directiveName: 'related-article',
  value: {
    params: {
      teaser: {
        $ref: 'document',
        reference: {id: '3'}
      },
    },
    overrides: [{
      id: 'teaser-normal-3',
      content: {
        link: {href: 'https://livingdocs.io'},
        title: 'Changed title',
      },
      originalSnapshot: {...},
      contentProperties: [...]
    }]
  },
  oldValue: null
}
```
