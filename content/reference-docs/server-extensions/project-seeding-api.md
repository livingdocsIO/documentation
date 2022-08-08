---
title: Project Seeding API
weight: 10
menus:
  reference-docs:
    parent: Server Extensions
---

The Project Seeding API provides a simple way to programmatically seed projects. A common use case might be to set up an example project.

```js
const tasksApi = liServer.features.api('li-tasks')
```

## Configuration

Example: `seeding.js`
```js
{
  users: [
    {
      _importHandle: ':john',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@livingdocs.io',
      admin: true, // default false
      password: 'Secret-Phrase'
    },
    {
      _importHandle: ':clark',
      firstName: 'Clark',
      lastName: 'Kent',
      email: 'clark@livingdocs.io',
      password: 'Secret-Phrase'
    }
  ],

  projects: [
    // project with multi-channel configuration
    {
    __recreateIfItExists: false,

    handle: 'my-multi-channel-project', // required
    owner: ':john', // required, the _importHandle of a user
    // user groups
    groups: [{
      label: 'Editors',
      scope: ['articles:read', 'articles:write', 'articles:publish'],
      policies: [
        {
          effect: 'ALLOW',
          action: 'metadata.update'
        }
      ]
    }, {
      label: 'Readers',
      scope: ['articles:read']
    }],
    groupMemberships: {
      'Editors': [':john'], // :john is the '_importHandle' of a user
      'Readers': [':clark']
    },
    channels: [{
      handle: 'web',
      label: 'Web',
      designName: 'my-design',
      designVersion: ':latest',
      staticConfig: 'web'
    }, {
      handle: 'print',
      label: 'Print',
      designName: 'another-design',
      designVersion: ':latest',
      staticConfig: 'print'
    }],
    secrets: [{name: 'my-secret', value: 'super-secret'}]
  },
  // project with embedded design
  {
    __recreateIfItExists: false,
    __update: true,

    handle: 'my-embedded-design-project',
    owner: ':clark',
    groups: [{
      label: 'Editors',
      scope: ['articles:read', 'articles:write', 'articles:publish']
    }],
    groupMemberships: {
      'Editors': [':john'],
    },
    config: require('./projects/service'), // the project config
    secrets: [{name: 'my-secret', value: 'super-secret'}]
  },
  // project with reference design
  {
    __recreateIfItExists: false,
    __update: true,
    handle: 'my-referenced-design-project',
    owner: ':john',
    groups: [],
    groupMemberships: {},
    channel: {
      designName: 'some-design',
      designVersion: ':some-version'
    },
    config: require('./projects/website') // the project config
  }]
}
```

### Users

You can define users in two places:
- In the seeding configuration  under `users`(like in the example above)
- In the `conf/secrets/local.js` file under `development.users`. This way you can define your own email and password

### Projects

Project configurations can be of three types:
- Multi-channel
- Embedded design
- Reference design

#### Groups

- [Available scopes for groups]({{< ref "/guides/authentication/access-rights" >}})
- Available policy effects: `ALLOW`, `DENY`
- Available policy actions: `document.metadata.update`, `metadata.update`, `document.publish`, `document.create`, `document.update`, `document.get`, `dashboard.get`

#### Group Memberships

- The keys of `groupMemberships` are the `group` labels,
- The values of `groupMemberships` are arrays with user `_importHandle`'s

#### Config

[Project Config]({{< ref "/reference-docs/project-config" >}})

#### Secrets

Secret values for usage inside a project. Example usage may be for `api-secrets` of external services.


## Usage

You can register an initialized hook.

Example:

```js
// Setup Default Projects
  liServer.registerInitializedHook(async function initSeeding () {
    const tasksApi = liServer.features.api('li-tasks')

    const defaultSeedingConfig = require('./seeding')
    try {
      // if 'useDevUsers' is true the users will be taken from the local.js file.
      // 'file' is used only for logging purposes.
      await tasksApi.setupProjects(defaultSeedingConfig, {
        useDevUsers: false, file: './example/seeding.js'
      })
    } catch (err) {
      // continue server setup in case of an error
      liServer.log.error(err)
    }
  })
```
