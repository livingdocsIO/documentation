---
title: Scheduled Publishing
description: View and edit the scheduled publication date.
weight: 3
---

This guide will show you how to enable and use scheduled auto publishing / un-publishing.

Click the "Publish later" button to set a future auto publish date.

{{< img src="publish-later.png" alt="publish-later" >}}

A confirmation message is shown, if one wants to publish instantly while a publish later date is set.

{{< img src="publish-later-now.png" alt="publish-later-now" >}}

Click the "Un-Publish Later" button to set a future auto un-publish date.

{{< img src="un-publish-later.png" alt="un-publish-later" >}}

## Configuration

Publish later and un-publish later is by default disabled.

```js
{
  handle: 'myArticle',
  // ...
  publishControl: {
    publishSchedule: true, // default: false
    unpublishSchedule: true // default: false, rarely used, only enable that with a very specific reason
  }
}
```
