---
title: Removing Angular
description: Support for Angular is going to be dropped, these are some strategies to migrate.
weight: 5
menus:
  customising:
    parent: Editor Extensions
---

Until now you could have editor extension both in Vue and Angular. Starting from `release-2023-01` we have decided to deprecate the support to Angular extensions to focus on core and Vue components.

Moving to core features will result in a better developer experience: less code on your side. Which also means: less bugs, less maintenance and easier updates.


**The support to Angular plugins will be dropped from `release-2023-09`**

Migrating away from AngularJS can be a complex process, especially if you have a lot of downstream custom plugins.

That's why we want to leave you enough time to make the transition, but it's important to discuss it together beforehand to overcome any blocking points.

Here is a overview to help you migrate your custom plugins to core features, and if that is not possible, to Vue plugins.


## Metadata Plugins

### Migrate Custom Plugins to Core Plugins

The majority of custom plugins can now be migrated to core plugins, which are already built into the Livingdocs platform and easier to maintain and update. These are constantly improved and new ones have been added through the years.

You can find the updated [list of core plugins here]({{< ref "reference/document/metadata/metadata-plugin-list#overview">}}).

If you think that your use case is missing, discuss it with your Customer Solution Manager.

### Migrate Custom Plugins to Vue Plugins

If migrating to a core plugin is not possible, consider migrating to a Vue plugin. This may be necessary if your Customer Solution Manager thinks it is a good idea. When migrating to a Vue plugin, make sure to follow the guidelines outlined in the Livingdocs documentation:

[Create your own metadata plugin with Vue]({{< ref "/guides/documents/metadata/metadata-examples">}})

If not possible migrate to a Vue plugin it may be necessary an Implementation Partnership.



## Include UI and Sidebar Forms

Before, you could use AngularJS to render the UI for your includes. Now, you can use ParamsSchema or Vue.

### Custom Include UI with ParamsSchema

This is the most simple way to render a UI for the include. It doesn’t need any code in the editor.

[See here]({{< ref "/customising/server/include-functions#generated-sidebar" >}}) for an example.

Params-schema allows you to specify the types of input that your plugin can accept, making it easier to validate and process user input.

### Custom Include UI with Vue

In case you need a more complex UI and logic, you can use a Vue component to render the UI.

[See here]({{< ref "/reference/document/includes/editor-customization#custom-include-user-interface-with-vue" >}}) for an example.

## Dashboard Card and Cells

In `release-2022-05`we introduced [Table Dashboards]({{< ref "/reference/project-config/editor-settings#example-table-dashboard">}}), a more powerful and customisable dashboard. If you have not migrate done it already, you should migrate your dashboard to Table Dashboards.
Table Dashboard makes very easy to add any metadata to the table columns and also edit them.

Dashboard Cells can still be customised using Vue components. Custom components
Custom components of type [tableDashboardCell]({{< ref "/customising/advanced/editor/vue-component-registry#tabledashboardcell">}}) can be used to render custom content inside a table cell.
If some information are missing from your Dashboard Cell, discuss it with your Customer Manager and consider an Implementation Partnership.

## Filters

It is possible to register a custom filter and use it as a [displayFilter]({{< ref "/customising/advanced/editor-configuration/display-filter.md" >}}) for dashboards or search modals.

At the moment there are 2 types of custom filters
- [Custom List v2 Filter]({{< ref "guides/editor/custom-dashboard-filters#custom-list-v2-filter">}})
- [Custom Vue Component Filter]({{< ref "guides/editor/custom-dashboard-filters#custom-vue-component-filter">}})

Make sure to migrate all your custom Angular filters.


In general, migrating from AngularJS plugins to core plugins requires careful planning. By following the guidelines outlined in this guide, you can make the migration process as smooth and successful as possible.

If you have any questions, please contact us.
