# Set an editor and a service-server

## Prerequisites
- [Node.js](./node.md)
- [Docker](./docker.md)

## Install the editor

```bash
git clone git@github.com:upfrontIO/livingdocs-editor.git li-editor
cd li-editor
npm install
```

[List of available editors](#available-editor-flavors)

## Install the service-server

```bash
git clone git@github.com:upfrontIO/livingdocs-service-server.git
cd livingdocs-service-server
npm install
```

[List of available service-servers](#available-service-server-flavors)

## Initial setup

During this setup, you will be ask:
- enter an email
- enter a password
- choose a design from a list (the latest Timeline design is a good default)
- set a name for the project

```bash
cd path-to-your-freshly-installed-service-server
grunt setup
```

## Start up

```bash
cd path-to-your-freshly-installed-service-server
grunt setup
export ENVIRONMENT=local && npm start
```

```bash
cd path-to-your-freshly-installed-editor
export ENVIRONMENT=local && npm start
```

Go to http://localhost:9000 and login with the credentials you created during the [initial setup](#initial-setup).

## Annex

### Available editors

- [li-editor](https://github.com/upfrontIO/livingdocs-service-server)
- [nzz-editor](https://github.com/nzzdev/livingdocs-editor)

### Available service-servers

- [livingdocs-service-server](https://github.com/upfrontIO/livingdocs-service-server)
- [livingdocs-api aka nzz-api aka li-api](https://github.com/nzzdev/livingdocs-api)
- [Livingdocs-server-boilerplate](https://github.com/upfrontIO/livingdocs-server-boilerplate)
