
# Create a design

## Overview

A Livingdocs design consists of a series of `snippet definitions` which define the useable components in a document that is based on that design. Here we have a first look how you can create a `snippet definition`.

## Available attributes

A Livingdocs `snippet definition` consists of HTML that has added attributes that define the possible content or behaviour of the snippet.

| Attribute  | Description           |
|:---------|:-----------|
| doc-editable | The content of this tag is editable text by the user. |
| doc-image    | The user can select and image that is set as a `src` attribute on `<img>` tags and as `background-image` style on other tags. |
| doc-optional    | Can be used together with `doc-editable` and prevents rendering of the tag to the published document if the editable content is empty.|
| doc-container | This tag can contain other snippets. |
| doc-html | The content of this tag is freeform HTML. This can be used to embed tweets or IFrames. |

## Basic snippet definition

This is a basic paragraph definition. It consists of a configuration part inside a `<script type="ld-conf">` tag and an HTML part. 

```html
<script type="ld-conf">
{
  "name": "Paragraph"
}
</script>

<!-- your html comes here -->
<p doc-editable="text">
  Placeholder text
</p>
```
In the **configuration** the name of the snippet is defined that is shown to the user in the User interface.

The **HTML** part defines a paragraph with a `doc-editable` attribute. The attribute has a value of 'text'. This means that the text assigned to the paragraph by the user will be accessible through the property 'text'. The content inside the paragraph will be used as the placeholder text and disappear as soon as the user starts typing.

## A more complex example

This is an example of a cover snippet with a background image and a title on top of that image.

```html
<script type="ld-conf">
{
  "name": "Cover"
}
</script>

<!-- your html comes here -->
<header class="page__header">
  <div class="page__header__content" doc-image="background-image">
    <div class="head-section head-section--deco">
      <h1 class="head-section__title" doc-editable="title">Title</h1>
    </div>
  </div>
</header>
```
This snippet definition has a `doc-image` attribute on a `<div>` tag. This will give the user the opportunity to upload an image that will the be used as the `background-image` of that `<div>` tag. Just like the `doc-editable`, the `doc-image` also has an attribute value that gives the background image property of this snippet a name so it can be accessed.

