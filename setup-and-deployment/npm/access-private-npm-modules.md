## Access @livingdocs organization on npm

## NPM tokens

To access private packages, you need a read access token. You can find a pre-generated tokens with read access in the **secrets**

## Access tokens

For **private repositories**, we add the read-only token to the `.npmrc` under source control.

```sh
echo "//registry.npmjs.org/:_authToken=<fill-in-your-token>" >> .npmrc
```

For **public repositories**, add the `.npmrc` file to the `.gitignore` and fetch the token from an environment variable.

```sh
export NPM_TOKEN=<fill-in-your-token>
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc
```

**Never add write tokens to the `.npmrc` file**

If you need to override a read-only token in the `.npmrc` file (eg. when you want to temporarily use a token with write access), you can pass the write token as cli arg.

```sh
npm --//registry.npmjs.org/:_authToken=<fill-in-your-write-token>
```
