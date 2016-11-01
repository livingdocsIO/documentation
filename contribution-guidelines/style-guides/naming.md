## Naming conventions

The following naming conventions apply to projects when owned by Livingdocs.

| Thing | Convention | Livingdocs example | Customer example |
| --- | --- | --- | --- |
| Repository | `upfrontIO/<namespace>-<project>` | `upfrontIO/livingdocs-server` or `upfrontIO/livingdocs-service-server` | `upfrontIO/bluewin-server` |
| Git tag name | vX.Y.Z | v1.0.0 | v1.0.0 |
| Npm package | `@livingdocs/<namespace>-<project>` | `@livingdocs/server` or `@livingdocs/service-server` | `@livingdocs/bluewin-server` |
| Docker image | livingdocs/<namespace>-<project> | `livingdocs/server` or `livingdocs/service-server` | `livingdocs/bluewin-server` |
| Docker tags | `latest`, branch name, tag name or environment | | |
| Rancher environment | `<namespace>` | `livingdocs` | `bluewin` |
| Rancher stack | `<environment>` | `staging` | `staging` |

### Project

The name of the project, eg. `editor`, `server`, `framework`.

### Namespace

For external projects, use the customer name, eg, `bluewin`.
For internal projects, use `livingdocs`. If there are multiple internal instances, use `livingdocs-<instance>`.
If parts of the namespace cause redundant parts in the final name, they can be left out. Eg. `livingdocs/livingdocs-server` is just `livingdocs/server`.
