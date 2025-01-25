---
title: li-kordiam-global
type: metadata-plugins

history:
  - release: release-2024-11
    description: Initial support with the rename as replacement for `li-desknet-global`

menus:
  reference:
    parent: Metadata Plugins List
summary: Used to connect Kordiam stories with Livingdocs documents.
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
    {{< added-in "release-2024-11" >}}. Prior to {{< release "release-2024-11" >}}, `li-kordiam-global` was known as [`li-desknet-global`]({{< ref "/reference/document/metadata/plugins/li-desknet-global" >}}).
  {{< /info >}}

  {{< info >}}
    See [`li-kordiam-integration`]({{< ref "/reference/document/metadata/plugins/li-kordiam-integration" >}}) for details about the legacy Kordiam Platform Integration plugin.
  {{< /info >}}

  The `li-kordiam-global` plugin is used to connect Kordiam stories with Livingdocs documents. There are numerous options available to synchronise data between the two platforms. Further details can be found in the [Kordiam Global Integration Guide]({{< ref "/guides/integrations/kordiam" >}}).
defaultUI: Link to Kordiam story, or optional button to create a Kordiam story
storageFormat: |
  {
    id: <Integer>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-kordiam-global',
        ui: {
          label: 'Kordiam'
        }
---
