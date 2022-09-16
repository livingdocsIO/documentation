---
title: Roles
weight: 16
menus:
  reference-docs:
    parent: Server Extensions
---

Roles provide an easy way to scale out your Livingdocs Server instances when accessing only one Postgres instance.
This configuration allows developers to deploy new Server instances with read only permission.

At the moment, there are 2 valid roles available: `write` and `worker`.
 - `write` enables the mutating api endpoints when set.
 - `worker` sets the enableConsumers of internal Server features.

We recommend one of the following configurations:
 - one instance with `roles: ['write', 'worker']` (default)
 - for reliability sensitive setups deploy two instances, one with `roles: 'write'` and another instance with `roles: 'worker'`

## Roles: 'write'

This role should be used in all instances that require the ability to mutate the database. 
If a Server instance without `write` role receives a request to a mutating public-api endpoint, 
the Server will respond with a Error `405` stating the instance is `read-only`.

## Roles: 'worker'

This role should be used to deploy replica instances to increase reliability over single-instance deployments, i.e. a worker intance that handles ElasticSearch indexing without affecting main instance.

When a Server instance with `worker` role is deployed, internal API features will be enabled by default (i.e. documents, import, indexing, notifications, document-migrations).
