---
type: guides
title: Access Rights and Groups
description: Learn how to manage groups and their permissions.
weight: 1
---

In Livingdocs, access rights are set on a group. A group is a many-2-many relation of users to projects.
So in general for a given project you will have many groups. One group, the "Owners" group is always created by default.
The screenshot below shows you how to set the access rights for a given group.

{{< img src="access-rights.png" alt="Access Rights" >}}

_You reach this screen by clicking on "Preferences" > "Project Admin" > "Groups" in the main menu_

## Scopes and Policies

Livingdocs has scopes and policies which define granular system level access controls. Scopes define high-level api access like `Manage menus` or `View lists`, whereas the policies define content-specific access like `Create documents of contentType regular` or `Read documents of contentType page`.
Users inherit the permission of the specific groups they get assigned to.

All permissions are additive, so if a user is in two groups, the user will have the permissions of both groups.
