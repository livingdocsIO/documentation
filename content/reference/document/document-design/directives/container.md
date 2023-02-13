---
title: Container
description: Container directives allow you to nest lists of Livingdocs components.
menus:
  reference:
    parent: Directives
    weight: 8
---

Container directives allow you to nest lists of Livingdocs components. Common examples for containers are separations into header, body, sidebar, etc.

## Example

```js
{
  name: 'bullet-list',
  label: 'Bullet List',
  directives: [
    {
      name: 'list',
      type: 'container',
      defaultComponents: {
        paragraph: 'bullet-list-item'
      },
      defaultContent: [
        {component: 'bullet-list-item'}
      ],
      allowedChildren: ['bullet-list-item']
    }
  ],
  html: dedent`
    <ul doc-container="list" class="ld-list"></ul>
  `
}
```

The above example is an idiomatic bullet list. The container (list) will have one item by default and upon pressing enter in an item, a new item is inserted (`defaultComponents.paragraph`).

## Config Options

`defaultComponents`: object, allows you to overwrite the [global default components]({{< ref "/reference/document/document-design#default-components" >}}) for all components within a container directive. Probably the most important one is the `paragraph` default component which defines what happens upon pressing the "Enter" key. in the example above it is used to insert a new list item when pressing "Enter" in a bullet list.

`defaultContent`: array, defines a set of components that are available by default in the container. In the example above it is used to add one list item in the bullet list by default.
**ATTENTION**: This applies only when the component is dragged in by a human. If a component is created by a machine (e.g. import or data migration) no default content is set.

`allowedChildren`: array, allows you to define which components are allowed within a certain container.
