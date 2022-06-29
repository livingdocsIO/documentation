---
title: Publish Control Basics
description: Publish, unpublish, scheduled publish, scheduled unpublish documents
weight: 1
---
## Overview

The «Publish Control» feature allows users to manage the publication and distribution flow of documents.

## Configuration

You can enable and configure the «Publish Control» per Content-Type:
In it's most basic form, Publish Control allows for immediate publish and unpublish only:

```js
{
  handle: 'myArticle',
  // ...
  publishControl: {}
}
```

You can enable the single capabilities per content-type, in this case Scheduled Publishing:

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