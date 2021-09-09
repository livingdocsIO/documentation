---
title: Tasks with Validation Constraints
description: Configure a task with a user defined, server side validation constraint.
weight: 11
---

This guide will show you how to add a custom review task and validate before publishing if the task was completed. The boilerplate server and editor contain all required code in commented sections, so you can easily try the example there.
The screenshot below shows the task in question.

{{< img src="images/tasks.png" alt="Custom Task" >}}

We see two tasks, the proofreading which is there by default (of course you can disable it) and our new custom "review" task. The review is quite stringent, we require content and design review and in the end a green light from the editor in chief. If the last is not given, the user can not publish the article.

## Editor configuration

```js
app: {
  taskTypes: [{
    name: 'review',
    label: 'Review',
    states: [{
      name: 'ready',
      label: 'Ready for review',
      completedLabel: 'Review requested'
    }, {
      name: 'content-review',
      label: 'Content review',
      completedLabel: 'Content reviewed'
    }, {
      name: 'design-review',
      label: 'Design review',
      completedLabel: 'Design reviewed'
    }, {
      name: 'editorial-review',
      label: 'Editor in chief review',
      completedLabel: 'ready to publish',
      completesTask: true
    }]
  }]
}
```

Above we see the configuration of our custom task in the editor. There is nothing special here. The metadata entry in elasticsearch for the review task already exists in the boilerplate so you don't need to do anything in this regard. If you have a different task name or don't work with the boilerplate, see [here]({{< ref "/reference-docs/editor-extensions/editor-configuration#tasks" >}}) for what to do in elastic.

## Server plugin

On the server we need to exchange the [metadata plugin]({{< ref "/reference-docs/document/metadata" >}}) used for the tasks.

```js
metadata: {
  tasks: {
    plugin: 'custom-tasks'
  }
}
```

The [boilerplate server](https://github.com/livingdocsIO/livingdocs-server-boilerplate) already contains a metadata plugin `custom-tasks`, but of course you can also write your own. The schema of our `custom-tasks` plugin is exactly the same as the core plugin (`li-tasks`), the only difference is that we add a `validate` method.

```js
validate: function (value, config) {
  const reviewStatus = value?.review?.status
  if (reviewStatus !== 'editorial-review') {
    return 'The review has to be completed by the editor in chief'
  }
  return true
}
```

We only check the status of the review task here. Of course you can customize the behavior to also take the proofreading or possible other tasks into account.

After both the editor and the server customizations are done, a user can only publish an article after the review task has been completed.
