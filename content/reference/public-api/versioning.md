---
title: API Versioning
weight: 2
# renderTOC: false
menus: public-api
# Examples of date based api versioning
# - Microsoft: https://learn.microsoft.com/en-us/linkedin/marketing/versioning?view=li-lms-2025-01
# - Stripe: https://stripe.com/blog/introducing-stripes-new-api-release-process
# - Shopify: https://shopify.dev/docs/api/usage/versioning
---

The Public API versioning allows Livingdocs to continuously evolve and improve the API without disrupting existing integrations.

By using a **release date based** versioning strategy, Livingdocs provides a transparent and clear timeline for when changes are introduced. To ensure you always know about upcoming API changes, we recommend that you regularly check the [changelog]({{< ref "./changelog" >}}) for updates.

> [!INFO]
> With the introduction of the new versioning strategy in `release-2025-03`, the `v1` and `beta` versions are now available as `2025-03` version. If you use any of those versions, you can safely change your integration to the `2025-03` version, which now contains both functionalities without any other changes.

### Release Schedule

Livingdocs ships a release every odd Month (January, March, May, July, September, November) and together with that a new version of the API is released. While we ship a new release every two months, it doesn't mean that every API version will have changes where you need to update your integrations.

We want our customers to have trust in stable integrations with reliable change schedules so that they can plan and execute better over time. That’s why plan to target a stable supported window of two years (minimum) for our APIs.

Exceptions might arise if there are critical security issues or if there are significant changes to the API that require immediate attention. In such cases, we will provide advance notice within the [changelog]({{< ref "./changelog" >}}) together with guidance on how to handle the changes.

We strongly recommend constantly updating your apps to make requests to the latest API version to reduce the risk of compatibility issues.

Whenever a request is made to an API version that's not available anymore, a `410 Gone` error will be returned.

![image](../api-versioning-schedule.svg)

### Deprecations

Parts of the Livingdocs API can be deprecated if it becomes unnecessary, unsafe, or outdated.
As general rule, deprecations are announced in the [changelog]({{< ref "./changelog" >}}) at minimum six months before they are removed.

There are multiple reasons why an API endpoint can be deprecated:

- A specific API endpoint received a breaking change in a newer API version.
  The older API version is still available as maintained version.
  Removal is scheduled with the regular support window.

  e.g. The endpoint `/api/2025-05/publications/search` receives a breaking change that is not compatible with `/api/2025-03/publications/search`. `/api/2025-03/publications/search` and older versions of this endpoint will be marked as deprecated 6 months before removal.
  Removal of `/api/2025-03/publications/search` is scheduled for `2027-05` with the regular support window.

- The API version is sunset as it reaches end of life and will get removed after six months.
  Usually this happens two years after introduction of the API version.

  e.g. All endpoints in `/api/2025-03` will be deprecated in `2026-11` and removed in `2027-05`.

- A specific API endpoint is no longer needed as the functionality in Livingdocs got removed or is not supported anymore.
  When the endpoint gets removed before we reach the end of life of the API version, we will announce it in the [changelog]({{< ref "./changelog" >}}) 6 months before the removal.
