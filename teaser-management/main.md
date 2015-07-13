# Teaser Management

The Livingdocs Teaser Management system allows to generate and manage aggregate pages of article teasers that are typically used to render start pages or topic pages such as for sport, news, or fashion.

The Livingdocs TM allows both, definition of manually ordered lists and automatically updating lists as well as combinations of both (more below).

## Table of contents

- Teaser Management Overview (this page)
- [Creating your own teasers](./teaser_definition.md)
- [Assigning teasers to lists](./teaser_assignment.md)
- [Elastic search indices in detail](./elastic_indices.md)
- [A sample frontend app for aggregate pages](./sample_app.md)

## Main concepts

### Teaser

A teaser is a short abstract for an article. Typically it consists of a title , an image, and some metadata such as author and date, but the design definition of teasers is just as free as any other Livingdocs component. There can be several types of teasers, e.g. for head-articles and updates.

Teasers are rendered just like any other Livingdocs component. The data to render the teaser (title, etc.) comes from a document's metadata. This metadata is typically defined and/or edited when publishing a document such as selecting a good teaser image for different aspect ratios.

### List

A list is a structure over teasers. The list itself is NOT a visual representation, but only a structuring of content. Every document is assigned to one or more lists upon publishing. The assignment can be either manual, i.e., the editor selects from a list of available "lists", or automatic for example through a text-analysis that assigns a document to its related lists.

Every list is assumed to be infinite in theory. The definition of a list contains a value of how many teasers should be manually controlled. In addition it contains an elastic search query that is used to "fill up" the list. For example we can define a manual controlled number of 5 and show the list in a container (see below) with 20 teasers. This would mean that an editor can manually control the order and appearance of the first 5 teasers, and the remaining 15 teasers are fetched using the list's elastic search query from the available assigned documents.

To sum up, in order to appear in a list a document has to be:
- assigned to the list (manually or automatically)

AND

- be placed in the Livingdocs TM manually 

OR

- "filled up" from the list's elastic search query 

### Container

A container is a visual representation of a list. The container defines how many teasers from a list should be shown (since a list is in theory infinite) and what teaser types should be used to render them, e.g., a head teaser for the first document, and a feed teaser for subsequent documents.

Containers can be used just like any other Livingdocs component within the Livingdocs editor to either define Page Documents (Page Management) or place teaser containers within other documents.

Frontends query the containers to get the necessary definitions to render finsihed pages. This includes:
- getting the pre-rendered teasers for the manually ordered teasers (if any)
- getting the elastic search query for "filling up"
- getting the teaser type definition to render the filled up teasers
- getting additional metadata such as placeholders for an ad system

### Page

A page is a special kind of Livingdocs document. This document allows editors to place, layout, and create containers and use a limited set of document components, e.g., to write headlines. Pages are edited in the Livingdocs editor just like regular documents. Good examples of pages are a newspaper's start page or a navigation point.

Pages are also commonly used to generate site navigations. The simplest method is to just take all the available pages and create a navigation point for each. More complex navigations are possible but currently not editable within Livingdocs. Frontend apps can build their own logic to create more complex navigations.

## Technical Details

![Teaser Management Overview](./overview.png)

### Storage layers

There are three different kinds of storage layers for a running Livingdocs system:
- Livingdocs (the editing part)
- Elastic search (the delivery storage)
- Frontend apps (the view layer)

In theory a frontend app could work without a storage mechanism, i.e., a browser-only app. In practice, it makes a lot of sense though to use some kind of view layer storage such as a Symphony app or similar setups that can use caches and store some intermediate information.

### The Livingdocs layer

Livingdocs defines the document data type. A document is based upon revisions, which are the different versions of a document. This API is internal and external applications such as frontend apps do not need to worry about those details.

Documents are edited within the Livingdocs editor, a WYSIWIG editor that allows users to layout and edit their content directly in the browser. The Livingdocs editor stores the document data in the Livingdocs server which exposes a restful API. To learn more about the editing API see the respective documentation on the server (customers only).

It is important to note that technically both, a document as well as an aggregate page such as a newspaper's start page are Livingdocs documents and are edited in the Livingdocs editor. They differ only in the kinds of components that are available. To learn more about components, see the design documentation.

### The elastic search layer

Elastic search defines three different kinds of viewing a document:
- as a document (identity view)
- as a publication
- as a teaser

The document view is used for the search feature that is available within the Livingdocs editor but could also be replicated in a frontend (though in a frontend it probably makes more sense to only search within the publications).

The publication view is used for document pages. A publication has all the necessary data to render an single document, including the fully rendered HTML body. Typically, a frontend that wants to render a document page will query the publication index for the necessary data.

The teaser view is used for aggregated pages. It does only contain the pre-rendered HTML for the document's abstracts that are used to teaser documents on start pages and the like as well as some metadata, but it does NOT contain the complete rendered HTML body of a document. The teaser index is rarely used directly, but a frontend app will first query a container for the required teaser ids or teaser query and then query the teaser index with this.

The containers do not provide a view on a Livingdocs document. They are a self-contained entity in elastic search that defines a special kind of component: a visual representation of a list of documents. Careful: Although this could be assumed from the graphic, containers are not a view upon document lists, they are conceptually different (see the main concepts section above).

### The frontend layer

Frontends will typically need to deliver documents as well as some kind of aggregation such as a newspaper's start page or a blog's feed. Frontends can be written in any language, be it a web app or native technologies.

Rendering of a document page is trivial given the id of the document. The frontend can simply query elastic search for the document and use the pre-rendered HTML body to show the document. Of course it can also enrich the content with additional information or use the document's metadata. Typically, a frontend app will also cache the document in some kind of frontend cache, e.g., Varnish.

Rendering of aggregate pages is typically more involved. A frontend app gets the definition of a Page's container arrangement from a Page (remember: this is a kind of Livingdocs document). It will then query each container in turn and for each container query the teaser index to get the appropriate pre-rendered teasers. Containers typically define additional visual properties such as the type of teaser to use or placeholders for ad systems. It is the job of the frontend app to take all this information together and create a deliverable aggregate page.

[Next: Creating your own teasers](./teaser_definition.md)
