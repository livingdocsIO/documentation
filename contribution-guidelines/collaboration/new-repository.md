# What to do when creating a new repository

Always use the `livingdocs-automation` user, not your private account when adding integrations. Be careful to not leak any secrets when creating public repositories.

- Github Organization Settings:
  - [Allow the team and machine users access](https://github.com/orgs/upfrontIO/teams)
  - [Enable greenekeeper](https://github.com/organizations/upfrontIO/settings/installations/2843)
- Github Repository Settings:
  - Options: Disable wiki, disable issues, enable restricted editing
  - Branches: Enable branch protection, require status checks, require reviews
  - [Create labels](./create-labels.sh)
- Travis: Configure a new repo, configure environment variables, set up integrations, semantic releases, deployment
- Codeship: For downstream servers and editors, run downstream tests with the upstream build
- Apply guides: Add the project to [repos.json](https://github.com/upfrontIO/apply-guides/blob/master/repos.json)
- Npm: For private repositories using private npm packages, [add an access token](../../core/releases/npm/access-livingdocs-organization.md)
- Slack: [set up webhook](https://livingdocs.slack.com/apps/A0F7YS2SX-github)
- Hound: Add the new repo
- Coveralls: Add the new repo
- Zenhub: Merge the new repo to the board
