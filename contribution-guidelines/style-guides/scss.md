# Sass / CSS Styleguide

On a high-level we want:

- two (2) space indents
- multi-line CSS
- meaningful use of whitespace
- use `ld` a a prefix for editor related classes (e.g. `.ld-topbar`)

###CSS Architecture

The Livingdocs CSS architecture is based on the [open/close principle](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/) which has its roots in object oriented programming. You should also be familiar with [object oriented CSS](https://github.com/stubbornella/oocss/wiki) if you want to be able to fully understand how our CSS is structured. 

Essentially there are two main principles we try to consider when writing CSS:

1. Separate structure and skin
2. Separate container and content

Have a look at [@stubbnornella](https://twitter.com/stubbornella)’s wiki to get a better idea on [object oriented CSS](https://github.com/stubbornella/oocss/wiki).

If you want to dig deeper also check out these links: 

* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [How to manage CSS projects with ITCSS](https://www.youtube.com/watch?v=hz76JIU_xB0)


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

**BEM(-like) Naming:**

It is important to know when BEM scope starts and stops. As a rule, BEM applies to self-contained, discrete parts of the UI. Don’t overBEMify. :D

Read the following article to get a better idea on the BEM syntax: [Getting your head round bem syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

The naming convention basically follows this pattern:

```scss
.block {}
.block__element {}
.block--modifier {}
```

A real world example could look like this:

```html
<div class="weather weather--stormy">
  <span class "weather__temparature">12°</span>
</div>
```

```scss
.weather {
  // …
}

.weather--stormy {
  // …
}

.weather__temparature {
  //
}
```

In order to keep the readablity of our CSS as high as possible we don’t declare elements or modifiers inside of its parent class. A neat side effect of this rule is that it keeps the findability of all your classes in your editor of choice.

```scss

// Cool:
.weather {
}

.weather--stormy {
}

.weather__temparature {
}

// Uncool:
.weather {
  &--stormy {
  }

  &__temparature {
  }
}


```

**State rules**

We define state rules the [SMACSS way](https://smacss.com/book/type-state). This helps us to distinguish modifier classes from state classes. No, it’s not the same. I know you just thought that. ;)

```scss
.is-hidden
.is-collapsed
.is-expanded
.is-selected
```

If you need a JS-hook, try this:

```
.js-submit
.js-action-save
```


### Declaration order

Related property declarations should be grouped together following the order:

1. Positioning
2. Box model
3. Typographic
4. Visual

This is borrowed from [@mdo](https://twitter.com/mdo)’s excellent [code guide](http://codeguide.co/#css-declaration-order).

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

Thousend of chained classes [can’t override](http://jsfiddle.net/0yb7rque/) the specificity of a single ID. 

### Nesting

As a rule, *if a selector will work without it being nested then do not nest it*. 

### Some more rules you should follow

- Avoid using tag names as selectors

Everything is gobal in CSS. Avoid polluting the global namespace and styling elements unintentionally.

```html
<footer class="footer"></footer>
```

```scss
// Cool:
.footer {
  background: #333;
}

// Uncool:
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

// Cool
color: $ld-c-white;

// Uncool:
color: #fff;
or 
color: white;
```