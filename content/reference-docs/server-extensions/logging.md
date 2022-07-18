---
title: Logging
weight: 12
menus:
  reference-docs:
    parent: Server Extensions
---

## How to use the logger

We use the logging library [pino](https://getpino.io/#/) in most of the Livingdocs projects.

The Livingdocs Server configures a pino instance and exposes it on `liServer.log`.

A few examples how to use the logger:
```js
const conf = require('./conf')
const liServer = require('@livingdocs/server')(conf)

log.debug('I never expected this to happen.')
log.info({foo: 'bar'})
log.info({foo: 'bar'}, 'Logging an object.')
log.info({foo: 'bar'}, 'And a message %s', 'with interpolation')
log.warn('Requiring lib/something is deprecated.')
log.error({err: new Error('noooo!')}, 'ouch!')
```

### Logging options

There are different configurable properties when using Livingdocs Server logging. The snippet below contains all the possible parameters to configure the logs.
``` js
logs: {
  enabled: true, // default: true

  // Possible log levels: 'error', 'warn', 'info', 'debug', 'trace'
  level: 'warn',

  // use `true` for development to have a formatted output
  pretty: false,

  // Enable http request logs
  // (requests logs always have a log level of 'info' and will be logged
  // regardless of the configured log level)
  logRequests: true,

  // Pass pid and hostname properties to pino logger, this information will be added to each log
  // default: {}, pino will take the information from process.pid and os.hostname
  // Set to `undefined` to avoid adding `pid`, `hostname` to each log
  base: {
    project: 'livingdocs-server'
  },

  // Pass custom pino formatters (these are ignored when: `pretty: true`)
  // Pino Documentation: https://github.com/pinojs/pino/blob/master/docs/api.md#formatters-object
  formatters: {
    // This example will log levels as strings instead of the default numbers
    level(label, level) {
      return { level: label }
    },
    // Changes the shape of the bindings. 
    // It will be called every time a child logger is created.
    // The default shape is {pid, hostname}
    bindings (bindings) {
      return {
        pid: bindings.pid,
        hostname: bindings.hostname,
        project: binding.project
      }
    },
    // Changes the shape of the log object.
    // This example will add `customer` property to the logs
    // By default it will not change to shape of the log object.
    log (object) {
      return {...object, customer: 'Livingdocs'}
    }
  }
}
```

### Handling errors in the logs

In order for the passed object or Error to be logged as JSON it must be passed as the first param. And this object should not have any of the following root-level keys: `level`, `time`, `msg`.

If Errors are passed as an attribute of an object,
the error will just be coerced as string with `toString()` and not serialized with its stack trace.

Make sure you always pass it directly or use `err` or `error` attributes. That behaviour is defined by [`serializers`](https://getpino.io/#/docs/api?id=serializers-object)

- ❌ `log.error({x: new Error()})`
- ✅ `log.error(new Error())`
- ✅ `log.error({err: new Error()})`
- ✅ `log.error({error: new Error()})`

### Creating a child logger

Child loggers can be created with additional properties that will be added to
all logs which are created with the child logger.

```js
const log = server.log.child({ns: 'li-projects'})
```

In this example `ns` is short for namespace. And we use this property to identify where logs originated. But the use of the `ns` property is just a convention we
use in the livingdocs-server. You can also use other properties in your child
loggers.

Every Livingdocs `feature` instance already has a child logger declared using a `ns` with the feature name as value.


### What does the log output look like?

Example json log:
```js
log.warn({foo: 'bar'}, 'A log message.')

{"level": 40, "time": 1497365986364, "msg": "A log message", "foo": "bar"}
```

The values `level` and `time` are always added by the logger. `msg` will be the message.

Any additional keys are additional information that varies depending on what is logged.

The level is a numeric value.
These are the values of the log levels you will see in the logs:

Level   | Value
--------|-------
'FATAL' | 60
'ERROR' | 50
'WARN'  | 40
'INFO'  | 30
'DEBUG' | 20
'TRACE  | 10


### Example Request Log

This is an example request logs from express middleware that are logged when
`logRequests: true` is set:

```json
{
  "level": 30,
  "time": 1497366221715,
  "msg": "request completed",
  "req": {
    "id": "72ec31ac-baab-4e29-bfc0-a91a57d485ee",
    "method": "GET",
    "url": "/users/me"
  },
  "res": {
    "statusCode": 200
  },
  "responseTime": 41
}
```

The request logs have the same format as any other logs.
However they have the additional keys `req`, `res` and `responseTime`.

In cases when our api returns a standard error in the body these will be
added to `res.error`.

`req.id` represents the `requestId`. The requestId can be overwritten in the request by
sending an `X-Request-Id` header and is most likely declared by a loadbalancer in front of the server.

`req.traceId` represents the `traceId` of an [opentelemetry trace](https://github.com/open-telemetry/opentelemetry-js).
