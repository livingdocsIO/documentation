---
title: li-task-v2
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
support:
  document: true
  media: false
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
defaultUI: Task side panel
storageFormat: |
  {
    state: <String>, // 'requested' | 'accepted' | 'completed'
    deadline: <ISO8601 String>,
    priority: <String>, // optional, only 'high' allowed
    requested: {
      date: <ISO8601 String>,
      user: <Integer>
    },
    accepted: {
      date: <ISO8601 String>,
      user: <Integer>
    },
    completed: {
      date: <ISO8601 String>,
      user: <Integer>
    },
    assignees: [<Integer>]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-task-v2',
        config: {
          required: true,
          requiredErrorMessage: 'Provide a value',
          realtimeNotification: true,
          label: 'Proofreading',
          icon: 'flashlight',
          showInTaskList: true,
          isProofreading: true,
          updateLastProofreadRevision: true,
          requestDeadline: true,
          linkToDashboard: 'myDashboard',
          setPriority: true,
          assignUsers: true,
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
          urgency: {
            high: {value: 2, unit: 'hours'}
          }
        }
---
