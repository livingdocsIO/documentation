---
type: guides
title: Attribute Based Access Control
description: Use ABAC to extend the permission system.
weight: 3
---

Attribute Based Access Control (ABAC) is an authorization strategy that defines permissions (read/write) based on attributes (e.g. metadata properties).

## Alpha Stage

The implementation of ABAC is in an alpha stage and will change in the future. We might introduce more policies or even skip the feature again. Currently the config is defined on a group on the project access UI. It can also be defined within the [seeding config]({{< ref "/customising/server/project-seeding-api#configuration" >}}).

## Rules, actions and effects

Example Rule Configuration:
```js
{
  effect: 'DENY',
  action: 'metadata.update',
  resource: {handle: 'proofreading', attribute: 'priority'}
}
```

There are the two effects `ALLOW` and `DENY`, which control whether you can execute an `action` on a `resource`.

This is the sequence of how the policy framework evaluates if an `action` is allowed or denied on a specific `resource`:

```
1. Group 1 - explicit ALLOW / Group 2 - explicit DENY -> return ALLOW
2. explicit ALLOW                                     -> return ALLOW
3. explicit DENY                                      -> return DENY
4. no rule defined                                    -> return ALLOW
```
## Example of a policy config

With the following policy config a member of the group `Reader` is allowed to load the proofreading dashboard, but is not allowed to update a proofreading task.

```js
// seeding config
{
  // ...
  projects: [
    {
      // ...
      groups: [
        // ...
        {
          label: 'Readers',
          scope: ['articles:read'],
          policies: [
            // effect - 'ALLOW' or 'DENY' - access based on an action and a resource
            // action - what kind of action you want to do
            // resource - where you want to execute an action
            {effect: 'DENY', action: 'document.metadata.update', resource: {handle: 'proofreading', attribute: 'priority'}},
            {effect: 'DENY', action: 'document.metadata.update', resource: {handle: 'proofreading'}},
            {effect: 'ALLOW', action: 'dashboard.get', resource: {handle: 'kanban-proofreading'}}
          ]
        }
      ]
    }
  ]
}
```

## Supported actions

At the moment these actions are supported and will be evaluated client-side. All other policies are ignored and automatically result as `ALLOW` during an access request in the editor.

```js
// Update a metadata field
// handle = metadata property name
{
  effect: 'DENY',
  action: 'document.metadata.update',
  resource: {handle: 'proofreading'}
}

// Update a property of a metadata field
// handle = metadata property name
// attribute = property of metadata field
{
  effect: 'DENY',
  action: 'document.metadata.update',
  resource: {handle: 'proofreading', attribute: 'priority'}
}

// Read access to a dashboard
// handle = dashboard handle
{
  effect: 'DENY',
  action: 'dashboard.get',
  resource: {handle: 'kanban-proofreading'}
}
```
