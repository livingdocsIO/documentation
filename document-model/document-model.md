
# Document Model

## Overview

The `document-model` stores a `livingdocs document` as a tree of `snippets` similar to how the DOM is a tree of HTML elements.

## API

The `document-model` can be manipulated by javascript and event listeners can be added to get notified of changes.

Here is an example how you can iterate over all `snippets` in a `document-model`:
```coffeescript
# iterate over all snippets in a document
documentModel.each (snippet) ->
  # do something with the snippets
```

Or find the first title `snippet`.
```coffeescript
# iterate over all snippets in a document
titleSnippet = documentModel.find('title').first
```


#### Change Events:

- **snippetAdded**  
  Get notified when a snippet was added
- **snippetRemoved**  
  Get notified when a snippet was deleted
- **snippetMoved**  
  Get notified when a snippet has changed its position
- **snippetContentChanged**  
  Get notified when the content of a snippet changed. (E.g. the user has edited a text)
- **snippetHtmlChanged**  
  Get notified when snippet settings changed. For example a css class.
- **changed**  
  Get notified of all changes in a document. Fires when any of the above events for any snippet fires.


## Example JSON

Here you see a serialized version of a `document-model` in JSON. This is a document that uses the design 'ghibli' and consist of three snippets. A cover, a title and a lead.

Every `snippet` has a unique id that allows Livingdocs to always identify a `snippet` no matter if it was moved to a different place somewhere else in the document.

JSON `document-model`:
```json
{
  "content": [
    {
      "id": "doc-18fsfqsiq0",
      "identifier": "ghibli.cover",
      "content": {}
    },
    {
      "id": "doc-18fsfr5f50",
      "identifier": "ghibli.title",
      "content": {
        "title": "Storytellers have more fun"
      }
    },
    {
      "id": "doc-18fsfra8r0",
      "identifier": "ghibli.lead",
      "content": {
        "text": "Yet, if we look at the interesting people in our lives, I think we’ll find few of them have climbed Mount Everest or broken a wild mustang. Most have never wrestled an alligator or gotten embroiled in a covert operation. Most haven’t seen a whole lot of real excitement."
      }
    }
  ]
}
```
