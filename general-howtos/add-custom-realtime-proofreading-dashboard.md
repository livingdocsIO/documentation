# Add Custom Realtime Proofreading Dashboard

## Goal

Our goal of this walkthrough is to show how to set up a "Custom Realtime Proofreading Task Dashboard".

Key features

* You have your own dashboard with your own design card
* Your dashboard will be updated in realtime \(when a task changes\)
* You can change the priority of a proofreading task

## Guide

### 1\) Add your own metadata field on the server

As a first step, you have to configure a proofreading task metadata field. Later this field will be used to show documents on the right place on the proofreading dashboard \(sort order, filter, status\)

```javascript
metadata: [{
  // handle of the proofreading metadata field
  handle: 'my-proofreading',
  type: 'li-task-v2',
  config: {
    label: 'My Proofreading',
    realtimeNotification: true,
    showInTaskList: true,
    // handle of the proofreading dashboard (the dashboard will be configured later in the editor)
    linkToDashboard: 'my-kanban-proofreading',
    setPriority: true
  }
}]
```

References:

* [How to customise a proofreading task](https://github.com/livingdocsIO/livingdocs/tree/29994840d3de4e9fc999395c30686a388b7da9bb/walkthroughs/add-custom-proofreading-task/README.md)
* [How to configure a metadata field](https://github.com/livingdocsIO/livingdocs/tree/29994840d3de4e9fc999395c30686a388b7da9bb/reference-docs/server-configuration/metadata/README.md)

#### Add my-proofreading to elasticsearch

The metadata field `my-proofreading` should be searchable by the proofreading dashboard later. Therefore you have to extend the Elasticsearch document mapping. You will find an example on the [server](https://github.com/livingdocsIO/livingdocs-server/blob/be923b40b47bb1d27d5f63d65c9548928c28890f/example-server/metadata/es_metadata_mapping_v6.json#L111-L166).

### 2\) Register your custom dashboard on the editor

As a second step you have to register a custom dashboard in the editor config.

```javascript
dashboards: [{
  handle: 'my-kanban-proofreading',
  type: 'taskBoard',
  pageTitle: 'My Proofreading',
  // This is the name of the previously added metadata field on the server
  taskName: 'my-proofreading',
  displayFilters: ['documentState', 'timeRange']
}]
```

References:

* [How to configure custom dashboards](https://github.com/livingdocsIO/livingdocs/tree/29994840d3de4e9fc999395c30686a388b7da9bb/reference-docs/editor-configuration/menu-and-dashboards/README.md)

### 3\) Add your custom dashboard to the menu

As third step you can add the custom dashboard to the editor menu.

```javascript
app: {
  sidePanelItems: [
    {
      label: 'My Proofreading',
      // 'my-kanban-proofreading' is the dashboard handle configured in the last step
      dashboard: 'my-kanban-proofreading',
      icon: 'file-document'
    },
  ]
}
```

:tada: After you have added your dashboard to the menu, you have a working custom realtime dashboard filtered by your custom metadata field :tada:

How to test it

* go to the tasks feature in the top bar of an article and change the status of your task
* go to the `My Proofreading` dashboard via the menu and look if your task is on the board

References:

* [How to add a custom dashboard entry](https://github.com/livingdocsIO/livingdocs/tree/29994840d3de4e9fc999395c30686a388b7da9bb/reference-docs/editor-configuration/menu-and-dashboards/README.md)

### 4\) Customise a card on the dashboard

The default card on the `My Proofreading` dashboard is quite simple. If you want to implement your own card \(with a custom behavior and also a custom look and feel\), you have to register a card in your downstream editor and assign it to your custom dashboard.

```javascript
// extend the custom dashboard config from step 2 with your own card
dashboards: [{
  handle: 'my-kanban-proofreading',
  // other config options ...
  componentName: 'myProofreadingCard'
}]
```

As last step you have to register your own card `myProofreadingCard` in your downstream as an angular component.

```javascript
angular.module('livingdocs-editor').component('myProofreadingCard', {
  template: require('./my_proofreading_card.html'),
  controller: require('./my_proofreading_controller.js'),
  bindings: {
    documentInfo: '<',
    documentMetadata: '<',
    actions: '<',
    options: '<'
  }
})
```

If you want to have all features available in your own card, you can copy and modify our `liTaskCard` example from the upstream.

References:

* [Example implementation 'liTaskCard'](https://github.com/livingdocsIO/livingdocs-editor/blob/f21c4c2ff6250f99f789a4e3528b76e3c3510b48/app/features/search/document_cards/li_task_card/li_task_card.js)

