# Evaluation guide
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
- Go through the setup documentation: [setup local development](../reference-docs/getting-started-with-local-development)
- After setup server and editor you should be able to login with a given user

## Design
At the moment you have the blank design without any assets on your design server which has his files on the S3 bucket. The next step is now to create your own design. 

[create design](../reference-docs/common-designs/create_designs)

## Metadata
The next step is to create your own metadata field with a own metadata plugin. 

[create metadata field](../reference-docs/common-designs/create_designs)

## Delivery
If you want deliver your documents to your Delivery Website you can use webhooks to get notified if a document got published.

[use webhooks](../reference-docs/server-configuration/hooks)

## Import
You can import documents from your old application. There is a special API where you can create documents programmatically. So you have to transform the old format to the livingdocs format and create an article.

[import api](../server-import-api/import_api)

## doc-include
It can be important for your case that you can create components which can include rendered content. You can describe how the content should be rendered and use this doc-include in your components.

[create doc-include](../reference-docs/doc-includes/intro)

[embed teaser and list example](../reference-docs/doc-includes/embed_and_list)