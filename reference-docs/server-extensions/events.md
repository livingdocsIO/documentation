# Livingdocs Server Events


The events API is Livingdocs's implementation of the publish/subscribe pattern.

## Requiring events from the li-server
Example:
```coffeescript
config = require('../conf')
liServer = require('@livingdocs/server/core/api')(config)
{events} = liServer
```

## Event firing: `notify`
```coffeescript
events.notify(event, message)
```
- event `<String>`
- message `<Object>`

The events.notify() methods emits a named event alongside a message object.

## Event subscription: `subscribe`
```coffeescript
events.subscribe(event, listener)
```

- event `<String>`
- listener `<Function>`

The events.subscribe() method adds a listener that gets called each time the event is fired.

## Event unsubscription: `unsubscribe`
```coffeescript
events.unsubscribe(event, listener)
```

- event `<String>`
- listener `<Function>`

The events.unsubscribe() method removes the listener that was called each time the event was fired.

## Events unsubscription: `unsubscribeAll`
```coffeescript
events.unsubscribeAll()
```

The events.unsubscribeAll() method removes all listeners.

## Event subscribers: `subscribers`
```coffeescript
events.subscribers(event)
```

- event `<String>`

The events.subscribers() method lists all the listeners of an event.

## Available Events

- user
  - user.create
  - user.delete
  - user.password.request
  - user.password.redeem
  - user.password.change
  - user.email.change
  - user.login.success
  - user.login.fail

- document
  - document.update
  - document.delete
  - document.create
  - document.publish
  - document.unpublish

- document_list
  - document_list.delete
  - document_list.publish
  - document_list.update
  - document_list.create

- migration
  - migration.prepare
  - migration.accept
  - migration.cancel
  - project.create
  - project.update
