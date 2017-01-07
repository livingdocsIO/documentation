# Set an editor only

## Install the editor

```bash
git clone git@github.com:upfrontIO/livingdocs-editor.git
cd livingdocs-editor
npm install
```

List of the available editors:
- [Livingdocs core editor](https://github.com/upfrontIO/livingdocs-editor)
- [nzz editor](https://github.com/nzzdev/livingdocs-editor)

## Start up

In this configuration, the editor needs a remote staging server.

For example:
```bash
export ENVIRONMENT=<your staging environment>
```
Then start the editor:
```bash
npm start
```

Now, just use the credentials of your staging server to login at: http://localhost:9000.
