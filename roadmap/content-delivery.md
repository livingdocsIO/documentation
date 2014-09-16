# Content Delivery


We can deliver the content using three different methods.
- Javascript embeds (with or without css & js)
- iFrames (css & js)
- JSON API

## Authentication
All endpoints will be public. Later we can add authentication based on access tokens.


## Caching
We'll cache everything. Invalidations will be created using cloudfront when updating a publication.


## Versioning
Versions of the content delivery must be defined in the url (Headers are not supported in iFrames).


## Delivery

### URL
https//api.livingdocs.io/cdn/1/documents/slug-1
aliased as
https://cdn.livingdocs.io/1/documents/slug-1
(based on User Agent 'Amazon Cloudfront')

### Embed
```html
<div class="livingdocs-list" data-query="Oldtimer" data-space="123"></div>
<script src="https://cdn.livingdocs.io/1/embed.js" async="true"></script>
```

### iFrames
```html
<iframe src="https://cdn.livingdocs.io/1/documents?space=123&query=Oldtimer"></iframe>
```

### JSON API
```html
<script src="https://cdn.livingdocs.io/1/api.js" async="true"></script>
<script>
  // Wrapper around jsonp
  livingdocs.list({space:123, query:'Oldtimer'}, function(err, documents) {

  });

  livingdocs.get(id, function(err, document){

  });
</script>
```


## List documents: /cdn/1/documents
Features
- pagination
- filter by
  - space (csv, one of)
  - keyword (csv, one of)
  - search query (q)
  - created_at (ISO date, from-to)
  - updated_at (ISO date, from-to)
  - author


```javascript
{
  publications: [
    {
      id: 123,
      metadata: {
        title: "",
        description: ""
        image: ""
      }
    }
  ]
}
```


## Get publication: /cdn/1/documents/slug-id


### Publication Object
```javascript
{
  id: document_id,
  version: revision_number,
  created_at: '',
  updated_at: '',
  metadata: {},
  html: '',
  json: {}
}
```

### Metadata
http://moz.com/blog/meta-data-templates-123

```javascript
metadata: {
  // Default metadata
  // <meta name="" content="">
  title: "",
  description: "",
  keywords: [],
  author: "",
  author_id: "",
  copyright: "",
  publisher: "",
  publisher_id: "",

  // Overrides belong into separate objects
  // <link rel="author" href="https://plus.google.com/104539796809225677707/posts"/>
  rel: {
    author: "https://plus.google.com/104539796809225677707/posts",
    publisher: "https://plus.google.com/104539796809225677707"
  },

  // Schema.org
  // <meta itemprop="name" content="">
  schema: {
    name: "",
    description: "",
    image: ""
  },

  // Open Graph: http://ogp.me/
  // <meta property="og:title" content="Title" />
  og: {
    "og:title": "Title"
    "og:type": "article"
    "og:url": "http://www.example.com/"
    "og:image": "http://example.com/image.jpg"
    "og:description": "Description Here"
    "og:site_name": "Site Name, i.e. Moz"
    "article:published_time": "2013-09-17T05:59:00+01:00"
    "article:modified_time": "2013-09-16T19:08:47+01:00"
    "article:section": "Article Section"
    "article:tag": "Article Tag"
    "fb:admins": "Facebook numberic ID"
  },

  // Twitter cards metatag: https://dev.twitter.com/cards/markup
  // <meta name="twitter:card" content="summary" />
  twitter: {
    "twitter:card": "summary",
    "name": "value"
  }
},
json: {},
html: 'html'
```
