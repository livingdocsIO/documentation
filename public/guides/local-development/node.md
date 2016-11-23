# Node setup

## Prerequisites

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
npm install -g npm@"$(jq -r '.engines.npm' package.json)"
```

## Install npm dependencies

```bash
npm install -g npm@"$(jq -r '.engines.npm' package.json)"
```
