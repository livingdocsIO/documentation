# Livingdocs Documentation

## Local Setup

This documentation is built using [Hugo](https://gohugo.io/).

You can run it locally:
```bash
# install hugo
brew install hugo

# install dependencies
npm install

# then start the hugo server
npm start

# To build the static page into `./public`, you can just run
npm run build
```

## Contribution Guide

### Titles and Subtitles

Always start with `h2` titles in your documents (`h1` should only be used by templates for the page title). Then use `h3` for subtitles.

Check your titles by reading the table of contents generated on the right side of the screen. The titles should make it clear what is to be expected in a section. E.g. avoid generic titles like 'Example'.

### Shortcodes

```markdown
{{< vimeo id="426279221" class="video-wrapper" >}}
```

```markdown
{{< github "livingdocsIO/livingdocs-cli" "Livingdocs command line utility" >}}
```

```markdown
{{< warning >}}The world is not a logic puzzle{{< /warning >}}
```

```markdown
{{< added-in release-2021-03 >}}
```

```markdown
{{< removed-in release-2021-03 >}}
```

*Note: Shortcode templates can be found in `themes/hugo-docs/layouts/shortcodes`.*


### Text

Always be brief and concise. Don't state opinions or use unnecessary adjectives. Or as Einstein puts it «as simple as possible but no simpler».

In the guides always state what a certain guide is trying to achieve. Be comprehensive, i.e. don't leave out stuff that would frustrate people following your guide.


### Images

Images shouldn't be too high. Try to capture images with a 4/3 or similar ratio.

### Screenshots

If you need to take a screenshot of a whole browser, either try to capture just the content without frame or just the specific window.

On a mac, press `CMD+Shift+4` to capture a specific section on the screen.
If you press `Shift` once if the screenshot tool is still open, you can capture a whole window.

### Terminal

Please try to capture a nice segment. If possible try to embed the text in a text code block or use [this website to generate an image](https://carbon.now.sh/?bg=rgba%280%2C0%2C0%2C0%29&t=lucario&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=const%2520cars%2520%253D%2520%255B%27BMW%27%252C%2520%27Volvo%27%252C%2520%27Mini%27%255D%250A%250Afor%2520%28const%2520car%2520of%2520cars%29%2520%257B%250A%2520%2520console.log%28%2560car%253A%2520%2524%257Bcar%257D%2560%29%250A%257D).


## Hugo Theme

### Icons

Some icons where copied individually to `themes/hugo-docs/assets/svg` from
<https://primer.style/octicons/>.

## Document Headers

Every document has a header to control the behavior in the documentation. Below you will see an example:

```
---
title: Setup Notifications
linkTitle: Notifications
description: Configure notifications so users can watch documents
weight: 6
---
```

### Properties

* `excludeFromSearch: true` - a document will not be in search results
* `draft: true` - a document will not be rendered. Start your server with `npm run start -- -D` to see drafts for development
* `renderEditButton: false` - don't show the edit button for updating a document at github
* `renderSummaries: false` - don't show document teaser cards
* `renderTOC: false` - don't show table of contents on the right side of the page

### Teaser Properties

Here you can see an example, how to define a document teaser

```
---
title: My title
linkTitle: This is my card title
bullets:
  - item 1 in your bullet list
  - item 2 in your bullet list
description: Describe the document
weight: 6
---
```

![image](https://user-images.githubusercontent.com/172394/140274827-1fdf9774-8664-44cc-ae62-cb17089461cc.png)

`linkTitle` - a document teaser card takes `title` as default, with `linkTitle`, you can overwrite the teaser title



## Development

### Debug Links in the documentation

```bash
npm install -g markdown-link-check
markdown-link-check SUMMARY.md -q
```
