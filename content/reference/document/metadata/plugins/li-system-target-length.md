---
title: li-system-target-length
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Provide a suggested total character count for the text in the document.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: false
description: |
  This plugin is used to provide a suggested total character count for the text in the document.
defaultUI: |
  **Input**: Number input, or slider if `steps` are defined.

  **Editor**: Difference, Total Characters, Target Range, Characters in Focussed Component

  {{< img src="../images/li-target-length.png" alt="Target Length Indicator" >}}
storageFormat: |
  {
    characters: <Integer>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-system-target-length',
        ui: {
          config: {
            acceptedCharacterDifference: 20, // Range above and below `value` considered accepted
            // optional, allows picking a step instead of entering an exact number
            steps: [
              {
                label: 'S', // use a short one, e.g. "S" "M" "L"
                value: 100 // number of characters
              },
              {
                label: 'M',
                value: 200
              }
            ],
            // optional, allows the input of an exact number besides picking a step
            allowAnyNumber: true
          }
        }
---
