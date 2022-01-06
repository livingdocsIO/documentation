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

The dotfile's format is YAML (and thus JSON works as well).

## Example: Multiple environments

`.livingdocs-cli` file in the root of your working directory:

```yaml
environments:
  local:
    host: http://localhost:9000
    token: local-token
    distFolder: ./config-sync/local
  development:
    host: https://server-development.example.dev
    token: dev-token
    distFolder: ./config-sync/development
  staging:
    host: https://server-staging.example.dev
    token: staging-token
    distFolder: ./config-sync/staging
  production:
    host: https://server-production.example.dev
    token: production-Token
    distFolder: ./config-sync/production
alias:
  dev: development

```

Note: it is recommended to add a production token with only
read access (or simply dont add a prouction token at all). When publishing a new config you can supply a write token via `--token` argument.

How to use these configs in the terminal:
```sh
# with `env` param
npx livingdocs-cli project-config:download --env development

# in shorthand form
npx livingdocs-cli project-config:download -e development

# in shorthand form and also using an alias
npx livingdocs-cli project-config:download -e dev
```

## Example: Multiple projects & environments

`.livingdocs-cli` file in the root of your working directory:

```yaml
projects:
  projectA:
    environments:
      development:
        host: https://server-development.exampleA.dev
        token: dev-token
        distFolder: ./sync-projectA/development
      production:
        host: https://server-production.exampleA.dev
        token: production-Token
        distFolder: ./sync-projectA/production
  projectB:
    environments:
      development:
        host: https://server-development.exampleB.dev
        token: dev-token
        distFolder: ./sync-projectB/development
      production:
        host: https://server-production.exampleB.dev
        token: production-Token
        distFolder: ./sync-projectB/production
alias:
  dev: development

```

How to use these configs in the terminal:
```sh
# # with `project` and `env` params
npx livingdocs-cli project-config:download --project projectA --env development

# in shorthand form
npx livingdocs-cli project-config:download -p projectA -e development

# in shorthand form and using an alias
npx livingdocs-cli project-config:download -p projectA -e dev
```
