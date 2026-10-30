---
title: li-image
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
support:
  document: true
  media: true
  include: false
  creationFlow: false
  pushMessage: false
  usageLog: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: false
  planningSystem: false
  webhookConditions: false
defaultUI: UI to select, upload, delete, and crop an image
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
      <Object>
    ],
    focalPoint: {
      x: <Integer>,
      y: <Integer>
    }
  }
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-image',
        ui: {
          config: {
            uploadMediaType: 'image',  // optional
            useDashboard: 'images',    // optional, default: editor.images.useDashboard of the content type
            readOnly: false            // optional, default: false
          }
        }
---
