---
title: Document Publication
renderTOC: false
menus:
  learn:
    weight: 2
    parent: Document Lifecycle
---

The document publication lifecycle handles all steps for publishing a document.

Below is a diagram for the document publication lifecycle. You don't need to fully understand everything going on right now, but as you learn and build more, it will be a useful reference.

{{< img src="assets/document-publication-lifecycle.png" alt="Document Publication Lifecycle" >}}

1. Start "Prepare Publish" phase where you still can modify the document, validate data and throw errors back to the callee
2. Call metadata plugin hook [`onPreparePublish`]({{< ref "/reference-docs/server-extensions/metadata-plugins#write-a-custom-plugin" >}}) (modify metadata property, validation)
3. Call server hook [`preparePublishHook`]({{< ref "/reference-docs/server-extensions/server-hooks#publication-hooks" >}}) (modify document, validation).
4. Start "Publication" phase
5. Save the publication on the database
6. Call server event [`document.update`]({{< ref "/reference-docs/server-extensions/server-events#available-events" >}})
7. Call server event [`document.publish`]({{< ref "/reference-docs/server-extensions/server-events#available-events" >}})
8. Call server hook [`postPublishHook`]({{< ref "/reference-docs/server-extensions/server-hooks#publication-hooks" >}}) (notify other systems).