---
title: Document Editing Features
menus:
  reference-docs:
    parent: Editor Config
---

All of the following options concern the editor environment configuration files, so for example `config/environments/all.js` in the [boilerplate editor](https://github.com/livingdocsIO/livingdocs-editor-boilerplate). We list all available config options here where necessary with links to other pages.

## Toolbar

Some of the editing features visible in the top toolbar when
you are editing a document can be configured.

E.g config/environments/all.js
```js
app: {
  useSplitPane: true,
  useSelectionMode: true,
  useHistoryMode: true,
  undoRedoButtonsAreEnabled: true
}
```

## Insert Panel

### Advanced Component Groups

Availability of advanced features such as component search and collapsable component groups.

![image](https://user-images.githubusercontent.com/172394/121654796-64d11680-ca9e-11eb-871f-48e79a1c47b0.png)


```js
app: {
  editor: {
    insertPanel: {
      useAdvancedComponentGroups: true
    }
  }
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
```

## Images

There are several configuration options concerning images.

### Image service

See [here]({{< ref "/enterprise/guides/image-services.md#configuring-an-image-service" >}})

### Image cropping

See [here]({{< ref "./image-cropping.md" >}})

### Sizes

```js
app: {
  imageMinWidth: 300,
  imageMinHeight: 100
}
```

The image min width and height control if an image can be cropped or not.

## Text Editing

See [here]({{< ref "./text-editing.md" >}})

## Tasks

```js
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
    }]
  }]
}
```

You can configure any number of tasks here. The tasks are displayed in the Livingdocs editor's sidebar next to an article and stored in the metadata. You can for example have a proofreading task where editors need to check off different steps and have a publish validation that checks if an article has been proofread.
For every task:
1. make sure that you define one entry with `completesTask: true` (see example above)
2. make sure to add the respective elasticsearch mapping update for the additional metadata (new entry under `tasks`), e.g. [here](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/master/app/custom-search-metadata-mapping.json#L35) for the boilerplate server. After updating the file you need to run `grunt search-index:document:reset` to apply the new mapping. The content of a task mapping in elastic always looks the same (`name`, `status`, etc.), only the name changes, so you can basically just copy the definition of another task (e.g. 'proofreading') and change the name to the name you assigned in the editor configuration above.

If after adding a new task, you get a 400 error while saving a document you probably didn't do (2) above or didn't exactly match the metadata in the mapping.

## Embeds

By default, the Livingdocs core supports embeds of type Iframe:
### iframe default ratio

```js
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


## Timeout

```js
{
  http: {
    timeout: 10000
  }
}
```

Allows you to configure after how much time a timeout should happen in calls from the editor to the server. 10 seconds by default. In milliseconds.

## Third-party services

### Iframely

```js
{
  iframely: {
    apiKey: '***',
    apiUrl: 'https://iframe.ly/api/iframely'
  }
}
```
Iframely is used for 2 things:
- validating links that you enter in the text (see [text editing]({{< ref "./text-editing.md#links" >}}))
- in combination with [`doc-link` to prefill component from metadata]({{< ref "/enterprise/reference-docs/project-config/directives/link.md" >}})

### Spellcheck

See [here]({{< ref "./text-editing.md#spellcheck" >}})

## Document History

```js
{
  app: {
    useHistoryStatistics: true,
    useHistoryRestore: true
  }
}
```

The `useHistoryStatistics` option will show a small statistics/activity panel at the top of the document history sidebar.
The `useHistoryRestore` option enables / disables the restore functionality in the document history, i.e. the ability to restore the opened document to an older revision.

Both options are recommended.

### Diff View
```js
app: {
  history: {
    diffUserColors: [
      ['#B39CD0', '#FBEAFF'],
      ['#F9F871', '#F6F2CB'],
      ['#FF9671', '#FFE6D6'],
      ['#D65DB1', '#EAADD4'],
      ['#00C9A7', '#C7FCEC'],
      ['#FFC75F', '#FFEDCB'],
      ['#008F7A', '#55C6AE'],
      ['#0089BA', '#5FBEF2'],
      ['#C34A36', '#D99586'],
      ['#FF6F91', '#FFE3EB']
    ],
    pageSize: 100
  },
}
```
The `diffUserColors` is an array with colors for the users in the diff view. You can set two colors for a user. The colors are always picked from beginning and given to a user in the diff view.
The `pageSize` is the size of how many revisions are shown in the UI.

## Links

See [here]({{< ref "./text-editing.md#links" >}})

## Keyboard Shortcuts

```js
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

## Multi select

Selecting multiple components at once allows editors to delete a bulk of components.
The multi selection is currently only enabled through keyboard shortcuts (see above). To enable it, add this to the shortcut definition:
```js
{
  keyboardShortcuts: {
    '↓shift': 'start multiselect mode',
    '↑shift': 'end multiselect mode',
  }
}
```

This will allow editors to use Shift+Click to multi-select components. Of course you can also choose to have different shortcuts.


## Document Copy

```js
{
  app: {
    copy: {
      isEnabled: true
    }
  }
}
```

If the copy feature is enabled, it allows you to copy and transform documents.


## Comments

Comments are a great way for editors to communicate about a text.
To enable it, add the following block to your editor config:
```js
comments: {
  isEnabled: true,
  defaultForDocumentType: {
    article: true,
    page: false
  }
}
```

The `defaultForDocumentType` section allows you to separately turn comments off for articles and pages.

The notification feature needs to be enabled if the mentioned users should get a notification. [Notification feature]({{< ref "/enterprise/reference-docs/project-config/notifications.md" >}})

## Filter Sets

Filter Sets allow you to define bookmarks on combinations of filters such as "Last hour" and "Published" as a bookmark "Recently published".
To enable the feature, add the following block to your editor config:
```js
filterSets: {
  isEnabled: true
}
```

All users will be able to see and choose filter sets. Only admins and project admins will be able to add and edit filter sets.

## Pin components

Pinning of components enables a pin icon next to a component card in the sidebar. When clicked the component is pinned according to the rules:
- if it is alone in a container it can not be moved, deleted nor can anything be moved or inserted before or after it (perfect for a fixed article header)
- if it is next to other components, it can not be moved nor deleted, but other components can be moved or inserted around it

```js
pinComponents: {
  isEnabled: true
}
```

Pinning is triggered by the `position` property on the component. You can also pin components over the `defaultContent` by setting the `position` to `fixed` in the JSON:
```js
"defaultContent": [
  {
    "identifier": "living-times.article-container",
    "containers": {
      "header": [
        {
          "identifier": "living-times.head",
          "position": "fixed"
        }
      ],
      "main": [
        { "identifier": "living-times.image" }
      ]
    }
  }
]
```

The UI allows users to unpin or pin a component. If you want to enforce pinning just disable the UI (`pinComponents`) and set the `position` to `fixed` programatically (e.g. by the default content).
