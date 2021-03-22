---
title: References
weight: 8
menus:
  reference-docs:
    parent: Content Model
    name: References
---

References are stored for documents and media library entries. They indicate links from the document or entry to other content.

References for publications are currently available using the `documents/:documentId/latestPublication` and `documents/latestPublications` endpoints in the "Beta" section of the [Public API](https://edit.livingdocs.io/public-api).

To find *incoming* references, which point to the document or media library entry that you specify, there are also endpoints available in the "Beta" section of the [Public API](https://edit.livingdocs.io/public-api). These endpoints can be particularly useful when working with statically generated sites, as they allow you to make decisions on which caches should be cleared when content changes.

## Examples

### Within document content

References extracted from the content of a document provide details of the item they are referencing (`id` and `type`) along with contextual information to help locate the reference within the document.

#### Include directive params:

```
{
  type: 'document',
  id: '466',
  location: 'include-directive',
  componentId: 'doc-478e2',
  componentName: 'social-media-embed',
  directiveName: 'embed',
  serviceName: 'twitter-include',
  propertyName: 'document'
}
```

#### Include directive override:

```
{
  type: 'document',
  id: '223',
  location: 'include-directive-override',
  componentId: 'doc-472ka3',
  componentName: 'article-teaser',
  directiveName: 'teaser',
  serviceName: 'document-teaser',
  overrideId: 'doc-9203a',
  overrideDirectiveName: 'title'
}
```

#### Image:

```
{
  type: 'image',
  id: 'eud8373',
  location: 'image-directive',
  componentId: 'a',
  componentName: 'image',
  directiveName: 'image'
}
```

#### Video:

```
{
  type: 'video',
  id: '9ojS1u2-wljb',
  location: 'video-directive',
  componentId: 'a',
  componentName: 'video',
  directiveName: 'video'
}
```

#### Inline link:

```
{
  type: 'document',
  id: '938',
  location: 'editable-directive',
  componentId: 'doc-a4729a',
  componentName: 'paragraph',
  directiveName: 'text'
}
```

### Within metadata

References extracted from the metadata of a document or media library entry also provide details of the item they are referencing (`id` and `type`), but only require simple contextual information (`location: 'metadata'` and `propertyName`) to help locate the reference.

#### li-reference:

```
{
  type: 'document',
  id: '537',
  location: 'metadata',
  propertyName: 'author'
}
```

#### li-reference-list:

```
{
  type: 'documents',
  ids: ['537', 745'],
  location: 'metadata',
  propertyName: 'relatedDocuments'
}
```

#### li-image:

```
{
  type: 'image',
  id: '48k2h38',
  location: 'metadata',
  propertyName: 'teaserImage'
}
```

#### li-language:

```
{
  type: 'language-group',
  id: '4e5rt7',
  location: 'metadata',
  propertyName: 'language'
}
```
