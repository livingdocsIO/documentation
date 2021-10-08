---
title: Scheduled Publishing
description: Add a schedule (on/off) time to an article.
weight: 9
---

This guide will show you how to add scheduled publishing (future publication) to an article.

![image](https://user-images.githubusercontent.com/172394/136517500-de986aea-4bfa-4014-99a9-667d1b3800de.png)


## Add publish/unpublish field to the metadata of the article

First you need to add 2 [metadata]({{< ref "/reference-docs/document/metadata" >}}) fields to the project config at `contentTypes['your-content-type'].metadata`. After that you are able to set the publish, unpublish date of a document in the editor's metadata.

```js
// content-type
metadata: [
  // ...
  {
    handle: 'publishDate',
    type: 'li-datetime',
    ui: {component: 'liMetaDatetimeForm'}
  }, {
    handle: 'unpublishDate',
    type: 'li-datetime',
    ui: {component: 'liMetaDatetimeForm'}
  }
]
```


## Define scheduled publishing for publication index

When you search for documents via public API (`api/v1/publications/search`), you also have to extend the project config at `contentTypes['your-content-type'].publicationIndex`.

```js
// content-type
publicationIndex: {
  sortDate: {
    fieldName: 'publishDate',
    type: 'li-datetime'
  },
  scheduledPublishing: {
    on: {
      fieldName: 'publishDate',
      type: 'li-datetime'
    },
    off: {
      fieldName: 'unpublishDate',
      type: 'li-datetime'
    }
  }
  // ...
},
```

The `sortDate` defines the date that is used to sort results in a publication search query. By default it’s just the `createdAt` timestamp of the publication. The configuration allows you to choose a separate metadata property from your metadata set that is used. The property must be a date type. A common use case is to take a metadata property that defines a first publication date (first time of publish).

The `scheduledPublishing` set allows you to define `on` and `off` dates. When set, all search queries to the publication index will automatically exclude publications that have a `sortDate` outside of the `on` and `off` bounds. This is how customers can define future publish and un-publish actions for an article, e.g. when there are blocking periods on the content due to confidentiality or copyright.



## Enable Scheduled Publishing UI in the Editor

Finally, you can enable the scheduled publishing UI in the Editor via editor config.

```js
// editor config
document: {
  customPublicationDateField: 'publishDate'
},
```

![image](https://user-images.githubusercontent.com/172394/136512341-830a9453-f67e-43c1-9183-fed384b4b650.png)
