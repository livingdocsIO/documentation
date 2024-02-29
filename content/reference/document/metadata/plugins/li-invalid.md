---
title: li-invalid
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A simple Boolean value store used to indicate when a media library entry is no longer valid.
support:
  document: false
  media: true
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: false
addedIn: release-2024-03
description: |
  A simple Boolean value store, represented in the UI with a checkbox which you can toggle on/off.

  When the value is `true` an overlay will be displayed on the image or video to indicate the state. This plugin can be used to indicate that the media library entry is no longer valid due to licensing reasons. The li-invalid plugin state has priority over [li-datetime-validity]({{< ref "/reference/document/metadata/plugins/li-datetime-validity" >}}).

  When toggling the value a webhooks event for `mediaLibraryEntry.active` or `mediaLibraryEntry.invalid` will be emitted. Please see the [Webhooks]({{< ref "/reference/webhooks" >}}) documentation for further details on how to configure them.
defaultUI: Checkbox
storageFormat: <Boolean>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-boolean',
        ui: {
          label: 'foo', // optional, default: start case of handle
        }
---
