---
title: Filter for Dashboards
description:
weight: 3
menus:
  customising:
    parent: Angular Migration
    weight: 3
---

If you still have Dashboard Filter configs listed below in your Editor Config under `app.filters.*`, you should migrate that filters as soon as possible.

## Migrate `articleList` | `pageList` | `dataRecordList`

### Old

- `app.filters.articleList` -> Filter for Article Dashboard
- `app.filters.pageList` -> Filter for Pages Dashboard
- `app.filters.dataRecordList` -> Filter for Data Record Dashboard

### New - Switch to [Table Dashboards]({{< ref "/reference/project-config/editor-settings#example-table-dashboard">}}):

- Remove `{liItem: 'articles'}`, `{liItem: 'pages'}`, `{liItem: 'data-record'}` in `editorSettings.mainNavigation`
- Set up your [Table Dashboards]({{< ref "/reference/project-config/editor-settings#example-table-dashboard">}})
- Move the Dashboard Filters to your Table Dashboard Config

## Migrate `inlineArticleList`

Migrate from Editor Config `app.filters.inlineArticleList` to Project Config [inlineLinks]({{< ref "/reference/project-config/editor-settings#inline-links">}})

## Migrate `documentListList`

Migrate from Editor Config `app.filters.documentListList` to Project Config [documentLists]({{< ref "/reference/project-config/editor-settings#document-lists">}})
