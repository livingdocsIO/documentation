---
name: write-trn-breaking-change
description: Write a Breaking Change entry for a Livingdocs Technical Release Note (TRN) and insert it into the correct release file. Use this skill whenever a developer wants to document a breaking change, mentions "write breaking change", "add breaking change to release notes", or provides PR URLs and asks to document a breaking change for a specific release (e.g. "write the breaking change for release-2026-05"). This skill handles the full workflow: gathering PR details, writing the entry with Detect/Fix sub-sections, and inserting it into the release file.
---

# Write TRN Breaking Change Entry

Breaking changes are the most upgrade-critical section of the TRN. Each entry must be detectable and fixable from its own text — an AI agent or operator should be able to walk through Breaking Changes and apply each fix without consulting other documentation.

Before drafting, skim `.claude/trn-format-reference.md` to confirm the canonical entry shape — that file is the source of truth for structure and tone. This skill describes the workflow; the reference describes the format.

## Step 1: Gather inputs

Ask **one question at a time** — wait for each answer before asking the next:

1. **Release** — identifier in `release-YYYY-MM` format. Accept plain year/month and normalise it yourself.
2. **GitHub PR URLs** — ask whether they'd like to add all URLs at once or one at a time. If one at a time: ask for the first URL, then ask "Any more PRs? (say 'done' to continue)" and keep collecting until done. If all at once: accept a list of URLs in a single message.
3. **Notion requirement URL** — original requirement page (if available). Say "none" to skip.
4. **Additional context** — free-form notes from the developer about the breaking change. Optional.

## Step 2: Read the sources

- Fetch each GitHub PR: title, description, linked issues, code diff. Pay attention to:
  - Which config properties, API endpoints, or source-level imports are affected.
  - The old shape vs. the new shape (verbatim — Detect and Fix lines must use the exact property names from the code).
  - Whether the change is mechanical (e.g. property rename, key move) or judgment-based (e.g. semantic conflict where the user must choose).
- If a Notion URL was provided, fetch it to understand the original motivation.
- Read the existing `## Breaking Changes :fire:` section in `content/operations/releases/<release-identifier>.md` to calibrate tone and to confirm the change isn't already documented.

## Step 3: Write the breaking change entry

Use this format (see `.claude/trn-format-reference.md` for the canonical contract):

```markdown
### Title in Sentence Case

One or two short paragraphs explaining what changed and why. May include inline code snippets, tables, or example configurations that illustrate the change. No icon on the title.

#### Detect

A grep-ready statement. Lead with the location only when the property path doesn't make it obvious.

#### Fix

Mechanical instructions when possible. Use a table for property-rename mappings. Surface judgment calls as plain advice, addressing the human reader.
```

### Writing guidelines

#### Detect line

- Must be specific enough that a reader can derive a `grep` or a static analysis check from it.
- Name the exact property paths, file types, or string patterns to look for.
- Lead with location ("In the server config…", "In server project source code…") only when the path doesn't make it self-evident.
- If multiple conditions trigger, list them as bullets under an "either of" / "any of" clause.

#### Fix line

- Mechanical changes: spell out the old → new mapping. Use a markdown table when the mapping has more than two rows.
- Judgment calls: do **not** address the agent directly ("surface to the user", "do not auto-rewrite"). Instead, describe the decision the human reader needs to make in plain prose ("Which option is correct depends on the meaning of the field, so review each conflict before changing it").
- If a data migration is needed: say so, and point at Livingdocs support if appropriate.

#### Title

- Sentence case. No icon (`:fire:` lives on the `##` section heading only).
- Should name the affected thing concretely (`Removal of li-target-length UI Config Properties` not `UI Improvements`).

#### Prose intro

- One or two short paragraphs. Same content a human reader of the marketing release notes would expect.
- Inline code samples and tables belong in the prose intro, not duplicated under Detect / Fix.

## Step 4: Ask for feedback

Show the draft to the developer:

> _"Here's the draft. Does it look right? Anything to adjust — wording, missing edge cases, or the Detect/Fix specificity?"_

Apply any requested changes. If the developer flags the entry as a deprecation rather than a breaking change, switch to the `write-trn-deprecation` skill instead.

## Step 5: Insert into the release notes file

1. Open `content/operations/releases/<release-identifier>.md`.
2. Locate `## Breaking Changes :fire:`.
3. Append the entry at the end of that section, before the next `##` heading.
4. Save and confirm to the developer.

## Step 6: Sanity-check after insertion

Quickly verify:

- The new entry's `###` heading has **no** `:fire:` icon (icon is on the `##` section heading only).
- The Detect line names a concrete property / pattern / file type.
- The Fix line is either mechanical or explicitly flags judgment as plain advice (not agent-directed).
- No `#### Applies to` sub-heading was added (location lives in the Detect line).

If any check fails, surface it to the developer and propose a fix before closing.
