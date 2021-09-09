---
title: Editor API
weight: 2
menus:
  reference-docs:
    parent: Editor Extensions
---

When you require the `@livingdocs/editor` core npm package, it returns the core API.
This object exposes functions you can use to extend the editor.

```js
const liEditor = require('@livingdocs/editor')()
// call functions on liEditor object to customize its behavior
liEditor.mount()
```
