---
title: Editor Customization
bullets:
  - Summary of available UI extension points
  - Customization examples
weight: 2
---

## Editor extension points

Possible Livingdocs Editor UI customizations:

- [custom model classes]({{< ref "/guides/documents/metadata" >}}) for existing metadata fields
- custom [Display Filter]({{< ref "/customising/advanced/editor-configuration/display-filter.md" >}})
- custom Dashboard item (a single item in the articles dashboard)
- locale customizations

## Editor Configuration

In addition to this some behaviour can be customised using the JSON configuration.

## Customization examples

The editor (like the server) usually has an `app/editor.js` file where code customizations are registered and that looks something like this:

```js
const liEditor = require('@livingdocs/editor')()

// Register a custom filter for the dashboard
const layoutsFilter = require('./custom/filters/layouts_filter')
liEditor.searchFilters.registerListV2('layouts', layoutsFilter)

// Example of changing the date locale
// moment = require('moment')
// momentDe = require('moment/locale/de')
// moment.locale('de')

liEditor.mount()
```
