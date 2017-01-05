## Code reviews

Any code that's about to land on master should be reviewed by at least one other
person. This is to ensure high code quality, to catch bugs and to spread
responsibility onto many shoulders.

Even though it's possible to skip the review in exceptional cases it's totally
discouraged and it should be reviewed why the exceptional case appeared in the
first place.

### How to review

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


