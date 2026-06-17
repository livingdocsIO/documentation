# TRN Format Reference

Canonical content shape for Livingdocs Technical Release Notes (TRN). Consulted by the `write-trn-*` and `cleanup-trn` skills. Not user-facing.

## Audience

TRN entries are read by two audiences:

- **Operators** doing the upgrade — humans who need to know what to change and why.
- **AI agents** driving an upgrade from the TRN content — they parse Breaking Changes and Deprecations to derive a checklist of actions.

Write for both. Plain prose carries the explanation; structured sub-headings carry the action contract.

## Top-level section structure

A clean TRN has the following sections in this order. Sections may be empty (e.g. "No migrations are required") but should be present.

```
## Webinar
## System Requirements
## Deployment
## Breaking Changes :fire:
## Deprecations :warning:
## Features :gift:
## Vulnerability Patches
## Patches
```

### The fixed sections

`## Webinar`, `## System Requirements`, `## Deployment`, `## Vulnerability Patches`, and `## Patches` follow the standard scaffold in `content/operations/releases/_release-template.md` — copy it and fill in the release's specifics rather than re-deriving the structure. Two things worth knowing:

- **`## System Requirements`** is rendered from the page's `systemRequirements` front matter via `{{< system-versions list="…" >}}` — edit the front matter, not the rendered list.
- **`## Deployment`** is action-bearing (migrations and ordering live here). Keep all four sub-sections and state "No … required" explicitly when one is empty.

### Icon rules

Icons appear on the section heading (`##`), never on individual entry headings (`###`).

- `:fire:` — `## Breaking Changes`
- `:warning:` — `## Deprecations`
- `:gift:` — `## Features`

Putting the icon on the entry heading is wrong and creates noise. The section heading carries the semantic.

## Breaking Change entry shape

```markdown
### Title in Sentence Case

**Code:** `LIBREAKING000`

Prose explaining what changed and why (the same content that would appear in a human-facing newsletter). Be exhaustive: a breaking change is the most upgrade-critical content, so include enough detail, examples, and references that an operator can act without asking follow-up questions. Include a concrete before/after comparison (old shape → new shape) as an inline code snippet or table whenever the change alters a config, API, or code shape.

#### Detect

A statement an agent (or human) can turn into a real search: the location plus a literal pattern. Lead with the location when the property path doesn't make it obvious. Examples:

- "In the server config, `mediaLibrary.use2025Behavior` is `true` AND any of `failOn`, `convert`, `lossy`, or `lossless` is set under `mediaLibrary.images.processing`. Search for `(failOn|convert|lossy|lossless)\s*:` and confirm each hit sits under `processing`."
- "In server project source code, a `require()` or `import` referencing `@livingdocs/<pkg>/lib/`. Search for `@livingdocs/[^'\"]+/lib/`."

#### Fix

Mechanical instructions when possible. Use a table for property-rename mappings. Flag judgment calls in plain advice form ("Which option is correct depends on the meaning of the field, so review each conflict before changing it"). Never address the agent directly ("surface to the user", "do not auto-rewrite") — instead describe the constraint as advice the human reader would also benefit from.
```

### Rules

- Title is plain text, no icon, sentence case. Name the affected thing concretely (`Removal of li-target-length UI Config Properties`, not `UI Improvements`).
- Two `####` sub-headings only: `Detect` and `Fix`. No `Applies to` or other fields — the location lives in the Detect line.
- Both Detect and Fix are required for every entry.
- **Detect must be greppable.** A dot-path like `mediaTypes[].editor.dashboard` describes structure, not a search string — searching `.dashboard` won't find the `dashboard:` key. State the literal token that actually appears in the config (usually the leaf key as written) plus the context needed to disambiguate it from unrelated matches, and give a ready-to-run grep/ripgrep regex when the match is non-obvious.
- When more than one condition triggers the issue, list them as bullets under an "either of" / "any of" clause in the Detect line.
- **Code line.** Most entries emit a runtime notification — a `LivingdocsBreakingChange` (code prefix `LIBREAKING`) for breaking changes, or a `LivingdocsDeprecation` (code prefix `LIDEP`) for deprecations. Put the code on a `**Code:**` line directly below the heading, before the prose. This is the identifier operators see in server logs, and the key an agent uses to map a log line to this entry. Take the value verbatim from the `create({type, code})` call in the source (or from the developer) — don't invent one. Some changes emit several related codes (e.g. one per affected property: `LIBREAKING064-failOn`, `LIBREAKING064-convert`, …); list them all on a `**Codes:**` line, or express the shared pattern. Omit the line entirely when there is no runtime code (e.g. static-only concerns like direct `lib/` imports).
- The prose intro should include the inline code samples / tables / config examples that illustrate the change, and a before/after comparison whenever the change alters a config, API, or code shape. Detect and Fix should not duplicate those — they refer back to the prose.
- Favour exhaustiveness over brevity here (unlike Feature entries, which stay minimal): include the detail, examples, and references needed to act without follow-up questions.
- Link to the relevant guide or reference page when one exists (e.g. a replacement's documentation) — as a supplement to, not a substitute for, the self-contained Detect/Fix.
- For a mechanical Fix, spell out the old → new mapping (use a table when it has more than two rows). If a Fix requires a data migration, say so explicitly and point at Livingdocs support when appropriate.
- "Risk if skipped" is implicit: every entry under `## Breaking Changes :fire:` is upgrade-blocking. No need to restate.

## Deprecation entry shape

A deprecation is a breaking change announced ahead of time: identical `Detect` / `Fix` structure, with one addition — the prose intro names the **planned removal release** (e.g. "will be removed in `release-2026-11`") so the reader can act before it breaks.

```markdown
### Title in Sentence Case

**Code:** `LIDEP000`

Project config property `X` is deprecated and will be removed in `release-YYYY-MM`. <Reason / replacement guidance>.

#### Detect

<Location + pattern>.

#### Fix

<Mechanical or discretionary instructions, in plain advice form>.
```

### Rules

- All Breaking Change rules above apply (title, greppable Detect, Code line, before/after, exhaustiveness).
- Always name the planned removal release in the prose intro. Open-ended deprecations (no fixed removal release announced) state that explicitly.

## Feature entry shape

```markdown
### Feature Name

A short, value-first intro — what users can now do and why it matters. State whether the feature is auto-available or needs configuration.

[Config or API diff — only when activation/config is required; show only the diff, in a `js`/`json` block.]

[{{< img src="release-YYYY-MM-description.png" alt="…" width="600" >}} — for UI-facing features.]

For more information, see the [Label]({{< ref "/path/to/doc" >}}) documentation.
```

For features with several distinct parts or steps, use `####` sub-sections. Include a before/after when the feature changes existing familiar behaviour.

### Rules

- Title is plain text, sentence case, no icon.
- Lead with user value; keep the intro high-level and link to docs rather than repeating them.
- Always state activation status (auto-available vs requires config) — getting this wrong misleads readers. Show only the config diff when activation is needed.
- Use screenshots for UI-facing features (`{{< img >}}` with meaningful alt text). Include a before/after when the feature changes existing behaviour.
- If the feature replaces something deprecated, say so briefly and link it (`{{< ref "/path" >}}` for internal docs, `{{< release "release-YYYY-MM" >}}` for other releases).
- For non-trivial setup, add: _"Reach out to your customer solutions contact for help getting started."_
- Tone: "more Sales, less Packungsbeilage" — short, punchy, value-focused. Use regular hyphens (`-`).

## Vulnerability Patches and Patches sections

Both are **informational only** — no per-entry action is required from the reader beyond keeping the deployment on a current patch version. Don't extract upgrade actions from either. (Their structure lives in the release template; this is the semantic contract.)

`## Vulnerability Patches` lists security advisories (CVE / GHSA), split into `### Livingdocs Server` and `### Livingdocs Editor`. Each entry is either a vulnerability patched in this release or one we are aware of but have not patched, with a short note on impact (e.g. why it is not exploitable in Livingdocs). Use "No known vulnerabilities. :tada:" for a component with none.

`## Patches` lists bug fixes and improvements shipped as patch versions after the release was announced, split into `### Livingdocs Server Patches` and `### Livingdocs Editor Patches`, each entry linking the version tag and its PR/commit title.

Patch commit messages occasionally read like breaking changes (e.g. "add breaking change to not use X"). The standard explanation is that the patch implements a breaking change already announced in this release's Breaking Changes section, or — rarely — a real breaking change merged when no customers were affected. Do not extract upgrade actions from the Patches section.

## Tone conventions across all sections

- **Address the human reader, not the agent.** Write "review each conflict before changing it," not "surface the conflict to the user."
- **Use plain English for judgment calls.** "This is not a mechanical rename" reads like instructions for an agent. Prefer descriptive framing like "Because this replaces one property with a reference to a separate dashboard definition, each affected content type needs a deliberate choice of which dashboard to point at."
- **Lead with what changed, not the change history.** The TRN is the record; the change log is in commit history.

## Anchor links

Hugo has `enableEmoji: true`, and the auto-generated heading slug keeps the icon's name (the colons are dropped, the word stays). So **section** headings, which keep their icon, generate a suffixed slug:

- `## Breaking Changes :fire:` → `#breaking-changes-fire`
- `## Deprecations :warning:` → `#deprecations-warning`
- `## Features :gift:` → `#features-gift`

When linking to a section, include that suffix — it is part of the slug. **Entry** headings (`###`) carry no icon, so their slugs are clean: `#removal-of-li-target-length-ui-config-properties`.

A `-fire` / `-gift` / `-warning` suffix on a link is valid only if the target heading still carries that icon. Check each link against its actual target before changing it — don't strip the suffix blindly.

## What to leave out

- Per-entry "Risk if skipped" or "Applies to" sub-headings — redundant with the `:fire:` / `:warning:` icon and the Detect line.
- Full JSON / schema dumps in Feature entries — show only the relevant config diff and link to the reference for the rest.
- Notes that are essentially commit-message rot ("introduced in PR #123", "see issue X"). The PR list and patches section already cover this.
- Emoji in entry headings.
