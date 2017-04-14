# Search Filters

The editor core API exposes functions to customize the search filters on the dashboard.

![Search filters](search-filters.png)


## Available config options

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
```js
filters: {
  articleList: {
    displayFilters: ['channels', 'layouts', 'timeRange'],
    defaultQueries: [{type: 'documentType', value: 'article'},
      {type: 'sortBy', value: '-updated_at'}]
  },
  inlineArticleList: {
    displayFilters: [],
    defaultQueries: [{type: 'documentType', value: 'article'},
      {type: 'sortBy', value: '-updated_at'}]
  },
  pageList: {
    displayFilters: [],
    defaultQueries: [{type: 'documentType', value: 'page'},
      {type: 'sortBy', value: '-updated_at'}]
  },
  documentListList: {
    displayFilters: ['timeRange'],
    defaultQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'documentState', value: 'published'},
      {type: 'sortBy', value: '-updated_at'}
    ]
  }
}
```


## Registering Custom Filters

#### Example: Register list

`searchFilters.registerList` registers a filter based on a config object to create an Angular directive for the search UI.
Display is controlled with the `filters` key in the configuration.

There are two flavors to this function

```js
liEditor.searchFilters.registerList 'creation-date', ['session', (session) ->
  const channels = _map(session.project.channels, (channel) => {
    return {
      id: channel.id,
      label: channel.label,
      // type and value are used in the query builder
      type: 'channelId',
      value: channel.id
    }
  })

  return {
    title: 'Filter by channels',
    options: channels
  }
]

liEditor.searchFilters.registerList('creationDate', {
  title: 'Filter by creation date'
  options: [
    id: '2015',
    label: 'Created in 2015',
    type: 'dateRange',
    key: 'created_at',
    from: new Date('2015-01-01'),
    to: new Date('2016-01-01')
  ,
    id: '2016',
    label: 'Created in 2016',
    type: 'dateRange',
    key: 'created_at',
    from: new Date('2016-01-01'),
    to: new Date('2017-01-01')
  ]
})
```

#### Example: Register angular directive

`searchFilters.register` registers an Angular directive as filter for the search UI.
Display is controlled with the `filters` key in the configuration.

```js
liEditor.searchFilters.register 'project', ['session', (session) => {
    return {
      scope: {value: '='},
      template: `
        <div
          ng-class="{'filter-active': isActive}"
          ng-click="toggleProjectFilter()">
            Show print documents
        </div>
      `,
      link: (scope) => {
        channel = _find(session.project.channels, {name: 'print'})
        scope.isActive = scope.value.get().value
        scope.toggleProjectFilter: () => {
          scope.isActive = !scope.isActive
          if (scope.isActive) {
            scope.value.set({type: 'channelId', value: !scope.isActive})
          } else {
            scope.value.set()
          }
        }
      }
    }
  }
])
```
