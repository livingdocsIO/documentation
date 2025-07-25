---
title: li-system-enum
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A select form based on a statically defined list.
history:
  - release: release-2025-05
    version: 2025-05
    description: Table dashboard support was added in the `2025-05` release.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: true
  planningSystem: false
  webhookConditions: true
description: |
  A `li-system-enum` metadata field shows a select form based on a statically defined list. On publish the selected value gets validated against the defined static list. With that you can assure that only specific values gets published.

  [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter#metadata-filters" >}}) support {{< added-in "release-2023-09" >}}
defaultUI: |
  Select input

  ![image](../images/li-enum-ui.png)
storageFormat: <String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-system-enum',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                              // optional, default: false
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
