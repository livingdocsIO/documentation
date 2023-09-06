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
  tableDashboard: false
  include: true
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  li-color will provide you with 2 settings (based on `useInputTypeColor`)
  * `useInputTypeColor: true` - color picker which stores the HEX color code
  * `useInputTypeColor: false` - text field where you have to enter the HEX color code (e.g. `#8CBA51`)
defaultUI: |
  Text input with color picker.

  ![image](https://user-images.githubusercontent.com/172394/164286195-51beb096-492d-4f7f-b8e7-4623db658125.png)
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
