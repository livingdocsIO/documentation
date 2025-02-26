---
type: release-note-change
title: Comyan upload without `targetMediaType` and metadata mapping

change:
  release: release-2025-01
  section: Integrations
  service: server
  change: breaking
---

It's no longer possible to use the Comyan integration without providing a `targetMediaType` and a Comyan metadata mapping config in that media type definition. Please provide `targetMediaType` in Comyan integration settings and `comyanExtraction` in the media type. In the project configuration:

```
{
  settings: {
    integrations: {
      comyan: {
        targetMediaType: 'image'
      },
      mediaTypes: [
        {
          type: 'mediaImage',
          handle: 'image',
          comyanExtraction: {
            mappings: []
          }
        }
      ]
    }
  }
}
```

Server PR: [Comyan upload without `targetMediaType` and metadata mapping](https://github.com/livingdocsIO/livingdocs-server/pull/7557)
