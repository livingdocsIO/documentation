# Stack

## Definition

A stack is a list of features that a server loads when it starts.

Examples of features are: `li-cache`, `li-designs`, `li-search`. The list of all the core features is available here:

https://github.com/livingdocsIO/livingdocs-server/blob/master/core/api/core_features.coffee


## Configuration

In the configuration files there is a dedicated field to configure the stack:

**conf/environments/*.js**
```js
stack: ['feature_1', 'feature_2', 'feature_3']
```
The `stack` value is an array of strings. A string can be either:
- The full name of a feature such as `li-includes`, or
- An alias for a predefined list of features

To define an alias you need to add it to this file:

**core/stack-list.js**
```js
'alias': [
  'feature_x',
  'feature_y',
  'feature_z'
]
```
By default there is already one defined in: https://github.com/livingdocsIO/livingdocs-server/blob/master/core/stack-list.js
