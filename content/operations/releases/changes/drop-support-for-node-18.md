---
type: release-note-change
title: Drop support for Node.js 18

change:
  release: release-2025-01
  section: Operations
  service: editor/server
  change: breaking
---

- Drop Node.js `v18`. Only Node.js `v20.18.1` and newer are supported.

How to migrate your project to Node.js 22:

- Change the content of the `.nvmrc` in your project root to `22`
- Change the `engines.node` declaration in the `package.json` to `>=22`
- Change the `Dockerfile` of the server to `livingdocs/server-base:22`
- Change the `Dockerfile` of the editor to `livingdocs/editor-base:22`

Server PR: [Drop support for Node.js 18](https://github.com/livingdocsIO/livingdocs-server/pull/7486)
Editor PR: [Drop support for Node.js 18](https://github.com/livingdocsIO/livingdocs-editor/pull/9276)
