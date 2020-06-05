# A Possible Translation System

In the [multi-language guide](setup_multilanguage.md) we said that a translation workflow is not given in the core at this moment and would need to be implemented in custom code. While there are lots of ways to do this, we want to quickly outline one possible way so you get an understanding of the challenge.

## What do you have

Once you setup the [multi-language feature](setup_multilanguage.md) you will have:

* a language in the metadata of each document, stored on both Postgres and Elasticsearch
* a top-level Elasticsearch property `lang_locale` on each document where the ISO locale is stored

Note: The core elasticsearch index for documents is a **draft index, not a publication index**. If you need to do queries for only the publication snapshots you either have to create your own publication index or use the database \(but this is very likely too slow\).

## Index

When translating you first of all need an index to store the relations between your documents and possible properties such as a master translation. For now we recommend you do your own index for this purpose. This can be elasticsearch or any other \(fast\) query service of your choice. Lets assume you created that index and have the following information for every index entry:

```text
{
  documentId: 1,
  translatedFrom: 2,
  isMasterLanguage: false,
  masterLanguageDocumentId: 4,
  language: 'en-US'
}
```

This assumes that for each document you store: where a document was translated from, what the corresponding master document is and what the locale of this document is. Again: just an example.

## Metadata

In order to update your custom index with the data above, this data needs to be on each document inside of Livingdocs. We recommend doing a [custom metadata plugin](../evaluation-guide/metadata-examples.md) for this. Your metadata plugin has the job of storing all the information that your custom index needs on the metadata of each document.

## Update index

Next you need a way to update this index whenever a document in Livingdocs changes. There are basically 3 use cases: 1. you want to have the relation information for published documents 2. you want to have the relation information for drafts 3. you want to have the relation information for both

For this example, we only look at use case 1. You will use the [hooks API](../reference-documentation/server/hooks.md) to be informed whenever a user publishes a document. For this example we will use a server-wide hook.

```text
liServer.registerInitializedHook((done) => {
  liServer.features.api('li-render-pipeline').registerPublicationServerHooks({
    publishHook: function ({documentType, payload}) {
      // The payload contains the documentVersion which in turn has the metadata
      // TODO: implement code that updates your custom index with the document metadata
    }
  }, done)
})
```

## UI

An easy way to provide a UI for translations is on the dashboard. You can do your own [custom dashboard item](push_notifications.md#add-a-custom-dashboard-item) and add a "Translations" button to it. When pressed this button opens a modal. You can implement this modal as a regular angular \(&gt; 1.6, &lt; 2.0\) component that is registered on the `livingdocs-editor` module. This modal can then show all the translations and the master language of a document and link to those. It can also show tasks such as translations that still need to be provided.

Alternatively, your link could also point out of Livingdocs to you own interface that works on your custom index directly and can be implemented in any language you love such as vue or react.

If you have been very attentive you might wonder why it is necessary to do a custom index at all. By doing a metadata plugin, the content is stored on the Livigndocs core elasticsearch index. We said that we will look at use case 1 though and this is a use case that only cares about publication snapshots. The Livingdocs core index is a draft index and would yield the wrong information for the publication use case. On the other hand, if you're interested in use case 2 \(drafts\) then you can just use the Livingdocs elasticsearch index for documents, no need to do your own.

