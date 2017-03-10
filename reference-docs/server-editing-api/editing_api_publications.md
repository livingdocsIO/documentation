### `GET /publications` List all publications of

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `space_id`    | integer | `user.space_id` | List documents of a specific space
| `sort`        | csv     | '-created_at' | Sorting of documents. Prefix a property with `-` to sort descending. All properties of a document are supported. E.g. `sort=title` to sort the titles ascending. 

#### Successful Response

```json
{
    "publications": [
      {
          "id": 4,
          "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
          "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
          "document_id": 1
      },
      {
          "id": 5,
          "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
          "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
          "document_id": 2
      }
    ]
}
```

### `POST /publications` Create a Publication of a document

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `revision_id` | integer | -        | The revision id the publication belongs to
| `document_id` | integer | -        | The document id the publication belongs to
| `html`        | string  | -        | The html of the publication
| `slug`        | string  | -        | Slug of the publication

#### Response
```json
{
  "publication": {
    "id": 850,
    "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
    "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
    "space_id": 1,
    "document_id": 1,
    "revision_id": 23,
    "html": "<div></div>",
    "slug": "hello-world"
  }
}
```