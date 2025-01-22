---
title: External Systems
weight: 11
menus:
  reference:
    parent: Project Config
---

External Systems define a relation to a source system. External Systems usually have stored the original document which will be one way synced to Livingdocs via Import.

An example:

```js
externalSystems: [
  {
    handle: 'legacy-cms',
    label: 'Legacy CMS'
    url: {
      origin: 'https://legacy-cms.example.com',
      pathPattern: '/{{id}}/{{metadata.cmsId}}'
    }
  }
]
```

An External System defines an URL with `origin` and a `pathPattern`. The `pathPattern` can have placeholders which will be replaced with real values during runtime to build the final URL to the source system.

- `{{id}}` -> replaced by Livingdocs `documentId`
- `{{metadata.cmsId}}` -> replaced by a metadata field with the handle `cmsId`
