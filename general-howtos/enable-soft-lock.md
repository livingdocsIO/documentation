# Enable Soft Lock

With a soft lock a user can indicate that she wants the document for herself and not to be disturbed by other editors taking over. Other editors are still able to take over \(thus soft lock\) but they need to confirm that they want to overwrite the soft lock. A soft lock has a configurable timeout after which it expires. If the user that requested the soft lock leaves the document, the soft lock will be automatically released. Same goes for closing of the browser.

Once the soft lock is enabled for a content-type \(e.g. articles\) a "Lock" button will be visible in the top toolbar.

## Enable soft lock

### Configurable Metadata config

If you are running with the \(new\) configurable metadata config, you can configure this plugin over the UI. Just navigate to the Project Setup, select the desired content-type \(e.g. articles\), head over to the Metadata tab and add the Metadata Plugin "Document Soft Lock". In the sidebar you can set the desired timeout for the soft lock in minutes.

### Static Metadata config

If you still have a static JSON configuration, you can add the following code snippet to your metadata configuration array:

```text
{
  handle: 'documentSoftLock',
  type: 'li-document-soft-lock',
  config: {
    lockTimeout: 5 // change to your desired timeout in minutes
  }
 }
```

Note: you have to do this for each content-type that you want to have the soft lock functionality, e.g. articles and pages.

