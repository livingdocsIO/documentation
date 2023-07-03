---
title: li-google-vision
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
support:
  document: false
  media: true
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
defaultUI: Specialised UI in the Media Library Image Detail View, no config possible
storageFormat: |
  {
    labels: [<String>],
    webEntities: [<String>]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-google-vision',
        config: {
          // common
          hideFromForm: false                      // optional, default: false
        }
        ui: {
          label: 'foo',                            // optional, default: start case of handle
          config: {
            readOnly: true                         // optional, default: false
          }
        }
---
