# Configuration of editing features

All of the following options concern the editor environment configuration files, so for example `config/environments/all.js` in the [boilerplate editor](https://github.com/livingdocsIO/livingdocs-editor-boilerplate). We list all available config options here where necessary with links to other pages.

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

## Properties Panel

### Transform Component

Visibility of the "Transform Component" select menu can be configured.

```js
app: {
  editor: {
    propertiesPanel: {
      transformComponentEnabled: true
      }
    }
  }
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

### Login screen

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
    label: 'Data Records'
    sref: 'app.dataRecords'
    icon: 'format-list-checks'
    scope: 'readDataRecords'
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
2. make sure to add the respective elasticsearch mapping update for the additional metadata (new entry under `tasks`), e.g. [here](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/master/app/search/custom-mappings/metadata.json#L80) for the boilerplate server. After updating the file you need to run `grunt search-index:document:reset` to apply the new mapping. The content of a task mapping in elastic always looks the same (`name`, `status`, etc.), only the name changes, so you can basically just copy the definition of another task (e.g. 'proofreading') and change the name to the name you assigned in the editor configuration above.

If after adding a new task, you get a 400 error while saving a document you probably didn't do (2) above or didn't exactly match the metadata in the mapping.

## Embeds

By default, the Livingdocs core supports embeds of type Iframe and Twitter (official Twitter card). You can add more embeds in `app/editor.js`:
```
const embeds = require('@livingdocs/editor/app/scripts/modules/embeds/embeds')
const Instagram = require('./custom/scripts/modules/embeds/instagram/instagram')
embeds.registerCustomEmbeds [
  Instagram
]
```

The example above registers a custom embed of type `Instagram`.
Note that embeds refer to client-side rendered elements such as an iframe or a script section in the HTML DOM. This is different from [includes](../doc-includes/intro.md) which are rendered server-side.
For more details, see our guide on [how to add an Instagram embed](../../walkthroughs/instagram_embed.md)

### allow unrecognized code

```
{
  embeds: {
    options: {
      allowUnrecognizedEmbeds: false
    }
  }
}
```

The option `allowUnrecognizedEmbeds` allows your users to paste any kind of code into any embed. By default this value is `false`. We don't recommend using this option as it is a potential security risk.

### twitter card language

```
{
  embeds: {
    twitter: {
      language: false
    }
  }
}
```

Allows you to customize the language of the Twitter card (buttons, retweet display, etc.). By default the language is english. You can pass a language identifier such as `de` or `fr` to customize the language.

### iframe default ratio

```
{
  embeds: {
    iframe: {
      defaultRatio: 55
    }
  }
}
```

Iframes in Livingdocs use a special CSS trick to always be rendered in a given aspect ratio and scale automatically to the given width. In this way an iframe out of Livingdocs is never cut off at the sides. The default ratio of 55 is about a 16:9 aspect ratio. Use this formula to calculate the correct value for your custom default aspect ratio: `(width / height) * 100`.
This setting only sets the default ratio, a user is given an interface to change the aspect ratio inside of the Livingdocs editor.

## Filters

See [here](./search-filters.md)

## Timeout

```
{
  http: {
    timeout: 10000
  }
}

```

Allows you to configure after how much time a timeout should happen in calls from the editor to the server. 10 seconds by default. In milliseconds.

## Third-party services

### Pusher

```
{
  pusher: {
    isEnabled: true,
    endpoint: '/pusher/authorize',
    appId: '***',
    key: '***',
    cluster: 'eu'
  }
}
```

Pusher is used for the real-time collaboration feature, i.e. to show you changes that other users are doing on your document while you are on the same document.

### Iframely

```
{
  iframely: {
    apiKey: '***',
    apiUrl: 'https://iframe.ly/api/iframely'
  }
}
```
Iframely is used for 2 things:
- validating links that you enter in the text (see [text editing](./text-editing.md#links))
- in combination with [`doc-link` to prefill component from metadata](../common-designs/component_config.md#doc-link)

### Spellcheck

See [here](./text-editing.md#spellcheck)

## Document History

```
{
  app: {
    useHistoryStatistics: true
    useHistoryRestore: true
  }
}
```

The `useHistoryStatistics` option will show a small statistics/activity panel at the top of the document history sidebar.
The `useHistoryRestore` option enables / disables the restore functionality in the document history, i.e. the ability to restore the opened document to an older revision.

Both options are recommended.

## Links

See [here](./text-editing.md#links)

## Keyboard Shortcuts

```
{
  keyboardShortcuts: {
    backspace: 'prevent backspace',
    escape: 'esc',
    enter: 'enter',
    up: 'focus previous component',
    down: 'focus next component',
    '⌘+up, ⌃+up': 'move component up',
    '⌘+down, ⌃+down': 'move component down',
    '⌘+z, ⌃+z': 'undo',
    '⌘+y, ⌘+shift+z, ⌃+y, ⌃+shift+z': 'redo'
  }  
}
```

The keyboard shortcuts allow you to customize which keys you want to use for common actions in Livingdocs.
The actions (values) are fixed. You can define on which keys you want to execute the actions

## Document Copy

```
{
  app: {
    copy: {
      isEnabled: true
    }
  }
}
```

If the copy feature is enabled, it allows you to copy and transform documents. 
