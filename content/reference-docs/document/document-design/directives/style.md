---
title: Style
description: Style directives allow a user to set style properties like a background color.
menus:
  reference-docs:
    parent: Directives
    weight: 7
---

Style directives allow a user to set style properties like a background color that will then be written to the `style` attribute on the given tag.

## Example

```js
{
  name: 'article-header',
  label: 'Artikelkopf',
  directives: [{
    name: 'background',
    type: 'style',
    properties: ['css-background-color']
  }, {
    name: 'title',
    type: 'editable',
    plainText: true
  }],
  html: dedent`
    <header class="header">
      <section class="header__section" doc-style="background">
        <h1 class="headline headline--h1" doc-editable="title">
          Article Headline
        </h1>
      </section>
    </header>
  `
}
```

## Config Option

- `properties`: array of strings, set of referenced [component properties]({{< ref "/reference-docs/document/document-design#component-properties" >}}) that are set when the user enters content. E.g. in the example below a user could set a hex-code for a color that uses the component property `css-background-color` that in turn sets the style attribute to `style="background-color:user-value"`.
