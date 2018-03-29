# Enable multi-language in Livingdocs

This guide explains you how to enable the Livingdocs core setup for multi-language support.
The core setup does not include a translation workflow. Such a workflow can be implemented based on the core functionality and in a custom project.

The following shows the search dashboard that gets a new language column and filter if the multi-language feature is configured.
![Dashboard UI](./multi-language-images/dashboard.png)

The metadata screen gets a new language select box if the multi-language feature is configured.
![Dashboard UI](./multi-language-images/metadata.png)


## Server-side

### Languages

On the server, we first need to provide which languages we want to support in our project. This is defined per [channel](../reference-docs/server-configuration/channel-config.md). In the configuration file for your channel
add code as follows.

```
// defines the languages that a user can select for a document
availableLanguages: [
  {
    'name': 'English',
    'value': 'en-US'
  }, {
    'name': 'German',
    'value': 'de-DE'
  }
],
// used to create new documents
defaultLanguage: {
  name: 'English',
  value: 'en-US'
},
```

The `defaultLanguage` defines with what language a new document is created. The `availableLanguages` define the set of
languages from which a user can choose for a document. The `defaultLanguage` must be contained in the `availableLanguages`.

### Metadata

The language of a document is stored within the documents metadata. In order to enable this, we need to add a metadata field for every
[content-type](../reference-docs/server-configuration/content-type-config.md) that we want to have in multiple languages. An example is
given below.

```
{
  metadata: {
    language: {plugin: 'li-language'}
  },
  metadataFormArrangement: [{
    {
      name: 'language',
      form: 'li-meta-select-form',
      config: {
        label: 'Language',
        service: 'languageSelection',
        placeholder: 'select language..'
      }
    }
  }]
}
```

There are several important things to note in the example:
1. the metadata plugin used is `li-language`, this is a core metadata plugin that enables multi-language
2. the use of `li-language` **must be unique within a content-type**, i.e. you can only have one metadata property in a content-type that uses the `li-language` plugin
3. the form arrangement uses a select box with the core service `languageSelection`, we strongly advise you to use our core metadata service

Once you have the metadata field defined on the channel, you also need to update your custom elasticsearch metadata mapping with an entry as follows:
```
{
  "properties": {
    "language": {
      "type": "object",
      "properties": {
        "locale": {"type": "string"},
        "label": {"type": "string"}
      }
    }
  }
}
```

The details about adding a new metadata field can be seen in the [metadata examples](./metadata/metadata-examples.html)

### Dashboard

As soon as we have the multi-language feature configured, the dashboard will show a new column `languages` in the search results.
In order for the dashboard to have the required metadata, you will need to configure the [`documentsMetadataFields`](../reference-docs/server-configuration/config.html#search) in the server config to include your metadata property. You need to use the metadata property name here. In our example from before this would be:
```
{
  search: {
    documentsMetadataFields: [
      'language'
    ]
  }
}
```

Note: if you did your [own dashboard item](./push_notifications.md#add-a-custom-dashboard-item), the language column will not work out-of-the-box and you will need to customize your dashboard item to show the language

## Editor

The editor side is relatively easy to configure. You only need to add the provided language [core filter](../reference-docs/editor-configuration/search-filters.html#predefined-core-properties) to your dashboard so that you are able to filter documents by language. This is done in the editor environment config file.

```
{
  filters: {
    articleList: {
      displayFilters: ['language']
    }
  }
}
```

Equivalently for pages if you want to have it there too.

## A word on translations

In the beginning we said that a translation workflow is not given in the core at this moment and would need to be implemented in custom code. While there are lots of ways to do this, we want to quickly outline one possible way so you get an understanding of the challenge.

### What do you have

Once you setup the multi-language feature as described above, you will have:
- a language in the metadata of each document, stored on both Postgres and Elasticsearch
- a top-level Elasticsearch property `lang_locale` on each document where the ISO locale is stored

Note: The core elasticsearch index for documents is a **draft index, not a publication index**. If you need to do queries for only the publication snapshots you either have to create your own publication index or use the database (but this is very likely too slow).

### Index

When translating you first of all need an index to store the relations between your documents and possible properties such as a master translation. For now we recommend you do your own index for this purpose. This can be elasticsearch or any other (fast) query service of your choice. Lets assume you created that index and have the following information for every index entry:
```
{
  documentId: 1,
  translatedFrom: 2,
  isMasterLanguage: false,
  masterLanguageDocumentId: 4,
  language: 'en-US'
}
```

This assumes that for each document you store: where a document was translated from, what the corresponding master document is and what the locale of this document is. Again: just an example.

### Metadata

In order to update your custom index with the data above, this data needs to be on each document inside of Livingdocs. We recommend doing a [custom metadata plugin](./metadata/metadata-examples.md) for this. Your metadata plugin has the job of storing all the information that your custom index needs on the metadata of each document.

### Update index

Next you need a way to update this index whenever something happens in Livingdocs. There are basically 3 use cases:
1. you want to have the relation information for published documents
2. you want to have the relation information for drafts
3. you want to have the relation information for both

For this example, we only look at use case 1.
You will use the [hooks API](../reference-docs/server-configuration/hooks.md) to be informed whenever a user publishes a document. For this example we will use a server-wide hook.
```
liServer.registerInitializedHook((done) => {
  liServer.features.api('li-render-pipeline').registerPublicationServerHooks({
    publishHook: function ({documentType, payload}) {
      // The payload contains the documentVersion which in turn has the metadata
      // TODO: implement code that updates your custom index with the document metadata
    }
  }, done)
})
```

### UI

An easy way to provide a UI for translations is on the dashboard. You can do your own [custom dashboard item](./push_notifications.md#add-a-custom-dashboard-item) and add a "Translations" button to it. When pressed this button opens a modal. You can implement this modal as a regular angular (> 1.6, < 2.0) component that is registered on the `livingdocs-editor` module. This modal can then show all the translations and the master language of a document and link to those. It can also show tasks such as translations that still need to be provided.

Alternatively, your link could also point out of Livingdocs to you own interface that works on your custom index directly and can be implemented in any language you love such as vue or react.


If you have been very attentive you might wonder why it is necessary to do a custom index at all. By doing a metadata plugin, the content is stored on the Livigndocs core elasticsearch index.
We said that we will look at use case 1 though and this is a use case that only cares about publication snapshots. The Livingdocs core index is a draft index and would yield the wrong information for the publication use case.
On the other hand, if you're interested in use case 2 (drafts) then you can just use the Livingdocs elasticsearch index for documents, no need to do your own.
