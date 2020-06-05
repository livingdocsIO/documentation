# Logs

## How to use the logger

The logger is exposed on the `liServer`:

```javascript
const conf = require('./conf')
const liServer = require('@livingdocs/server')(conf)

liServer.log.info('logging')
```

A few examples how to use the logger:

```javascript
log.debug('I never expected this to happen.')
log.info({foo: 'bar'})
log.info({foo: 'bar'}, 'Logging an object.')
log.info({foo: 'bar'}, 'And a message %s', 'with interpolation')
log.warn('Requiring lib/something is deprecated.')
log.error(new Error('noooo!'), 'ouch!')
```

In order for the passed object or Error to be logged as JSON it must be passed as the first param. And this object should not have any of the following root-level keys: `pid`, `hostname`, `level`, `time`, `msg` or `v`.

If Errors are passed as a property of an object, e.g. log.error\({x: new Error\(\)}\), the error will just be coerced as string with `toString()` and not serialized with its stack trace.

### Creating a child logger

Child loggers can be created with additional properties that will be added to all logs which are created with the child logger.

```javascript
const log = server.log.child({ns: 'li-projects'})
```

In this example `ns` is short for namespace. And we use this property to identify where logs originated. But the use of the `ns` property is just a convention we use in the livingdocs-server. You can also use other properties in your child loggers.

## What does the log output look like?

### Example json log:

```javascript
log.warn({foo: 'bar'}, 'A log message.')
```

```javascript
{
  "pid": 40073,
  "hostname": "Lukas-MacBook-Pro.local",
  "level": 40,
  "time": 1497365986364,
  "msg": "A log message.",
  "v": 1,
  "foo": "bar"
}
```

The values `pid`, `hostname`, `level`, `time` and `v` are always added by the logger. `msg` will be the message. Any additional keys are additional information that varies depending on what is logged.

The level is a numeric value. These are the values of the log levels you will see in the logs:

| Level | Value |
| :--- | :--- |
| 'FATAL' | 60 |
| 'ERROR' | 50 |
| 'WARN' | 40 |
| 'INFO' | 30 |
| 'DEBUG' | 20 |
| 'TRACE | 10 |

### Example Request Log:

This is an example request logs from express middleware that are logged when `logRequests: true` is set:

```javascript
{
  "pid": 40073,
  "hostname": "Lukas-MacBook-Pro.local",
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
  "responseTime": 41,
  "v": 1
}
```

The request logs have the same format as any other logs. However they have the additional keys `req`, `res` and `responseTime`.

In cases when our api returns a standard error in the body these will be added to `res.error`.

`req.id` represents the requestId. The requestId can be overwritten in the request by sending an `X-Request-Id` header \(This works independently from the logging\).

