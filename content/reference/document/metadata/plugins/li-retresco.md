---
title: li-retresco
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Manage tags
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: true
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
description: Please see the [Retresco integration guide]({{< ref "/guides/integrations/retresco" >}}) for details on how to setup the integration.
defaultUI: Retresco tag management
storageFormat: |
  {
    contentVersion: <String>,
    entities: [
      {
        id: <String>,
        type: <String>,
        name: <String>,
        score: <Number>,
        inappropriate: <Boolean>,
        userAdded: <Boolean>,
        isMain: <Boolean> // {{< added-in "release-2024-09" >}}
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-retresco'
---
