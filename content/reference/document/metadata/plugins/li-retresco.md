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
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: false
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
        userAdded: <Boolean>
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-retresco'
---
