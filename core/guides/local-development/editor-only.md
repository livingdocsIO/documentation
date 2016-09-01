# Use editor only

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

## Start up

Depending on your editor choice, choose one from the following:

- For li-editor:
```bash
export ENVIRONMENT=dokku_staging && npm start
```

- For nzz-editor:
```bash
export ENVIRONMENT=staging && npm start
```

Ask for credentials of the `staging` or `dokku_staging` server according to your previous choice.

Go to http://localhost:9000 and login with the credentials you just get.

## Annex

### Available editors

- [li-editor](https://github.com/upfrontIO/livingdocs-service-server)
- [nzz-editor](https://github.com/nzzdev/livingdocs-editor)

# TODO
- Is it possible to have the same name for the staging server ?
