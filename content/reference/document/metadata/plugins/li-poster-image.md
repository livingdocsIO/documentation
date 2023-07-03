---
title: li-poster-image
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: Set a poster image for a video.
support:
  document: false
  media: true
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: false
  systemMetadata: false
  planningSystem: false
description: Set a poster image for a video.
defaultUI: Poster Image selection, has some special UI within Video Media Library Entries
storageFormat: |
  {
    originalUrl: <String>,
    url: <String>,
    mediaId: <String>,
    height: <Integer>,
    width: <Integer>,
    mimeType: <String>,
    imageService: <String>,
    crops: [
      {
        name: <String>,
        x: <Integer>,
        y: <Integer>,
        width: <Integer>,
        height: <Integer>,
        isAutomatic: <Boolean>
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-poster-image'
---
