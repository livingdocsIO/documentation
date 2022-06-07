---
title: External Services
description: Additionally to the mandatory dependency on the databases livingdocs also depends on external services.
icon: toolbox
menu: operations
---

Additionally to the mandatory dependency on the databases (postgres, redis and elasticsearch), livingdocs also depends on a few external services. Many of them are configurable and optional.

Please consult the list below in case your security team needs to verify and whitelist them in your http proxy.

{{< img src="images/architecture-external-services.png" >}}

- **Object Storage (e.g. Amazon S3, Google Cloud Storage)**:
  - Used by the server to persist images, videos and files uploaded into the Media Library. Those files are usually served through an Image resizing Service or another CDN.

- **Image resizing Service (eg. imgix)**:
  - Used by the server in editing mode for cropping images.
  - Used by the editorial users browser to deliver responsive images.

- **Mail Service (eg. Amazon SES, SMTP)**:
  - For sending welcome and password reset emails.

- **Iframely**:
  - Design components with automatic metadata fetching from a third-party source (such components are optional) in the editorial users browser.
  - Automatic validity checks of entered links. Used by the editorial users browser.

- **Websockets (Pusher, optional)**:
  - To support real-time collaboration in the editor. The feature can be disabled, so this is optional. Used by the server in editing mode, as well as the editorial users browser.

- **Spellchecker (optional)**:
  - Livingdocs supports the integration of third-party spellcheckers. The feature can be disabled, so this is optional. Used by the editorial users browser.

- **Metrics, Tracing and Logging (optional)**:
  - Livingdocs logs in JSON and supports OpenTelemetry and Prometheus to monitor the applications.
  - We suggest to use Grafana, Loki, Tempo and Prometheus.
  - Services like Datadog offer an easy-to-use alternative to monitor the stack.

- There are other external services, called from the editorial- and / or end users browser. They don’t have an impact on the infrastructure and are solely listed for the sake of completeness.
  - **Track.js**: For tracking javascript errors
  - **Google Analytics**: for tracking users and behavior on the site

- **CDN (optional, eg. fastly, keyCDN, Cloudfront, Cloudflare)**:
  - Caching for static assets

### External services whitelist

### Editor
The following external service hosts have to be whitelisted on the proxy for the editor. Please note that this happens in the network where the editors browser is running, not the editor process.

- https://usage.trackjs.com
- https://stats.pusher.com
- wss://ws-eu.pusher.com
- https://api.mixpanel.com
- https://*.s3.amazonaws.com
  - eg. for images: `livingdocs-evaluation-images.s3.amazonaws.com`
  - eg. for designs: `livingdocs-evaluation-designs.s3.amazonaws.com`
- The host for the configured image service (eg. https://xyz.imgix.net or https://app.resrc.it)
- Any host your customizations are using

### Server
The following external service hosts have to be whitelisted on the proxy for the server. This concerns the network where the server process is running.

- The host to your livingdocs design server (eg. http://api.livingdocs.io if you're using the default design server)
- The hosts for the configured S3 buckets
  - eg. for images: `livingdocs-evaluation-images.s3.amazonaws.com`
  - eg. for designs: `livingdocs-evaluation-designs.s3.amazonaws.com`
- The host for your mail server (eg. https://email.eu-west-1.amazonaws.com if you're using our evaluation account
- The host for your Hugo instance
- Any host your customizations are using

### Delivery
- The host to your livingdocs design server (eg. http://api.livingdocs.io if you're using the default design server)
- The host to your livingdocs server (if it's not in the same network)

### Connecting to external services through a proxy

Often times, the application processes are not allowed to have direct access to the internet for security reasons. In this case, Livingdocs can be configured to run all outgoing connections through a proxy

{{< img src="images/architecture-proxy.png" >}}
