# Design Management API

## Configuration

```js
{
  designs: {
    public: 'http://livingdocs-designs-dev.s3-website-eu-west-1.amazonaws.com',
    bucket: "livingdocs-designs-dev",
    bucket_region: "eu-west-1"
  }
}
```

## GET /designs

is currently public
```json
{
  "designs": [{
    "name": "timeline",
    "version": "0.1.0",
    "description": "livingdocs default design"
  },
  {
    "name": "blog",
    "version": "0.1.1",
    "description": "livingdocs blog design"
  }]
}
```

## GET /designs/:name - Complete design object

```json
{
  "design": {
    "name": "timeline",
    "version": "0.1.0",
    "description": "livingdocs default design",
    "author": {
      "id": 123,
      "name": "Marc Bachmann"
    },
    "versions": {
      "0.1.0": {
        "name": "timeline",
        "version": "0.1.0",
        "description": "livingdocs default design",
        "additional": "data"
      }
    }
  }
}
```

## GET /designs/:name/:semver - Design Version
## GET /designs/:name/latest

```json
{
  "name": "boilerplate",
  "version": "0.1.0",
  "description": "livingdocs default design",
  "additional": "data"
}
```

## POST /designs/:name/latest

Set a design version as latest version
REQUEST
```json
{
  "version": "0.1.0"
}
```
RESPONSE 400 on ERROR
RESPONSE 200 on SUCCESS
```json
{
  "name": "timeline",
  "version": "0.1.0",
  "description": "livingdocs default design",
  "additional": "data"
}
```

## PUT /designs/:name/:semver
access_token required, updates complete JSON of a design
```json
{
  "name": "timeline",
  "version": "0.1.1",
  "description": "livingdocs default design with image component",
  "additional": "data"
}
```
RESPONDS with statusCode 200 and complete design as body

### Curl request
```bash
curl -XPUT \
-H "Content-Type: application/json" \
-H "Authorization: Bearer NzdmMWM1YWUtMDFjM..." \
--data-binary @./design.json \
http://api.livingdocs.io/designs/timeline/0.1.0 -s
```
## POST /designs/:name/:semver/assets
uploads a file
access_token required

Accepts:
`Content-Type: multipart/form-data`

Paths in css file must be relative.
To upload a file, we only allow two path formats: ./path/to/file.png or path/to/file.png

```json
{
  "path": "./style.css", # required
  "file": "as multipart form", # required
  "mime": "text/css" # optional
}
```

RESPONSE
```json
{
  "asset": {
    "size":  1233,
    "url": "http://livingdocs-designs-dev.s3-website-eu-west-1.amazonaws.com/timeline/1.0.0/style.css"
  }
}
```

### How to save files in the design json
```json
{
  "name": "timeline",
  "version": "0.0.1",
  "data": {
    "name": "designName",
    "version": "0.0.1",
    "description": "Test",
    "css": ["http://path/to/file.css", "http://path/to/file2.css"]
  }
}
```
## GET /designs/:name/:semver/assets
```json
{
  "assets": [{
    "size":  3213,
    "url": "http://designs.livingdocs.io/designName/0.1.0/logo.png"
  },
  {
    "size":  1233,
    "url": "http://designs.livingdocs.io/designName/0.1.0/style.css"
  }]
}
```
## DELETE /designs/:name
Removes a design and all its versions & assets
Responds with statusCode 200 on success.
