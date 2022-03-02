---
title: Retresco
description: Analyze documents and store entities in a metadata field with the Retresco API
weight: 8
---

The [Retresco](https://www.retresco.com/) integration uses semantic analysis and keywording to tag documents with relevant entities. These entities are then stored within a document's metadata and can be used to categorise documents.

## Configuration

### Server

Enable the integration on the server level by setting `allowed: true`. You can also set `ensureExtraction: true` if you would like to ensure the entities are up-to-date when publishing a document.

```js
{
  // ...
  integrations: {
    // ...
    retresco: {
      allowed: true,
      ensureExtraction: true
    }
  }
  // ...
}
```

### Project

Each project also needs to be configured to use the Retresco integration. You need to specify the Retresco API credentials, and optionally provide the text extraction "matches". `titleMatches`, `supertitleMatches`, and `teaserMatches` are arrays of `<component-name>.<directive-name>` strings which can be used to extract the text content and deliver them to the Retresco API in the relevant fields within the request payload. Only the first match found for each field will be used, but multiple values can be provided so that many content types can be supported.

```js
{
  // ...
  settings: {
    // ...
    integrations: {
      // ...
      retresco: {
        enabled: true,
        apiEndpoint: 'https://<subdomain>.rtrsupport.de/',
        username: '<username>',
        password: {
          $secretRef: {
            name: '<secret-name>' // See Project Secret section below
          }
        },
        titleMatches: ['header.title'],
        supertitleMatches: ['header.catchline'],
        teaserMatches: ['p.text']
      }
      // ...
    }
    // ...
  }
  // ...
}
```

### Content Type

You will need to add the metadata plugin for all content types that you would like to analyze. You may provide any handle for the Retresco metadata field. The `li-retresco` type is essential.

```js
{
  // ...
  metadata: [
    // ...
    {
      handle: 'retresco',
      type: 'li-retresco'
    }
    // ...
  ]
  // ...
}
```

### Project Secret

Finally, a secret must be added for the relevant `<project-handle>`. The `<secret-name>` should match the value of the `password.$secretRef.name` property in the Retresco integration's project config object. The `<password>` should be the password provided by Retresco used to access the API. Within a development or test environment it is also possible to seed this value.

```bash
npx livingdocs-server secret-add --project="<project-handle>" --name="<secret-name>" --value="<password>"
```

## Metadata

The Retresco entities will be stored in the document's metadata using the metadata plugin's handle as the property name. The value is an object which contains the latest `contentVersion` the entities were extracted from, along with an array of `entities` returned by the Retresco API.

```js
{
  contentVersion: '1006.2', // <revision-id>.<revision-version>
  entities: [{
    id: '3f9d52ff1f8c660174c0ac44d141cc71e5de0569',
    name: 'Zürich',
    type: 'location',
    score: 16.924834941594718, // Only when not user-added
    userAdded: false,
    inappropriate: false, // Entity removed (but still visible in the UI with strikethrough)
  }]
}
```
