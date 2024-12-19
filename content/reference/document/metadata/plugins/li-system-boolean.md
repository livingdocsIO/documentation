---
title: li-system-boolean
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A simple Boolean value store as system metadata, represented in the UI with a checkbox which you can toggle on/off.
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
description: |
  A simple Boolean value store, almost identical to `li-boolean`, but as system metadata (does not indicate a draft content change).
  {{< added-in "release-2025-01" >}}.
 
  Represented in the UI with a checkbox which you can toggle on/off.

  If you want to have the value set to `true` during document creation, you can do that via [defaultMetadata]({{< ref "/reference/project-config/content-types#default-metadata" >}}) in your project config.
defaultUI: Checkbox
storageFormat: <Boolean>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-system-boolean',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          index: true                              // optional, default: false 
        }
        ui: {
          label: 'foo',                            // optional, default: start case of handle
          config: {
            readOnly: true                         // optional, default: false
          }
        }
---
