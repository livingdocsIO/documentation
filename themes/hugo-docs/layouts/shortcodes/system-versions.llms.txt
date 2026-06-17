| Name | Version |
| ---- | ------- |

{{ range index .Page.Params.systemRequirements (.Get "list") -}}
| {{ .name }} | {{ .version }} |
{{ end -}}
