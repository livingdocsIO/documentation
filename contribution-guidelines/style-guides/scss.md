# Sass / CSS Styleguide

[http://sass-lang.com/](http://sass-lang.com/)

On a high-level we want:

- two (2) space indents
- multi-line CSS
- meaningful use of whitespace

When it comes to the Livingdocs CSS architecture we are basically trying to apply the [open/close principle](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/) to our CSS. If you want to dig deeper read this: [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)


### Titling

Begin every new major section of a CSS project with a title:

```scss
/*------------------------------------*\
    #SECTION-TITLE
\*------------------------------------*/

.selector {}
```



### Naming Conventions

We use hyphen (-) delimited strings, with BEM-like naming for more complex pieces of code.

Hyphen Delimited:

All strings in classes are delimited with a hyphen (-), like so:

```scss
.page-head {}
.sub-content {}
```

BEM-like Naming:

It is important to know when BEM scope starts and stops. As a rule, BEM applies to self-contained, discrete parts of the UI. Don’t overBEM. :D

[csswizardry: getting your head round bem syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

```html
<div class="weather weather--stormy">
  <span class "weather__temparature">12°</span>
</div>
```

```scss
.weather {
  //…
}
  .weather--stormy {
      //…
  }

  .weather__temparature {
      //…
  }
```

Write your component states as follows:


```scss
.is-hidden
.is-collapsed
.is-expanded
.is-selected
```

If you need a JS-hook:

```
js-submit
js-action-save
```


### Declaration order

Related property declarations should be grouped together following the order:

1. Positioning
2. Box model
3. Typographic
4. Visual

```
.declaration-order {
  /* Positioning */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  position: absolute;

  /* Box-model */
  float: right;
  width: 100px;
  height: 100px;
  display: block;

  /* Typography */
  color: #333;
  line-height: 1.5;
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;

  /* Visual */
  border-radius: 3px;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;

  /* Misc */
  opacity: 1;
}
```
### Specifity: IDs in CSS

Keep specifity low at all times. To do that there is one simple rule we need to follow: *avoid using IDs in CSS*.

Thousend of chained classes can’t override the specificity of a single ID: jsfiddle.net/0yb7rque

### Nesting

As a rule, *if a selector will work without it being nested then do not nest it*. 

### Some more rules you should follow

- Avoid using tag names as selectors

Everything is gobal in CSS. Avoid polluting the global namespace and styling elements unintentionally.

```html
<footer class="footer"></footer>
```

```scss
// Good:
.footer {
  background: #333;
}

// Bad
footer {
  background: #333;
}
```


- Prefer double quotes

```scss
@import "global/header/header/";
```


- Only use color variables that are globally defined in _colors.scss
- Also don't define local color variables

```scss
color: $ld-c-white;

// not
color: #fff;
or 
color: white;
```
