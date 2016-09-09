# Set an editor and a service-server

## Prerequisites
- [Node.js](./node.md)
- [Docker](./docker.md)

## Install an editor

```bash
git clone git@github.com:upfrontIO/livingdocs-editor.git
cd livingdocs-editor
export EDITOR_PATH=`pwd`
npm install
```

List of the available editors:
- [livigdocs-editor](https://github.com/upfrontIO/livingdocs-service-server)
- [nzz-editor](https://github.com/nzzdev/livingdocs-editor)

## Install a service-server

```bash
git clone git@github.com:upfrontIO/livingdocs-service-server.git
cd livingdocs-service-server
export SERVICE_SERVER_PATH=`pwd`
npm install
```

List of the available service-servers:
- [livingdocs-service-server](https://github.com/upfrontIO/livingdocs-service-server)
- [livingdocs-api aka nzz-api aka li-api](https://github.com/nzzdev/livingdocs-api)
- [Livingdocs-server-boilerplate](https://github.com/upfrontIO/livingdocs-server-boilerplate)

## Initial service-server setup

During this setup, you will be ask to:
- enter an email
- enter a password
- choose a design from a list (the latest Timeline design is a good default)
- set a name for the project

```bash
cd $SERVICE_SERVER_PATH
grunt setup
```

## Start up

```bash
cd $SERVICE_SERVER_PATH
export ENVIRONMENT=local && npm start
```

```bash
cd $EDITOR_PATH
export ENVIRONMENT=local && npm start
```

Go to http://localhost:9000 and login with the credentials you created during the initial-setup.
