## Commit Message Conventions

For consistency and machine readability reasons we are strictly adhering to
commit message conventions.

This is important because it relates to [how we release our software](../collaboration/releases-changelogs.md).


The conventions are borrowed from the Angular.js project and they have a [full
spec](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y).

The general pattern of a commit message looks like this:

```
<type>[(<scope>)]: <message>

[<body>]

[Closes #<issue>, ...]
```

### Reduced explanation

- Commit test files with a `test: ` or `test(scope): ` prefix
- Commit bug fixes with a `fix: ` or `fix(scope): ` prefix
- Commit breaking changes by adding `BREAKING CHANGE: ` in the commit body
(not the first line) and follow up with migration instructions
- Commit changes to `package.json`, `.gitignore` and other meta files with
`chore(filenamewithoutext): `
- Commit changes to README files or comments with a `docs: ` prefix

There are more types like `perf`, `style` and `refactor` and here is the [full explanation](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y).

Ensuring correct commit messages is part of a pull request review. If you
aren't sure about a certain message make sure that's discussed in the pull
request.

### Breaking changes

If your `fix` or `feat` results in a breaking change, indicate this by adding `BREAKING CHANGE` to the first line of the body
 
Include clear upgrade instructions with your commit message body. Don't just state what breaks, but describe how to fix it.


### Examples

```
feat(pencil): add 'graphiteWidth' option
```

```
fix(graphite): stop graphite breaking when width < 0.1

Closes #28
```

```
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.
```
