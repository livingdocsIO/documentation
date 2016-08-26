# Mardown Style Guide

## Block Elements

In general, all block elements should be preceded and followed by a single blank
line except when placed at the very beginning or at the very end of the file.
Never use multiple blank lines in a document as it does not carry any meaning.

### Paragraphs and Line Breaks

Avoid line breaks unless you need it to represent a coherent block of text such
as a postal address or similar. In all other cases start a new paragraph.

### Headers

Only use `#` to denote headers. Using `===` or `---` to underline headers should
be avoided. There are two reasons for that.

1. `#` is consistent over all header levels. If you want a level 1 header, write
   `# Foo`. For a level 4 header, write `#### Bar`.

2. When using the underline methods you have to adjust the amount of characters
   used to underline whenever the header text changes. Otherwise you'll end up
   with a weird looking construct.

Use a single space after the `#`, i.e. write `# Title`, not `#Title`.

Don't close the header with `#`, i.e. write `## Subtitle`, not `## Subtitle ##`.

Use proper capitalization in header. In most cases this simply translates to
capitalizing the first word in your title.

### Lists

For unordered lists use a dash as the bullet point. A dash renders vertically
centered regardless of the font whereas an asterisk may render above the center
and thus may look weird.

For ordered lists always keep the numeration intact, i.e. when removing an item,
adjust the number of the following items, etc.

When wrapping lines in a list item, use hanging indents.

```markdown
- This is a
  good example
- This is a
bad example
```

When writing a list that contains items consisting of more than just a single
paragraph, keep the content indented at 4 spaces. This is an example of how not
to do it because it creates the wrong HTML:

```markdown
- paragraph one

  paragraph two

- paragraph one
```

Results in:

> - paragraph one
>
>   paragraph two
>
> - paragraph one

Paragraph two is outside the list and the next list item starts a new list. This
is an example with list items containing many types of block elements resulting
in HTML that you actually intended:

```markdown
-   paragraph one

    > block quote

    paragraph two

-   another list item

    ```
    this list item contains a code block
    ```

    - and a simple sub list
    - with two items

-   this item contains a sublist with more than just a single line of text

    1.  paragraph one

        paragraph two

    2.  paragraph one
```

Results in:

> -   paragraph one
>
>     > block quote
>
>     paragraph two
>
> -   another list item
>
>     ```
>     this list item contains a code block
>     ```
>
>     - and a simple sub list
>     - with two items
>
> -   this item contains a sublist with more than just a single line of text
>
>     1.  paragraph one
>
>         paragraph two
>
>     2.  paragraph one

List items do not need to be separated by empty lines unless the list contains
more than just a single paragraph as in the example above.

### Code Blocks

Always use code blocks for code that is longer than a simple expression.

Prefer the fenced syntax rather than the indented syntax:

    ```
    Fenced code block
    ```

        Indented code block

Always specify the language when using the fenced code block in order to get
syntax highlighting:

    ```javascript
    function foo(bar) {
      alert(bar);
    }
    ```

Results in:

> ```javascript
> function foo(bar) {
>   alert(bar);
> }
> ```

If you don't know the identifier of the language, look it up [here]
(https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

### Blockquotes

Wrapped lines should start with `>`:

```markdown
> This is
a bad example.

> This is
> a good example.
```

The citation source belongs to the blockquote. Place the source in its own
paragraph and precede it with an em dash (--- / `---`).

```markdown
> Gravitation is not responsible for people falling in love.
>
> --- Albert Einstein
```

Results in:

> > Gravitation is not responsible for people falling in love.
> >
> > --- Albert Einstein

Unfortunately it is not possible to visually separate two blockquotes in
markdown as they get rendered as one. To overcome this limitation, insert an
empty HTML comment before the next blockquote:

```markdown
> A quote

> Another quote (will be shown as one with the previous)

***

> A quote

<!---->
> Another quote
```

Results in:

> > A quote
>
> > Another quote (will be shown as one with the previous)
>
> ***
>
> > A quote
>
> <!---->
> > Another quote

### Horizontal Rules

To create a horizontal rule, prefer three consecutive asterisks:

```markdown
***
```

## Span Elements

### Links

Don't just dump a link in the text, create a meaningful link tag instead:

```markdown
Bad: Check out the docs: http://coffeescript.org/

Good: Check out the [docs](http://coffeescript.org/)
```

### Emphasis

Prefer asterisks over underscores for signalizing emphasis as they read better:

```markdown
This paragraph *uses* better **emphasis** demarcation.

This paragraph _uses_ worse __emphasis__ demarcation.
```

In typography it is common to use italic instead of bold font when emphasizing
something. Bold stands out too much such that it is clearly noticeable when
simply glancing at the document. Most of the times this is not needed.

Don't use bold text for headers. Use a header at the appropriate level instead.

### Inline Code

Whenever including code of any form in text it should be surrounded by
backticks. This prevents confusion.

```markdown
Bad: Create an instance of String using the new operator.

Good: Create an instance of `String` using the `new` operator.
```

Results in:

> Bad: Create an instance of String using the new operator.
>
> Good: Create an instance of `String` using the `new` operator.
