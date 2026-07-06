---
title: li-license-profile
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
addedIn: release-2026-07
description: |
  Assigns a [License Profile]({{< ref "/guides/media-library/license-profiles" >}}) to a media library entry. The profile defines in which usage purposes the entry may be published and whether a use is billed.
support:
  document: false
  media: true
  include: false
  creationFlow: false
  pushMessage: false
  usageLog: false
  tableDashboard: false
  displayFilter: true
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: false
defaultUI: License profile select with color indicator and the profile's rules per usage purpose
storageFormat: |
  {
    handle: <String>
  }
contentTypeConfig: |2
        handle: 'licenseProfile',
        type: 'li-license-profile',
        config: {
          index: true // required for the liLicenseProfile and liLicensePurpose display filters
        },
        ui: {
          label: 'License Profile' // optional, takes camelized name otherwise
        }
---
