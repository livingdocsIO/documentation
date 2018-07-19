# Docker deployment

## With Dokku

We provide a docker setup for both local development and production deployments. Our Dokku setup is open source as well, see https://github.com/livingdocsIO/livingdocs-dokku

### Requirements

Currently, the following files need to be copied from upstream:

- Dockerfile
- CHECKS file
- bin/dumb-init
- nginx.conf.sigil

### Naming conventions

Use a single word. Do not use underscores (it will not properly resolve the host names). Dashes work.
If you have multiple environments, append it with a dash to the customer name: `<customer>-<env>`


### Create Dokku instance

To set up the wiring for server, editor and the services, create an instance with:

```sh
ssh -t dokku@dokku.livingdocs.io lvds:create <name>
```

### Set up the server

Add a git remote in your local server repository:

```sh
git remote add <name> dokku@dokku.livingdocs.io:<name>-server
```

Create a configuration file for the environment `dokku_<name>`. In case you need to store secrets, add them as environment variables to the instance like follows:

```sh
ssh -t dokku@dokku.livingdocs.io config:set <name>-server auth__access_token_secret="" aws__access_key="" aws__secret_key="" pusher__app_id="" pusher__key="" pusher__secret=""
```

Then you are ready to deploy by simply pushing to your remote:

```sh
git push <name> localbranch:master
```

The first deployment might fail because grunt setup has not been run. To open a bash on your server instance, run:

```sh
ssh -t dokku@dokku.livingdocs.io run <name>-server /bin/bash
```

Your server is available on `http://<name>-server.hosted.livingdocs.io`


### Set up the editor

Add a git remote in your local editor repository:

```sh
git remote add <name> dokku@dokku.livingdocs.io:<name>
```

Create a configuration file for the environment `dokku_<name>`. Point your editor to the server instance you just created.

Then you are ready to deploy by simply pushing to your remote:

```sh
git push <name> master
```

Your editor is available on `http://<name>.hosted.livingdocs.io`

### Custom domains

```sh
ssh -t dokku@dokku.livingdocs.io domains:add <name> domain.io
ssh -t dokku@dokku.livingdocs.io domains:add <name>-server domain.io
```

### Letsencrypt SSL

SSL is enabled by default for the `*.hosted.livingdocs.io` domain, but you'll need to re-run this, if you add custom domains.

```sh
ssh -t dokku@dokku.livingdocs.io letsencrypt <name>
ssh -t dokku@dokku.livingdocs.io letsencrypt <name>-server
```


### Run shell commands

Open a bash

```sh
ssh -t dokku@dokku.livingdocs.io run <name> /bin/bash
```

Run a command on the server instance (eg. grunt setup)

```sh
ssh -t dokku@dokku.livingdocs.io run <name> <command>
```

### Run dokku commands

You can run any dokku command by leaving out the `run` from the command.

```sh
ssh -t dokku@dokku.livingdocs.io <dokku command> <name>
```

Inspect the logs

```sh
ssh -t dokku@dokku.livingdocs.io logs <name> -t
```

Work with environment variables

```sh
ssh -t dokku@dokku.livingdocs.io config <name>
ssh -t dokku@dokku.livingdocs.io config:set <name> pusher__key="xyz"
```

Restart the server

```sh
ssh -t dokku@dokku.livingdocs.io ps:restart <name>
```

List all deployed applications

```sh
ssh -t dokku@dokku.livingdocs.io apps
```

### Services

You can run commands against the servers the services are linked to.

#### Elasticsearch

Full list of commands, see https://github.com/dokku/dokku-elasticsearch

#### Postgres

Full list of commands, see https://github.com/dokku/dokku-postgres

#### Database dumps

```sh
ssh -t dokku@dokku.livingdocs.io postgres:export <name> --no-acl --clean --verbose --no-owner -Fc > dump.sql
ssh -t dokku@dokku.livingdocs.io postgres:import <name> --no-acl --clean --verbose --no-owner < dump.sql
```


## Manual, without Dokku

In case you don't want to use Dokku, you can also run the following low level Docker commands to run a livingdocs instance.

### Server

Build the image:
```sh
docker build -t livingdocs/server .
```

Run the container:
```sh
docker run --rm -p 9090:9090 -e "db__host=postgres" -e "search__host=http://elasticsearch:9200" -e "ENVIRONMENT=production" -e "NODE_ENV=production" livingdocs/server node index.js
```

### Editor

Build the image:
```sh
docker build -t lve:prod --build-arg RUNBUILD=true --build-arg ENVIRONMENT=local .
```

Run editor container:
```sh
docker run --rm -p 8080:9000 lve:prod dumb-init nginx
```

The editor is now available on http://localhost:8080
