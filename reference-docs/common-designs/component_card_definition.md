## Your own component cards

Component cards are in essence nothing else than standalone components. The definition of a card is in a livingdocs design project (see [here](./create_designs.md) for more details). You will define four properties for a card:
- the Livingdocs component (this is just a regular component)
- an HTML wrapper that is wrapped around *each* component card
- a (unique) name to identify the component card
- a `isDefault` flag that instructs the Livingdocs editor to use a certain component card for in-editor previews.

The following is an example configuration in a Livingdocs design:
```json
  "componentCards": [
    {
      "name": "default-card",
      "component": "teaser",
      "wrapper": "<div class='funky-wrapper'></div>",
      "isDefault": true
    }, {
      "name": "large-card",
      "component": "hero",
      "wrapper": "<div class='large-wrapper'></div>",
      "isDefault": false
    }
  ],
```

This defines two component card types: a default component card and a large component card. The linked `component` is just a regular Livingdocs component. The `teaser` component from the above code for example looks like this:
```json
<script type="ld-conf">
  {
    "label": "Teaser",
    "properties": ["position", "hide-image"],
  }
</script>

<div class="teaser">
  <a doc-link="link">
    <div class="teaser__image container image-container" doc-image="image">
      <div class="image--overlay"></div>
    </div>
    <div class="teaser__text">
      <div>
        <h3><span doc-editable="headline">Headline</span> <span class="source" doc-editable="site">Source</span></h3>
      </div>
      <h2 doc-editable="title">Title</h2>
    </div>
  </a>
</div>
```

### Rendering component cards

Component cards wrap a regular Livingdocs component that has the usual directives (see the [design description](./create_designs.md) for details). The content for these directives is filled through a document's metadata. A document's project contains a configuration that defines the mapping between the metadata entries and the directives of the component cards. An example mapping might look like this:
```json
  "mapping": {
    "default-teaser": {
      "title": {
        "dataField": "title",
        "type": "string"
      },
      "image": {
        "dataField": "teaserImage",
        "type": "image"
      },
      "site": {
        "dataField": "author",
        "type": "string"
      }
    }
  }
```
Each mapping entry defines:
- the key: a the directive on the component card,
- the value/dataField: a key in the publication's metadata hash from which to take the content for the directive above,
- the value/dataType: with which to treat the value at this specific key.

Note that as of now there is no type enforcement so misuse of types (e.g. filling an editable directive with an object) will result in erronous behavior.

It is important to note that a component card is itself never serialized or de-serialized nor will it ever hold its own state. The content of the component card is fully controlled by the values in the metadata hash of a publication.

### Storing the metadata mapping

The mapping that is used to assign values from the publication's metadata hash to the various component cards is stored in a project's configuration. There is an API endpoint that allows you to set or overwrite the mapping entry.

```
POST /projects/:id/set-component-card-metadata-mapping
```

where `:id` is the id of your project that you can always get with `ldm user:info`. As a parameter it takes a json with a mapping as shown above. You will also need to provide an authorization header (again, use `ldm user:info` to get this.). An example call could look like this:
```
curl --ipv4 -XPOST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJ..your-auth-header" \
-d '{
  "mapping": {
    "default-teaser": {
      "title": {
        "dataField": "title",
        "type": "string"
      },
      "image": {
        "dataField": "teaserImage",
        "type": "image"
      },
      "site": {
        "dataField": "author",
        "type": "string"
      }
    }
  }
}' http://localhost:9090/projects/1/set-component-card-metadata-mapping
```

### The rendered cards

The actual rendering of the component cards for a document happens whenever a document is published. The Livingdocs server will fetch the publication's metadata and the according mapping and render all defined component cards and  store an entry for each of them to the respective `ld_component_cards` index under the type `component_card` on elastic. An entry on elastic looks like this:
```json
{
    "_index": "ld_component_card",
    "_type": "component_card",
    "_id": "62",
    "_score": 1,
    "_source": {
       "document_id": 62,
       "metadadata": {
          "title": "Kampf dem Frost und Rost",
          "catchline": "Streusalz und Korrosion am Auto",
          "teaserImage": {
             "originalUrl": "http://nzz-img.s3.amazonaws.com/2015/2/13/253ac65c-e130-48b8-8a85-257007cb335b.jpeg",
             "url": "http://img.nzz.ch/C=W975,H547,X0,Y102/O=75/http://nzz-img.s3.amazonaws.com/2015/2/13/253ac65c-e130-48b8-8a85-257007cb335b.jpeg",
             "width": 17,
             "height": 17
          },
          "flag": "video",
          "author": "Herbie Schmidt",
          "publicationDate": "2015-02-13T12:33:00.000Z"
       },
       "formats": [
        {
            "format_name": "default-teaser",
            "html": "<div></div>"
        },
        {
            "format_name": "big-teaser",
            "html": "<div></div>"
        }
       ],
       "list_assignments": []
    }
 }
```
Each component card contains:
- the metadata
- for each format the name and rendered HTML
- the assignments of this card to lists

In addition to the publish event we can also force rendering of all component cards through a command line tool by typing:
```bash
grunt search-index:component-card
or
grunt search-index:component-card:reset
```
The `reset` flag will cause the tool to first delete any existing index, then apply the elastic mapping and then re-render all content of the index.
