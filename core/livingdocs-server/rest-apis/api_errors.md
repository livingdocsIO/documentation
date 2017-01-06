Whenever an error occurs, whether caused by a malformed request or a server
error, a JSON object is returned with an appropriate HTTP error code. For a good
reference of HTTP errors and their descriptions, see [httpstatus.es].

The JSON object contains three keys:

### `status` (integer)
The HTTP Response code. Some clients and transport methods don't support response codes. This is especially used for JSONP responses.


### `error` (string)
The title of the error which could be used as the title
for an error dialog. This is usually the title of the HTTP error

### `error_details` (object)
An Object of pointers (key to property which caused the error) & error messages.
```json
{
  "status": 400,
  "error": "Bad Request",
  "error_details": {
    "username": "Missing required property: username",
    "password": "Missing required property: password"
  }
}
```


### Error Types

#### 400 Bad Request

Returned whenever the request is malformed. This is the
case e.g. when a required parameter is not specified. In that case, the
error explanation contains the name of the missing parameter.

Basically all endpoints may return this error.

#### 404 Not Found

Returned whenever trying to access a resource that does not exist. This can
possibly take the user's authorization into account, e.g. if the user tries to
access a document they don't have access to, a 404 should be returned instead of
revealing the existence of the document by showing an error that the user does
not have sufficient rights.

#### 409 Conflict

Returned whenever trying to create a resource that would result in a conflict.
This error only happens when one user tries to overwrite another users work.

#### 422 Unprocessable Entity

This error code only makes sense for request methods that may cause side effects
(`POST`, `PATCH`, etc.) and not for safe request methods such as `GET`. Returned
whenever a record that is to be stored does not pass validation. The error
details contains a list of all validation errors that can be presented to
the user.

Basically all endpoints that can have side effects may return this error.

#### 500 Internal Server Error

Returned when we fuck up. Go fix it!
