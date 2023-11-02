---
title: li-named-crops
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Define Named Crops on a Media Library Image.
support:
  document: false
  media: true
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: false
  planningSystem: false
description: Define Named Crops on a Media Library Image.
defaultUI: Crop management
storageFormat: |
  {
    crops: [
      {
        name: <String>,
        x: <Integer>,
        y: <Integer>,
        width: <Integer>,
        height: <Integer>,
        isAutomatic: <Boolean>
      }
    ],
    focalPoint: {
      x: <Integer>,
      y: <Integer>
    }
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-named-crops'
---
