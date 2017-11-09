# Configuration of editing features

All of the following options concern the editor environment configuration files, so for example `config/environments/all.js` in the [boilerplate editor](https://github.com/upfrontIO/livingdocs-editor-boilerplate).

## Toolbar

Some of the editing features visible in the top toolbar when
you are editing a document can be configured.

E.g config/environments/all.js
```js
app: {
  useSplitPane: true,
  useSelectionMode: true,
  useHistoryMode: true
}
```

## Login

In addition to the Livingdocs login, you can configure additional login providers.
```
auth: {
  providers: [{
    id: 'myLoginProvider',
    strategy: 'link',
    label: 'Log in via myLoginProvider',
    url: 'http://localhost:9090/auth/myLoginProvider'
  }]
}
```

Only strategies of type `link` are supported at the moment. For an example see our [Github login guide](../../walkthroughs/github-login.md).

## Dashboard

Define a custom item for the dashboard list of articles. This is useful when you want to show additional data on the dashboard such as the open tasks on an article.

```
search: {
  articleSearch: {
    listItemComponent: 'custom-dashboard-list-item'
  }
}
```

Note that the custom component can only use document metadata that has been explicitly [whitelisted](../server-configuration/config.md#search).

## Main Menu

You can customize the entries you want to have in the main menu (the burger icon in the top left of the screen).
```
app: {
  sidePanelItems: [{
    label: 'Articles',
    sref: 'app.editor.articles',
    icon: 'file-document',
    scope: 'readArticles'
  },
  {
    label: 'Pages',
    sref: 'app.pages',
    icon: 'newspaper',
    scope: 'readPages'
  },
  {
    label: 'Lists',
    sref: 'app.lists',
    icon: 'view-headline',
    scope: 'readLists'
  },
  {
    label: 'Menus',
    sref: 'app.menus',
    icon: 'file-tree',
    scope: 'manageMenus'
  },
  {
    label: 'Project Settings',
    sref: 'app.projects',
    icon: 'settings',
    scope: 'administerProject'
  },
  {
    label: 'Server Admin',
    sref: 'app.admin.users',
    icon: 'account-multiple',
    scope: 'manageUsers'
  }]
}
```

To hide an entry, simply delete it from the list.
You can also customize the scopes that you assign to a menu item to control access rights. See [all available scopes](../../administration/access_rights.md#available-scopes).
You can also customize the icons. We use https://materialdesignicons.com/ just use the respective icon string.
