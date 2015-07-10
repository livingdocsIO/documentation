## UserIntegration

### Methods
#### authenticate({expires, username, password}, callback)
```
  expires: Expires is the expiration timestamp in minutes. Default is 720 minutes.
  username: The public username used to login in the api.
  password: string
  callback: must be called with one of the following options
    * callback(err) when an error occurs
    * callback(null, user: userObject, access_token: 'ACCESSTOKENSTRING') when authentication succeeded
    * callback() when authentication failed
```

#### authorize(access_token, callback)
```
  access_token: Access token string
  callback: must be called with one of the following options
    * callback(err) when an error occurs
    * callback(null, {user: userObject, credentials: Object)
    * callback() When unauthenticated
```
#### find({id}, callback)
