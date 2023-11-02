---
title: li-desknet-schedule
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Allows a user to select Desk-Net platforms and categories that they would like to view in the Desk-Net Schedule side panel.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: false
  planningSystem: false
description: |
  This plugin will allow a user to select Desk-Net platforms and categories that they would like to view in the Desk-Net Schedule side panel. Once selected the Desk-Net button in the editor becomes active and the side panel can be opened. It is possible to lock the schedule to a specific date, as well as filter the Desk-Net stories that are displayed. Further details can be found in the [Desk-Net Integration Guide]({{< ref "/guides/integrations/desknet#story-planning-schedule-in-livingdocs" >}}).
defaultUI: Platform/category select and date input
storageFormat: |
  {
    platforms: [
      {
        platformId: <Integer>,
        categoryId: <Integer>
      }
    ],
    date: <ISO8601 String>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-desknet-schedule',
        config: {
          filters: {
            linkedDocumentsOnly: true,
            elementStatusIds: [1, 2, 10322, 10332],
            publicationStatusIds: [5]
          }),
          desknetExternalElementIdMetadataPath: 'myExternalSystem.id',
          automaticPlacementCreationFlowHandle: 'myDesknetGenerateContentFlow'
        },
        ui: {
          label: 'Desk-Net Schedule',
          config: {
            placeholder: 'Select a Desk-Net platform or category',
            useDashboard: 'articlesSimple'
          }
        }
---
