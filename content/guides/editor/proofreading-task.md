---
title: Proofreading Task
description: Configure a proofreading task that can be used by editorial teams to assign documents to subeditors.
weight: 9
---

This guide will show you how to add a custom `proofreading` task. A `proofreading` task is a special form of a task with some additional config settings and plugins. If you want to know how to add a review task or another generic task, you can read more [here]({{< ref "review-task.md" >}})

The screenshot below shows the task in question.

{{< img src="images/custom-proofreading-task.png" alt="Custom Task" >}}


## Server plugin

On the server we need to configure a new metadata field `proofreading` (more about metadata fields you can read [here]({{< ref "/reference-docs/document/metadata" >}}))

```js
metadata: [
  {
    // metadata field name
    handle: 'proofreading',
    // plugin
    type: 'li-task-v2',
    config: {
      label: 'Proofreading',
      // allows to assign a user to a task
      assignUsers: true,
      showInTaskList: true,
      // flag to control if the card should be updated automatically on custom dashboard
      realtimeNotification: true,
      // flag to declare that this metadata field is a proofreading task
      isProofreading: true
      // flag to control the differ from the poofreading feature in the editor
      updateLastProofreadRevision: true,
      // you can pick a deadline date in the editor when starting with a task
      requestDeadline: true,
      // define a link from the task to a dashboard. 'kanban-proofreading' is the handle of the dashboard in the editor-config
      linkToDashboard: 'kanban-proofreading',
      // flag to enable an option to mark a task as a high priority task
      setPriority: true,
      // define beforeLabel/afterLabel of the 3 states requested/accepted/completed
      assignUsers: true,
      // flag to enable an option to assign a user to a task.
      // if the 'notifications' feature is activated, assigned users will always get an email/slack/* notification
      requested: {
        beforeLabel: 'Request proofreading',
        afterLabel: 'Proofreading requested'
      },
      accepted: {
        beforeLabel: 'Begin proofreading',
        afterLabel: 'Started with proofreading'
      },
      completed: {
        beforeLabel: 'Finish proofreading',
        afterLabel: 'Proofreading finished'
      },
      // when the relative deadline date is nearer than the relative time in the config,
      // a task is set as highly urgent
      urgency: {
        high: {value: 2, unit: 'hours'}
      }
    }
  }
]
```

Additionally, you need to extend the metadata mapping defined in your server config under `search.metadataMapping` for the property `proofreading`.

```js
    ...
    "proofreading": {
      "properties": {
        "state": {
          "type": "keyword",
          "index": true
        },
        "deadline": {
          "type": "date",
          "format": "strict_date_time",
          "index": true
        },
        "priority": {
          "type": "keyword",
          "index": true
        },
        "requested": {
          "properties": {
            "date": {
              "type": "date",
              "format": "strict_date_time",
              "index": true
            },
            "user": {
              "type": "keyword",
              "index": true
            }
          }
        },
        "accepted": {
          "properties": {
            "date": {
              "type": "date",
              "format": "strict_date_time",
              "index": true
            },
            "user": {
              "type": "keyword",
              "index": true
            }
          }
        },
        "completed": {
          "properties": {
            "date": {
              "type": "date",
              "format": "strict_date_time",
              "index": true
            },
            "user": {
              "type": "keyword",
              "index": true
            }
          }
        },
        "assignees": {
          "type": "keyword",
          "index": true
        }
      }
    },
```

## Register a deadline computation in the editor

If `requestDeadline: true` in the configuration, you are asked to set a deadline date when starting a task.

The default behavior is
- default date: now + 1 day
- allowed date range (validation): now + 7 days


If you want to change that default behavior, you can register you own deadline computation in the editor via the `liEditor`.

```js
// return an Error if validation fails
const validation = (date, handle) => {
  const daysInFuture = 10
  const from = moment().startOf('minute')
  const to = moment().add(daysInFuture, 'days')
  const toErr = moment().add(daysInFuture, 'days').subtract(1, 'minutes').format('LLL')

  if (!moment(date).isBetween(from, to)) {
    return new Error(`Date must be between now and ${toErr}`)
  }
}

suggestDeadline = (document, handle) => {
  if (document.contentType === 'regular') return moment().add(1, 'days')
  return moment().add(2, 'days')
}

liEditor.taskDeadline.register(suggestDeadline, validation)
```
