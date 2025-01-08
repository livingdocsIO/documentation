---
title: li-video-reference
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A reference to a video (and a poster image).
support:
  document: true
  media: true
  include: true
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
description: A `li-video-reference` metadata field shows a list of video references where one entry can be selected. Optionally a customer poster image can be defined. `li-video-reference` is only supported property in includes.
defaultUI: |
  Video & Poster Image Upload/Media Library Selection

  ![image](../images/li-video-reference-ui.png)
storageFormat: |
  {
    $ref: 'video',
    reference: {
      id: <String>,
      posterImageId: <String>
    }
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-video-reference',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                             // optional, default: false. {{< added-in "release-2023-07" >}}
          // specific
          translatable: true,                      // optional, default: false, translations are only supported for data-record and mediaLibrary
        },
        ui: {
          config: {
            posterImageUploadMediaType: 'image2',  // optional, default: 'image'
          }
        }
---
