---
title: Project Config
renderSummaries: false
weight: 2
menus:
  reference-docs:
    weight: 2
---


## Overview

Each project has its own project config which defines `contentTypes`, integrations, editor settings and other project specific configurations.

The project config is stored in the database and has a history. It can be updated at runtime.

The project config has wide UI support. Basically the whole section "Project Setup" in the Livingdocs Main Navigation allows setting parts of the Project config via UI options. The parts that have UI support are marked in the documentation.

## Top-Level properties

The project config is a JSON file with many top-level properties to organize the configuration. Some top-level properties are an object like e.g. `editorSettings` while others are arrays like e.g. the `contentTypes`.

Here is an overview of the top level properties. You can find detailed documentation for each by selecting them:
```js
{
  v: 2,
  settings: {...},
  contentTypes: [{...}, {...}],
  mediaTypes: [{...}, {...}],
  editorSettings: {...},
  categories: [{...}, {...}],
  components: [{...}, {...}],
  designSettings: {...},
  deliveries: [{...}, {...}],
  notifications: {...},
  import: {...},
  export: {...}
}
```
