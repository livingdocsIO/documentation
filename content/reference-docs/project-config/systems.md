---
title: Systems
weight: 11
menus:
  reference-docs:
    parent: Project Config
---

{{< added-in release-2022-07 block >}}



Systems define a relation to another system. Currently we support only systems of type `source` which defines a relation to the origin of a document.

An example:
```js
systems: [
  {
    handle: 'cms',
    type: 'source',
    url: {
      origin: 'https://cms.de',
      pathPattern: '/{{id}}/{{metadata.cmsId}}'
    }
  }
]
```

## Source System

A system of type `source` defines an URL with `origin` and a `pathPattern`. The `pathPattern` can have placeholders which will be replaced with real values during runtime to build the final URL to the source system.
- `{{id}}`              -> replaced by Livingdocs `documentId`
- `{{metadata.cmsId}}`  -> replaced by a metadata field with the handle `cmsId`
