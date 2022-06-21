---
title: Publish Control
description: Publish, unpublish, scheduled publish, scheduled unpublish documents
weight: 1
---
## Overview

The «Publish Control» feature allows users to manage all things publishing and distribution of documents.

## Configuration
You can enable and configure the «Publish Control» per Content-Type:
In it's most basic form, Publish Control allows for immedia publish and unpublish only:
```js
{
  handle: 'myArticle',
  // ...
  publishControl: {}
}
```

You can enable the single capabilities per content-type:
```js
{
  handle: 'myArticle',
  // ...
  publishControl: {
    publishSchedule: true, // default: false
    unpublishSchedule: true, // default: false
  }
}
```