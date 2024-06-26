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
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  When adding `li-metadata-translations`, it allows a user to translate metadata into different languages. Metadata translations are supported for the Media Library and Data Records.
  - Guide: [Metadata Translations for Data Records]({{< ref "/guides/editor/metadata-translations" >}})
  - Guide: [Metadata Translations for Media Library]({{< ref "/guides/media-library/media-library-setup" >}})
defaultUI: |
  Built-in language selection UI

  ![image](https://user-images.githubusercontent.com/172394/157072134-5d2be902-3416-4ab3-8047-eb74760b6b5a.png)
storageFormat: |
  {
    locale: <String>,
    label: <String>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-metadata-translations',
        config: {
          index: true                      // optional, default: false. {{< added-in "release-2023-07" >}}
        }
---
