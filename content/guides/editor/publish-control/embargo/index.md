---
title: Publication Embargo
description: Add an embargo to prevent the publication of an article.
weight: 6
---

This guide will show you how to set a publication embargo to prevent the publication of an article.

{{< img src="embargo-indefinite.png" alt="indefinite-embargo" >}}

Embargos can only be set for un-published articles.

{{< img src="embargo-disabled.png" alt="embargo-disabled" >}}

## Indefinite Embargo

An article gets indefinitely embargoed by checking the "Indefinite embargo" checkbox. This will prevent the publication of the article and also prohibits scheduling a "Publish Later" date.

{{< img src="embargo-indefinite.png" alt="indefinite-embargo" >}}

## Embargo with an expiration date

When an embargo is set with an expiration date, then any publication is prevent but a publication can be scheduled for after the expiration of the embargo.

{{< img src="embargo-until.png" alt="embargo-until" >}}

{{< img src="embargo-publish-later.png" alt="publish-later" >}}

## Configuration

The publication embargo is by default disabled.

```js
{
  handle: 'myArticle',
  // ...
  publishControl: {
    embargo: true, // default: false
  }
}
```
