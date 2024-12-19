---
title: li-system-integer
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
support:
  document: true
  media: true
  include: true
  creationFlow: true
  pushMessage: true
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: true
  planningSystem: false
  webhookConditions: true
defaultUI: |
  * Renders a number input.
  * No UI is rendered if the `handle` is `lastProofreadRevision`.
  * {{< added-in "release-2023-03" >}}: Renders a select element if a `dataProvider` is configured
storageFormat: <Integer>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-system-integer',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                             // optional, default: false
          // specific
          minValue: 1,                             // optional
          maxValue: 50,                             // optional
          translatable: true,                      // optional, default: false, translations are only supported for data-record and mediaLibrary
          dataProvider: {                          // optional. {{< added-in "release-2023-03" >}}
            // Option 1 - list of items
            type: 'labelValuePair',
            items: [
              {label: 'A', value: 1},
              {label: 'B', value: 2, isDefault: true}, // isDefault sets the value if document opened the first time
              {label: 'C', value: 3}
            ]
            // Option 2 - DataSource
            dataSource: 'labelValuePairDataSource'
          }
        },
        ui: {
          label: 'foo',                   // optional, takes camelized name otherwise
          config: {
            placeholder: 'bar',           // optional, takes camelized name otherwise
            readOnly: true                // optional, default: false
          }
        }
---
