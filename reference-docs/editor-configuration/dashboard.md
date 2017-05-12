# Dashboard Customization

```coffee
search:
  articleSearch:
    listItemComponent: 'li-dashboard-list-item'
```

Expose metadata for use in the custom list view:
```coffee
search:
  documentsMetadataFields: [
    'title',
    'tasks.*',
    'pushNotifications.*'
  ]
```
