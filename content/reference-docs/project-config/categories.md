---
title: Categories
menus:
  reference-docs:
    parent: Project Config
---

The categories are normally used together with the routing system to represent the idiomatic department structure in a newspaper. Read our [Setup Categories Guide]({{< ref "/guides/activate-categories.md" >}}) for more infos on the actual use cases.

You can define an array of available categories in your project config. The schema looks as follows:

```js
// projectConfig.categories: [{...}]
ms.arrayOf(ms.strictObj({
  id: 'string:required',
  label: 'string:required',
  path: 'string:required',
  parent: 'string',
  archived: 'boolean',
  metadata: ms.obj()
}))
```

Categories can have a path for the routing.
They should never be deleted but the `archived` flag set to true.
Categories have a `metadata` object that contain additional information such as ad campaign ids for a certain category (e.g. ads specific to the "Sports" category).
