# Node setup

## Prerequisites

- nvm
  ```bash
  wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
  ```

  https://github.com/creationix/nvm

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

****

# TODO
- jq part seems overkill, at least let's have a dedicated repo for node and npm version ?
