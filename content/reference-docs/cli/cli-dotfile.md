---
title: CLI dotfile
description: How to configure the CLI using a .livingdocs-cli config file
weight: 2
menus:
  reference-docs:
    parent: CLI
---

## Set up a CLI dotfile

In case you are working with multiple projects and/or environments it becomes
cumbersome to set tokens, hosts and other params.

You can use a dotfile to store these params conveniently and pass
`env` and `project` to commands instead of
using e.g. the `LI_TOKEN` environment variable.

The dotfile's format is YAML (and thus JSON works as well). And the CLI will look for the dotfile in the current working directory.

## Example: Multiple environments

`.livingdocs-cli` file in the root of your working directory:

```yaml
environments:
  local:
    host: http://localhost:9090
    sourceFolder: ./project-config/local
    distFolder: ./sync/local
  staging:
    host: https://server-staging.example.dev
    token: staging-token
    sourceFolder: ./project-config/staging
    distFolder: ./sync/staging
  production:
    host: https://server-production.example.dev
    token: production-Token
    sourceFolder: ./project-config/production
    distFolder: ./sync/production
alias:
  st: staging
```

## Parameters
### Host

The hostname of your Livingdocs Server.

If you are using [Livingdocs Service](https://edit.livingdocs.io/), you need to set the production host as `https://server.livingdocs.io`.

When running the server locally, the host should be set to `http://localhost:9090`.

### Token

API token used for authentication. This is different for each environment and each project.

Note: it is recommended to add a production token with only
read access (or simply dont add a prouction token at all). When publishing a new config you can supply a write token via `--token` argument.
### sourceFolder

The source folder for the project config that are going to be published/uploaded.
Can be the same as the distFolder. 

### distFolder

The destination folder for the project config downloaded.
Can be the same as sourceFolder.

## Usage

How to use these configs in the terminal:

```sh
# with `env` param
npx livingdocs-cli project-config:download --env development

# in shorthand form
npx livingdocs-cli project-config:download -e development

# in shorthand form and also using an alias
npx livingdocs-cli project-config:download -e st
```

## Example: Multiple projects & environments

`.livingdocs-cli` file in the root of your working directory:

```yaml
projects:
  daily-planet:
    environments:
      ci:
        host: https://server-development.exampleA.dev
        token: dev-token
        sourceFolder: ./daily-planet/ci
        distFolder: ./sync/daily-planet/ci
      production:
        host: https://server-production.exampleA.dev
        token: production-Token
        sourceFolder: ./daily-planet/production
        distFolder: ./sync/daily-planet/production
  daily-prophet:
    environments:
      ci:
        host: https://server-development.exampleB.dev
        token: dev-token
        sourceFolder: ./daily-prophet/ci
        distFolder: ./sync/daily-prophet/ci
      production:
        host: https://server-production.exampleB.dev
        token: production-Token
        sourceFolder: ./daily-prophet/production
        distFolder: ./sync/daily-prophet/production
alias:
  prod: production
```

How to use these configs in the terminal:

```sh
# # with `project` and `env` params
npx livingdocs-cli project-config:download --project projectA --env production

# in shorthand form
npx livingdocs-cli project-config:download -p projectA -e production

# in shorthand form and using an alias
npx livingdocs-cli project-config:download -p projectA -e prod
```
