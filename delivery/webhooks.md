# Webhooks

## ToC
- [A simple frontend app](./api_essentials.md)
- Real-time update with webhooks (this document)

## Overview

Using the REST API you can query documents and document feeds once your users hit your page. In some scenarios though you will want to get updates from Livingdocs once they happen on Livingdocs. For example consider a Facebook-like app with a feed of documents and while the user is reading his feed he should be notified of new entries in real-time when they arrive (as Facebook does on their feed).

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
    }
}
```

## Subscribing to unpublish events

## More about the Hooks system
