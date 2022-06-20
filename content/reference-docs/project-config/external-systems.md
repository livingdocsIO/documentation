---
title: External Systems
weight: 11
menus:
  reference-docs:
    parent: Project Config
---

{{< added-in release-2022-07 block >}}



External Systems define a relation to a source system. External Systems usually have stored the original document which will be one way synced to Livingdocs via Import.

An example:
```js
externalSystems: [
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

An External System defines an URL with `origin` and a `pathPattern`. The `pathPattern` can have placeholders which will be replaced with real values during runtime to build the final URL to the source system.
- `{{id}}`              -> replaced by Livingdocs `documentId`
- `{{metadata.cmsId}}`  -> replaced by a metadata field with the handle `cmsId`
