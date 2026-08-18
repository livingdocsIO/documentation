---
title: li-metadata-translations
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Allows a user to translate media library and data-record metadata into different languages.
support:
  document: true
  media: true
  include: false
  creationFlow: false
  pushMessage: false
  usageLog: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: false
description: |
  When adding `li-metadata-translations`, it allows a user to translate metadata into different languages. Metadata translations are supported for the Media Library and Data Records.
  - Guide: [Metadata Translations for Data Records]({{< ref "/guides/editor/metadata-translations" >}})
  - Guide: [Metadata Translations for Media Library]({{< ref "/guides/media-library/media-library-setup" >}})
defaultUI: |
  Built-in language selection UI

  {{< img src="images/li-metadata-translations-ui.png" alt="A Title field on the EN language tab reading Title EN, with the German value shown beneath it for comparison" >}}
storageFormat: |
  {
    locale: <String>,
    label: <String>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-metadata-translations',
        config: {
          index: true                      // optional, default: false
        }
---
