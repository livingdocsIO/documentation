---
title: li-desknet-global
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Used to connect Desk-Net stories with Livingdocs documents.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: true
  planningSystem: false
description: |
  {{< info >}}
  See [`li-desknet-integration`]({{< ref "/reference/document/metadata/plugins/li-desknet-integration" >}}) for details about the legacy plugin.
  {{< /info >}}

  The `li-desknet-global` plugin is used to connect Desk-Net stories with Livingdocs documents. There are numerous options available to synchronise data between the two platforms.
defaultUI: Link to Desk-Net story, or optional button to create a Desk-Net story
storageFormat: |
  {
    id: <Integer>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-desknet-global',
        ui: {
          label: 'Desk-Net'
        }
---
