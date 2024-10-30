---
title: Desk-Net to Kordiam Migration
description: Desk-Net is becoming Kordiam, how to migrate the Livingdocs integration
---

In August 2024, it was announced that [Desk-Net would be renamed to Kordiam](https://support.kordiam.io/hc/en-us/articles/14759979009948-Desk-Net-Becomes-Kordiam-Impact-on-Integrations). 

If you are using the Desk-Net integration in Livingdocs, you don't need to make any changes to your integration at the moment. 

During the transition period (a few months) Desk-Net/Kordiam will support both addresses: `desk-net.com` and `kordiam.app`. There will also be no change needed the code and the login details (credentials) will remain the same.

At a certain point, you will need to update your integration to use the new Kordiam API endpoint.

## If you are running release-2023-11 or later

You are running a release of Livingdocs that supports the new `apiEndpoint` setting. 

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
You are running a release of Livingdocs that does not support the new `apiEndpoint` setting. 
For now, you can continue to use the `desk-net.com` endpoint, as long as it's supported by Desknet/Kordiam. 

However, you should prioritise updating your Livingdocs to a newer release as soon as possible. The integration will stop working at some point in the future. We can't support you in this case.