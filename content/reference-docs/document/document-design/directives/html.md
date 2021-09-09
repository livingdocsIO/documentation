---
title: HTML
description: (Deprecated) HTML directives allow you to insert arbitrary HTML within the tag on which the directive is specified.
menus:
  reference-docs:
    parent: Directives
    weight: 5
---

HTML directives allow you to insert arbitrary HTML within the tag on which the directive is specified. The idiomatic use case is the free-html component. But you can also use embeds that have predefined validators and only allow specific "whitelisted" HTML to be inserted.

Use of `doc-html` (client-side embeds) is not recommended and deprecated. We advise you to use [includes]({{< ref "./include.md" >}}) to control the rendering of third-party embeds on the server.

## Example

```js
{
  name: 'tweet',
  label: 'Tweet',
  html: dedent`
    <div class="embed-container">
      <div doc-html="tweet">
          <div class="embed tweet">
            <div class="placeholder"></div>
          </div>
      </div>
    </div>
  `
}
```

## Config Options

There are no config options.
The automatic validation is hardcoded for a set of given embeds and is recognized by the name of the directive:
- `free-html` -> no validation
- `iframe` -> only allow iframe embeds
- `tweet` -> only allow twitter embeds
