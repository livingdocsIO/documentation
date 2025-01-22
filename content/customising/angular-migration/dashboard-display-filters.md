---
title: Dashboard Display Filters
description:
weight: 2
menus:
  customising:
    parent: Angular Migration
    weight: 2
---

Currently Dashboard Display Filters do not have that much core support as Metadata Plugins, but there is different strategies for an Angular migration:

1. The best option is to replace your Angular filter with one of the core filters [Named Filter or Metadata Filter]({{< ref "/customising/advanced/editor-configuration/display-filter" >}})
2. The second best option is to replace it with a [Custom List V2 Filter]({{< ref "/guides/editor/custom-dashboard-filters" >}})
3. The least proposed solution is to create a [Custom Vue Component Filter]({{< ref "guides/editor/custom-dashboard-filters">}})
