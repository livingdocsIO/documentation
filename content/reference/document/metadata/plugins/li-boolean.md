---
title: li-boolean
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A simple Boolean value store, represented in the UI with a checkbox which you can toggle on/off.
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
description: |
  A simple Boolean value store, represented in the UI with a checkbox which you can toggle on/off.

  If you want to have the value set to `true` during document creation, you can do that via [defaultMetadata]({{< ref "/reference/project-config/content-types#default-metadata" >}}) in your project config.
defaultUI: Checkbox
storageFormat: <Boolean>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-boolean',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        }
        ui: {
          label: 'foo',                            // optional, default: start case of handle
          config: {
            readOnly: true                         // optional, default: false
          }
        }
---
