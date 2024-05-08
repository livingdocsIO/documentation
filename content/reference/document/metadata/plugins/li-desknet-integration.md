---
title: li-desknet-integration
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Legacy plugin to connect Desk-Net stories with Livingdocs documents using a publication platform.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  This plugin is used to connect Desk-Net stories with Livingdocs documents. There are numerous options available to synchronise data between the two platforms. Further details can be found in the [Desk-Net Platform Integration Guide]({{< ref "/guides/integrations/desknet-legacy" >}}).
defaultUI: |
  **Document Metadata**: Read-only link to Desk-Net distribution entry\
  **Table Dashboard**: Read-only Desk-Net publication/platform status
storageFormat: |
  {
    id: <Integer>,
    publicationId: <Integer>,
    platformId: <Integer>,
    categoryId: <Integer>,
    publicationStatusId: <Integer>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-desknet-integration',
        config: {
          publicationStatus: {
            fallbackPublicationStatusId: '2',
            // The order of matchers is important. The array is iterated through from first to last,
            // with the publicationStatusId taken from the earliest document state match.
            matchers: [
              {
                type: 'publication',
                value: 'published', // Only 'published' supported
                publicationStatusId: '5'
              },
              {
                type: 'task',
                taskName: 'proofreading',
                value: 'completed', // 'requested', 'accepted', 'completed'
                publicationStatusId: '4'
              },
              {
                type: 'metadata',
                propertyName: 'prepared',
                value: true, // <String>, <Number>, <Boolean>, <Array>, <Object>
                publicationStatusId: '3'
              }
            ]
          }
        },
        ui: {
          label: 'Desk-Net',
          config: {
            publicationStatus: {
              labels: [
                {
                  publicationStatusId: '5',
                  label: 'Published',
                  // optional, any SVG (ideally using viewBox)
                  icon: '<svg viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h9v9H0z"/></svg>',
                  // optional, any CSS colour string
                  color: '#f00'
                }
              ]
            }
          }
        }
---
