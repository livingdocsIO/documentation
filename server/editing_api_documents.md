### `GET /documents` Listing Documents in a Space

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `space_id`    | integer | user.space_id |  List documents of a specific space
| `sort`        | csv     | '-created_at' | Sorting of documents. Prefix a property with `-` to sort descending. All properties of a document are supported. E.g. `sort=title` to sort the titles ascending. 

#### Successful Response

```json
{
    "documents": [
      {
          "id": 847,
          "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
          "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
          "owner_id": 194,
          "space_id": 767,
          "title": "Test"
      },
      {
          "id": 848,
          "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
          "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
          "owner_id": 194,
          "space_id": 767,
          "title": "Test2"
      }
    ]
}
```

### `POST /documents` Create a Document in a Space

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `title`       | string  | -        | **required**, a descriptive title
| `space_id`    | integer | user.space_id | The space id the document belongs to
| `revision`    | revision | {data: {}} | A new revision object

#### Example Request

```bash
curl -X POST http://staging.api.livingdocs.io/documents \
 -H "Accept: application/vnd.livingdocs.v0.2.0+json" \
 -H "Authorization: Bearer YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg" \
 -d "space_id=767" \
 -d "title=API Documentation" \
```

#### Response
```json
{
  "document": {
    "id": 850,
    "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
    "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
    "owner_id": 194,
    "space_id": 767,
    "title": "API Documentation",
    "current_revision_id": 100,
    "revision": {
      "id": 100,
      "revision_number": 0,
      "data": {}
    }
  }
}
```

### `GET /documents/:id` Get a document

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string

#### Example Request

```bash
curl http://staging.api.livingdocs.io/documents/850 \
 -H "Accept: application/json" \
 -H "Authorization: Bearer YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg" \
```

#### Response
```json
{
  "document": {
    "id": 850,
    "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
    "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
    "owner_id": 194,
    "space_id": 767,
    "title": "API Documentation",
    "current_revision_id": 100,
    "revision": {
      "id": 100,
      "version": 1,
      "created_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
      "updated_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
      "data": {},
      "user_id": 7,
      "document_id": 850
    }
  }
}
```

### `PUT /documents/:id` Update a document

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `title`       | string  | -        | **required**, new document title
| `revision`    | revision| {data: {}} | A new revision object
| `revision.id` | integer | -        | **required**. Versioning of a document content. This prevents conflicts with other authors. Apply the version retrieved from an existing revision.
| `revision.version` | integer | - | **required** for Versioning of a document content.


#### Example Request

```bash
curl http://staging.api.livingdocs.io/documents/850 \
 -H "Accept: application/json" \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg" \
 -d '{"title": "API Documentation V1", "revision": {"data":[{"title": "snippet 1"}, {"title": "snippet 2"}]}}'
```

#### Response
```json
{
  "document": {
    "id": 850,
    "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
    "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
    "owner_id": 194,
    "space_id": 767,
    "title": "API Documentation V1",
    "current_revision_id": 100,
    "revision": {
      "id": 100,
      "version": 2,
      "created_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
      "updated_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
      "data": [
        {"title": "snippet 1"},
        {"title": "snippet 2"}
      ],
      "user_id": 7,
      "document_id": 850
    }
  }
}
```

### `DELETE /documents/:id` Delete a document

#### Example Request

```bash
curl -X DELETE http://staging.api.livingdocs.io/documents/850 \
 -H "Accept: application/json" \
 -H "Authorization: Bearer YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg" \
```
