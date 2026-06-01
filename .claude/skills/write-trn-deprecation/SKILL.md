---
name: write-trn-deprecation
description: Write a Deprecation entry for a Livingdocs Technical Release Note (TRN) and insert it into the correct release file. Use this skill whenever a developer wants to document a deprecation, mentions "write deprecation", "add deprecation to release notes", or provides PR URLs and asks to document a deprecation for a specific release (e.g. "write the deprecation for release-2026-05"). This skill handles the full workflow: gathering PR details, writing the entry with Detect/Fix sub-sections and a planned removal release, and inserting it into the release file.
---

# Write TRN Deprecation Entry

Deprecations announce future removals. They share the structure of Breaking Changes (`Detect` / `Fix` sub-sections) but differ in framing: deprecations name a **planned removal release** so the reader can schedule the migration, and the Fix may legitimately be discretionary.

Before drafting, skim `.claude/trn-format-reference.md` to confirm the canonical entry shape — that file is the source of truth for structure and tone. This skill describes the workflow; the reference describes the format.

## Step 1: Gather inputs

Ask **one question at a time** — wait for each answer before asking the next:

1. **Release** — identifier in `release-YYYY-MM` format where the deprecation is being introduced. Accept plain year/month and normalise it yourself.
2. **Planned removal release** — when will the deprecated property / API / behaviour be removed? Accept `release-YYYY-MM` format, or "no fixed removal release" if the deprecation is open-ended (e.g. an opt-in API default-behaviour change).
3. **GitHub PR URLs** — ask whether they'd like to add all URLs at once or one at a time. If one at a time: ask for the first URL, then ask "Any more PRs? (say 'done' to continue)" and keep collecting until done. If all at once: accept a list of URLs in a single message.
4. **Notion requirement URL** — original requirement page (if available). Say "none" to skip.
5. **Additional context** — free-form notes from the developer. Optional.

## Step 2: Read the sources

- Fetch each GitHub PR: title, description, linked issues, code diff. Pay attention to:
  - Which config property, API endpoint, or behaviour is being deprecated.
  - What the replacement is (different shape, opt-in flag, alternative property, etc.).
  - Whether the migration is mechanical (a property rename or move) or discretionary (the user chooses how to map the old usage to the new model).
- If a Notion URL was provided, fetch it to understand the original motivation.
- Read the existing `## Deprecations :warning:` section in `content/operations/releases/<release-identifier>.md` to calibrate tone and to confirm the deprecation isn't already documented.

## Step 3: Write the deprecation entry

Use this format (see `.claude/trn-format-reference.md` for the canonical contract):

```markdown
### Title in Sentence Case (or `code identifier`)

Project config property `X` is deprecated and will be removed in `release-YYYY-MM`. <Reason / replacement guidance>. <Optional: more context, link to the replacement guide or reference.>

#### Detect

A grep-ready statement that names the location and the pattern. Lead with the location only when the property path doesn't make it obvious.

#### Fix

Mechanical instructions when possible. When the migration is not a property rename — when the new model is a different shape — describe the decision in plain prose so the human reader understands the discretion involved.
```

### Writing guidelines

#### Prose intro

- **Always name the planned removal release** in the prose intro, e.g. "will be removed in `release-2026-11`".
- For open-ended deprecations (no fixed removal release announced), state that explicitly: "No fixed removal release has been announced, but the change is expected within roughly two years." Use the user-provided timeframe.
- One or two short paragraphs. Same content a human reader of the marketing release notes would expect.
- Link to the replacement guide / reference page if one exists.

#### Detect line

- Same rules as for breaking changes: must be specific enough to grep.
- Name the exact property path, file type, or string pattern to look for.

#### Fix line

- Mechanical migrations: spell out the old → new mapping. Use a table for multi-row mappings.
- Discretionary migrations: describe the decision the human reader needs to make. **Do not** address the agent directly ("surface to the user", "do not auto-rewrite"). Use plain prose framing, e.g. "Because this replaces one property with a reference to a separate dashboard definition, each affected content type needs a deliberate choice of which dashboard to point at."

#### Special case — opt-in default-behaviour changes

When the deprecation is a future default-behaviour change rather than a removal (e.g. an API method whose default return shape will change), the entry should:

- Explain the current vs. future default in the prose intro.
- State the expected timeframe (or "no fixed removal release announced").
- Include the opt-in mechanism (e.g. `apiVersion: 'YYYY-MM'`) as a short inline code sample.
- Fix instructs the user to pass the opt-in flag now, and update downstream code to consume the new return shape.

#### Title

- Sentence case. No icon (`:warning:` lives on the `##` section heading only).
- For deprecations of a single named property, the property identifier in backticks is acceptable as the entire title, e.g. `` ### `contentTypes[].editor.images.mediaTypes` ``.

## Step 4: Ask for feedback

Show the draft to the developer:

> _"Here's the draft. Does it look right? Anything to adjust — wording, the planned removal release, or the Detect/Fix specificity?"_

Apply any requested changes. If the developer flags the entry as a breaking change rather than a deprecation, switch to the `write-trn-breaking-change` skill instead.

## Step 5: Insert into the release notes file

1. Open `content/operations/releases/<release-identifier>.md`.
2. Locate `## Deprecations :warning:`.
3. Append the entry at the end of that section, before the next `##` heading.
4. Save and confirm to the developer.

## Step 6: Sanity-check after insertion

Quickly verify:

- The new entry's `###` heading has **no** `:warning:` icon (icon is on the `##` section heading only).
- The prose intro names a planned removal release (or explicitly states no fixed removal release).
- The Detect line names a concrete property / pattern / file type.
- The Fix line is either mechanical or explicitly frames judgment as plain prose (not agent-directed).
- No `#### Applies to` sub-heading was added (location lives in the Detect line).

If any check fails, surface it to the developer and propose a fix before closing.
