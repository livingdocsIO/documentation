---
title: li-document-soft-lock
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: Enables a user to temporarily lock a document while editing. 
support:
  document: true
  media: false
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: false
  systemMetadata: true
  planningSystem: false
description: Enables a user to temporarily lock a document while editing. 
defaultUI: None
storageFormat: |
  {
    userId: <Integer>,
    userName: <String>,
    locktime: <ISO8601 String>,
    tabId: <String>
  }
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-document-soft-lock'
---
