# Metadata on the Editor

## Scope

This documentation assumes that you already setup the metadata field(s) on the server side.

To find out more about metadata on the server you can read the [server documentation](../livingdocs-server/metadata.md) or study [examples](../../public/guides/metadata-examples.md).

## Introduction

In order to make metadata editable to the journalists you need to configure the editor.

The editor offers a UI library of re-usable elements (text fields, select boxes, etc.) for which customers can write their own business logic where necessary. You can also write your own custom UI elements by just requiring them in your project.

## Screen types

As you can see in the [examples](../../public/guides/metadata-examples.md) you nest your metadata screen configuration in an array under a key. The example defined the key `article`. This is the screen type for which you define a metadata screen. Currently, we support 2 screen types: `articles` and `pages`. In the long run we might take in different channels here too, but for now we don't have that requirement.

## Available UI elements

There are UI elements for:
- text input (example above)
- checkbox
- datetime (date and time)
- slugs (URL escaped titles)
- select boxes
- multiselect boxes
- image selection
- section headers (not a form, only a title)

The following subchapters discuss them and show the available options.

### Text Input

```coffee
name: 'nameOfYourMetadataTextField'
form: 'li-meta-text-form'
config:
  halfWidth: true or false # optional, false by default
  service: 'nameOfYourServicePlugin' # mandatory
  label: 'foo' # optional, takes camelized name otherwise
  placeholder: 'bar' # optional, takes camelized name otherwise
```

You need to make sure that your server-side metadata field is of type `li-text` otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a text input allows you to customize the logic for the following methods:
```
init: (identifier) ->
  # init the value of the text input

set: (identifier, text) ->
  # set the value
```

There is a sample implementation in `plugins/metadata_services/default_text_service.coffee` to help you get started.

### Select Box

```coffee
name: 'nameOfYourMetadataSelectField'
form: 'li-meta-select-form'
config:
  service: 'nameOfYourServicePlugin' # mandatory
  halfWidth: true or false # optional, false by default
  label: 'foo' # optional, takes camelized name otherwise
  placeholder: 'bar' # optional, takes camelized name otherwise
```

You need to make sure that your server-side metadata field is of type `li-enum` or a suitable format you defined yourself in a customized server, otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a select box allows you to customize the logic for the following methods:
```
getSelectables: (cb) ->
  # asynchronous
  # needs to call cb with cb(null, selectables) or cb(error)
  # the selectables need to be in the format {name: 'name', value: 'value'}

initSelection: (identifier) ->
  # called when the select box is first rendered and needs to get an initial value
  # you will probably use `metadata.get` to get the required value

select: (identifier, selection) ->
  # executed when a user select an item.
  # the identifier is the name of your metadata field, the selection contains the name/value pair
  # you will probably call `metadata.set` in here

hasCustomItem: ->
  # true if you want to define your own directive for the display of results in the select box
  # false otherwise

getCustomItem: ->
  # the name of a directive that you want to use to render the items (lines) in the select box when
  # it is opened. This is handy for example if you want to render them in a hierarchical view.
  # make sure that you require the directive in your service so it is loaded.
```

There is a sample implementation in `plugins/metadata_services/default_select_service.coffee` to help you get started.

### Multiselect Box

```coffee
name: 'nameOfYourMetadataMultiselectField'
form: 'li-meta-multiselect-form'
config:
  service: 'nameOfYourServicePlugin' # mandatory
  halfWidth: true or false # optional, false by default
  label: 'foo' # optional, takes camelized name otherwise
  placeholder: 'bar' # optional, takes camelized name otherwise
```

You need to make sure that your server-side metadata field is of a suitable format you defined yourself in a customized server (there is no core data type for multiselects), otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a multiselect box allows you to customize the logic for the following methods:
```
getSelectables: ->
  # asynchronous
  # needs to call cb with cb(null, selectables) or cb(error)
  # the selectables need to be in the format {name: 'name', value: 'value'}

initSelection: (identifier) ->
  # called when the select box is first rendered and needs to get an initial value
  # you will probably use `metadata.get` to get the required value

select: (identifier, selection) ->
  # executed when a user adds a selection to the multiselection.
  # the identifier is the name of your metadata field, the selection contains the name/value pair
  # you will probably call `metadata.set` in here

unselect: (identifier) ->
  # executed when a user removes a selection of the multiselect.
  # the identifier is the name of your metadata field
  # you will probably call `metadata.set` in here
```

There is a sample implementation in `plugins/metadata_services/default_multiselect_service.coffee` to help you get started.


### Image Selection

```coffee
name: 'nameOfYourMetadataImageField'
form: 'li-meta-image-form'
```

The image selection was taken over as is from the existing implementation and does not adhere to the general plugin architecture. We should fix this at some point in the future.

For now the content is defined through the method `metadata.getEditableImages`. Basically this takes the values defined in the design configuration for the images. So for example if you have the following design configuration excerpt:
```json
"metadata": [
  {
      "identifier": "teaserImage",
      "type": "image",
      "matches": ["image.image"],
      "isEditable": true,
      "imageRatios": ["4:3", "16:9"]
  }
]
```
This would fill the metadata screen with a section for the field "teaserImage" giving 2 selections, a "4:3" image and a "16:9" image. The data format for the image value is hardcoded at the moment and can not be customized. An example of a metadata image format can be found here: https://gist.github.com/gabrielhase/9d7b0ff518585da844c257591a810ecc

The current implementation is especially dangerous since the `metadata` section in a design config is not really metadata at all, its only a field extractor for metadata.

Also, the markup in the image form does not adhere to the plugin standard, so don't look here when doing your own plugin.

### Checkbox

```coffee
name: 'nameOfYourMetadataImageField'
form: 'li-meta-checkbox-form'
config:
  halfWidth: true or false # optional, false by default
  label: 'foo' # optional, takes camelized name otherwise
```

You need to make sure that your server-side metadata field is of type `li-boolean` or a suitable custom format, otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).

### Datetime

```coffee
name: 'nameOfYourMetadataImageField'
form: 'li-meta-datetime-form'
config:
  service: 'nameOfYourServicePlugin' # mandatory
  halfWidth: true or false # optional, false by default
  label: 'foo' # optional, takes camelized name otherwise
```

You need to make sure that your server-side metadata field is of type `li-datetime` or a suitable custom format, otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a datetime allows you to customize the logic for the following methods:
```
setDate: (identifier, value) ->
  # set the date, possibly applying formatting options

getDate: (identifier) ->
  # get the date, possibly applying formatting options

isValidDate: (date) ->
  # this lets you define what dates a user can select in the UI. Handy if you want for example
  # to disallow past dates.
```

There is a sample implementation in `plugins/metadata_services/default_date_service.coffee` to help you get started.

### Slug

```coffee
name: 'nameOfYourMetadataImageField'
form: 'li-meta-slug-form'
config:
  service: 'nameOfYourServicePlugin' # mandatory
  halfWidth: true or false # optional, false by default
  label: 'foo' # optional, takes camelized name otherwise
  placeholder: 'bar' # optional, takes camelized name otherwise
  canReset: true or false # optional, false by default
```

You need to make sure that your server-side metadata field is of type `li-text` or a suitable custom format, otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).
The `canReset` option if set to true renders a reset button next to the slug input that resets the input to its initial value.
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a slug allows you to customize the logic for the following methods:
```
  initSlug: (identifier) ->
    # define the logic for the initial value of a slug
    # For example: existing value or normalized metadata title

  setSlug: (identifier, slug) ->
    # gives you the unnormalized slug input (user input) and lets you define your custom
    # normalization logic (depending on what you want to allow in a URL)

  resetSlug: (identifier) ->
    # only important if `canReset` is set to true
    # defines to what value the field will be reset
```

There is a sample implementation in `plugins/metadata_services/default_slug_service.coffee` to help you get started.

### Section Headers

Since the whole publish panel form is generated you might want to set your own section headers (titles) in some instances. To do so, just place a markup as the following at the respective place in your config:
```coffee
articles: [
  name: 'someFieldBeforeTitle'
  form: 'li-meta-text-form'
,
  type: 'sectionHeader'
  header: 'MyAwesomeTitle'
,
  name: 'someFieldUnderTheHeader'
  form: 'li-meta-text-form'
]
```

This would render the title `MyAwesomeTitle` in between the 2 text fields.
Section headers are always clear-fixed and go over the full width.

## Registering a metadata service

Some of the forms require you to provide a service that implements the business logic behind those fields. In order to register a service you will need to add it to `core/bootstrap/index.coffee`. To add a fictional metadata service `foobar` you would add the following line:
```
editor.metadataServices.register('foobar', require('path/to/foobar))
```

The file `foobar.coffee` defines the metadata service *and gives you a metadata instance as well as the angular injector*. It should always have the following format:
```
module.exports = ({metadata, $injector}) ->
  # your implementation goes here
]
```

In the future we want to write our own injector for this to control more tightly what can be injected and what is private in the core.

## Creating a new metadata form element (core)

Currently, new UI elements can only be created in the core. As a core developer you might need to create one though at some point. Here are some things to look out for.

All UI elements should be implemented as Angular components and get at least the 2 bindings `name` and `type`. `name` is the name of the metadata field and `type` the type of screen for which it is instantiated, i.e. `article` or `page`.

A new UI element has to be required in `ld_metadata_view.coffee`.

The template should have a surrounding `li` element of this form:
```
<li class="ld-grid__item breathe-quarter--bottom"
    ng-class="{ 'one-half': selectForm.halfWidth == true }">
</li>
```
The `ng-class` is optional, only use it when you want to expose the `halfWidth` option on your UI element.
