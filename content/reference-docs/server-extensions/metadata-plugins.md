---
title: Metadata Plugins
weight: 3
menus:
  reference-docs:
    parent: Server Extensions
---

## Overview

A metadata plugin defines the format and validation of a metadata value. It also defines how this value is indexed in the elasticsearch publication index.

There are synchronous hooks for update, publish and unpublish events.

If a custom metadata plugin should appear in the Prepare Publish screen in the Editor
there also must be a UI plugin in the editor which can render the form UI.

You can find the implementations of the Livingdocs metadata plugins here: [plugins/metadata](https://github.com/livingdocsIO/livingdocs-server/tree/master/plugins/metadata) on the livingdocs-server.


## Write a Custom Plugin

When the behavior of the standard plugins are not enough, you can write custom plugins.

```js
module.exports = {
  // Plugin name
  // Use the name as plugin value in the configuration
  // REQUIRED
  name: 'customername-pluginname',

  // JSON schema of stored value
  // https://json-schema.org/learn/getting-started-step-by-step.html
  // REQUIRED
  storageSchema: {
    // define your own Schema here
    type: 'string'
  },

  // JSON schema of metadata configuration
  // OPTIONAL
  configSchema: {
    // define your own Schema here
    type: 'object'
  },

  // JSON schema of metadata ui configuration
  // Define your own Schema here
  // For simple schemas Livingdocs uses https://github.com/livingdocsIO/microschema
  // OPTIONAL
  uiSchema: ms.strictObj({
    label: 'string',
    config: ms.strictObj({
      placeholder: 'string',
      readOnly: {type: 'boolean', default: false},
    }, {default: {}})
  }, {default: {}}),

  /**
  * Validate only gets triggered for metadata.onPreparePublish hook
  * If the validation fails, the publish process will be aborted
  *
  * @param {} value value of the metadata field.
  * @param {Object} config config property of `metadata configuration`
  * @return If you return `false` or even better a `string` with an explanation
  *   this will be treated as a failed validation. All other return values
  *   count as valid.
  **/
  // OPTIONAL
  validate: function (value, config) {
    // Example implementation
    if (value.length > 20) {
      return 'The value is too long'
    } else {
      return true
    }
  },

  // The onUpdate event will be called before a document gets stored
  // @param newValue Updated value when updating a document
  // @param oldValue Stored value before the document update
  // @param config {Object} config property of `metadata configuration`
  // @param documentVersion {DocumentVersion}
  // @return the value you assign to the metadata field, if you don't return
  //    the value will be undefined
  // OPTIONAL
  onUpdate: function(newValue, oldValue, config, documentVersion) {
    // CUSTOMIZE: your implementation
    return newValue
  },

  // The onPreparePublish event will be called before a document gets published
  // @return the value you assign to the metadata field, if you don't return
  //    the value will be undefined
  // introduced in: release-2022-03 (is a replacement for onPublish hook)
  // OPTIONAL
  onPreparePublish: function(newValue, oldValue, config, documentVersion) {
    // CUSTOMIZE: your implementation
    return newValue
  },

  // The onUnpublish event will be called before a document gets unpublished
  // @return the value you assign to the metadata field, if you don't return
  //    the value will be undefined
  // OPTIONAL
  onUnpublish: function(newValue, oldValue, config, documentVersion) {
    // your implementation
    return newValue
  },

  // DEPRECATED: WILL BE REMOVED AT SOME POINT.
  // USE THE RENDER PIPELINE INSTEAD.
  // The onRender event will be called before a document gets rendered
  // OPTIONAL
  onRender: function(newValue, oldValue, config, documentVersion) {
    // your implementation
  }
}
```

## References
- [Metadata]({{< ref "/reference-docs/document/metadata" >}})
