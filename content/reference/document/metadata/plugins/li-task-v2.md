---
title: li-task-v2
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
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
    assignees: [<Integer>],
    mode: <String>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-task-v2',
        config: {
          index: true, // optional, default: false
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
          },
          // Modes allow users to select how they approach a task. Once
          // configured, selecting a mode becomes mandatory for every newly
          // created task. Modes are displayed in the order they are defined,
          // with the first mode being the default. {{< added-in "release-2024-11" >}}
          modes: [
            {
              handle: 'thorough',
              label: 'Thorough',
              icon: 'glasses'
            },
            {
              handle: 'superficial',
              label: 'Superficial',
              icon: 'speedometer'
            }
          ]
        }
---
