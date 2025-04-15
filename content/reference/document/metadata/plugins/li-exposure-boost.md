---
title: li-exposure-boost
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A system metadata plugin to temporarily increase a documents relevance within an li-teaser algorithm.
addedIn: release-2025-05
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: false
description: |
  When using algorithmic teasers, the order of the documents is determined by a sort criteria. Oftentimes, this is the latest publication date.
  By activating the exposure boost for a document, it will appear before all non-boosted documents returned by an algorithm.
  This is useful, in scenarios where algorithms receive high frequency updates and important topics would get pushed down quickly.
  The effect will go away automatically after a certain time and unlike manually overruling the teaser with a direct reference, it will still respect the algorithms filtering and deduplication rules.
  
  The teaser algorithm config needs to have the option `allowExposureBoost` to support the behavior in general.
  Additionally, for each teaser the behavior needs to be activated in the UI.
  
  #### Durations
  
  Long: 15h
  
  Medium: 8h
  
  Short: 3h
  
  A document with a more recent boost wins over documents with less recent boosts, regardless of the boost duration.
  
  #### Example
  
  - **08:00:** Publish document A) -> [A]
  - **10:00:** Publish document B) -> [B, A]
  - **12:00:** Boost A) for 8h -> [A, B]
  - **14:00:** Boost B) for 3h -> [B, A]
  - **17:00:** Boost B) expired -> [A, B]
  - **20:00:** Boost A) expired -> [B, A]

defaultUI: |
  Metadata form
  {{< img src="../images/li-exposure-boost-metadata-form.png" alt="Exposure boost in metadata form" >}}
  
  Table Dashboard Cell
  {{< img src="../images/li-exposure-boost-table-dashboard.png" alt="Exposure boost in Table Dashboard" >}}
  
  Teaser algorithm settings 
  {{< img src="../images/li-exposure-boost-algorithm-switch.png" alt="Exposure boost switch in teaser algorithm settings" >}}
storageFormat: |
  {
    start: <ISO8601 String>,
    end: <ISO8601 String>,
    duration: <String>
  }
contentTypeConfig: |2
        handle: 'exposureBoost',
        type: 'li-exposure-boost',
        config: {
          index: true
        }
tableDashboardConfig: |2
    columns: [
      // ...
      {
        label: 'Boost',
        minWidth: 100,
        growFactor: 0,
        priority: 1,
        metadataPropertyName: 'exposureBoost',
        editable: true
      }
    ]
additionalConfig: |
  ### Configuration consistency

  The `li-exposure-boost` metadata plugin needs to be registered under the same handle on all content types that are applicable.
  Furthermore, indexing needs to be enabled.

  ### Teaser algorithm configuration
  
  ```js
  algorithm: {
    // ...
    allowExposureBoost: true
  }
  ```
---
