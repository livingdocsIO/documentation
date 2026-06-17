{{ range hugo.Store.Get "api-versions" -}}
{{- /* Sideeffect: publish json file at path /openapi-<version>.json */ -}}
{{- $resource := (resources.FromString (printf "openapi-%s.json" .version) (partialCached "openapi-template.gotmpl" (dict "Site" $.Site "version" .version) .version)) -}}
{{- $publish := $resource.Publish -}}
- **{{ .version }}:** [{{ $resource.Permalink }}]({{ $resource.Permalink }})
{{ end -}}
