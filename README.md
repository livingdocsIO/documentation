# Livingdocs Documentation

## Local Setup

This documentation is built using [Hugo](https://gohugo.io/).

You can run it locally:

```bash
# install hugo
brew install hugo

# install dependencies
npm install

# start the hugo dev server
npm start
```

If you use WSL2 and want a new browser window to open automatically when running the documentation locally, install `wslu`. You can find installation instructions in the [`wslu` documentation](https://wslutiliti.es/wslu/install.html). For example, on Ubuntu in WSL2, run:

```bash
sudo apt install wslu
```

When working with the lunr search code it can be useful to test the real production setup, due to the way we edit the search index for production:

```bash
# build the static site into `./public`
npm run build
# or the uncompressed version
npm run build:fast

# serve the `./public` directory
npm run start:production
```

When editing code you can run `npm run build:fast` in a separate terminal and then refresh the page to see the latest changes. This only takes 1-2 seconds.

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
{{< added-in "release-2021-03" >}}
```

```markdown
{{< deprecated-in "release-2021-03" >}}
```

```markdown
{{< removed-in "release-2021-03" >}}
```

```markdown
{{< release "release-2021-03" >}}
```

```markdown
{{< feature-info "li-documents feature" "server" >}}
```

_Note: Shortcode templates can be found in `themes/hugo-docs/layouts/shortcodes`._

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

Some icons were copied individually to `themes/hugo-docs/assets/svg` from
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

## Endpoint Versioning

### How to do versioned api changes

### Behavior of versioned endpoints

### How to introduce new endpoints

### How to make changes to version endpoints

### Properties

```yaml
// a document will not be in search results
excludeFromSearch: true

// a document will not be rendered. Start your server with `npm run start -- -D` to see drafts for development
draft: true

// don't show the edit button for updating a document at github
renderEditButton: false

// don't show document teaser cards
renderSummaries: false

// don't show table of contents on the right side of the page
renderTOC: false

// helps search engine to find alternative words which is not in the body of the document
keywords:
  - myKeyword
```

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

## Release Notes

### Generate Release Changes File

The script `bin/generate-release-changes.js` allows you to generate a changelog-style file that compiles all Pull Request descriptions included in a given release. It provides a clear and comprehensive overview and supports the creation of release notes.

Usage:

```
node bin/generate-release-changes.js [options] <markdown-file>
```

Options:

```
  -f, --format <format>  Output format: json or markdown (default: json)
  -h, --help            Show help
```

Example:

```
node bin/generate-release-changes.js release-2025-07.md
node bin/generate-release-changes.js --format=markdown release-2025-07.md
```

#### Generate Github Access Token

To run the script, you must provide a valid `GitHub Access Token` with proper repository access.

Steps to Generate a Token

1. Go to GitHub → Profile → Settings → Developer Settings → Personal Access Tokens

2. Choose Tokens (Classic) and click Generate new token (Fine-grained)

3. Configure the token:  
   Resource Owner: LivingdocsIO  
   Repository Access: Only selected repositories  
   Select: Editor, Server, Documentation
   Permissions: Pull requests: Read-only & Contents: Read-only

4. Click Generate Token, wait for permissions to be granted, then copy the token.

5. Set the github token for the generate script
   ```
   export GITHUB_TOKEN=<created-github-token>
   ```

#### Generate and view output file

To generate and open a Markdown file with all included PR descriptions:

```
// Generate file
node bin/generate-release-changes.js --format=markdown content/operations/releases/release-2025-07.md b/content/operations/releases/release-2025-07.md > changes.md

// View the file
open changes.md
```
