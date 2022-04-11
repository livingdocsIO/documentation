---
title: Document Creation
renderTOC: false
menus:
  learn:
    weight: 1
    parent: Document Lifecycle
---

The document creation lifecycle handles all steps until the document has been created for the first time. Later updates are handled by the document update lifecycle. As you can see, the document import and the document creation by the editor has not exact the same steps and should be considered when handling documents via the import.

Below is a diagram for the document creation lifecycle. You don't need to fully understand everything going on right now, but as you learn and build more, it will be a useful reference.

{{< img src="assets/document-creation-lifecycle.png" alt="Document Creation Lifecycle" >}}

1. For every `ContentType` you can define [`defaultContent`]({{< ref "/reference-docs/project-config/content-types#default-content" >}}) and [`defaultMetadata`]({{< ref "/reference-docs/project-config/content-types#default-metadata" >}}) which will be merged with passed content/metadata (passed data are preferred).
2. content (import) and metadata (import + editor) will be validated in a next step
3. metadata plugin hook [`onUpdate`]({{< ref "/reference-docs/server-extensions/metadata-plugins#write-a-custom-plugin" >}}) will be called
4. Save the document on the database
5. Call the server event [`document.create`]({{< ref "/reference-docs/server-extensions/server-events#available-events" >}})
