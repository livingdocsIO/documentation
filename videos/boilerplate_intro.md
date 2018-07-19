## Boilerplate Introduction

Speakers: Mathieu Pavageau, core developer at Livingdocs and Sternwald developers (integrators)

Date: 16.8.2017

Length: 2 hours

### Abstract

Learn about the basics of the Livingdocs architecture and how to setup the boilerplate projects with configuration and basic customizations such as metadata or doc-includes.

### Video

{% vimeo %}229998718{% endvimeo %}

### Related Material

The boilerplates:
- https://github.com/livingdocsIO/livingdocs-server-boilerplate
- https://github.com/livingdocsIO/livingdocs-editor-boilerplate

The open-source boilerplate design from Livingdocs: https://github.com/livingdocsIO/livingdocs-design-timeline

Basically everything in this documentation that is under the section "Livingdocs Customizations"

### Questions from the video

- You can register features, can you overwrite existing ones?
> We strongly advise against it.

- Can we have other `document_type` than `article` and `page`?
> At the moment no, it’s something that will come in the future in the form of `content_type`.
> But as discussed in the zoom call your use case should be covered by creating different `layout`s in the design.

- How long is the process time, for 1 million documents, needed to update Elasticsearch and Postgres if:
  - we add a new metadata field
  - we change an already existing metadata field

> Both require a metadata migration. A run of comparable size takes around 8 hours at the NZZ.

- During this reindexing/migration how do you ensure availability?
> All articles will be migrated and saved with a new revision version. But they will not be linked to the current document. Then you can apply a migration and the documents are linked with the newest revision

- In the publication screen, how would you populate a metadata field with a dynamic list of departments?
> You use the [multi-select](../reference-docs/editor-configuration/metadata.html#multiselect-box) In the `getSelectables` you do an ajax request to where you get your dynamic departments from.

- Is there any limitations in listing documents in the dashboards: maximum number of documents, filtering problems?
> No.

- How can you create a plugin to prefill a field in the article as the NZZ does for the author?
> See the [documentation](../reference-docs/common-designs/design_config.html#prefilled-components)

- How can we add Woodwing and NewsNT from the boilerplate?
> See the [documentation](../reference-docs/server-print-api/print-api.html) Maybe not fully up-to-date though.
