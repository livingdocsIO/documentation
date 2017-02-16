# Livingdocs Server REST API Documentation

## Scope

Livingdocs provides 2 kinds of REST APIs: 
- A public API that can be used publicly on the web to retrieve published documents. This API is mostly used to create content-delivery apps, e.g., a start page of an online magazine.
- An editing API that requires authentication and can be used to modify documents. This API is also used by the livingdocs editor.

This Documentation is split into three parts: Describing the public API, describing the editing API, and in a third section, describing the underlying API concepts you need in order to extend the API.

## Public API

The public API is read-only. It allows you to get the content that you could otherwise also get with a browser when looking at the public content on livingdocs. Responses are sent with jsonp. There is no authentication required at this moment, access is free and unlimited.
The public API is used to create delivery apps for your content, e.g., a blogging app, or a magazine start page.

The following pages will help you to start working with the public API:
- [Available Endpoints](./public-api/public_api_endpoints.md)
- [Errors returned by the API](./api_errors.md)

Example applications:
- [Sample implementation - Node.JS Blog](https://github.com/marcbachmann/livingdocs-delivery)
- [Sample implementation - Meteor.JS real-time/mobile](https://github.com/gabrielhase/livingdocs-stream)

## Webhooks (Hooks)

Webhooks are an alternative to polling changes using the Public API. You can subscribe a URL with the livingdocs Hooks API that will get notified with a respective update. This is also great to build real-time applications where you want to render updates automatically instead of only after a refresh.
- [Available Webhooks](./editing-api/editing_api_hooks.md)

## Editing API

The editing API is read/write and requires authentication. You can only modify and get documents through the editing API that you own or are associated with through a space (shared account).
The editing API is used mainly for two motivations: to write your own editor (analogous to the livingdocs editor) or to do a third-party integration, e.g., with some publishing CMS.

The following pages will help you to start working with the editing API:
- [Available Endpoints](./editing-api/editing_api_endpoints.md)
- [Authentication](./editing-api/editing_api_authentication.md)
- [Errors returned by the API](./api_errors.md)
- [Livingdocs Editor as a sample editor implementation](https://github.com/upfrontIO/livingdocs-editor)

## Extending the API

Especially, when developing your own editor you might get to a point where you need to extend the livingdocs API. The following pages give you a first glimpse into the concepts used to build the livingdocs API and how you can use them for yourself. Most of your work will though still be in the code of the livingdocs api as only sparse documentation exists.
- [API Basics](./api_basics.md)
- [CORS](./api_cors.md)
