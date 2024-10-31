---
title: Desk-Net to Kordiam Migration
description: Desk-Net is becoming Kordiam, how to migrate the Livingdocs integration
---

In August 2024, Desk-Net announced its rebranding to Kordiam. During the transition period of a few months, they support both API endpoints: `desk-net.com` and `kordiam.app`, with credentials remaining the same.

To align with this change, Livingdocs began calling their new API endpoint with `release-2024-11` by default. We also adjusted all Desk-Net integrations to reflect the new Kordiam name. Depending on your Livingdocs version, several actions may be required to ensure that your integrations continue to function.

## If you are running release-2025-05 or later

In {{< release "release-2025-05" >}}, we are going to remove all Desk-Net settings, integrations, and plugins that have been deprecated in release-2024-11. If you haven't migrated yet, your integrations will no longer work. Please refer to the migration instructions below.

## If you are running release-2024-11 or later

In {{< release "release-2024-11" >}}, we changed the default API endpoint from `desk-net.com` to `kordiam.app` and added new Kordiam settings, plugins, and APIs. Additionally, we deprecated all Desk-Net settings, plugins, and APIs. Customers running on release-2024-11 or newer should upgrade to the new Kordiam integrations.

{{< info >}}
In most cases, a careful case-sensitive search and replace of `desknet` with `kordiam` and `Desknet` with `Kordiam` in your downstream codebase should suffice. However, please ensure that you do not accidentally rename properties that are not part of our integration changes (such as your defined metadata property handles, for example).  

Two exceptions to this rule are `hugo.print.kordiamMetadataFields` and the configuration property `desknetExternalElementIdMetadataPath` of the `li-desknet-schedule` metadata plugin. If you have configured these, please refer to the details below for migration guidance.

Furthermore, if you are using the Kordiam Platform Integration, please update the endpoint to `<LIVINGDOCS_URL>/api/v1/kordiam-integration` in Kordiam under Settings > Platforms > (Your Livingdocs Platform) > Integrations > URL.
{{< /info >}}

### Server Config

Server config properties `desknet`, `integrations.desknet`, and `integrations.desknet.forceLinkUsingDesknetApiRequest` are deprecated and will be removed with release-2025-05. Please use server config properties `kordiam`, `integrations.kordiam`, and `forceLinkUsingKordiamApiRequest` instead.

#### Hugo Print Export

Server config property `hugo.print.desknetMetadataFields` is deprecated and will be removed in release-2025-05. Please use the new server config property `hugo.print.kordiamMetadataFields` instead.

In addition, we are deprecating the default metadata fields `desknet*` and will remove them in release-2025-05. If you are relying on these default fields, set `hugo.print.kordiamMetadataFields` accordingly:

```js
hugo: {
  print: {
    kordiamMetadataFields: [
      'desknetPrintEdition',
      'desknetPrintDepartment',
      'desknetPublicationDate',
      'desknetPageSequenceDepartment',
      'desknetExpirationDate',
      'desknetUrgency',
      'desknetNoteToProduction'
    ]
  }
}
```

### Project Config

Project config properties `settings.desknet`, `settings.integrations.desknet`, and `contentTypes.[*].desknet` are deprecated and will be removed with release-2025-05. Please use project config properties `settings.kordiam`, `settings.integrations.kordiam`, and `contentTypes.[*].kordiam` instead.

### Metadata Plugins

The Desk-Net metadata plugins are deprecated and will be removed with release-2025-05. Please replace Desk-Net metadata properties with the new Kordiam metadata plugins:

- `li-desknet-global` -> `li-kordiam-global`
- `li-desknet-integration` -> `li-kordiam-integration`
- `li-desknet-schedule` -> `li-kordiam-schedule`

Additionally, we are deprecating the `desknetExternalElementIdMetadataPath` config property of the `li-kordiam-schedule` and `li-desknet-schedule` metadata plugins. Please replace this config property with the newly introduced `externalElementIdMetadataPath` config property.

### Public API

The following Public API endpoints are deprecated:

- `POST /api/v1/desknet/element` -> `POST /api/v1/kordiam/element`
- `PUT /api/v1/desknet/element` -> `PUT /api/v1/kordiam/element`
- `PUT /api/v1/desknet/element/:documentId` -> `PUT /api/v1/kordiam/element/:documentId`
- `DELETE /api/v1/desknet/element/:documentId` -> `DELETE /api/v1/kordiam/element/:documentId`
- `POST /api/v1/desknet-integration/oauth/token` -> `POST /api/v1/kordiam-integration/oauth/token`
- `POST /api/v1/desknet-integration/statuses` -> `POST /api/v1/kordiam-integration/statuses`
- `POST /api/v1/desknet-integration/publication` -> `POST /api/v1/kordiam-integration/publication`
- `PUT /api/v1/desknet-integration/publication/:documentId` -> `PUT /api/v1/kordiam-integration/publication/:documentId`
- `DELETE /api/v1/desknet-integration/publication/:documentId` -> `DELETE /api/v1/kordiam-integration/publication/:documentId`

The removal of these endpoints has not yet been scheduled. If you are using the Kordiam Platform Integration, please update the endpoint to `<LIVINGDOCS_URL>/api/v1/kordiam-integration` in Kordiam under Settings > Platforms > (Your Livingdocs Platform) > Integrations > URL.

### Server API

#### Features

Features `li-desknet` and `li-desknet-integration` are deprecated. Please replace any usage with the new features `li-kordiam` and `li-kordiam-integration` respectively.

```js
const kordiamApi = liServer.features.api('li-kordiam')
const kordiamIntegrationApi = liServer.features.api('li-kordiam-integration')
```

#### Functions

Parameter `desknetApi` of Desk-Net/Kordiam functions is deprecated and will no longer be provided with release-2025-05. Please use the new parameter `kordiamApi` in Kordiam functions instead.

- Create Document:`action ({userId, element, projectConfig, desknetApi}) {}` -> `action ({userId, element, projectConfig, kordiamApi}) {}`
- Create Element:`action ({document, userId, projectConfig, desknetApi}) {}` -> `action ({document, userId, projectConfig, kordiamApi}) {}`
- Outgoing:`action ({document, userId, elementId, eventSource, changes, projectConfig, desknetApi}) {}` -> `action ({document, userId, elementId, eventSource, changes, projectConfig, kordiamApi}) {}`
- Incoming:`action ({document, userId, element, projectConfig, desknetApi}) {}` -> `action ({document, userId, element, projectConfig, kordiamApi}) {}`

#### `desknetApi`

The APIs for `li-desknet` are deprecated and will be removed with release-2025-05. Please replace them with the new corresponding APIs from `li-kordiam`:

- `desknetApi.getDesknetApiByProjectId` -> `kordiamApi.getKordiamApiByProjectId`
- `desknetApi.createFromDesknet` -> `kordiamApi.createFromKordiam`
- `desknetApi.updateFromDesknet` -> `kordiamApi.updateFromKordiam`
- `desknetApi.unlinkFromDesknet` -> `kordiamApi.unlinkFromKordiam`
- `desknetApi.updateToDesknet` -> `kordiamApi.updateToKordiam`
- `desknetApi.registerDesknetFunction` -> `kordiamApi.registerKordiamFunction`
- `desknetApi.unregisterDesknetFunction` -> `kordiamApi.unregisterKordiamFunction`

#### `desknetIntegrationApi`

The APIs for `li-desknet-integration` are deprecated and will be removed with release-2025-05. Please replace them with the new corresponding APIs from `li-kordiam-integration`:

- `desknetIntegrationApi.registerTransform` -> `kordiamIntegrationApi.registerTransform`
- `desknetIntegrationApi.unregisterTransform` -> `kordiamIntegrationApi.unregisterTransform`
- `desknetIntegrationApi.getToken` -> `kordiamIntegrationApi.getToken`
- `desknetIntegrationApi.createFromDesknet` -> `kordiamIntegrationApi.createFromKordiam`
- `desknetIntegrationApi.updateFromDesknet` -> `kordiamIntegrationApi.updateFromKordiam`
- `desknetIntegrationApi.unlinkFromDesknet` -> `kordiamIntegrationApi.unlinkFromKordiam`
- `desknetIntegrationApi.updateToDesknet` -> `kordiamIntegrationApi.updateToKordiam`
- `desknetIntegrationApi.patchPublicationStatusToDesknet` -> `kordiamIntegrationApi.patchPublicationStatusToKordiam`

#### `projectApi`

The `desknet` property in the channel return object of `projectApi.getProject` is deprecated and will be removed in release 2024-05. Please use the new `kordiam` property instead, which contains the same content as `desknet`.

#### `systemApi`

The `desknet` property in the return object of `systemApi.config` is deprecated and will be removed in release 2024-05. Please use the new `kordiam` property instead, which contains the same content as `desknet`.

## If you are running release-2023-11 or later

You are running a release of Livingdocs that supports adjusting the Kordiam API endpoint with the `apiEndpoint` setting.

If you are using the new [Desk-Net Global Integration]({{< ref "/guides/integrations/desknet" >}}), simply add an `apiEndpoint` config in `settings.integrations.desknet` to `https://kordiam.app` and you are good to go.

```js 
// settings
integrations: {
  desknet: {
    apiEndpoint: 'https://kordiam.app',
    ...
  }
}
```

If you are using the [Desk-Net Platform Integration]({{< ref "/guides/integrations/desknet-legacy" >}}), you need to add the `apiEndpoint` config in `settings.desknet` and set it to `https://kordiam.app`.

```js 
// settings
desknet: {
  apiEndpoint: 'https://kordiam.app',
  ...
}
```

## If you are running a release before release-2023-11

You should prioritize updating your Livingdocs to a newer release as soon as possible. The Desk-Net integration will stop working as soon as Kordiam removes the `desk-net.com` API endpoint.
