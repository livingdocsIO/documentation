### `GET /revisions` Listing Revisions of a Document

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `document_id` | integer | -        |  List documents of a specific space
| `sort`        | csv     | '-created_at' | Sorting of documents. Prefix a property with `-` to sort descending. All properties of a document are supported. E.g. `sort=title` to sort the titles ascending. 

#### Successful Response

```json
{
    "revisions": [
      {
        "id": 4,
        "created_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
        "updated_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
        "data": {},
        "revision_number": 1,
        "user_id": 7,
        "document_id": 31
      },
      {
        "id": 5,
        "created_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
        "updated_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
        "data": { "content": [] },
        "revision_number": 2,
        "user_id": 7,
        "document_id": 31
     }
    ]
}
```

### `GET /revisions/:id` Get a revision

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string

#### Example Request

```bash
curl http://staging.api.livingdocs.io/revisions/5 \
 -H "Accept: application/json" \
 -H "Authorization: Bearer YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg" \
```

#### Response
```json
{
  "revision": {
     "id": 5,
     "created_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
     "updated_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
     "data": {},
     "revision_number": 1,
     "user_id": 7,
     "document_id": 31
  }
}
```