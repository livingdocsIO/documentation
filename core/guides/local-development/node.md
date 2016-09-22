# Node setup

## Prerequisites

- nvm

  https://github.com/creationix/nvm#install-script

- jq

  - OSX
  ```bash
  brew install jq
  ```

  - Ubuntu
  ```bash
  sudo apt-get install jq
  ```

  https://stedolan.github.io/jq/download/

## Install node and npm

```bash
git clone git@github.com:upfrontIO/livingdocs-server.git
cd livingdocs-server
nvm install "$(jq -r '.engines.node' package.json)"
npm install -g npm@"$(jq -r '.engines.npm' package.json)"
nvm alias default $(node -v)
```
