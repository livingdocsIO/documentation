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
