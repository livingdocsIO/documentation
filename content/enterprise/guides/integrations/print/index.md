---
title: Livingdocs Print Preview Setup
linkTitle: Setup a print system
tags: [guides, integrations]
menus:
  guides:
    parent: Integrations
---

## Motivation

Livingdocs is often used as an editor for both online and print publications in a so-called content-first (or even online-first) workflow. A simple workflow just exports the Livingdocs article to a print system whenever a publish is performed. We have an open-source example for a serverless app that builds upon a Livingdocs webhook and exports to WoodWing Studio: [https://github.com/livingdocsIO/livingdocs-to-woodwing-exporter](https://github.com/livingdocsIO/livingdocs-to-woodwing-exporter)

Sometimes, a simple export is not enough for the editors. For this use case we have built-in support for:
- choosing a layout (e.g. InDesign template) from the print system
- previewing that layout in the preview window next to a Livingdocs article (actual print system rendering)

With this system, editors can see how their article will be displayed in print (linebreaks, overflow, etc.) while they are writing in Livingdocs. An example of this workflow is shown in this video: [https://vimeo.com/456695030](https://vimeo.com/456695030)

## Print system support

Out of the box, we support [WoodWing Studio](https://www.woodwing.com/en/multichannel-publishing) using a connector developed by the companies [BrixWare](http://www.brixware.com) and [a&f](https://www.a-f.ch) as well as [NewsNT](https://www.michelic-partner.com/projectnewsnt.html) using a connector developed by the company [Sternwald](https://www.sternwald.com/).

Other print systems can potentially be setup but require custom development.

## Setup

The presented setup assumes a workflow with different content-types for online and print. Editors can then choose on "Write new article" if they want to start with an online or a print article. If they start with the online article they have the option to make a print copy out of the online article and continue refining this for print. To get an impression of the workflow you can watch this video (although the video starts with print and copies to online): [https://vimeo.com/455953898](https://vimeo.com/455953898)

### Setup a print content-type

In order to follow this example we advise you to use our [Service](https://edit.livingdocs.io) with the pre-configured Sandbox. The example can of course be applied to any Livingdocs project with a configurable project config.
First of all, use the [CLI]({{< ref "/enterprise/livingdocs-cli/sync-configs.md" >}}) to download the project config of your service project to your local computer and open it with a code editor of your choice.
In our service Sandbox we already have a content-type for an online article. It has the handle `regular`. So the first thing we need to do is to add a content-type for the print article. It will look as follows:
```js
module.exports = {
    handle: 'woodwing',
    documentType: 'article',
    info: {
      label: 'Print Article'
    },
    components: [{
      name: 'paragraph'
    }, {
      name: 'toptitle'
    }, {
      name: 'catchline'
    }, {
      name: 'headline'
    }, {
      name: 'print-subtitle'
    }, {
      name: 'lead'
    }, {
      name: 'byline'
    }],
    editorWrapper: '<article class="nzz-standard doc-section" itemscope itemtype="http://schema.org/NewsArticle"></article>',
    defaultContent: [{
        identifier: 'catchline'
    }, {
        identifier: 'headline'
    }, {
        identifier: 'lead'
    }, {
        identifier: 'byline'
    }, {
        identifier: 'paragraph'
    }],
    metadata: [{
      handle: 'title',
      type: 'li-text',
      config: {
        maxLength: 200,
        useAsTitle: true
      },
      ui: {
        component: 'liMetaTextForm'
      }
    }],
    print: {
      enabled: true,
      enableStepZooming: true,
      componentMap: {
        // Woodwing: Obertitel
        'toptitle': {
          title: 'toptitle'
        },
        // Woodwing: Spitzmarke
        'catchline': {
          title: 'catchline'
        },
        // Woodwing: Titel
        'headline': {
          title: 'title'
        },
        // Woodwing: Kursivtitel
        'print-subtitle': {
          title: 'subtitle'
        },
        // Woodwing: Autor
        'print-byline': {
          text: 'author'
        },
        // Woodwing: Lead
        'print-lead': {
          text: 'lead'
        },
        // Woodwing: Grundtext
        'paragraph': {
          text: 'text'
        }
    }
  }
}
```

A few things to note here:
- we set the option `print.enabled` to true. This activates the print features (layout selection, print preview) for this content-type.
- the handle in this case is `woodwing`. You are free to name it whatever you want, but our service uses a pre-configuration with a test installation of the WoodWing Studio connector (DO NOT USE THIS PRODUCTIVELY!).
- we have a `components` section and a `componentMap` section. Each component needs a respective entry in the component map in order to be exported to the print system. We only showed a subset of the supported components here, for a productive setup you want to discuss this with your print system provider.
- we set the `print.enableStepZooming` option to true. In that configuration editors can zoom the print preview with a mousewheel similar to the image crop interface in the Livingdocs editor. If it is set to `false` the print preview will be static and can be toggled between sidescreen and fullscreen.

We leave out the steps to create the references components as well as grouping them in the `designSettings` and requiring them in the project config's index file. Those steps are equivalent to what you do for online articles, see [here]({{< ref "../../design/create-designs/index.md" >}}).

Once you require the new content-type in our project configs index file and publish the config you will be able to create print articles from the "Write new article" button.

### Setup an online to print copy config

In order to copy a print article from an existing online article, we will use the copy feature of Livingdocs.

In the `settings` section of your project config add a config as follows:
```js
copy: [{
  source: {
    contentType: 'regular'
  },
  targets: [{
    contentType: 'woodwing',
    metadata: {
      map: ['title']
    },
    instructions: {
      componentConversions: [{
        match: 'article-container',
        exclude: true
      }, {
        match: 'head',
        result: [{
          component: 'catchline',
          directives: {
            title: {takeFrom: 'flag'}
          }
        }, {
          component: 'headline',
          directives: {
            title: {takeFrom: 'title'}
          }
        }, {
          component: 'lead',
          directives: {
            text: {takeFrom: 'text'}
          }
        }, {
          component: 'byline',
          directives: {
            text: {takeFrom: 'author'}
          }
        }]
      }, {
        match: 'subtitle',
        result: [{
          component: 'print-subtitle',
          directives: {
            title: {takeFrom: 'title'}
          }
        }]
      }, {
        match: 'paragraph',
        copy: true
      }]
    }
  }]
}]
```

A few things to note:
- we copy from the content-type `regular` to the content-type `woodwing`, this is our online to print copy configuration
- again we only apply the conversion to a subset of the available components for demo purposes. For more details on the available conversion rules see [here]({{< ref "/enterprise/guides/workflows/document-copy/index.md" >}})

As before, use the [CLI]({{< ref "/enterprise/livingdocs-cli/sync-configs.md" >}}) to publish the changes to your project config.

You will now have a "Copy" button in the topbar of an online article. When pressing it, you have the option to copy it to a print article. If you do so, a new print article (with the preview and layout selection) is created for you and the component of the online article are mapped to the print article according to the configured rules.

## Implementation Details

This section is not about the setup but contains background information for print system integrators that want to implement the Livingdocs Print API.

### Headless API

Livingdocs itself knows nothing about a print layouting system. All it does is rendering information it gets back. In order to do this, Livingdocs sends out requests to a number of defined endpoints and expects results in a certain format. Currently, the data format is in XML which was basically driven by need. If you'd rather have JSON, please get in contact with us, we'd love to do this.

Most likely you will implement a middleware in between Livingdocs and your print system that takes the requests from Livingdocs and transforms them to requests of your print system, delivering back the relevant information.

To sum up:
- Livingdocs sends the requests. Your integration needs to respond to those. You never need to send a request to Livingdocs on your own initiative.
- The data format is (currently) XML
- You need to provide Livingdocs with the relevant print information otherwise Livingdocs can not perform a reliable job informing about the layouting system

### The endpoints

All Livingdocs requests require you to have configured endpoints on your side where your middleware sits. The respective entry in the Livingdocs server configuration looks as follows:

```
print: {
  enabled: true
  host: 'https://your-host.com'
  xmlRoot: 'pathUnderWhichTheEndpointsLive'
}
```

Note: this config still sits under the `hugo` key in the server configuration. This is due to legacy support, the print interface is not necessarily connected to hugo.

In the example above we would send each of the following requests to `https://your-host.com/pathUnderWhichTheEndpointsLive/<theSpecificRequest>`

The subsequent subchapters look at each of the possible requests.

#### Layouts

Before a print document is created and whenever a user wants to change the layout of an existing print article, Livingdocs will ask you for the list of available layouts. Layouts assume a layout-for-text workflow. Thus they are the placed and sized boxes in your InDesign file for a specific publication of your newspaper. Journalists are expected to fit their text into those layouts.
Livingdocs sends the following request to get the layouts.

To:
```http
POST /support
```

Payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
    <authentication type="USER_PASSWORD">
        <attribute name="user" value="yourUsername"/>
        <attribute name="password" value="yourPassword"/>
    </authentication>
    <getLayouts>
        <attribute name="publication" value="yourPublication"/>
        <attribute name="publicationDate" value="02.09.2016"/>
    </getLayouts>
</articleUpload>
```

As you can see there are basically 2 parts: an authentication and the layout request.
The authentication sends you a username and a password that you can use to authenticate Livingdocs with your middleware. You can currently only configure one user for all requests.
The layout part queries for the requested publication and the date of this publication (e.g. tomorrow's newspaper). The date will be in the format "dd.mm.YYYY", e.g. "02.09.2016".

Your response should look as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
   <getLayouts>
      <layouts>
         <layout columns="2.0" department="al" group="AUFG" id="OW2X7" name="Artikel unt. Bild S2" page="2" publication="test" publicationDate="02.09.16" status="aut"/>
         <layout columns="1.0" department="al" group="KURZ" id="OW2X9" name="In Kürze 2" page="2" publication="test" publicationDate="02.09.16" status="aut"/>
         <layout columns="1.0" department="oe" group="KOMM" id="OW2XD" name="KOMM Briefseite" page="9" publication="test" publicationDate="02.09.16" status="red"/>
      </layouts>
   </getLayouts>
</articleUpload>
```

Each line represents one layout, i.e., one placed and sized box in the InDesign file. The information you need to provide are:
- `department`, the organisational department of the newspaper, e.g. 'International'
- `group`, namespacing in your layout
- `id`, a unique id with which you can access the layout, Livingdocs will store this and send it to the middleware in subsequent requests
- `columns`, the number of columns that this layout has
- `name`, the name of this layout, will be displayed in the Livingdocs layout search (see screenshot below)
- `page`, the page of your newspaper where this layout is placed
- `status`, one of the supported [statuses](#available-statuses)
- `publication`, the publication to which this layout belongs
- `publicationDate`, the date of the publication for which the layout was requested

{{< img src="print-layout.png" alt="Choose a print layout in Livingdocs" >}}

*The screenshot above shows how to choose a print layout in the Livingdocs user interface*

#### Templates

Templates are basically the same as layouts, except that they are for text-for-layout workflows. Templates are pre-defined boxes that are not yet placed on any publication or edition but are common blueprints, e.g. a one-column text. Livingdocs sends the following request to get the templates.

To:
```http
POST /support
```

Payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
    <authentication type="USER_PASSWORD">
        <attribute name="user" value="yourUsername"/>
        <attribute name="password" value="yourPassword"/>
    </authentication>
    <getTemplates>
        <attribute name="publication" value="yourPublication"/>
        <attribute name="allowedOnCms" value="true"/>
    </getTemplates>
</articleUpload>
```

Again, we are using an authentication block. The second block defines the publication name for which you want to get the templates. Note that you don't get a specific publication date since templates are independent of any specific edition. The `allowedOnCms` parameter will always be `true` for calls from Livingdocs.

Your response should look as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
   <getTemplates>
      <templates>
         <template columns="4.0" department="fp" group="LEIT" id="MV6PU" name="2Leitartikel SA" publication="msne"/>
         <template columns="5.0" department="mf" group="" id="O6RV1" name="Anleser Text" publication="mfne"/>
         <template columns="1.0" department="oe" group="KOMM" id="MTFS8" name="Archiv Trouvaillen" publication="msne"/>
      </templates>
   </getTemplates>
</articleUpload>
```

Each line represents one template, i.e., one generic box that can be used in InDesign. The information you need to provide are:
- `department`, the organisational department of the newspaper, e.g. 'International'
- `columns`, the number of columns that this template has
- `group`, namespacing in your template
- `id`, a unique id with which you can access the template, LD will send you this later on
- `name`, the name of this template, will be displayed in the LD Layout search
- `publication`, the publication to which this template belongs

{{< img src="print-template.png" alt="Choose a print template in Livingdocs" >}}

*The screenshot above shows how to choose a print template in the Livingdocs user interface*

#### Publication Dates

Publication Dates are used for the layouts. They return the dates for which, in a certain publication, layouts already exist, i.e. an InDesign file was prepared for the edition. Livingdocs sends the following request to get the available publication dates (editions):

To:
```http
POST /support
```

Payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
    <authentication type="USER_PASSWORD">
        <attribute name="user" value="yourUsername"/>
        <attribute name="password" value="yourPassword"/>
    </authentication>
    <getPublicationDates>
        <attribute name="from" value="03.09.2016"/>
        <attribute name="publication" value="yourPublication"/>
        <attribute name="to" value="23.09.2016"/>
    </getPublicationDates>
</articleUpload>
```

The authentication block is equivalent to the other requests. The second block defines for which publication you want to get the prepared edition dates and in which time frame (in the example between the 3rd and 23rd of September).

Your response should look as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
   <getPublicationDates>
      <publicationDates>
         <publicationDate date="03.09.2016" isToday="true" publication="test"/>
         <publicationDate date="05.09.2016" isToday="false" publication="test"/>
         <publicationDate date="21.09.2016" isToday="false" publication="test"/>
      </publicationDates>
   </getPublicationDates>
</articleUpload>
```

Each line represents one prepared edition's date. The information you need to provide are:
- `date`, the date for which this edition is prepared
- `publication`, the publication to which the prepared edition belongs
- `isToday`, a boolean indicating the current edition, NOTE: the current edition is normally tomorrow's newspaper

#### Preview

This is really the gist of the Livingdocs Print API. In the preview response your middleware tells Livingdocs how a specific block of text is rendered in your print system's layout so that Livingdocs can give the journalists the respective information in the editor.
Livingdocs will call your middleware with the following request.

To:
```http
/getPreview
```

Payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
    <authentication type="USER_PASSWORD">
        <attribute name="user" value="yourUsername"/>
        <attribute name="password" value="yourPassword"/>
    </authentication>
    <getPreview>
        <attribute name="type" value="articleJpeg"/>
        <attribute name="layoutId" value="OW4X0"/>
        <article>
            <content type="subtitle">Heiligsprechung von Mutter Teresa</content>
            <content type="title">Die Makellosigkeit der Heiligen</content>
            <content type="author">Gabriel Hase</content>
            <content type="lead">Mutter Teresa hat für ihren Dienst an den Ärmsten viel Respekt erhalten. Die Überhöhung ihrer Person ruft aber bis heute Widerspruch hervor.</content>
            <content type="text">Auf der Eingangstreppe zum Hospiz liegt eine zitternde Gestalt. Der abgemagerte Mann antwortet nicht, wenn das Wort an ihn gerichtet wird, sondern zieht nur die raue Wolldecke noch etwas höher über den Kopf. Unbeeindruckt vom Elend steht direkt daneben eine Hochzeitsgesellschaft. Die reich mit Gold geschmückte Braut wartet mit Freundinnen auf die Ankunft ihres Zukünftigen, der bald vom nahen Tempel der Göttin Kali zurückkehren wird. Drinnen im Hospiz, hinter der schweren Holztüre, liegen Kranke und Sterbende auf einfachen Feldbetten. Nonnen im grauen Gewand und einige westlich gekleidete Freiwillige kümmern sich um die vielleicht 50 ärmlichen Gestalten. Es herrscht eine nüchterne Atmosphäre, die Einrichtung ist spartanisch einfach. Falls Jahrzehnte einen Geruch haben, dann riecht es nach den fünfziger Jahren.</content>
        </article>
    </getPreview>
</articleUpload>
```

The authentication block is equivalent to the other requests. The `getPreview` block first defines the layout or template id for which a preview is requested (NOTE: you previously sent this to Livingdocs in the template or layout response, see above) and the type of preview that is requested. The type can be:
- `articleJpeg`, gets the preview in text and image form (both)
- `articleText`, gets only the textual preview
- `pageJpeg`, gets the preview for the whole page (Seite) in which this template is placed, both textual and image
- `pageText`, gets the preview for the whole page (Seite) in which this template is placed, only textual

Inside the `getPreview` block, Livingdocs sends you an `article` block. This block defines parts of the article content. Each `content` element has a `type` attribute and in its content, the actual text that the journalist wrote. The types can be configured/extended with your print design (a Livingdocs design specific for print). We provide a standard print design out of the box with the following types:
- headline
- catchline
- subtitle
- lead
- byline
- paragraph
- subhead
- footnote

Your middleware is now responsible to use the provided data, feed it to your print layouting system and calculate:
- the correct linebreaks
- the over-and underflow
- check if the provided content types are correct for the chosen layout (or template)

Your response to Livingdocs should look as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
   <getPreview>
      <article>
         <content>
            <row column="0" debug="Haupttitel" id="1" justifying="left" number="4" type="title">Die Makellosigkeit der Heiligen</row>
         </content>
         <content>
            <row column="1" debug="Grundtext" id="1" justifying="justify" number="12" type="text">Auf der Eingangstreppe zum Hospiz </row>
            <row column="1" debug="Grundtext" id="2" justifying="justify" number="13" type="text">liegt eine zitternde Gestalt. Der abge-</row>
            <row column="1" debug="Grundtext" id="3" justifying="justify" number="14" type="text">magerte Mann antwortet nicht, wenn </row>
            <row column="1" debug="Grundtext" id="4" justifying="justify" number="15" type="text">das Wort an ihn gerichtet wird, sondern </row>
            <row column="1" debug="Grundtext" id="5" justifying="justify" number="16" type="text">zieht nur die raue Wolldecke noch etwas </row>
            <row column="1" debug="Grundtext" id="6" justifying="justify" number="17" type="text">höher über den Kopf. Unbeeindruckt </row>
            <row column="1" debug="Grundtext" id="7" justifying="justify" number="18" type="text">vom Elend steht direkt daneben eine </row>
            <row column="1" debug="Grundtext" id="8" justifying="justify" number="19" type="text">Hochzeitsgesellschaft. Die reich mit </row>
            <row column="1" debug="Grundtext" id="9" justifying="justify" number="20" type="text">Gold geschmückte Braut wartet mit </row>
            <row column="1" debug="Grundtext" id="10" justifying="justify" number="21" type="text">Freundinnen auf die Ankunft ihres Zu-</row>
            <row column="1" debug="Grundtext" id="11" justifying="justify" number="22" type="text">künftigen, der bald vom nahen Tempel </row>
            <row column="1" debug="Grundtext" id="12" justifying="justify" number="23" type="text">der Göttin Kali zurückkehren wird. </row>
            <row column="1" debug="Grundtext" id="13" justifying="justify" number="24" type="text">Drinnen im Hospiz, hinter der schweren </row>
            <row column="1" debug="Grundtext" id="14" justifying="justify" number="25" type="text">Holztüre, liegen Kranke und Sterbende </row>
            <row column="1" debug="Grundtext" id="15" justifying="justify" number="26" type="text">auf einfachen Feldbetten. Nonnen im </row>
            <row column="1" debug="Grundtext" id="16" justifying="justify" number="27" type="text">grauen Gewand und einige westlich ge-</row>
            <row column="1" debug="Grundtext" id="17" justifying="justify" number="28" type="text">kleidete Freiwillige kümmern sich um </row>
            <row column="1" debug="Grundtext" id="18" justifying="justify" number="29" type="text">die vielleicht 50 ärmlichen Gestalten. Es </row>
            <row column="1" debug="Grundtext" id="19" justifying="justify" number="30" type="text">herrscht eine nüchterne Atmosphäre, </row>
            <row column="1" debug="Grundtext" id="20" justifying="justify" number="31" type="text">die Einrichtung ist spartanisch einfach. </row>
            <row column="2" debug="Grundtext" id="21" justifying="justify" number="35" type="text">Falls Jahrzehnte einen Geruch haben, </row>
            <row column="2" debug="Grundtext" id="22" justifying="justify" number="36" type="text">dann riecht es nach den fünfziger Jah-</row>
            <row column="2" debug="Grundtext" id="23" justifying="left" number="37" type="text">ren.</row>
         </content>
         <content>
            <row column="2" debug="Grundtext" id="1" justifying="left" number="40" type="text"/>
         </content>
         <content>
            <row column="2" debug="Grundtext" id="1" justifying="justify" number="42" type="text">IM CMS ZUSATZTEXT FÜR Un-</row>
            <row column="2" debug="Grundtext" id="2" justifying="justify" number="43" type="text">tertitel: Heiligsprechung von Mutter </row>
            <row column="2" debug="Grundtext" id="3" justifying="left" number="44" type="text">Teresa</row>
         </content>
         <content>
            <row column="2" debug="Grundtext" id="1" justifying="justify" number="46" type="text">IM CMS ZUSATZTEXT FÜR Au-</row>
            <row column="2" debug="Grundtext" id="2" justifying="left" number="47" type="text">tor: Gabriel Hase</row>
         </content>
         <content>
            <row column="2" debug="Grundtext" id="1" justifying="justify" number="49" type="text">IM CMS ZUSATZTEXT FÜR </row>
            <row column="2" debug="Grundtext" id="2" justifying="justify" number="50" type="text">Lead: Mutter Teresa hat für ihren Dienst </row>
            <row column="2" debug="Grundtext" id="3" justifying="justify" number="51" type="text">an den Ärmsten viel Respekt erhalten. </row>
            <row column="2" debug="Grundtext" id="4" justifying="justify" number="52" type="text">Die Überhöhung ihrer Person ruft aber </row>
            <row column="2" debug="Grundtext" id="5" justifying="left" number="53" type="text">bis heute Widerspruch hervor.</row>
         </content>
         <previews>
            <preview type="article">https://hugo-test.nzz.ch/hugo_test/hugo_files/printschnittstelle/6666_20160902_101503_000_016.jpg</preview>
         </previews>
      </article>
   </getPreview>
</articleUpload>
```

The response consists of different `content` blocks that contain `rows`. The `content` blocks define logical components of your layout or templates in InDesign, such as the title or the body text. The `rows` define the textual content represented in rows. Each row defines:
- `id`, identifies the rows within a content block, normally just a counter
- `debug`, the name of the component in your InDesign layout
- `justifying`, the justification information, can be `left` or `justify`
- `number`, the row number in the overall layout or template (Zeilennummer), displayed on the left of the Livingdocs preview
- `type`, 'title' or 'text'
- `column`, the column in which the row is rendered

If the content contained information that is not present in the layout or template you can notify Livingdocs of this. For example, if Livingdocs sent you an author content element, but the respective layout in InDesign has no match for author, then you can send back a row containing text that matches the following regex:
```js
/IM CMS ZUSATZTEXT FÜR (\w+): (.*)/
```
If Livingdocs sees this regex in a row it will render a respective message in the print preview. All of those messages should come at the end of the content block.

{{< img src="print-preview-inexisting-component.png" alt="Print Preview for a component that is not in the layout" >}}

*The preview indicating that the component "Untertitel" is not present in this layout*

In addition, if a jpeg preview was requested, you need to send a `previews` block that passes the URL to an image with the jpeg preview.

{{< img src="print-preview.png" alt="The Livingdocs print preview" >}}

*The screenshot above shows the Livingdocs print preview. To the right the journalist writes text in Livingdocs (the request) and to the left the preview from the print system is displayed (your response)*

#### Metadata - department

Before exporting a print article to the print system, the journalist will add some metadata. Currently, the only supported metadata that is requested from the print system is the department (organisational unit within a newspaper). To request the available departments, Livingdocs will send out the following request.

To:
```http
/support
```

Payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
    <authentication type="USER_PASSWORD">
        <attribute name="user" value="yourUsername"/>
        <attribute name="password" value="yourPassword"/>
    </authentication>
    <getDepartments>
        <attribute name="publication" value="yourPublication"/>
    </getDepartments>
</articleUpload>
```

The authentication block is equivalent to the other requests. The `getDepartments` block simply requests for which publication the departments are requested.

Your middleware should send a response as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
   <getDepartments>
      <departments>
         <department id="AL" isParent="true" name="INTERNATIONAL" parent="" publication="test"/>
         <department id="fp" isParent="false" name="Front" parent="AL" publication="test"/>
         <department id="al" isParent="false" name="International" parent="AL" publication="test"/>
         <department id="bi" isParent="false" name="Bücher International" parent="AL" publication="test"/>
      </departments>
   </getDepartments>
</articleUpload>
```

Each department element has to provide the following attributes:
- `id`, identifier (shorthand) for this department
- `isParent`, indicator if this is a main or subdepartment
- `name`, the name shown in Livingdocs for this department
- `parent`, empty or the shorthand identifier (`id`) of the parent department
- `publication`, the publication to which this department belongs

{{< img src="print-metadata-department.png" alt="The print department selection in the user interface" >}}

*Screenshot of the print department selection in the Livingdocs editor*

#### Export

Once a journalist is finished with a print article, she will want to export it to the print system. To do this, Livingdocs sends the following request.

To:
```http
/export
```

Payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
    <authentication type="USER_PASSWORD">
        <attribute name="user" value="yourUsername"/>
        <attribute name="password" value="yourPassword"/>
    </authentication>
    <export>
        <document>
            <metadata>
                <author>
                    <fullName>Tom Sellek</fullName>
                    <hasRoyaltyForText>true</hasRoyaltyForText>
                    <hasRoyaltyForOther>true</hasRoyaltyForOther>
                </author>
                <print>
                    <livingdocsId>c5e5e4e7-0d79-4b98-b7e8-29482aad6da1</livingdocsId>
                    <name>Die Makellosigkeit der Heiligen</name>
                    <publication>nzz</publication>
                    <publicationDate>06.09.2016</publicationDate>
                    <department>nz</department>
                    <templateId>O8KPB</templateId>
                    <layoutId/>
                    <status/>
                </print>
            </metadata>
            <livingdocsMetadata>
                <channel>print</channel>
                <createdAt>2016-09-02T14:41:16.187Z</createdAt>
                <updatedAt>2016-09-02T14:41:16.187Z</updatedAt>
                <environment>local</environment>
            </livingdocsMetadata>
            <articleExportData>
                <content type="title">Die Makellosigkeit der Heiligen</content>
                <content type="text">Auf der Eingangstreppe zum Hospiz liegt eine zitternde Gestalt. Der abgemagerte Mann antwortet nicht, wenn das Wort an ihn gerichtet wird, sondern zieht nur die raue Wolldecke noch etwas höher über den Kopf. Unbeeindruckt vom Elend steht direkt daneben eine Hochzeitsgesellschaft. Die reich mit Gold geschmückte Braut wartet mit Freundinnen auf die Ankunft ihres Zukünftigen, der bald vom nahen Tempel der Göttin Kali zurückkehren wird. Drinnen im Hospiz, hinter der schweren Holztüre, liegen Kranke und Sterbende auf einfachen Feldbetten. Nonnen im grauen Gewand und einige westlich gekleidete Freiwillige kümmern sich um die vielleicht 50 ärmlichen Gestalten. Es herrscht eine nüchterne Atmosphäre, die Einrichtung ist spartanisch einfach. Falls Jahrzehnte einen Geruch haben, dann riecht es nach den fünfziger Jahren.</content>
            </articleExportData>
            <html><![CDATA[<h1 class="headline" data-component="headline">Die Makellosigkeit der Heiligen</h1><p data-component="paragraph" class="paragraph">Auf der Eingangstreppe zum Hospiz liegt eine zitternde Gestalt. Der abgemagerte Mann antwortet nicht, wenn das Wort an ihn gerichtet wird, sondern zieht nur die raue Wolldecke noch etwas höher über den Kopf. Unbeeindruckt vom Elend steht direkt daneben eine Hochzeitsgesellschaft. Die reich mit Gold geschmückte Braut wartet mit Freundinnen auf die Ankunft ihres Zukünftigen, der bald vom nahen Tempel der Göttin Kali zurückkehren wird. Drinnen im Hospiz, hinter der schweren Holztüre, liegen Kranke und Sterbende auf einfachen Feldbetten. Nonnen im grauen Gewand und einige westlich gekleidete Freiwillige kümmern sich um die vielleicht 50 ärmlichen Gestalten. Es herrscht eine nüchterne Atmosphäre, die Einrichtung ist spartanisch einfach. Falls Jahrzehnte einen Geruch haben, dann riecht es nach den fünfziger Jahren.</p>]]></html>
        </document>
    </export>
</articleUpload>
```

The authentication block is equivalent to the other requests. There are 2 metadata blocks. The first is general, document-related metadata. It contains:
- information about the author, in particular:
  - the full name
  - fields that indicate the royalty
- information about the print article, in particular:
  - `livingdocsId`, the Livingdocs ID (you need to store this for later referencing)
  - `name`, the name (title) of the article
  - `publication`, the publication in which this article is exported (published)
  - `publicationDate`, the date (edition) for which this article is exported
  - `department`, the department in which this article is exported
  - `templateId` or `layoutId`, the id of the InDesign template or layout for which this article was written
  - `status`, the status of this article, [see available statuses](#available-statuses)

The second (`livingdocsMetadata`) metadata block contains information that is specific to Livingdocs:
- `channel`, the name of the Livingdocs channel where this article derives from
- `createdAt`, the timestamp when this article was created
- `updatedAt`, the timestamp when this article was last update
- `environment`, the environment from which the export call derives, useful for local debugging

The main content is in the `articleExportData` block. It contains the content in components of the Livingdocs print design, e.g. the `title` and the `text`.
Aside of the component-based export, there is also an `html` field where the whole document is rendered as HTML.

Your middleware should use all of this information to export the article to the print system. You will not need to send anything back to Livingdocs except for the status of the export (success or failure).

Response:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
   <export status="OK"/>
</articleUpload>
```

#### Lifecycle - Status

The status call bears a lot of importance. When a print article has been written or partly written its status in the print system may update. For example the article might be locked in the print system or it might have gone to the printing press. To know about such status changes, Livingdocs polls your middleware for status updates. Currently, Livingdocs will call `status` for the following actions:
- when a preview is requested, i.e. whenever a user changes something in the text
- before the user exports the article

Livingdocs will send the following request.

To:
```http
/status
```

Payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
    <authentication type="USER_PASSWORD">
        <attribute name="user" value="yourUsername"/>
        <attribute name="password" value="yourPassword"/>
    </authentication>
    <getStatus>
        <attribute name="livingdocsId" value="c5e5e4e7-0d79-4b98-b7e8-29482aad6da1"/>
    </getStatus>
</articleUpload>
```

The authentication block is equivalent to the other requests. The `getStatus` block basically only contains the `livingdocsId`. Your middleware should have saved this when the article was first exported and should be able to match it against the value you get here.

Your middleware's response should look as follows.

Response:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articleUpload>
   <getStatus isEditable="true" layoutId="OYN6P" livingdocsId="c5e5e4e7-0d79-4b98-b7e8-29482aad6da1" statusName="Redigieren"/>
</articleUpload>
```

The `getStatus` elements contains the following attributes:
- `isEditable`, tells Livingdocs if this article can still be edited or is locked (it will switch the editor to read-only if you set this field to `false`)
- `layoutId`, the id of the layout where this article is placed. If the layout id changes in the print system you can set the changed `layoutId` here and Livingdocs will adapt accordingly
- `livingdocsId`, the Livingdocs id, should match what you got in the request
- `statusName`, the print status this article is in, see the available statuses below

##### Available statuses

The available statuses values for a print article are:
- `Redigieren`, the article is being edited
- `Gegenlesen`, the article is being proofread
- `Umbruch`, the article is in preparation for layouting, it is read-only for the editor
- `Korrekturlesen`, the article is being corrected
- `Korrigiert`, the article has been corrected
- `Placiert`, the article has been placed in the editon's InDesign file
- `Freigabe`, the article is ready for the printing press
- `Papierkorb`, the article is being deleted (archived)

NOTE: Currently, all of these statuses are informational, i.e. Livingdocs does not evaluate them. The only thing Livingdocs currently evaluates is if the article is read-only (locked) or not. This is though not handled by the status, but by the `isEditable` field in the `status` response.
