---
title: li-datetime
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: 
support:
  document: true
  media: true
  tableDashboard: false
  include: true
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
defaultUI: A datetime input
storageFormat: <ISO8601 String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-datetime',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value',  // optional
          index: true                              // optional, default: false, added in {{< release "release-2023-07" >}}
        },
        ui: {
          label: 'foo',                   // optional, takes camelized name otherwise
          config: {
            readOnly: true                // optional, default: false
          }
        }
---
