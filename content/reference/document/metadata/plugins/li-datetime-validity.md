---
title: li-datetime-validity
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Set validity between a start and an end date/time.
support:
  document: false
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
  This plugin should be used only in the Media Library.

  The intended use case is the following:\
  An image has a limited validity, for example due to copyright, so can be used only for a certain period of time. After that period, the copyright expires and the image should be removed from the website.
defaultUI: |
  Two datetime inputs

  {{< img src="../images/li-datetime-validity-ui.png" alt="li-datetime-validity UI" >}}
storageFormat: |
  {
    from: ISO8601 String,
    to: ISO8601 String
  }
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-datetime',
        config: {
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        }
---
