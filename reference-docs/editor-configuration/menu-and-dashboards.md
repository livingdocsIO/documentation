# Main Navigation

This documentation describes the configuration possibilities of the main navigation within the editor (instance-wide). The basic configuration of the main navigation has to be set in the [project config](../project-config/editor_settings.md).

## Triggering the Main Navigation
You can define the way the main navigation will be triggered. It can be triggered by `clicking`, `hovering` or both. The default way of opening the navigation menu is by `clicking`.

#### Config options

```js
// editor config
app: {
  sidePanelBehaviour: {
    // you can also enable both.
    click: true,
    hover: false
  }
}
```

#### Example opening the main-nav by clicking

![Open Livingdocs navigation by clicking](images/open-by-click.gif)

## Menu items
You can also customize the entries you want to have in the main navigation (the burger icon in the top left of the screen as seen in the previous gif).

It's possible to configure the menu items in the editor (instance-wide), but we suggest to configure the items via [project config](../project-config/editor_settings.md)(project-wide).

Default Configuration:
```js
app: {
  sidePanelItems: [{
    {liItem: 'articles'},
    {liItem: 'pages'},
    {liItem: 'dataRecords'},
    {liItem: 'mediaLibrary'},
    {liItem: 'lists'},
    {liItem: 'menus'},
    {liItem: 'contentSetup'},
    {liItem: 'projectSettings'},
    {liItem: 'serverAdmin'}
  }]
}
```

Add a custom dashboard entry:
```js
app: {
  sidePanelItems: [
  // other entries...
  {
    label: 'Proofreading',
    // 'kanban-proofreading' is the dashboard config handle we will define in the next step
    dashboard: 'kanban-proofreading',
    icon: 'file-document'
  }]
}
```

Extend a `liItem` entry:
```js
app: {
  sidePanelItems: [
  // other entries...
  {
    liItem: 'articles',
    label: 'My articles',
    icon: 'file-document'
  }]
}
```

Fully custom entry:
```js
app: {
  sidePanelItems: [{
  // other entries...
  {
    label: 'Articles',
    sref: 'app.editor.articles',
    icon: 'file-document',
    scope: 'readArticles',
    group: 'dashboards' // one of 'dashboards', 'preferences', 'admin'
  }]
}
```


To hide an entry, simply delete it from the list.
You can also customize the scopes that you assign to a menu item to control access rights. See [all available scopes](../../guides/access_rights.md#available-scopes).
You can also customize the icons. We use https://materialdesignicons.com/ just use the respective icon string.

To link to an external page add an entry as follows:
```js
{
  label: 'Your page',
  href: 'https://www.livingdocs.io',
  icon: 'settings'
}
```

Note that you use `href` instead of `sref` for external links.


# Custom Card for Default Dashboard

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

Note that the custom component can only use document metadata that has been explicitly [whitelisted](../server-configuration/config.md#search).
