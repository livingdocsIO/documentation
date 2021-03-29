---
title: Implement Single Sign-On
menus:
  guides:
    parent: Authentication and Authorization
---

## SSO example with Github login

The boilerplate server and editor provide an example for a SSO login using Github as an authentication provider.
The bulk of the implementation is in the server. Check out the `app/sso` directory in the [boilerplate server](https://github.com/livingdocsIO/livingdocs-server-boilerplate).

### How the authentication flow works

As you can see in the boilerplate SSO example, we use `passport-light` (a module by Marc Bachmann) and the `passport-github` strategy. Passport has 300+ strategies on its [website](http://www.passportjs.org/) so chances are that yours exists already and you can pretty much re-use the code from the boilerplate example.
If for some reason you can not use passport, this is also not a problem. The flow for authentication is pretty simple:
1. The Livingdocs editor makes a call to the Livingdocs server to ask for authentication (you can configure the route)
2. The Livingdocs server redirects this call to the third-party SSO provider
3. The user logs in to the third-party SSO provider (using the user interface of the SSO provider, e.g. Github login)
4. The third-party SSO provider redirects back to the Livingdocs server passing information about the logged in user (in the minimum a unique id)
5. The Livingdocs server checks the identity table for a user with the external id passed in by the SSO provider
6. The Livingdocs server creates a Livingdocs access token for the user found in (5)
7. The Livingdocs server redirects to `${editorHost}/login#token=${accessToken}` to login the user

This flow assumes that the users from the SSO provider haven been created within Livingdocs and the according external ids. If the user does not exist yet in (5) of the flow above, you can just create it from the information given by the SSO provider. The Github SSO example does this, so you can check out the boilerplate code.

### Enabling an authentication route in the editor

On the login screen of the Livingdocs editor you want a way to actually use your third-party SSO login. You can configure it like this in the [editor configuration]({{< ref "/enterprise/reference-docs/editor-configuration/editing-features.md" >}}):
```
auth: {
  providers: [{
    id: 'github',
    strategy: 'link',
    label: 'Log in via Github',
    url: 'http://localhost:9090/auth/github'
  }]
}
```

This will render a button on the login screen, reading "Log in via Github" and request the authentication from `/auth/github`. Your Livingdocs server needs to implement this route with your SSO implementation.

## Implementing an external login provider on the server

*Note: the following walkthrough (and the boilerplate example) makes use of Livingdocs core code APIs. Those APIs can not assumed to be stable so you will likely need to change your code as we introduce breaking changes in the future. If you closely watch the release notes before each update this shouldn't be a big issue though.*

The first thing you need to do is to create a new custom feature in your server. See [here]({{< ref "/enterprise/guides/add-customizations#server" >}}) on how this works.
In the `index.js` file of your new feature you will need to gather the Livingdocs APIs you need. For Github we used the following:
```
const authApi = server.features.api('li-authentication')
const userApi = server.features.api('li-users')
const groupsApi = server.features.api('li-groups')
const projectApi = server.features.api('li-projects')
```

You will also need to define the id of the project where your users will be created in. The boilerplate example creates users in a common project, of course you could also create a new project for each user.
Most likely you will also need to get some configured access tokens for your third-party SSO, in the example of github this is an app id and secret. If you want to try the Github example you need to create an oAuth app in your Github account and copy the id and secret from there.

### routes

You will need to define the route for authentication that you configured in the editor before.
```
module.exports = {
  endpoints: [{
    method: 'get',
    path: '/auth/github',
    title: 'Create a session using github',
    action: 'authenticate'
  }]
}
```

and in your custom feature:
```
feature.registerResource({
    require('./routes.js'),
    controller
  })
```

### controller

In the passport example the controller becomes extremely simple thanks to Marc Bachmann's `passport-light` module. You just pass the passport strategy and implement each of the different response cases. See the boilerplate code for details.

### passport strategy

The passport strategy is where you define the redirect logic (see steps 2 and 4 in the flow at the beginning). If you don't use passport you will need to implement this part yourself.

### auth API

We chose to hide the logic of finding or creating users and creating access tokens in an API file. There are 2 flows.
1. create a new user

```
- findOrCreateUser
- createUser
- createIdentity
- assignToGroup
- createAccessToken
```

Note that users and projects are a many to many relation over groups thus you need to assign a user to at least one group. The groups correspond to the access management groups that you can define in the editor user interface under "Project settings".

2. login an existing user

```
- findOrCreateUser
- updateUser
- createAccessToken
```

Refer to the code in `app/sso` of the [Livingdocs server boilerpalte](https://github.com/livingdocsIO/livingdocs-server-boilerplate) to see the full implementation.
