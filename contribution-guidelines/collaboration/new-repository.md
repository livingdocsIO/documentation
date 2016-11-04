# What to do when creating a new repository

Always use the `livingdocs-automation` user, not your private account when adding integrations.

- Github: [Allow the team and machine users access](https://github.com/orgs/upfrontIO/teams)
- Github: Enable branch protection, require status checks, require reviews
- Travis: Configure a new repo, configure environment variables, set up integrations, semantic releases, deployment
- Codeship: For downstream servers and editors, run downstream tests with the upstream build
- Apply guides: Add the project to [repos.json](https://github.com/upfrontIO/apply-guides/blob/master/repos.json)
- Npm: For private repositories using private npm packages, [add an access token](https://github.com/upfrontIO/guides/blob/master/npm/access.md)
- Greenkeeper: Add repository with `greenkeeper enable`
- Slack: [set up webhook](https://livingdocs.slack.com/apps/A0F7YS2SX-github)
- Hound: Add the new repo
- Coveralls: Add the new repo
- Zenhub: Merge the new repo to the board
