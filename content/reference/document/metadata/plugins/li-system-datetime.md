---
title: li-system-datetime
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary:
support:
  document: true
  media: true
  include: true
  creationFlow: true
  pushMessage: true
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: true
  planningSystem: false
  webhookConditions: true
defaultUI: A datetime input as system metadata
storageFormat: <ISO8601 String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-system-datetime',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value',  // optional
          index: true                              // optional, default: false
        },
        ui: {
          label: 'foo',                   // optional, takes camelized name otherwise
          config: {
            readOnly: true                // optional, default: false
          }
        }
---
