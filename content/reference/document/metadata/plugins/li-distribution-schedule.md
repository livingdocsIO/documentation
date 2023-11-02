---
title: li-distribution-schedule
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Allows a user to select Distribution Channels that they would like to view in the Distribution Schedule side panel.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: true
description: This plugin will allow a user to select Distribution Channels that they would like to view in the Distribution Schedule side panel. Once selected the Schedule button in the editor becomes active and the side panel can be opened. It is possible to lock the schedule to a specific date.
defaultUI: Multi-select input for distribution channel selection, and date input
storageFormat: |
  {
    distributionChannels: [<String>],
    date: <ISO8601 String>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-distribution-schedule',
        config: {
          allowFixedDate: true
        },
        ui: {
          label: 'Distribution Schedule',
          config: {
            placeholder: 'Select a Distribution Channel',
            useDashboard: 'articlesSimple'
          }
        }
---
