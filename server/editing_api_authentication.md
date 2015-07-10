# API Authentication
### `POST /authenticate` Logging In

#### Parameters

| Property      | Type    | Default  | Description
| ------------- | ------- | -------- | -------------
| `username`    | string  | -        | **required**, utf8 encoded username, normally your email address
| `password`    | string  | -        | **required**, utf8 encoded password
| `expires`     | integer | 7200     | Access token expiration time in milliseconds


#### Possible Errors

- `400`: Returned when required parameter not present
- `422`: Returned when authentication fails

#### Example Request
```bash
curl http://staging.api.livingdocs.io/authenticate \
 -H "Accept: application/json" \
 -d "username=user@upfront.io" \
 -d "password=password"
```

#### Successful Response
```json
{
  "user": {
    "id": 194,
    "created_at": "Mon Apr 28 2014 16:34:57 GMT+0200 (CEST)",
    "updated_at": "Mon Apr 28 2014 16:34:57 GMT+0200 (CEST)",
    "email": "user@upfront.io",
    "prename": "User",
    "surname": "Upfront",
    "space_id": 767
  },
  "access_token": "YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg"
}
```


# API Authorization
#### Authentication & Headers
With each protected API call, you’ll need to set request headers.  
Get an access token by using the `/authenticate` endpoint.

| Header             | Description
| ------------------ | -----------
| `Authorization`    | **Required**. When calling endpoints, send the access token using the Bearer Authorization type.<br/>(Example: `Authorization: Bearer YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg`).<br/>Alternatively you can send the access token in the url as query string.<br/>E.g. `http://api.livingdocs.io/documents?access_token=YKjCkA5AUjbFp7jq3zpBRsbm9avsGFwg`
| `Accept`           | **Required**. set to `application/json`
