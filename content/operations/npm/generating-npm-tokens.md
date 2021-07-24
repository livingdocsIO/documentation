---
title: Generating npm tokens
---

You can find a pre-generated tokens with read access in the **secrets**

Only generate tokens if you really need to. You can create tokens on the [npm-website](https://www.npmjs.com/settings/~/tokens). You should also consider [revoking deprecated tokens](https://www.npmjs.com/settings/~/tokens).


## Read-only access

```sh
npm install -g get-npm-token
get-npm-token
```

Log in with a read-only user belonging to the organization.

## Write access

You should not need write access. Only generate tokens with write access if you know what you're doing.

```sh
npm install -g get-npm-token
get-npm-token
```

Log in with a write user belonging to the organization.


## Testing your token

Check if your setup is working by running `npm access ls-packages`

This should give you something like...

```json
{
  "@livingdocs/angular-slider": "read-only",
  "@livingdocs/framework": "read-only",
  "@livingdocs/jquery": "read-only",
  "@livingdocs/jquery.dragbetter": "read-only",
  "@livingdocs/migrate": "read-only",
  "@livingdocs/resrc.js": "read-only",
  "@livingdocs/server": "read-only"
}
```
