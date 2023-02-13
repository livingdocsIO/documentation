---
title: Includes
description:
weight: 3
menus:
  customising:
    parent: Back to Standard
    weight: 3
---

## Include Options at the Sidebar

If you have one of the Sidebar Components `angular-modal` or `angular-component` you have to replace them.

- 1) The best option is to use a [ParamsSchema]({{< ref "/customising/server/include-functions#generated-sidebar" >}}) to generate the Include options at the sidebar. The declaration is similar to [Metadata Plugins]({{< ref "reference/document/metadata/metadata-plugin-list#overview">}}).
- 2) In case `ParamsSchema` does not provide enough flexibility (and we can't build an extension for you) you can use a [Vue Component]({{< ref "/reference/document/includes/editor-customization#custom-include-user-interface-with-vue" >}})
