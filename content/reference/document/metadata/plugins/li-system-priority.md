---
title: li-system-priority
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Provide a priority.
history:
  - release: release-2025-07
    version: 2025-07
    description: This system metadata plugin was added in the `2025-07` version.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: false
  systemMetadata: false
  planningSystem: false
description: |
  This plugin is used to set a priority on news agency dashboards.
defaultUI: |
  **Select Input**: From 1 to 6
storageFormat: <Integer>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-system-priority',
        ui: {
          label: {
            en: 'Prio',
            de: 'Prio'
          }
        }
---
