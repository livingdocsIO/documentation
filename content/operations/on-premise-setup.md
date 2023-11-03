---
title: On Premise Setup
description: Learn how to get your local install of Livingdocs rolling.
icon: download
weight: 2
menus:
  operations:
    weight: 2
---

## Get Code Access

For an on premise solution you need access to private Livingdocs repositories.

To get access you will need a Github account and drop us an email: <contact@livingdocs.io>.

Until you have access you can use our service at <https://edit.livingdocs.io> for your evaluation. All Livingdocs features except server- and editor extensions are also available in the service.

## System Requirements

### Operating system

Livingdocs runs under Mac OSX, Linux and Windows 10 (in a linux docker container). For Windows 10 proceed first to [setup Windows 10]({{< ref "/guides/setup/setup-windows.md" >}})

### Prerequisites

In order to setup and run a Livingdocs application on your local machine, you need to make sure that the following programs and libraries are installed and publicly available on your system:

- [Node.js](https://nodejs.org) - Probably the world's most used Javascript runtime. Livingdocs is written in Javascript, so this one is definitely a hard requirement. You find installation instructions for all operating systems on their website. We recommmend using [FNM](https://github.com/Schniz/fnm) to install and also upgrade Node.js. It allows installing multiple versions in parallel.
- [Docker](https://docs.docker.com/get-started/) - Very broadly, Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. We use it to run our storage services (databases, search index and so on) on your local machine.
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Everybody's favorite distributed version control software. We use it extensively and, let's be honest, chances are you are too.
- [local certificate](https://github.com/livingdocsIO/livingdocs-editor/blob/master/config/cert.js) - Due to security reasons some features require a valid SSL/TLS setup and running the editor with HTTPS.

On a lower note, you'll also need active Github and Docker accounts respectively.

## Setting up required services and accounts

For your convenience we provide evaluation accounts for e.g. image storage or sending mails.

But before starting to develop in earnest you will have set up your own accounts.

### Account Checklist

#### File Storage (e.g. AWS S3)

All files you upload to Livingdocs will be stored in your storages. For this to work you need to configure your own supported storage.

On AWS for example we recommend to create four buckets per environment (for images, videos, files and design assets).

Server Config Keys to update:
  * `mediaLibrary.images.storage.*`
  * `mediaLibrary.videos.storage.*`
  * `mediaLibrary.files.storage.*`
  * `designs.assets.storage.*`

#### Image Service (e.g. Imgix)

Images in Livingdocs are usually displayed through an image service to handle image resizing and cropping. You should configure your own service per environment.

Server Config Keys to update:
  * `documents.imageServices.*`

#### Pusher

In order for real-time collaboration to work as designed you will have to set up an account on [pusher.com](https://pusher.com).

Server Config Keys to update:
  * `pusher.*`

Once you have created a `Pusher` channel, you can go to `App settings` and make sure `enable authorized connections` is toggled off (default value). If you enable this setting, you might encounter a `Websocket error` when idling in the editor's landing page.

NOTE: Disabling this setting should not have any side effect. Malicious users would need to log in to the editor to access those websockets.

#### Email (e.g. AWS SES)

The livingdocs-server needs to send mails for things like password resets or user notifications. For this you should configure an E-Mail with a trusted domain of yours which you should also communicate to your users so they know from which sender to expect Livingdocs E-Mails. We recommend to create different E-Mail accounts for different environments.

Server Config Keys to update:
  * `notifications.channels.email.fromAddress`
  * `emails.transport.default.*`

#### NPM Access Token

To access private Livingdocs repositories you need to create an npm user with an access token. We can then grant your npm user read access to our @livingdocs packages (e.g. `@livingdocs/livingdocs-server` and `@livingdocs/livingdocs-editor`).

We recommend adding an `.npmrc` file to your server and editor repositories so everyone in your team can run `npm install` seamlessly.

.npmrc file:

```ini
//registry.npmjs.org/:_authToken=<yourNpmToken>
```
