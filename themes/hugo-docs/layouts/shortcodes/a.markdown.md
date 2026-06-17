{{- if .Get "ref" -}}
[{{ .Get "title" }}]({{ ref . (.Get "ref") }})
{{- else -}}
[{{ .Get "title" }}]({{ .Get "href" }})
{{- end -}}
