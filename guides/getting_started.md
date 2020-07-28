# Getting started
This is the evaluation guide for enterprise on-premise livingdocs. 

The goal is that after going through this guide you have a basic installation on your local machine. You will have a configured instance of livingdocs with some added customization. 

## Short introduction to livingdocs
Livingdocs has 2 main applications, the livingdocs-editor and the livingdocs-server. For the livingdocs-server we need the following additional application.

#### Livingdocs Components, Containers and external Services
- components
  - livingdocs-editor
  - livingdocs-server
- docker-containers
  - elasticsearch
  - postgres
  - redis
- external services
  - Amazon s3 buckets
    - Image bucket
    - Design bucket
  - Image service (Imgix)
  - Pusher
  - Amazon Mailserver
  - Iframely

For evaluation we already have added accounts for the 5 external services in the config files. They are limited to a specific amount of data but this shouldn't be a problem for the evaluation.

For the livingdocs-server and livingdocs-editor we have a boilerplate which you can use to setup your own server and editor. These two repositories are private. Please contact us that you are interested to evaluate livingdocs so we can give you access to the repository.

## Setup
- Go through the setup documentation: [setup local development](../guides/getting-started-with-local-development.md)
- After setup server and editor you should be able to login with a given user

## Design
Changing designs is simple, in the server, navigate into a component `setup/projects/components/title` for example and make a change. After the server restarts, refresh the document in the Editor and you should see the changes live.

## Metadata
The next step is to create your own metadata field. In the server, navigate into a document type `setup/projects/article` for example and make a change in the metadata section. After the server restarts, refresh the document in the Editor and you should see the changes live.

## Delivery
If you want deliver your documents to your Delivery Website you can use webhooks to get notified if a document got published.

[use server hooks](../reference-docs/server-api/hooks.md)
or
[use webhooks](../reference-docs/server-configuration/webhooks.md)

## Import
You can import documents from your old application. There is a special API where you can create documents programmatically. So you have to transform the old format to the livingdocs format and create an article.

[import api](https://edit.livingdocs.io/public-api) (under "Import")

## Include
It can be important for your case that you can create components which can include rendered content from third-parties, e.g. facebook embeds.
Apart from third-party content, teasers on overview pages are also currently handled as includes in Livingdocs.

[create includes](../reference-docs/includes/intro.md)

[teaser and teaser list example](../reference-docs/includes/article_and_list_includes.md)