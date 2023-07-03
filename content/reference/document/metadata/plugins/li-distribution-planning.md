---
title: li-distribution-planning
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: Enables the Distribution Planning panel, and allows documents to be assiged to a distribution schedule.
support:
  document: true
  media: false
  tableDashboard: true
  include: false
  displayFilter: false
  dynamicIndexing: true
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
        handle: 'myHandle'
        type: 'li-distribution-planning'
---
