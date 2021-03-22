---
title: DPA Import
menus:
  guides:
    parent: Integrations
---

Apart from the one-time imports to import a set of legacy data into Livingdocs, continuous imports from a third-party feed, e.g. DPA articles are a major case for publishers.
In this guide we use an [open-source example](https://github.com/livingdocsIO/dpa-example) provided by Livingdocs to get a DPA feed import running with the Livingdocs service sandbox and then in a hands-on exercise adapt the open-source boilerplate such as to import DPA articles to the living-stories design (another design available on the Livigndocs service).
This guide will not only help you to get a DPA import running but shows you the details necessary to import any kind of data source (e.g. another feed provider) to any kind of Livingdocs design.

## Overview

The [open-source example](https://github.com/livingdocsIO/dpa-example) uses an S3 Push serverless-offline setup that mimics the setup present on the [DPA Infocom](https://service.dpa-infocom.de/de/support/solutions/articles/76000020926-wie-funktioniert-die-json-feed-s3-push-api-) on a local machine. For the purpose of this guide we will use the local setup but it's easy to change the wiring to use a deployed AWS serverless app connected to the DPA S3 push.

In order to follow the concepts, we recommend you make an account on the DPA API portal: https://api-portal.dpa-newslab.com
You will also need an account on the Livingdocs service: https://edit.livingdocs.io/signup

## Setup

Clone the code at https://github.com/livingdocsIO/dpa-example and follow the setup steps at https://github.com/livingdocsIO/dpa-example/blob/master/README.md

Make sure that you could successfully import an example DPA article to your Livingdocs sandbox project. The following steps will build upon this.

## Hands-on: adapt the boilerplate

For this part, you will need to write some code. We will adapt the [DPA Example boilerplate](https://github.com/livingdocsIO/dpa-example) and change the mapping such as to import DPA articles into the living-stories design.

### Create a new project on Livingdocs

First, you will need to create a new project in your Livingdocs account. Over the main menu, choose "Create new Project". On the following screen, select the "Living Stories" Design and give your project any name.

After you have created your new project, you will first of all need to create a new API tokens as those are per project. On the main menu, navigate to "Project Access" -> "API Tokens" and choose "Add API Token". Give it read and write rights and any name.

Now, it's time for a sanity check. Go back to the CLI where you were running the DPA Example before. Set the new API Token with:
```bash
export LI_TOKEN='<your-new-token>'
```

replacing 'your-new-token' with the API Token you just created for your new project.

Now, start your local DPA Example setup and run the example import as before.
You will see that the article and image(s) were correctly imported. But it's still using the living-times design, not the living-stories. Lets change that now.

### Change the target design

The Livingdocs service uses a so-called embedded design. This means that all designs are stored in the database and not globally. Instead of the global name 'living-stories', the actual design instance in your project will have a name of the form `p:${projectId}:${channelId}`. The reason is simple: your project design is not fixed, you can change it to anyhting you like. The fact that it starts out the same as the living-times design is mere convenience.

So first of all, you need to find out the name of your design. You can easily do this by navigating in the main menu to "Project Setup" -> "Desing Migration". The "Design Bump" interface shows the name of your design. In my case it's p:1109:1057. Be aware, the numbers will be different for you!

Open the [DPA Example boilerplate](https://github.com/livingdocsIO/dpa-example) in any code editor of your choosing. Globally search for 'living-times' and replace it with 'p:1109:1057' (remember to use your numbers in here!). Use the design version in your project (usually '1.0.0' if it is a new project).

Lets do another sanity check.
First, get a new DPA test article. Since we successfully imported the first one, subsequent calls would be skipped (unless there is an update signaled in the DPA JSON - but lets not go into that detail at the moment).
Also, you need to restart the `sls` commmand on the CLI since we made a code change.

Once this is done, run the import again. You should get an error this time. Navigate to "Project Setup" -> "Import Jobs". You should see that images were imported correctly since they are not dependent on the design, but the document failed with a message along the lines of "Validation failed". This is expected, we used 'living-times' components in a 'living-stories' article which is (almost certainly) an invalid operation. Lets change the mapping now.

(Note: if the DPA article is really minimal and the actual components are no different in living-times than in living-stories then this sanity check might actually succeed. Not to worry.)

### Changing the design mapping

Once again, open your code editor. Open the file `document_mapper.js`. This file allows you to customize 3 types of data for your import target:

- the metadata
- the content-type
- the design transformation

Lets start simple and add a new metadata field. The 'living-stories' setup allows a metadata field called 'flag'. Lets use the DPA field 'kicker' to fill this. The adapted method will look something like this:

```js
mapMetadata: function (dpaArticle) {
    return {
      title: dpaArticle.headline,
      flag: dpaArticle.kicker
    }
  }
```

The content-type is the same as in the boilerplate ('regular') so you don't need to change anything there.

Lets get to the main part: the design transformation. The [DPA Example boilerplate](https://github.com/livingdocsIO/dpa-example) imports DPA articles into an intermediate Livingdocs design format. Your job in a transformation is to transform this intermediate design to your target design. In order to do this you can either just transform JSON or you use the helper library `transmogrifier`. In this guide we will use the later. We will use the following methods for our example:

- `rename(orig, target)`, renames all occurrences of the component name 'orig' to 'target'
- `transform(orig, transformer)`, allows you to pass a transformer that gets the original component and should return your new (transformed) one
- `wrap(options, rules)`, allows you to wrap a set of components into a container according to a set of rules

The code will look as follows:

```js
mapDocument: function (abstractArticle) {
    const content = transmogrifier(abstractArticle)
      .rename('header', 'head')
      .transform('head', (component) => {
        const flag = component.content.dachzeile || ''
        const title = component.content.headline || ''
        const text = component.content.subhead || ''
        const author = component.content.byline || component.content.creditline || ''
        const date = component.content.dateline || ''
        component.content = {flag, title, text, author, date}
        return component
      })
      .transform('image', (component) => {
        delete component.content.source
        return component
      })
      .wrap({
        identifier: 'article-container',
        position: 'fixed',
        containers: {header: [], main: []}
      }, [
        {identifier: 'head', target: 'header', repeat: 'once'},
        {identifier: 'head', target: 'main', repeat: 'all'},
        {identifier: 'paragraph', target: 'main', repeat: 'all'},
        {identifier: 'image', target: 'main', repeat: 'all'},
        {identifier: 'subtitle', target: 'main', repeat: 'all'},
        {identifier: 'free-html', target: 'main', repeat: 'all'},
        {identifier: 'iframe', target: 'main', repeat: 'all'},
        {identifier: 'tweet', target: 'main', repeat: 'all'}
      ])
      .content()

    return {content, design: {name: 'p:1109:1057', version: '1.0.0'}}
}
```

Looking at the code you might realize, it's almost the same as was there in the boilerplate. This is quite common. Designs first of all differ in their looks which are mostly steered by CSS. Structural changes are rarer, in the case we just did, only the structure of the main container is different, all components are the same.

With everything in place lets now run the import to our Stories design.
Again, get a new test article from DPA Infocom. Restart your `sls` (serverless) application and run the test import.
The "Import Jobs" Dashboard should now show a success and you should be able to open your new article.

Congratulations! You now change the importer boilerplate to import DPA articles into a different design, the living-times design. Chances are you want to do the same for your custom design. Go ahead, you're ready to do this now.

If you want to learn more about the boilerplate, e.g. how the import flow works under the hood or how the DPA articles are parsed in the first place, refer to the [Boilerplate Readme](https://github.com/livingdocsIO/dpa-example/blob/master/README.md) in the "Customizing" section.
