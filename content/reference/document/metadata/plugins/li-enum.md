---
title: li-enum
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A select form based on a statically defined list.
support:
  document: true
  media: true
  tableDashboard: false
  include: true
  displayFilter: true
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  A `li-enum` metadata field shows a select form based on a statically defined list. On publish the selected value gets validated against the defined static list. With that you can assure that only specific values gets published.

  [Display Filters]({{< ref "customising/advanced/editor-configuration/display-filter#named-filters" >}}) support {{< added-in "release-2023-09" >}}
defaultUI: |
  Select input

  ![image](https://user-images.githubusercontent.com/172394/157249103-fd951f85-edf8-48ff-acc5-1b1a04831589.png)
storageFormat: <String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-enum',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                              // optional, default: false. {{< added-in "release-2023-07" >}}
          // specific
          dataProvider: {                          // required
            type: 'labelValuePair',                // required
            items: [
              {label: 'Tag A', value: 'a'},
              {label: 'Tag B', value: 'b', isDefault: true}, // isDefault sets the value if document opened the first time
              {label: 'Tag C', value: 'c'}
            ]
          }
        },
        ui: {
          label: 'foo',                   // optional, takes camelized name otherwise
          config: {
            readOnly: true,               // optional, default: false
            placeholder: 'foo'           // optional, takes camelized name otherwise
          }
        }
---
