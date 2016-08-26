https://github.com/upfrontIO/livingdocs-editor/issues/1084

## Motivation

Creating custom UI elements for each new metadata field is cumbersome and introduces unnecessary differences between clients. We need a UI library of re-usable elements (text fields, select boxes, etc.) for which customers can write  their own business logic where necessary.

Metadata fields should be fully configurable in a way that we can eventually put this in a user interface.

Customized business logic should be injectable in a customer project as a plugin.

## Defining a metadata field

This PR goes some way in leveraging the above. Lets explain this in an example. Say we want to create a new metadata field "catchline" for articles of your default web channel. The catchline should be a simple text input.

### Server

You will first need to configure this in your server.
1. Check if a suitable metadata data-type already exists. In our example `li-text` is suitable.
2. Open the respective configuration file, in our case `channels/web/article_config.coffee` and add an entry as follows:
```coffee
metadata: # might already exist
  catchline:
      plugin: 'li-text'
```
3. Open your elastic search metadata mapping (typically in `search/custom-mappings/metadata.json`) and add an entry as follows (the key `properties` probably already exists):
```json
{
  "properties": {
    "catchline": {
      "type": "string"
    }
  }
}
```
4. Reset your document elastic search index by running `grunt search-index:document:reset`

### Editor

After you've setup your new metadata field you can now use it in the editor. Open the respective configuration file, `all.coffee` if you want to have it in all environments, and add a configuration as follows:
```coffee
metadata:
    article: [
      name: 'catchline'
      form: 'li-text'
    ]
```

This will render a text-input field to the publish screen of articles where users can type in the value for the "catchline" which is automatically saved to the server.

## Screen types

As you can see in the example you nest your metadata screen configuration in an array under a key, in the example above `article`. This is the screen type for which you define a metadata screen. Currently, we support 2 screen types: `articles` and `pages`. In the long run we might take in different channels here too, but for now we don't have that requirement.

## Available UI elements

There are UI elements for:
- text input (example above)
- select boxes
- multiselect boxes
- image selection

The following subchapters discuss them and show the available options.

### Text Input

```coffee
name: 'nameOfYourMetadataTextField'
form: 'li-text'
config:
  halfWidth: true or false
```

You need to make sure that your server-side metadata field is of type `li-text` otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).

### Select Box

```coffee
name: 'nameOfYourMetadataSelectField'
form: 'li-select'
config:
  service: 'nameOfYourServicePlugin' # mandatory
  halfWidth: true or false
```

You need to make sure that your server-side metadata field is of type `li-enum` or a suitable format you defined yourself in a customized server, otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a select box allows you to customize the logic for the following methods:
```
getSelectables: ->
  # needs to return the selectable items in the format {name: 'name', value: 'value'}
  # you could for example do an ajax request here to get selectables from a server endpoint

initSelection: (identifier) ->
  # called when the select box is first rendered and needs to get an initial value
  # you will probably use `metadata.get` to get the required value

select: (identifier, selection) ->
  # executed when a user select an item.
  # the identifier is the name of your metadata field, the selection contains the name/value pair
  # you will probably call `metadata.set` in here
```

There is a sample implementation in `plugins/metadata_services/default_select_service.coffee` to help you get started.

### Multiselect Box

```coffee
name: 'nameOfYourMetadataMultiselectField'
form: 'li-multiselect'
config:
  service: 'nameOfYourServicePlugin' # mandatory
  halfWidth: true or false
```

You need to make sure that your server-side metadata field is of a suitable format you defined yourself in a customized server (there is no core data type for multiselects), otherwise you will get errors.
The `halfWidth` option will render the text input field over half of the screen width if set to true (otherwise over the full width).
The `service` option lets you customize the business logic of a metadata form field. Check the section "registering a metadata service" later on how to register a service.
The service plugin for a multiselect box allows you to customize the logic for the following methods:
```
getSelectables: ->
  # needs to return the selectable items in the format {name: 'name', value: 'value'}
  # you could for example do an ajax request here to get selectables from a server endpoint

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
form: 'li-image'
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

## Registering a metadata service

The `li-select` and `li-multiselect` forms require you to provide a service that implements the business logic behind those fields. In order to register a service you will need to add it to `core/bootstrap/index.coffee`. To add a fictional metadata service `foobar` you would add the following line:
```
editor.metadataServices.register('foobar', require('path/to/foobar))
```

The file `foobar.coffee` defines the metadata service. It should always have the following head section:
```
module.exports = (metadata) ->
```

This makes sure that the service has a `metadata` instance at its disposal. The intended API of `metadata` is:
- `metadata.set(identifier, value)`, this will automatically trigger an autosave
- `metadata.get(identifier)`

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

