---
title: li-media-language
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: |
  {{< deprecated-in release-2022-05 >}}. Use [`li-metadata-translations`]({{< ref "/reference/document/metadata/plugins/li-metadata-translations" >}}) instead.
support:
  document: false
  media: true
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: false
  systemMetadata: false
  planningSystem: false
deprecatedIn: release-2022-05
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
