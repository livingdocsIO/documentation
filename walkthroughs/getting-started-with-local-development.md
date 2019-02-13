# Getting started with livingdocs

Both the server and the editor ship with a default configuration, that works out of the box with the Dockerfiles we provide.

## Operating system

Livingdocs runs under Mac OSX, Linux and Windows 10. For Windows 10 proceed first to [setup Windows 10](./setup_windows10)

## Install Docker

Install the docker engine:
https://docs.docker.com/engine/getstarted/step_one/

## Node setup

### nvm

Node Version Manager is a simple bash script to manage multiple active node.js versions

https://github.com/creationix/nvm#install-script

### jq

jq is a lightweight and flexible command-line JSON processor

https://stedolan.github.io/jq/download/

### Install node and npm

If the editor or server require a specific node or npm version, it is stated in the `package.json`. You can install the required versions by running   

```bash
nvm install "$(jq -r '.engines.node' package.json)"
nvm alias default $(node -v)
```

## Set environment

Locally, you might want to permanently set `ENVIRONMENT=local` by adding the following line to your `~/.zhsrc` or `~/.bashrc`
```bash
export ENVIRONMENT=local
```

## Ready to run

Clone the project you want to run and install the npm dependencies

```bash
npm install
```

Livingdocs supports configurations for multiple environments.
For example, you will want a different database configuration for production than when running Livingdocs locally.   

## Config structure

In the configuration folder, you find a global configuration in `environments/all`, that you can override with
environment-specific values in `environments/{environment}.coffee`. These files are checked in to source control and therefore shared with everyone working with the repository.

For local overrides you can use `secrets/{environment}.coffee` in the server and `user_specific/{environment}.coffee` in the editor. These files are not checked in to source control and therefore specific to your local installation.

## Sensitive configuration

According to the [12 factor app methodology](https://12factor.net/config), sensitive data and secrets should not be checked in to source control.
Always reference sensitive configs with environment variables, for example:

```js
db: {
  username: myuser,
  password: process.env.db__password
}
```

## Setting the environment

The environment derives from the environment variable `ENVIRONMENT`.
For example to set the environment to local, run

```bash
export ENVIRONMENT=<your environment>
```

You can set this variable to any value that you have a config for in your `environments folder`.


**Proceed with the instructions in the [editor](https://github.com/livingdocsIO/livingdocs-editor) and [server](https://github.com/livingdocsIO/livingdocs-server)  `README`**
