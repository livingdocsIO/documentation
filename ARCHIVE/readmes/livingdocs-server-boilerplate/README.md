# Livingdocs Server boilerplate

Boilerplate setup for a Livingdocs customizing project.

## Local setup

Livingdocs supports setups for Linux and Mac OS. Windows is currently not supported.

### Node.JS

Livingdocs expects Node version 4 and up and NPM version 3 and up. In order to install those you can use NVM.

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

#### Npm version

At this time, node ships with npm v2, you might to manually install a v3 version:

```
npm install -g npm@^3.5
```

#### Grunt

In order to setup the system you will need `grunt`. Install it by running:
```
npm install -g grunt-cli
```

### Docker

The supported way to install the necessary Livingdocs dependenices is docker.

Use [docker](https://www.docker.com/) to setup postgres and elasticsearch.
(installation instructions for [Mac](https://docs.docker.com/installation/mac/)
or [Linux](https://docs.docker.com/installation/ubuntulinux/))

To expose the IP of the docker virtualbox (on a mac) add these lines to your `~/.profile` file:
```bash
# Initialize docker with the 'default' environment
eval "$(docker-machine env default)"

# Export IP address of docker 'default'
export DOCKER_IP=$(docker-machine ip default)
```

Once you run `npm run start` to start Livingdocs the required docker containers for elasticsearch and postgres will be automatically created.


#### Docker Troubleshooting

- `Error checking TLS connection: Host is not running`

This means your docker machine is not running. Try `docker-machine start default`

- Can not connect to postgres

This probably means that your postgres container is not running. Try running `docker ps -a` to see all containers and look out for the postgres container.

If it is not started you can do so manually with `docker start postgres` (provided the name of the container is 'postgres').

If you don't have any containers for postgres (and elastic), you can create them manually with:

```bash
# Initialize containers
docker run --name elasticsearch -p 9200:9200 -p 9300:9300 livingdocs/elasticsearch
docker run --name postgres -e POSTGRES_USER=postgres -p 5432:5432 livingdocs/postgres

# Once initialized docker containers can be started using:
docker start elasticsearch
docker start postgres

# docker container status can be checked via:
docker ps -a
```

- My database is empty, although `grunt setup` worked fine

This means you are probably connected to the wrong postgres container. Get the names of all postgres containers through `docker ps -a` and stop them all with `docker stop <name>`. Then run `npm run start` again, which should bring up the correct container. (The same might happen for the elasticsearch container)


### Livingdocs

- Install all required packages: `npm install` [:mag:][1]
- Set your `ENVIRONMENT` environment variable (e.g. `export ENVIRONMENT=local`) [:mag:][2]
- Run `grunt setup`. This will:
  - Create the database. If you need a password for the database, you have to set that manually in the config.
  - Run the migrations `grunt migrate`
  - Create a user in the database. (only if you don't use a password in the database)

If your database is password-protected, you have to enter the password in the configuration file and run the tasks manually.

### Configuration

The configurations for the different environments are defined in
`conf/environments`. This boilerplate defines an `all.coffee` which applies to all environments. Specific environments such as `local` can overwrite values in `all`.

The `all.coffee` files contains comments with the word "CUSTOMIZE". These are the entires for which you should provide your own values in order to run Livingdocs. Currently, the boilerplate uses running evaluation services for all required config entries. Those services are usage limited though, so don't use them for any productive use case.

Of course you will at some point want to have your own environments. You can then simply create new environment files for these environments, e.g. `staging.coffee` and overwrite values as needed, e.g. for a staging server.

Secret local configurations like the local database user and aws credentials should not be pushed to Github. Livingdocs allows you to define those in a secrets file named after the environment in `conf/secrets`.

Example secret files needed for a 'local' environment:
```
conf/environments/local.coffee
conf/secrets/local.coffee
```

### Running the app

The environment depends on the `ENVIRONMENT` variable. You can manually set it or add it to your bashrc file. Then, run the following common npm commands:
```
export ENVIRONMENT=staging
npm run start
npm run watch
```

## The editor

Once you have your local server running you can point a Livingdocs editor at it. The boilerplate server assumes you are working with the boilerplate editor. Go to the [README of the boilerplate editor](https://github.com/upfrontIO/livingdocs-editor-boilerplate) to get your editor working.
