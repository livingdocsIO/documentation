---
title: News Agencies
weight: 12
menus:
  reference:
    parent: Project Config
draft: true
excludeFromSearch: true
---

{{< added-in "release-2025-07" block >}}

Livingdocs provides built-in support for News Agencies, allowing editorial teams to review and process incoming reports from agencies directly within the Livingdocs Editor. With a single click, editors can convert incoming reports into articles, ready for editing and publication.

<!-- For instructions on how to set it up, please refer to our [integration guide]({{< ref "/guides/integrations/news-agencies" >}}).  -->

For instructions on how to set it up, please refer to our integration guide.
The configuration is located in the Project Config under the `newsAgency` property.

```js
newsAgency: {
  // Required. References a registered news agency function. This function is
  // used to copy news agency reports into regular articles or, in the
  // auto-publish flow, to also update already copied articles.
  functionHandle: 'someNewsAgencyFunction',

  // Optional. Configures the news agency screens.
  screens: [
    {
      // Required. Handle identifying the news agency screen.
      handle: 'newsAgencyReports',

      // Optional. Title displayed at the top of the news agency screen.
      pageTitle: {en: 'Agency Inbox', de: 'Agentureingang'},

      // Optional. Defines the strategy used to search news agency reports.
      search: {strategy: 'simple'},

      // Optional. Further restricts the displayed news agency reports.
      // Regardless of baseFilters, only reports imported through manual flows
      // with the content type `liNewsAgencyReport` are shown.
      baseFilters: []
    }
  ],

  // Optional.
  // - Maps raw source values to descriptive or localized labels shown in the
  //   Livingdocs Editor.
  // - Defines what source display filter options appear on news agency screens.
  // {{< added-in "release-2025-09" >}}
  sources: [
    {label: 'afp', value: 'afp'},
    {label: 'dpa', value: 'dpa'},
    {label: 'sid', value: 'sid'}
  ],

  // Optional.
  // - Maps raw category values to descriptive or localized labels shown in the
  //   Livingdocs Editor.
  // - Defines what category display filter options appear on news agency
  //   screens.
  // {{< added-in "release-2025-09" >}}
  categories: [
    {label: {en: 'Politics', de: 'Politik'}, value: 'politics'},
    {label: {en: 'Economy', de: 'Wirtschaft'}, value: 'economy'},
    {label: {en: 'Sports', de: 'Sport'}, value: 'sport'},
    {label: {en: 'Feuilleton', de: 'Feuilleton'}, value: 'feuilleton'},
    {label: {en: 'Media', de: 'Medien'}, value: 'media'},
    {label: {en: 'Other', de: 'Sonstiges'}, value: 'other'}
  ],

  // Optional. Configures the categories shown in the notification settings.
  // The values should match the available categories.
  // {{< added-in "release-2025-09" >}}
  notifications: [
    {
      handle: 'politics',
      label: {en: 'Politics', de: 'Politik'},
      category: 'politics'
    },
    {
      handle: 'feuilleton',
      label: {en: 'Feuilleton and Media', de: 'Feuilleton und Medien'},
      category: ['feuilleton', 'media']
    }
  ]
}
```
