---
title: li-language
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Allows a user to translate articles and pages into different languages.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  When adding `li-language`, it allows a user to translate articles and pages into different languages. Additionally you need to enable [translationWorkflow and requiredOnCreation]({{< ref "/reference/project-config/settings" >}}).

  Data Records also support translations, but need to add the metadata plugin [li-metadata-translations]({{< ref "/reference/document/metadata/plugins/li-metadata-translations" >}}).
defaultUI: None
storageFormat: |
  {
    locale: <String>,
    label: <String>, // deprecated, will be removed in release-2024-01
    groupId: <String>
  }
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-language',
        config: {
          index: true         // optional, default: false. {{< added-in "release-2023-07" >}}
        }
---
