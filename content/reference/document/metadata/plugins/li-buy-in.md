---
title: li-buy-in
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Allows users to ask for buy-in when writing an article or pitching an idea. Other users can provide feedback.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: true
  systemMetadata: true
  planningSystem: true
addedIn: release-2023-03
description: |
  As part of the Planning System, users want to ask for buy-in when writing an article or pitching an idea.
  Other users can express their backing by accepting a buy-in request.
  The presence, absence or status of a buy-in request has no effect on permissions and is just a communication tool.

  * A buy-in request is closed after it was accepted or declined by one other person
  * Users cannot respond to their own buy-in requests
  * All other users with read and write permissions to the document can respond to a buy-in request
  * Buy-in requests can be answered by returning them to the creator, e.g. to clarify questions before accepting the request
  * Closed buy-in requests can be reopened an unlimited number of times
  * Buy-in requests can be answered directly from a Table Dashboard
  * Expired buy-in requests remain in their state, but may disappear from Table Dashboards (depends on config)
  * All own actions can be undone if no other action has occurred afterwards
  * All own comments can be edited, but will be marked as such
defaultUI: |
  The li-buy-in plugin in initial status:

  {{< img src="../images/li-buy-in-initial.png" alt="A screenshot of the li-buy-in plugin showing an empty state message, a comment field and a button to ask for buy-in." >}}

  The li-buy-in plugin in closed status:

  {{< img src="../images/li-buy-in-closed.png" alt="A screenshot of the li-buy-in plugin showing the buy-in as accepted along with a comment and a button to reopen the request." >}}

  The li-buy-in plugin as a Table Dashboard cell in requested status:

  {{< img src="../images/li-buy-in-dashboard.png" alt="A screenshot of a Table Dashboard where users can see the buy-in request details and can directly respond." >}}
storageFormat: |
  {
    workflow: {
      status: <String>, // 'initial' | 'requested' | 'returned' | 'closed' | 'reopened'
      userId: <Integer>,
      expiryDate: <ISO8601 String>, // only set once requested
      timeline: [{
        eventType: <String>, // 'BuyInRequest' | 'BuyInReRequest' | 'BuyInAcceptance' | 'BuyInDeclining' | 'BuyInReturn' | 'BuyInReopen'
        userId: <Integer>,
        createdAt: <ISO8601 String>,
        updatedAt: <ISO8601 String>, // only set when edited
        comment: <String> // optional
      }]
    }
  }
contentTypeConfig: |2
        // Plugin needs to be configured with same handle on all relevant content types,
        // otherwise data is lost when transforming content type, e.g. from pitch to article.
        handle: 'myHandle',
        type: 'li-buy-in',
        ui: {
          label: 'Buy-In'
        },
        config: {
          defaultExpiryDays: 5, // The default number of days before the request expires (editable in UI)
          index: true // Required for filters on Table Dashboard
        }
tableDashboardConfig: |2
    baseFilters: [
      {type: 'buyInNotExpired', key: 'buyIn'}, // Only showing documents with non-expired buy-in requests
      {type: 'metadata', key: 'buyIn.workflow.status', value: 'requested'} // Additional status filter
    ],
    columns: [
      {
        label: 'Buy-In',
        minWidth: 400, // Recommended min. width
        growFactor: 0,
        priority: 1,
        metadataPropertyName: 'buyIn',
        editable: true
      }
      // ...
    ]
---
