---
title: li-document-search
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Dynamic teaser lists based on configurable conditions.
support:
  include: true
description: |
  The `li-document-search` plugin simplifies the management and rendering of article teaser lists within pages based on configurable conditions, providing an efficient solution for semi-automatic page management. This approach reduces the need for custom code compared to other solutions within Livingdocs. Additionally, it supports deduplication across all components in a page, ensuring each teaser is displayed at most once.
storageFormat: |
  {
    baseFilters: <Array>,
    displayFilterStates: <Array>,
    sort: <String>,
    limit: <Integer>
  }
includeConfig: |2
        handle: 'myHandle',
        type: 'li-document-search',
        config: {
          contentTypes: [],          // optional, shorthand for contentType base filter
          baseFilters: [],           // optional
          displayFilters: [],        // optional
          sort: '',                  // optional
          showLimit: true,           // optional, show limit input in UI
          defaultLimit: 3,           // required, default number of included documents
          minLimit: 1,               // optional if showLimit=true, minimum configurable limit in UI
          maxLimit: 5                // required if showLimit=true, maximum configurable limit in UI
        }
---

`li-document-search` supports filtering articles with [base filters]({{< ref "/customising/advanced/editor-configuration/base-filter" >}}) and [display filters]({{< ref "/customising/advanced/editor-configuration/display-filter" >}}). Base filters are always applied and cannot be modified by editors, whereas display filters are rendered in the interface and adjustable by editors. Additionally, sorting order and a limit can be defined, with the latter also being adjustable by editors.

The specified conditions are evaluated on request. Therefore, Dynamic Teaser Lists may contain other teasers over time as new articles match the conditions, without requiring editors to republish the page. Thus, it is recommended to configure your delivery to repeatedly invalidate the cache for such pages and refetch them occasionally from the Composition API to obtain the latest state.

## User Interface

Editors can adjust display filters in the user interface to control which articles should be included. If enabled, they can also adjust the number of included articles.

![li-document-search UI](/reference/document/metadata/li-document-search-example.png)

{{< info >}}
When utilizing custom display filters, it is crucial to conduct thorough testing. Specifically, your display filter must be capable of restoring its state solely from the `filter`, `sort` and `context` attributes. All other attributes are not persisted. For more details, refer to our guide on how to write [custom display filters]({{< ref "/guides/editor/custom-dashboard-filters#custom-vue-component-filter" >}}).
{{</ info >}}