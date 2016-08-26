# Livingdocs Server

## Dependencies

### NVM

- Use [nvm](https://github.com/creationix/nvm) to be able to work with different node versions
- The `.nvmrc` file tells nvm which node version is required

In the project folder run:
```bash
# Install the node version required by the project
nvm install

# Use this node version in this folder (you can set a default
# node version in nvm but otherwise you will have to run this
# in every new shell session)
nvm use
```

### Npm version

At this time, node ships with npm v2, you might to manually install a v3 version:

```
npm install -g npm@^3.5
```

### Global packages

You can use `npm install -g` for installing global packages needed, such as `grunt-cli`.


## Docker

To use the livingdocs server you need to have [Docker](https://www.docker.com/) and [docker-compose](https://www.docker.com/products/docker-compose) installed.

To expose the IP of the docker virtualbox (on a mac) add these lines
to your `~/.profile` file:
```bash
# Initialize docker with the 'default' environment
eval "$(docker-machine env default)"

# Export IP address of docker 'default'
export DOCKER_IP=$(docker-machine ip default)
```

`npm run start` starts the server on your local machine and watches your project directory for changes. It also boots the required services (like PostgreSQL and Elasticsearch) in docker containers. Your server instance is available at: http://$DOCKER_IP:9090

To stop the servers docker containers, use `npm run stop`. Run the tests with `npm run test`.


## Installation

### Initial setup

- Run `grunt setup` locally, which will guide you through the installation steps and set up the database.


### Configuration

The default configuration for the environment `local` works out of the box with the docker containers shipped with the server, if docker is running on localhost. On OSX, you might have to tweak the hosts for PostfreSQL and Elasticsearch.

There is a global configuration in `conf/environments/all`, that you can override with environment-specific values in `conf/environments/{environment}.coffee`. These files should not contain credentials, they are under source control. If you want to have store secrets or have local overrides, do so in `conf/secrets/{environment}.coffee`.

The environment derives from the environment variable `ENVIRONMENT`.


## Migration
- Run `./db/migrate.js up`
- Execute `./db/migrate.js` for more informations


## Grunt tasks at your disposal
```bash
setup # Alias for "database-create", "migration-up", "user-local-create" tasks.
database-create # Create a database
database-drop # Drop a database

# User tasks that use the models directly
user-local-create # Create a user
user-local-edit # Edit a user
user-local-project # Set a project of a user

# User tasks using the rest api (needs a server running)
user-authenticate # Create an access token for a specific user
user-create # Create a user in the api
user-edit # Edit a user in the api
user-password # Set a password of a user
user-project # Set a project of a user

# Channel tasks
channel-create # create channels

# List tasks using the rest api (needs a server running)
list # Select one of the below list tasks
list-create # Create a new list
list-edit # Select and edit an existing list
list-delete # Select and remove an existing list

# create (or re-create) elastic indices
search-index:publication # Creates an index for publications (add :reset to re-create)
search-index:document # Creates an index for documents (add :reset to re-create)

# Tests
test # Run all the tests

unit # Run the unit tests
unit:watch

integration # Run the integration tests
integration:watch

# Release
release # Create a new release

# Elastic (Experimental)
start-servers # Starts ElasticSearch with docker
```

## Troubleshooting

#### Problems with Elasticsearch mappings

If no mappings exist yet run

```
grunt search-index:document
grunt search-index:publication
```

If mappings are outdated run

```
grunt search-index:document:reset
grunt search-index:publication:reset
```


## Copyright

Copyright (c) 2015 Livingdocs AG, all rights reserved

It is not permitted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this Software ('livingdocs-server'), except when explicitly stated otherwise by Livingdocs AG.



[1]: http://howtonode.org/introduction-to-npm "NPM introduction"
[2]: https://github.com/sindresorhus/guides/blob/master/set-environment-variables.md "ENV Variable Configuration"
