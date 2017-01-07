## Manually building Docker images

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
