---
title: Categories
weight: 9
menus:
  reference-docs:
    parent: Project Config
---

The categories are normally used together with the routing system to represent the idiomatic department structure in a newspaper. Read our [Setup Categories Guide]({{< ref "/guides/organisation/categories-and-routing.md" >}}) for more infos on the actual use cases.

You can define an array of available categories:
```js
categories: [{
  id: 'home',
  label: 'Home',
  path: '/',
  parent:
  archived: false,
  metadata: {
    foo: 'bar' // You can store arbitrary data here
  }
}, {
  id: 'breaking-news',
  label: 'Breaking News',
  path: '/breaking',
  parent: 'home',
  archived: false,
  metadata: {
    bar: 'foo'
  }
}]
```

Categories can have a path for the routing.

They should never be deleted but the `archived` flag set to true.

Categories have a `metadata` object that contain additional information such as ad campaign ids for a certain category (e.g. ads specific to the "Sports" category).
