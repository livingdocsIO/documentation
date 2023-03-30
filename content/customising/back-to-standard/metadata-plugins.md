---
title: Custom Metadata Plugins
description:
weight: 1
menus:
  customising:
    parent: Back to Standard
    weight: 1
---

## Migrate Custom Plugins -> Core Plugins

Most custom metadata plugins can be migrated to [core plugins]({{< ref "reference/document/metadata/metadata-plugin-list#overview">}}). The core plugins are constantly improved and new ones will be added.

Some thoughts/inputs for a migration:
- The storage format for Metadata fields should have only one level. Then it's easier to switch to core plugins and your deliveries are simpler too. E.g. having `metadata: {seoTitle, seoDescription}` is simpler to handle than `metadata: {seo: {title, description}}`.
- When the storage data type of the custom plugin and the core plugin is the same, a migration is easy, you can just update the Project Config and replace the downstream `my-custom-text` with `li-text`
- When you have some validation in your plugin (e.g. reject on publish), you can replace that part with a [PreparePublishHook]({{< ref "/customising/server/server-hooks" >}})
- When you copy metadata you can replace that part with a [PreparePublishHook]({{< ref "/customising/server/server-hooks" >}})
- Use a [Data Source]({{< ref "/customising/server/data-source-api" >}}) and a plugin which supports Data Sources when you load list of items, e.g.
  - editor -> remote host
  - editor -> custom server endpoint -> remote host
- When having different storage formats between the downstream plugin and the core plugins to be replaced, you need to write a [Data Migration]({{< ref "/guides/documents/document-design/data-migrations" >}}). Please also consider that deliveries must support both formats until the migration is done.
- `Date` fields can probably be replaced with [Publish Control]({{< ref "/guides/editor/publish-control" >}})


### Migrate Custom Plugins -> Vue Plugins

Always consider a migration to a core plugin first. If that is not possible (after you spoke with us) another option is to write a custom plugin with Vue - See a [Vue guide]({{< ref "/guides/documents/metadata/metadata-examples">}}).
