---
title: Single Sign-On (SSO)
weight: 2
menus:
  customising:
    parent: Server Config
    weight: 2
---

## Summary

The Single sign-on feature, also known as SSO, allows users to log in with an external identity provider. A user who logs in for the first time is created automatically, unless the connection sets `autoRegistrationEnabled: false`.

## Configuration

In the following example we set two providers: Azure and Google.

```js
  auth: {
    connections: {
      azure: {
        strategy: 'li-authentication-openid-connect',
        enabled: true,
        loginEnabled: true,
        connectionId: 'azure',
        issuer: 'https://login.microsoftonline.com/${tenantId}/v2.0/.well-known/openid-configuration',
        config: {
          clientId: '',
          clientSecret: '',
          // jwtContentFromSSOProvider is a openid-connect standard claim, for available properties see:
          // https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
          extractGroupNames: async (jwtContentFromSSOProvider, groupsOfProject) => {
            return ['owners']
          },
          // User will be created and logged into this project (enterprise use-case)
          defaultProjectHandle: 'daily-planet' // alternative 'defaultProjectId: 1'
        },
        ui: {
          label: 'AD',
          icon: 'azure'
        }
      },
      google: {
        strategy: 'li-authentication-openid-connect',
        enabled: false,
        loginEnabled: true,
        connectionId: 'google',
        issuer: 'https://accounts.google.com/.well-known/openid-configuration',
        config: {
          clientId: '',
          clientSecret: '',
          // jwtContentFromSSOProvider is a openid-connect standard claim, for available properties see:
          // https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
          extractGroupNames: async (jwtContentFromSSOProvider, groupsOfProject) => {
            return ['owners']
          },
          // User will be created and logged into this project (enterprise use-case)
          defaultProjectHandle: 'daily-planet' // alternative 'defaultProjectId: 1'
        },
        ui: {
          label: 'Google',
          icon: 'google'
        }
      }
    }
  },
```

- `strategy` is `li-authentication-openid-connect`, which builds upon the OpenID Connect (OIDC) standard. OIDC extends OAuth 2.0
- `connectionId` is the provider handle
- `config` contains the `clientId` and `clientSecret` of the application registered at the provider, and the project that new users are added to (`defaultProjectHandle` or `defaultProjectId`)
- `ui` is only used by the editor to "draw" the actual login buttons.
