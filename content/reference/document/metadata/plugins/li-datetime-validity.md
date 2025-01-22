---
title: li-datetime-validity
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Set validity between a start and an end date/time.
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
description: |
  This plugin allows 'from' and 'to' dates to be defined for a media library entry's validity. An image may have a limited validity, for example due to copyright, so can be used only for a certain period of time. After that period, the copyright expires and the image should be removed from the website.

  Behind the scenes, since {{< release "release-2024-03" >}}, a job scheduler runs. If a state change is detected then a webhooks event for `mediaLibraryEntry.active` or `mediaLibraryEntry.invalid` will be emitted. Please see the [Webhooks]({{< ref "/reference/webhooks" >}}) documentation for further details on how to configure them.

  If a manual process is used to manage validity, or if you need a way to override the schedule, then [li-invalid]({{< ref "/reference/document/metadata/plugins/li-invalid" >}}) can be used.
defaultUI: |
  Two datetime inputs

  {{< img src="../images/li-datetime-validity-ui.png" alt="li-datetime-validity UI" >}}
storageFormat: |
  {
    from: ISO8601 String,
    to: ISO8601 String
  }
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-datetime',
        config: {
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        }
---
