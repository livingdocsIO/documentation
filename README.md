# Livingdocs Documentation
## Running Locally

This documentation is built using [Hugo](https://gohugo.io/).

You can run it locally:
```bash
# install hugo
brew install hugo

# then start the hugo server
npm start

# To build the static page into `./public`, you can just run
npm run build
```

## Style
### Text

Always have a small description at the top of your page to introduce the reader into the topic. Add notes after the first section.

Always be brief and concise. Don't state opinions or use unnecessary adjectives. Or as Einstein puts it «as simple as possible but no simpler».

In the guides always state what a certain guide is trying to achieve. Be comprehensive, i.e. don't leave out stuff that would frustrate people following your guide.

### Images

Images shouldn't be too high. Try to capture images with a 4/3 or similar ratio.

#### Screenshots
If you need to take a screenshot of a whole browser, either try to capture just the content without frame or just the specific window.

On a mac, press `CMD+Shift+4` to capture a specific section on the screen.
If you press `Shift` once if the screenshot tool is still open, you can capture a whole winodw.


#### Terminal

Please try to capture a nice segment. If possible try to embed the text in a text code block or use [this website to generate an image](https://carbon.now.sh/?bg=rgba%28252%2C252%2C252%2C1%29&t=lucario&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%2524%2520ENVIRONMENT%253Dlocal%2520.%252Fbin%252Findex.js%2520database%250AUsage%253A%2520index.js%2520database%2520%253Ccommand%253E%250A%250AOptions%253A%250A%2520%2520-y%252C%2520--yes%2520%2520%2520Run%2520the%2520script%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%255Bboolean%255D%2520%255Bdefault%253A%2520false%255D%250A%2520%2520-h%252C%2520--help%2520%2520Show%2520help%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%255Bboolean%255D%250AExamples%253A%250A%2520%2520livingdocs-server%2520database%2520delete%2520%2520%2520%2520Drop%2520the%2520postgres%2520database%250A%2520%2520livingdocs-server%2520database%2520create%2520%2520%2520%2520Create%2520the%2520postgres%2520database%250A%2520%2520livingdocs-server%2520database%2520recreate%2520%2520Silently%2520drop%2520a%2520database%2520if%2520it%2520exists%2520and%2520create%2520it%2520again).

## Debug Links in the documentation

```bash
npm install -g markdown-link-check
markdown-link-check SUMMARY.md -q
```
