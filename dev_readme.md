# Gitbook Usage

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
