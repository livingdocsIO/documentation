---
title: Style
menus:
  reference-docs:
    parent: Directives
---

Style directives allow a user to set style properties like a background color that will then be written to the `style` attribute on the given tag.

## Example

```js
module.exports = {
  "name": "article-header",
  "label": "Artikelkopf",
  "directives": [{
    "name": "background",
    "type": "style",
    "properties": ["css-background-color"]
  }, {
    "name": "title",
    "type": "editable",
    "plainText": true
  }],
  "html": dedent`
    <header class="articleheader">
        <section class="articleheader__textsection" doc-style="background">
            <h1 class="headline headline--h1 articleheader__headline articleheader__headline--h1" doc-editable="title">Artikel Headline</h1>
        </section>
    </header>
  `
}
```

## Config Option

- `properties`: array of strings, set of referenced [component properties]({{< ref "../design.md#component-properties" >}}) that are set when the user enters content. E.g. in the example below a user could set a hex-code for a color that uses the component property `css-background-color` that in turn sets the style attribute to `style="background-color:user-value"`.
