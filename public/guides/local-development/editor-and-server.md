# Set an editor and server

This descriptions assumes working with the boilerplate editor and server. If you are working on a different project (customization or core), see the list at the end of each section.

## Prerequisites
- [Node.js](./node.md)
- [Docker](./docker.md)

## Install the boilerplate editor

```bash
git clone git@github.com:upfrontIO/livingdocs-editor-boilerplate.git
cd livingdocs-editor-boilerplate
export EDITOR_PATH=`pwd`
npm install
```

List of the available editors:
- [livigdocs core editor](https://github.com/upfrontIO/livingdocs-editor)
- [livingdocs beta editor](https://github.com/upfrontIO/livingdocs-service-editor)
- [nzz editor](https://github.com/nzzdev/livingdocs-editor)

## Install the boilerplate server

```bash
git clone git@github.com:upfrontIO/livingdocs-server-boilerplate.git
cd livingdocs-server-boilerplate
export SERVER_PATH=`pwd`
npm install
```

List of the available servers:
- [livingdocs core server](https://github.com/upfrontIO/livingdocs-server)
- [livingdocs beta server](https://github.com/upfrontIO/livingdocs-service-server)
- [nzz server](https://github.com/nzzdev/livingdocs-api)

## Initial service-server setup

During this setup, you will be ask to:
- enter an email
- enter a password
- choose a design from a list (the latest Timeline design is a good default)
- set a name for the project

```bash
cd $SERVER_PATH
grunt setup
```

## Start up

```bash
cd $SERVER_PATH
export ENVIRONMENT=local && node index.js
```

```bash
cd $EDITOR_PATH
export ENVIRONMENT=local && npm start
```

Go to http://localhost:9000 and login with the credentials you created during the initial-setup.
