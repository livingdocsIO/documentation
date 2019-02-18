# Getting started with Livingdocs: The Boilerplates

Both the server and the editor ship with a default configuration, that works out of the box with the Dockerfiles we provide.

## Operating system

Livingdocs runs under Mac OSX, Linux and Windows 10. For Windows 10 proceed first to [setup Windows 10](./setup_windows10.md)

### Prerequisites

In order to setup and run a Livingdocs application on your local machine, you need to make sure that the following programs and libraries are installed and publicly available on your system:

- [Node.js](https://nodejs.org) - Probably the world's most used Javascript runtime. Livingdocs is written in Javascript, so this one is definitely a hard requirement. You find installation instructions for all operating systems on their website. To UNIX users, we recommmend using [NVM](https://github.com/creationix/nvm), a **N**ode **V**ersion **M**anager that offers streamlined installation and upgrade procedures as well as version management.
- [Docker](https://docs.docker.com/get-started/) - Very broadly, Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. We use it to run our storage services (databases, search index and so on) on your local machine.
- [GraphicsMagick](http://www.graphicsmagick.org/README.html) - A library that, among other things, enables image processing. We use it mainly to resize images.
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Everybody's favorite distributed version control software. We use it extensively and, let's be honest, chances are you are too.
- [jq](https://stedolan.github.io/jq/download/) - A lightweight and flexible command-line JSON processor. We use it for batch patches and data migrations.

On a lower note, you'll also need active Github and Docker accounts respectively.

### Get the code

Create a new directory, change to it and clone our boilerplate repositories from Github:

```bash
git clone https://github.com/livingdocsIO/livingdocs-server-boilerplate
git clone https://github.com/livingdocsIO/livingdocs-editor-boilerplate
```

Now, what did you get?

Within `livingdocs-server-boilerplate` we have a default configuration for a Livingdocs Server instance. This server, once up and running, will take care of a variety of things, from persisting your documents to search indexation – however, it is exclusively data driven or [headless](https://en.wikipedia.org/wiki/Headless_software).

We still expect beautiful things to happen in our browser in the near future though. This is what `livingdocs-editor-boilerplate` is for. It contains a default configuration for a Livingdocs Editor instance, our editing user interface.

To proceed, follow the instructions in each repository's `README`:

- [livingdocs-editor-boilerplate](https://github.com/livingdocsIO/livingdocs-editor-boilerplate)
- [livingdocs-server-boilerplate](https://github.com/livingdocsIO/livingdocs-server-boilerplate)

#### Persist ENVIRONMENT variable

Locally, you might want to permanently set `ENVIRONMENT=local` by adding the following line to your `~/.zhsrc` or `~/.bashrc`

```bash
export ENVIRONMENT=local
```
