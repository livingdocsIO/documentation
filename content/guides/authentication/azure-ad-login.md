---
title: Single Sign-On
description: Learn how to setup SSO with the example of AzureAD.
weight: 2
---

## SSO example with Azure AD
To use SSO with OpenID Connect we have a strategy `li-authentication-openid-connect` to use in the `auth.connections` config. With this strategy, you can use a SSO Service (AzureAD, Google, Facebook, ...) which supports the OpenID Connect for authentication.  

To enable AzureAD SSO for Livingdocs, add the config below to the server config in `auth.connections`. It creates a setup for SSO with AzureAD and shows the button for that on the login page. It is also using the existing local user from Livingdocs and transfers it to an AzureAD User. The already written articles with this user will still be assigned to the same user. It isn't possible to log in with the local login after the first login with AzureAD. The match of the user is done with the email address.

```js
const nanoid = require('nanoid/generate')
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const azureConfig = JSON.parse(process.env.auth_azure || '{}')

module.exports = {
  auth: {
    accessTokenTtl: '10h',
    sessionTtl: '20h',
    connections: {
      local: {
        label: 'Password',
        enabled: true,
        loginEnabled: true,
        registrationEnabled: false,
        strategy: 'li-authentication-local'
      },
      azure: {
        strategy: 'li-authentication-openid-connect',
        enabled: azureConfig.enabled || false,
        loginEnabled: true,
        registrationEnabled: false,
        autoRegistrationEnabled: false,
        connectionId: 'azure',
        // Azure AD Issuer, replace the tenant with your tenant id
        // example for google: https://accounts.google.com/.well-known/openid-configuration
        issuer: 'https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration',
        config: {
          clientId: azureConfig.clientId,        
          clientSecret: azureConfig.clientSecret,
          scope: 'openid email profile',
          async extractClaims ({tokenSet}) {
            const claims = tokenSet.claims()
            // assert group here
            await transferLocalIdentityToAzure(claims)
            return claims
          }
          // set the access to projects with specific groups
          // on the basis of the claims. This is used for new users
          // which are not registered locally
          // claims is a openid-connect standard claim, for available properties see:
          // https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
          async extractProjects ({client, tokenSet, claims}) {
            // return a default
            return [{
              projectHandle: 'enterprise-web-print',
              groupLabels: ['owners', 'editors']
            }, {
              projectHandle: 'service',
              groupLabels: ['owners', 'editors']
            }]
          }
        },
        ui: {
          label: 'Microsoft Login',
          icon: 'microsoft-azure'
        }
      }
    }
  }
}

let db
// Update the local already existing identity to an AzureAD identity
async function transferLocalIdentityToAzure (claims) {
  if (!db) db = require('../../app/server').db

  const [exists] = await db.sql`
    SELECT * FROM authentication_provider_identities
    WHERE connection_id = 'azure'
    AND identity_id = ${claims.sub}
  `
  // Return if the AzureAD identity is already existing
  if (exists) return

  const [legacy] = await db.sql`
    SELECT * FROM authentication_provider_identities
    WHERE connection_id = 'local'
    AND identity_id = ${claims.email.toLowerCase()}
  `

  // return if there is no existing local identity
  if (!legacy) return

  // change the existing local identity to a AzureAD identity
  await db.sql`
    INSERT INTO authentication_provider_identities (
      id,
      connection_id,
      identity_id,
      identity_data,
      user_id
    )
    VALUES (
      ${nanoid(alphabet, 12)},
      'azure',
      ${claims.sub},
      ${{email: claims.email, name: claims.name}},
      ${legacy.user_id}
    )
  `
}
```
