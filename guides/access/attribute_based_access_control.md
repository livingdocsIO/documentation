# Attribute Based Access Control (ABAC)

Attribute Based Access Control (ABAC) is an authorization strategy that defines permissions (read/write) based on attributes (e.g. metadata properties).

## Alpha Stage

The implementation of ABAC is in an alpha stage and could change in the future. We might introduce more policies or even skip the feature again. Currently the config is defined in the server config, but it's thinkable to define policies in the future per user group in the UI.

## Effect

Example Configuration:
`{effect: 'DENY', action: 'metadata.update', resource: {handle: 'proofreading', attribute: 'priority'}}`


We defined two effects `ALLOW` and `DENY`, which controls if you can execute an `action` on a `resource`.

This is the sequence of how the policy framework evaluates if an `action` is allowed or denied on a specific `resource`:

1) Group 1 - explicit ALLOW / Group 2 - explicit DENY -> return ALLOW
2) explicit ALLOW                                     -> return ALLOW
3) explicit DENY                                      -> return DENY
4) no rule defined                                    -> return ALLOW


## Example

With the following policy config a member of the group `Reader` is allowed to load the proofreading dashboard, but is not allowed to update a proofreading task.

#### Example of a policy config
```js
// server config
policies: [
  {
    // when a user is assigned to a group 'Reader', the defined policies are evaluated
    group: 'Reader',
    policies: [
      // effect - 'ALLOW' or 'DENY' - access based on an action and a resource
      // action - what kind of action you want to do
      // resource - where you want to execute an action
      {effect: 'DENY', action: 'metadata.update', resource: {handle: 'proofreading', attribute: 'priority'}},
      {effect: 'DENY', action: 'metadata.update', resource: {handle: 'proofreading'}},
      {effect: 'ALLOW', action: 'dashboard.get', resource: {handle: 'kanban-proofreading'}}
    ]
  }
]
```

#### Implemented policies
At the moment these policies are implemented and will be evaluated. All other policies are ignored and automatically result as `ALLOW` during an access request in the editor.

```js
# Update a metadata field
// handle = metadata property name
{
  effect: 'DENY',
  action: 'metadata.update',
  resource: {handle: 'proofreading'}
}


# Update a property of a metadata field
// handle = metadata property name
// attribute = proerty of metadata field
{
  effect: 'DENY',
  action: 'metadata.update',
  resource: {handle: 'proofreading', attribute: 'priority'}
}


# Read access to a dashboard
// handle = dashboard handle
{
  effect: 'DENY',
  action: 'dashboard.get',
  resource: {handle: 'kanban-proofreading'}
}
```
