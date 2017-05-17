# Dashboard Customization

```js
search: {
  articleSearch: {
    listItemComponent: 'li-dashboard-list-item'
  }
}
```

Expose metadata for use in the custom list view:
```js
search: {
  documentsMetadataFields: [
    'title',
    'tasks.*',
    'pushNotifications.*'
  ]
}
```
