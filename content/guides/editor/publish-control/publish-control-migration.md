---
title: Publish Control Migration Guide
description: Migrate from "Prepare Publish" to "Publish Control" workflow
weight: 2
---

## Goal

If you come from the deprecated `Prepare Publish` workflow, this guide gives you an idea how to migrate to a `Publish Control` workflow.

## Starting Position

Livingdocs is introducing a new publish flow. We call it `Publish Control` and will combine and standardize all things around publishing, scheduling publications and distribution features (lists, inboxes) in a central place.

If you compare the supported features from `Prepare Publish` and `Publish Control` it get's obvious why you should migrate to `Publish Control`:

**Prepare Publish Features**
- Instant Publish / Unpublish

**Publish Control Features**
  - Instant Publish / Unpublish
  - Scheduled Publish / Unpublish
  - Embargo Management (documents with an embargo defined cannot get published)
  - Significant Updates (marking publications as significant (to show your readers, when an existing article got a significant update))
  - Visible Publication Date (management of a date (with user edit possibilities) to show as the publication date to your readers)


As seen `Prepare Publish` only supported an instant publish/unpublish. The proposed solution for having the other features was to add metadata fields (dates) for the other use cases and then do the whole logic in the delivery.

There are a a few different setups implemented from customers and we can't handle every scenario. Therefore we give you a rough guide to migrate to the `Publish Control` flow, but you have to find your own configuration.

### 1) Disable Prepare Publish

- Remove the editor config `document: {customPublicationDateField: 'publishDate'}`
- Remove the publicationIndex in your Project Config `contentTypes['your-content-type'].publicationIndex`

### 2) Enable Publish Control

Enable Publish Control for your Content Type:

```js
{
  handle: 'myArticle',
  // ...
  publishControl: {}
}
```

### 3) Enable the new Features

Get familiar with the new features and decied what you want to enable for `Publish Control`

- [Publish Control Basics]({{< ref "/guides/editor/publish-control/publish-control-basics" >}})
- [Scheduled Publishing]({{< ref "/guides/editor/publish-control/scheduled-publishing" >}})
- [Visible Publication Date]({{< ref "/guides/editor/publish-control/visible-publication-date" >}})
- [Significant Update]({{< ref "/guides/editor/publish-control/significant-update" >}})
- [Embargo]({{< ref "/guides/editor/publish-control/embargo" >}})

### 4) Backwards Compatibility for the Delivery

We assume your delivery has some publication flow logic and as long as you don't access to the [Visible Publication Date]({{< ref "/guides/editor/publish-control/visible-publication-date" >}}), you have to make your application backwards compatible.

A simple solution is to take the data from Publish Control and put them in your old metadata fields.

If you had implemented a scheduled publish field in `metadata.scheduleDate`, you can ...

TODO: whats the best solution?
- if you have your own plugin, update the on? metadata hook
- if you have used li-datetime, copy paste the plugin and do the same as before
- onPreparePublish server hook doesn't work because for scheduled publishing there is not publish data yet
- 3 step migration process?
  - 1) update frontend to fetch both data (publishcontrol + metadata)
  - 2) switch server
  - 3) update frontend to fetch publishcontrol only


TODO: provide a migration script where you can put data from metadata.publishField to visiblePublication date?
