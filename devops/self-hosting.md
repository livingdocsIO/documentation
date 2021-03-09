## Hosting Livingdocs

### Hardware requirements
See the [hardware requirements](./hardware-requirements.md) for the requirements of each application and the services.

### Applications
The server and delivery are both applications written in node.js. Node.js is single threaded, but it can handle concurrency through the asynchronous event loop. If a node.js process crashes, it has to be restarted and it is not able to accept requests during startup.

For a production setup, node.js processes should always be redundant to prevent downtime in case of crashes.

### Docker
We recommend to use Docker as we provide Dockerfiles for every application and service. Compatibility is ensured with every release.

#### Services
Both elasticsearch and postgres will need a persistent volume mounted.
Any custom configuration, as well as the supported versions for elasticsearch and postgres are visible in the respective Dockerfile.

- https://github.com/livingdocsIO/dockerfile-elasticsearch
- https://github.com/livingdocsIO/dockerfile-postgres

#### Applications
The applications are stateless and follow the 12 factor app methodology.
Any system level dependency and the required environment variables are visible in the respective Dockerfile.

- https://github.com/livingdocsIO/docker/tree/master/livingdocs-server-base
- https://github.com/livingdocsIO/docker/tree/master/livingdocs-editor-base

#### Container data volumes

Both the containers for server and editor are stateless. The elasticsearch and postgres containers data directory needs to be mounted to the host on with a data volume.

#### Health checks
- **Editor**: HTTP GET /version.json, Port 9000
- **Server**: HTTP GET /status, Port 9090
- **Postgres**: TCP, Port 5432
- **Elasticsearch**: TCP, Port 9200

#### Deployment
We recommend building docker images on CI and pushing them to the registry. Deployment can be done manually or triggered by CI continuously.

## Operating Livingdocs

Notable required configurations and our recommended best practices are described below.

**Avoiding CORS**

The preferred solution is to serve the livingdocs server instance on the same domain as the editor to prevent CORS requests and have a better security as we don't need to make the login cookies accessible on multiple domains. Please expose the livingdocs server instance on `/proxy/api` and then in the `livingdocs-editor` environment configs, configure the _host:_ `module.exports={api: {host: '/proxy/api'}}`

Alternatively you can use _proxiedHost_ instead of _host_ to proxy to a dns name of an internal service that's not accessible from the internet. We'll automatically set up a http/websocket proxy on `/proxy/api`.