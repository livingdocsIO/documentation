---
title: li-push-messages
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Send custom push messages.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: false
description: |
  As an alternative to the existing [Push Notifications]({{< ref "/guides/editor/push-notifications" >}}) feature,
  we introduced the more flexible `li-push-messages` metadata plugin.

  Use Push **Messages** if you like to send messages directly from Table Dashboards and if you need
  a flexible message format.

  Use Push **Notifications** if you need to send notifications directly from the Editor Toolbar or if you'd like
  to use a predefined push service like Google Firebase.

  The two features may be merged in the future, but for now they co-exist independently.

  |                | Push Notifications                        | Push Messages           |
  |----------------|-------------------------------------------|-------------------------|
  | Accessed from  | Editor Toolbar Action                     | Table Dashboards        |
  | Push Services  | Google Firebase, Urban airship, Ethinking | Custom Implementation   |
  | Message Format | Fixed (Message + Topic)                   | Dynamic (Params Schema) |

  **Notice**: Push Messages can only be sent on published documents. If the document is not published, the Table Dashboard won't show the button.
defaultUI: |
  Push messages dialog launched from Table Dashboard

  {{< img src="../images/li-push-messages-dashboard.png" alt="Push Messages on Table Dashboard" >}}

  {{< img src="../images/li-push-messages-dialog.png" alt="Push Messages Dialog Form" >}}
storageFormat: |
  {
    messages: [
      {
        id: <String>,
        sentAt: <ISO8601 String>,
        userId: <Number>,
        params: <Object>
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-push-messages',
        config: {
          paramsSchema: [                     // Defines schema of message object
            {
              type: 'li-text',                // One of: li-text, li-boolean, li-integer, li-date, li-datetime, li-string-list
              handle: 'messageText',          // Property name on message object
              config: {                       // Config based on type (li-text here)
                required: true,
                maxLength: 120,
                recommendedMaxLength: 100
              }
            }
          ],
          handlerName: 'myPushMessageHandler' // Optional, name of the registered function to send the message
        },
        ui: {
          label: 'Push Me'                    // Optional, controls button label on Table Dashboards
        }
tableDashboardConfig: |2
    columns: [
      // ...
      {
        label: 'My push messages',
        metadataPropertyName: 'myPushMessages',
        minWidth: 70,
        growFactor: 1,
        priority: 1
      }
    ]
additionalConfig: |
  ### Custom Function

  The `li-push-messages` metadata plugin handles everything regarding the user interface and saves the messages to the database.
  But it does not actually send push messages anywhere. Instead, it lets you register your own function to do that job.

  - Register Push Message handler after server initialization
  - Handler function can be `async`, returned value will be ignored
  - Push Message will not be saved if handler throws an error

  Example configuration from [Livingdocs server boilerplate](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/master/app/hooks/push-messages-hooks.js):

  ```js
  module.exports = function (liServer) {
    // Register function after server initialization
    liServer.registerInitializedHook(async function () {

      const log = liServer.log.child({ns: 'push-messages-hooks'})
      const pushMessagesApi = liServer.features.api('li-documents').pushMessages

      pushMessagesApi.registerPushMessageHandler({
        // Name must be unique across projects
        name: 'myPushMessageHandler',

        /**
        * @async
        * @param {object} args
        * @param {object} args.projectConfig
        * @param {number} args.userId
        * @param {string} args.documentId
        * @param {string} args.metadataPropertyName
        * @param {string} args.pushMessageId - Id the push message will have
        * @param {object} args.params - The message object, following paramsSchema
        * @return {Promise<void>}
        */
        async handler (args) {
          log.info(
            `Handling push message for metadata property name "${args.metadataPropertyName}"`
          )
        }
      })
    })
  }
  ```
---
