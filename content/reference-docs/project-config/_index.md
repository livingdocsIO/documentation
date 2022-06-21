---
title: Project Config
description: ContentTypes, integrations, editor settings and other project specific configurations.
icon: cog
renderSummaries: false
weight: 2
menus:
  reference-docs:
    weight: 2
---


## Overview

Each project has its own project config which defines `contentTypes`, integrations, editor settings and other project specific configurations.

The project config is stored in the database and has a history. It can be updated at runtime.

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
  externalSystems: [{...}],
  notifications: {...},
  import: {...},
  export: {...}
}
```
