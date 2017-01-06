### `GET /spaces` Listing Spaces

#### Parameters


| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string

#### Successful Response

```json
{
  "spaces": [
    {
      "id": 767,
      "created_at": "Mon Apr 28 2014 16:34:57 GMT+0200 (CEST)",
      "updated_at": "Mon Apr 28 2014 16:34:57 GMT+0200 (CEST)",
      "owner_id": 194
    }
  ]
}
```

### `POST /spaces` Creating a Space

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string

#### Example Request

```bash
curl -X POST http://staging.api.livingdocs.io/spaces \
 -H "Accept: application/json" \
 -H "Authorization: Bearer YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg"
```
#### Successful Response

```json
{
  "space": {
    "id": 768,
    "created_at": "Mon Apr 28 2014 16:34:59 GMT+0200 (CEST)",
    "updated_at": "Mon Apr 28 2014 16:34:59 GMT+0200 (CEST)",
    "owner_id": 194

  }
}
```

### `PUT /spaces/:id/config` Update config of a space

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `access_token`|         | -        | **required**, as Authorization header or query string, needs to be space owner or administrator

The body contains the configuration as a JSON. The interpreted values are:
- `default_design`: The design that the space loads by default to create documents
- `designs`: The designs that are available to users of this space

#### Example Request

```
curl -X PUT \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MTZhNmRiNC00N2YzLTRjODItYTk5OC0zMTk3ZjI1ZDJjMDgiLCJ1c2VyIjp7ImlkIjoyODB9LCJpYXQiOjE0MzA0MDE2MzMsImV4cCI6MTQzMDQ0NDgzMn0.20iOXxiFH7KoQEKcozQOnF0umqr680dEuzpEt6olA_c" \
-d '{
  "default_design": {
    "name": "afg",
    "url": "http://api.livingdocs.io/designs/afg/0.1.0",
    "version": "0.1.0"
  }, "designs": [
    {
      "name": "afg",
      "url": "http://api.livingdocs.io/designs/afg/0.1.0",
      "version": "0.1.0",
      "is_selectable": true
    },
    {
      "name": "timeline",
      "url": "http://api.livingdocs.io/designs/timeline/0.4.0",
      "version": "0.4.0",
      "is_selectable": true
    },
    {
      "name": "vanilla",
      "url": "http://api.livingdocs.io/designs/vanilla/0.1.1",
      "version": "0.1.1",
      "is_selectable": true
    }
  ]
}' http://api.livingdocs.io/spaces/224/config
```
