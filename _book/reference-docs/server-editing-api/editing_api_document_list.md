### `GET /document_lists` List available document lists

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string

#### Successful Response

```json
{
    "documentLists": [
        {
            "name": "test",
            "document_data": {
                "documents": [
                    1224,
                    1222,
                    1221,
                    1220
                ]
            },
            "manual_document_count": 5,
            "id": 1,
            "created_at": "2014-10-24T13:00:24.164Z",
            "updated_at": "2015-06-20T10:44:26.194Z"
        }
    ]
}
```

### `POST /document_lists` Create a new document list

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `name`        |         | -        | **required**, name of the document list
| `manual_document_count`|         | -        | **required**, count of documents that need to be ordered manually
| `query`       |         | -        | **optional**, an API document search query that should be used to filter the list

#### Example

Payload:

```json
{
  "manual_document_count": 3,
  "name": "listi",
  "query": {
    "limit": 15, 
    "offset": 0, 
    "q": "g", 
    "is_published": true,
    "created_at": "2015-06-15T10:30:36.072Z-2015-06-22T10:30:36.073Z"
  }
}
```

Response:

```json
{
    "documentList": {
        "name": "listi",
        "document_data": {},
        "manual_document_count": 3,
        "query": {
            "_source": false,
            "query": {
                "filtered": {
                    "filter": {
                        "bool": {
                            "must": [
                                {
                                    "range": {
                                        "publication_date": {}
                                    }
                                }
                            ],
                            "must_not": []
                        }
                    },
                    "query": {
                        "match": {
                            "_all": "g"
                        }
                    }
                }
            }
        },
        "space_id": 1,
        "created_at": "2015-06-22T10:35:04.042Z",
        "updated_at": "2015-06-22T10:35:04.042Z",
        "id": 2
    }
}
```

NOTE: As you can see from the payload and the response, the API query is translated into an elastic search query.

### `PUT /document_lists/:id` Update a document list

Used for the publishing of the document list (updating the document_data).

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `id`          |         | -        | **required**, id of the document list to update
| `document_data`|         | -        | **optional**, the new documents that contain to the published list
| `name`        |         | -        | **optional**, the new name of the list
| `manual_document_count`|         | -        | **optional**, the new manual document count of the list

#### Example

Payload:

```json
{
  "document_data": [1224, 1222, 1221, 1220, 1219]
}
```

### `GET /:id` Get a document list

Gets the DB record of a document list, not the list itself. To get a list of articles use either `:id/proposal` or `:id/publication`.

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `id`          |         | -        | **required**, id of the document list to get

### `DELETE /:id` DELETE a document list

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `id`          |         | -        | **required**, id of the document list to delete

### `GET /document_lists/:id/proposal/` Get proposed article list

Used by the TM to get the proposed articles feed for a list.

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `id`          |         | -        | **required**, id of the document list for which to get a proposal list

#### Response

```json
{
    "documentList": [
        {
            "document_id": 1224,
            "publication_date": "2015-06-16T08:41:23.621Z",
            "channels": {
                "metadata": {
                    "title": "a great new article",
                    "description": "lsdjfldsjf",
                    "teaserImage": {
                        "originalUrl": "http://livingdocs-images-dev.s3.amazonaws.com/2015/6/16/190c50a4-4db9-4bd8-9c5f-0bd2831f2302.jpeg",
                        "url": "https://app.resrc.it/O=75/http://livingdocs-images-dev.s3.amazonaws.com/2015/6/16/190c50a4-4db9-4bd8-9c5f-0bd2831f2302.jpeg",
                        "width": 700,
                        "height": 475,
                        "imageService": "resrc.it"
                    },
                    "dependencies": {},
                    "document_design_name": "timeline",
                    "document_design_version": "0.4.0"
                },
                "web": {
                    "format": "html",
                    "content": {
                        "teaser": "<div class=\"teaser\"><a href=\"http://livingdocs.io\"><div class=\"teaser__image container image-container\" style=\"background-image: url(https://app.resrc.it/O=75/http://livingdocs-images-dev.s3.amazonaws.com/2015/6/16/190c50a4-4db9-4bd8-9c5f-0bd2831f2302.jpeg);\"><div class=\"image--overlay\"></div></div><div class=\"teaser__text\"><div><h3><span>lsdjfldsjf</span> <span class=\"source\"></span></h3></div><h2>a great new article</h2></div></a></div>"
                    }
                }
            }
        }
  ]
}
```

### `GET /document_lists/:id/publication/` Get last published article list

Used by the TM to get the last published article feed of a list (content of `document_data`).

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string
| `id`          |         | -        | **required**, id of the document list for which to get the last published state

#### Response

```json
{
    "documentList": [
        {
            "document_id": 1224,
            "publication_date": "2015-06-16T08:41:23.621Z",
            "channels": {
                "metadata": {
                    "title": "a great new article",
                    "description": "lsdjfldsjf",
                    "teaserImage": {
                        "originalUrl": "http://livingdocs-images-dev.s3.amazonaws.com/2015/6/16/190c50a4-4db9-4bd8-9c5f-0bd2831f2302.jpeg",
                        "url": "https://app.resrc.it/O=75/http://livingdocs-images-dev.s3.amazonaws.com/2015/6/16/190c50a4-4db9-4bd8-9c5f-0bd2831f2302.jpeg",
                        "width": 700,
                        "height": 475,
                        "imageService": "resrc.it"
                    },
                    "dependencies": {},
                    "document_design_name": "timeline",
                    "document_design_version": "0.4.0"
                },
                "web": {
                    "format": "html",
                    "content": {
                        "teaser": "<div class=\"teaser\"><a href=\"http://livingdocs.io\"><div class=\"teaser__image container image-container\" style=\"background-image: url(https://app.resrc.it/O=75/http://livingdocs-images-dev.s3.amazonaws.com/2015/6/16/190c50a4-4db9-4bd8-9c5f-0bd2831f2302.jpeg);\"><div class=\"image--overlay\"></div></div><div class=\"teaser__text\"><div><h3><span>lsdjfldsjf</span> <span class=\"source\"></span></h3></div><h2>a great new article</h2></div></a></div>"
                    }
                }
            }
        }
```



