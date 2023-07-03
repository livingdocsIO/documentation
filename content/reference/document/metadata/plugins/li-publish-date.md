---
title: li-publish-date
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: Holds the first publication date, which is user editable.
support:
  document: true
  media: false
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  Holds the first publication date, which is user editable.

  For greater flexibility use [Publish Control]({{< ref "/guides/editor/publish-control">}}) instead.
defaultUI: Datetime input
storageFormat: <ISO8601 String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-publish-date'
---
