In order to support [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS), each endpoint should support the HTTP `OPTIONS`
method. Right now, all origins are allowed to do CORS request, which might be
too lose in terms of security.

The `OPTIONS` response, omitting irrelevant headers, should look something along the
lines:

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Headers: Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With
Access-Control-Allow-Methods: OPTIONS, GET, PUT, POST, PATCH, DELETE
Access-Control-Allow-Origin: *
```
