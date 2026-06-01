---
name: write-trn-feature-section
description: Write a Feature section entry for a Livingdocs Technical Release Note (TRN) and insert it into the correct release file. Use this skill whenever a developer wants to document a new feature, asks to write or add a TRN entry, mentions "write feature section", "add a feature to the release notes", or provides PR URLs and asks to document a feature for a specific release (e.g. "write the TRN entry for release-2026-05"). This skill handles the full workflow: gathering PR details, classifying the feature as Automatic / Configurable, writing a thin entry, and inserting it into the release file.
---

# Write TRN Feature Section

Feature entries in the TRN are **announcements**, not tutorials. Each entry is one short paragraph that tells the reader what's new and whether they need to do anything, followed by a link to the guide or reference page where the detail lives. The TRN is the dated record of what shipped; guides and reference pages teach the feature.

Before drafting, skim `.claude/trn-format-reference.md` — that file is the source of truth for the entry shape and tone. This skill describes the workflow.

## Step 1: Gather inputs

Ask **one question at a time** — wait for each answer before asking the next:

1. **Release** — identifier in `release-YYYY-MM` format. Accept plain year/month and normalise it yourself.
2. **GitHub PR URLs** — ask whether they'd like to add all URLs at once or one at a time. If one at a time: ask for the first URL, then ask "Any more PRs? (say 'done' to continue)" and keep collecting until done. If all at once: accept a list of URLs in a single message.
3. **Notion requirement URL** — original requirement page (if available). Say "none" to skip.
4. **Activation classification** — required. Ask: _"Does this feature work automatically on upgrade, require a config change to use, or both? (Automatic / Configurable / Automatic / Configurable)"_

   The three valid answers map to the leading tag on the entry:
   - **Automatic** — feature works on upgrade with no config change.
   - **Configurable** — feature requires a project or server config change to use.
   - **Automatic / Configurable** — feature ships working but has optional config to tune. Use only when both genuinely apply.

   If the developer is unsure, ask one clarifying question. Getting this wrong misleads customers — never guess.
5. **Documentation link** — path under `/reference/` or `/guides/` that the entry should link to. If no doc page exists yet, ask whether one is planned and what its path will be. **Required** — every feature entry ends in a link.
6. **Additional context** — free-form notes from the developer (optional, e.g. cross-link to a related deprecation, special caveats).

## Step 2: Read the sources

- Fetch each GitHub PR: title, description, linked issues. Identify what users can now do — focus on benefit, not implementation.
- If a Notion URL was provided, fetch it to confirm the framing matches the original requirement.
- Read the existing `## Features :gift:` section in `content/operations/releases/<release-identifier>.md` to:
  - Confirm the feature isn't already documented.
  - Calibrate the level of detail used in neighbouring entries.

## Step 3: Write the entry

Use this format (see `.claude/trn-format-reference.md` for the canonical contract):

```markdown
### Feature Name

**<Tag>** — One or two sentences describing what users can now do. See the [<Link label>]({{< ref "/path/to/guide" >}}).
```

### Writing guidelines

#### Title

- Sentence case. No icon (`:gift:` lives on the `##` section heading only).
- Name the feature concretely. Prefer "Image Collections" over "Media Library Improvements".

#### Tag

- One of `**Automatic**`, `**Configurable**`, or `**Automatic / Configurable**` — exactly as written (bold, with spaces around the slash for the combined form).
- Always the first text of the body, followed by ` — ` and the description.

#### Body

- One short paragraph. Two sentences is usually enough.
- Lead with user value: what can the user now do? Not how the implementation works.
- **No code blocks.** No config snippets, no JSON payloads, no schema dumps. If a developer wants to show schema, they should add it to the reference page and link there.
- **No `####` sub-headings.** If the feature is complex enough that it needs sub-sections in the TRN, that's a signal to move the detail into the guide and link to it.
- **No screenshots.** Visuals belong in the guide.

#### Closing link

- Required. Use `{{< ref "/path/to/page" >}}` for internal docs.
- If a feature is the replacement for a deprecated feature in the same release, include an inline link to the deprecation's anchor as well: `Replaces the previous behaviour where X, which is now [deprecated](#anchor-of-deprecation)`.

#### Tone

- Sales-friendly but factual. "Curated, named sets of images for ongoing topics" is good. "Revolutionary new way to manage images" is bad.
- Plain hyphens (`-`) in body text and the em-dash (` — `) after the tag is fine — be consistent with neighbouring entries in the file.

## Step 4: Ask for feedback

Show the draft to the developer:

> _"Here's the draft. Does it look right? Anything to adjust — the activation tag, wording, or the link target?"_

Apply any requested changes.

## Step 5: Insert into the release notes file

1. Open `content/operations/releases/<release-identifier>.md`.
2. Locate `## Features :gift:`.
3. Append the entry at the end of that section, before the next `##` heading.
4. Save and confirm to the developer.

## Step 6: Sanity-check after insertion

Quickly verify:

- The new entry's `###` heading has **no** `:gift:` icon.
- The body opens with `**Automatic**`, `**Configurable**`, or `**Automatic / Configurable**`.
- The entry has no code blocks, no `####` sub-headings, and no `{{< img >}}` tags.
- The entry ends with a `{{< ref >}}` link.

If any check fails, surface it to the developer and propose a fix before closing.

## What changed from the previous version of this skill

This skill previously produced full prose feature entries with sub-sections, config blocks, and screenshots. As of release-2026-05 the TRN Features section is a thin index — entries are one-paragraph announcements pointing at guides for detail. If you encounter older TRN files (release-2026-03 and earlier) that still use the old format, leave them alone unless explicitly asked to convert them.
