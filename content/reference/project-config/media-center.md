---
title: Media Center
weight: 13
menus:
  reference:
    parent: Project Config
---

{{< added-in "release-2026-03" block >}}

The top-level `mediaCenter` project config property has been added to store any configurations which affect all media types. At the moment this only includes the [Usage Log]({{< ref "#usage-log" >}}) feature.

The existing configuration of the Media Library is somewhat fragmented:

- Many configuration properties which affect the Media Center are defined within the individual [Media Types]({{< ref "/reference/project-config/media-types/" >}}).
- Some configurations are stored in [Editor Settings]({{< ref "/reference/project-config/editor-settings/#media-library" >}}), such as [Dashboard Cards]({{< ref "/reference/project-config/editor-settings/#dashboard-cards" >}}) and [Prefilling Behavior]({{< ref "/reference/project-config/editor-settings/#prefilling-behavior" >}}).
- [Dashboards]({{< ref "/reference/project-config/editor-settings/#dashboards" >}}) are configured in the same array as document dashboards. There is also a guide for [Media Library Dashboard Configuration]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}).

The `mediaCenter` project config property can be defined as follows:

```js
mediaCenter: {
  usageLog: {
    purposes: [
      {
        handle: 'print',
        label: {
          en: 'Print',
          de: 'Druck'
        },
        paramsSchema: [
          {
            handle: 'page',
            type: 'li-integer',
            ui: {
              label: {
                en: 'Page',
                de: 'Seite'
              }
            }
          }
        ]
      }
    ]
  }
}
```

## Usage Log

{{< added-in "release-2026-03" block >}}

Please see the [Usage Log]({{< ref "/guides/media-library/media-library-setup/#usage-log" >}}) section of the Media Library guide for further information.
