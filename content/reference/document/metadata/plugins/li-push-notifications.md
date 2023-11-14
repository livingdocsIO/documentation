---
title: li-push-notifications
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Legacy feature to send push messages. Use [`li-push-messages`]({{< ref "/reference/document/metadata/plugins/li-push-messages" >}}) instead.
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
  {{< warning >}}
  Support for `li-push-notifications` will soon be removed. Please use [`li-push-messages`]({{< ref "/reference/document/metadata/plugins/li-push-messages" >}}) instead.
  {{< /warning >}}
defaultUI: Editor toolbar button which opens a dialog.
storageFormat: |
  {
    messageCount: <Integer>,
    messages: [
      {
        message: <String>,
        sentAt: <ISO8601 String>,
        topics: [
          {
            label: <String>,
            value: <String>
          }
        ]
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-push-notifications'
---
