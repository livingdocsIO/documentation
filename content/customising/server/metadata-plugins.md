---
title: Metadata Plugins
description: A general overview.
icon: tag
weight: 3
menus:
  customising:
    parent: Server Extensions
    weight: 6
---

## Overview

With a metadata plugin these things can be defined

- plugin name
- indexing configuration
- storage schema
- config and ui config schema

You can find Livingdocs metadata plugins here: [plugins/metadata](https://github.com/livingdocsIO/livingdocs-server/tree/master/plugins/metadata) on the livingdocs-server.

## Schema of a Metadata Plugin

```js
module.exports = {
  // Plugin name
  // Use the name as plugin value in the configuration
  // REQUIRED
  name: 'customername-pluginname',

  // Indexing configuration
  // Defines the elasticsearch mapping and the fields that are indexed
  indexing: {
    enabled: true,
    behavior: [
      {
        type: 'text',
        key: 'customerPluginName',
        getValue(val) {
          return val
        }
      },
      {type: 'keyword'}
    ]
  },

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
  uiSchema: ms.strictObj(
    {
      label: 'string',
      config: ms.strictObj(
        {
          placeholder: 'string',
          readOnly: {type: 'boolean', default: false}
        },
        {default: {}}
      )
    },
    {default: {}}
  )
}
```

## References

- [Metadata]({{< ref "/reference/document/metadata" >}})
