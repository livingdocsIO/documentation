# Contributing to Livingdocs

## Commit Message Conventions

For consistency and machine readability reasons we are strictly adhering to
commit message conventions.

The conventions are borrowed from the Angular.js project and they have a [full
spec](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y).

The general pattern of a commit message looks like this:

```
<type>[(<scope>)]: <message>

[<body>]

[Closes #<issue>, ...]
```

Here is a reduced explanation:

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

## Releases

Releases are fully automated using [semantic-release](https://github.com/semantic-release/semantic-release).

Whenever there is new commit on master (i.e. a pull request is merged) a new
release will be attempted on the CI server. The new version number will be
derived from the commits that were applied since the last release.

- If there is at least one `BREAKING CHANGE: ` bump the major version
- If there is at least one `feat: ` bump the minor version
- If there is at least one `fix: ` bump the patch version
- If there is none of the above don't release a new version

### Changelogs

Because of our commit message conventions we don't need to write and maintain
our changelogs by hand at release time. This calls for more attention when writing or reviewing commit messages.

Changelogs are available on, and automatically uploaded to the GitHub releases
page of the respective repository.

## Pull Requests

Pull Requests are _the_ central piece of our collaboration workflow.

### Branch Protection and Required Statuses

> Why are Pull Requests so important?

From a very pragmatical standpoint that's because they are the only way to get
code to land on master and therefor in any release.
On all Livingdocs components we enabled [protected branches and required status checks](https://github.com/blog/2051-protected-branches-and-required-status-checks).

- It's not possible to push to master directly
- It's not possible to force-push master
- New code has to land on a separate branch/pull request first
- Pull requests can not be merged unless their build status is green

### BREAKING CHANGE

If you plan to introduce a breaking change, inform the product elders (@peyerluk, @gabrielhase, @marcbachmann) about it as early as possible. 
They will assess your change in terms of impact on our customers.
 
Include clear upgrade instructions with your commit messages. Don't just state what breaks, but describe how to fix it. 

### Work in Progress

It is encouraged to open pull requests as soon as possible. This means a pull
request may contain unfinished work, as long as that is clearly stated in the
body. This way it's obvious what people are working on, it's possible to receive
feedback early on and code is always backed-up and available.
Let others know when a pull request is ready for final review.

Even though it's not recommended you may use commit messages that don't yet
follow our conventions. [Squash, rebase and reword your commits](https://help.github.com/articles/about-git-rebase/)
before merging.

### Reviews

Any code that's about to land on master should be reviewed by at least one other
person. This is to ensure high code quality, to catch bugs and to spread
responsibility onto many shoulders.

Even though it's possible to skip the review in exceptional cases it's totally
discouraged and it should be reviewed why the exceptional case appeared in the
first place.

#### How to review

> Code review should probably always be your top priority, and you should figure out the best way to work it into your event loop.
- http://glen.nu/ramblings/oncodereview.php

A review is not a one time thing, but more like coaching someone until their changes are merged.
When you have been asked to review, do an early initial assessment and constantly follow the changes as the pull request evolves.
If you cannot commit to this, let the author know instead of responding rarely and late.

In addition to evaluating the changes, you should make sure ... 
- they're given a manual test run
- they're covered by tests
- no guides and conventions are violated
- commit message conventions are followed

Explicitly indicate when you're happy (eg. "lgtm", "good to merge" or :shipit:), and
describe what should be changed or improved if you aren't.

Be empathic, constructive and [give good feedback](https://www.kickstarter.com/backing-and-hacking/pull-requests-how-to-get-and-give-good-feedback).

```
# Bad
This is bad, I don't like it.

# Good
I see your constraints, but I think we should address this differently
nonetheless, because I think it might become a problem in the future, when
<reason>.

# Bad
WTF is this?

# Good
After looking at this and running it locally I couldn't figure out what this
code is doing. Maybe we should add a comment here, or better yet refactor this
if possible.
```

Have a look at [workflows when reviewing pull requests](http://alistapart.com/article/running-code-reviews-with-confidence).



### Merging

The pull request author is responsible for the sole act of merging, but all
authors and reviewers are responsible for the resulting code changes and new
releases (including the changelog) that are resulting.
