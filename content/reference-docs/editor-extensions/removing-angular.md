---
title: Removing Angular
description: Support for Angular is going to be dropped, these are some strategies to migrate.
weight: 5
menus:
  reference-docs:
    parent: Editor Extensions
---

## Description

Until now you could have editor extension both in Vue and Angular. Starting from `release-2023-01` we have decided to deprecate the support to Angular extensions to focus on core and Vue components. 

**The support to Angular plugins will be dropped from `release-2023-09`**

Migrating from AngularJS to Vue can be a complex process, especially if you have a lot of downstream custom plugins. 

That's we want to leave you enough time to make the transition, but it's important to discuss it together to overcome any blocking points.

Here is a overview to help you migrate your custom plugins to core features, and if that is not possible, to Vue plugins.


### Metadata Plugins

#### Migrate Custom Plugins to Core Plugins

The majority of custom plugins can now be migrated to core plugins, which are already built into the Livingdocs platform and easier to maintain and update. These are constantly improved and new ones have been added through the years. 

You can find the updated list of core plugins here: https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#overview

If you think that you use case is missing, discuss it with your Customer Solution Manager. 

#### Migrate Custom Plugins to Vue Plugins

Migrate to Vue Plugin: If migrating to a core plugin is not possible, consider migrating to a Vue plugin. This may be necessary if your Customer Solution Manager thinks it is a good idea. When migrating to a Vue plugin, make sure to follow the guidelines outlined in the Livingdocs documentation: https://docs.livingdocs.io/reference-docs/editor-extensions/vue-component-registry/#metadataplugin

If not possible migrate to Vue Plugin it may be necessary an Implementation Partnership.

### Include UI and Sidebar Form

...
Move to ParamsSchema
Another important step in migrating to Vue is to move to params-schema. Params-schema allows you to specify the types of input that your plugin can accept, making it easier to validate and process user input.
...

### Dashboard Card and Cells

In `release-2023-05`we introduced Table Dashboards, a more powerful and customisable dashboard. If you have not migrate done it already, you should migrate your dashboard to table dashboards.
Table dashboard makes very easy to add any metadata to the table columns and also edit them.
Dashboard Cells [TODO link] can still be customised using Vue components.
If some information are missing from your Dashboard Cell, discuss it with your Customer Manager and consider an Implementation Partnership.

### Filters

...
Make sure to migrate any filters that are being used in the AngularJS code.
TODO
...

### liDocumentListCardExtension

??

In general, migrating from AngularJS to Vue requires careful planning and execution. By following the guidelines outlined in this guide, you can make the migration process as smooth and successful as possible.
