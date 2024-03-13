---
title: Project Seeding API
menus:
  customising:
    parent: Server API
    weight: 3
---

The Project Seeding API provides a simple way to programmatically seed projects. A common use case might be to set up an example project.

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
  // project with embedded design
  {
    __recreateIfItExists: false,
    __update: true,

    handle: 'my-embedded-design-project',
    owner: ':clark',
    groups: [{
      label: 'Editors',
      policies: [
        {effect: 'ALLOW', action: 'document.create', contentType: '*'},
        {effect: 'ALLOW', action: 'document.read', contentType: '*'},
        {effect: 'ALLOW', action: 'document.update', contentType: '*'},
        {effect: 'ALLOW', action: 'document.publish', contentType: '*'},
        {effect: 'ALLOW', action: 'document.delete', contentType: '*'},
      ]
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
  },
  // project with multi-channel configuration
    {
    __recreateIfItExists: false,

    handle: 'my-multi-channel-project', // required
    owner: ':john', // required, the _importHandle of a user
    // user groups
    groups: [{
      label: 'Editors',
      policies: [
        {effect: 'ALLOW',  action: 'document.create', contentType: 'regular'},
        {effect: 'ALLOW',  action: 'document.read', contentType: 'regular'},
        {effect: 'ALLOW',  action: 'document.update', contentType: 'regular'},
        {effect: 'ALLOW',  action: 'document.delete', contentType: 'regular'},
        {effect: 'ALLOW',  action: 'document.publish', contentType: 'regular'}
      ]
    }, {
      label: 'Readers',
      policies: [
        {effect: 'ALLOW',  action: 'document.read', contentType: 'regular'}
      ]
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
      // If staticConfig if provided the channel config will be
      // stored in the cache as well.
      staticConfig: 'web'
    }, {
      handle: 'print',
      label: 'Print',
      designName: 'another-design',
      designVersion: ':latest',
      staticConfig: 'print'
    }],
    secrets: [{name: 'my-secret', value: 'super-secret'}]
  }]
}
```

### Users

You can define users in two places:
- In the seeding configuration  under `users`(like in the example above)
- In the `conf/secrets/local.js` file under `development.users`. This way you can define your own email and password

### Projects

Project configurations can be of three types:
- Multi-channel Configuration (where only referenced designs can be used)
- Embedded design
- Referenced design

#### Groups

- [Available scopes for groups]({{< ref "/guides/authentication/access-rights" >}})
- Available policy effects: `ALLOW`, `DENY`
- Available policy actions: `document.metadata.update`, `metadata.update`, `document.create`, `document.read`, `document.update`, `document.delete`, `document.publish`, `dashboard.get`

#### Group Memberships

- The keys of `groupMemberships` are the `group` labels,
- The values of `groupMemberships` are arrays with user `_importHandle`'s

#### Config

[Project Config]({{< ref "/reference/project-config" >}})

#### Secrets

Secret values for usage inside a project. Example usage may be for API secrets of external services.


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
