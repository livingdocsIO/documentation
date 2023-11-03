---
title: Document Design and Components
bullets:
  - Document Design Intro
  - Create a component from scratch
weight: 1
---

### What is a document design?

A Livingdocs design is a set of HTML components (templates) and configurations how they can be used and edited inside of the Livigndocs editor.
It also lists the CSS and/or Javascript dependencies that need to be loaded to render documents correctly, both in the editor and when rendering it on the server side.

A document design is defined in the [project config]({{< ref "/reference/project-config" >}}) in both `design_settings.js` and `components`.

_Good to know:_ you might come across the notion of a "reference design". Reference designs are basically the same as embedded designs, but live externally, e.g. on an S3 bucket and are referenced in a project. The downside of reference designs is that they can not be customized in the context of a single project.


### Hands-on: add a new component

Lets add a new component to our boilerplate design. We want a header consisting of a title and an image that can be used in the content-type article.

First navigate to your components folder and create a new file `header.js` with the following content.
```js
const dedent = require('dedent')

module.exports = {
  name: 'header',
  label: 'Header',
  iconUrl: 'https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_header_and_image.svg',
  directives: [
    {
      name: 'image',
      type: 'image',
      imageRatios: ['16:9', '4:3']
    }
  ],
  html: dedent`
  <div>
    <h2 doc-editable="title">
      Title
    </h2>
    <img
    doc-image="image"
    class="responsive-img">
  </div>
  `
}
```

Lets recap what we have.

Every component defines a `name` to reference it in the system, a `label` and `iconUrl` for display and an `html` containing the markup.

The HTML itself contains declarative directives that are prepended with `doc-`, in our example `doc-editable` and `doc-image` ([learn all about directives]({{< ref "/reference/document/document-design">}})). Those tell the Livingdocs editor where the users can edit content.

The directives themselves can contain configuration, referenced in the `directives` property. In our example we tell the Livingdocs editor that we want to give the image preset ratios of '16:9' and '4:3'.

To get the component displayed in the editor you need to do 3 more things:
- add `require('./components/header')` in `boilerplate_config.js` next to the other components
- add the name `header` to the array of components under the group `text`in `design_settings.js`
- add `name: 'header'` to the list of `components` in `article.js` (our target content-type)

 (Note that we used the `name` property, i.e. `header` when referencing the component in other config files)

Now that everything is ready, we can restart the server to apply our changes. Upon starting you should see a line like this on the command-line:
```sh
16:31:12 INFO  li-tasks/setupProjects > Updated - project 'boilerplate': 1 patch applied (revisionNumber: 2)
```

This indicates that the project config was successfully updated. If you have an error in this line there is probably a typo somewhere.

Now, create a new article and you should have a Header component in the sidebar to drag in. Beautiful!

[Git patch for those changes](./add-component-patch.patch)

#### Configure default content

Now that we have a new component we want to add it to newly created articles by default. And since it is a header we want to pin it so editors can not accidentally delete it.

Navigate to the content-type file `article.js` and add the following JSON just after `components`.
```js
defaultContent: [
  {component: 'header', position: 'fixed'},
  {component: 'paragraph'}
],
```

Again, restart your server. In case of success you will see a line on the CLI like this:
```sh
16:57:10 INFO  li-tasks/setupProjects > Updated - project 'boilerplate': 1 patch applied (revisionNumber: 3)
```

Create a new article in the editor. It should have an empty header followed by an empty paragraph in it by default and when you select the header, the property panel reads "This component is pinned to its position." and there is no delete option.

[Git patch for those changes](add-default-content.patch)

Congratulations, you've taken your first steps in a Livingdocs Design! To learn more about designs, refer to [the design reference documentation]({{< ref "/reference/document/document-design" >}}).
