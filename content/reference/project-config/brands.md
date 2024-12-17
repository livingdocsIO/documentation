---
title: Brands
weight: 11
menus:
  reference:
    parent: Project Config
---

Brands allow you to manage different variations of your product. For example:

- Regional publishers can use brands to represent different print editions.
- Multinational news organizations can use brands to represent different countries or regions.

You can define your brands in the Project Config. Each brand requires an icon, which is displayed in the user interface.

```js
[
  {
    handle: 'brand1',
    label: 'Example Brand 1',
    iconUrl: 'https://example.com/brand1.svg',
    isDefault: true
  },
  {
    handle: 'pt',
    label: 'Example Brand 2',
    iconUrl: 'https://example.com/brand2.svg'
  }
]
```

## Usage

When retrieving a document via the API, you can specify a brand for which the document is composed. The provided brand is used in two features:

- [Component Conditions]({{< ref "/reference/project-config/content-types/#conditional-components" >}}): These allow you to specify the brands for which a component should appear. Livingdocs ensures that only content enabled for a requested brand is included in the response.