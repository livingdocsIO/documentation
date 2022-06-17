---
title: Editor Customization
bullets:
  - Summary of available UI extension points
  - Customization examples
weight: 2
on-premise: true
---

## Editor extension points

Possible Livingdocs Editor UI customizations:

- custom Angular factories or services (for use in other customizations)
- custom Angular components for metadata fields
- .. or [custom model classes]({{< ref "/guides/documents/metadata" >}}) for existing metadata fields
- custom Angular components for doc-include sidebar user interfaces
- custom [Display Filter]({{< ref "/reference-docs/editor-extensions/editor-configuration/display-filter.md" >}})
- custom Dashboard item (a single item in the articles dashboard)
- custom Embed components (the core contains Iframes and Tweets)
- custom Iframely metadata extractors
- locale customizations


## Editor Configuration

In addition to this some behaviour can be customised using the JSON configuration.

## Customization examples

The editor (like the server) usually has an `app/editor.js` file where code customizations are registered and that looks something like this:
```js
// entry point when using the webpack build of the editor
const liEditor = require('@livingdocs/editor')()
const editingApiModule = window.angular.module('li-editing-api')
// the Angular editorModule -> can be used to register services and factories
const editorModule = window.angular.module('livingdocs-editor')

// example of loading a custom angular module: ui-validate
// require('angular-ui-validate')
// editorModule.requires.push('ui.validate')

// Just require a custom Angular factory using the editorApiModule
require('./custom/scripts/factories/categories')(editingApiModule)

// Register a custom filter for the dashboard
const layoutsFilter = require('./custom/filters/layouts_filter')
liEditor.searchFilters.registerList('layouts', layoutsFilter)

// Register a custom doc-include sidebar interface (Angular component)
liEditor.includes.register('brightcove', {
  template: require('../plugins/includes/ld-brightcove-include/brightcove_include_template.html'),
  controller: require('../plugins/includes/ld-brightcove-include/brightcove_include_controller'),
  bindings: {
    directive: '=',
    componentView: '=',
    component: '='
  }
})

// Register a custom metadata field model (business logic)
liEditor.metadataServices
  .register('categorySelection',
    require('../plugins/metadata_services/category_selection_service'))

// Example of custom embeds
// embeds = require('@livingdocs/editor/app/scripts/modules/embeds/embeds')
// Pinterest = require('./custom/scripts/modules/embeds/pinterest/pinterest')
// Facebook = require('./custom/scripts/modules/embeds/facebook/facebook')
// embeds.registerCustomEmbeds [
//   Facebook,
//   Pinterest
// ]

const Iframely = require('@livingdocs/editor/app/scripts/modules/iframely')
const defaultExtractor = require('@livingdocs/editor/app/scripts/modules/iframely/default_metadata_extractor')
Iframely.initializeOembedMetadataExtractor(defaultExtractor)

// Example of changing the date locale
// moment = require('moment')
// momentDe = require('moment/locale/de')
// moment.locale('de')

liEditor.mount()
```
