# Getting started with livingdocs

Both the server and the editor ship with a default configuration, that works out of the box with the Dockerfiles we provide. 

## Install Docker

Install the docker engine to use our 
https://docs.docker.com/engine/getstarted/step_one/

## Node setup

### nvm

Node Version Manager is a simple bash script to manage multiple active node.js versions

https://github.com/creationix/nvm#install-script

### jq

jq is a lightweight and flexible command-line JSON processor

https://stedolan.github.io/jq/download/

## Install node and npm

If the project requires a specific node or npm version, it is stated in the `package.json`. You can install the required versions by running   

```bash
nvm install "$(jq -r '.engines.node' package.json)"
nvm alias default $(node -v)
```

## Install npm dependencies

```bash
npm install -g npm@"$(jq -r '.engines.npm' package.json)"
```

## Set environment

Permanently set `ENVIRONMENT=local` by adding the following line to your `~/.zhsrc` or `~/.bashrc`
```bash
export ENVIRONMENT=local
```
