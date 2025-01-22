---
title: Editable Document Teasers
description: Register an include service to render teasers which can be edited on the page they are embedded in
weight: 4
---

Editable Document Teasers based on [Includes]({{< ref "/reference/document/includes" >}}) and an extended version of [Document Teasers]({{< ref "/guides/documents/includes/document-teasers" >}}) provide a simple way to setup teasers and the possiblity to define the UI with a `paramsSchema`.

If you set `editableContent: true` as return value, a user can overwrite the single directive values within the local document. These overwrites will be stored and sent to the include resolve function for consideration.
This allows the implementation of an Editable Teaser workflow.

An example of an includes return value:

```js
{
  // if editableContent is true, the user can locally edit the content
  editableContent: true,
  content: [
    {
      id: `teaser-${documentVersion.systemdata.documentId}`,
      // a Component with the name `teaser` needs to be configured in the design
      component: 'teaser',
      // the content contains the values for the directives configured on the `teaser` component
      content: {
        image: documentVersion.metadata.teaserImage,
        title: documentVersion.metadata.title,
        lead: 'Lead',
        byline: 'Byline',
        link: {href: 'https://example.com'}
      }
    }
  ]
}
```

Here is an example includes configuration to consider for the editable teaser usecase:

```js
{
  name: 'editable-teaser',
  paramsSchema: [
    // this will render a UI in the document editing sidebar to let the User select an article
    {
      handle: 'article',
      type: 'li-document-reference',
      config: {
        documentType: 'article',
      },
      ui: {
        label: 'Teaser'
      }
    }
  ],
  rendering: {
    type: 'function',
    render (params, context) {
      return renderTeaser({params, context, publicationApi, documentApi})
    }
  }
}
```

This is how your Teaser Component looks like in this case:

```js
{
  name: 'teaser-include',
  label: 'Teaser',
  iconUrl: 'URL to an SVG icon',
  directives: [
    {
      name: 'teaser',
      type: 'include',
      service: 'editable-teaser',
      paramsSchemaExtension: [
        {
          name: 'article',
          config: {
            // configure base filters for the article search modal
            contentType: ['regular'], // only document of contentType 'regular'
            published: true // only published documents
          }
        }
      ]
    }
  ],
  html: `
    <div doc-include="teaser">
      <div>Link an Article</div>
    </div>
  `
}
```

## Caveats

- `editableContent` has no effect when more than one component is returned.
- The includes won't be resolved when you load the publication via Public API `api/v1/documents/:documentId/latestPublication`.
- When requesting a web rendition of a publication, the components returned from the include resolver won't be part of rendered html for now.

## References

- [Includes Overview]({{< ref "/reference/document/includes" >}})
