
# HTML format

## Wrapper

```html
<article class="nzz-standard" data-ld-document-url="http://livingdocs.nzz.ch/publication/[id]"
  itemscope
  itemtype="http://schema.org/NewsArticle">
  <!-- content -->
</article>
```

## Components


#### headline

```html
<h1 data-component="headline" class="headline" itemprop="headline">
  <!-- text -->
</h1>
```

#### catchline

```html
<div  data-component="catchline" class="catchline">
  <!-- text -->
</div>
```

#### byline

```html
<div  data-component="byline" class="byline">
  <!-- text -->
</div>
```

#### publication-date

```html
<time data-component="publication-date" class="publication-date"
  itemprop="datePublished"
  datetime="2015-07-27T07:07:34+0100">
  <!-- text -->
</time>
```

#### modification-date

```html
<time  data-component="modification-date" class="modification-date"
  itemprop="dateModified"
  datetime="2015-07-27T07:07:34+0100">
  <!-- text -->
</time>
```

#### lead

```html
<p data-component="lead" class="lead">
  <!-- text -->
</p>
```

#### subhead

```html
<h2 data-component="subhead" class="subhead">
  <!-- text -->
</h2>
```

#### paragraph

```html
<p data-component="paragraph" class="paragraph">
  <!-- text -->
</p>
```

#### infobox

```html
<article data-component="infobox" class="infobox">
  <h2>
    <!-- text -->
  </h2>
  <div>
    <!-- text -->
  </div>
</article>
```

#### related-article

```html
<article data-component="related-article" data-reference-id="098" class="related-article">
  <a href="http://www.nzz.ch/asdfasfd">
    <!-- text -->
  </a>
</article>
```

#### quote

```html
<blockquote data-component="quote" class="quote">
  <!-- text -->
</blockquote>
```

#### footnote

```html
<div data-component="footnote" class="footnote">
  <!-- text -->
</div>
```

#### image

```html
<figure data-component="image" data-reference-id="8760" class="image" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
  <img src="http://image.nzz.ch/ajdhe97" itemprop="contentUrl">
  <figcaption class="image--caption" itemprop="description"><!-- text --></figcaption>
</figure>
```


#### embed

A description of the embed along with an url will be inserted as text.

Examples:
- 'Tweet: http://twitter.com/tweet/fja84jd4g8'
- 'Kaltura Video: http://kaltura.com/afjdlkasfe8d82jks'
- 'Iframe: http://flickr.com/3009176986'

```html
<article data-component="embed" data-reference-id="8759" class="embed">
  <!-- text -->
</article>
```

#### html

Text will be extracted from free-html content and inserted. Everything else
including css and javascripts will not be included.

```html
<article data-component="html" data-reference-id="8758" class="html">
  <!-- text -->
</article>
```


## Inline text formats

Inline formats are limited and will be normalized. The following inline formats
can occur in the content:

Format | HTML element
------ | ------------
Bold | `<strong></strong>`
Italic | `<em></em>`
Superscript | `<sup></sup>`
Subscript | `<sub></sub>`
Links | `<a href=""></a>`