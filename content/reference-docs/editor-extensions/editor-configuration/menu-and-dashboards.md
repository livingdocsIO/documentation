---
title: Main Navigation
menus:
  reference-docs:
    parent: Editor Config
---

This documentation describes the configuration possibilities of the main navigation within the editor (instance-wide). The basic configuration of the main navigation has to be set in the [project config]({{< ref "/reference-docs/project-config/editor-settings" >}}).

## Custom Card for Default Dashboard

Currently we have 3 types of default dashboards: `articles`, `pages`, `dataRecords`

It's possible to customise the default card (one entry in the list). This is useful when you want to show additional data on the dashboard such as the open tasks on an article.

```js
// editor config
search: {
  articleSearch: {
    listItemComponent: 'custom-dashboard-list-item'
  }
}
```

Note that the custom component can only use document metadata that has been explicitly [whitelisted]({{< ref "/reference-docs/server-extensions/server-configuration#search" >}}).
