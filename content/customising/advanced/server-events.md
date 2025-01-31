---
title: Server Events
description: The events API is Livingdocs's implementation of the publish/subscribe pattern.
icon: arrow-decision
weight: 2
menus:
  customising:
    parent: Advanced
    weight: 2
---

The events API is Livingdocs's implementation of the publish/subscribe pattern. This allows you to send messages back and forth between features or to listen for events from the core features. Events are fire and forget thus it is possible that some calls might be lost (e.g. when there is a connection outage). If you need reliable transaction-like hooks, see [the hooks feature]({{< ref "/customising/server/server-hooks" >}}).

## Requiring events from the li-server

Example:

```js
const config = require('../conf')
const liServer = require('@livingdocs/server')(config)
liServer.events.subscribe('document.update', console.log)
```

## Event firing: `notify`

```js
events.notify(event, message)
```

- event `<String>`
- message `<Object>`

The events.notify() methods emits a named event alongside a message object.

## Event subscription: `subscribe`

```js
events.subscribe(event, listener)
```

- event `<String>`
- listener `<Function>`

The events.subscribe() method adds a listener that gets called each time the event is fired.

## Event unsubscription: `unsubscribe`

```js
events.unsubscribe(event, listener)
```

- event `<String>`
- listener `<Function>`

The events.unsubscribe() method removes the listener that was called each time the event was fired.

## Events unsubscription: `unsubscribeAll`

```js
events.unsubscribeAll()
```

The events.unsubscribeAll() method removes all listeners.

## Event subscribers: `subscribers`

```js
events.subscribers(event)
```

- event `<String>`

The events.subscribers() method lists all the listeners of an event.

## Available Events

The following lists all events, before the comma, the name of the event and behind the comma, the parameters received by a listener.

- user

  - user.create, `(eventName, {user})`
  - user.delete, `(eventName, {user})`
  - user.password.request, `(eventName, {userId, identityId})`
  - user.password.redeem, `(eventName, {userId, identityId})`
  - user.password.change, `(eventName, {id, connectionId, identityId, userId})`
  - user.email.change, `(eventName, identity)`
  - user.login.success, `(eventName, {user})`
  - user.login.fail, `(eventName, {error})`
  - user.login.new-device, `(eventName, {userId, identityId})`
  - user.newsletter, `(eventName, {newsletter, userId, email, displayName})`

- document

  - document.update, `(eventName, {user, documentVersion})`
  - document.delete, `(eventName, {user, documentVersion})`
  - document.create, `(eventName, {user, documentVersion})` <em>Note: this event is also triggered by document transforms</em>
  - document.publish, `(eventName, {user, documentVersion})`
  - document.unpublish, `(eventName, {user, documentVersion})`
  - document.copy, `(eventName, {documentVersion, originalDocumentId, isTranslation})`
  - document.transform, `(eventName, {documentVersion, originalContentType})`
  - document.build `(eventName, {user, documentVersion, reportId, deliveryHandle})`
  - document.build.abort `(eventName, {user, documentVersion, reportId, deliveryHandle})` ({{< added-in "release-2024-07" >}})
  - document.build.userChoice `(eventName, {user, documentVersion, reportId, deliveryHandle, selectedUserChoice})` ({{< added-in "release-2024-07" >}})
  - document.build.draft `(eventName, {user, documentVersion, reportId, deliveryHandle})`
  - document.build.draft.abort `(eventName, {user, documentVersion, reportId, deliveryHandle})` ({{< added-in "release-2024-07" >}})
  - document.build.draft.userChoice `(eventName, {user, documentVersion, reportId, deliveryHandle, selectedUserChoice})` ({{< added-in "release-2024-07" >}})

- publication

  - publication.update, `(eventName, {user, documentVersion})` ({{< added-in "release-2024-03" >}})
  - publication.updated, `(eventName, {user, documentVersion})` ({{< deprecated-in "release-2024-03" >}})

- document_list

  - document_list.delete, `(eventName, {user, documentList})`
  - document_list.publish, `(eventName, {user, documentList})`
  - document_list.update, `(eventName), {user, documentList}`
  - document_list.create, `(eventName, {user, documentList})`

- migration

  - migration.prepare, `(eventName, {migration})`
  - migration.accept, `(eventName, {migration})`
  - migration.cancel, `(eventName, {migration})`

- mediaLibraryEntry

  - mediaLibraryEntry.create, `(eventName, {userId, projectId, mediaLibraryEntry})`
  - mediaLibraryEntry.update, `(eventName, {userId, projectId, id, changes})`
  - mediaLibraryEntry.archive, `(eventName, {userId, projectId, id})`
  - mediaLibraryEntry.revoke, `(eventName, {userId, projectId, id, mediaLibraryEntry})`
  - mediaLibraryEntry.active, `(eventName, {userId, projectId, id})` ({{< added-in "release-2024-03" >}})
  - mediaLibraryEntry.invalid, `(eventName, {userId, projectId, id})` ({{< added-in "release-2024-03" >}})

- project

  - project.create, `(eventName, {project})`
  - project.update, `(eventName, {project})`

- category
  - category.update, `(eventName, {pointer, value, projectId, user})`
