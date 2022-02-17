---
title: Configure Editor/Server HTTP Port
description: Configure ports to allow to start multiple projects in parallel
weight: 4
---

## Goal

This guide shows you how to change the port of the editor/server. One reason to do that is to start multiple editor/server in parallel which makes development with multiple projects easier.

## Steps to Change Editor/Server Port

We want to run the editor on port `9002` and the server on port `9092`. Tip: If you have multiple projects I would always set a consistent server/editor port, e.g. `9002/9092` & `9003/9093` and so on.

### 1) Change Config on the Editor

```js
// editor/config/user_specific/local.js
'use strict'
module.exports = {
  // the editor runs on port 9002
  port: 9002,

  // these are necessary changes to point to the server on port 9092
  api: {
    proxiedHost: 'http://localhost:9092'
  },
  imagesApi: {
    host: 'http://localhost:9092'
  },
  embeds: {
    list: {
      renderEndpoint: 'http://localhost:9092/rendering/list'
    }
  }
}
```

### 2) Change Config on the Server

```js
// server/conf/secrets/local.js
'use strict'
module.exports = {
  // the server runs on port 9092
  server: {
    port: 9092
  },

  editor: {
    public_host: 'http://localhost:9002'
  }

}
```

### 3) Start Server/Editor

Now you just have to check if the server/editor runs on the expected port 9002/9092. You can now do the same with other Livingdocs projects running on other ports.