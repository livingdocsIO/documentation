---
type: release-notes
title: November 2024 Release
description: Technical Release Notes for release-2024-11
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-11/
---

{{< release-header
  title="November 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-11"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Task Screens](https://github.com/livingdocsIO/livingdocs-server/pull/7424)
* [Task Screens](https://github.com/livingdocsIO/livingdocs-editor/pull/9140)
* [Remove support for `appConfig.textcount` configuration](https://github.com/livingdocsIO/livingdocs-editor/pull/9157)
* [Ensure includes are requested in order of component appearance](https://github.com/livingdocsIO/livingdocs-editor/pull/9146)
* [Add translations for the Document Print Flow feature](https://github.com/livingdocsIO/livingdocs-editor/pull/9156)
* [Require params property for setIncludeDirective command](https://github.com/livingdocsIO/livingdocs-server/pull/7423)
* [Hide teaser border if only 1 level possible](https://github.com/livingdocsIO/livingdocs-editor/pull/9150)
* [Relax li-unique-id regex validation for tests](https://github.com/livingdocsIO/livingdocs-server/pull/7428)
* [fix(deps): update aws-sdk from 3.673.0 to v3.679.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7390)
* [feat(inbox): write access permission](https://github.com/livingdocsIO/livingdocs-editor/pull/9131)
* [fix(li-char-counter): micro-positioning](https://github.com/livingdocsIO/livingdocs-editor/pull/9151)
* [Polish/Print Version Dashboard Cell](https://github.com/livingdocsIO/livingdocs-editor/pull/9147)
* [fix(global portal target): Z visibility](https://github.com/livingdocsIO/livingdocs-editor/pull/9143)
* [fix(restore default): returned to true](https://github.com/livingdocsIO/livingdocs-editor/pull/9141)
* [Document Print Flows](https://github.com/livingdocsIO/livingdocs-editor/pull/8829)
* [Document Print Flows](https://github.com/livingdocsIO/livingdocs-server/pull/7158)
* [Desk-Net to Kordiam](https://github.com/livingdocsIO/livingdocs-editor/pull/9127)
* [Fix kanban dashboard realtime support for task updates](https://github.com/livingdocsIO/livingdocs-editor/pull/9137)
* [Deprecate Menu Tool](https://github.com/livingdocsIO/livingdocs-server/pull/7412)
* [Editor: teaser-improvements-6](https://github.com/livingdocsIO/livingdocs-editor/pull/9129)
* [Server: teaser-improvements-6](https://github.com/livingdocsIO/livingdocs-server/pull/7420)
* [New setIncludeDirective command](https://github.com/livingdocsIO/livingdocs-server/pull/7405)
* [Make task mode icon mandatory](https://github.com/livingdocsIO/livingdocs-server/pull/7421)
* [Make task mode icon mandatory](https://github.com/livingdocsIO/livingdocs-editor/pull/9130)
* [Server: teaser-improvements-5](https://github.com/livingdocsIO/livingdocs-server/pull/7415)
* [Editor: teaser-improvements-5](https://github.com/livingdocsIO/livingdocs-editor/pull/9123)
* [Feat: assistant component trigger](https://github.com/livingdocsIO/livingdocs-editor/pull/9099)
* [Feat: assistant component trigger](https://github.com/livingdocsIO/livingdocs-server/pull/7379)
* [li-task-v2 modes](https://github.com/livingdocsIO/livingdocs-server/pull/7331)
* [li-task-v2 modes](https://github.com/livingdocsIO/livingdocs-editor/pull/9059)
* [Editor: teaser-improvementes-4](https://github.com/livingdocsIO/livingdocs-editor/pull/9120)
* [Server: teaser-improvements-4](https://github.com/livingdocsIO/livingdocs-server/pull/7411)
* [Editor: teaser-improvementes-3](https://github.com/livingdocsIO/livingdocs-editor/pull/9114)
* [Server: teaser-improvements-3](https://github.com/livingdocsIO/livingdocs-server/pull/7404)
* [Editor: teaser-improvementes-1](https://github.com/livingdocsIO/livingdocs-editor/pull/9111)
* [New metadata plugin li-unique-id](https://github.com/livingdocsIO/livingdocs-editor/pull/9038)
* [New metadata plugin li-unique-id](https://github.com/livingdocsIO/livingdocs-server/pull/7312)
* [Feat: webhooks expose more user actor info when config is set](https://github.com/livingdocsIO/livingdocs-editor/pull/9119)
* [Feat: webhooks expose more user actor info when config is set ](https://github.com/livingdocsIO/livingdocs-server/pull/7410)
* [Only allow insertion of components that are configured in the content type](https://github.com/livingdocsIO/livingdocs-server/pull/7395)
* [New command API commands](https://github.com/livingdocsIO/livingdocs-server/pull/7373)
* [Feat: planning system remove enabled config and license reporting](https://github.com/livingdocsIO/livingdocs-server/pull/7396)
* [Fix aws signing in with opensearch](https://github.com/livingdocsIO/livingdocs-server/pull/7392)
* [Toolbar Layout Tweaks](https://github.com/livingdocsIO/livingdocs-editor/pull/9045)
* [fix(publish control): Button](https://github.com/livingdocsIO/livingdocs-editor/pull/9104)
* [Fix version bumps for new metadata column on document_revisions](https://github.com/livingdocsIO/livingdocs-server/pull/7385)
* [Downgrade severity when authenticating group assigned does not exist](https://github.com/livingdocsIO/livingdocs-server/pull/7381)
* [Fix teaser level behavior](https://github.com/livingdocsIO/livingdocs-server/pull/7380)
* [Fix teaser level behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/9094)
* [Teaser Component optimizations and reference transfer](https://github.com/livingdocsIO/livingdocs-editor/pull/9083)
* [Do not set url querystring in import filename](https://github.com/livingdocsIO/livingdocs-server/pull/7366)
* [Feat: assistant add custom error messages](https://github.com/livingdocsIO/livingdocs-editor/pull/9042)
* [Feat: assistant add custom error messages](https://github.com/livingdocsIO/livingdocs-server/pull/7314)
* [Improve back button logic for issue navigation](https://github.com/livingdocsIO/livingdocs-editor/pull/9044)
* [Teaser components conditions and optimizations](https://github.com/livingdocsIO/livingdocs-server/pull/7339)
* [videoSourcePolicy](https://github.com/livingdocsIO/livingdocs-server/pull/7322)
* [videoSourcePolicy](https://github.com/livingdocsIO/livingdocs-editor/pull/9047)
* [Move metadata onto revisions table](https://github.com/livingdocsIO/livingdocs-server/pull/7321)
* [Do not mutate li-document-search intitialContent object](https://github.com/livingdocsIO/livingdocs-editor/pull/9077)
* [Fix empty check of li-document-search params](https://github.com/livingdocsIO/livingdocs-server/pull/7342)
* [Teaser components sidepanel design](https://github.com/livingdocsIO/livingdocs-editor/pull/9055)
* [Support excludeFromTextCount on container directives](https://github.com/livingdocsIO/livingdocs-editor/pull/9063)
* [Support excludeFromTextCount on container directives](https://github.com/livingdocsIO/livingdocs-server/pull/7332)
* [fix(multiselect): Scrolling](https://github.com/livingdocsIO/livingdocs-editor/pull/9051)
* [Fix image url patching when crop x or y coordinates are not present](https://github.com/livingdocsIO/livingdocs-server/pull/7315)
* [Allow empty `oembed.allowedCoreProviders` array in the server configuration](https://github.com/livingdocsIO/livingdocs-server/pull/7309)
* [App structure simplification](https://github.com/livingdocsIO/livingdocs-editor/pull/8850)
* [fix(manual-status): breaking onto newline](https://github.com/livingdocsIO/livingdocs-editor/pull/9029)
* [fix: focalpoint reactivity](https://github.com/livingdocsIO/livingdocs-editor/pull/9007)
* [Support prefilling of directives with multiple metadata values of media library entries](https://github.com/livingdocsIO/livingdocs-server/pull/7277)
* [Support prefilling of directives with multiple metadata values of media library entries](https://github.com/livingdocsIO/livingdocs-editor/pull/9011)
* [Normalize date fields while indexing](https://github.com/livingdocsIO/livingdocs-server/pull/7268)
* [Fix: close info panel on clicking outside but also when button is clicked again](https://github.com/livingdocsIO/livingdocs-editor/pull/9002)
* [Make toolbar actions reactive](https://github.com/livingdocsIO/livingdocs-editor/pull/8997)
* [Upload center fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/8998)
* [Expose maxSize attribute that defines the maximum bytes on file uploads](https://github.com/livingdocsIO/livingdocs-server/pull/7261)
* [Only show invalid file size error once during image upload](https://github.com/livingdocsIO/livingdocs-editor/pull/8991)
* [Fix restoring documents from local storage after design version bumps](https://github.com/livingdocsIO/livingdocs-editor/pull/8989)
* [Support loading users with any archived state](https://github.com/livingdocsIO/livingdocs-server/pull/7256)
* [fix(admin-dashboard): occupation filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8976)
* [Disable assistants when workspace is read-only](https://github.com/livingdocsIO/livingdocs-editor/pull/8974)
* [fix: info panel goto button](https://github.com/livingdocsIO/livingdocs-editor/pull/8965)
* [Delete unused event related to LIBREAKING035](https://github.com/livingdocsIO/livingdocs-server/pull/7251)
* [Only set default locale if none is present on document create](https://github.com/livingdocsIO/livingdocs-editor/pull/8962)
* [Fix: always show push message button](https://github.com/livingdocsIO/livingdocs-editor/pull/8950)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-11`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

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
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.10                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

{{< feature-info "Internal" "server" >}}
### Metadata table migration to document_revisions :fire:


{{< feature-info "Command API" "server" >}}
### Stricter Document Command API `insertComponent` Validation :fire:

We have made the validation of the `insertComponent` command stricter. Previously, any component available in the design could be inserted into a document with the `insertComponent` command, even if it wasn’t configured in the content type. Now, only components configured in the content type can be inserted, and attempting to insert an unconfigured component will result in a validation error.

## Deprecations

{{< feature-info "Integrations" "server/editor" >}}
### Desk-net rename to Kordiam :warning:



{{< feature-info "Search" "server" >}}
### `contentTypes` in `li-document-search` :warning:



{{< feature-info "Menu Tool" "server/editor" >}}
### Menu Tool :warning:

The Menu Tool is deprecated and will be removed in release-2025-05. Please migrate your menus to data records, using the `li-tree` plugin and, if needed, the `li-unique-id` metadata plugin. For detailed instructions on [setting up menus with data records]({{< ref "/guides/editor/menus" >}}), refer to our guide. We are here to assist with the migration as needed.

## Features

{{< feature-info "Page management" "server" >}}
###  Teaser Components :gift:


{{< feature-info "Content Management" "server" >}}
### Print Copy :gift:


{{< feature-info "Task Management" "editor" >}}
### Task Screens :gift:


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
  },
  commands: []
}
```

Or a `validationError` can be thrown: 
```js
throw validationError({translatedMessage: {
  en: 'Something went wrong',
  de: 'Etwas ist schief gelaufen'
}})
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


{{< feature-info "Integrations" "server" >}}
### Desk-net rename to Kordiam :gift:


{{< feature-info "Media Management" "editor" >}}
### Video Source Policy :gift:


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
* [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2
* [CVE-2024-47764](https://nvd.nist.gov/vuln/detail/CVE-2024-47764) patched in `cookie` v0.7.0

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-45296](https://nvd.nist.gov/vuln/detail/CVE-2024-45296) patched in `path-to-regexp` v6.3.0
* [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2
* [CVE-2024-47764](https://nvd.nist.gov/vuln/detail/CVE-2024-47764) patched in `cookie` v0.7.0

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v261.3.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.7): fix(kordiam): Restore support for forceLinkUsingDesknetApiRequest setting
- [v261.3.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.6): fix(document-inbox): Send to inbox with update permission
- [v261.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.5): fix(release-2024-11): Define `release-2024-11` as channel for npm
- [v261.3.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.4): fix: Postpone release-2024-11 dashboard breaking changes to release-2025-01
- [v261.3.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.3): fix(breaking-changes): Add type to release-2024-09 breaking change
- [v261.3.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v261.3.2): fix(release-2024-11): Update framework to v31.0.1 (release-2024-11 tag)

### Livingdocs Editor Patches
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


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
