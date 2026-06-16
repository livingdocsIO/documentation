| Name | Server Version | Editor Version | Upcoming | Current | Maintained | Legacy |
| ---- | -------------- | -------------- | :------: | :-----: | :--------: | :----: |

{{- $page := .Site.Home }}
{{- range sort $.Site.Data.releases "sortId" "desc" }}
{{ $opts := dict "path" .key "outputFormat" "markdown" }}
| [{{ .name }}]({{ $page.Ref $opts }}) | {{ .key }}{{ with .serverVersion }} ({{ . }}){{ end }} | {{ .key }}{{ with .editorVersion }} ({{ . }}){{ end }} | {{ cond (eq .upcoming true) "✔" "✗" }} | {{ cond (eq .current true) "✔" "✗" }} | {{ cond (eq .maintained true) "✔" "✗" }} | {{ cond (eq .legacy true) "✔" "✗" }} |
{{- end }}
