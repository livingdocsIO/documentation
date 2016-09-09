# Set an editor only

## Prerequisites
- [Node.js](./node.md)
- [Docker](./docker.md)

## Install the editor

```bash
git clone git@github.com:upfrontIO/livingdocs-editor.git
cd livingdocs-editor
npm install
```

List of the available editors:
- [livindocs-editor](https://github.com/upfrontIO/livingdocs-service-server)
- [nzz-editor](https://github.com/nzzdev/livingdocs-editor)

## Start up

Depending on your editor choice, choose one from the following:

- For the livingdocs-editor:
```bash
export ENVIRONMENT=dokku_staging && npm start
```

- For the nzz-editor:
```bash
export ENVIRONMENT=staging && npm start
```

Ask for credentials of the `staging` or the `dokku_staging` server according to your previous choice.

Go to http://localhost:9000 and login with the credentials you just get.

