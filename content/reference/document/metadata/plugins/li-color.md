---
title: li-color
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Text input with color picker.
support:
  document: true
  media: true
  include: true
  creationFlow: true
  pushMessage: true
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: true
description: |
  li-color will provide you with 2 settings (based on `useInputTypeColor`)
  * `useInputTypeColor: true` - color picker which stores the HEX color code
  * `useInputTypeColor: false` - text field where you have to enter the HEX color code (e.g. `#8CBA51`)
defaultUI: |
  Text input with color picker.

  ![image](../images/li-color-ui.png)
storageFormat: <String>
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-color',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                             // optional, default: false. {{< added-in "release-2023-07" >}}
          // specific
          translatable: true                       // optional, default: false, translations are only supported for data-record and mediaLibrary
        },
        ui: {
          label: 'My Label',
          config: {
            useInputTypeColor: false,              // optional, default: true, shows a color picker
            readOnly: true,                        // optional, default: false
            placeholder: 'foo',                    // optional, takes camelized name otherwise
          }
        }
---
