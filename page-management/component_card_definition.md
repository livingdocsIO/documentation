## Your own component cards

Component cards are in essence nothing else than standalone components. The definition of a card is in a livingdocs design project (see [here](../design/create_designs.md) for more details). You will define four properties for a card:
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

Component cards wrap a regular Livingdocs component that has the usual directives (see the [design description](../design/create_designs.md) for details). The content for these directives is filled through a document's metadata. A document's project contains a configuration that defines the mapping between the metadata entries and the directives of the component cards. An example mapping might look like this:
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
    "_index": "local_teaser",
    "_type": "component_card",
    "_id": "62-teaser-gallery",
    "_score": 1,
    "_source": {
       "document_id": 62,
       "publication_date": "2015-08-12T06:49:30.785Z",
       "component_card_name": "teaser-gallery",
       "html": "<article class=\"teaser teaser--gallery doc-component\" data-doc-template=\"morpheus.teaser-gallery\"><a class=\"teaser__link\" href=\"#\"><figure class=\"figure figure--gallery\"><div class=\"figure__placeholder figure__placeholder--16to9\"><img class=\"figure__image lazyautosizes lazyloaded\" data-doc-image=\"image\"></div></figure><h2 class=\"title title--gallery\"><div class=\"title__catchline doc-editable doc-no-placeholder\" data-doc-editable=\"catchline\" data-doc-placeholder=\"Spitzmarke\">Streusalz und Korrosion am Auto</div><div class=\"title__name doc-editable doc-no-placeholder\" data-doc-editable=\"title\" data-doc-placeholder=\"Titel\">Kampf dem Frost und Rost</div></h2></a><div class=\"teaser__text\"><ul class=\"metainfo\"><li class=\"metainfo__item\"><span class=\"metainfo__item-flag doc-editable doc-no-placeholder\" data-doc-editable=\"flag\" data-doc-placeholder=\"Flag\">video</span></li><li class=\"metainfo__item\"><span class=\"metainfo__item-author doc-editable doc-no-placeholder\" data-doc-editable=\"author\" data-doc-placeholder=\"Autor\">Herbie Schmidt</span></li><li class=\"metainfo__item\"><time class=\"metainfo__item-date doc-editable doc-no-placeholder\" datetime=\"2015-08-12T22:00:00.000Z\" data-doc-editable=\"publicationDate\" data-doc-placeholder=\"Publikationsdatum\">13.02.2015 13:33</time></li></ul></div></article>",
       "data": {
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
       }
    }
 }
```
Each component card is stored as rendered HTML as well as a JSON object with the data that was used for rendering. It is important to note that there is an entry for each defined component card. So the document with id `62` might have several entries for different component cards (denoted in the composed id `62-teaser-gallery`).

In addition to the publish event we can also force rendering of all component cards through a command line tool by typing:
```bash
grunt search-index:component-card
or
grunt search-index:component-card:reset
```
The `reset` flag will cause the tool to first delete any existing index, then apply the elastic mapping and then re-render all content of the index.
