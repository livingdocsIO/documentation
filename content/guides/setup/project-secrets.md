---
title: Managing project secrets
description: Project secrets management guide
weight: 6
---

In Livingdocs, all the integration configurations are stored within the project configuration. The project configuration gets serialized and sent to the editor and other third party clients. Secrets can be leaked when sent to client side applications, hence we recommend using secrets outside this configuration and reference it within the project configuration. Secrets are encrypted using an encryption key, shared in the server and persisted into Postgres.

## Usage

This step requires having done the encryption keys setup, see [Initial Server Setup](#initial-server-setup).

To create the secret and update it to the Livingdocs Server's database use:
```bash
$ livingdocs-server secret-add --project=handle --name=secretname --value=secretvalue -y
# We recommned using a standarized `secretName` to make management easier during operations, e.g. `secret-YYYY-MM`
```

Reference those secrets using `{"$secretRef": {"name": "secretname"}}` in the project config. The code will handle that explicitly.

For example for the imatrics integration if you use the following configuration:
```
imatrics: {
  ...
  key: {
    $secretRef: {name: 'secretname'}
  },
  ...
```
It will get converted internally to this:
```
imatrics: {
  ...
  key: 'secretvalue',
  ...
```

## Operations

### Initial Server Setup

You can enable project secrets in Livingdocs with the following project config:

```js
  projectConfigs: {
    secretEncryptionKeys: [
      // JSON Web Keys are used to declare the encryption algorithm
      {"kty":"oct","k":"RfYft7spYLuV4IpfRYyd12yOdJJ9hfmvgBRSOEUgub4","kid":"211011-L6KA","alg":"A256GCMKW","enc":"A256GCM","use":"enc"}
    ],
  }
```

To generate a new encryption key, we offer tools to generate it within the `livingdocs-server` utility:
```bash
$ livingdocs-server key-generate enc --alg dir --enc A256GCM
# Execute `livingdocs-server key-generate enc -h` to list all the encryption options
```

### Key rotation

If you want to rotate secrets, you can create a new encryption key and add it to the front of the `projectConfigs.secretEncryptionKeys` array.

```js
secretEncryptionKeys: [
  // Encryption key used for encryption
  {"kty":"oct","k":"7U6k5S_HXSujMpr2u7YjRkZLQO6LUK2vFYFHVbfNJ_g","kid":"220824-xmBI","alg":"dir","enc":"A256GCM","use":"enc"},
  // Encryption keys used for decryption only
  {"kty":"oct","k":"XY4J0qe3fkI_XrWsfKNVUl7paxltR-_KuYdS2XFmqRI","kid":"220824-DDS1","alg":"dir","enc":"A256GCM","use":"enc"},
  {"kty":"oct","k":"abBKmiI624FWw1B0yevJEI6AowC4AqDQbLkZx_pSmVM","kid":"220824-aiiA","alg":"dir","enc":"A256GCM","use":"enc"}
]
```

The first encryption key in the array will be used to encrypt the secrets. It is not recommended to remove the old key right away.
The other keys in the array will be used for decryption only. 
The `kid` attribute is used to find the correct decryption key for a certain value.
After the new encryption key is configured and deployed everywhere, you can reencrypt the secrets using:

```bash
$ livingdocs-server secret-reeencrypt
```
