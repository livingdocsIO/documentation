---
title: On Premise Setup
menus:
  learn:
    weight: 2
---

## Get Code Access

For an on premise solution you need access to private Livingdocs repositories.

To get access you will need a Github account and drop us an email: <contact@livingdocs.io>.

Until you have access you can use our service at <https://edit.livingdocs.io> for your evaluation. All Livingdocs features except server- and editor extensions are also available in the service.


## Boilerplates

Once you have access you can download our boilerplates for the livingdocs-server and the livingdocs-editor.

Both the server and the editor ship with a default configuration, that works out of the box with the Dockerfiles we provide.

{{< warning >}}
  If you get a <strong>404 - Not Found</strong> for the repos below this means you do not have access to Livingdocs on Github.
{{< /warning >}}

{{< github "livingdocsIO/livingdocs-editor-boilerplate" "[Private Repo] On Premise Editor Template" >}}

{{< github "livingdocsIO/livingdocs-server-boilerplate" "[Private Repo] On Premise Server Template" >}}


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

## Download the Boilerplates

### Get the code

Create a new directory, change to it and clone our boilerplate repositories from Github:

```bash
git clone https://github.com/livingdocsIO/livingdocs-server-boilerplate
git clone https://github.com/livingdocsIO/livingdocs-editor-boilerplate
```

Now, what did you get?

Within `livingdocs-server-boilerplate` we have a default configuration for a Livingdocs Server instance. This server, once up and running, will take care of a variety of things, from persisting your documents to search indexation – however, it is exclusively data driven or [headless](https://en.wikipedia.org/wiki/Headless_software).

The second folder `livingdocs-editor-boilerplate` contains a default configuration for a Livingdocs Editor instance, our editing user interface.

### The `ENVIRONMENT` variable

With this value, we determine under what kind of base premise the services should get run. At this point, we only need to know, that for a local setup we always want that value to be set to `local`.
You can either call the folllowing line before each and every script or permanently set the environment variable by adding the following line to your `~/.zhsrc` or `~/.bashrc`

```bash
export ENVIRONMENT=local
```


## Proceed with the Boilerplate READMEs

Next, follow the instructions in each repository's README:

{{< github "livingdocsIO/livingdocs-editor-boilerplate" "[Private Repo] On Premise Editor Template" >}}

{{< github "livingdocsIO/livingdocs-server-boilerplate" "[Private Repo] On Premise Server Template" >}}


**Please note**
These boilerplates are _not_ meant to be used for anything else than local evaluation. They also include configurations for rate limited third-party API's that we provide for convenience reasons.
