---
type: release-note-change
title: Dashboard type `dashboard`

change:
  release: release-2025-01
  section: Dashboards
  service: server
  change: breaking
---

Support for dashboards of type `dashboard` has been removed. Please migrate your dashboards of type `dashboard` to dashboards of type `tableDashboard`.

Server PR: [Dashboard type `dashboard`](https://github.com/livingdocsIO/livingdocs-server/pull/7433)  
Editor PR: [Dashboard type `dashboard`](https://github.com/livingdocsIO/livingdocs-editor/pull/9162)
