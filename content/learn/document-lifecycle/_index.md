---
title: Document Lifecycle
thumb: "lifecycle.png"
weight: 2
menus:
  learn:
    weight: 2


---

Each Document goes through a series of steps during `Document Creation`, `Document Update` and `Document Publication`. It gathers the parameters, does validation, calls hooks and finally stores and indexes the document. Along the way, it also runs functions called hooks, giving developers the opportunity to add their own code at specific stages.