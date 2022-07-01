---
title: Scheduled Publishing
description: View and edit the scheduled publication date.
weight: 3
---

This guide will show you how to enable and use scheduled auto publishing / un-publishing.

Click the "Publish later" button to set a future auto publish date.

![publish-later](./publish-later.png)

A confirmation message is shown, if one wants to publish instantly while a publish later date is set.

![publish-later-now](./publish-later-now.png)

Click the "Un-Publish Later" button to set a future auto un-publish date.

![un-publish-later](./un-publish-later.png)

## Configuration

Publish later and un-publish later is by default disabled.

```js
{
  handle: 'myArticle',
  // ...
  publishControl: {
    publishSchedule: true, // default: false
    unpublishSchedule: true // default: false
  }
}
```
