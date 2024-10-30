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
  {{< warning >}}
    Desk-Net rebranded as Kordiam. Consequently, `li-desknet-schedule` has been deprecated as of {{< release "release-2024-11" >}} and will be removed in {{< release "release-2025-05" >}}. Please use [`li-kordiam-schedule`]({{< ref "/reference/document/metadata/plugins/li-kordiam-schedule" >}}) instead. For more details, refer to our [Desk-Net to Kordiam migration guide]({{< ref "/guides/integrations/desknet-to-kordiam-migration" >}}).
  {{< /warning >}}

  This plugin will allow a user to select Desk-Net platforms and categories that they would like to view in the Desk-Net Schedule side panel. Once selected the Desk-Net button in the editor becomes active and the side panel can be opened. It is possible to lock the schedule to a specific date, as well as filter the Desk-Net stories that are displayed. Further details can be found in the [Desk-Net Schedule Guide]({{< ref "/guides/integrations/desknet-schedule" >}}).
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
