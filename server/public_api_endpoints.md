# Public API

### `GET /public/publications` 

#### Description

Gets a list of published documents. This will be most useful to create pages to aggregate documents, e.g., a start page of an online magazine.

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `space`    | integer | -        | **required**, only get documents belonging to a space (shared account)
| `limit`       | integer | 50       | **optional**, used for pagination, how many results per page (offset)
| `offset`      | integer | 0        | **optional**, used for pagination, the page of the pagination that is returned
| `fields`      | string  | -        | **optional**, used to include fields in the respond. e.g. id, document_id, data, html
| `callback`    | string  | -        | **optional**, a callback function that gets called (jsonp), if you don't specify this you'll just get back a json response

#### Example Request

```bash
curl http://localhost:9090/public/publications?limit=1&space=1
```

#### Response
```json
{
    "publications": [
        {
            "id": 3,
            "created_at": "2014-09-20T19:16:25.824Z",
            "updated_at": "2014-09-20T19:16:25.824Z",
            "is_deleted": false,
            "user_id": 1,
            "document_id": 2,
            "revision_id": 3,
            "html": "<div>publication in HTML</div>",
            "space_id": 1,
            "data": {
              "content": [],
              "metadata": {}
            }
        }
    ]
}
```

- The `data` field in the response will contain the livingdocs document in a structured way. 
- The `data/content` field contains the complete tree structure of the livingdocs document.
- The `data/metadata` field contains structured publication-time information about a document. Typically, you use information from the `metadata` field for content that you require to be there, e.g., a title, and the livingdocs document tree to get optional content, e.g., videos if there are any in the document. 


### `GET /public/publications/:id` 

#### Description

Gets a sinlge published document by id. This endpoint is mostly used to create the single-document view of your application, e.g., a page for a single blog article.

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `id`          | integer | -        | **mandatory**, the id of the **document** (not publication) for which you want to get the latest public version
| `callback`    | string  | -        | **optional**, a callback function that gets called (jsonp), if you don't specify this you'll just get back a json response

#### Example Request

```bash
curl curl http://localhost:9090/public/publications/2
```

#### Response
```json
{
    "publication": {
        "id": 3,
        "created_at": "2014-09-20T19:16:25.824Z",
        "updated_at": "2014-09-20T19:16:25.824Z",
        "is_deleted": false,
        "user_id": 1,
        "document_id": 2,
        "revision_id": 3,
        "html": "<div>Document HTML</div>",
        "space_id": 1
    }
}
```

- The `html` contains the complete HTML of the document.

Note that we do not include any css or javascript that your documents might need at this point. You need to include references to your css stylesheet and any possible javascripts yourself. In order not to get conflicts with other stylesheets we also advise people to render a document inside an Iframe and inject the required css and javascript.