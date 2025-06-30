---
title: 'Document Command API: New Publish Control Commands'
type: changelog-entry
weight: 1

change:
  type: feature
  date: 2025-07
---

We have extended the [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) with new publish control commands.

#### `setEmbargo`

```js
{
  operation: 'setEmbargo',
  reason: 'Some reason',
  until:  '2021-11-04T00:00:00Z'
}
```

#### `removeEmbargo`

```js
{
  operation: 'removeEmbargo'
}
```

#### `addPublishSchedule`

```js
{
  operation: 'addPublishSchedule',
  date: '2021-11-04T00:00:00Z'
}
```

#### `cancelPublishSchedule`

```js
{
  operation: 'cancelPublishSchedule'
}
```

#### `addUnpublishSchedule`

```js
{
  operation: 'addUnpublishSchedule',
  date: '2021-11-04T00:00:00Z'
}
```

#### `cancelUnpublishSchedule`

```js
{
  operation: 'cancelUnpublishSchedule'
}
```
