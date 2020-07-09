# Editor Settings

The editor settings are sent to the editor and control the behavior of your editor, in particular:
- user menu
- main navigation
- dashboards

An example:
```js
{
  userMenu: [
    {
      label: 'What is new',
      data: {
        lastUpdate: '2020-06-16T13:19:38.560Z'
      },
      // alternative to href = route {name: 'app.state'}
      href: 'https://github.com/livingdocsIO/livingdocs-release-notes',
      icon: 'plus',
      id: 'release_notes'
    }
  ],
  mainNavigation: [
    {liItem: 'articles'},
    {liItem: 'pages'},
    {liItem: 'dataRecords'},
    {liItem: 'mediaLibrary'},
    {liItem: 'lists'},
    {liItem: 'menus'},
    {liItem: 'contentSetup'},
    {liItem: 'projectSettings'},
    {liItem: 'serverAdmin'}
  ],
  mediaLibrary: {
    enabled: true
    dashboard: {
      displayFilters: ['timeRange']
    },
    editorSelection: {
      displayFilters: ['timeRange']
    }
  }
}
```

## User Menu
...TODO...

## Main Navigation
...TODO...

## Media Library

After linking the media library on the `mainNavigation` (see above), one can also define `displayFilters` to customise the media library dashboard.
