---
title: Author Management
bullets:
  - Create a Data Record for authors
  - Reference authors in metadata
  - Prefill authors in bylines
weight: 1
---

Livingdocs provides the ability to manage authors as structured data within their own content-types. Those can be linked as document references in articles in order to assign an author to a document.

## Configuration

The author management can be completely setup using the Project Setup.

### Author content type

If you don't have an author content-type yet, create one in the via the CLI as follows.

```
{
  handle: 'author', 
  documentType: 'data-record',
  isAuthor: true,
  info: {
    label: 'Author'
  }, 
  metadata: [
    {
      id: '27', 
      handle: 'prename', 
      type: 'li-text', 
      ui: {
        component: 'liMetaTextForm', 
        config: {
          label: 'Prename', 
          placeholder: 'Enter a prename...', 
          maxLength: 200
        }
      }, 
      config: {
        maxLength: 200
      }
    },
    {
      id: '28', 
      handle: 'surname', 
      type: 'li-text', 
      ui: {
        component: 'liMetaTextForm', 
        config: {
          label: 'Surname', 
          placeholder: 'Enter a surname...', 
          maxLength: 200
        }
      }, 
      config: {
        maxLength: 200
      }
    },
    {
      id: '29', 
      handle: 'shortname', 
      type: 'li-text', 
      ui: {
        component: 'liMetaTextForm', 
        config: {
          label: 'Shortname', 
          placeholder: 'Enter a shortname (abbreviation)...', 
          maxLength: 200
        }
      }, 
      config: {
        maxLength: 200
      }
    }
  }
```

Note that only one content-type in a project can have the `isAuthor` flag. In the metadata for your "Author" content-type you will want to add fields such as a profile picture, biography, etc.
Once you're done setting up your author content-type, publish it via the CLI.

Note that internally, the `documentType` is `data-record` with a special flag `isAuthor`.

### Author reference

In order to select an author for an article we need to reference it in the metadata of the article. The following JSON shows a metadata field of an article that holds a list of authors for it:

```json
{
  "handle": "authors",
  "type": "li-reference-list",
  "config": {
    "referenceType": "documents",
    "documentType": "data-record",
    "contentType": "author",
    "prefillAuthor": true
  },
  "ui": {
    "component": "liMetaReferenceForm",
    "label": "authors",
    "displayFilters": []
  }
}
```

The selected metadata property must be of type `reference` or `reference-list` depending on whether there is only one author or if there can be multiple ones.

### Prefilling configuration

If you want to prefill authors from the currently logged in user (see previous step), you need to associate users of the system with author records. This can be done in the server admin UI. The screenshot below shows the mapping on the user detail screen in the admin panel.

{{< img src="./map-author.png" alt="Author Mapping" >}}

For each project/channel combination you can assign an author record to the selected user. If this user subsequently logs in and creates an article, the author record will be prefilled to the metadata.
This operation can only be performed via the UI.
