---
title: Hosting Livingdocs
description: What to consider when self-hosting Livingdocs.
icon: server
menu: operations
---

### Hardware requirements
See the [hardware requirements]({{< ref "/operations/hardware-requirements.md" >}}) for the requirements of each application and the services.

### Applications
The server and delivery are both applications written in Node.js. Node.js is single threaded, but it can handle concurrency through the asynchronous event loop. If a Node.js process crashes, it has to be restarted and it is not able to accept requests during startup.

For a production setup, Node.js processes should always be redundant to prevent downtime in case of crashes.

### Docker
We recommend to use Docker as we provide Dockerfiles for every application and service. Compatibility is ensured with every release.

#### Services
Both Elasticsearch and Postgres will need a persistent volume mounted.
Any custom configuration, as well as the supported versions for Elasticsearch and Postgres are visible in the respective Dockerfile.

- https://github.com/livingdocsIO/dockerfile-elasticsearch
- https://github.com/livingdocsIO/dockerfile-postgres

#### Applications
The applications are stateless and follow the 12 factor app methodology.
Any system level dependency and the required environment variables are visible in the respective Dockerfile.

- https://github.com/livingdocsIO/docker/tree/master/livingdocs-server-base
- https://github.com/livingdocsIO/docker/tree/master/livingdocs-editor-base

#### Container data volumes

Both the containers for server and editor are stateless. The Elasticsearch and Postgres containers data directory needs to be mounted to the host on with a data volume.

#### Health checks
- **Editor**: HTTP GET /status, Port 9000
- **Server**: HTTP GET /status, Port 9090
- **Postgres**: TCP, Port 5432
- **Elasticsearch**: TCP, Port 9200
- **Redis**: TCP, Port 6379

#### Deployment
We recommend building Docker images on CI and pushing them to the registry. Deployment can be done manually or triggered by CI continuously.

## Operating Livingdocs

Notable required configurations and our recommended best practices are described below.

**Avoiding CORS**

The preferred solution is to serve the Livingdocs Server instance on the same domain as the editor to prevent CORS requests and have a better security as we don't need to make the login cookies accessible on multiple domains. Please expose the Livingdocs Server instance on `/proxy/api` and then in the `livingdocs-editor` environment configs, configure the _host:_ `module.exports={api: {host: '/proxy/api'}}`

Alternatively you can use _proxiedHost_ instead of _host_ to proxy to a dns name of an internal service that is not accessible from the internet. We will automatically set up a http/websocket proxy on `/proxy/api`.
