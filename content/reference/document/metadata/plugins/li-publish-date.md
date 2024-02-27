---
title: li-publish-date
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Holds the first publication date, which is user editable.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: true
description: |
  Holds the first publication date, which is user editable.

  For greater flexibility use [Publish Control]({{< ref "/guides/editor/publish-control">}}) instead.
defaultUI: Datetime input
storageFormat: <ISO8601 String>
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-publish-date',
        config: {
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        },
---
