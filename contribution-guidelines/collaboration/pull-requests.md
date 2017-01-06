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

### Work in Progress

It is encouraged to open pull requests as soon as possible. This means a pull
request may contain unfinished work, as long as that is clearly stated in the
body. This way it's obvious what people are working on, it's possible to receive
feedback early on and code is always backed-up and available.
Let others know when a pull request is ready for final review.

Even though it's not recommended you may use commit messages that don't yet
follow our conventions. [Squash, rebase and reword your commits](https://help.github.com/articles/about-git-rebase/)
before merging.

### Merging

The pull request author is responsible for the sole act of merging, but all
authors and reviewers are responsible for the resulting code changes and new
releases (including the changelog) that are resulting.
