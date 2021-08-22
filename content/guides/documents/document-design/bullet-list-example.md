---
title: 'Example Component: Bullet List'
description: Create a bullet list component
weight: 3
---

A list is basically a set of 2 components: a container component that holds the list items and a repeatable component that is inserted whenever a user presses enter in the container. You can basically make everything a repeatable. The example shows the regular use case of a bullet list.

In the container you set the `defaultComponents:paragraph` to define which component is inserted when a user presses enter (repeatable) and the `defaultContent` to define which component is initially present (template). Usually, the two are the same.

The container:
```js
module.exports = {
  label: 'Bullet List',
  name: 'bullet-list',
  properties: ['list-type'],
  directives: [{
    name: 'list',
    type: 'container',
    defaultComponents: {
      paragraph: 'bullet-list-item'
    },
    defaultContent: [{
      component: 'bullet-list-item'
    }]
  }],
  html: `<ul doc-container="list" class="ld-list"></ul>`
}
```

The repeatable:
```js
module.exports = {
  name: 'bullet-list-item',
  label: 'Bullet List Item',
  allowedParents: ['bullet-list'],
  html: `<li doc-editable="text">List item</li>`
}
```
