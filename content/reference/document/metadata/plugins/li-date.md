---
title: li-date
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary:
history:
  - release: release-2025-05
    version: 2025-05
    description: Table dashboard support was added in the `2025-05` release.
support:
  document: true
  media: true
  include: true
  creationFlow: true
  pushMessage: true
  tableDashboard: true
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: true
defaultUI: Date input field
storageFormat: <ISO8601 String>
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-date',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          translatable: false,                     // optional, default: false
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        },
        ui: {
          label: 'foo',                   // optional, takes camelized name otherwise
          config: {
            readOnly: true                // optional, default: false
          }
        }
---
