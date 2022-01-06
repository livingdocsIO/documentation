---
title: Managing Project Configs
description: Sync project configs between environments
weight: 1
menus:
  reference-docs:
    parent: CLI
---

## Syncing Project Configs with the CLI

In case you store your project configurations in the database you will need
to make sure that both changes made in production as well as new changes added
for new features all end up at the right time in all your environments.

https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/master/setup/projects/boilerplate/index.js

## Set up CLI environment variables

For easier working with multiple projects and environments first set up
a `.livingdocs-cli` dotfile: [Set up your cli dotfile]({{< ref "./cli-dotfile.md" >}})

## CLI Commands

Here we describe one possible approach to sync project configurations
between local, development, staging and production environments.

### Download

You can download a project config with the `project-config:download` command. This command supports different formats.

`--format`:

* `js` (default): will create an index.js and place all properties into separate files. This is much easier to read and edit.
* `js/html`: This works the same as the `js` format except that components will be stored in HTML files. This is the recommended format as it is easy to read and edit.
* `json`: will download the full config into a single JSON file. These can get quite large especially if the design is included in the project config.

```sh
npx livingdocs-cli project-config:download --format js/html --project daily-planet --env production
```

### Dry Run

To see which changes would be applied you can use `project-config:plan`. With this command you don't have to worry to publish something by accident.

```sh
# plan update and verify only the expected properties are updated
npx livingdocs-cli project-config:plan --project daily-planet --env ci
```

### Publish

To upload the latest changes you can use `project-config:publish`. Livingdocs will do a diff to the current version and show you the patches which will be applied.

```sh
# if everything looks ok, do the update
npx livingdocs-cli project-config:publish --project daily-planet --env production
```

### Diffing two environments

You can use `git diff --no-index` to use gits familiar diffing to compare two folders (or files).
First you can download two project configs and then use git to show you the diff.

```sh
npx livingdocs-cli project-config:download --project daily-planet --env ci
npx livingdocs-cli project-config:download --project daily-planet --env production

# `--no-index` diffs the two folders without regard to their current
# status in git
git diff --no-index sync/daily-planet/production sync/daily-planet/ci
```

## Examples

### Video Guide: Download and Upload

If you want to make a precise change e.g. on the production environment you can download the current config, make your edits and upload again wich is shown in this video:

{{< vimeo id="429648531" class="video-wrapper" >}}
