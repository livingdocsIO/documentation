---
type: release-notes
title: November 2024 Release
description: Technical Release Notes for release-2024-11
excludeFromSearch: false
hideSectionTeaser: true

header:
  upcoming: false
  legacy: false
  current: false
  maintained: true
  branchHandle: release-2024-11
---

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-november-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-11`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- [Feature Webinar Recording](https://us02web.zoom.us/rec/share/OdACLbg51PBPVNQBlE9mSZ0EIMXMHTTeXVBUELrUhwsyt3AwPCJE3_8uIXjM9L-_.65e1GPV2u1lAsv-T) | Passcode: N0Z$qqxh
- [Feature Webinar Documentation](https://docs.google.com/presentation/d/1dbjXQ5IoQvjdeqT7R_ZsYvIM70VyLrtuREuclQzyNDg/edit?usp=sharing)
- [Dev Webinar Recording](https://us02web.zoom.us/rec/share/1t_wLXwC2qbcVlpgD62QrUcVBYEu2XDzGHecS5E0Vwn03dPpLD0y7xl3HS8Sdk_A.lK9gDzPbyUD7XBGx) | Passcode: QzP1F&Ar
- [Dev Webinar Slides](https://docs.google.com/presentation/d/1QgpiRXIkM7SPgT6ndxXOgAX0LtxlaOV8exPhfxbOdtY/edit?usp=sharing)
- [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 22                                                                                       |
| NPM                            | 10                                                                                       |
| Postgres                       | 16                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:22                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:22                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 18                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.8                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.10                                                             |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Deployment

### Before the deployment

No prior preparations (besides running `livingdocs-server migrate up`) are required before rolling out this release.

### After the deployment

Related to migration of `document_metadata` table to `document_revisions` table. If the upgrade succeeded and it's definitive that you won't need to roll back (a few days), it's best to migrate all data to the new structure. To do that you can execute the command below.
**Please make sure you have a few gigabytes of storage available in postgres before executing that command. It will rewrite all metadata and will probably take a while.**

```sh
node ./node_modules/@livingdocs/server/db/manual-migrations/011-move-revision-metadata.js
```

After executing this script, the `document_metadata` table will get truncated and clean up storage.
We've tested the script against a database with 4'300'000 revision entries and it took ~7 minutes.

The percentage shown in the command output below is an estimate based on postgres stats. Therefore the percentage can stop early or take longer than expected.
There's no need to reindex Elasticsearch, as there are no structural changes.

```sh
16:56:06 INFO  cli > 47.41%: updated revisions (range: 20400 - 20599, duration: 44ms, updates: 200)
16:56:06 INFO  cli > 47.42%: updated revisions (range: 21000 - 21048, duration: 13ms, updates: 49)
16:56:06 INFO  cli > 47.42%: updated revisions (range: 20600 - 20799, duration: 44ms, updates: 200)
16:56:06 INFO  cli > 47.43%: updated revisions (range: 20800 - 20999, duration: 31ms, updates: 200)
16:56:06 INFO  cli > -------------------------------------------------------------------------------
16:56:06 INFO  cli > Metadata migration complete!
16:56:06 INFO  cli > Trying to empty the document_metadata table, verify first we do not use it.
16:56:06 INFO  cli > Successfully verified that metadata_id is not in use in document_revisions.
16:56:06 INFO  cli > Successfully cleaned all entries in document_metadata.
```

### Rollback

Only rollback if you have a critical issue with the release in question. Usually forward patching is the better option.

If you need to rollback the release, you can do so by running the following command on the Livingdocs Server running the new release:

```sh
livingdocs-server migrate down
```

If you rollback, data that was already upgraded to new schema (`document_metadata` -> `document_revisions`) will take a bit longer to migrate as it needs to scan the whole table, but this is lock-free for reads, **it will only block data that got updated after the deployment**.

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 202-metadata-on-revisions.js
#   creates a new column `metadata` on `document_revisions` table
#   requires manual migration to migrate all data from `document_metadata` to `document_revisions`
# migration 203-li-unique-id.js
#   creates a new table `document_unique_ids` to store unique ids and ensure its uniqueness
livingdocs-server migrate up
```

{{< feature-info "Internal" "server" >}}

### document_metadata table migration to document_revisions :fire:

We have moved the `document_metadata` table to the `document_revisions` table to support better migrations and cleanup operations. The migration is done automatically when you run `livingdocs-server migrate up`.

If you query the documents and metadata using sql yourself, this will affect you. Please use `COALESCE(document_revisions.metadata, document_metadata.data)` to get the correct value.

We will remove the `document_metadata` table in a future release. Writes against `document_metadata` table are now blocked and metadata is now directly persisted on `document_revisions.metadata`.

After a successful deployment, saves against existing documents will use the new column and writes from old processes are forbidden as the schema changed.

The existing columns won't be touched within the migration, so the migration can execute quick.

A rollback of already upgraded data takes a bit longer as it needs to scan the whole table, but this is lock-free for reads, it will only block data that got updated **after** the deployment.

After the upgrade succeeded and it's definitive that you won't need to roll back (a few days), it's best to migrate all data to the new structure. To do that you can execute the command below. **Please make sure you have a few gigabytes of storage available in postgres before executing that command. It will rewrite all metadata probably takes a while.** We've tested the script against a database with 4'300'000 revision entries and it took ~7 minutes. After executing that script, the `document_metadata` table will get truncated and clean up storage.

```sh
node ./node_modules/@livingdocs/server/db/manual-migrations/011-move-revision-metadata.js
```

{{< feature-info "Command API" "server" >}}

### Stricter Document Command API `insertComponent` Validation :fire:

We have made the validation of the `insertComponent` command stricter. Previously, any component available in the design could be inserted into a document with the `insertComponent` command, even if it wasn’t configured in the content type. Now, only components configured in the content type can be inserted, and attempting to insert an unconfigured component will result in a validation error.

{{< feature-info "Content Management" "editor" >}}

### Move `appConfig.textcount` editor configuration :fire:

`appConfig.textcount` configuration has been moved to `projectConfig.editorSettings.textCount`. If you still want to use this feature please migrate to `projectConfig.editorSettings.textCount`. Be careful, the textCount configuration needs to be written in camelCase in the new location.

## Deprecations

{{< feature-info "Integrations" "server/editor" >}}

### Desk-net Integrations :warning:

Desk-Net announced its rebranding to Kordiam. To align with this change, Livingdocs now calls their new API endpoint `kordiam.app` by default. We also added new Kordiam integrations and deprecated existing Desk-Net integrations, which will be removed in `release-2025-05`.

- Feature `li-desknet`, including all its server APIs
- Feature `li-desknet-integration`, including all its server APIs
- Server config `desknet`, `integrations.desknet`, and `integrations.desknet.forceLinkUsingDesknetApiRequest`
- Server config `hugo.print.desknetMetadataFields` as well as its default values
- Project config `settings.desknet`, `settings.integrations.desknet`, and `contentTypes.[*].desknet`
- Public API endpoints `/api/v1/desknet/*`
- Public API endpoints `/api/v1/desknet-integration/*`
- Function parameter `desknetApi` of Desk-Net/Kordiam functions
- Desknet property in the channel return object of `projectApi.getProject()`
- Desknet property in the return object of `systemApi.config()`
- Metadata plugin `li-desknet-global`
- Metadata plugin `li-desknet-integration`
- Metadata plugin `li-desknet-schedule`
- Config property `desknetExternalElementIdMetadataPath` of metadata plugin `li-desknet-schedule`

For instructions on how to migrate, please refer to our [Desk-Net to Kordiam migration guide]({{< ref "/guides/integrations/desknet-to-kordiam-migration" >}}).

{{< feature-info "Search" "server" >}}

### `contentTypes` in `li-document-search` :warning:

The shorthand property `config.contentTypes` in the `li-document-search` metadata plugin is deprecated and replaced with `config.contentType` which can be a string or an array of strings. This is done to make it consistent with the shorthand syntax in other places. `config.contentTypes` will be supported until `release-2025-05`.

Backwards compatibility will take `config.contentType` if defined: `config.contentType || config.contentTypes`.
Please migrate your existing configuration from `config.contentTypes` to `config.contentType`.

```js
{
  handle: 'search',
  type: 'li-document-search',
  config: {
    // contentTypes: ['article', 'page']
    contentType: ['article', 'page']
  }
}
```

{{< feature-info "Menu Tool" "server/editor" >}}

### Menu Tool :warning:

The Menu Tool is deprecated and will be removed in release-2025-05. Please migrate your menus to data records, using the `li-tree` plugin and, if needed, the `li-unique-id` metadata plugin. For detailed instructions on [setting up menus with data records]({{< ref "/guides/editor/menus" >}}), refer to our guide. We are here to assist with the migration as needed.

## Features

{{< feature-info "Page management" "server/editor" >}}

### Teaser Components :gift:

The new [`li-teaser` plugin]({{< ref "/reference/document/metadata/plugins/li-teaser" >}}) for includes facilitates flexible page management by allowing users to establish rule based links from teasers to documents. Teasers can be configured to use direct references, curated lists, or algorithm-driven selections, supporting a mix of static and dynamic teasers.

This plugin already covers many of the technical necessities out of the box, such as document preloading and deduplication.

Since page management is a complex topic, we encourage you to get in touch with us, so we can figure out how your use case fits into frame and which migration paths exist.

{{< feature-info "Content Management" "server" >}}

### Document Print Flows :gift:

Document Print Flows provide a flexible way to create print copies of web documents. They are configured in a similar way to Document Copy Flows, with the server functions handling most of the logic. The main difference is that there is a 1:1 relationship between a print and web document, and they use a different UI to initiate the copy. There are also additional indicators within the UI to show the status of the linked document. For help with configuring the Document Print Flows feature please see the [guide]({{< ref "/guides/editor/document-print-flows" >}}).

{{< feature-info "Task Management" "editor" >}}

### Task Screens :gift:

To be able to better support task workflows, especially proofreading flows, we introduce a new way of displaying tasks on the basis of table dashboards. The most relevant information are emphasised and shown in an easy-to-grasp, clean way. By moving away from the task state lanes, we gain more space and make the most important tasks easier accessible.

The configuration of task screens is similar to that of table dashboards, but the task screen configs are defined within `projectConfig.editorSettings.taskScreens`. The screen configs use many of the same properties, but they have a required `task` property which should reference an [li-task-v2]({{< ref "/reference/document/metadata/plugins/li-task-v2" >}}) metadata property handle. There is also an `additionalMetadataProperties` property which accepts an array of metadata handles. This will add columns after the default columns, which can be used as a simple way to extend what is displayed on the screen without having to define the whole columns array.

```js
{
  editorSettings: {
    taskScreens: [
      {
        handle: 'proofreading',
        pageTitle: 'Proofreading',
        task: 'proofreading',
        baseFilters: [{key: 'contentType', term: 'regular'}],
        displayFilters: ['timeRange', {metadataPropertyName: 'proofreading'}],
        // columns: [], // Used to replace the default columns
        additionalMetadataProperties: ['effort', 'importance'],
        search: {}
      }
    ]
  }
}
```

There is also a new [li-task-v2 display filter]({{< ref "/customising/advanced/editor-configuration/display-filter" >}}) which can be configured anywhere that document display filters are supported, including for task screens:

```js
displayFilters: [{metadataPropertyName: 'proofreading'}]
```

Also, to add a link to a task screen in the [main navigation]({{< ref "/reference/project-config/editor-settings#custom-task-screen" >}}) you can use the new `taskScreen` property in a custom main navigation item:

```js
{
  editorSettings: {
    mainNavigation: [
      {
        handle: 'proofreading',
        taskScreen: 'proofreading',
        label: 'Proofreading',
        icon: 'clipboard-check'
      }
    ]
  }
}
```

{{< feature-info "Metadata" "editor" >}}

### Task Modes :gift:

We are making several enhancements to the [`li-task-v2` metadata plugin]({{< ref "/reference/document/metadata/plugins/li-task-v2" >}}), with the main highlight being the introduction of task modes.

- **Task Modes** allow users to select how they approach a task. For instance, in the context of proofreading, task modes can reflect the level of rigor applied when reviewing an article. A mode can be chosen when a task is accepted or finished, and it is also shown in the task icon.<br>
  Task modes can be defined in the metadata plugin configuration. Once configured, selecting a mode becomes mandatory for every newly created task. Modes are displayed in the order they are defined, with the first mode being the default.

```js
{
  handle: 'proofreading',
  type: 'li-task-v2',
  config: {
    modes: [
      {
        handle: 'thorough',
        label: 'Thorough',
        icon: 'glasses'
      },
      {
        handle: 'superficial',
        label: 'Superficial',
        icon: 'speedometer'
      }
    ]
  },
  ...
}
```

Further enhancements to the `li-task-v2` metadata plugin include:

- **Deadline Presets**: These are hardcoded options that enable users to quickly choose a deadline without manually adjusting the input field. The presets are: "+1 hour", "+2 hours", "+24 hours".
- **Setting a Deadline**: When requesting a task, it is no longer necessary to confirm the deadline before proceeding. Previously, users had to click both "Set deadline" and "Request task", leading some to forget the second step. This update streamlines the process by removing the "Set deadline" button.
- **High Priority**: The high priority button has been relocated from the action menu to the task card header for better visibility.

{{< feature-info "Command API" "server" >}}

### Document Command API: New Commands :gift:

We have extended the [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) with five new commands, which are also available for [Assistants]({{< ref "/customising/assistants" >}}).

Each command supports an optional `oldValue` parameter. When specified, the system verifies that the value being updated matches the provided `oldValue`. This prevents accidental overwrites that might occur due to changes made between reading a document and issuing the command. If the `oldValue` does not match, a conflict error is thrown.

#### `setComponentCondition`

The `setComponentCondition` command updates a component condition. Currently, only conditions of type `dateTime` are supported.

```js
{
  operation: 'setComponentCondition',
  componentId: 'doc-123',
  conditionName: 'dateTime',
  value: {
    gte: '2025-01-01T10:30:00.000Z',
    lt: '2025-02-02T14:30:00.000Z'
  },
  oldValue: {
    gte: '2024-01-01T10:30:00.000Z',
    lt: '2024-02-02T14:30:00.000Z'
  }
}
```

#### `setComponentStyle`

The `setComponentStyle` command updates a component style. It supports all types: `style`, `option`, and `select`.

```js
{
  operation: 'setComponentStyle',
  componentId: 'doc-123',
  propertyName: 'background',
  value: '#1fc47a',
  oldValue: '#000'
}
```

#### `setStyleDirective`

The `setStyleDirective` command updates a style directive. It supports all types: `style`, `option`, and `select`.

```js
{
  operation: 'setStyleDirective',
  componentId: 'doc-123',
  directiveName: 'appearance',
  propertyName: 'background',
  value: '#1fc47a',
  oldValue: '#000'
}
```

#### `setLinkDirective`

The `setLinkDirective` command updates a link directive.

```js
{
  operation: 'setLinkDirective',
  componentId: 'doc-123',
  directiveName: 'link',
  value: {
    href: 'https://livingdocs.io/article/123',
    target: '_blank',
    $ref: 'document',
    reference: {id: '123'}
  },
  oldValue: {
    href: 'https://livingdocs.io/'
  }
}
```

#### `setIncludeDirective`

The `setIncludeDirective` command updates an include directive. It supports both include `params` and `overrides`. These properties depend on each other: if only `params` are provided, any existing `overrides` are removed. Conversely, specifying `overrides` without `params` is invalid and will return a validation error. To update `overrides`, both the `params` and `overrides` properties must be provided.

```js
{
  operation: 'setIncludeDirective',
  componentId: 'doc-123',
  directiveName: 'related-article',
  value: {
    params: {
      teaser: {
        $ref: 'document',
        reference: {id: '3'}
      },
    },
    overrides: [{
      id: 'teaser-normal-3',
      content: {
        link: {href: 'https://livingdocs.io'},
        title: 'Changed title',
      },
      originalSnapshot: {...},
      contentProperties: [...]
    }]
  },
  oldValue: null
}
```

{{< feature-info "Assistants" "server" >}}

### Assistants: Component Trigger :gift:

We are adding assistant buttons to components. These enable users to trigger an assistant directly on a focused component. If two
or more assistants are registered a k-menu will be opened only with the available assistants on this focused component. Assistants which are registered on a focused component are not shown in the normal k-menu.

To configure this add the `focusedComponentName` to the `showAssistantTriggerButton` config:

```js
liServer.registerAssistant({
  handle: 'exampleAssistant',
  ...,
  showAssistantTriggerButton: {
    focusedComponentName: 'exampleName' // component handle
  },
  contextConditions: {
    documentRequired: true,
    contentTypes: []
  },

  async assist ({context}) {
    ...
  }
})
```

{{< feature-info "Assistants" "editor" >}}

### Assistants: Error messages :gift:

To further improve the [Assistants]({{< ref "/customising/assistants" >}}) we are adding two ways to return custom error messages. This helps to better inform the user on why an assistant
couldn't fullfil its task.

In the `assist` function either an error object can be returned in the response:

```js
{
  error: {
    translatedMessage: {
      de: 'Etwas ist falsch gelaufen',
      en: 'Something went wrong'
    }
  },
  commands: []
}
```

Or a `validationError` can be thrown:

```js
throw validationError({
  translatedMessage: {
    en: 'Something went wrong',
    de: 'Etwas ist schief gelaufen'
  }
})
```

{{< feature-info "Metadata" "server" >}}

### `li-unique-id` Metadata Plugin :gift:

The new `li-unique-id` metadata plugin is ideal for managing user-defined IDs or handles where uniqueness among values is required. The user interface is similar to an `li-text` field, but it includes additional validation properties:

- **Uniqueness**: Ensures uniqueness among values within the same scope per project.
- **Format**: Enforces the accepted input format using a regular expression.
- **Required**: Ensures that a value is provided.

For more information on how to configure it, please refer to the [`li-unique-id` plugin page]({{< ref "/reference/document/metadata/plugins/li-unique-id" >}}). Also, check out our [guide]({{< ref "/guides/editor/menus" >}}) on how to set up a menu content type using `li-unique-id`.

{{< feature-info "Content Management" "editor" >}}

### Enhanced `componentDirectivesPrefilling` :gift:

There's an extension on `mediaType.editorSettings.mediaLibrary.componentDirectivesPrefilling`.
It supports now an entry with `type: 'template'`.

Placeholders in templates get replaced by the specific metadata properties if they are present and not empty.
If a placeholder contains a property that's empty, it will move on to the next prefilling.

That way we can define fallbacks.

```js
componentDirectivesPrefilling: [
  {
    type: 'template',
    template: '{{ metadata.photographer }} / {{ metadata.credit }} ©️',
    directiveName: 'source'
  },
  {
    type: 'template',
    template: '{{ metadata.photographer }} ©️',
    directiveName: 'source'
  },
  {
    type: 'template',
    template: '{{ metadata.credit }} ©️',
    directiveName: 'source'
  },
  {
    metadataPropertyName: 'description',
    directiveName: 'caption'
  }
]
```

Thus, the two entries below have the same behavior:

```js
componentDirectivesPrefilling: [
  {
    type: 'template',
    template: '{{ metadata.description }}',
    directiveName: 'caption'
  },
  {
    metadataPropertyName: 'description',
    directiveName: 'caption'
  }
]
```

This behaviour has been backported to September (`@livingdocs/server@257.0.6` and `@livingdocs/editor@110.34.25`) and July (`@livingdocs/server@254.0.34` and `@livingdocs/editor@110.21.55`) releases.

{{< feature-info "Integrations" "server" >}}

### Kordiam Integrations :gift:

We added new Kordiam integrations (including settings, metadata plugins, and APIs) to replace existing Desk-Net integrations. Check out the [deprecation notice]({{< ref "#desk-net-integrations-warning" >}}) above for details on how to migrate.

{{< feature-info "Media Management" "editor" >}}

### Video Source Policy :gift:

The `videoSourcePolicy` sits alongside the existing `imageSourcePolicy` configuration. It only supports the 'upload' provider and can be used to disable uploads globally (including the media library video dashboard) when added to the project config settings, or per content type when added to a content type config. The `videoSourcePolicy` within a content type config has priority over the project config.

You can disable the upload provider for videos by setting `enabled` to `false`:

```js
{
  settings: {
    handle: 'my-project',
    // ...
    // imageSourcePolicy: [],
    videoSourcePolicy: [
      {
        provider: 'upload',
        enabled: false
      }
    ]
  },
  contentTypes: [
    {
      handle: 'regular',
      // ...
      // imageSourcePolicy: [],
      videoSourcePolicy: [
        {
          provider: 'upload',
          enabled: false
        }
      ]
    }
  ]
}
```

{{< feature-info "Webhooks" "server" >}}

### Webhooks: User Actor Info :gift:

We are adding a config to send more information about users in webhook payloads. External systems can leverage this to understand who triggered an action. If enabled the `name` and `email` for user actors are included in the payload. We do not recommend enabling this configuration unless your external systems require it.

```js
webhooks: {
  active: true,
  configurations: [
    {
      active: true,
      exposeUserActor: true,
      ...
    }
  ]
}
```

{{< feature-info "Access Control Management" "server" >}}

### `inboxWrite` access right :gift:

We are introducing an new `inbox` permission. This enables users to send contentTypes to the inbox without having write access for them. Users then need `read` and `inbox` access on the contentType to be able to search inboxes (read) and send something into the inbox (inbox). Setting the `update` permission contains the inbox permission.

No permission will automatically be granted. So make sure to enable the permission for relevant groups.

{{< img src="./release-2024-11-inbox-permission.png" alt="Inbox permission" >}}

{{< feature-info "Media Storage" "server" >}}

### Support for DefaultAzureCredential in Azure Blob Storage :gift:

We have introduced support for `DefaultAzureCredential` when using Azure Blob Storage. This feature simplifies authentication by enabling the automatic retrieval of credentials from the environment without explicitly specifying them in the code or server configuration.

The new implementation leverages [Azure's DefaultAzureCredential](https://learn.microsoft.com/en-us/javascript/api/overview/azure/identity-readme?view=azure-node-latest#defaultazurecredential) mechanism to automatically select the most appropriate authentication method based on the available environment. It checks for various identity sources in a predefined order (such as environment variables, workload identity, managed identity, or Azure CLI credentials).

**Authentication Flow**: `defaultProvider()` will attemp to authenticate via the following mechanisms in the specified order:

- Environment Variables (e.g., AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_CLIENT_SECRET)
- Workload Identity for services deployed to AKS
- Azure Managed Identity for services deployed to an Azure host
- Azure CLI (for local development)
- Azure PowerShell (for local development)
- Azure Developer CLI (for local development)

**Simplified Configuration**: With this feature, developers no longer need to manually handle or switch between authentication mechanisms in different environments, as `defaultProvider()` automatically handles credentials across development, test, and production environments without changes to code or configuration.

If you are going to use this authentication method please make sure that your environment is properly set up with at least one of the supported authentication sources. We recommend using Azure CLI for local development and Managed Identity or [Workload Identity (on AKS)](https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview?tabs=javascript) for production environments.

To enable this authentication method follow the Azure Blob Storage configuration:

```js
{
  storage: {
    strategy: 'azure-blob-storage',
    config: {
      storageAccountName: 'storage-account-name',
      // Do not define sasToken when using DefaultAzureCredential
      containerName: 'container-name',
    }
  }
}
```

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2
- [CVE-2024-47764](https://nvd.nist.gov/vuln/detail/CVE-2024-47764) patched in `cookie` v0.7.0
- [CVE-2024-52798](https://github.com/advisories/GHSA-rhx6-c78j-4q9w) patched in `path-to-regexp` v0.1.12
- [CVE-2024-55565](https://github.com/advisories/GHSA-mwcw-c2x4-8c55) patched in `nanoid` v3.3.8
- [CVE-2025-22150](https://github.com/advisories/GHSA-c76h-2ccp-4975) patched in `undici` v6.21.1
- [CVE-2025-27152] patched in `axios` v1.8.2

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [CVE-2024-45296](https://nvd.nist.gov/vuln/detail/CVE-2024-45296) patched in `path-to-regexp` v6.3.0
- [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2
- [CVE-2024-47764](https://nvd.nist.gov/vuln/detail/CVE-2024-47764) patched in `cookie` v0.7.0
- [CVE-2024-52810](https://github.com/advisories/GHSA-hjwq-mjwj-4x6c) patched in `@intlify/shared` v9.14.2
- [CVE-2024-55565](https://github.com/advisories/GHSA-mwcw-c2x4-8c55) patched in `nanoid` v3.3.8
- [CVE-2025-22150](https://github.com/advisories/GHSA-c76h-2ccp-4975) patched in `undici` v6.21.1
- [CVE-2025-27152] patched in `axios` v1.8.2

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) vulnerability in `vue-template-compiler` it allows malicious users to perform XSS via prototype pollution. Editor build is always done in a trusted environment and the vulnerability is not exploitable.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v261.3.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.36): fix(menu-tool): Log deprecation warnings in menu API
- [v261.3.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.35): fix(history): Show more than 100 revisions
- [v261.3.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.34): fix(logger): Do not try to serialize streams in pino serializer for axios
- [v261.3.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.33): fix(deps): update dependency axios from 1.7.7 to 1.8.2 [security]
- [v261.3.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.32): fix(li-task-v2): Only show task mode in notifications if mode is configured
- [v261.3.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.31): fix(li-task-v2): Prevent notification composition failure when no modes are defined
- [v261.3.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.30): fix(webhooks): Add webhook timeout config property
- [v261.3.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.29): fix(db): Correctly escape control characters in json
- [v261.3.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.28): fix(db): Fix document_revisions.metadata support in indexing-repository
- [v261.3.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.27): fix(upload): Fix video upload timeout

- [v261.3.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.26): fix(deps): update dependency @livingdocs/framework from 31.0.4 to v31.0.5
- [v261.3.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.25): chore(references): Update `manual-migrations/006-generate-references.js` to skip revision updates when there are no references on them and remove unnecessary transactions
- [v261.3.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.24): fix(upload): Forward image upload errors to the destination after wrapping upload streams with `limitStreamSize`
- [v261.3.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.23): chore: Fix todos check
- [v261.3.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.22): fix(upload): Correctly support timeouts on asset uploads
- [v261.3.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.21): fix: Revoke user occupation also when no email transport is configured
- [v261.3.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.20): fix(media-center): Do not throw an error when the max filesize is reached
- [v261.3.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.19): fix(security): Patch vulnerability CVE-2024-52798 in `path-to-regexp` and CVE-2024-55565 in `nanoid`
- [v261.3.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.18): fix(deps): update dependency @livingdocs/framework from 31.0.3 to v31.0.4
- [v261.3.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.17): fix(print-flows): Load correct source document revision ids
- [v261.3.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.16): fix(access-control): Run `accessControl.canUnpublish` when executing a publish control 'unpublish' command
- [v261.3.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.15): fix(publication): Compute event before modifying document
- [v261.3.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.14): fix(indexing): Only index documentId for copySource on publications
- [v261.3.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.13): chore(notifications): Remove an unnecessary uncached project config request when sending notifications
- [v261.3.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.12): chore: Regenerate package-lock.json as there were install errors with fsevents
- [v261.3.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.11): fix(print-flows): Require contentType in print function result
- [v261.3.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.10): fix(deps): update dependency @livingdocs/framework from 31.0.1 to v31.0.2
- [v261.3.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.9): fix(kordiam): Unlink Kordiam publication if the story gets deleted
- [v261.3.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.8): fix(designs): Fix error when server config designs is not set
- [v261.3.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.7): fix(kordiam): Restore support for forceLinkUsingDesknetApiRequest setting
- [v261.3.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.6): fix(document-inbox): Send to inbox with update permission
- [v261.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.5): fix(release-2024-11): Define `release-2024-11` as channel for npm
- [v261.3.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.4): fix: Postpone release-2024-11 dashboard breaking changes to release-2025-01
- [v261.3.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.3): fix(breaking-changes): Add type to release-2024-09 breaking change
- [v261.3.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.2): fix(release-2024-11): Update framework to v31.0.1 (release-2024-11 tag)

### Livingdocs Editor Patches
- [v111.1.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.75): fix(assistants): save field extractor changes after assistant finished
- [v111.1.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.74): fix(security): Patch `undici` vulnerability `CVE-2025-22150` to v6.21.1
- [v111.1.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.73): fix(creation flow metadata form): suppress workspace injection warning
- [v111.1.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.72): fix(task-screen): Open documents with task panel open
- [v111.1.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.71): fix: scroll fixes in editor view
- [v111.1.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.70): fix(trackjs): sanitize Bearer, Basic, and Authorization strings in payload
- [v111.1.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.69): chore(comments): Remove tributejs dependency
- [v111.1.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.68): fix(format-popover): Do not let format popover slip behind preview panel
- [v111.1.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.67): fix: Close display filters in modal on click outside
- [v111.1.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.66): fix(proxy): Increase headers timeout to 1h. The livingdocs server handles the timeouts separately.

- [v111.1.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.65): fix(deps): update dependency @livingdocs/framework from 31.0.4 to v31.0.5
- [v111.1.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.64): fix: only resolve affected includes after deduplication was invalidated
- [v111.1.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.63): fix(display-filters): Support duplicate labels in single list display filters
- [v111.1.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.62): fix(li-table): Show table header on small screens
- [v111.1.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.61): fix(editor iframe): Overriding vh values
- [v111.1.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.60): fix(home-screen): syncUrlParams when only one search dashboard
- [v111.1.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.59): fix(dashboards): Show document highlight dot on table dashboards
- [v111.1.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.58): fix(proxy): Ensure we never retry requests. Despite the empty retryMethods, it still retry requests
- [v111.1.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.57): fix: Combine multiple ng-if into one to have them correctly evaluated
- [v111.1.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.56): fix: Reduce wide side panel width on small screens
- [v111.1.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.55): fix(task board): correct german UI translation
- [v111.1.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.54): fix: Position formatting popover behind metadata panel
- [v111.1.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.53): fix(users): Include all users of admin page in csv file
- [v111.1.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.52): fix(display-filters): Re-add search and keyboard controls to li-display-filter-list-v2-single
- [v111.1.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.51): fix: Add comment explaining why we don't show the counter when the print preview is open
- [v111.1.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.50): fix: Fix print preview size
- [v111.1.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.49): fix: Set split pane min-width to configured start width if smaller than default
- [v111.1.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.48): fix(security): Patch vulnerability CVE-2024-52810 in `@intlify/shared` and CVE-2024-55565 in `nanoid`
- [v111.1.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.47): fix(copy): Ensure document loaded before opening panels
- [v111.1.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.46): fix(deps): update dependency @livingdocs/framework from 31.0.3 to v31.0.4
- [v111.1.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.45): fix(teaser-manager): Reduce include resolve requests
- [v111.1.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.44): fix(li-task-v2): Provide boolean prop type
- [v111.1.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.43): fix(li-schema-form): don't do delayed focus clearing after refocused
- [v111.1.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.42): fix: useUndoRedo() check workspace before history operations
- [v111.1.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.41): fix(dashboards): Do not persist filters when navigating between dashboards
- [v111.1.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.40): fix(document-proxy): Only add numbers to userIds
- [v111.1.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.39): fix(project-config): Do not throw an error on the project config screen when kordiam is enabled
- [v111.1.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.38): fix(info-panel): Be more specific when excluding ticker links
- [v111.1.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.37): fix(li-meta-tree): allow publications when `config.document.published` is `false`
- [v111.1.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.36): fix(editor): Keep search in memory in document dashboard side panel
- [v111.1.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.35): fix(floating panel): Position
- [v111.1.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.34): chore(tasks): Use normalised task screen config for task board
- [v111.1.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.33): fix(npm): Remove devDependencies from package.json and npm-shrinkwrap.json before publishing the package
- [v111.1.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.32): fix: Regenerate package-lock.json as there were install errors with fsevents
- [v111.1.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.31): fix(chrome): Disable automatic translations of the editor UI and content within the document
- [v111.1.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.30): fix(deps): update dependency @livingdocs/framework from 31.0.1 to v31.0.3
- [v111.1.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.29): fix(side-panels): Translate side panel titles
- [v111.1.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.28): fix(conditions): Account for fixed dynamic header height when positioning conditions flyout
- [v111.1.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.27): fix(dashboard): Handle errors that occur after successful document deletion
- [v111.1.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.26): fix(teaser-preview): Fix include rendering
- [v111.1.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.25): fix(info-panel): Hide incoming links from ticker entries
- [v111.1.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.24): fix(field Extractor): return moved out of loop
- [v111.1.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.23): chore(display-filters): Use start case for handle label fallback
- [v111.1.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.22): fix(history): Overfetch revisions by one to check if more are available to load
- [v111.1.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.21): fix(li-toolbar): avoid language label to overlap title
- [v111.1.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.20): chore(tasks): Normalise task screen config within projectBehavior
- [v111.1.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.19): fix(metadata): Do not include empty strings in etc payload
- [v111.1.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.18): fix: Only make use large wide panels when ticker panel is closed
- [v111.1.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.17): fix: hide display filters on media board with external sources
- [v111.1.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.16): fix(info-panel): Only show print copies list when configured
- [v111.1.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.15): fix(li-taser): only allow to transform into teasers allowed in container
- [v111.1.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.14): fix(clipboard): keep clipboard visibility synced using watch
- [v111.1.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.13): fix(multilist): Restore original scrolling behaviour and height
- [v111.1.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.12): fix: Set li-canvas min-height
- [v111.1.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.11): fix(li-task-item): use correct spacing for status icon when compact
- [v111.1.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.10): fix(kordiam): Remove unnecessary optional chaining
- [v111.1.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.9): fix: use workspace id in dataloader cache key
- [v111.1.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.8): fix: Revert connecting local clipboard state to canvas clipboard state
- [v111.1.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.7): chore(tasks): Add search empty text translation
- [v111.1.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.6): fix(multiselect): add missing translations
- [v111.1.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.5): fix(release-2024-11): Define `release-2024-11` as channel for npm
- [v111.1.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.4): fix: Postpone release-2024-11 dashboard breaking changes to release-2025-01
- [v111.1.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.3): fix(user-avatar): icon size
- [v111.1.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.2): fix(menu-item): increase max length
- [v111.1.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v111.1.1): fix(release-2024-11): Update framework to v31.0.1 (release-2024-11 tag)

  ***

  **Icon Legend**

  - Breaking changes: :fire:
  - Feature: :gift:
