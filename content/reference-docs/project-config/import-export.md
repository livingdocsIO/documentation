---
title: Import & Export
weight: 7
menus:
  reference-docs:
    parent: Project Config
---

{{< added-in release-2021-06 >}}

## Import

The `import` property is an object which contains an `allowedProjects` property. The `allowedProjects` property is an array of objects containing a `handle` property, which indicates the projects you would like to export to, along with (optional) information on how to map the source content and media types to the destination. Within `contentTypeMapping` and `mediaTypeMapping` the object keys are the source types (i.e. the type handles which belong to the document and media being copied), and the values are the destination types (i.e. the type handles used by the project you're adding the `import` config to). If the two projects you are moving documents between share the same types then there is no need to provide a mapping. However, if you would like to transfer a "regular" article from one project to a "print" article in another then you would add `contentTypeMapping: {regular: 'print'}`.

```js
import: {
  allowedProjects: [
    {
      // Allow documents to be imported from the "service" project
      handle: 'service',
      contentTypeMapping: {
        // sourceType: destinationType
        regular: 'regular'
      },
      mediaTypeMapping: {
        image: 'image',
        video: 'video'
      }
    }
  ]
}
```

## Export

The `export` property is a simplified version of the `import` property above. The objects inside the `allowedProjects` array only contain the `handle` property, which indicates the projects you would like to export to. All content type and media type mappings are handled within the import config.

```js
export: {
  allowedProjects: [
    {
      // Allow documents to be exported to the "service-clone" project
      handle: 'service-clone'
    },
    {
      handle: 'another-service'
    }
  ]
}
```
