---
title: 'Document Command API: New Commands'
type: release-note-change
weight: 1

change:
  release: release-2024-07
  service: Server
  section: Commands API
---

We have extended the [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) with two new commands, which are also available for [Assistants]({{< ref "/customising/assistants" >}}).

#### `removeComponent`

```js
{
  operation: 'removeComponent',
  componentId: 'doc-4a2b3g4d5'
}
```

#### `unpublish`

```js
{
  operation: 'unpublish'
}
```
