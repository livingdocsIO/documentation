# CoffeeScript Style Guide

## CoffeeScript Linter

We are using [CoffeeLint](http://www.coffeelint.org/). If you start a new
project make sure our [config files get applied](https://github.com/upfrontIO/apply-guides).
The linter will help you enforce some of the rules in this guide.

# Our Rules

-   Don't write parentheses for function definitions that don't take arguments.

    ```coffeescript
    # bad:
    someMethod: () -> # method body

    # good:
    someMethod: -> # method body
    ```

-   Always use single quotes, unless interpolating. Don't use spaces when
    interpolating `#{xxx}`

    ```coffeescript
    # bad:
    name = "John Doe"

    # good:
    name = 'John Doe'
    name = "#{prename} #{surname}"
    ```

-   Avoid unnecessary spacing within braces.

    ```coffeescript
    # bad:
    lukas = { first: 'Lukas', last: 'Peyer' }

    # good:
    gabriel = {first: 'Gabriel', last: 'Hase'}
    ```

-   Limit lines to 80 chars.

-   No trailing whitespace.

-   End files with a newline. This prevents noise in the SCM and is the right
    way to write text files in UNIX (see [this
    post](http://slashdot.org/comments.pl?sid=165492&cid=13808398) for an
    explanation). In most GUI editors this is shown as an empty line at the end
    of the file.

-   Don't use standalone `@`, write `this` instead.

    ```coffeescript
    # bad:
    $('#btn').on('click', $.proxy(@method, @))

    # good:
    $('#btn').on('click', $.proxy(@method, this))
    ```

-   Use 2 new lines after a method definition. Otherwise it can be hard to
    see where a method ends since the methods itself may contain empty lines
    in their bodies.

    ```coffeescript
    # bad:
    class Foo

      constructor: ->
        # method body

      bar: ->
        # method body

    # good:
    class Foo

      constructor: ->
        # method body
     
     
      bar: ->
        # method body
    ```

-   Denote boolean variables by prepending them with `is`, `has`, etc.

    ```coffeescript
    # bad:
    open = yes
    if open
      # something

    # good:
    isOpen = yes
    if isOpen
      # something
    ```

-   Use `?` and `?=` instead of checking for `truthy` values if you only want to check for `null` and `undefined`.

    ```coffeescript
    # bad:
    join = (array, separator) ->
      separator ||= ' | '
      array.join(separator)
    # Notice how an empty separator gets overridden (since '' is falsy):
    join(['a', 'b'], '') # => "a | b"

    # good:
    join = (array, separator) ->
      separator ?= ' | '
      array.join(separator)
    # Only undefined and null values get overridden:
    join(['a', 'b'], '')   # => "ab"
    join(['a', 'b'], null) # => "a | b"
    ```

    Valid use case for `||=`:

    ```coffeescript
    atLeastOnce = (fn, times) ->
      times ||= 1
      fn(i) for i in [0...times]
    atLeastOnce(someFn, possiblyZero)
    ```

-   Documentation should not be separated by empty lines from what they
    document.

    ```coffeescript
    # bad:

    # Returns foo after doing bar.

    fooBar: ->
      # method body

    # good:

    # Returns foo after doing bar.
    fooBar: ->
      # method body
    ```

-   Use `unless` for simple checks instead of `if !`.

    ```coffeescript
    # bad:
    open() if !isLocked

    # good:
    open() unless isLocked
    ```

-   Always use `&&` instead of `and`, `||` instead of `or`.

    ```coffeescript
    # bad:
    if isOpen or (isClosed and isEmpty)
      # something

    # good:
    if isOpen || (isClosed && isEmpty)
      # something
    ```

-   Use `on/off`, `yes/no` at will.

-   Use parentheses for function invocations unless it spans multiple
    lines and becomes easier to read.


    ```coffeescript
    # bad:
    alert 'foobar'

    # good:
    alert('foobar')

    perform ->
      doSomething()

    create
      name: 'John'
      age: 34

    setup [
      'first'
      'second'
    ], 'even_more_params'

    ```

-   Don't use the unary `++` and `--`, use `+= 1` and `-= 1`.

    ```coffeescript
    # bad:
    anArray[counter++] = 'foo'

    # good:
    anArray[counter] = 'foo'
    counter += 1
    ```

-   When splitting a method chain across lines, indent them by one.

    ```coffeescript
    # bad:
    $('body')
    .addClass('foo')
    .addClass('bar')

    # good:
    $('body')
      .addClass('foo')
      .addClass('bar')
    ```

-   Separate `describe` and `it` blocks with two new lines.

    ```coffeescript
    # bad:

    describe 'TheClassUnderTest', ->
      describe 'theMethodUnderTest', ->
        it 'does something', ->
          # test code

        it 'does another thing', ->
          # test code

    # good:

    describe 'TheClassUnderTest', ->


      describe 'theMethodUnderTest', ->


        it 'does something', ->
          # test code


        it 'does another thing', ->
          # test code
    ```

-   In unit tests, `describe` the class under test and `describe` the method
    under test.

    ```coffeescript
    # bad:

    describe 'TheClassUnderTest', ->


      it 'perform() does something specific', ->
        # test code

    # good:

    describe 'TheClassUnderTest', ->


      describe 'perform', ->


        it 'does something specific', ->
          # test code
    ```

-   Don't write out `should` in tests.

    ```coffeescript
    # bad:
    it 'should return foo', ->
      # test code

    # good:
    it 'returns foo', ->
      # test code
    ```
