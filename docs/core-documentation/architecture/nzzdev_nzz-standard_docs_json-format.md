# NZZ standard JSON format (work in progress)

## document

Top level structure:

```json
"documentMetadata": {...}
"content": {...}
"contentMetadata": {...}
"livingdocsMetadata": {...}
"livingdocsDocument": {...}
```


## document metadata

```json
"documentMetadata": {
  "publication": "nzz-online",
  "remote": [
    {
      "system": "polopoly",
      "id": "asdfasdf"
    },
    {
      "system": "hugo",
      "id": "428754z9",
      "revision": "48r4893478",
      "modifiedAt": "12.07.2016 19.45+01"
    }
  ],
  "author": [
    {
      "id": "3837",
      "email": "",
      "fullname": ""
    }
  ],
  "nzzWebDepartment": "todo",
  "nzzPrintDepartment": "todo",

  "publishDate": "...",
  "modificationDate": "...",
  "creationDate": "....",
  "versionDate": "..."
}
```


## content

The content will contain a serialized HTML string. Read about the [html-format](html-format.md) in detail.

```json
"content": {
  "html": "<article>...</article>"
}
```


## content-metadata

Additional information for images, related articles embeds and html can be found here. In the html a `data-reference-id` attribute provides the link to the respective entry in the `contentMetadata`.

```json
"contentMetdata": [
  {
    "id": "94849",
    "type": "image",
    "url": "http://image.nzz.ch/ajdhe97",
    "mimeType": "jpeg",
    "width": 1600,
    "height": 1000,
    "hugoResourceId": "13434"
  },
  {
    "id": "94848",
    "type": "related-article",
    "url": "http://www.nzz.ch/3838asd873"
  },
  {
    "id": "94850",
    "type": "embed",
    "url": "http://farm4.static.flickr.com/3123/2341623661_7c99f48bbf_m.jpg",
    "providerName": "Flickr",
    "providerUrl": "http://www.flickr.com/"
  },
  {
    "id": "94851",
    "type": "html",
    "source": "..."
  }
]
```


## livingdocs-metadata

```json
"livingdocsMetdata": {
  "host": "http://livingdocs.nzz.ch",
  "projectName": "nzz",
  "documentId": "1",
  "revisionId": "1",
  "design": {
    "name": "nzz-standard",
    "version": "1.0.0"
  }
}
```


## livingdocs-json

```json
"livingdocsDocument": {
  "design": {
    "name": "nzz-print",
    "version": "1.0.0"
  },
  "content": [
    ...
  ]
}
```