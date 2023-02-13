---
title: Login
menus:
  customising:
    parent: Editor Config
---

In addition to the Livingdocs login, you can configure additional login providers.
```js
auth: {
  providers: [{
    id: 'myLoginProvider',
    strategy: 'link',
    label: 'Log in via myLoginProvider',
    url: 'http://localhost:9090/auth/myLoginProvider'
  }]
}
```

Only strategies of type `link` are supported at the moment. For an example see our [AzureAD login guide]({{< ref "/guides/authentication/azure-ad-login" >}}).

### Login screen

```js
app: {
  ui: {
    login: {
      requestAccess: {
        label: 'No Account?',
        url: 'http://livingdocs.io/trial/',
        urlText: 'Request beta access'
      }
    }
  }
}
```

Customize the label and link below to login (to request a login).
