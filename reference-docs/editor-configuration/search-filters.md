# Search Filters

Available config options:

- `articleList`

  This configures the dashboard that users see after logging in.

- `inlineArticleList`

  This configures inline article search like the one used in the List screen.

- `pageList`

  This configures the pages screen.

- `documentListList`

  This configures the List screen.

Properties:

- displayFilters

  The filters that are shown to the user.

- defaultQueries

  This setting determines the default filter. This filter is discarded as
  soon as a user manually selects a filter and reapplied when all manually
  chosen filters are deselected.


Example:
```coffee
filters:
  articleList:
    displayFilters: ['channels', 'layouts', 'timeRange']
    defaultQueries: [{type: 'documentType', value: 'article'},
      {type: 'sortBy', value: '-updated_at'}]
  inlineArticleList:
    displayFilters: []
    defaultQueries: [{type: 'documentType', value: 'article'},
      {type: 'sortBy', value: '-updated_at'}]
  pageList:
    displayFilters: []
    defaultQueries: [{type: 'documentType', value: 'page'},
      {type: 'sortBy', value: '-updated_at'}]
  documentListList:
    displayFilters: ['timeRange']
    defaultQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'documentState', value: 'published'},
      {type: 'sortBy', value: '-updated_at'}
```


## Registering Custom Filters

tbd
