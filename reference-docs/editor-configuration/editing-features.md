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

## Images

There are several configuration options concerning images.

### Image service

See [here](../../concepts/images/image-services.md#configuring-an-image-service)

### Image cropping

See [here](./image-cropping.md)

### Sizes

```
app: {
  imageMinWidth: 300,
  imageMinHeight: 100
}
```

The image min width and height control if an image can be cropped or not.

## Text Editing

See [here](./text-editing.md)

## Login screen

```
app: {  
  ui: {
    login: {
      requestAccess: {
        label: 'No Account?',
        url: 'http://livingdocs.io/trial/',
        urlText: 'Request beta access'
      }
    }
  }
}
```

Customize the label and link below to login (to request a login).

## Tasks

```
app: {
  taskTypes: [{
    name: 'proofreading',
    label: 'Proofreading',
    states: [{
      name: 'todo',
      label: 'Request proofreading',
      completedLabel: 'Proofreading requested'
    },
    {
      name: 'doing',
      label: 'Begin proofreading',
      completedLabel: 'Started with proofreading'
    },
    {
      name: 'done',
      label: 'Finish proofreading',
      completedLabel: 'Proofreading finished',
      completesTask: true
    }
    ]
  }]
}
```

You can configure any number of tasks here. The tasks are displayed in the Livingdocs editor's sidebar next to an article and stored in the metadata. You can for example have a proofreading task where editors need to check off different steps and have a publish validation that checks if an article has been proofread.
For every task:
1. make sure that you define one entry with `completesTask: true` (see example above)
2. make sure to add the respective elasticsearch mapping update for the additional metadata (new entry under `tasks`), e.g. [here](https://github.com/upfrontIO/livingdocs-server-boilerplate/blob/master/app/search/custom-mappings/metadata.json#L80) for the boilerplate server. After updating the file you need to run `grunt search-index:document:reset` to apply the new mapping. The content of a task mapping in elastic always looks the same (`name`, `status`, etc.), only the name changes, so you can basically just copy the definition of another task (e.g. 'proofreading') and change the name to the name you assigned in the editor configuration above.

If after adding a new task, you get a 400 error while saving a document you probably didn't do (2) above or didn't exactly match the metadata in the mapping.
