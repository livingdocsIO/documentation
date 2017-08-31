# Livingdocs Editing API

## Livingdocs APIs

Livingdocs provides 2 kinds of REST APIs:
- A public read-only API that can be [seen here](https://beta.livingdocs.io/public-api.html#/public-api.html)
- A read/write editing API that requires authentication and can be used to modify documents. This is the API that is used by the Livingdocs editor.

## Editing API

The editing API is read/write and requires authentication. You can only modify and get documents through the editing API that you own or are associated with through a space (shared account).
You need knowledge of the editing API when developing features in the core Editor.
