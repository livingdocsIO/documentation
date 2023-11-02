---
title: li-print
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: false
  planningSystem: false
storageFormat: |
  {
    name: <String>,
    status: <String>,
    publicationDate: <String>,
    publication: {
      id: <String>,
      name: <String>
    },
    department: {
      id: <String>,
      name: <String>
    },
    template: {
      id: <String>,
      name: <String>
    },
    layout: {
      id: <String>,
      name: <String>
    }
  }
contentTypeConfig: |2
        handle: 'print' // Must use print as the handle
        type: 'li-print'
---
