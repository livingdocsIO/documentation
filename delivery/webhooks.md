# Webhooks

## Table of contents

- [A simple frontend app](./api_essentials.md)
- Real-time update with webhooks (this document)

## Overview

Using the REST API you can query documents and document feeds once your users hit your page. In some scenarios though you will want to get updates from Livingdocs once they happen in the Livingdocs editor. For example consider a Facebook-like app with a feed of documents and while the user is reading his feed he should be notified of new entries in real-time when they arrive (as Facebook does on their feed).

For such a scenario your app needs a way to be notified of new publications from Livingdocs. Webhooks provide exactly this.

## Setting up a webhook

In order to subscribe to a webhook you will need 3 things:
- an authorization token
- your `space_id`
- a URL on your side where you want to receive notifications

Getting the first two is still pretty cumbersome. We described how to do this [here](../design/upload.md#configuring-the-design-with-your-account). Once you have the authorization token and your `space_id` you can subscribe to the webhooks system as follows:

```bash
curl -XPOST \
-H "Content-Type: application/json" \
-H "Authorization: your-authorization-token" \
-d '{
  "type": "webhook",
  "space_id": your-space-id,
  "events": "document.publish",
  "config": {
    "url": "http://www.your-domain.com/your-notification-endpoint"
  }
}' http://api.livingdocs.io/hooks
```

This call subscribes the URL `http://www.your-domain.com/your-notification-endpoint` to the publish event in the Livingdocs Beta on space `your-space-id`. So whenever you publish a new document on your Livingdocs Beta account a POST request will be sent to the URL you specified.

## Using the data from a webhook notification

The data that is sent as a result of the publish event to your URL looks like the following:
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
    },
    "revision": {
        "id": 4,
        "created_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
        "updated_at": "Mon May 05 2014 00:04:29 GMT+0200 (CEST)",
        "data": {
          "content": [],
          "metadata": {}
        },
        "revision_number": 1,
        "user_id": 7,
        "document_id": 31
    },
    "space_id": 1,
    "document": {
      "id": 31,
      "created_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
      "updated_at": "Mon Apr 28 2014 16:34:59 GMT + 0200(CEST)",
      "owner_id": 194,
      "space_id": 1,
      "title": "Test"
    } 
}
```

The response contains more information than the REST calls. Basically, it is all that you could possibly need to directly render an document or a document preview from a notification. To render the document body, it's best to use the pre-rendered HTML from the `publication`. To render a document preview (teaser) you can use the data within `revision/data/metadata`.

## Subscribing to unpublish events

Sometimes it can be important to quickly react to an unpublish event. Consider the case where one of your documents has a copyright-infringement and you need to get it off the web as quickly as possible. Hitting "unpublish" in the Livingdocs editor will take it out of future REST calls, but if your frontend app has some kind of cache it will never know about the unpublish. Unless, you subscribe it to the unpublish event:

```bash
curl -XPOST \
-H "Content-Type: application/json" \
-H "Authorization: your-authorization-token" \
-d '{
  "type": "webhook",
  "space_id": your-space-id,
  "events": "document.unpublish",
  "config": {
    "url": "http://www.your-domain.com/your-notification-endpoint"
  }
}' http://api.livingdocs.io/hooks
```

This will register `your-notification-enpoint` (pick a different one than for the publish notification!) with the unpublish event. So whenever a user hits "unpublish" in the Livingdocs editor you will get a notification at your URL containing the id of the document that was unpublished.

## More about the Hooks system

The hook system is considerably more powerful than only publish and unpublish events. For simple consumer use cases the above is enough. If you want to learn about the nuts and bolts of the Livingdocs webhook system, continue reading [here](../server/webhook_system.md)
