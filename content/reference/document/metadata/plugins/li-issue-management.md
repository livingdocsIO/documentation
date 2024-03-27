---
title: li-issue-management
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A list of linked documents with actions to manage references.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  The `li-issue-management` metadata plugin can be used to manage issues (a data-record with references to pages).

  For it to work properly you will also need to define a [`finiteProducts`](../../../project-config/finite-products.md) config in the projectConfiguration.

  {{< img src="../images/li-issue-management-overview.png" alt="Issue management overview" >}}

  Note: The status of pages and articles does not update automatically. Please refresh the page to get an up-to-date overview.

  Issue management plugin:

  * Page status, article count and status
  * Create and add new pages
  * Open pages
  * View and open page articles
  * Remove pages (this will not delete the page, only remove the reference from this issue)
  * Disable / enable a page reference for this issue
  * Change order of pages

  Issue navigation:

  * Navigate between the issue and its pages
  * Summary status of page and its articles

  {{< img src="../images/li-issue-management-page-view.png" alt="Issue management page view" >}}

  The issue navigation is also visible when navigating to a page that belongs to an issue.

  The issue navigation can only show one issue at a time. If a page is connected to two issues then only the first issue will be shown in the issue navigation.

  When a contentType (in this example a "page") is a member of an issue, then then all the "Un-/Publish" buttons in the publish control will be named "Release/Withdraw". See Project Config below.

  {{< img src="../images/li-issue-management-view-articles.png" alt="Issue management view articles" >}}

  See and open articles of the selected page.

  {{< img src="../images/li-issue-management-remove.png" alt="Issue management remove page" >}}

  Removing a page reference has to be confirmed in a second step, to prevent accidental removal.
defaultUI: List of linked documents with actions to manage references
storageFormat: |
  {
    $ref: 'documents',
    references: [
      {
        id: <String>,
        inactive: <Boolean>
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-issue-management',
        config: {
          index: true // Needed to find a parent issue of a page. If a parent issue is found for a page, then the page will be shown with an issue navigation on top.
        },
        ui: {
          label: 'Local',
          config: {
            documentCreationFlows: [{
              useDocumentCreationFlow: 'digitaleAusgabePage' // document creation flow function to call, when the "add page" button is clicked - see https://docs.livingdocs.io/guides/editor/document-creation-flow/#goal
            }]
          }
        }
      },
      // Each `li-issue-management` metadata plugin presents an issue-group inside an issue.
      {
        handle: 'sport',
        type: 'li-issue-management',
        // ...
---
