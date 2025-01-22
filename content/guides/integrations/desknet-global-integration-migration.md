---
title: Desk-Net Global Integration Migration
description: How to move from the Desk-Net platform integration to the Desk-Net global integration
---

{{< warning >}}
Desk-Net rebranded as Kordiam. Consequently, the Desk-Net Global Integration was deprecated as of {{< release "release-2024-11" >}} and will be removed in {{< release "release-2025-05" >}}. Please use the [Kordiam Global Integration]({{< ref "/guides/integrations/kordiam" >}}) instead. For more details, refer to our [Desk-Net to Kordiam migration guide]({{< ref "/guides/integrations/desknet-to-kordiam-migration" >}}) and the [Kordiam Global Integration migration guide]({{< ref "/guides/integrations/kordiam-global-integration-migration" >}}).
{{< /warning >}}

To upgrade from the [Desk-Net Platform Integration]({{< ref "/guides/integrations/desknet-legacy" >}}) to the [Desk-Net Global Integration]({{< ref "/guides/integrations/desknet" >}}) you can follow the [Desk-Net Global Integration]({{< ref "/guides/integrations/desknet" >}}) guide while keeping the following in mind:

1. You will need to contact Desk-Net to enable the global integration.
2. The server config for the global integration is located at `integrations.desknet`, and not `desknet`. The global config uses `allowed: true` instead of `enabled: true`. It's safe to keep the old values in place while you upgrade, and remove them once everything is running smoothly.
3. The project config for the global integration is located at `settings.integrations.desknet`, and not `settings.desknet`. Again, it is safe to keep the old config active while you upgrade.
4. The credentials used for the platform integration are compatible with the global integration, so for simplicity you can re-use the `clientId` and `clientSecret` in the new location.
5. If you are happy to keep the same metadata handle on each content type then you can simply rename the plugin from `li-desknet-integration` to `li-desknet-global`. The metadata plugin storage schemas are compatible. Any additional `config` and `ui.config` properties can be removed (apart from `config: {index: true}`).
6. If you did not index the metadata properties for the platform plugin then a re-index of `li-documents` will be necessary. If the platform plugin was already indexed you do not need to re-index.
7. All of the new functions are optional, so you will need to check how the old synchronisation worked and register the appropriate functions. The platform integration also has a UI within Desk-Net which allows you to limit when Livingdocs is informed of a change - this now needs to be handled within the Livingdocs functions.
8. The `createDocumentFunction`, `incomingElementToDocumentCommandsFunction`, and `outgoingDocumentToElementFunction` now replace any config-based mapping and transform functions. You will need to carefully consider the changes that were being applied and configure these in the new functions.
9. The `createElementFunction` is a new functionality, so you will need to decide if you would like users to be able to create Desk-Net stories by clicking a button in the document metadata form.
10. It is possible to keep a similar behaviour to the platform integration, while having the flexibility of the global integration, by using the global integration and returning `undefined` from the functions when the Desk-Net story is not assigned to a specific platform.
11. The Desk-Net Schedule will automatically work with the new configuration, however it still relies on Desk-Net stories being assigned to platforms on specific days for it to function correctly.
12. We do not recommend using `desknetApi.getFullElement()` due to the number of requests this need to make to load all of the data. Using the function too frequently can result in throttling and failed requests due to the Desk-Net rate limits. Please only load the data you require using more specific `desknetApi` requests.
