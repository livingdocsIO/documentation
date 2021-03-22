---
title: Docker
menu: operations
---

We provide a Docker setup for local development and production deployments.
We recommend to use it, as we will constantly keep it up to date with the application.

Docker files are available in both server and editor, both up- and downstream.
Please consult the boilerplate projects of the [server](https://github.com/livingdocsIO/livingdocs-server-boilerplate#livingdocs-server-boilerplate) and the [editor](https://github.com/livingdocsIO/livingdocs-editor-boilerplate) and check the Dockerfiles.


We also provide several docker images that we use internally and at customers.
To find our docker base images, have a look at the [livingdocsIO/docker repository](https://github.com/livingdocsIO/docker).


## Manually building Docker images

### Server

Build the image with
```sh
docker build -t livingdocs-server .
```

Run the container
```sh
docker run --rm -p 9090:9090 -e "ENVIRONMENT=production" -e "NODE_ENV=production" livingdocs-server npm start
```

The server is now available on http://localhost:9090

Development hint: If you want to run from your docker container locally and you have containers for postgres and elasticsearch with the alias `postgres` and `elasticsearch`, you can use the following command to run in the local environment:
```
docker run --rm --link postgres:postgres --link elasticsearch:elasticsearch --env db__host=postgres --env search__host=http://elasticsearch:9200 -p 9090:9090 -e "ENVIRONMENT=local" -e "NODE_ENV=local" livingdocs-server-boilerplate npm start
```


### Editor

Build the image with
```sh
docker build -t livingdocs-editor .
```

Run the container
```sh
docker run --rm -p 9000:9000 -e "ENVIRONMENT=production" livingdocs-editor
```

The editor is now available on http://localhost:9000
