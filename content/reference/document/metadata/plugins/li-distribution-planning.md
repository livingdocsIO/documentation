---
title: li-distribution-planning
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Enables the Distribution Planning panel, and allows documents to be assiged to a distribution schedule.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: true
  systemMetadata: true
  planningSystem: true
description: Enables the Distribution Planning panel, and allows documents to be assiged to a distribution schedule.
defaultUI: Distribution Planning panel
storageFormat: |
  {
    distributions: [
      {
        id: <String>,
        distributionChannelName: <String>,
        positionName: <String>,
        date: <ISO8601 String>,
        precision: <String>, // 'date' | 'datetime'
        comment: <String>
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-distribution-planning',
        config: {
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        }
---
