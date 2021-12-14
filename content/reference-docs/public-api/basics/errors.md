---
title: Errors
weight: 2
renderTOC: false
menus:
  reference-docs:
    parent: Basics
---

Common error responses you can expect when working with the public Api.

{{< api-example
  showResponseCode=true
>}}
--query--
--endpoint--
--parameters--
--description--
--response--
401
---
---
```js
{
  "status": 401,
  "error": "Unauthorized",
  "error_details": {
    "access_token": "The access token expired."
  }
}
```
{{< /api-example >}}

{{< api-example
  showResponseCode=true
>}}
--query--
--endpoint--
--parameters--
--description--
--response--
403
---
---
```js
{
  "status": 403,
  "error": "Forbidden",
  "error_details": {
    "access_token": "The request requires higher privileges"
  }
}
```
{{< /api-example >}}

{{< api-example
  showResponseCode=true
>}}
--query--
--endpoint--
--parameters--
--description--
--response--
404
---
---
```js
{
  "status": 404,
  "error": "Not Found",
  "error_details": {
    "url": "/api/v1/foo"
  }
}
```
{{< /api-example >}}
