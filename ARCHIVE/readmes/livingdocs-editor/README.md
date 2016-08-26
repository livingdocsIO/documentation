# Livingdocs-Editor


## Docker

To use the livingdocs editor you need to have [Docker](https://www.docker.com/) and [docker-compose](https://www.docker.com/products/docker-compose) installed.

To expose the IP of the docker virtualbox (on a mac) add these lines
to your `~/.profile` file:
```bash
# Initialize docker with the 'default' environment
eval "$(docker-machine env default)"

# Export IP address of docker 'default'
export DOCKER_IP=$(docker-machine ip default)
```

Run `npm run start`. This starts the editor and watches your project directory for changes. Your editor instance is available under: http://$DOCKER_IP:9000

To stop the servers docker container, use `npm run stop`.
Run the tests with `npm run test`.



## Designs

The designs are fetched from the [livingdocs server](https://github.com/upfrontIO/livingdocs-server). You can also work locally with designs. To do this first place your design folder into the folder `app/components` and prepend the name with `livingdocs-design-` so for example `livingdocs-design-bootstrap`. We advise using npm link for this, but you can use anything you like. If you don't have a design yet, you can create your own building upon our [boilerplate setup](https://github.com/upfrontIO/livingdocs-design-boilerplate).

Once you have your design in `app/components` you can activate it locally by changing `config/environment/all.coffee` (or for a specific environment, e.g., local). Change the `designRepository` setting from `remote` to:
```
  '<your-design-name>': 'base://components/<path-to-design.json-of-your-design>'
```

When deploying your project you should switch back to the remote repository. Read the documentation for the [livingdocs design manager](https://github.com/upfrontIO/livingdocs-design-manager) to learn how to publish a remote design.

## Launch the editor

First you'll need a running livingdocs server instance. That server can be anywhere you have access to. Then you can start the editor using an environment defined in /conf/environments.

E.g.: To start the editor with the staging server, you can use:

```
export ENVIRONMENT=dokku_staging && npm start
```


## Hosting

We deploy to our private Dokku service. Also have a look at the [general Dokku deployment notes](https://github.com/upfrontIO/livingdocs/blob/master/deployment/docker.md) and learn how to interact with the servers.


### Deployment

#### Staging

Available at https://staging.hosted.livingdocs.io

```
git remote add staging dokku@hosted.livingdocs.io:staging
git push staging <branch>:master
```

#### Production

Available at https://production.hosted.livingdocs.io

```
git remote add production dokku@hosted.livingdocs.io:production
git push staging <branch>:master
```


## Copyright

Copyright (c) 2015 Livingdocs AG, all rights reserved

It is not permitted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this Software ('livingdocs-editor'), except when explicitly stated otherwise by Livingdocs AG.
