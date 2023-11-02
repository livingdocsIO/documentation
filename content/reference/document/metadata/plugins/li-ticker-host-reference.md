---
title: li-ticker-host-reference
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A reference to the host document of a ticker entry.
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
description: |
  A reference to the host document of a ticker entry.
defaultUI: Not rendered
storageFormat: |
  {
    $ref: 'document',
    reference: {
      id: <String>
    }
  }
contentTypeConfig: |2
        handle: 'tickerHost'
        type: 'li-ticker-host-reference',
        config: {
          index: true
        }
---
