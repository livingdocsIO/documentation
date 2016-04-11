# Docker deployment

## With Dokku

We provide a docker setup for both local development and production deployments. Our Dokku setup is open source as well, see https://github.com/upfrontIO/livingdocs-dokku

### Create Dokku instance

To set up the wiring for server, editor and the services, create an instance with:

```
ssh -t dokku@hosted.livingdocs.io lvds:create <name>
```

### Set up the server

Add a git remote in your local server repository:

```
git remote add dokku dokku@hosted.livingdocs.io:<name>-server
```

Create a configuration file for the environment `dokku_<name>`. In case you need to store secrets, add them as environment variables to the instance like follows:

```
ssh -t dokku@hosted.livingdocs.io config:set staging-server auth__secret="" aws__access_key="" aws__secret_key="" pusher__app_id="" pusher__key="" pusher__secret=""
```

Then you are ready to deploy by simply pushing to your remote:

```
git push dokku master
```

The first deployment might fail because grunt setup has not been run. To open a bash on your server instance, run:

```
ssh -t dokku@hosted.livingdocs.io run staging-server /bin/bash
```

Your server is available on http://<name>-server.hosted.livingdocs.io


### Set up the editor

Add a git remote in your local editor repository:

```
git remote add dokku dokku@hosted.livingdocs.io:<name>
```

Create a configuration file for the environment `dokku_<name>`. Point your editor to the server instance you just created.

Then you are ready to deploy by simply pushing to your remote:

```
git push dokku master
```

Your editor is available on http://<name>.hosted.livingdocs.io


### Run arbitrary dokku commands 

If you want to interact with dokku, you can also run commands manually:

```
ssh -t dokku@hosted.livingdocs.io <dokku command> <name>
```

eg.
 
```
ssh -t dokku@hosted.livingdocs.io postgres:expose <name>
```


## Manual, without Dokku

In case you don't want to use Dokku, you can also run the following low level Docker commands to run a livingdocs instance.

### Server

Build the image:
```
docker build -t livingdocs/server .
```

Run the container:
```
docker run --rm -p 9090:9090 -e "db__host=postgres" -e "search__host=http://elasticsearch:9200" -e "ENVIRONMENT=production" -e "NODE_ENV=production" livingdocs/server node index.js```


### Editor

Build the image:
```
docker build -t lve:prod --build-arg RUNBUILD=true --build-arg ENVIRONMENT=local .
```

Run editor container:
```
docker run --rm -p 8080:9000 lve:prod dumb-init nginx
```

The editor is now available under http://localhost:8080
