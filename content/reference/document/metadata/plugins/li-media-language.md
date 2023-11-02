---
title: li-media-language
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: |
  {{< removed-in "release-2023-09" >}}. Use [`li-metadata-translations`]({{< ref "/reference/document/metadata/plugins/li-metadata-translations" >}}) instead.
support:
  document: false
  media: true
  include: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: false
  planningSystem: false
removedIn: release-2023-09
description: |
  Metadata type `li-media-language` has been replaced with [`li-metadata-translations`]({{< ref "/reference/document/metadata/plugins/li-metadata-translations" >}}).
defaultUI: None
storageFormat: |
  {
    locale: <String>,
    label: <String>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-media-language'
---
