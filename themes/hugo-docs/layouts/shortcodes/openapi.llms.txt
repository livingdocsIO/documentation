{{- $versions := hugo.Store.Get "api-versions" -}}
{{- $currentVersion := index $versions 0 -}}
{{- /* Sideeffect: publish json file at path /openapi.json */ -}}
{{- $current := (resources.FromString "openapi.json" (partialCached "openapi-template.gotmpl" (dict "Site" $.Site "version" $currentVersion.version) $currentVersion.version)) -}}
{{- $publish := $current.Publish -}}
{{- $current.Permalink -}}
