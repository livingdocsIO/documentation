---
title: Read, Write, Worker Roles
weight: 12
menus:
  customising:
    parent: Server Extensions
    weight: 7
---

Roles provide an easy way to scale out your Livingdocs Server instances when accessing only one Postgres instance.
This configuration allows developers to deploy new Server instances with read only permission.

At the moment, there are 3 valid roles available: `write`, `worker` and an implicit read-only role.

- `write` enables the mutating api endpoints when set.
- `worker` sets the enableConsumers of internal Server features.
- read-only: If roles config is set empty `roles: []` then this is a ready-only instance (usually for deliveries)

We recommend one of the following configurations:

- one instance with `roles: ['write', 'worker']` (default)
- for reliability sensitive setups deploy two instances, one with `roles: 'write'` and another instance with `roles: 'worker'`
- one instance with `roles: ['write', 'worker']` and multiple instances with `roles: []` to scale out deliveries

All possible combinations per use case, can be seen below:

{{< img src="images/roles-configurations.png" alt="Possible `roles` configuration per use case" >}}

## Roles: 'write'

This role should be used in all instances that require the ability to mutate the database.
If a Server instance without `write` role receives a request to a mutating public-api endpoint,
the Server will respond with a Error `405` stating the instance is `read-only`.

## Roles: 'worker'

This role should be used to deploy replica instances to increase reliability over single-instance deployments, i.e. a worker intance that handles ElasticSearch indexing without affecting main instance.

When a Server instance with `worker` role is deployed, internal API features will be enabled by default (i.e. documents, import, indexing, notifications, document-migrations).

## Roles: read-only

This role should be used when having a delivery/frontend doing read-only requests via the public API.
