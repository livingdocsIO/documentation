---
title: Proofreading Dashboard
description: Configure a proofreading dashboard to assist editorial teams with an efficient workflow.
weight: 8
---

## Goal

Our goal of this walkthrough is to show how to set up a Proofreading Task Dashboard with Realtime Collaboration.

Key features

- You have your own dashboard with your own design card
- Your dashboard will be updated in realtime (when a task changes)
- You can change the priority of a proofreading task

# Guide

## 1) Add your own metadata field on the server

As a first step, you have to configure a proofreading task metadata field. Later this field will be used to show documents on the right place on the proofreading dashboard (sort order, filter, status)

```js
metadata: [
  {
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
  }
]
```

References:

- [How to customise a proofreading task]({{< ref "./proofreading-task.md" >}})
- [How to configure a metadata field]({{< ref "/customising/server/metadata-plugins" >}})

### Add my-proofreading to Elasticsearch

The metadata field `my-proofreading` should be searchable by the proofreading dashboard later. Therefore you have to extend the Elasticsearch document mapping.
You will find an example on the [server](https://github.com/livingdocsIO/livingdocs-server/blob/cb91a7913149293e2d8562f98c085bb46da41d60/example-server/metadata/es_metadata_mapping_v6.json#L59-L118).

## 2) Register your custom dashboard on the editor

As a second step you have to register a custom dashboard in the project config.

```js
dashboards: [
  {
    handle: 'my-kanban-proofreading',
    type: 'taskBoard',
    pageTitle: 'My Proofreading',
    // This is the name of the previously added metadata field on the server
    taskName: 'my-proofreading',
    displayFilters: ['documentState', 'timeRange']
  }
]
```

References:

- [Project Config]({{< ref "/reference/project-config/editor-settings" >}})

## 3) Add your custom dashboard to the menu

As third step you can add the custom dashboard to the [main navigation]({{< ref "/reference/project-config/editor-settings" >}}).

```js
{
  label: 'My Proofreading',
  // 'my-kanban-proofreading' is the dashboard handle configured in the last step
  dashboard: 'my-kanban-proofreading',
  icon: 'file-document'
}
```

:tada: After you have added your dashboard to the menu, you have a working custom realtime dashboard filtered by your custom metadata field :tada:

How to test it

- go to the tasks feature in the top bar of an article and change the status of your task
- go to the `My Proofreading` dashboard via the menu and look if your task is on the board

References:

- [Project Config]({{< ref "/reference/project-config/editor-settings" >}})

## 4) Customise a card on the dashboard

If the default dashboard card for proofreading dashboards doesn't meet all your requirements, you can bring your own dashboard card, which can differ both in design and behaviour.

To do so, you need to create and register a custom Vue component of type `dashboardCard` in your downstream editor project. You can refer to one of our default dashboard cards (e.g. [`LiDocumentListCard`](https://github.com/livingdocsIO/livingdocs-editor/blob/11ea08daa015d81401fcd0bea644ca6fe7abe69b/app/features/search/dashboard_cards/li-document-list-card.vue)) to understand how to write such a component.

```js
app.vueComponentRegistry.registerComponent({
  type: 'dashboardCard',
  name: 'myProofreadingCard',
  component: require('./li-proofreading-card.vue').default
})
```

Finally, you need to reference this component in the project config by setting `componentName` of your dashboard to your component's name.

```js
dashboards: [
  {
    handle: 'my-kanban-proofreading',
    componentName: 'myProofreadingCard'
    // ...
  }
]
```
