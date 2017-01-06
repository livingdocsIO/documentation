## /users Endpoint
### PUT /users/:id
Update a user entity. The complete user will get **overwritten**.
Admins can update a password here.
This endpoint is only accessible by admins and the user itself.
`Request`:
```js
{
  "id": 1,
  "email": "marc@upfront.io",
  "first_name": "Marc",
  "last_name": "Bachmann",
  "profile": {},
  "password": "plain text password" // only working for admins
}
```

### POST /users/me/password
Set a new password of a user. Password confirmation must be done in the user interface.
We can also allow a password reset token instead of a current password.
Request
```json
{
  "current_password": "oldpassword",
  "new_password": "newpassword"
}
```
Respond with 200 on success, 400 on a failure.

### GET /users/:id/reset
**(won't be implemented for now because we need more details on how we'll use it)**
Get a password reset token that can be used in a subsequent request to reset a password of a user.
This request needs admin permission.
```json
{
  "token": "AGls6uebQGyv5aD47PUDcI2dpROrFz0UPmHij21Z"
}
```
Respond with 200 on success.
On success an 'user:reset' event will be sent. We can use EventEmitters to trigger actions.

### POST /users/:id/reset
(won't be implemented for now because we need more details on how we'll use it)
Redeem a password reset token to set a password

### DELETE /users/:id
Admins can delete users.  
Documents will get deleted.  
StatusCode 204 on success.
