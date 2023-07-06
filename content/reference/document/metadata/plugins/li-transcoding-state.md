---
title: li-transcoding-state
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: State of external transcoding job.
support:
  document: false
  media: true
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
defaultUI: UI to trigger transcodings, see progress and the end result.
storageFormat: |
  {
    commands: [
      {
        assetKey: <String>,
        commandId: <String>,
        createdAt: <String>,
        state: <String>,
        errorMessage: <String>,
        progress: <Number>
      }
    ],
    transcodings: [
      {
        assetKey: <String>
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-transcoding-state',
        config: {
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        }
        ui: {
          label: 'My Transcoding'     // optional, takes "Transcoding State" otherwise
        }
---
