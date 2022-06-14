---
title: Document Soft Lock
description: Allow editors to lock documents and state the intention that they don't want to be disturbed by other editors.
weight: 4
---

With a soft lock an editor can indicate that she wants the document for herself and not to be disturbed by other editors taking over (usually used by Proofreaders). Other editors are still able to take over (thus soft lock) but they need to confirm that they want to overwrite the soft lock.
A soft lock has a configurable timeout after which it expires.
If the user that requested the soft lock leaves the document, the soft lock will be automatically released. Same goes for closing of the browser.

Once the soft lock is enabled for a content-type (e.g. articles) a "Lock" button will be visible in the top toolbar.

{{< img src="document-soft-lock.png" alt="Document Soft Lock" >}}

## Enable soft lock

Add the following metadata json to the content-type for which you want a the soft lock to be active:
```
{
  handle: 'documentSoftLock',
  type: 'li-document-soft-lock',
  config: {
    lockTimeout: 5 // change to your desired timeout in minutes
  }
 }
```

Note: you have to do this for each content-type that you want to have the soft lock functionality, e.g. articles and pages.
