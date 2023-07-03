---
title: li-print
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
support:
  document: true
  media: false
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: false
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
