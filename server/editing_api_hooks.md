# Hook System

Hooks are subscriptions to events that use a service as notification system.
The Hooks system consists of the [Events module](#events) (/lib/events) and uses [Services](#services) (/lib/service-hooks/services) that are triggered on an event.
Admins can manage hooks of a space using the [Hooks REST API](#rest-api) and Developers can use the `serviceHooks.subscribe(event, hook)` method to trigger a service on an event.


## Events
Events are triggered in the api and other modules can listen on it.
The hooks module (/lib/service-hooks) listens to all document-related events.

The following events are currently sent using an EventEmitter:
* document.create
* document.publish
* document.unpublish
* document.update
* document.delete


## Services
Services are notification implementations that trigger an action on a remote system.
Example Services are webhooks, hipchat notifications or an elasticsearch indexing implementation.

Services live in /lib/service-hooks/services. A service consists of a couple of things. Each service must contain at least a `name`, `trigger` method, a list of available `events` and a configuration `schema`.

An example service looks like this:  
```coffee
# Example Service
# /lib/service-hooks/services
request = require('request')
_ = require('lodash')

module.exports =

  # Optional service initialization
  # normally automatically called on server start
  init: (globalConfig, callback) -> callback()

  # Administrative name that's also saved in the hook entity
  # Once this is defined, do not change it as existing hooks won't work anymore
  name: 'webhook'

  # Currently not used but nice to have
  label: 'Webhook'

  # Events to which a service can subscribe
  events: ['document.publish']

  # Schema that defines the configuration structure
  # This will be used when subscribing a hook
  schema:
    required: ['url']
    additionalProperties: false
    properties:
      token:
        type: 'string'
      url:
        type: 'string'
        format: 'url'
        protocols: ['http', 'https']

  # This gets called when an event occurs
  # If you'd like to listen to multiple events,
  # you have to route them manually inside this method
  trigger: (hookConfig, event, data, callback) ->
    console.log('Triggering webhook on "%s"', event)
    request.post
      url: config.url
      body: _.extend({}, data, event: event)
    , callback

```


## REST API

### Subscribe to an event - POST /hooks
```js
{
  type: "webhook"
  events: 'document.publish,document.unpublish',
  space_id: 1,
  config: {
    url: 'http://example.com',
    token: 'jT18ReWFdml4zmzQ02t8' // custom string, optional
  }
}
```

NOTE: Currently, you can only subscribe one event per call. If you want to subscribe several events to a URL just do the above call several times with the different events.

#### Curl Example
```bash
curl -XPOST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer MDFmOTE2ZTUtZWE2Yi00Y..." \
-d '{
  "type": "webhook",
  "space_id": 1,
  "events": "document.publish",
  "config": {
    "url": "http://www.example.com/publish",
    "token": "jT18ReWFdml4zmzQ02t8"
  }
}' http://api.livingdocs.io/hooks
```

### List all subscriptions - GET /hooks

Supported query strings: `space_id` 

```js
{
  hooks: [
    {
      id: 1,
      created_at: "2011-09-06T17:26:27Z",
      updated_at: "2011-09-06T20:39:23Z",
      type: 'webhook',
      events: 'document.publish,document.unpublish',
      space_id: 1
    }
  ]
}
```


### Get a subscription - GET /hooks/:id
```js
{
  hook: {
    id: 1,
    created_at: "2011-09-06T17:26:27Z",
    updated_at: "2011-09-06T20:39:23Z",
    type: 'webhook',
    events: 'document.publish,document.unpublish',
    space_id: 1
    config: {
      url: 'http://example.com'
    }
  }
}
```

### Ping a service - POST /hooks/:id/ping
Executes the ping method of the configured service using the hook configuration.
Returns 204 on success, 501 when the service did not implement a ping method.

### Delete a subscription - DELETE /hooks/:id
Returns statusCode `204` on success.

### List loaded services - GET /hooks/services
```json
{
  "services": [
    {
      "name": "webhook",
      "label": "Webhooks",
      "events": ["document.publish", "document.unpublish", "..."],
      "schema": {
        "type": "object",
        "properties": {"url": {"type": "string"}}
      }
    },
    {
      "name": "hipchat",
      "label": "Hipchat",
      "events": ["document.publish", "document.unpublish", "..."],
      "schema": {
        "type": "object"
      }
    }
  ]
}
```

Currently only admins have permission to edit subscriptions.