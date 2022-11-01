---
title: Push Messages
bullets:
- Dynamic input form based on message schema 
- Works with table dashboards
- Implement your own push function
weight: 15
---

TODO: explain why the feature exists, when it should be used over push notifications etc.

1. Configure a metadata field on the content types that should support push messages
2. Show the push button in a table dashboard column
3. Register custom function to send push messages

## Configure metadata field

TODO: move this to the metadata plugin page and just add a link and a short summary here

article.js
```js
{
  type: 'li-push-messages',
  handle: 'myPushMessages',             // Name of the metadata field
  ui: {
    label: 'Push'                       // Optional, controls button label on table dashboards
  },
  config: {
    paramsSchema: [                     // Defines schema of message object
      {
        type: 'li-text',                // One of: li-text, li-boolean, li-integer, li-date, li-datetime
        handle: 'messageText',          // Property name on message object
        config: {                       // Config based on type (li-text here)
          required: true,
          maxLength: 120,
          recommendedMaxLength: 100
        }
      }
    ],
    handlerName: 'myPushMessageHandler' // Optional, name of the registered function to send the message
  }
}
```

TODO: Show a screenshot or add a text explaining how the params schema controls the dialog form

## Show push button on a table dashboard

Adding the push message button on a table dashboard is simple:

- Define another column on the table dashboard
- Reference the metadata property handle `metadataPropertyName: "myPushMessages"` (`handle` name from [here](#configure-metadata-field))  

**Hint**: Experiment with the column `minWidth` to make sure the button text is visible across different screen sizes. 

- TODO: Add link to table dashboard docs
- TODO: Add link to server boilerplate config

```js
columns: [
  ...,
  {
    label: 'My push messages',
    metadataPropertyName: 'myPushMessages',
    minWidth: 70,
    growFactor: 1,
    priority: 1
  }
]
```

## Register custom function

The `li-push-messages` plugin handles everything regarding the user interface and saves the messages to the database.
But it does not actually send push messages anywhere. Instead, it lets you register your own function to do that job.

- Register push message handler after server initialization
- Handler function can be `async`, returned value will be ignored
- Push message will not be saved if handler throws an error

TODO: link to server boilerplate 

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

