---
title: Brand Conditions
type: changelog-entry
weight: 1

change:
  date: 2025-01
  type: feature
---

Conditional components provide the ability to render a component in the delivery based on a `brands` or `dateTime` condition. The conditions are stored with the component data and can be input in the Livingdocs Editor.

To support country- or brand-specific content, we are introducing a new component condition: the `brands` condition. This allows downstreams to configure a set of brands, from which one or more can be selected on components to define for which brands a component should be included. This condition works alongside the already existing `dateTime` condition.

{{< img src="../../../../operations/releases/release-2025-01-brands-condition.png" alt="Brands component condition" width="350" >}}

For more information, please refer to our [conditional components documentation]({{< ref "/reference/project-config/content-types/#conditional-components" >}}).

The `brands` condition is supported by all API endpoints where the existing `dateTime` component condition is supported:

- `GET /api/v1/documents/:documentId/latestPublication`
- `GET /api/v1/documents/latestPublications`
- `GET /api/v1/documents/:documentId/latestPublication/renditions/:renditionHandles`
- `GET /api/v1/publications/search`
- `GET /api/v1/document-lists/:id`
- `GET /api/beta/documents/:documentId/latestDraft`
- `GET /api/beta/documents/:documentId/latestPublication`
- `GET /api/beta/documents/latestPublications`
- `POST /api/beta/composition/:documentId`
