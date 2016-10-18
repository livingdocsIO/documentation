# Link local dependencies

There is two Livingdocs dependencies:
- li-server
- li-framework

li-server is a dependency of the service-servers.

li-framework is both a dependency for the editors and the li-server.

When you’re developing locally a dependency, you might want to integration test your local changes in the service-server or in the editor instance.

## Examples

### Link li-server in the service-server

1. Prerequisites

  [editor and service-server](../../../public/guides/local-development/editor-and-server.md)

2. Getting the li-server dependency

  ```bash
  git git@github.com:upfrontIO/livingdocs-server.git
  cd livingdocs-server
  npm install
  npm link
  ```

3. Linking the li-server dependency
  ```bash
  cd $SERVICE_SERVER_PATH
  npm link @livingdocs/server
  ```

4. **When you make changes to the li-server do not forget to restart your customization server**

### Link li-framework in the editor

1. Prerequisite
  one of:
  - [editor and server](../../../public/guides/local-development/editor-and-server.md)
  - [editor only](./editor-only.md)


2. Getting the li-framework dependency

  ```bash
  git git@github.com:upfrontIO/livingdocs-framework.git
  cd livingdocs-framework
  npm install
  npm build
  npm link
  ```

3. Linking the li-framework dependency
  ```bash
  cd $EDITOR_PATH
  npm link @livingdocs/framework
  ```

4. **When you make changes to the framework do not forget to rebuild it with:
`npm run build`**
