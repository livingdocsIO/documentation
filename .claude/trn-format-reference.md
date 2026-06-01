# TRN Format Reference

Canonical content shape for Livingdocs Technical Release Notes (TRN). Consulted by the `write-trn-*`, `review-trn`, and `cleanup-trn` skills. Not user-facing.

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

### Icon rules

Icons appear on the section heading (`##`), never on individual entry headings (`###`).

- `:fire:` — `## Breaking Changes`
- `:warning:` — `## Deprecations`
- `:gift:` — `## Features`

Putting the icon on the entry heading is wrong and creates noise. The section heading carries the semantic.

## Breaking Change entry shape

```markdown
### Title in Sentence Case

One or two short paragraphs of prose explaining what changed and why (the same content that would appear in a human-facing newsletter). May include code snippets or tables that illustrate the change.

#### Detect

A grep-ready statement that names the location and the pattern an agent (or human) can search for. Lead with the location when the property path doesn't make it obvious. Examples:

- "In the server config, `mediaLibrary.use2025Behavior` is `true` AND any of `mediaLibrary.images.processing.failOn`, `.convert`, `.lossy`, or `.lossless` is set."
- "In server project source code, imports matching `@livingdocs/*/lib/` in either `require()` or `import` form."

#### Fix

Mechanical instructions when possible. Use a table for property-rename mappings. Flag judgment calls in plain advice form ("Which option is correct depends on the meaning of the field, so review each conflict before changing it"). Never address the agent directly ("surface to the user", "do not auto-rewrite") — instead describe the constraint as advice the human reader would also benefit from.
```

### Rules

- Title is plain text, no icon, sentence case.
- Two `####` sub-headings only: `Detect` and `Fix`. No `Applies to` or other fields — the location lives in the Detect line.
- Both Detect and Fix are required for every entry.
- The prose intro may include the inline code samples / tables / config examples that illustrate the change. Detect and Fix should not duplicate those — they refer back to the prose.
- "Risk if skipped" is implicit: every entry under `## Breaking Changes :fire:` is upgrade-blocking. No need to restate.

## Deprecation entry shape

Identical structure to a breaking change, with two differences:

- The prose intro names the **planned removal release** (e.g. "will be removed in `release-2026-11`") so the reader can plan timing.
- The Fix may legitimately be discretionary ("rename the dashboard to a non-reserved handle" — the user picks).

```markdown
### Title in Sentence Case (or `code identifier`)

Project config property `X` is deprecated and will be removed in `release-YYYY-MM`. <Reason / replacement guidance>.

#### Detect

<Location + pattern>.

#### Fix

<Mechanical or discretionary instructions, in plain advice form>.
```

### Rules for the special "opt-in deprecation" case

Some deprecations announce a future default-behaviour change rather than a property removal (example: `publicApi.executeDocumentCommands()` write-model return value). For these:

- Prose intro names the **expected timeframe** when known, or states "no fixed removal release has been announced" if not.
- Fix instructs the user to opt in via the appropriate `apiVersion` parameter or equivalent.

## Feature entry shape

```markdown
### Feature Name

**Automatic** — One or two sentences describing what users can now do, followed by a link to the relevant guide or reference page.
```

Three variants of the leading tag:

- **Automatic** — feature works on upgrade with no config change needed.
- **Configurable** — feature requires a project or server config change to use.
- **Automatic / Configurable** — feature ships working but has optional config to tune (use only when both genuinely apply).

### Rules

- Title is plain text, no icon, sentence case.
- One short paragraph. No code samples. No screenshots. No `####` sub-headings.
- The bold tag is the first text of the body, followed by an em-dash and the description.
- Always end with a link to a guide or reference page. Detailed configuration, schemas, and walkthroughs belong in those pages, not in the TRN.
- When a feature is the new replacement for a deprecated feature, link to the deprecation's anchor inline ("Replaces the previous behaviour where X, which is now [deprecated](#anchor)").

### Why this format

Features in the TRN exist to **announce that something is new and tell the reader whether they need to act**. They do not exist to teach the feature. Guides and reference pages are the source of truth for usage; the TRN is the dated record of "this shipped." Inline walkthroughs duplicate the guide content and rot when the guide is updated.

## Patches section

The `## Patches` section is **informational only**. Patches typically fix bugs and apply improvements within the current release — no per-patch action is required from the user beyond bumping the version.

The intro paragraph should reflect that contract:

> Patches typically fix bugs and apply improvements within the current release. Keeping your deployment up-to-date with the latest patch version means you benefit from those fixes. No explicit action is required per patch — bumping the version is enough.

Patch commit messages occasionally read like breaking changes (e.g. "add breaking change to not use X"). The standard explanation is that the patch implements a breaking change already announced in this release's Breaking Changes section, or — rarely — a real breaking change merged when no customers were affected. Do not extract upgrade actions from the Patches section.

## Tone conventions across all sections

- **Address the human reader, not the agent.** Write "review each conflict before changing it," not "surface the conflict to the user."
- **Use plain English for judgment calls.** "This is not a mechanical rename" reads like instructions for an agent. Prefer descriptive framing like "Because this replaces one property with a reference to a separate dashboard definition, each affected content type needs a deliberate choice of which dashboard to point at."
- **Lead with what changed, not the change history.** The TRN is the record; the change log is in commit history.
- **Use hyphens (`-`) not em-dashes (`—`) when the skill instructions say so**, otherwise either is fine. Be consistent within a file.

## Anchor links

When linking from a guide or another release to a TRN section, point at the heading slug only — not the icon suffix. The `## Breaking Changes :fire:` section heading generates `#breaking-changes` (the icon is stripped by Hugo). Individual entry headings have no icons, so their slugs are clean: `#removal-of-li-target-length-ui-config-properties` rather than `#removal-of-li-target-length-ui-config-properties-fire`.

If you encounter an inbound link with `-fire`, `-gift`, or `-warning` suffix from older releases, it is broken if the target TRN has been updated to remove icons from entry headings. Fix the inbound link, not the heading.

## What to leave out

- Per-entry "Risk if skipped" or "Applies to" sub-headings — redundant with the `:fire:` / `:warning:` icon and the Detect line.
- Full configuration walkthroughs in Feature entries — link to the guide instead.
- Full JSON / schema dumps in Feature entries — link to the reference page instead.
- Notes that are essentially commit-message rot ("introduced in PR #123", "see issue X"). The PR list and patches section already cover this.
- Emoji in entry headings.
