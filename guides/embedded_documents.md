# Embedded Documents / Editable Teasers

With `release-2020-12` a new possibility to resolve includes is available. This feature is still somewhat experimental and some usecases are not covered yet.

You can return Livingdocs Document JSON from an [include resolve function](../evaluation-guide/intro.md).
If you mark the return value as editable, a user can overwrite the single directive values within the local document. These overwrites will be stored and sent to the include resolve function for consideration.
This allows the implementation of an Editable Teaser workflow.

An example of an includes return value:
```js
{
  // if editableContent is true, the user can locally edit the content
  editableContent: true,
  content: [{
    id: `teaser-${documentId}`,
    // a Component with the name `teaser` needs to be configured in the design
    component: 'teaser', 
    // the content contains the values for the directives configured on the `teaser` component
    content: {
      image: metadata.teaserImage,
      title: documentVersion.getTitle(),
      lead: 'Lead',
      byline: 'Byline',
      link: 'https://example.com'
    }
  }
```

Here is an includes configuration you would want to consider for the editable teaser usecase:
```js
{
  name: 'editable-teaser',
  paramsSchema: [
    // this will render a UI in the document editing sidebar to let the User select a document with
    // the contentType `regular` to link to.
    {
      handle: 'article',
      type: 'li-reference',
      config: {
        referenceType: 'document',
        documentType: 'article',
        contentType: ['regular']
      },
      ui: {
        label: 'Teaser'
      }
    }
  ],
  rendering: {
    type: 'function',
    render (params, options) {
      return renderTeaser({params, options, publicationApi, documentApi})
    }
  }
}
```

## Caveats
- `editableContent` has no effect when more than one component is returned.
- The includes won't be resolved when you load the publication via Public API `api/v1/documents/:documentId/latestPublication`.
- When requesting a web rendition of a publication, the components returned from the include resolver won't be part of rendered html for now.