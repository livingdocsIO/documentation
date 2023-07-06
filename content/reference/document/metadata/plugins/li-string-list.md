---
title: li-string-list
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: Multiselect
support:
  document: true
  media: true
  tableDashboard: true
  include: true
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
description: Requires a `dataProvider` to work.
defaultUI: Multiselect input
storageFormat: |
  [<String>]
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-string-list',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                             // optional, default: false. {{< added-in "release-2023-07" >}}
          // specific
          dataProvider: { // required
            // Option 1 - list of items
            type: 'labelValuePair',
            items: [
              {label: 'Item A', value: 'a'},
              {label: 'Item B', value: 'b', isDefault: true}, // isDefault sets the value if document opened the first time
              {label: 'Item C', value: 'c'}
            ]
            // Option 2 - DataSource
            dataSource: 'labelValuePairDataSource'
          }
        },
        ui: {
          label: 'foo', // optional, takes camelized name otherwise
          config: {
            readOnly: true, // optional, default: false
          }
        }
---
