# Contributing

## Structure

Add your documentation in the right spot. The structure is as follows:
- `reference-docs`
  - `project-config` -> everything that can be configured through the project config (aka channel config)
  - `server-config` -> everything that is in the instance config for a server, an entry here must specify some config options
  - `server-api` -> everything that concerns the core code APIs in the server that downstreams can use
  - `editer-config` -> everything that is in the instance config for an editor, an entry here must specify some config options
  - `editor-api` -> everyhting that concerns the core code APIs in the editor that downstreams can use
  - `content-model` -> all livingdocs framework and li data model specific things
  - `includes` -> everything that concerns includes and how they can be implemented in downstreams
- `guides` -> hands-on guides to do a specific integration, use a feature, etc.
- `devops` -> everything that concerns server setup and administration
- `know-how` -> only things that do not depend on Livingdocs (general know-how)

## Style

In the reference-docs always be brief and concise. Don't state opinions or use unnecessary adjectives. Or as Einstein puts it «as simple as possible but no simpler».

In the guides always state what a certain guide is trying to achieve. Be comprehensive, i.e. don't leave out stuff that would frustrate people following your guide.

## Gitbook Usage

This documentation is built using [GitBook](https://www.gitbook.com/). If you want to run it locally, follow the [Installation and Setup section](https://toolchain.gitbook.com/setup.html). The gist is:

*Initial installation*

```
# Install `gitbook` commandline tool
npm install gitbook-cli -g
# Install plugins
gitbook install
```


*Run*

```
gitbook serve
```


## Debug Links in the documentation

```bash
npm install -g markdown-link-check
markdown-link-check SUMMARY.md -q
```


Check links in all files in the project:
```bash
find -E . -regex ".*\.(md)" | xargs -n 1 markdown-link-check -q
```
