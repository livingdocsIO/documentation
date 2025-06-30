---
title: News Agencies
weight: 12
menus:
  reference:
    parent: Project Config
---

{{< added-in "release-2025-07" block >}}

Livingdocs provides built-in support for News Agencies, allowing editorial teams to review and process incoming reports from agencies directly within the Livingdocs Editor. With a single click, editors can convert incoming reports into articles, ready for editing and publication.

For instructions on how to set it up, please refer to our [integration guide]({{< ref "/guides/integrations/news-agencies" >}}). The configuration is located in the Project Config under the `newsAgency` property:

- `functionHandle` refers to a registered news agency function. This function is used to copy news agency reports into regular articles or, in the auto-publish flow, to also update already copied articles.
- `screens` defines one or more news agency screens in the Livingdocs Editor.

```js
newsAgency: {
  functionHandle: 'someNewsAgencyFunction',
  screens: [
    {
      handle: 'newsAgencyReports',
      pageTitle: {en: 'Agency Inbox', de: 'Agentureingang'},
      search: {strategy: 'simple'},
      // Further restricts the displayed news agency reports. Regardless of
      // baseFilters, only reports imported with manual flows of content type
      // liNewsAgencyReport are shown.
      baseFilters: [],
      // The displayFilterOptionsSource and displayFilterOptionsCategory
      // properties configure the filter options shown on the screen. If no
      // options are set, the display filter won't be shown.
      displayFilterOptionsSource: [
        {label: 'afp', value: 'afp'},
        {label: 'dpa', value: 'dpa'},
        {label: 'sid', value: 'sid'}
      ],
      displayFilterOptionsCategory: [
        {label: {en: 'Politics', de: 'Politik'}, value: 'politics'},
        {label: {en: 'Economy', de: 'Wirtschaft'}, value: 'economy'},
        {label: {en: 'Sports', de: 'Sport'}, value: 'sport'},
        {label: {en: 'Feuilleton', de: 'Feuilleton'}, value: 'feuilleton'},
        {label: {en: 'Media', de: 'Medien'}, value: 'media'},
        {label: {en: 'Other', de: 'Sonstiges'}, value: 'other'}
      ]
    }
  ]
}
```