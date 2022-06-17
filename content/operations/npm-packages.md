---
title: NPM Packages
hideSectionTeaser: true
---

## Livingdocs npm packages

The Livingdocs core is distributed via private npm packages.
As a customer, you can get a token to access them and install them in your custom projects:

```
@livingdocs/framework
@livingdocs/server
@livingdocs/editor
```

## Boilerplate projects

We provide boilerplate projects that you can copy for your own customization project.
They contain the minimal setup along with a Docker setup to get you started quickly.

- Example server: https://github.com/livingdocsIO/livingdocs-editor-boilerplate
- Example editor: https://github.com/livingdocsIO/livingdocs-server-boilerplate
- Example design: https://github.com/livingdocsIO/livingdocs-design-timeline


## Core APIs

Both the core server and the editor npm package expose an API when required

- [Editor core API]({{< ref "/reference-docs/editor-extensions/editor-api" >}})
- [Server core API]({{< ref "/reference-docs/server-extensions/data-source-api" >}})
