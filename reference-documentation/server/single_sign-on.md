# Single Sign-On

## Summary

The Single sign-on feature, also known as SSO, allows you to:

* signup: register a new user using one of their social account
* signin: authenticate that user

## Configuration

In the following example we set three different providers: Github, Google and Facebook.

```coffeescript
[...]
  auth: {
    connections: {
      github: {
        strategy: 'li-authentication-sso',
        enabled: true,
        loginEnabled: true,
        registrationEnabled: true,
        connectionId: 'github',
        config: {
          scope: 'user:email',
          clientID: 'your-github-client-id',
          clientSecret: 'your-github-client-secret'
        },
        ui: {
          label: 'Github',
          icon: 'github-circle'
        }
      },
      google: {
        strategy: 'li-authentication-sso',
        enabled: true,
        loginEnabled: true,
        registrationEnabled: true,
        connectionId: 'google',
        config: {
          scope: 'email',
          clientID: 'your-google-client-id',
          clientSecret: 'your-google-client-secret',
          callbackURL: 'http://example.com/auth/google/callback'
        },
        ui: {
          label: 'Google',
          icon: 'google'
        }
      },
      facebook: {
        strategy: 'li-authentication-sso',
        enabled: true,
        loginEnabled: true,
        registrationEnabled: true,
        connectionId: 'facebook',
        config: {
          scope: 'email',
          profileFields: ['email', 'displayName'],
          clientID: 'your-facebook-client-id',
          clientSecret: 'your-facebook-client-secret',
          callbackURL: 'http://example.com/auth/facebook/callback'
        },
        ui: {
          label: 'Facebook',
          icon: 'facebook'
        }
      }
    }
  },
[...]
```

* `strategy` is set to `li-authentication-sso` as opposed to `li-authentication-local` the default email/password authentication strategy
* `enabled` is a flag for easily switching on and off different providers
* `connectionId` is the provider handle
* `config` can contain up to two "fixed" fields: `scope` and `callbackURL`, this is provider specific. The two other fields are `clientID` and `clientSecret` you can get those by creating an Oauth2 application at one of those external providers. For example to get those credentials from Github you have to go to `Settings>Developer settings` and then click on `New Oauth App`.
* `ui` is only used by the editor to "draw" the actual signin and signup buttons.

