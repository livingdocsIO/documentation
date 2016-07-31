# Docker

We provide a Docker setup for local development and production deployments. We recommend to use it, as we will constantly keep it up to date with the application. 
It is available in both server and editor, both up- and downstream. For more details, have a look at the [livingdocs-docker repository](https://github.com/upfrontIO/livingdocs-docker).

To install the newest docker files compatible with your version of the upstream, run
```
li-docker install
```

It will be stated in the release notes if a new livingdocs version requires an update of the docker files. 


## Pre-built docker images

We provide pre-built docker images for every release, available at https://hub.docker.com/r/livingdocs/

## Manual build

### Server

Build the image with
```
docker build -t livingdocs-server .
```

Run the container
```
docker run --rm -p 9090:9090 -e "db__host=postgres" -e "search__host=http://elasticsearch:9200" -e "ENVIRONMENT=production" -e "NODE_ENV=production" livingdocs-server node index.js
```

The server is now available on http://localhost:9090


### Editor

Build the image with
```
docker build -t livingdocs-editor --build-arg ENVIRONMENT=local .
```

Run editor container
```
docker run --rm -p 9000:9000 livingdocs-editor
```

The editor is now available on http://localhost:9000
