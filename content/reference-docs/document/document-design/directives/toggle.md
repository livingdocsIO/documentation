---
title: Toggle
description: >
  The toggle directive is used to conditionally render a block

menus:
  reference-docs:
    parent: Directives
    weight: 9
---

## Usage

The toggle directive is used to conditionally render a block. The toggle directive can be declared on any element in the template and acts like an if block. It can be set to either `true` or `false` by editors. The toggle directive is shown as a checkbox in the properties panel in the editor.

## Example

In this example you see a header component with an optional `overline` directive. Editors can control explicitly with the toggle directive to either include an overline in the header component or not.

Component Definition:

```js
{
  name: 'header',
  label: 'Header',
  directives: [{
    name: 'showOverline',
    type: 'toggle',
    label: 'Show Overline',
    default: false
  }],
  html: dedent`
    <div class="header">
      <h3 doc-toggle="showOverline"   doc-editable="overline"></h3>
      <h2 doc-editable="title"></h2>
      <p doc-editable="teaserText"></p>
    </div>
  `
}
```

Serialised Component JSON:

```js
{
  component: 'header',
  content: {
    overline: '...',
    showOverline: false,
    title: '...',
    teaserText: '...',
  }
}
```

Note that the `overline` directive is still included in the JSON even when `showOverline` is set to false. Consumers of the JSON are responsible to respect `showOverline` when processing the JSON.
