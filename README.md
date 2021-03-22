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
- `reference` -> Try to fit it into `reference-docs`. It won't fit, maybe we should introduce a `concepts` section.
- `guides` -> hands-on guides to do a specific integration, use a feature, etc.
- `devops` -> everything that concerns server setup and administration
- `know-how` -> only things that do not depend on Livingdocs (general know-how)

## Style

### Text

Always have a small description at the top of your page to introduce the reader into the topic. Add notes after the first section.

In the reference-docs always be brief and concise. Don't state opinions or use unnecessary adjectives. Or as Einstein puts it «as simple as possible but no simpler».

In the guides always state what a certain guide is trying to achieve. Be comprehensive, i.e. don't leave out stuff that would frustrate people following your guide.

### Images

Images shouldn't be too high. Try to capture images with a 4/3 or similar ratio.

#### Screenshots
If you need to take a screenshot of a whole browser, either try to capture just the content without frame or just the specific window.

On a mac, press `CMD+Shift+4` to capture a specific section on the screen.
If you press `Shift` once if the screenshot tool is still open, you can capture a whole winodw.


#### Terminal

Please try to capture a nice segment. If possible try to embed the text in a text code block or use [this website to generate an image](https://carbon.now.sh/?bg=rgba%28252%2C252%2C252%2C1%29&t=lucario&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%2524%2520ENVIRONMENT%253Dlocal%2520.%252Fbin%252Findex.js%2520database%250AUsage%253A%2520index.js%2520database%2520%253Ccommand%253E%250A%250AOptions%253A%250A%2520%2520-y%252C%2520--yes%2520%2520%2520Run%2520the%2520script%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%255Bboolean%255D%2520%255Bdefault%253A%2520false%255D%250A%2520%2520-h%252C%2520--help%2520%2520Show%2520help%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%255Bboolean%255D%250AExamples%253A%250A%2520%2520livingdocs-server%2520database%2520delete%2520%2520%2520%2520Drop%2520the%2520postgres%2520database%250A%2520%2520livingdocs-server%2520database%2520create%2520%2520%2520%2520Create%2520the%2520postgres%2520database%250A%2520%2520livingdocs-server%2520database%2520recreate%2520%2520Silently%2520drop%2520a%2520database%2520if%2520it%2520exists%2520and%2520create%2520it%2520again).

## Hugo Usage

This documentation is built using [Hugo](https://gohugo.io/).

You can run it locally:
```bash
# install hugo
brew install hugo

# then start the hugo server
hugo serve

# To build the final static files, you can just run
hugo
```

## Debug Links in the documentation

```bash
npm install -g markdown-link-check
markdown-link-check SUMMARY.md -q
```
