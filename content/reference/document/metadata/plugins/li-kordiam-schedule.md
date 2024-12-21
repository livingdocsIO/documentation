---
title: li-kordiam-schedule
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Allows a user to select Kordiam platforms and categories that they would like to view in the Kordiam Schedule side panel.
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
  planningSystem: false
description: |
  {{< info >}}
    {{< added-in "release-2024-11" >}}. Prior to {{< release "release-2024-11" >}}, `li-kordiam-schedule` was known as [`li-desknet-schedule`]({{< ref "/reference/document/metadata/plugins/li-desknet-schedule" >}}).
  {{< /info >}}

  This plugin will allow a user to select Kordiam platforms and categories that they would like to view in the Kordiam Schedule side panel. Once selected the Kordiam button in the editor becomes active and the side panel can be opened. It is possible to lock the schedule to a specific date, as well as filter the Kordiam stories that are displayed. Further details can be found in the [Kordiam Schedule Guide]({{< ref "/guides/integrations/kordiam-schedule" >}}).
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
        type: 'li-kordiam-schedule',
        config: {
          filters: {
            linkedDocumentsOnly: true,
            elementStatusIds: [1, 2, 10322, 10332],
            publicationStatusIds: [5]
          }),
          externalElementIdMetadataPath: 'myExternalSystem.id',
          automaticPlacementCreationFlowHandle: 'myKordiamGenerateContentFlow'
        },
        ui: {
          label: 'Kordiam Schedule',
          config: {
            placeholder: 'Select a Kordiam platform or category',
            useDashboard: 'articlesSimple'
          }
        }
---
