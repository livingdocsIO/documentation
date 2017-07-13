# Search filters

The editor core API exposes functions to customize the search filters on the dashboard
 
![Search filters](search-filters.png) 

## Register list

`searchFilters.registerList` registers a filter based on a config object to create an Angular directive for the search UI.
Display is controlled with the `filters` key in the configuration.

There are two flavors to this function

```
liEditor.searchFilters.registerList 'creation-date', ['session', (session) ->
  channels = _map session.project.channels, (c) ->
    return {
      id: c.id
      label: c.label
      # type and value are used in the query builder
      type: 'channelId'
      value: c.id
    }
  
  return {
    title: 'Filter by channels'
    options: channels
  }
]

liEditor.searchFilters.registerList 'creationDate',
  title: 'Filter by creation date'
  options: [
    id: '2015'
    label: 'Created in 2015'
    type: 'dateRange'
    key: 'created_at'
    from: new Date('2015-01-01')
    to: new Date('2016-01-01')
  ,
    id: '2016'
    label: 'Created in 2016'
    type: 'dateRange'
    key: 'created_at'
    from: new Date('2016-01-01')
    to: new Date('2017-01-01')
  ]
```

## Register angular directive

`searchFilters.register` registers an Angular directive as filter for the search UI.
Display is controlled with the `filters` key in the configuration.

```
liEditor.searchFilters.register 'project', ['session', (session) ->
return {
  scope: value: '='
  template: """
    <div
      ng-class="{'filter-active': isActive}"
      ng-click="toggleProjectFilter()">
        Show print documents
    </div>
  """
  link: (scope) ->
    channel = _find(session.project.channels, name: 'print')
    scope.isActive = scope.value.get().value
    scope.toggleProjectFilter: ->
      scope.isActive = !scope.isActive
      if scope.isActive
        scope.value.set({type: 'channelId', value: !scope.isActive})
      else
        scope.value.set()
}  ])
```
  

