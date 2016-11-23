# Docker

We provide a Docker setup for local development and production deployments. We recommend to use it, as we will constantly keep it up to date with the application.
 
Install the docker engine to use them.
https://docs.docker.com/engine/getstarted/step_one/
 
Docker files are available in both server and editor, both up- and downstream. For more details, have a look at the [livingdocs-docker repository](https://github.com/upfrontIO/livingdocs-docker).

To install the newest docker files compatible with your version of the upstream, run
```
li-docker install
```

It will be stated in the release notes if a new livingdocs version requires an update of the docker files. 


## Manually building images

### Server

Build the image with
```
docker build -t livingdocs-server .
```

Run the container
```
docker run --rm -p 9090:9090 -e "ENVIRONMENT=production" -e "NODE_ENV=production" livingdocs-server npm start
```

The server is now available on http://localhost:9090


### Editor

Build the image with
```
docker build -t livingdocs-editor .
```

Run the container
```
docker run --rm -p 9000:9000 -e "ENVIRONMENT=production" livingdocs-editor
```

The editor is now available on http://localhost:9000
