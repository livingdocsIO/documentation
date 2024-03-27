---
title: Finite Products
weight: 11
menus:
  reference:
    parent: Project Config
---

Finite Products let's you define edition like documents.

Typically you will define at least two content types for this feature.

A `data-record` serving as the main edition document that holds references to pages within this edition with the metadata plugin [`li-issue-management`](../document//metadata/plugins/li-issue-management.md).

And then one or more `page-like` contentTypes for the pages of the edition.

Example configuration of such a setup:

```js
finiteProducts: [
  {
    issueContentType: 'digitalEdition',
    issueMemberContentTypes: ['digitalEditionPage']
  }
]
```

And in your `issueContentType` you will have to define at least one metadata property of type `li-issue-management` for this to work. You can find more details at the [documentation for `li-issue-management`](../document//metadata/plugins/li-issue-management.md).
