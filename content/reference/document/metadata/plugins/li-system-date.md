---
title: li-system-date
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
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: true
  systemMetadata: true
  planningSystem: false
  webhookConditions: true
defaultUI: Date input field as system metadata
storageFormat: <ISO8601 String>
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-system-date',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          translatable: false,                     // optional, default: false
          index: true                              // optional, default: false
        },
        ui: {
          label: 'foo',                   // optional, takes camelized name otherwise
          config: {
            readOnly: true                // optional, default: false
          }
        }
---
