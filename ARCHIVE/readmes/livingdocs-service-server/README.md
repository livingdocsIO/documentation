# Livingdocs Server

## Pre-Requisites

#### NVM

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

### Development

`npm run start` starts the server on your local machine. Your server instance is available at: http://localhost:9090
Run the tests with `npm run test`.


## Installation

- Install all required packages: `npm install` [:mag:][1]
- Set your `ENVIRONMENT` environment variable (e.g. `export ENVIRONMENT=local`) [:mag:][2]
  Or define an environment using an argument `node index.js --env local`
- Run `grunt setup`. This will:
  - Set up a basic configuration file in `./conf/{environment}.json`
  - Create the database. If you need a password for the database, you have to set that manually in the config.
  - Run the migrations `grunt migrate`
  - Create a user in the database. (only if you don't use a password in the database)

If your database is password-protected, you have to enter the password in the configuration file and run the tasks manually.


## Configuration

The configurations for the different environments are defined in `conf/environments`. Secret configurations like the local database user and aws credentials should be defined in a file named after the environemt in `conf/secrets`. The files in `conf/secrets` won't be submitted to github.

Example files needed for a 'local' environment:
```
conf/environments/local.coffee
conf/secrets/local.coffee
```

Now you can start the app in the local environment:  
`npm start`

If you want to reload the server after every save, you can run:
```
npm run watch
```


## Managing Dependencies

Use shrinkwrap to freeze the dependencies from package.json.

```bash
# Make sure your node_modules folder is up to date
npm install

# Add new libraries and update the package.json file
npm install your-lib@1.0.0 --save

# Create or update the shrinkwrap file (including devDependencies)
npm shrinkwrap --dev
```


## Migration
- Run `grunt migrate`

In order to migrate down a single migration use:
`grunt migration-down --name <filename of migration>`


## Test

- Run `grunt test`
- Run `grunt integration`


## Tasks at your disposal
```bash
setup # Alias for "database-create", "migration-up", "user-local-create" tasks.
database-create # Create a database
database-drop # Drop a database

# Database Migrations
migrate # Alias for "migration-up" task.
migration-up # migrate the database
migration-down # migrate the database

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

# List tasks using the rest api (needs a server running)
list # Select one of the below list tasks
list-create # Create a new list
list-edit #Select and edit an existing list
list-delete # Select and remove an existing list

# create (or re-create) elastic indices
search-index:publication # Creates an index for publications (add :reset to re-create)
search-index:document # Creates an index for documents (add :reset to re-create)
search-index:teaser # Creates an index for teasers (add :reset to re-create)

# Tests
test # Run all the tests
test:watch # Run all the tests and watch for changes

unit # Run the unit tests
unit:watch

integration # Run the integration tests
integration:watch

# Release
release # Create a new release

# Elastic (Experimental)
start-servers # Starts ElasticSearch with docker
```


## Hosting

We deploy to our private Dokku service. Also have a look at the [general Dokku deployment notes](https://github.com/upfrontIO/livingdocs/blob/master/deployment/docker.md) and learn how to interact with the servers.


### Deployment

#### Staging

Available at https://staging-server.hosted.livingdocs.io

```
git remote add staging dokku@hosted.livingdocs.io:staging-server
git push staging <branch>:master
```

#### Production

Available at https://production-server.hosted.livingdocs.io

```
git remote add production dokku@hosted.livingdocs.io:production-server
git push staging <branch>:master
```


## Copyright

Copyright (c) 2015 Livingdocs AG, all rights reserved

It is not permitted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this Software ('livingdocs-beta'), except when explicitly stated otherwise by Livingdocs AG.



[1]: http://howtonode.org/introduction-to-npm "NPM introduction"
[2]: https://github.com/sindresorhus/guides/blob/master/set-environment-variables.md "ENV Variable Configuration"
