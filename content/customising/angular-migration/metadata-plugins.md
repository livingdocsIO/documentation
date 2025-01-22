---
title: Custom Metadata Plugins
description:
weight: 1
menus:
  customising:
    parent: Angular Migration
    weight: 1
---

## Migrate Custom Plugins -> Core Plugins

Most custom metadata plugins can be migrated to [core plugins]({{< ref "reference/document/metadata/plugins">}}). The core plugins are constantly improved and new ones will be added.

Some thoughts/inputs for a migration:

- The storage format for Metadata fields should have only one level. Then it's easier to switch to core plugins and your deliveries are simpler too. E.g. having `metadata: {seoTitle, seoDescription}` is simpler to handle than `metadata: {seo: {title, description}}`.
- When the storage data type of the custom plugin and the core plugin is the same, a migration is easy, you can just update the Project Config and replace the downstream `my-custom-text` with `li-text`
- When you have some validation in your plugin (e.g. reject on publish), you can replace that part with a [PreparePublishHook]({{< ref "/customising/server/server-hooks" >}})
- When you copy metadata you can replace that part with a [PreparePublishHook]({{< ref "/customising/server/server-hooks" >}})
- Use a plugin which supports Data Sources when you load list of items, e.g.
  - editor -> remote host
  - editor -> custom server endpoint -> remote host
- When having different storage formats between the downstream plugin and the core plugins to be replaced, you need to write a [Data Migration]({{< ref "/guides/documents/document-design/data-migrations" >}}). Please also consider that deliveries must support both formats until the migration is done.
- `Date` fields can probably be replaced with [Publish Control]({{< ref "/guides/editor/publish-control" >}})

### Migrate Custom Plugins -> Vue Plugins

Always consider a migration to a core plugin first (see the strategies above). If that is not possible (after you spoke with us) another option is to write a custom plugin with Vue.

Typical Questions:

- Q: I had a service in the Angular plugin, how to replace?
- A: Integrate the service logic in your Custom Vue Plugin.

References:

- [Vue Metadata Plugin Guide]({{< ref "/guides/documents/metadata/metadata-examples">}})
- [Vue Metadata Plugin API](https://docs.livingdocs.io/customising/advanced/editor/vue-component-registry/#metadataplugin)
