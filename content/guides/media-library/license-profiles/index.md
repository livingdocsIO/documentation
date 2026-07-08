---
title: License Profiles
description: Capture image license terms in structured form, enforce them at publication and record every use for billing.
weight: 4
---

{{< added-in "release-2026-07" block >}}

Images come with rules about how they may be used. The terms are often cryptic or scattered across agency contracts, freelancer agreements and handout conditions, and breaking them exposes a newsroom to legal and financial risk.

**License Profiles** capture a contract's terms in structured form. A profile is attached to a media library entry and enforced by the system. It models two things: which usage purposes an image is allowed in, and whether each of those uses has to be billed. A profile whose terms go beyond what the rules can express is flagged as requiring approval; every image assigned such a profile then needs a human approval before it can be published.

Two building blocks work together:

- **Usage purpose**: a named publication context (Web, Print, Newsletter, ...). A document resolves to exactly one purpose via its content type.
- **License profile**: a color-coded set of rules, one rule per usage purpose. Assigned to a media library entry through the [`li-license-profile`]({{< ref "/reference/document/metadata/plugins/li-license-profile" >}}) metadata plugin.

The feature is opt-in. It only activates for media types that have the `li-license-profile` metadata plugin configured, and only when profiles are present in the project config. Existing setups are unaffected.

## Prerequisites

- License profiles build on the [Usage Log]({{< ref "/guides/media-library/media-library-setup/#usage-log" >}}), which requires the [2025 Behavior]({{< ref "/guides/media-library/2025-behavior" >}}) (`mediaLibrary.use2025Behavior: true` in the server config).
- At least one media type that should carry license profiles.

## Configuration

### Usage Purposes

Define the usage purposes in the project config. See the [Media Center reference]({{< ref "/reference/project-config/media-center" >}}) for all properties.

```js
// project config
mediaCenter: {
  usagePurposes: [
    {
      // Internal purpose: it maps to a Livingdocs content type and records usage
      // automatically on publish. internal, contentType and recordUsageLogEntry
      // always go together.
      handle: 'web',
      label: {en: 'Web', de: 'Web'},
      internal: true,
      // Content type(s) that resolve to this purpose.
      // A content type may belong to at most one purpose.
      contentType: ['regular'],
      // Handle of a registered recordUsageLogEntry function (see below).
      // Required for an internal purpose.
      recordUsageLogEntry: 'recordWebUsage'
    },
    {
      // External purpose: the usage happens outside Livingdocs, so it maps to no
      // content type and sets none of internal, contentType or recordUsageLogEntry.
      // Users record these entries manually in the editor.
      handle: 'print',
      label: {en: 'Print', de: 'Druck'},
      // Additional fields recorded with each usage log entry
      paramsSchema: [
        {
          handle: 'page',
          type: 'li-integer',
          ui: {label: {en: 'Page', de: 'Seite'}}
        }
      ]
    }
  ]
}
```

Purpose handles must be unique. Every usage purpose is either internal or external:

- An **internal** purpose maps to one or more Livingdocs content types through `contentType` and records usage automatically when a matching document is published. It sets `internal: true` and must declare a `recordUsageLogEntry` function. These three properties always appear together. A content type may be matched by at most one purpose, so a document's purpose is never ambiguous.
- An **external** purpose covers usage that happens outside Livingdocs. It maps to no content type and sets none of `internal`, `contentType` or `recordUsageLogEntry`.

For an internal purpose the `recordUsageLogEntry` function is the normal way entries are created; it is required, not optional. Recording an entry as pending is only a safety net for when the function is missing or fails (see [Recording Usage Log Entries](#recording-usage-log-entries)).

### License Profiles

Define the profiles in the project config:

```js
// project config
mediaCenter: {
  licenseProfiles: {
    // Required as soon as one profile has approvalRequired: true.
    // Must match the handle of a li-task-v2 metadata property (see below).
    approvalTaskHandle: 'licenseApproval',
    profiles: [
      {
        handle: 'inHouse',
        label: {en: 'In-House', de: 'Hausintern'},
        color: '#2fb181', // used for the indicator in the UI
        approvalRequired: false,
        rules: {
          web: {costClass: 'free', billingMode: 'never'},
          print: {costClass: 'free', billingMode: 'never'}
        }
      },
      {
        handle: 'freelancer',
        label: {en: 'Freelancer', de: 'Freischaffende'},
        color: '#e0b32d',
        approvalRequired: false,
        rules: {
          web: {costClass: 'low', billingMode: 'always'},
          print: {costClass: 'low', billingMode: 'always'}
        }
      },
      {
        handle: 'restricted',
        label: {en: 'Restricted', de: 'Eingeschränkt'},
        color: '#d94f4f',
        approvalRequired: true,
        rules: {
          web: {costClass: 'high'}
        }
      }
    ]
  }
}
```

**`rules`** (required): an object keyed by usage purpose handle. An image with this profile may only be published in purposes that have a rule. Each rule supports two optional properties:

- **`costClass`**: one of `free`, `low`, `standard`, `high`. An indicator for editors, not enforced.
- **`billingMode`**: `never` (not billed per use: free, prepaid or flat rate) or `always` (billed on every use, e.g. pay-per-use). When unset, the billing decision is left open and a human decides later.

**`approvalRequired`** (required): when `true`, every use of an image with this profile needs a human approval before the document can be published.

**`color`** (required): hex color of the profile indicator shown on image cards, in the metadata form and in the properties panel.

Profile handles must be unique, and every rule key must be a configured usage purpose handle.

### Media Type Metadata

Add the `li-license-profile` metadata property to each media type that should carry profiles:

```js
// media type config
metadata: [
  {
    handle: 'licenseProfile',
    type: 'li-license-profile',
    config: {index: true},
    ui: {label: {en: 'License Profile', de: 'Lizenzprofil'}}
  }
]
```

`config: {index: true}` is required for the display filters below.

### Display Filters

Add the two license filters to your media library dashboards:

```js
// editor settings, dashboard configuration
displayFilters: [
  {filterName: 'liLicenseProfile'},
  {filterName: 'liLicensePurpose'}
]
```

- `liLicenseProfile` filters by a specific profile.
- `liLicensePurpose` filters by allowed usage purposes, cost classes and approval requirement, and resolves to the profiles that satisfy the selection.

### Approval Task

When a profile has `approvalRequired: true`, add a [`li-task-v2`]({{< ref "/reference/document/metadata/plugins/li-task-v2" >}}) metadata property to every content type that can contain such images. Its handle must match `licenseProfiles.approvalTaskHandle`:

```js
// content type config
metadata: [
  {
    handle: 'licenseApproval',
    type: 'li-task-v2',
    config: {
      requested: {
        beforeLabel: {en: 'Request image license review', de: 'Bildlizenz-Freigabe anfordern'},
        afterLabel: {en: 'Image license review requested', de: 'Bildlizenz-Freigabe angefordert'}
      },
      completed: {
        beforeLabel: {en: 'Resolve image license', de: 'Bildlizenz freigeben'},
        afterLabel: {en: 'Image license resolved', de: 'Bildlizenz freigegeben'}
      }
    }
  }
]
```

### Recording Usage Log Entries

Register one function per internal usage purpose in the server runtime config. The function is called on publish and decides the state and params of the recorded usage log entry:

```js
liServer.registerRecordUsageLogEntryFunctions([
  {
    handle: 'recordWebUsage',
    async recordUsageLogEntry ({documentVersion, usagePurpose, projectConfig}) {
      // return {state: 'pending', ...} to record a pending entry instead
      return {state: 'confirmed', params: {}}
    }
  }
])
```

When a function returns nothing, throws, or no function is registered for the purpose, a pending entry is recorded. Errors are logged and never block publication.

That is the whole setup. With profiles configured, the publish gate, usage logging and approval workflow activate automatically. No hook registration call is needed.

## How License Profiles Work

### Assigning a Profile

Editors assign a profile in the metadata form of a media library entry: a select listing every profile with its color, followed by the profile's rules per usage purpose. Profiles can also be assigned through batch metadata editing or set automatically when an image is imported.

### While Editing

Image cards, the image properties panel and placed images show the profile as a colored indicator; images without a profile get a warning tag. Placing an image is never blocked: the editor warns early when an image has no profile, an unknown profile, a profile that does not cover the document's purpose, or needs approval.

### The Publish Gate

The hard block comes at publication. The server checks every referenced image (in the content and in metadata) and blocks publishing when:

- the image has no license profile assigned,
- the assigned profile no longer exists in the config,
- no rule in the profile covers the document's purpose, or
- the profile requires approval and the image has not been approved yet.

The publish control lists each violation and links to the offending image.

### Approval Flow

When a document contains images whose profile requires approval, the approval task is requested automatically. The publish control and the task panel show the images to review; the image desk completes the task to approve them. Approved images are recorded on the task, so re-publishing an unchanged document does not ask again. A confirmed usage log entry for the same document also counts as approval.

Completing the task approves all images pending approval in that document at once.

### Usage Log and Billing

On publish, one usage log entry is recorded per referenced image, de-duplicated per document and purpose, so re-publishing never produces duplicates. Each entry stores a snapshot of the applied rule and a billing flag derived from the rule's `billingMode`:

- `never` results in `billing: false`, the use is not billed
- `always` results in `billing: true`, the use is billed
- unset leaves the flag undefined, and a user can set it manually in the usage log as long as it is unset

## Constraints

- License profiles require `mediaLibrary.use2025Behavior: true`.
- Only media types with a `li-license-profile` metadata property participate in license checks.
- A content type may belong to at most one usage purpose. Once profiles are configured, a document whose content type resolves to no purpose cannot publish profile-managed images, so every content type that can contain such images needs a purpose.
- Approval is granted per document, not per image: completing the approval task approves all pending images in the document.
- `costClass` is informational only and not enforced.
