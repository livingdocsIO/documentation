---
title: Media Center
weight: 13
menus:
  reference:
    parent: Project Config
---

{{< added-in "release-2026-03" block >}}

The top-level `mediaCenter` project config property has been added to store any configurations which affect all media types. It includes the [Usage Purposes]({{< ref "#usage-purposes" >}}) and [License Profiles]({{< ref "#license-profiles" >}}) configuration used by the [Usage Log]({{< ref "#usage-log" >}}) feature.

The existing configuration of the Media Library is somewhat fragmented:

- Many configuration properties which affect the Media Center are defined within the individual [Media Types]({{< ref "/reference/project-config/media-types/" >}}).
- Some configurations are stored in [Editor Settings]({{< ref "/reference/project-config/editor-settings/#media-library" >}}), such as [Dashboard Cards]({{< ref "/reference/project-config/editor-settings/#dashboard-cards" >}}) and [Prefilling Behavior]({{< ref "/reference/project-config/editor-settings/#prefilling-behavior" >}}).
- [Dashboards]({{< ref "/reference/project-config/editor-settings/#dashboards" >}}) are configured in the same array as document dashboards. There is also a guide for [Media Library Dashboard Configuration]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}).

The `mediaCenter` project config property can be defined as follows:

```js
mediaCenter: {
  usagePurposes: [
    {
      // internal purpose: records usage automatically on publish
      handle: 'web',
      label: {
        en: 'Web',
        de: 'Web'
      },
      internal: true,
      contentType: ['regular'],
      recordUsageLogEntry: 'recordWebUsage'
    },
    {
      // external purpose: usage happens outside Livingdocs, entries are recorded manually
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
  ],
  licenseProfiles: {
    approvalTaskHandle: 'licenseApproval',
    profiles: [
      {
        handle: 'freelancer',
        label: {en: 'Freelancer', de: 'Freischaffende'},
        color: '#e0b32d',
        approvalRequired: false,
        rules: {
          print: {costClass: 'low', billingMode: 'always'}
        }
      }
    ]
  }
}
```

## Usage Purposes

{{< added-in "release-2026-07" block >}}

`mediaCenter.usagePurposes` defines the named publication contexts (Web, Print, Newsletter, ...) used by the usage log and by license profiles. It replaces `mediaCenter.usageLog.purposes`, which was removed in {{< release "release-2026-07" >}}.

A purpose's `internal`, `contentType` and `recordUsageLogEntry` properties together decide how its entries are created:

- Entries can be added manually in the editor, unless the purpose is `internal`.
- Entries can be recorded automatically when a document is published, if the purpose has a `contentType`.
- Entries can be recorded programmatically through the [`addUsageLogEntriesForMediaInDocument`]({{< ref "/guides/media-library/media-library-setup/#recording-usage-log-entries-programmatically" >}}) server API, at any time.

Each purpose supports:

- `handle` (required): unique handle of the purpose.
- `label` (required): translatable label shown in the UI.
- `internal` (optional): when `true`, users cannot create, update or delete entries for this purpose in the editor. Read-only entries are still shown.
- `contentType` (optional): a content type handle or an array of handles. When a document of one of these content types is published, each referenced media library entry gets a usage log entry for this purpose. A content type may be matched by at most one purpose.
- `recordUsageLogEntry` (optional): handle of a function registered with `liServer.registerRecordUsageLogEntryFunctions()`. It runs on publish for documents whose content type matches this purpose, and sets the entry's state and params. Without it, or when it returns nothing or fails, the entry is recorded as pending.
- `paramsSchema` (optional): metadata-style field definitions recorded with each usage log entry.

## License Profiles

{{< added-in "release-2026-07" block >}}

`mediaCenter.licenseProfiles` defines the license profiles that can be assigned to media library entries and the task used for license approvals. Please see the [License Profiles]({{< ref "/guides/media-library/license-profiles" >}}) guide for the full configuration and behavior.

## Usage Log

{{< added-in "release-2026-03" block >}}

Please see the [Usage Log]({{< ref "/guides/media-library/media-library-setup/#usage-log" >}}) section of the Media Library guide for further information.
