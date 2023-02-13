---
title: Document Lifecycle
description: Learn about the steps each document goes through during its lifecycle.
icon: recycle
weight: 5
menus:
  customising:
    parent: Server Extensions
    weight: 5
---

Each document goes through a series of steps during `Document Creation`, `Document Update` and `Document Publication`. It gathers the parameters, does validation, calls hooks and finally stores and indexes the document. Along the way, it also runs functions called hooks, giving developers the opportunity to add their own code at specific stages.
