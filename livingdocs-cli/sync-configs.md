# Sync project configs between environments

## What are we doing here?

In case you store your project configurations in the database you will need
to make sure that both changes made in production as well as new changes added
for new features all end up at the right time in all your environments.

So here we describe one possible approach to sync project configurations
between local, development, staging and production environments.


#### Set up CLI environment variables

For easier working with multiple projects and environments first set up
a `.livingdocs-cli` dotfile: [Set up your cli dotfile](./cli-dotfile.md)


## Commands you can use to sync configs

#### Download project config

Download:
```sh
npx livingdocs-cli project-config:download --format json --project projectA --env development
```

#### Publish changes

```sh
# plan update and verify only the expected properties are updated
npx livingdocs-cli project-config:plan --project projectA --env development

# if everything looks ok, do the update
npx livingdocs-cli project-config:publish --project projectA --env development
```

#### Diffing two versions

Here we can simply use `git diff --no-index` to use git to compare to
files.

```sh
# --no-index diffs the two folders without regard to their current
# status in git
git diff --no-index sync-projectA/local sync-projectA/development
```

## Examples

#### Full multi-project enterprise workflow example

This workflow is for enterprise customers who also have a local setup
of livingdocs on their machine.


**Step 1: Download all configs**

```sh
npx livingdocs-cli project-config:download --format json -p projectA --env dev &&
npx livingdocs-cli project-config:download --format json -p projectA --env staging &&
npx livingdocs-cli project-config:download --format json -p projectA --env production

npx livingdocs-cli project-config:download --format json -p projectB --env dev &&
npx livingdocs-cli project-config:download --format json -p projectB --env staging &&
npx livingdocs-cli project-config:download --format json -p projectB --env production
```

**Step 2: Commit these changes**

**Step 3: Download local configs (these usually have the latest changes)**

```sh
npx livingdocs-cli project-config:download --format json -p projectA --env local
npx livingdocs-cli project-config:download --format json -p projectB --env local
```

**Step 4: Compare configs**

One example:
```sh
git diff --no-index sync-projectA/local sync-projectA/development
```
Note that some configs like renditions or preview urls are always different
between environments.

**Step 5: Make changes to config files**

**Step 6: Publish changed configs**

One example:
```sh
# plan update and verify only the expected properties are updated
npx livingdocs-cli project-config:plan -p projectA --env development

# if everything looks ok, do the update
npx livingdocs-cli project-config:publish -p projectA --env development
```

**Step 7: Discard `sync-projectA/local` and `sync-projectB/local`**

**Step 8: Commit the rest**
