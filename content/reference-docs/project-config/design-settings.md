---
title: Design Settings
weight: 4
menus:
  reference-docs:
    parent: Project Config
---

The designSettings config describes general settings for your components.
Both the designSettings and components together form a document design.

For details how to create and customize a document design please refer to
[Document Design]({{< ref "/reference-docs/document/document-design" >}}).

```js
designSettings: {
  label: 'My Document Design',
  description: 'A set of components which can be used in my project.',
  author: 'Livingdocs',

  componentGroups: [{...}],
  defaultComponents: {...},
  componentProperties: [{...}]
}
```
