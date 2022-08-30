---
title: Single Sign-On
description: Learn how to setup SSO with the example of AzureAD.
weight: 2
---

## SSO example with Azure AD
To use SSO with OpenID Connect we have a strategy `li-authentication-openid-connect` to use in the `auth.connections` config. With this strategy, you can use a SSO Service (AzureAD, Google, Facebook, ...) which supports the OpenID Connect for authentication.  

To enable AzureAD SSO for Livingdocs, add the config below to the server config in `auth.connections`. It creates a setup for SSO with AzureAD and shows the button for that on the login page. It is also using the existing user from Livingdocs and create an AzureAD Identity. The already written articles with this user will still be assigned to the same user. The match of the user is done with the email address.

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
          // Check `Configuring OpenID in Azure AD` section for a guide
          scope: 'openid email profile',
          async extractClaims ({tokenSet}) {
            const claims = tokenSet.claims()
            // assert group here
            await transferLocalIdentityToAzure(claims)
            return claims
          },
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
// create a new AzureAD identity for the existing user
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

## Configuring OpenID in Azure AD

To configure OpenID in Azure Active Directory, you have to go follow the steps depicted below.

1. Open the [Azure Portal](https://portal.azure.com/) and go to Azure Active Directory, via search bar or on the service list.
{{< img src="0-goto-AAD.png" alt="Azure Active Directory in Azure Portal" >}}

2. On the left sidebar, click on `App registrations`. Then create a new registration with `+ New registration` button.
{{< img src="1-create-registration.png" alt="App registration" >}}

3. Define a name for the application and choose the access depending on your requirements (default: `Single tenant`). In the redirect URI group, specify `Web` in platform drop down and your redirect URI should look like `https://<my-domain-name>/proxy/api/auth/azure/callback`. Finally, click `Register` to create the registration.
{{< img src="2-app-callback-url.png" alt="Define callback URL" >}}

4. In the registration view left sidebar, go to `Authentication` menu. Enable `Access tokens (used for implicit flows)` and `ID tokens (used for implicit and hybrid flows)`, then save.
{{< img src="3-enable-access-tokens.png" alt="Enable OpenID and Token" >}}

5. In the registration view left sidebar, go to `Certificates & secrets` menu. Add a client secret with `+ New client secret`, add a description to identify the secret and expiration date. Finally `Add` the client secret.
{{< img src="4-add-client-secret.png" alt="Generate client secret" >}}

6. In the list of client secrets copy the newly created secret ID to use in Livingdocs Server configuration `clientSecret` parameter.
{{< img src="5-copy-client-secret.png" alt="Copy client secret" >}}

7. Go back to the registered app list (Azure Active Directory > App registrations) and choose the one you just created. Configure the claims used in the app registration in `Token configuration` section. You can specify AD group types and token used.
{{< img src="6-configure-scopes.png" alt="Configure scopes in registered app" >}}

8. To add users or groups to the app registration go to `Configure your organization`.
{{< img src="7-open-config-organization.png" alt="Open 'Configure your organization' in registered app" >}}

9. Go to `Users and groups` on the sidebar. You should see `+ Add user/group` to add the users that need access to the app.
{{< img src="8-users-and-groups.png" alt="Add users and groups in enterprise application" >}}
